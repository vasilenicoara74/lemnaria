import { PROJECT_SVGS, getProjectIllustration } from './illustrations.js';
import { CATALOG_PLANS } from './catalog500.js';

export const FEATURED_PLANS = [
  // ==========================================
  // CASĂ & MOBILIER INTERIOR
  // ==========================================
  {
    id: 'slatted-boot-tray',
    title: 'Tavă din Șipci pentru Încălțăminte',
    roTitle: 'Tavă din Șipci pentru Încălțăminte',
    category: 'Home',
    tag: 'Beginner',
    timeMinutes: 45,
    difficulty: 'Începător',
    woodDefault: 'pin',
    image: PROJECT_SVGS['slatted-boot-tray'],
    description: 'Lădiță aerisită cu șipci din lemn de pin sau stejar, concepută pentru holul de la intrare. Permite scurgerea apei și uscarea rapidă a încălțămintei pe pietriș decorativ.',
    defaults: { length: 800, width: 380, height: 120, thickness: 18, slats: 6 },
    hardware: [
      { name: 'Șuruburi lemn 4x35mm zincate', qty: 24, unit: 'buc', estPriceRon: 6 },
      { name: 'Adeziv lemn D3 rezistent la apă', qty: 100, unit: 'ml', estPriceRon: 12 },
      { name: 'Tălpi cauciuc autoadezive', qty: 4, unit: 'buc', estPriceRon: 8 }
    ],
    tools: ['Ferăstrău circular / pendular', 'Bormașină', 'Șlefuitor', 'Ruletă'],
    steps: [
      { step: 1, title: 'Debitare piese cadru', text: 'Tăiați lateralele lungi (800mm), capetele scurte (344mm) și cele 6 șipci de fund la dimensiune.' },
      { step: 2, title: 'Șlefuire primară P120', text: 'Șlefuiți toate canturile înainte de asamblare pentru a fi ușor accesibile.' },
      { step: 3, title: 'Încleiere și înșurubare cadru', text: 'Aplicați adeziv D3 pe canturi și fixați șuruburile îngropate în zencuitor.' },
      { step: 4, title: 'Montaj șipci fund aerisite', text: 'Păstrați un distanțier calibrat de 12mm între fiecare șipcă pentru ventilație optimă.' },
      { step: 5, title: 'Tratament hidrofob', text: 'Aplicați 2-3 straturi de ulei de in fiert sau ulei hard-wax rezistent la apă și noroi.' }
    ],
    generateParts(p) {
      const L = p.length || 800, W = p.width || 380, H = p.height || 120, T = p.thickness || 18, slats = p.slats || 6;
      const innerW = W - 2*T, innerL = L - 2*T, slatW = Math.max(30, Math.floor((innerW - (slats-1)*12) / slats));
      return [
        { name: 'Laterale Lungi (Față/Spate)', qty: 2, length: L, width: H, thickness: T, material: 'Scândură pin' },
        { name: 'Capete Scurte Laterale', qty: 2, length: innerW, width: H, thickness: T, material: 'Scândură pin' },
        { name: 'Șipci Fund Aerisite', qty: slats, length: innerL, width: slatW, thickness: T, material: 'Șipcă pin' },
        { name: 'Traverse Suport Șipci', qty: 2, length: innerW, width: 25, thickness: T, material: 'Rigletă suport' }
      ];
    }
  },
  {
    id: 'shoe-storage-bench',
    title: 'Bancă de Hol cu Pantofar & Șezut',
    roTitle: 'Bancă de Hol cu Pantofar & Șezut',
    category: 'Home',
    tag: 'Trending',
    timeMinutes: 120,
    difficulty: 'Mediu',
    woodDefault: 'stejar',
    image: PROJECT_SVGS['shoe-storage-bench'],
    description: 'Bancă robustă pentru holul casei cu două polițe aerisite pentru pantofi și șezut confortabil din lemn masiv cu opțiune de pernă tapițată.',
    defaults: { length: 950, width: 380, height: 480, thickness: 22 },
    hardware: [
      { name: 'Șuruburi pocket-hole Kreg 2.5"', qty: 28, unit: 'buc', estPriceRon: 18 },
      { name: 'Dibluri lemn fag 8x35mm', qty: 20, unit: 'buc', estPriceRon: 6 },
      { name: 'Adeziv lemn Titebond II', qty: 200, unit: 'ml', estPriceRon: 18 },
      { name: 'Tălpi pâslă parchet', qty: 4, unit: 'buc', estPriceRon: 6 }
    ],
    tools: ['Circular', 'Ghidaj Pocket Hole', 'Menghine', 'Șlefuitor orbital'],
    steps: [
      { step: 1, title: 'Construcție cadre picioare', text: 'Îmbinați cele 4 picioare de 45x45mm cu traversele de rigidizare.' },
      { step: 2, title: 'Montare polițe pantofi', text: 'Fixați cele două niveluri de șipci la înălțimile de 120mm și 280mm de la sol.' },
      { step: 3, title: 'Încleiere și fixare blat șezut', text: 'Fixați blatul din panou masiv de 22mm pe șasiu folosind cleme mobile Z.' }
    ],
    generateParts(p) {
      const L = p.length || 950, W = p.width || 380, H = p.height || 480, T = p.thickness || 22;
      return [
        { name: 'Blat Șezut Masiv', qty: 1, length: L, width: W, thickness: T, material: 'Stejar / Frasin' },
        { name: 'Picioare Masive', qty: 4, length: 45, width: 45, thickness: H - T, material: 'Grindă 45x45' },
        { name: 'Traverse Lungi Cadru', qty: 4, length: L - 90, width: 50, thickness: 22, material: 'Scândură stejar' },
        { name: 'Șipci Polițe Pantofi', qty: 8, length: L - 110, width: 45, thickness: 18, material: 'Șipcă stejar' }
      ];
    }
  },
  {
    id: 'coffee-table',
    title: 'Măsuță de Cafea Rustic-Modernă',
    roTitle: 'Măsuță de Cafea Rustic-Modernă',
    category: 'Home',
    tag: 'Trending',
    timeMinutes: 180,
    difficulty: 'Mediu',
    woodDefault: 'stejar',
    image: PROJECT_SVGS['coffee-table'],
    description: 'Măsuță de cafea robustă din lemn masiv de stejar sau frasin, cu picioare pătrate conice, traversă inferioară și blat masiv finisat cu ulei mat rezistent la pete.',
    defaults: { length: 1100, width: 600, height: 460, thickness: 28, legThickness: 60 },
    hardware: [
      { name: 'Șuruburi pocket-hole Kreg 64mm', qty: 32, unit: 'buc', estPriceRon: 20 },
      { name: 'Dibluri lemn fag 10x40mm', qty: 24, unit: 'buc', estPriceRon: 8 },
      { name: 'Clei lemn Titebond II', qty: 250, unit: 'ml', estPriceRon: 25 },
      { name: 'Ulei Hardwax mat', qty: 250, unit: 'ml', estPriceRon: 45 }
    ],
    tools: ['Ferăstrău circular', 'Rindea / Abric', 'Pocket hole jig', 'Menghine lungi'],
    steps: [
      { step: 1, title: 'Încleiere panou blat', text: 'Lipiți scândurile alternând inelele de creștere pentru a preveni curbarea.' },
      { step: 2, title: 'Fasonare picioare conice', text: 'Tăiați conicitatea de 1.5° pe fețele interioare ale picioarelor de 60x60mm.' },
      { step: 3, title: 'Asamblare șasiu și poliță reviste', text: 'Fixați traversele și polița inferioară.' },
      { step: 4, title: 'Finisare ulei hardwax', text: 'Aplicați 2 straturi de ulei cu șlefuire intermediară fină P240.' }
    ],
    generateParts(p) {
      const L = p.length || 1100, W = p.width || 600, H = p.height || 460, T = p.thickness || 28, legT = p.legThickness || 60;
      return [
        { name: 'Blat Panou Masiv', qty: 1, length: L, width: W, thickness: T, material: 'Stejar panou' },
        { name: 'Picioare Masive', qty: 4, length: legT, width: legT, thickness: H - T, material: 'Grindă stejar 60x60' },
        { name: 'Traverse Lungi (Aprons)', qty: 2, length: L - 2*legT - 40, width: 80, thickness: 22, material: 'Scândură stejar' },
        { name: 'Traverse Scurte (Aprons)', qty: 2, length: W - 2*legT - 40, width: 80, thickness: 22, material: 'Scândură stejar' },
        { name: 'Poliță Inferioară Reviste', qty: 1, length: L - 2*legT - 60, width: W - 2*legT - 60, thickness: 18, material: 'Panou stejar' }
      ];
    }
  },
  {
    id: 'modular-bookshelf',
    title: 'Bibliotecă Modulară Stil Nordic',
    roTitle: 'Bibliotecă Modulară Stil Nordic',
    category: 'Home',
    tag: 'Furniture',
    timeMinutes: 120,
    difficulty: 'Mediu',
    woodDefault: 'frasin',
    image: PROJECT_SVGS['modular-bookshelf'],
    description: 'Etajeră / bibliotecă scandinavă aerisită din lemn de frasin sau pin curat, cu polițe reglabile pe știfturi de alamă și ancorare sigură în perete.',
    defaults: { length: 900, width: 300, height: 1800, thickness: 20, shelves: 5 },
    hardware: [
      { name: 'Știfturi suport poliță din alamă 5mm', qty: 20, unit: 'buc', estPriceRon: 15 },
      { name: 'Colțare fixare perete anti-răsturnare', qty: 2, unit: 'buc', estPriceRon: 8 },
      { name: 'Confirmate 7x50mm', qty: 12, unit: 'buc', estPriceRon: 6 },
      { name: 'Ulei alb ultramat', qty: 500, unit: 'ml', estPriceRon: 55 }
    ],
    tools: ['Circular', 'Șablon găuri pas 32mm', 'Bormașină', 'Boloboc'],
    steps: [
      { step: 1, title: 'Găurire șir 32mm pentru polițe', text: 'Găuriți montanții laterali la pas de 32mm la adâncime de 9mm.' },
      { step: 2, title: 'Asamblare carcasă fixă', text: 'Fixați baza, topul și polița mediană structurală.' },
      { step: 3, title: 'Ancorare siguranță în perete', text: 'Fixați bridele superioare în dibluri de perete împotriva răsturnării.' }
    ],
    generateParts(p) {
      const L = p.length || 900, W = p.width || 300, H = p.height || 1800, T = p.thickness || 20, shCount = p.shelves || 5;
      const innerL = L - 2*T;
      return [
        { name: 'Laterale Verticale (Montanți)', qty: 2, length: H, width: W, thickness: T, material: 'Frasin panou' },
        { name: 'Placă Superioară (Top)', qty: 1, length: L, width: W, thickness: T, material: 'Panou frasin' },
        { name: 'Placă Inferioară (Bază)', qty: 1, length: innerL, width: W, thickness: T, material: 'Panou frasin' },
        { name: 'Poliță Mediană Fixă', qty: 1, length: innerL, width: W, thickness: T, material: 'Panou frasin' },
        { name: 'Polițe Mobile Ajustabile', qty: shCount - 2, length: innerL - 2, width: W - 10, thickness: T, material: 'Panou frasin' }
      ];
    }
  },
  {
    id: 'custom-cabinet',
    title: 'Dulap / Dressing Customizabil',
    roTitle: 'Dulap / Dressing Customizabil',
    category: 'Home',
    tag: 'Furniture',
    timeMinutes: 150,
    difficulty: 'Mediu',
    woodDefault: 'stejar',
    image: PROJECT_SVGS['custom-cabinet'],
    description: 'Corp de mobilier sau dulap complet configurabil din schiță 2D/3D. Include uși batante cu balamale amortizate, polițe și calcul automat al găurilor de confirmat.',
    defaults: { length: 800, width: 450, height: 1200, thickness: 18, shelves: 2, doors: 2 },
    hardware: [
      { name: 'Euro-șuruburi confirmate 7x50mm', qty: 24, unit: 'buc', estPriceRon: 12 },
      { name: 'Dibluri fag 8x35mm', qty: 16, unit: 'buc', estPriceRon: 5 },
      { name: 'Balamale aruncătoare soft-close 35mm', qty: 4, unit: 'buc', estPriceRon: 24 },
      { name: 'Picioare reglabile H=100mm', qty: 4, unit: 'buc', estPriceRon: 16 }
    ],
    tools: ['Burghiu treaptă confirmate 5/7mm', 'Freză Forstner 35mm', 'Inbus 4mm'],
    steps: [
      { step: 1, title: 'Găurire montanți conform cotei 37mm', text: 'Perforați lateralele conform desenului tehnic cotat generat automat.' },
      { step: 2, title: 'Asamblare corp și montaj spate PFL', text: 'Înșurubați capacul și baza, apoi fixați spatele PFL pentru rigidizare.' },
      { step: 3, title: 'Montaj și reglaj balamale uși', text: 'Frezați oalele de 35mm la 21.5mm de muchie și reglați rosturile.' }
    ],
    generateParts(p) {
      const W = p.length || 800, D = p.width || 450, H = p.height || 1200, T = p.thickness || 18;
      const innerW = W - 2 * T;
      const parts = [
        { name: 'Montanți Laterali Exteriori', qty: 2, length: H, width: D, thickness: T, material: 'Panou masiv / PAL' },
        { name: 'Capac Superior (Top)', qty: 1, length: innerW, width: D, thickness: T, material: 'Panou masiv / PAL' },
        { name: 'Fund Corp (Bază)', qty: 1, length: innerW, width: D, thickness: T, material: 'Panou masiv / PAL' }
      ];

      const cab = p.cabinetData;
      if (cab) {
        // Spate HDF
        if (cab.hasBack !== false) {
          parts.push({ name: 'Spate PFL / HDF 3mm', qty: 1, length: W - 4, width: H - 4, thickness: 3, material: 'HDF alb/lemn' });
        }
        // Montanți custom
        (cab.dividers || []).forEach((dv, idx) => {
          const y1 = typeof dv === 'object' && dv.y1 != null ? dv.y1 : T;
          const y2 = typeof dv === 'object' && dv.y2 != null ? dv.y2 : (H - T);
          const divH = Math.max(30, y2 - y1);
          parts.push({
            name: `Montant Despărțitor #${idx + 1}`,
            qty: 1,
            length: divH,
            width: D - 15,
            thickness: T,
            material: 'Panou masiv / PAL'
          });
        });
        // Polițe custom
        (cab.shelves || []).forEach((sh, idx) => {
          const x1 = typeof sh === 'object' && sh.x1 != null ? sh.x1 : T;
          const x2 = typeof sh === 'object' && sh.x2 != null ? sh.x2 : (W - T);
          const shL = Math.max(30, x2 - x1);
          parts.push({
            name: `Poliță Orizontală #${idx + 1}`,
            qty: 1,
            length: shL,
            width: D - 20,
            thickness: T,
            material: 'Panou masiv / PAL'
          });
        });
        // Uși custom
        (cab.doors || []).forEach((dr, idx) => {
          const x1 = dr.x1 != null ? dr.x1 : T;
          const x2 = dr.x2 != null ? dr.x2 : (W - T);
          const y1 = dr.y1 != null ? dr.y1 : T;
          const y2 = dr.y2 != null ? dr.y2 : (H - T);
          const dW = Math.max(40, (x2 - x1) - 4);
          const dH = Math.max(40, (y2 - y1) - 4);
          if (dr.type === 'double') {
            parts.push({
              name: `Uși Duble #${idx + 1} (Pereche)`,
              qty: 2,
              length: dH,
              width: Math.floor((dW - 2) / 2),
              thickness: T,
              material: 'Fațadă MDF / Lemn'
            });
          } else {
            parts.push({
              name: `Ușă Batantă #${idx + 1}`,
              qty: 1,
              length: dH,
              width: dW,
              thickness: T,
              material: 'Fațadă MDF / Lemn'
            });
          }
        });
        // Sertare custom
        (cab.drawers || []).forEach((dw, idx) => {
          const x1 = dw.x1 != null ? dw.x1 : T;
          const x2 = dw.x2 != null ? dw.x2 : (W - T);
          const dwW = Math.max(40, (x2 - x1) - 6);
          const dwH = Math.max(30, dw.height || 200);
          parts.push({
            name: `Front Sertar #${idx + 1}`,
            qty: 1,
            length: dwW,
            width: dwH,
            thickness: T,
            material: 'Fațadă MDF / Lemn'
          });
          parts.push({
            name: `Cutie Sertar #${idx + 1} (Laterale)`,
            qty: 2,
            length: D - 40,
            width: dwH - 24,
            thickness: 12,
            material: 'Mesteacăn / Fag'
          });
          parts.push({
            name: `Cutie Sertar #${idx + 1} (Spate/Fund)`,
            qty: 1,
            length: dwW - 44,
            width: D - 40,
            thickness: 8,
            material: 'Placaj mesteacăn'
          });
        });
      } else {
        const shCount = p.shelves !== undefined ? p.shelves : 2;
        parts.push({ name: 'Polițe Interioare', qty: shCount, length: innerW - 2, width: D - 15, thickness: T, material: 'Panou masiv / PAL' });
        parts.push({ name: 'Uși Batante', qty: p.doors || 2, length: H - 4, width: Math.floor((W - 4) / (p.doors || 2)), thickness: T, material: 'Fațadă lemn' });
        parts.push({ name: 'Spate PFL / HDF 3mm', qty: 1, length: W - 4, width: H - 4, thickness: 3, material: 'HDF alb/lemn' });
      }

      return parts;
    }
  },
  {
    id: 'endgrain-cutting-board',
    title: 'Tocător Bucătărie Fibră Terminală',
    roTitle: 'Tocător Bucătărie Fibră Terminală',
    category: 'Home',
    tag: 'Beginner',
    timeMinutes: 90,
    difficulty: 'Începător',
    woodDefault: 'nuc',
    image: PROJECT_SVGS['endgrain-cutting-board'],
    description: 'Tocător profesional de bucătărie din cuburi de nuc și stejar cu fibra orientată vertical (end-grain). Nu tocește cuțitele, se auto-vindecă și are canal colector.',
    defaults: { length: 450, width: 320, height: 42, thickness: 42 },
    hardware: [
      { name: 'Clei alimentar impermeabil Titebond III Ultimate', qty: 250, unit: 'ml', estPriceRon: 28 },
      { name: 'Ulei mineral pur alimentar (Food Safe)', qty: 500, unit: 'ml', estPriceRon: 35 },
      { name: 'Ceară naturală de albine', qty: 100, unit: 'g', estPriceRon: 15 },
      { name: 'Picioare cauciuc cu șuruburi inox', qty: 4, unit: 'buc', estPriceRon: 12 }
    ],
    tools: ['Circular', 'Abric / Grosime', 'Freza deget pt canal colector', 'Menghine strângere'],
    steps: [
      { step: 1, title: 'Prima încleiere în fâșii', text: 'Încleiați scânduri de nuc și arțar/stejar alternativ în fâșii de 45mm.' },
      { step: 2, title: 'Debitare transversală și rotire 90°', text: 'Tăiați pachetul la lățimi de 42mm, rotiți cuburile cu fibra în sus și alternați modelul tablă de șah.' },
      { step: 3, title: 'A doua încleiere și frezare canal', text: 'Strângeți în menghine cu Titebond III și frezați canalul colector de suc.' },
      { step: 4, title: 'Baie de ulei mineral cald', text: 'Scufundați tocătorul în ulei mineral alimentar timp de 20 minute.' }
    ],
    generateParts(p) {
      const L = p.length || 450, W = p.width || 320, H = p.height || 42;
      return [
        { name: 'Segmente Nuc American End-Grain', qty: 24, length: 50, width: 50, thickness: H, material: 'Nuc uscat' },
        { name: 'Segmente Stejar / Arțar End-Grain', qty: 24, length: 50, width: 50, thickness: H, material: 'Stejar uscat' }
      ];
    }
  },
  {
    id: 'wine-rack',
    title: 'Suport Lemn Masiv pentru Vinuri',
    roTitle: 'Suport Lemn Masiv pentru Vinuri',
    category: 'Home',
    tag: 'Beginner',
    timeMinutes: 75,
    difficulty: 'Începător',
    woodDefault: 'nuc',
    image: PROJECT_SVGS['wine-rack'],
    description: 'Suport de masă sau blat pentru 12 sticle de vin culcate, din lemn nobil de nuc sau stejar, cu îmbinare în cruce cu jumătăți de lemn (halving joint).',
    defaults: { length: 420, width: 280, height: 420, thickness: 20 },
    hardware: [
      { name: 'Adeziv lemn D3', qty: 100, unit: 'ml', estPriceRon: 12 },
      { name: 'Șuruburi ascunse 4x40mm', qty: 12, unit: 'buc', estPriceRon: 4 },
      { name: 'Ulei danez transparent', qty: 250, unit: 'ml', estPriceRon: 30 }
    ],
    tools: ['Ferăstrău pendular / circular', 'Daltă tâmplărie 20mm', 'Șlefuitor'],
    steps: [
      { step: 1, title: 'Construcție ramă exterioară', text: 'Debitați cele 4 laturi ale ramei de 420x420mm cu îmbinare la 45°.' },
      { step: 2, title: 'Fante pentru grila diagonală', text: 'Frezati crestăturile pe mijlocul riglelor diagonale pentru îmbinare întrepătrunsă.' },
      { step: 3, title: 'Asamblare și ceruire', text: 'Montați grila în ramă și finisați cu ulei și ceară naturală.' }
    ],
    generateParts(p) {
      const S = p.length || 420, D = p.width || 280, T = p.thickness || 20;
      return [
        { name: 'Laturi Cadru Pătrat', qty: 4, length: S, width: D, thickness: T, material: 'Nuc / Stejar' },
        { name: 'Diagonale Mari Suport Sticle', qty: 2, length: Math.round(S * 1.38), width: D, thickness: T, material: 'Nuc' },
        { name: 'Sub-diagonale Compartimente', qty: 4, length: Math.round((S * 1.38) / 2), width: D, thickness: T, material: 'Nuc' }
      ];
    }
  },

  // ==========================================
  // GRĂDINĂ & EXTERIOR
  // ==========================================
  {
    id: 'classic-birdhouse',
    title: 'Căsuță Clasică pentru Păsări',
    roTitle: 'Căsuță Clasică pentru Păsări',
    category: 'Garden',
    tag: 'Beginner',
    timeMinutes: 60,
    difficulty: 'Începător',
    woodDefault: 'pin',
    image: PROJECT_SVGS['classic-birdhouse'],
    description: 'Căsuță ecologică pentru pițigoi și păsări cântătoare, cu gaură de intrare calibrată de 32mm, acoperiș în două ape și podea demontabilă pentru curățare.',
    defaults: { length: 180, width: 180, height: 260, thickness: 18 },
    hardware: [
      { name: 'Șuruburi lemn exterior 3.5x40mm', qty: 16, unit: 'buc', estPriceRon: 4 },
      { name: 'Clei poliuretanic exterior D4', qty: 60, unit: 'ml', estPriceRon: 10 },
      { name: 'Tijă rotundă fag 8x60mm (stinghie)', qty: 1, unit: 'buc', estPriceRon: 2 }
    ],
    tools: ['Ferăstrău', 'Carotă lemn Ø32mm', 'Bormașină'],
    steps: [
      { step: 1, title: 'Tăiere fronton la 45°', text: 'Tăiați fațada și spatele la unghi de 45° pentru panta acoperișului.' },
      { step: 2, title: 'Găurire orificiu zbor', text: 'Dați gaura cu freza de 32mm la 180mm de fund și gaura de 8mm pentru stinghie sub ea.' },
      { step: 3, title: 'Asamblare și drenaj', text: 'Dați 4 găuri mici de 5mm în podea pentru scurgerea condensului.' }
    ],
    generateParts(p) {
      const L = p.length || 180, W = p.width || 180, H = p.height || 260, T = p.thickness || 18;
      return [
        { name: 'Fațadă cu Gaură Ø32mm', qty: 1, length: W, width: H, thickness: T, material: 'Pin masiv netratat' },
        { name: 'Spate Prelungit pt Copac', qty: 1, length: W, width: H + 50, thickness: T, material: 'Pin masiv' },
        { name: 'Pereți Laterali', qty: 2, length: L - 2*T, width: H - 70, thickness: T, material: 'Pin masiv' },
        { name: 'Podea cu Orificii Drenaj', qty: 1, length: L - 2*T, width: W - 2*T, thickness: T, material: 'Pin masiv' },
        { name: 'Acoperiș Stânga / Dreapta', qty: 2, length: L + 40, width: 140, thickness: T, material: 'Pin masiv' }
      ];
    }
  },
  {
    id: 'raised-garden-bed',
    title: 'Ghiveci Înălțat / Jardinieră Grădină',
    roTitle: 'Ghiveci Înălțat / Jardinieră Grădină',
    category: 'Garden',
    tag: 'Trending',
    timeMinutes: 90,
    difficulty: 'Începător',
    woodDefault: 'salcam',
    image: PROJECT_SVGS['raised-garden-bed'],
    description: 'Strat înălțat de legume și flori din scânduri groase de salcâm sau larice rezistente natural la putrezire. Ușurează munca în grădină și încălzește solul mai rapid primăvara.',
    defaults: { length: 1500, width: 800, height: 450, thickness: 28 },
    hardware: [
      { name: 'Șuruburi structurale lemn Torx 6x80mm zincate', qty: 36, unit: 'buc', estPriceRon: 22 },
      { name: 'Folie membrană cramponată geotextil', qty: 4, unit: 'mp', estPriceRon: 25 },
      { name: 'Ulei de in pur de exterior', qty: 1000, unit: 'ml', estPriceRon: 30 }
    ],
    tools: ['Circular', 'Bormașină cu impact', 'Nivelă boloboc', 'Capsator manual'],
    steps: [
      { step: 1, title: 'Fasonare stâlpi colț', text: 'Tăiați cei 4 stâlpi de colț din grinzi de 60x60mm la înălțimea de 450mm.' },
      { step: 2, title: 'Prindere scânduri perimetrale', text: 'Înșurubați 3 rânduri de scânduri de 28mm pe stâlpi lăsând 2mm spațiu între ele.' },
      { step: 3, title: 'Căptușire cu membrană', text: 'Capsați membrana pe interior pentru a proteja lemnul de contactul direct cu pământul umed.' }
    ],
    generateParts(p) {
      const L = p.length || 1500, W = p.width || 800, H = p.height || 450, T = p.thickness || 28;
      return [
        { name: 'Stâlpi Colț Rezistență', qty: 4, length: 60, width: 60, thickness: H, material: 'Grindă salcâm/larice' },
        { name: 'Scânduri Lungi Față/Spate', qty: 6, length: L, width: 140, thickness: T, material: 'Scândură salcâm' },
        { name: 'Scânduri Scurte Capete', qty: 6, length: W - 120, width: 140, thickness: T, material: 'Scândură salcâm' },
        { name: 'Bordură Superioară Rezemare', qty: 2, length: L + 60, width: 90, thickness: T, material: 'Scândură salcâm' }
      ];
    }
  },
  {
    id: 'garden-bench',
    title: 'Bancă Ergonomică de Grădină',
    roTitle: 'Bancă Ergonomică de Grădină',
    category: 'Garden',
    tag: 'Outdoor',
    timeMinutes: 180,
    difficulty: 'Mediu',
    woodDefault: 'salcam',
    image: PROJECT_SVGS['garden-bench'],
    description: 'Bancă de parc și curte cu profil curbat ergonomic pentru spătar și șezut. Realizată din lemn masiv tratat pentru exterior, oferă confort maxim fără perne.',
    defaults: { length: 1400, width: 620, height: 920, thickness: 28 },
    hardware: [
      { name: 'Șuruburi caroserie cap bombat M8x70mm', qty: 16, unit: 'buc', estPriceRon: 18 },
      { name: 'Șuruburi lemn inox 4.5x50mm', qty: 48, unit: 'buc', estPriceRon: 24 },
      { name: 'Lazură groasă exterior cu filtru UV', qty: 1000, unit: 'ml', estPriceRon: 55 }
    ],
    tools: ['Ferăstrău pendular', 'Șablon curbură', 'Bormașină', 'Cheie fixă 13mm'],
    steps: [
      { step: 1, title: 'Decupare profile laterale ergonomice', text: 'Decupați pe curbură montanții de șezut și spătar cu ferăstrăul pendular.' },
      { step: 2, title: 'Asamblare picioare cu tije M8', text: 'Fixați picioarele și contrafișele cu șuruburi de caroserie.' },
      { step: 3, title: 'Montare șipci șezut și spătar', text: 'Înșurubați cele 12 șipci păstrând un luft uniform de 8mm.' }
    ],
    generateParts(p) {
      const L = p.length || 1400, T = p.thickness || 28;
      return [
        { name: 'Laterale Picioare Față/Spate', qty: 4, length: 70, width: 45, thickness: 600, material: 'Grindă salcâm' },
        { name: 'Suport Curbat Șezut & Spătar', qty: 3, length: 900, width: 90, thickness: 35, material: 'Salcâm debitat curb' },
        { name: 'Șipci Șezut & Spătar', qty: 12, length: L, width: 55, thickness: 22, material: 'Șipci rotunjite' },
        { name: 'Brațe Laterale de Rezemare', qty: 2, length: 550, width: 70, thickness: 28, material: 'Scândură salcâm' }
      ];
    }
  },
  {
    id: 'picnic-table',
    title: 'Masă Robustă de Picnic cu Bănci',
    roTitle: 'Masă Robustă de Picnic cu Bănci',
    category: 'Garden',
    tag: 'Outdoor',
    timeMinutes: 240,
    difficulty: 'Mediu',
    woodDefault: 'pin',
    image: PROJECT_SVGS['picnic-table'],
    description: 'Masa clasică de curte și picnic cu bănci integrate pe structură în A (A-frame). Încape confortabil 6-8 persoane și este indestructibilă la intemperii.',
    defaults: { length: 1800, width: 1500, height: 760, thickness: 40 },
    hardware: [
      { name: 'Șuruburi caroserie zincate M10x100mm cu șaibe', qty: 16, unit: 'buc', estPriceRon: 35 },
      { name: 'Șuruburi lemn structurale 6x90mm', qty: 40, unit: 'buc', estPriceRon: 25 },
      { name: 'Ulei exterior decking', qty: 2000, unit: 'ml', estPriceRon: 90 }
    ],
    tools: ['Circular', 'Bormașină cu burghiu lung 10mm', 'Cheie 17mm', 'Echer'],
    steps: [
      { step: 1, title: 'Tăiere picioare A la unghi de 30°', text: 'Tăiați capetele celor 4 picioare de 40x120mm la unghi paralel de 30°.' },
      { step: 2, title: 'Montaj traverse bănci și masă', text: 'Prindeți picioarele pe traversa lungă de 1500mm cu buloane M10.' },
      { step: 3, title: 'Montaj scânduri blat și bănci', text: 'Fixați cele 5 scânduri de blat și cele 4 scânduri de bănci cu spațiu de 6mm.' }
    ],
    generateParts(p) {
      const L = p.length || 1800, T = p.thickness || 40;
      return [
        { name: 'Picioare Cadru A (Unghi 30°)', qty: 4, length: 950, width: 120, thickness: T, material: 'Dulap pin/molid' },
        { name: 'Traverse Suport Bănci', qty: 2, length: 1500, width: 120, thickness: T, material: 'Dulap pin' },
        { name: 'Traverse Suport Blat Masă', qty: 2, length: 750, width: 120, thickness: T, material: 'Dulap pin' },
        { name: 'Scânduri Blat Masă', qty: 5, length: L, width: 140, thickness: T, material: 'Scândură groasă' },
        { name: 'Scânduri Bănci Șezut', qty: 4, length: L, width: 140, thickness: T, material: 'Scândură groasă' },
        { name: 'Contrafișe Diagonale Rigidizare', qty: 2, length: 700, width: 90, thickness: T, material: 'Rigletă pin' }
      ];
    }
  },
  {
    id: 'outdoor-bbq-station',
    title: 'Bucătărie de Grădină & Adăpost Grill BBQ',
    roTitle: 'Bucătărie de Grădină & Adăpost Grill BBQ',
    category: 'Garden',
    tag: 'Outdoor',
    timeMinutes: 360,
    difficulty: 'Avansat',
    woodDefault: 'salcam',
    image: PROJECT_SVGS['outdoor-bbq-station'],
    description: 'Stație completă pentru grătar în aer liber, cu acoperiș înclinat din șipci aerisite, blat generos rezistent la căldură și spațiu pentru ustensile și butelie.',
    defaults: { length: 1800, width: 750, height: 2100, thickness: 28, postThickness: 90 },
    hardware: [
      { name: 'Tije filetate M10 & șuruburi Torx 8x140mm', qty: 30, unit: 'buc', estPriceRon: 65 },
      { name: 'Papuci metalici zincați stâlpi', qty: 4, unit: 'buc', estPriceRon: 50 },
      { name: 'Ulei exterior protecție UV', qty: 2000, unit: 'ml', estPriceRon: 120 }
    ],
    tools: ['Circular mare', 'Laser / Boloboc', 'Mașină de impact', 'Dălți'],
    steps: [
      { step: 1, title: 'Ancorare stâlpi 90x90', text: 'Fixați cei 4 stâlpi cu pantă de 12% spre spate pentru scurgerea apei.' },
      { step: 2, title: 'Grinzi și căpriori acoperiș', text: 'Montați structura acoperișului cu contrafișe la 45°.' },
      { step: 3, title: 'Șipci perete spate și blat masiv', text: 'Montați panoul din șipci orizontale de ventilație și blatul de lucru.' }
    ],
    generateParts(p) {
      const L = p.length || 1800, W = p.width || 750, H = p.height || 2100, postT = p.postThickness || 90;
      return [
        { name: 'Stâlpi Față', qty: 2, length: postT, width: postT, thickness: H, material: 'Grindă salcâm 90x90' },
        { name: 'Stâlpi Spate (pantă scurgere)', qty: 2, length: postT, width: postT, thickness: H - 250, material: 'Grindă 90x90' },
        { name: 'Căpriori Acoperiș', qty: 4, length: W + 200, width: 80, thickness: 45, material: 'Rigle' },
        { name: 'Șipci Perete Spate', qty: 14, length: L - 2*postT, width: 60, thickness: 18, material: 'Șipcă aerisită' },
        { name: 'Blat Lucru Masiv', qty: 1, length: L, width: W, thickness: 28, material: 'Panou masiv' }
      ];
    }
  },
  {
    id: 'dog-house',
    title: 'Căsuță Izolată din Lemn pentru Câine',
    roTitle: 'Căsuță Izolată din Lemn pentru Câine',
    category: 'Garden',
    tag: 'Outdoor',
    timeMinutes: 200,
    difficulty: 'Mediu',
    woodDefault: 'pin',
    image: PROJECT_SVGS['dog-house'],
    description: 'Cușcă călduroasă pentru câini de talie medie și mare, cu pereți dubli izolați termic cu polistiren, podea înălțată pe tălpi și acoperiș rabatabil pentru curățare ușoară.',
    defaults: { length: 1100, width: 850, height: 950, thickness: 20 },
    hardware: [
      { name: 'Șuruburi lemn zincate 4x50mm', qty: 50, unit: 'buc', estPriceRon: 12 },
      { name: 'Balamale acoperiș rabatabil 75mm', qty: 2, unit: 'buc', estPriceRon: 16 },
      { name: 'Polistiren extrudat 30mm pt izolație', qty: 3, unit: 'plăci', estPriceRon: 35 },
      { name: 'Șindrilă bituminoasă acoperiș', qty: 1.5, unit: 'mp', estPriceRon: 40 }
    ],
    tools: ['Circular', 'Pendular pt arcadă ușă', 'Bormașină', 'Capsator'],
    steps: [
      { step: 1, title: 'Podea pe grinzi izolată', text: 'Construiți platforma de bază ridicată 60mm de la sol și izolați-o cu polistiren.' },
      { step: 2, title: 'Pereți dubli cu intrare boltită', text: 'Decupați ușa boltită de 320x420mm și montați lambriul exterior.' },
      { step: 3, title: 'Acoperiș rabatabil impermeabil', text: 'Fixați acoperișul pe balamale și acoperiți cu șindrilă bituminoasă.' }
    ],
    generateParts(p) {
      const L = p.length || 1100, W = p.width || 850, H = p.height || 950;
      return [
        { name: 'Grinzi Tălpi Înălțare Sol', qty: 3, length: L, width: 60, thickness: 60, material: 'Grindă pin tratată' },
        { name: 'Podea Dublă Izolată', qty: 2, length: L, width: W, thickness: 20, material: 'OSB / Panou pin' },
        { name: 'Pereți Exterior Lambriu', qty: 4, length: L, width: H - 200, thickness: 20, material: 'Lambriu pin' },
        { name: 'Capac Rabatabil Acoperiș', qty: 1, length: L + 100, width: W + 100, thickness: 20, material: 'Panou acoperiș' }
      ];
    }
  },

  // ==========================================
  // GOSPODĂRIE & ATELIER
  // ==========================================
  {
    id: 'workbench',
    title: 'Banc Robust de Atelier (Heavy-Duty)',
    roTitle: 'Banc Robust de Atelier (Heavy-Duty)',
    category: 'Workshop',
    tag: 'Workshop',
    timeMinutes: 240,
    difficulty: 'Avansat',
    woodDefault: 'fag',
    image: PROJECT_SVGS['workbench'],
    description: 'Banc greu de tâmplărie cu blat laminat gros de 45mm din fag sau molid, picioare de 80x80mm, poliță inferioară pentru scule grele și rețea de găuri 19mm pentru menghine și opritoare.',
    defaults: { length: 1500, width: 700, height: 900, thickness: 45, legThickness: 80 },
    hardware: [
      { name: 'Tije filetate M12 cu piulițe și șaibe', qty: 4, unit: 'buc', estPriceRon: 35 },
      { name: 'Șuruburi structurale cap hex 8x120mm', qty: 16, unit: 'buc', estPriceRon: 24 },
      { name: 'Clei lemn D4 extra-puternic', qty: 500, unit: 'ml', estPriceRon: 38 },
      { name: 'Ulei de in fiert pt atelier', qty: 1000, unit: 'ml', estPriceRon: 32 }
    ],
    tools: ['Circular', 'Rindea / Abric', 'Burghiu 12mm & 19mm', 'Chei fixe'],
    steps: [
      { step: 1, title: 'Laminare blat tip butcher block', text: 'Încleiați rigle de fag pe cant pentru a obține grosimea de 45mm.' },
      { step: 2, title: 'Cadru picioare H dublu', text: 'Asamblați picioarele de 80x80mm cu traverse lap-joint pentru stabilitate extremă.' },
      { step: 3, title: 'Găurire rețea bench-dogs 19mm', text: 'Trasați și perforați găurile de banc la pas de 100mm.' }
    ],
    generateParts(p) {
      const L = p.length || 1500, W = p.width || 700, H = p.height || 900, T = p.thickness || 45, legT = p.legThickness || 80;
      return [
        { name: 'Blat Laminat Masiv Fag', qty: 1, length: L, width: W, thickness: T, material: 'Fag laminat' },
        { name: 'Stâlpi Picioare 80x80', qty: 4, length: legT, width: legT, thickness: H - T, material: 'Grindă masivă' },
        { name: 'Traverse Inferioare H', qty: 4, length: L - 200, width: 90, thickness: 45, material: 'Rigletă fag' },
        { name: 'Platformă Scule Grele', qty: 1, length: L - 240, width: W - 180, thickness: 20, material: 'Scândură molid' }
      ];
    }
  },
  {
    id: 'tool-tote',
    title: 'Ladă Portabilă de Scule cu Mâner Rotund',
    roTitle: 'Ladă Portabilă de Scule cu Mâner Rotund',
    category: 'Workshop',
    tag: 'Beginner',
    timeMinutes: 60,
    difficulty: 'Începător',
    woodDefault: 'pin',
    image: PROJECT_SVGS['tool-tote'],
    description: 'Cutie tradițională deschisă de scule cu mâner rotund cilindric din fag. Ideală pentru transportul ciocanului, ruletei, dălților și șuruburilor la orice lucrare în gospodărie.',
    defaults: { length: 500, width: 240, height: 320, thickness: 18 },
    hardware: [
      { name: 'Șuruburi lemn 3.5x35mm', qty: 20, unit: 'buc', estPriceRon: 5 },
      { name: 'Clei lemn D3', qty: 80, unit: 'ml', estPriceRon: 10 },
      { name: 'Bară rotundă fag Ø25mm x 520mm', qty: 1, unit: 'buc', estPriceRon: 8 }
    ],
    tools: ['Ferăstrău pendular / mână', 'Burghiu freză Ø25mm', 'Șlefuitor'],
    steps: [
      { step: 1, title: 'Tăiere capete trapezoidale', text: 'Tăiați capetele laterale în formă de trapez cu vârf rotunjit.' },
      { step: 2, title: 'Găurire lăcaș mâner Ø25mm', text: 'Dați gaura de 25mm pe axul superior al capetelor.' },
      { step: 3, title: 'Asamblare casetă cu fund', text: 'Încleiați și înșurubați lateralele, fundul și introduceți mânerul rotund.' }
    ],
    generateParts(p) {
      const L = p.length || 500, W = p.width || 240, H = p.height || 320, T = p.thickness || 18;
      return [
        { name: 'Capete Verticale Mâner', qty: 2, length: W, width: H, thickness: T, material: 'Scândură pin' },
        { name: 'Laterale Lungi Cutie', qty: 2, length: L - 2*T, width: 130, thickness: T, material: 'Scândură pin' },
        { name: 'Podea Fund Cutie', qty: 1, length: L - 2*T, width: W - 2*T, thickness: T, material: 'Scândură pin' },
        { name: 'Mâner Cilindric Rotund Ø25mm', qty: 1, length: L, width: 25, thickness: 25, material: 'Tijă fag rotundă' }
      ];
    }
  },
  {
    id: 'folding-sawhorses',
    title: 'Capre Pliabile de Tâmplărie (Pereche)',
    roTitle: 'Capre Pliabile de Tâmplărie (Pereche)',
    category: 'Workshop',
    tag: 'Workshop',
    timeMinutes: 90,
    difficulty: 'Începător',
    woodDefault: 'pin',
    image: PROJECT_SVGS['folding-sawhorses'],
    description: 'Pereche de capre de lucru pliabile și compacte din dulapi de 50x100mm (2x4). Susțin peste 400kg fiecare și se depozitează lipite de perete.',
    defaults: { length: 900, width: 550, height: 800, thickness: 45 },
    hardware: [
      { name: 'Balamale rezistente capră 100mm', qty: 4, unit: 'buc', estPriceRon: 24 },
      { name: 'Șuruburi structurale lemn 5x70mm', qty: 32, unit: 'buc', estPriceRon: 14 },
      { name: 'Sfoară ancorare / lanț limitare deschidere', qty: 2, unit: 'buc', estPriceRon: 10 }
    ],
    tools: ['Circular', 'Bormașină', 'Ruletă & echer'],
    steps: [
      { step: 1, title: 'Tăiere picioare la unghi de 15°', text: 'Tăiați capetele celor 8 picioare la unghi de 15 grade pentru stabilitate piramidală.' },
      { step: 2, title: 'Montaj grindă superioară', text: 'Fixați picioarele pe grinda orizontală superioară.' },
      { step: 3, title: 'Prindere balamale și lanț opritor', text: 'Uniți cele două fețe cu balamale și limitați deschiderea la 550mm.' }
    ],
    generateParts(p) {
      const L = p.length || 900, H = p.height || 800, T = p.thickness || 45;
      return [
        { name: 'Grinzi Superioare Rezemare', qty: 2, length: L, width: 95, thickness: T, material: 'Dulap pin 45x95' },
        { name: 'Picioare Înclinate (15°)', qty: 8, length: H, width: 95, thickness: T, material: 'Dulap pin 45x95' },
        { name: 'Traverse Rigidizare Orizontale', qty: 4, length: 700, width: 70, thickness: 22, material: 'Scândură pin' }
      ];
    }
  },
  {
    id: 'chicken-coop',
    title: 'Cuibar & Adăpost din Lemn pentru Găini',
    roTitle: 'Cuibar & Adăpost din Lemn pentru Găini',
    category: 'Farm',
    tag: 'Outdoor',
    timeMinutes: 300,
    difficulty: 'Avansat',
    woodDefault: 'pin',
    image: PROJECT_SVGS['chicken-coop'],
    description: 'Adăpost compact pentru 4-6 găini de curte, cu cuibar lateral rabatabil pentru colectarea comodă a ouălor, stinghii de dormit și rampă rabatabilă de acces.',
    defaults: { length: 1400, width: 900, height: 1300, thickness: 20 },
    hardware: [
      { name: 'Șuruburi lemn zincate 4.5x60mm', qty: 60, unit: 'buc', estPriceRon: 18 },
      { name: 'Balamale capac cuibar & ușă', qty: 4, unit: 'buc', estPriceRon: 24 },
      { name: 'Zăvor încuietoare anti-prădători', qty: 2, unit: 'buc', estPriceRon: 16 },
      { name: 'Plasă sârmă volieră 1mp', qty: 1, unit: 'mp', estPriceRon: 20 }
    ],
    tools: ['Circular', 'Pendular', 'Bormașină', 'Capsator sârmă'],
    steps: [
      { step: 1, title: 'Construcție șasiu ridicat pe picioare', text: 'Ridicați podeaua la 35cm de sol pentru a proteja găinile de umezeală și rozătoare.' },
      { step: 2, title: 'Căsuță cu pereți lambriu și volieră', text: 'Montați pereții căsuței și plasa de ventilație superioară.' },
      { step: 3, title: 'Cuibar lateral cu capac rabatabil', text: 'Atașați cuibarul pe peretele lateral cu capac etanș pentru acces la ouă fără a intra în coteț.' }
    ],
    generateParts(p) {
      const L = p.length || 1400, W = p.width || 900, H = p.height || 1300;
      return [
        { name: 'Stâlpi Cadru Ridicat', qty: 4, length: 60, width: 60, thickness: H, material: 'Grindă pin tratat' },
        { name: 'Podea Ușor de Curățat', qty: 1, length: L - 400, width: W, thickness: 20, material: 'Panou lemn' },
        { name: 'Pereți Adăpost Lambriu', qty: 4, length: L - 400, width: 700, thickness: 18, material: 'Lambriu pin' },
        { name: 'Cuibar Lateral cu 2 Compartimente', qty: 1, length: 400, width: W - 100, thickness: 18, material: 'Panou lemn' },
        { name: 'Rampă Acces cu Șipci Antiderapante', qty: 1, length: 700, width: 220, thickness: 18, material: 'Scândură pin' }
      ];
    }
  }
];

const ENRICHED_CATALOG = CATALOG_PLANS.map(p => ({
  ...p,
  title: p.roTitle || p.title,
  image: getProjectIllustration(p.id, p.archetype, p.roTitle),
  hardware: [
    { name: 'Șuruburi lemn zincate', qty: 24, unit: 'buc', estPriceRon: 8 },
    { name: 'Dibluri fag 8x35mm', qty: 16, unit: 'buc', estPriceRon: 5 },
    { name: 'Adeziv lemn D3 rezistent la apă', qty: 150, unit: 'ml', estPriceRon: 14 }
  ],
  tools: ['Ferăstrău circular', 'Bormașină', 'Șlefuitor', 'Ruletă'],
  steps: [
    { step: 1, title: 'Debitare cherestea conform cotelor', text: `Debitați piesele din lemn de ${p.woodDefault} conform dimensiunilor specificate în tabelul de debitare.` },
    { step: 2, title: 'Șlefuire canturi și fețe P120/P180', text: 'Șlefuiți suprafețele înainte de asamblare pentru o finisare uniformă.' },
    { step: 3, title: 'Asamblare mecanică și încleiere', text: 'Îmbinați structura folosind adeziv și șuruburi conform desenului tehnic.' },
    { step: 4, title: 'Finisaj protector', text: 'Aplicați 2 straturi de ulei sau lazură adecvată pentru destinația produsului.' }
  ]
}));

export const PLANS = [...FEATURED_PLANS, ...ENRICHED_CATALOG];

export function getPlanById(id) {
  return PLANS.find(p => p.id === id) || PLANS[0];
}

