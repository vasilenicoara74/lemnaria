// Lemnaria – Core Application Controller & Router
import { PLANS, getPlanById } from './data/plans.js';
import { WOODS, getWoodById } from './data/woods.js';
import { Studio3D } from './components/viewer3d.js';
import { calculateBOM, exportToExcel } from './components/bom.js';
import { optimizeCutList, renderCutListDiagram } from './components/cutlist.js';
import { render2DBlueprint, exportTechnicalPDF } from './components/blueprint.js';
import { WoodIdentifier } from './components/identifier.js';
import { WoodAICopilot } from './components/ai.js';
import { SketcherStudio } from './components/sketcher.js';
import { calculateJoinery, renderDrillingBlueprint } from './components/joinery.js';

class LemnariaApp {
  constructor() {
    this.viewEl = document.getElementById('view');
    this.tabbarEl = document.getElementById('tabbar');
    this.sheetEl = document.getElementById('sheet');
    this.toastEl = document.getElementById('toast');
    this.backBtn = document.getElementById('backBtn');
    this.topActions = document.getElementById('topActions');

    this.activeStudio = null;
    this.currentPlanId = 'slatted-boot-tray';
    this.currentWoodId = 'pin';
    this.currentParams = {};
    this.customCabinetConfig = {
      width: 800,
      height: 1200,
      depth: 450,
      thickness: 18,
      shelves: [400, 800],
      dividers: [],
      hasDoors: true,
      doorCount: 2,
      hasDrawers: false,
      drawerCount: 0,
      joineryType: 'confirmat'
    };

    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.setupSheetEvents();

    // Ascultă evenimentul de instalare PWA pe Android
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      window.deferredPWAInstallPrompt = e;
      this.showToast('💡 Lemnaria poate fi instalată ca aplicație nativă pe ecran!');
    });

    if (!window.location.hash) {
      window.location.hash = '#/home';
    } else {
      this.handleRoute();
    }
  }

  showToast(msg, duration = 2600) {
    this.toastEl.textContent = msg;
    this.toastEl.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toastEl.classList.remove('show');
    }, duration);
  }

  openSheet(htmlContent) {
    const body = this.sheetEl.querySelector('.sheet-body');
    body.innerHTML = `<div class="grab"></div>` + htmlContent;
    this.sheetEl.classList.remove('hidden');
  }

  closeSheet() {
    this.sheetEl.classList.add('hidden');
  }

  setupSheetEvents() {
    this.sheetEl.addEventListener('click', (e) => {
      if (e.target === this.sheetEl) {
        this.closeSheet();
      }
    });
  }

  updateTabs(activeTab) {
    const tabs = this.tabbarEl.querySelectorAll('a');
    tabs.forEach(t => {
      if (t.dataset.tab === activeTab) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
  }

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || '/home';
    const [path, queryString] = rawHash.split('?');
    const params = new URLSearchParams(queryString || '');

    // Reset top bar
    this.topActions.innerHTML = '';
    this.backBtn.classList.add('hidden');

    // Clean up 3D studio if leaving design tab
    if (!path.startsWith('/design') && this.activeStudio) {
      this.activeStudio.destroy();
      this.activeStudio = null;
    }

    if (path === '/home' || path === '') {
      this.updateTabs('home');
      this.viewEl.classList.remove('full');
      this.renderHome();
    } else if (path === '/sketch') {
      this.updateTabs('sketch');
      this.viewEl.classList.remove('full');
      this.renderSketchStudio();
    } else if (path === '/tools') {
      this.updateTabs('tools');
      this.viewEl.classList.remove('full');
      const toolTab = params.get('tab') || 'scanner';
      this.renderTools(toolTab);
    } else if (path === '/design') {
      this.updateTabs('design');
      this.viewEl.classList.add('full');
      const planId = params.get('plan') || this.currentPlanId;
      const woodId = params.get('wood') || this.currentWoodId;
      this.renderDesignStudio(planId, woodId, params);
    } else if (path === '/ai') {
      this.updateTabs('ai');
      this.viewEl.classList.remove('full');
      const queryPrompt = params.get('q') || '';
      this.renderAI(queryPrompt);
    } else if (path === '/me') {
      this.updateTabs('me');
      this.viewEl.classList.remove('full');
      this.renderMe();
    }
  }

  // ==========================================
  // VIEW: HOME (WoodSense Replica & Enhanced)
  // ==========================================
  renderHome() {
    this.viewEl.innerHTML = `
      <!-- 1. Proiecte pentru Începători -->
      <div style="margin-top:4px;">
        <div class="row between" style="margin:10px 0 10px;">
          <h2 style="margin:0;font-size:22px;letter-spacing:-.4px;">🟢 Nivel Începător</h2>
          <span class="badge g" style="font-size:11px;">Scule de bază • Rapid</span>
        </div>
        <div class="hscroll" id="beginnerCarousel">
          ${PLANS.filter(p => p.difficulty === 'Începător').slice(0, 8).map(p => `
            <div class="pcard" data-id="${p.id}" style="cursor:pointer;">
              <div style="position:relative;">
                <img class="thumb" src="${p.image}" alt="${p.roTitle}" loading="lazy">
                <button class="icon-btn" style="position:absolute;bottom:10px;right:10px;background:rgba(255,255,255,.92);width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 6px rgba(0,0,0,.2);padding:0;" title="Deschide în 3D">
                  ▶
                </button>
              </div>
              <div class="info">
                <div class="title">${p.roTitle}</div>
                <div class="row between muted small">
                  <span>⏱ ${p.timeMinutes} min</span>
                  <span class="badge g">${p.difficulty}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 2. Proiecte Nivel Mediu -->
      <div style="margin-top:14px;">
        <div class="row between" style="margin:10px 0 10px;">
          <h2 style="margin:0;font-size:22px;letter-spacing:-.4px;">🟡 Nivel Mediu</h2>
          <span class="badge o" style="font-size:11px;">Îmbinări precise • Atelier</span>
        </div>
        <div class="hscroll" id="intermediateCarousel">
          ${PLANS.filter(p => p.difficulty === 'Mediu').slice(0, 8).map(p => `
            <div class="pcard" data-id="${p.id}" style="cursor:pointer;">
              <div style="position:relative;">
                <img class="thumb" src="${p.image}" alt="${p.roTitle}" loading="lazy">
                <button class="icon-btn" style="position:absolute;bottom:10px;right:10px;background:rgba(255,255,255,.92);width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 6px rgba(0,0,0,.2);padding:0;" title="Deschide în 3D">
                  ▶
                </button>
              </div>
              <div class="info">
                <div class="title">${p.roTitle}</div>
                <div class="row between muted small">
                  <span>⏱ ${p.timeMinutes} min</span>
                  <span class="badge o">${p.difficulty}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3. Proiecte Nivel Avansat -->
      <div style="margin-top:14px;">
        <div class="row between" style="margin:10px 0 10px;">
          <h2 style="margin:0;font-size:22px;letter-spacing:-.4px;">🔴 Nivel Avansat</h2>
          <span class="badge r" style="font-size:11px;">Tâmplărie fină • Structuri</span>
        </div>
        <div class="hscroll" id="advancedCarousel">
          ${PLANS.filter(p => p.difficulty === 'Avansat').slice(0, 8).map(p => `
            <div class="pcard" data-id="${p.id}" style="cursor:pointer;">
              <div style="position:relative;">
                <img class="thumb" src="${p.image}" alt="${p.roTitle}" loading="lazy">
                <button class="icon-btn" style="position:absolute;bottom:10px;right:10px;background:rgba(255,255,255,.92);width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 6px rgba(0,0,0,.2);padding:0;" title="Deschide în 3D">
                  ▶
                </button>
              </div>
              <div class="info">
                <div class="title">${p.roTitle}</div>
                <div class="row between muted small">
                  <span>⏱ ${p.timeMinutes} min</span>
                  <span class="badge" style="background:#fee2e2;color:#b91c1c;">${p.difficulty}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Card Acțiune Rapidă: Schițează Corp Nou -->
      <div class="card" style="margin:16px 0;background:linear-gradient(135deg, #2a2017, #18130f);color:#fff;border:1px solid #4a3828;">
        <div class="row between">
          <div>
            <span class="badge o" style="font-size:10px;margin-bottom:4px;">NOU • AI CAD</span>
            <h3 style="margin:2px 0 4px;color:#fff;">Constructor Schiță Dulap 2D/3D</h3>
            <p class="small muted" style="margin:0;color:#c9baa9;">Desenează linii, compartimentează și calculează șuruburi & balamale automat</p>
          </div>
        </div>
        <div style="margin-top:12px;">
          <a href="#/sketch" class="btn acc block" style="padding:10px 14px;">✏️ Deschide Schițator Interactiv</a>
        </div>
      </div>

      <!-- Secțiune Inspirație cu Filtre & Grilă -->
      <div style="margin-top:10px;">
        <div class="row between" style="margin-bottom:10px;">
          <h2 style="margin:0;font-size:24px;letter-spacing:-.4px;">Modele & Inspirație</h2>
          <div class="search" style="padding:4px 10px;margin:0;border-radius:20px;border:1px solid var(--line);">
            <span style="font-size:14px;">🔍</span>
            <input type="text" id="homeSearch" placeholder="Caută proiecte..." style="width:110px;font-size:13px;padding:4px 6px;">
          </div>
        </div>

        <div class="chips" id="catChips">
          <button class="chip on" data-cat="all">Toate (${PLANS.length})</button>
          <button class="chip" data-cat="Home">🏠 Casă & Mobilă</button>
          <button class="chip" data-cat="Garden">🌿 Grădină & Curte</button>
          <button class="chip" data-cat="Workshop">🧰 Atelier & Scule</button>
          <button class="chip" data-cat="Farm">🐓 Gospodărie</button>
          <button class="chip" data-cat="Beginner">🟢 Începător</button>
        </div>

        <div class="grid2" id="inspirationGrid" style="margin-top:12px;"></div>
      </div>
    `;

    this.gridLimit = 24;
    this.renderInspirationGrid('all');
    this.bindHomeEvents();
  }

  renderInspirationGrid(category = 'all', searchQuery = '', appendOnly = false) {
    const grid = this.viewEl.querySelector('#inspirationGrid');
    if (!grid) return;

    if (!this.gridLimit) this.gridLimit = 24;

    let filtered = PLANS;
    if (category === 'Beginner') {
      filtered = filtered.filter(p => p.difficulty === 'Începător' || p.tag === 'Beginner');
    } else if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(p => p.title.toLowerCase().includes(q) || p.roTitle.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    const currentBatch = filtered.slice(0, this.gridLimit);

    let html = currentBatch.map(p => `
      <div class="gcard" data-id="${p.id}" style="cursor:pointer;">
        <img class="thumb" src="${p.image}" alt="${p.roTitle}" loading="lazy">
        <div class="t">
          <div style="font-weight:700;font-size:13px;line-height:1.2;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${p.roTitle}">${p.roTitle}</div>
          <div class="row between muted small" style="font-size:11px;">
            <span>⏱ ${p.timeMinutes}m</span>
            <span>${p.difficulty}</span>
          </div>
        </div>
      </div>
    `).join('');

    grid.innerHTML = html;

    // Buton Încarcă Mai Multe
    const existingLoadMore = this.viewEl.querySelector('#loadMoreWrapper');
    if (existingLoadMore) existingLoadMore.remove();

    if (filtered.length > this.gridLimit) {
      const loadMoreDiv = document.createElement('div');
      loadMoreDiv.id = 'loadMoreWrapper';
      loadMoreDiv.style.marginTop = '16px';
      loadMoreDiv.innerHTML = `
        <button class="btn ghost block" id="loadMorePlansBtn" style="font-size:13px;padding:11px;">
          ➕ Încarcă încă 24 modele (${Math.min(this.gridLimit, filtered.length)} din ${filtered.length})
        </button>
      `;
      grid.parentNode.insertBefore(loadMoreDiv, grid.nextSibling);

      loadMoreDiv.querySelector('#loadMorePlansBtn').addEventListener('click', () => {
        this.gridLimit += 24;
        this.renderInspirationGrid(category, searchQuery, false);
      });
    }

    grid.querySelectorAll('.gcard').forEach(c => {
      c.addEventListener('click', () => {
        this.openPlanDetailsModal(c.dataset.id);
      });
    });
  }

  bindHomeEvents() {
    this.viewEl.querySelectorAll('#beginnerCarousel .pcard, #intermediateCarousel .pcard, #advancedCarousel .pcard').forEach(c => {
      c.addEventListener('click', () => {
        this.openPlanDetailsModal(c.dataset.id);
      });
    });

    const catChips = this.viewEl.querySelectorAll('#catChips .chip');
    catChips.forEach(chip => {
      chip.addEventListener('click', () => {
        catChips.forEach(c => c.classList.remove('on'));
        chip.classList.add('on');
        const searchVal = this.viewEl.querySelector('#homeSearch')?.value || '';
        this.renderInspirationGrid(chip.dataset.cat, searchVal);
      });
    });

    const searchInput = this.viewEl.querySelector('#homeSearch');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const activeCat = this.viewEl.querySelector('#catChips .chip.on')?.dataset.cat || 'all';
        this.renderInspirationGrid(activeCat, e.target.value.trim());
      });
    }
  }

  openPlanDetailsModal(planId) {
    const plan = getPlanById(planId);
    const bom = calculateBOM(plan, plan.defaults, plan.woodDefault);

    this.openSheet(`
      <div style="position:relative;">
        <img src="${plan.image}" alt="${plan.roTitle}" style="width:100%;height:180px;object-fit:cover;border-radius:14px;">
        <span class="badge o" style="position:absolute;top:10px;right:10px;">${plan.difficulty}</span>
      </div>

      <h2 style="margin:12px 0 4px;font-size:22px;">${plan.roTitle}</h2>
      <div class="muted small">⏱ Timp estimat: ${plan.timeMinutes} minute • Dificultate: ${plan.difficulty}</div>

      <p style="font-size:14px;line-height:1.45;margin:10px 0;">${plan.description}</p>

      <div class="kpi">
        <div><b>${bom.parts.length}</b><span>Piese debitare</span></div>
        <div><b>${bom.grossVolumeM3} m³</b><span>Volum lemn</span></div>
        <div><b>${plan.woodDefault.toUpperCase()}</b><span>Lemn recomandat</span></div>
      </div>

      <div class="row" style="gap:8px;margin:16px 0 8px;">
        <a href="#/design?plan=${plan.id}&wood=${plan.woodDefault}" class="btn acc grow" onclick="document.getElementById('sheet').classList.add('hidden')">
          📐 Deschide în Studio 3D
        </a>
      </div>

      <div class="card" style="margin:10px 0;background:#fff;">
        <h4 style="margin:0 0 8px;">Listă Piese Debitare</h4>
        <table class="t">
          <thead>
            <tr><th>Piesă</th><th>Buc</th><th>Dimensiuni (L x W x T)</th></tr>
          </thead>
          <tbody>
            ${bom.parts.map(p => `
              <tr>
                <td><b>${p.name}</b></td>
                <td>${p.qty}</td>
                <td>${p.length} × ${p.width} × ${p.thickness} mm</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="card" style="margin:10px 0;background:#fff;">
        <h4 style="margin:0 0 8px;">Pași Asamblare</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${(plan.steps || []).map(s => `
            <div class="step">
              <div class="n">${s.step}</div>
              <div class="body grow">
                <div style="font-weight:700;font-size:14px;">${s.title}</div>
                <div class="small" style="margin-top:2px;">${s.text}</div>
                ${s.tip ? `<div class="tip">${s.tip}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `);
  }

  // ==========================================
  // VIEW: SKETCH 2D & CUSTOM CABINET BUILDER
  // ==========================================
  renderSketchStudio() {
    const sketcher = new SketcherStudio(this.viewEl, {
      onExtrude: (cabinetData) => {
        this.customCabinetConfig = { ...cabinetData };
        this.openJoineryResultsModal(cabinetData);
      }
    });
    sketcher.render();
  }

  openJoineryResultsModal(cabinetData) {
    const joinery = calculateJoinery(cabinetData);

    this.openSheet(`
      <div class="row between">
        <h3 style="margin:0;">🔩 Calcul Îmbinări & Feronerie</h3>
        <span class="badge g">${joinery.joineryType.toUpperCase()}</span>
      </div>
      <p class="muted small" style="margin:4px 0 12px;">Cote exacte calculate pentru corp ${cabinetData.width} x ${cabinetData.height} x ${cabinetData.depth} mm (T=${cabinetData.thickness}mm)</p>

      <div class="kpi">
        <div><b>${joinery.totalStructuralJoints}</b><span>Șuruburi/Dibluri</span></div>
        <div><b>${cabinetData.shelves.length}</b><span>Polițe</span></div>
        <div><b>${cabinetData.hasDoors ? cabinetData.doorCount : 0}</b><span>Uși</span></div>
      </div>

      <div class="row" style="gap:8px;margin:12px 0;">
        <button class="btn acc grow" id="openSketched3DBtn">
          🚀 Deschide Corpul în Studio 3D
        </button>
      </div>

      <!-- Plan Găurire Cotat Canvas -->
      <div class="card" style="margin:12px 0;background:#fff;padding:10px;">
        <div class="row between" style="margin-bottom:6px;">
          <h4 style="margin:0;">Plan Găurire Cotat – Montant Lateral</h4>
          <span class="muted small">Ax 37mm • Ø${joinery.joineryType === 'confirmat' ? '5/7' : '8'}mm</span>
        </div>
        <div style="background:#faf8f5;border-radius:10px;border:1px solid var(--line);text-align:center;">
          <canvas id="drillingCanvas" width="460" height="520" style="width:100%;height:auto;display:block;"></canvas>
        </div>
        <button class="btn sm ghost block" id="downloadDrillingPlanBtn" style="margin-top:8px;">
          💾 Salvează Desenul Cotat de Găurire
        </button>
      </div>

      <!-- Necesar Feronerie -->
      <div class="card" style="margin:12px 0;background:#fff;">
        <h4 style="margin:0 0 8px;">Listă Detaliată Feronerie & Accesorii</h4>
        <table class="t">
          <thead>
            <tr><th>Articol</th><th>Cantitate</th><th>Specificații Tehnice</th></tr>
          </thead>
          <tbody>
            ${joinery.hardware.map(h => `
              <tr>
                <td><b>${h.name}</b></td>
                <td>${h.qty} ${h.unit}</td>
                <td class="muted small">${h.specs}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Scule & Unelte -->
      <div class="card" style="margin:12px 0;background:#fff;">
        <h4 style="margin:0 0 6px;">Unelte Necesare</h4>
        <ul class="list" style="font-size:13px;">
          ${joinery.tools.map(t => `<li>🛠️ ${t}</li>`).join('')}
        </ul>
      </div>

      <!-- Instrucțiuni Montaj -->
      <div class="tip" style="margin-top:10px;">
        <b>Regulă de atelier pentru îmbinări:</b><br>
        Toate găurile de prindere se execută la <b>37 mm</b> de la cantul frontal și <b>37 mm</b> de la cantul posterior. Găurile pe cantul fundului/capacului se dau perfect pe axa centrală la <b>${cabinetData.thickness / 2} mm</b>!
      </div>
    `);

    // Randare Desen Găurire pe Canvas
    const dCanvas = document.getElementById('drillingCanvas');
    if (dCanvas) {
      renderDrillingBlueprint(dCanvas, cabinetData, joinery);
    }

    // Buton salt la 3D
    document.getElementById('openSketched3DBtn').addEventListener('click', () => {
      this.closeSheet();
      window.location.hash = `#/design?plan=custom-cabinet&isCustom=1`;
    });

    // Buton descărcare imagine plan
    document.getElementById('downloadDrillingPlanBtn').addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = dCanvas.toDataURL('image/png');
      link.download = `Lemnaria_Plan_Gaurire_${cabinetData.width}x${cabinetData.height}.png`;
      link.click();
      this.showToast('Desen cotat descărcat!');
    });
  }

  // ==========================================
  // VIEW: TOOLS (Scanner, CutList, Moisture, Angles)
  // ==========================================
  renderTools(activeSubTab = 'scanner') {
    this.viewEl.innerHTML = `
      <div class="chips" id="toolsSubTabs" style="margin-top:4px;margin-bottom:14px;">
        <button class="chip ${activeSubTab === 'scanner' ? 'on' : ''}" data-sub="scanner">🪵 Identificator Lemn</button>
        <button class="chip ${activeSubTab === 'cutlist' ? 'on' : ''}" data-sub="cutlist">📊 Optimizator Debitare</button>
        <button class="chip ${activeSubTab === 'moisture' ? 'on' : ''}" data-sub="moisture">💧 Umiditate & Dilatare</button>
        <button class="chip ${activeSubTab === 'angles' ? 'on' : ''}" data-sub="angles">📐 Unghiuri & Pante</button>
      </div>

      <div id="toolContainer"></div>
    `;

    this.viewEl.querySelectorAll('#toolsSubTabs .chip').forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = `#/tools?tab=${btn.dataset.sub}`;
      });
    });

    const container = this.viewEl.querySelector('#toolContainer');

    if (activeSubTab === 'scanner') {
      const identifier = new WoodIdentifier(container, {
        onOpenSheet: (html) => this.openSheet(html)
      });
      identifier.render();

    } else if (activeSubTab === 'cutlist') {
      this.renderCutListTool(container);

    } else if (activeSubTab === 'moisture') {
      this.renderMoistureTool(container);

    } else if (activeSubTab === 'angles') {
      this.renderAnglesTool(container);
    }
  }

  renderCutListTool(container) {
    const plan = getPlanById(this.currentPlanId);
    const parts = plan.generateParts ? plan.generateParts(plan.defaults) : [];

    container.innerHTML = `
      <div class="card" style="margin-top:0;">
        <h3 style="margin:0 0 4px;">Optimizator Debitare Scânduri (Cut List)</h3>
        <p class="muted small" style="margin:0 0 12px;">Algoritm de croire cu pierderi minime de material și rumeguș</p>

        <div class="row" style="gap:8px;margin-bottom:12px;">
          <div class="grow">
            <label class="f">Lungime scândură standard din depozit (mm)</label>
            <input type="number" id="stockLenInput" class="i" value="2000" step="100">
          </div>
          <div style="width:110px;">
            <label class="f">Lățime pânză (Kerf)</label>
            <input type="number" id="kerfInput" class="i" value="3" step="0.5">
          </div>
        </div>

        <button class="btn acc block" id="runOptimizeBtn">⚡ Calculează Schema Optimă de Tăiere</button>
      </div>

      <div id="cutDiagramContainer" style="margin-top:14px;"></div>
    `;

    const runBtn = container.querySelector('#runOptimizeBtn');
    const diagramContainer = container.querySelector('#cutDiagramContainer');

    const execute = () => {
      const stockLen = parseInt(container.querySelector('#stockLenInput').value) || 2000;
      const kerf = parseFloat(container.querySelector('#kerfInput').value) || 3;
      const optResult = optimizeCutList(parts, stockLen, kerf);
      diagramContainer.innerHTML = renderCutListDiagram(optResult);
      this.showToast(`Optimizare completă: ${optResult.totalBoards} scânduri necesare!`);
    };

    runBtn.addEventListener('click', execute);
    execute();
  }

  renderMoistureTool(container) {
    container.innerHTML = `
      <div class="card" style="margin-top:0;">
        <h3 style="margin:0 0 4px;">Calculator Dilatare Sezonieră Lemn</h3>
        <p class="muted small" style="margin:0 0 12px;">Calculează expansiunea pe lățime între iarnă și vară pentru blaturi masive</p>

        <label class="f">Specie Lemn</label>
        <select id="moistWood" class="i">
          ${WOODS.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
        </select>

        <div class="row" style="gap:8px;margin-top:8px;">
          <div class="grow">
            <label class="f">Lățime inițială blat (mm)</label>
            <input type="number" id="moistWidth" class="i" value="800">
          </div>
          <div class="grow">
            <label class="f">Umiditate lemn la montaj (%)</label>
            <input type="number" id="moistInitial" class="i" value="10">
          </div>
        </div>

        <div class="row" style="gap:8px;margin-top:8px;">
          <div class="grow">
            <label class="f">Umiditate maximă vară (%)</label>
            <input type="number" id="moistSummer" class="i" value="16">
          </div>
          <div class="grow">
            <label class="f">Umiditate minimă iarnă (%)</label>
            <input type="number" id="moistWinter" class="i" value="6">
          </div>
        </div>

        <button class="btn acc block" id="calcMoistBtn" style="margin-top:14px;">Calculează Dilatarea</button>

        <div id="moistResult" class="hidden" style="margin-top:14px;"></div>
      </div>
    `;

    const calcBtn = container.querySelector('#calcMoistBtn');
    const resDiv = container.querySelector('#moistResult');

    calcBtn.addEventListener('click', () => {
      const wood = getWoodById(container.querySelector('#moistWood').value);
      const width = parseFloat(container.querySelector('#moistWidth').value) || 800;
      const initial = parseFloat(container.querySelector('#moistInitial').value) || 10;
      const summer = parseFloat(container.querySelector('#moistSummer').value) || 16;
      const winter = parseFloat(container.querySelector('#moistWinter').value) || 6;

      const coeff = wood.type === 'hardwood' ? 0.0028 : 0.0021;
      const summerExpansion = (width * (summer - initial) * coeff).toFixed(1);
      const winterShrinkage = (width * (initial - winter) * coeff).toFixed(1);

      resDiv.innerHTML = `
        <div style="background:#f5f0ea;border-left:4px solid var(--accent);border-radius:10px;padding:12px;">
          <h4 style="margin:0 0 6px;">Rezultat Dilatare pentru ${wood.name}:</h4>
          <div style="font-size:14px;line-height:1.5;">
            ☀️ <b>Dilatare la vară (umezeală):</b> +${summerExpansion} mm (lățime devine ${(width + parseFloat(summerExpansion)).toFixed(1)} mm)<br>
            ❄️ <b>Contracție la iarnă (aer uscat):</b> -${winterShrinkage} mm (lățime devine ${(width - parseFloat(winterShrinkage)).toFixed(1)} mm)
          </div>
          <div class="tip" style="margin-top:8px;">
            <b>Recomandare montaj:</b> Lăsați obligatoriu un joc de minim <b>${Math.ceil(parseFloat(summerExpansion) + 3)} mm</b> în cadru sau folosiți clipsuri mobile tip Z!
          </div>
        </div>
      `;
      resDiv.classList.remove('hidden');
    });
  }

  renderAnglesTool(container) {
    container.innerHTML = `
      <div class="card" style="margin-top:0;">
        <h3 style="margin:0 0 4px;">Calculator Unghiuri Îmbinare Ferăstrău</h3>
        <p class="muted small" style="margin:0 0 12px;">Calculează unghiul de tăiere la circular pentru cutii poligonale cu N laturi</p>

        <label class="f">Număr Laturi Proiect</label>
        <select id="polySides" class="i">
          <option value="4">Pătrat / Dreptunghi (4 laturi - cutie clasică)</option>
          <option value="5">Pentagon (5 laturi)</option>
          <option value="6">Hexagon (6 laturi - stup / etajeră fagure)</option>
          <option value="8">Octogon (8 laturi)</option>
        </select>

        <div class="row" style="gap:8px;margin-top:10px;">
          <div class="grow">
            <label class="f">Înclinație perete (0° = vertical)</label>
            <input type="number" id="wallSlope" class="i" value="0" min="0" max="45">
          </div>
        </div>

        <button class="btn acc block" id="calcAngleBtn" style="margin-top:14px;">Afișează Reglaj Ferăstrău</button>

        <div id="angleResult" class="result hidden" style="margin-top:14px;"></div>
      </div>
    `;

    const calcBtn = container.querySelector('#calcAngleBtn');
    const resDiv = container.querySelector('#angleResult');

    calcBtn.addEventListener('click', () => {
      const sides = parseInt(container.querySelector('#polySides').value);
      const slope = parseFloat(container.querySelector('#wallSlope').value) || 0;

      const miterAngle = (180 / sides).toFixed(1);
      resDiv.innerHTML = `
📐 REGLAJ CIRCULAR / DEBITATOR PÂNZĂ:

• Unghi tăiere masă (Miter Angle): ${miterAngle}°
• Înclinație pânză (Bevel Angle): ${slope > 0 ? (slope).toFixed(1) + '°' : '0.0° (pânză la 90°)'}
• Număr total tăieturi: ${sides * 2} tăieturi la capete

💡 Sfat: Folosiți o riglă de sacrificiu din MDF pe ghidajul circularului pentru a preveni așchierea fibrelor la ieșirea lamei.
      `;
      resDiv.classList.remove('hidden');
    });
  }

  // ==========================================
  // VIEW: 3D CAD STUDIO
  // ==========================================
  renderDesignStudio(planId, woodId, queryParams) {
    this.currentPlanId = planId;
    this.currentWoodId = woodId;
    const plan = getPlanById(planId);

    const isCustom = queryParams.get('isCustom') === '1' || planId === 'custom-cabinet';

    this.currentParams = {
      ...plan.defaults,
      length: parseInt(queryParams.get('l')) || (isCustom ? this.customCabinetConfig.width : plan.defaults.length),
      width: parseInt(queryParams.get('w')) || (isCustom ? this.customCabinetConfig.depth : plan.defaults.width),
      height: parseInt(queryParams.get('h')) || (isCustom ? this.customCabinetConfig.height : plan.defaults.height),
      thickness: parseInt(queryParams.get('t')) || (isCustom ? this.customCabinetConfig.thickness : plan.defaults.thickness)
    };

    this.viewEl.innerHTML = `
      <div id="designer">
        <!-- Top Tool Strip -->
        <div class="dtool">
          <select id="planPicker" class="i" style="width:auto;padding:6px 10px;font-size:13px;font-weight:700;">
            ${PLANS.map(p => `<option value="${p.id}" ${p.id === planId ? 'selected' : ''}>${p.roTitle}</option>`).join('')}
          </select>

          <select id="woodPicker" class="i" style="width:auto;padding:6px 10px;font-size:13px;">
            ${WOODS.map(w => `<option value="${w.id}" ${w.id === woodId ? 'selected' : ''}>🪵 ${w.name.split(' (')[0]}</option>`).join('')}
          </select>

          <button id="zoomIn3dBtn" title="Mărește perspectiva">🔍+</button>
          <button id="zoomOut3dBtn" title="Micșorează perspectiva">🔍−</button>
          <button id="toggleDoors3dBtn" title="Deschide / Închide Uși">🚪 Deschide Uși</button>
          <button id="toggleSection3dBtn" title="Plan de Secțiune / Tăietură interioară">🔪 Secțiune</button>
          <button id="toggleTransp3dBtn" title="Transparență carcasă">👻 Transparență</button>
          <button id="hidePart3dBtn" title="Ascunde piesa selectată">👁️ Ascunde</button>
          <button id="pullPart3dBtn" title="Trage / Deplasează piesa selectată">↔️ Trage Piesă</button>
          <button id="unhideAll3dBtn" title="Arată toate piesele ascunse">🔄 Arată Tot</button>
          <button id="toggleHw3dBtn" class="on" title="Arată / Ascunde Șuruburi & Feronerie 3D">🔩 Feronerie</button>
          <button id="resetCamBtn" title="Resetează camera">🔄 Centrare</button>
          <button id="paramsBtn">⚙️ Cote</button>
        </div>

        <!-- 3D Canvas Viewport -->
        <div id="d3">
          <div class="overlay-info" id="partInspector">
            <b>${isCustom ? 'Corp Custom Schițat' : plan.roTitle}</b>
            <div class="muted small">Apasă pe orice scândură pentru cote</div>
          </div>

          <!-- Exploded View Slider Floating Bar -->
          <div style="position:absolute;left:14px;right:75px;bottom:14px;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);border-radius:24px;padding:8px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 2px 8px rgba(0,0,0,.15);border:1px solid rgba(0,0,0,.06);">
            <span style="font-size:12px;font-weight:700;white-space:nowrap;">💥 Expandare 3D:</span>
            <input type="range" id="explodeSlider" min="0" max="100" value="0" style="flex:1;accent-color:var(--accent);">
            <span id="explodeVal" style="font-size:11px;font-weight:700;width:30px;">0%</span>
          </div>

          <!-- FAB Actions (Export PDF, Excel, STL, 2D, Joinery) -->
          <div class="fab-row">
            <button class="fab" id="joineryFab" title="Cote Îmbinări & Găurire">🔩</button>
            <button class="fab dark" id="exportPdfFab" title="Export Fișă Tehnică PDF">📄</button>
            <button class="fab dark" id="exportExcelFab" title="Export Lista Cumpărături Excel">📊</button>
            <button class="fab dark" id="blueprint2dFab" title="Plan 2D Cotat">📐</button>
            <button class="fab dark" id="exportStlFab" title="Export Model 3D STL">📦</button>
          </div>
        </div>
      </div>
    `;

    const d3Container = this.viewEl.querySelector('#d3');
    const inspector = this.viewEl.querySelector('#partInspector');

    this.activeStudio = new Studio3D(d3Container, {
      woodId: this.currentWoodId,
      onPartSelect: (part) => {
        if (part) {
          if (part.type) {
            inspector.innerHTML = `
              <b style="color:var(--accent);">🔩 ${part.name}</b>
              <div style="font-size:12px;margin-top:2px;color:#2e7d32;">
                Tip element: <b>${part.type.toUpperCase()}</b> • Asamblare mecanică
              </div>
            `;
          } else {
            inspector.innerHTML = `
              <b style="color:var(--accent);">🪵 ${part.name}</b>
              <div style="font-size:12px;margin-top:2px;">
                L: <b>${part.length}mm</b> • W: <b>${part.width}mm</b> • T: <b>${part.thickness}mm</b>
              </div>
            `;
          }
        } else {
          inspector.innerHTML = `
            <b>${isCustom ? 'Corp Custom Schițat' : plan.roTitle}</b>
            <div class="muted small">Apasă pe orice scândură sau șurub pentru detalii</div>
          `;
        }
      }
    });

    if (isCustom) {
      this.activeStudio.buildCustomCabinet(this.customCabinetConfig);
    } else {
      this.activeStudio.buildPlan(this.currentPlanId, this.currentParams);
    }

    this.bindDesignEvents(plan, isCustom);
  }

  bindDesignEvents(plan, isCustom) {
    const planPicker = this.viewEl.querySelector('#planPicker');
    const woodPicker = this.viewEl.querySelector('#woodPicker');
    const explodeSlider = this.viewEl.querySelector('#explodeSlider');
    const explodeVal = this.viewEl.querySelector('#explodeVal');
    const resetCamBtn = this.viewEl.querySelector('#resetCamBtn');
    const paramsBtn = this.viewEl.querySelector('#paramsBtn');
    const exportPdfFab = this.viewEl.querySelector('#exportPdfFab');
    const exportExcelFab = this.viewEl.querySelector('#exportExcelFab');
    const blueprint2dFab = this.viewEl.querySelector('#blueprint2dFab');
    const exportStlFab = this.viewEl.querySelector('#exportStlFab');
    const joineryFab = this.viewEl.querySelector('#joineryFab');

    planPicker.addEventListener('change', (e) => {
      window.location.hash = `#/design?plan=${e.target.value}&wood=${this.currentWoodId}`;
    });

    woodPicker.addEventListener('change', (e) => {
      this.currentWoodId = e.target.value;
      this.activeStudio.setWood(this.currentWoodId);
      this.showToast(`Textură schimbată: ${getWoodById(this.currentWoodId).name.split(' (')[0]}`);
    });

    explodeSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      explodeVal.textContent = `${val}%`;
      this.activeStudio.setExplode(val / 100);
    });

    resetCamBtn.addEventListener('click', () => {
      this.activeStudio.focusCamera();
    });

    const zoomInBtn = this.viewEl.querySelector('#zoomIn3dBtn');
    const zoomOutBtn = this.viewEl.querySelector('#zoomOut3dBtn');
    const toggleHwBtn = this.viewEl.querySelector('#toggleHw3dBtn');

    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => {
        this.activeStudio.zoomIn(0.8);
      });
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => {
        this.activeStudio.zoomOut(1.25);
      });
    }

    if (toggleHwBtn) {
      toggleHwBtn.addEventListener('click', () => {
        const isVisible = this.activeStudio.toggleHardware();
        toggleHwBtn.classList.toggle('on', isVisible);
        this.showToast(isVisible ? 'Feronerie 3D afișată' : 'Feronerie 3D ascunsă');
      });
    }

    const toggleDoorsBtn = this.viewEl.querySelector('#toggleDoors3dBtn');
    if (toggleDoorsBtn) {
      toggleDoorsBtn.addEventListener('click', () => {
        const isOpen = this.activeStudio.toggleDoors();
        toggleDoorsBtn.classList.toggle('on', isOpen);
        toggleDoorsBtn.textContent = isOpen ? '🚪 Închide Uși' : '🚪 Deschide Uși';
        this.showToast(isOpen ? 'Uși deschise (vezi compartimentare interioară)' : 'Uși închise');
      });
    }

    const toggleSectionBtn = this.viewEl.querySelector('#toggleSection3dBtn');
    if (toggleSectionBtn) {
      toggleSectionBtn.addEventListener('click', () => {
        const isCut = this.activeStudio.toggleSection();
        toggleSectionBtn.classList.toggle('on', isCut);
        this.showToast(isCut ? 'Plan secțiune activ (vedere interior)' : 'Plan secțiune dezactivat');
      });
    }

    const toggleTranspBtn = this.viewEl.querySelector('#toggleTransp3dBtn');
    if (toggleTranspBtn) {
      toggleTranspBtn.addEventListener('click', () => {
        const isTr = this.activeStudio.toggleTransparency();
        toggleTranspBtn.classList.toggle('on', isTr);
        this.showToast(isTr ? 'Transparență activă (35% opacitate)' : 'Opacitate normală 100%');
      });
    }

    const hidePartBtn = this.viewEl.querySelector('#hidePart3dBtn');
    if (hidePartBtn) {
      hidePartBtn.addEventListener('click', () => {
        const hiddenName = this.activeStudio.hideSelectedPart();
        if (hiddenName) {
          this.showToast(`Piesă ascunsă: ${hiddenName}`);
        } else {
          this.showToast('Selectează mai întâi o piesă din 3D!');
        }
      });
    }

    const pullPartBtn = this.viewEl.querySelector('#pullPart3dBtn');
    if (pullPartBtn) {
      pullPartBtn.addEventListener('click', () => {
        if (!this.activeStudio.selectedPart) {
          this.showToast('Selectează o piesă pentru a o trage!');
          return;
        }
        const pulled = this.activeStudio.pullSelectedPart(140);
        this.showToast(pulled ? 'Piesă extrasă din ansamblu' : 'Piesă repusă la loc');
      });
    }

    const unhideAllBtn = this.viewEl.querySelector('#unhideAll3dBtn');
    if (unhideAllBtn) {
      unhideAllBtn.addEventListener('click', () => {
        this.activeStudio.unhideAllParts();
        this.showToast('Toate piesele ascunse au fost restaurate!');
      });
    }

    // Cote & Îmbinări
    joineryFab.addEventListener('click', () => {
      const cabData = isCustom ? this.customCabinetConfig : {
        width: this.currentParams.length,
        height: this.currentParams.height,
        depth: this.currentParams.width,
        thickness: this.currentParams.thickness,
        shelves: [Math.round(this.currentParams.height / 2)],
        dividers: [],
        hasDoors: plan.id === 'custom-cabinet',
        hasDrawers: false,
        joineryType: 'confirmat'
      };
      this.openJoineryResultsModal(cabData);
    });

    paramsBtn.addEventListener('click', () => {
      this.openDimensionsModal(plan, isCustom);
    });

    exportPdfFab.addEventListener('click', async () => {
      this.showToast('Se generează fișa tehnică PDF...');
      const snap = this.activeStudio.getSnapshotURL();
      try {
        await exportTechnicalPDF({
          plan,
          params: this.currentParams,
          woodId: this.currentWoodId,
          snapshot3D: snap
        });
        this.showToast('✅ PDF descărcat cu succes!');
      } catch (err) {
        alert('Eroare export PDF: ' + err.message);
      }
    });

    exportExcelFab.addEventListener('click', () => {
      this.showToast('Se generează fișierul Excel (.xlsx)...');
      try {
        const bom = calculateBOM(plan, this.currentParams, this.currentWoodId);
        exportToExcel(bom, `Lemnaria_${plan.id}_BOM.xlsx`);
        this.showToast('✅ Fișier Excel descărcat!');
      } catch (err) {
        alert('Eroare export Excel: ' + err.message);
      }
    });

    blueprint2dFab.addEventListener('click', () => {
      this.openBlueprintModal(plan);
    });

    exportStlFab.addEventListener('click', () => {
      this.showToast('Se exportă modelul STL...');
      const stlData = this.activeStudio.exportSTL(false);
      const blob = new Blob([stlData], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `Lemnaria_${plan.id}.stl`;
      link.click();
      this.showToast('✅ Model STL descărcat!');
    });
  }

  openDimensionsModal(plan, isCustom) {
    const p = this.currentParams;
    this.openSheet(`
      <h3 style="margin:0 0 10px;">Reglaj Cote Parametrice 3D</h3>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div>
          <label class="f">Lungime / Lățime Față - L (mm)</label>
          <input type="number" id="paramL" class="i" value="${p.length}" step="20">
        </div>
        <div>
          <label class="f">Adâncime Corp - W/D (mm)</label>
          <input type="number" id="paramW" class="i" value="${p.width}" step="10">
        </div>
        <div>
          <label class="f">Înălțime Totală - H (mm)</label>
          <input type="number" id="paramH" class="i" value="${p.height}" step="10">
        </div>
        <div>
          <label class="f">Grosime Scândură / Panou - T (mm)</label>
          <input type="number" id="paramT" class="i" value="${p.thickness}" step="2">
        </div>
        <button class="btn acc block" id="applyParamsBtn" style="margin-top:12px;">
          Aplică Modificările în 3D
        </button>
      </div>
    `);

    document.getElementById('applyParamsBtn').addEventListener('click', () => {
      this.currentParams.length = parseInt(document.getElementById('paramL').value) || p.length;
      this.currentParams.width = parseInt(document.getElementById('paramW').value) || p.width;
      this.currentParams.height = parseInt(document.getElementById('paramH').value) || p.height;
      this.currentParams.thickness = parseInt(document.getElementById('paramT').value) || p.thickness;

      if (isCustom) {
        this.customCabinetConfig.width = this.currentParams.length;
        this.customCabinetConfig.depth = this.currentParams.width;
        this.customCabinetConfig.height = this.currentParams.height;
        this.customCabinetConfig.thickness = this.currentParams.thickness;
        this.activeStudio.buildCustomCabinet(this.customCabinetConfig);
      } else {
        this.activeStudio.buildPlan(this.currentPlanId, this.currentParams);
      }
      this.closeSheet();
      this.showToast('Model 3D actualizat cu noile cote!');
    });
  }

  openBlueprintModal(plan) {
    this.openSheet(`
      <h3 style="margin:0 0 8px;">Desen Tehnic 2D Cotat</h3>
      <p class="muted small" style="margin:0 0 10px;">Proiecții ortogonale cotate conform standardelor de tâmplărie</p>
      <div style="background:#fff;border-radius:12px;overflow:hidden;border:1px solid var(--line);text-align:center;">
        <canvas id="blueprintCanvas" width="600" height="420" style="width:100%;height:auto;display:block;"></canvas>
      </div>
      <div class="row" style="margin-top:12px;gap:8px;">
        <button class="btn sm acc grow" id="saveBlueprintImgBtn">Descarcă Schiță Imagine</button>
      </div>
    `);

    const canvas = document.getElementById('blueprintCanvas');
    render2DBlueprint(canvas, plan, this.currentParams);

    document.getElementById('saveBlueprintImgBtn').addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `Lemnaria_${plan.id}_Plan2D.png`;
      link.click();
      this.showToast('Schiță salvată!');
    });
  }

  // ==========================================
  // VIEW: AI COPILOT
  // ==========================================
  renderAI(initialPrompt = '') {
    const aiCopilot = new WoodAICopilot(this.viewEl, {
      onToast: (msg) => this.showToast(msg)
    });
    aiCopilot.render();

    if (initialPrompt) {
      aiCopilot.sendUserMessage(initialPrompt);
    }
  }

  // ==========================================
  // VIEW: ME (Profil, PWA Install & Setări)
  // ==========================================
  renderMe() {
    const apiKey = localStorage.getItem('lemnaria_gemini_key') || '';
    this.viewEl.innerHTML = `
      <div class="card" style="margin-top:4px;">
        <div class="row" style="gap:14px;">
          <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg, #e8772e, #8a4014);display:flex;align-items:center;justify-content:center;color:#fff;font-size:26px;">
            🪚
          </div>
          <div>
            <h3 style="margin:0;">Atelierul Meu</h3>
            <span class="badge g" style="margin-top:4px;">Lemnaria Pro • 100% Gratuit</span>
          </div>
        </div>
      </div>

      <!-- Instalare PWA Offline Independentă -->
      <div class="card" style="background:linear-gradient(135deg, #2a2017, #18130f);color:#fff;border:1px solid #4a3828;">
        <div class="row between">
          <div>
            <h4 style="margin:0 0 4px;color:#fff;">Aplicație Independentă pe Telefon</h4>
            <p class="small" style="margin:0;color:#c9baa9;">Funcționează 100% offline fără conexiune și fără Termux deschis</p>
          </div>
          <span class="badge g">Offline PWA</span>
        </div>
        <button class="btn acc block" id="installPwaBtn" style="margin-top:12px;padding:12px;">
          📲 Instalează pe Ecranul Telefonului
        </button>
      </div>

      <div class="card">
        <h4 style="margin:0 0 10px;">Configurare Inteligență Artificială</h4>
        <label class="f">Cheie Google Gemini API (opțională)</label>
        <input type="password" id="meApiKeyInput" class="i" placeholder="AIzaSy..." value="${apiKey}">
        <div class="small muted" style="margin:6px 0 12px;">
          Permite asistență AI live multimodală nelimitată direct de pe telefon. Fără cheie, aplicația folosește motorul offline expert.
        </div>
        <button class="btn sm acc" id="saveApiKeyBtn">Salvează Cheia</button>
      </div>

      <div class="card">
        <h4 style="margin:0 0 10px;">Despre Aplicație</h4>
        <div style="font-size:13px;line-height:1.5;">
          <b>Lemnaria</b> este o suită profesională completă de tâmplărie concepută ca o replică superioară și gratuită a aplicațiilor comerciale cu abonament.<br><br>
          ✨ <b>Funcționalități incluse:</b><br>
          • <b>Schițator 2D Interactiv & AI Extruder</b>: tragi linii și obții dulapul 3D gata mobilat.<br>
          • <b>Calcul Automat Îmbinări</b>: număr de confirmate, dibluri, balamale, came Minifix.<br>
          • <b>Plan Găurire Cotat</b>: desenează axele la 37mm și cotele exacte de găurire.<br>
          • <b>Studio 3D Three.js</b> cu expandare radială (Exploded view) & export STL.<br>
          • <b>Export PDF & Excel</b> cu BOM complet și optimizator de debitare scânduri.<br>
          • <b>Identificator Specii Lemn</b> prin cameră foto și recunoaștere textură fibră.
        </div>
      </div>
    `;

    // Buton Salvare Cheie API
    this.viewEl.querySelector('#saveApiKeyBtn').addEventListener('click', () => {
      const val = this.viewEl.querySelector('#meApiKeyInput').value.trim();
      localStorage.setItem('lemnaria_gemini_key', val);
      this.showToast('Cheie API salvată cu succes!');
    });

    // Buton Instalare PWA
    const installBtn = this.viewEl.querySelector('#installPwaBtn');
    installBtn.addEventListener('click', async () => {
      if (window.deferredPWAInstallPrompt) {
        window.deferredPWAInstallPrompt.prompt();
        const choice = await window.deferredPWAInstallPrompt.userChoice;
        if (choice.outcome === 'accepted') {
          this.showToast('Aplicație instalată pe ecran!');
        }
        window.deferredPWAInstallPrompt = null;
      } else {
        alert('Pentru a instala aplicația:\n1. În browserul telefonului (Chrome), apasă pe meniul cu 3 puncte (⋮) din dreapta sus.\n2. Selectează „Adaugă pe ecranul de pornire” sau „Instalează aplicația”.\n\nAplicația va rula apoi ca o aplicație nativă, 100% offline, fără a mai deschide Termux!');
      }
    });
  }
}

// Pornire aplicație la încărcare DOM
window.addEventListener('DOMContentLoaded', () => {
  new LemnariaApp();
});
