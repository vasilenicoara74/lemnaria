// Modul Asistent AI Tâmplărie & Generator Automat de Modele 3D
import { PLANS } from '../data/plans.js';
import { WOODS, getWoodById } from '../data/woods.js';

export class WoodAICopilot {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;
    this.apiKey = localStorage.getItem('lemnaria_gemini_key') || '';
    this.messages = [
      {
        role: 'assistant',
        text: 'Salut! Sunt Maestrul Tău Tâmplar AI 🪚.\n\nTe pot ajuta cu:\n• Căutare idei & proiectare automată 3D (ex: *"Fă-mi o măsuță de cafea din stejar de 120x60cm"*)\n• Sfaturi pentru îmbinări, debitare și alegerea sculelor\n• Recomandări de finisaj (ulei, ceară, lac) și protecție umiditate\n\nCu ce vrei să începem astăzi?'
      }
    ];
  }

  render() {
    this.container.innerHTML = `
      <div class="row between" style="margin-bottom:8px;">
        <div>
          <h3 style="margin:0;">Atelier AI Copilot</h3>
          <span class="muted small">Asistență tehnică & modelare automată</span>
        </div>
        <button class="btn sm ghost" id="configKeyBtn">
          ${this.apiKey ? '🔑 API Setat' : '⚙️ Adaugă Cheie API'}
        </button>
      </div>

      <!-- Sugestii rapide -->
      <div class="chips" id="quickPrompts" style="margin-bottom:12px;">
        <button class="chip" data-q="Vreau o măsuță de cafea rustică din stejar de 1200x600x450mm">📐 Măsuță Cafea 3D</button>
        <button class="chip" data-q="Ce finisaj rezistent la apă îmi recomanzi pentru un blat de baie?">💧 Finisaj Blat Baie</button>
        <button class="chip" data-q="Cum calculez dilatarea lemnului masiv pe anotimpuri?">📐 Dilatare Lemn</button>
        <button class="chip" data-q="Dă-mi 5 idei de proiecte rapide din resturi de scândură">💡 Proiecte din Resturi</button>
      </div>

      <div class="chat" id="chatBox"></div>

      <div class="composer">
        <textarea id="aiInput" placeholder="Descrie ce vrei să construiești sau întreabă orice..." rows="1"></textarea>
        <button class="btn acc" id="sendAiBtn" style="padding:10px 14px;border-radius:18px;">Trimite</button>
      </div>
    `;

    this.renderMessages();
    this.bindEvents();
  }

  renderMessages() {
    const box = this.container.querySelector('#chatBox');
    if (!box) return;

    box.innerHTML = this.messages.map(m => `
      <div class="msg ${m.role === 'user' ? 'u' : 'a'}">
        ${m.html || m.text.replace(/\n/g, '<br>')}
      </div>
    `).join('');

    box.scrollTop = box.scrollHeight;
  }

  bindEvents() {
    const input = this.container.querySelector('#aiInput');
    const sendBtn = this.container.querySelector('#sendAiBtn');
    const keyBtn = this.container.querySelector('#configKeyBtn');

    const handleSend = () => {
      const q = input.value.trim();
      if (!q) return;
      input.value = '';
      this.sendUserMessage(q);
    };

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });

    // Quick prompts
    this.container.querySelectorAll('#quickPrompts .chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const q = btn.dataset.q;
        this.sendUserMessage(q);
      });
    });

    keyBtn.addEventListener('click', () => {
      this.promptApiKey();
    });
  }

  promptApiKey() {
    const current = this.apiKey;
    const key = prompt('Introdu cheia ta gratuită Google Gemini API (opțional, pentru răspunsuri AI live extinse). Dacă lași gol, aplicația folosește motorul intern de tâmplărie:', current);
    if (key !== null) {
      this.apiKey = key.trim();
      localStorage.setItem('lemnaria_gemini_key', this.apiKey);
      const btn = this.container.querySelector('#configKeyBtn');
      if (btn) btn.textContent = this.apiKey ? '🔑 API Setat' : '⚙️ Adaugă Cheie API';
      if (this.options.onToast) this.options.onToast(this.apiKey ? 'Cheie API salvată!' : 'Folosești motorul offline expert.');
    }
  }

  async sendUserMessage(text) {
    this.messages.push({ role: 'user', text });
    this.renderMessages();

    // Check for 3D modeling triggers
    const is3DRequest = /măsuță|masa|raft|biblioteca|casuta|cutie|ladita|banc|dulap|3d|modeleaza|dimensiuni/i.test(text);

    // Indicator de tastare
    this.messages.push({ role: 'assistant', text: 'Se generează soluția tehnică...', isTyping: true });
    this.renderMessages();

    try {
      let responseText = '';
      let generatedModelAction = null;

      if (this.apiKey) {
        // Apel live Gemini API
        responseText = await this.callGeminiAPI(text);
      } else {
        // Motor intern de cunoștințe tehnice offline
        const local = this.generateOfflineResponse(text);
        responseText = local.text;
        generatedModelAction = local.modelAction;
      }

      // Scoatem indicatorul de tastare
      this.messages.pop();

      let finalHtml = responseText.replace(/\n/g, '<br>');
      if (generatedModelAction) {
        finalHtml += `
          <div style="margin-top:10px;padding-top:10px;border-top:1px dashed #cbbfb2;">
            <div style="font-weight:700;margin-bottom:6px;">🚀 Model 3D Generat: ${generatedModelAction.title}</div>
            <a href="${generatedModelAction.link}" class="btn sm acc block">
              📐 Deschide în Studio 3D (${generatedModelAction.dimensions})
            </a>
          </div>
        `;
      }

      this.messages.push({ role: 'assistant', text: responseText, html: finalHtml });
      this.renderMessages();

    } catch (err) {
      this.messages.pop();
      this.messages.push({
        role: 'assistant',
        text: `Eroare la conexiunea AI: ${err.message}. Am activat automat modulul offline de tâmplărie.`
      });
      this.renderMessages();
    }
  }

  generateOfflineResponse(q) {
    const lower = q.toLowerCase();

    // 1. Cerere generare măsuță cafea
    if (lower.includes('masut') || (lower.includes('masa') && lower.includes('cafea'))) {
      const matchL = lower.match(/(\d{3,4})\s*(?:x|pe|lungime)/);
      const L = matchL ? parseInt(matchL[1]) : 1100;
      return {
        text: `Am configurat o **Măsuță de Cafea Robustă** din lemn masiv.\n\n• **Dimensiuni optime**: ${L} x 600 x 460 mm\n• **Specie recomandată**: Stejar sau Nuc (duritate mare, rezistență la zgârieturi)\n• **Îmbinări**: Traverse cu găuri de buzunar (pocket holes) și dibluri de fag\n• **Finisaj**: Ulei Hardwax mat (Osmo/Rubio) aplicat în 2 straturi pentru protecție termică și rezistență la cafea/vin.`,
        modelAction: {
          title: 'Măsuță de Cafea Parametrică',
          link: `#/design?plan=coffee-table&l=${L}&w=600&h=460&wood=stejar`,
          dimensions: `${L} x 600 x 460 mm`
        }
      };
    }

    // 2. Cerere raft / bibliotecă
    if (lower.includes('raft') || lower.includes('bibliotec') || lower.includes('etajer')) {
      return {
        text: `Am proiectat o **Bibliotecă Modulară Nordic** cu polițe reglabile.\n\n• **Dimensiuni**: 900 x 300 x 1800 mm\n• **Specie recomandată**: Frasin sau Pin curat (rezistență mecanică excelentă la încovoiere sub greutatea cărților)\n• **Sistem de susținere**: Găuri de 5mm la pas de 32mm cu știfturi de alamă\n• **Siguranță**: Prindere obligatorie în perete cu ancoră anti-răsturnare.`,
        modelAction: {
          title: 'Bibliotecă Nordic 3D',
          link: `#/design?plan=modular-bookshelf&l=900&w=300&h=1800&wood=frasin`,
          dimensions: '900 x 300 x 1800 mm'
        }
      };
    }

    // 3. Cerere căsuță păsări
    if (lower.includes('pasari') || lower.includes('casuta') || lower.includes('birdhouse')) {
      return {
        text: `Pentru căsuța de păsări, proporțiile sunt esențiale pentru siguranța puilor:\n\n• **Dimensiuni corp**: 180 x 180 x 260 mm\n• **Orificiu zbor**: Diametru exact de 32mm (ideal pentru pițigoi, previne prădătorii)\n• **Material**: Pin sau molid netratat chimic la interior\n• **Atenție**: Nu vopsiți interiorul! Podeaua trebuie prevăzută cu 4 găuri de drenaj condens.`,
        modelAction: {
          title: 'Căsuță Păsări Clasică',
          link: `#/design?plan=classic-birdhouse&wood=pin`,
          dimensions: '180 x 180 x 260 mm'
        }
      };
    }

    // 4. Cerere lădiță încălțăminte / boot tray
    if (lower.includes('incaltaminte') || lower.includes('pantofi') || lower.includes('ladit') || lower.includes('tava') || lower.includes('boot')) {
      return {
        text: `Modelul de **Tavă din Șipci pentru Hol** este ideal pentru uscarea rapidă a încălțămintei:\n\n• **Dimensiuni**: 800 x 380 x 120 mm (încap 3-4 perechi)\n• **Spațiu între șipci**: 12mm pentru flux continuu de aer\n• **Finisaj recomandat**: Ulei de in fiert sau lazură impermeabilizantă\n• **Picioare**: Tălpi de cauciuc pentru a proteja parchetul de umezeală.`,
        modelAction: {
          title: 'Tavă Șipci Încălțăminte',
          link: `#/design?plan=slatted-boot-tray&wood=pin`,
          dimensions: '800 x 380 x 120 mm'
        }
      };
    }

    // 5. Finisaj baie / apă
    if (lower.includes('baie') || lower.includes('apa') || lower.includes('umezeal')) {
      return {
        text: `Pentru medii cu umiditate ridicată (blat de baie, bucătărie sau exterior):\n\n1. **Specii optime**: Salcâm, Stejar sau Larice (bogate în uleiuri și taninuri naturale anti-putrezire). Evitați fagul!\n2. **Adeziv**: Obligatoriu clasă D4 (poliuretanic sau PVAc rezistent la apă).\n3. **Finisaj**: Ulei naval de teck, ulei de in fiert (3 straturi) sau lac poliuretanic bicomponent 2K.\n4. **Important**: Lăsați 3-5mm joc de dilatare perimetral la montaj!`
      };
    }

    // 6. Dilatare lemn masiv
    if (lower.includes('dilat') || lower.includes('anotimp') || lower.includes('miscare')) {
      return {
        text: `Lemnul este un material higroscopic viu: își schimbă dimensiunile în funcție de umiditatea relativă a aerului (RH).\n\n• **Regula de aur**: Lemnul se dilată și se contractă transversal pe fibră (pe lățime), dar neglijabil în lungul fibrei (sub 0.1%).\n• **Calcul estimativ**: Un blat de stejar lat de 800mm se poate dilata/contracta cu 6-10mm între iarnă (aer uscat de calorifer) și vară!\n• **Soluție de montaj**: Nu încleiați și nu înșurubați rigid blaturile de traverse. Folosiți fante alungite sau cleme mobile tip Z (Tabletop Z-clips).`
      };
    }

    // 7. Proiecte din resturi
    if (lower.includes('resturi') || lower.includes('mici') || lower.includes('idei')) {
      return {
        text: `Iată 5 proiecte excelente din resturi de atelier:\n\n1. **Tocător de bucătărie din fibră terminală (End-grain)** – extrem de durabil și spectaculos vizual.\n2. **Suport minimalist pentru telefon/tabletă** – o simplă prismă de lemn cu fantă frezată la 15 grade.\n3. **Cutie rustică pentru ceaiuri sau bijuterii** cu îmbinare în unghi de 45° și ranforsări din furnir.\n4. **Organizator magnetic de perete pentru chei** – scândurică subțire cu magneți neodim îngropați pe spate.\n5. **Subpahare geometrice** – set de 6 bucăți din specii contrastante finisate cu ceară de albine.`
      };
    }

    // Răspuns general de expert
    return {
      text: `Pentru proiectul tău, recomand o planificare riguroasă a listei de debitare (Cut List) și a umidității lemnului (sub 10-12% pentru interior).\n\nAi nevoie de dimensiuni exacte pentru vreun mobilier anume sau vrei să simulăm modelul în **Proiectare 3D**?`
    };
  }

  async callGeminiAPI(prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`;
    const systemInstruction = `Ești un Maestru Tâmplar și Inginer Proiectant Lemn român, extrem de experimentat. Răspunde concis, practic și tehnic, adaptat pentru un ecran vertical de telefon. Oferă dimensiuni în milimetri, specii de lemn potrivite, sfaturi de siguranță și îmbinări.`;

    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemInstruction}\n\nÎntrebarea utilizatorului: ${prompt}` }]
        }
      ]
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Status ${res.status}`);
    }

    const json = await res.json();
    return json.candidates?.[0]?.content?.parts?.[0]?.text || 'Nu am primit răspuns.';
  }
}
