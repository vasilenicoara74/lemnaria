// Modul Atelier CAD Configurator Profesional – Drag & Drop, Bibliotecă Componente & Inspector Parametric
// Oferă libertate totală de proiectare mobilier cu elemente modulare, cotare ISO și randare avansată

export const CAD_PALETTE_ITEMS = [
  { type: 'shelf', icon: '➖', title: 'Poliță 18mm', sub: 'Raft ajustabil', defaultT: 18 },
  { type: 'thickShelf', icon: '🪵', title: 'Poliță Grea 28mm', sub: 'Sarcină masivă', defaultT: 28 },
  { type: 'divider', icon: '┃', title: 'Montant Vertical', sub: 'Separator nișă' },
  { type: 'door-left', icon: '🚪', title: 'Ușă Stânga', sub: 'Balama Soft-Close' },
  { type: 'door-right', icon: '🚪', title: 'Ușă Dreapta', sub: 'Balama Soft-Close' },
  { type: 'door-double', icon: '🚪🚪', title: 'Uși Duble', sub: 'Pereche simetrică' },
  { type: 'drawer-std', icon: '🗄️', title: 'Sertar H=160', sub: 'Glisieră amortizată', height: 160 },
  { type: 'drawer-deep', icon: '🗄️', title: 'Sertar Oală H=280', sub: 'Depozitare adâncă', height: 280 },
  { type: 'drawer-triple', icon: '🗄️🗄️', title: 'Bloc 3 Sertare', sub: 'Coloană egală' },
  { type: 'rod', icon: '👔', title: 'Bară Umerașe', sub: 'Tub cromat dressing' },
  { type: 'led', icon: '💡', title: 'Bandă LED', sub: 'Canal frezat 12V' },
  { type: 'legs', icon: '🦶', title: 'Picioare Reglabile', sub: 'H=100mm plintă' }
];

export class SketcherStudio {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;

    // Configurație structură complet modulară
    this.cabinet = {
      width: 1000,
      height: 1800,
      depth: 500,
      thickness: 18,
      joineryType: 'confirmat',
      hasBack: true,
      hasLocks: false,
      hasPushToOpen: false,
      hasAngleBrackets: false,
      hasLegs: false,
      // Polițe configurabile: { id, y, x1, x2, thickness, material, edgeBand, joinery }
      shelves: [
        { id: 'sh_1', y: 400, x1: 18, x2: 982, thickness: 18, material: 'PAL Stejar 18mm', joinery: 'confirmat' },
        { id: 'sh_2', y: 1200, x1: 18, x2: 982, thickness: 18, material: 'PAL Stejar 18mm', joinery: 'confirmat' }
      ],
      // Montanți: { id, x, y1, y2, thickness, material }
      dividers: [
        { id: 'div_1', x: 500, y1: 18, y2: 1782, thickness: 18, material: 'PAL Stejar 18mm' }
      ],
      // Uși: { id, x1, x2, y1, y2, type: 'single-left'|'single-right'|'double', handle: 'bar'|'knob'|'push' }
      doors: [
        { id: 'dr_1', x1: 18, x2: 500, y1: 18, y2: 1200, type: 'single-left', handle: 'bar' }
      ],
      // Sertare: { id, x1, x2, y1, y2, height, slides: 'soft-close' }
      drawers: [
        { id: 'dw_1', x1: 500, x2: 982, y1: 18, y2: 240, height: 210, slides: 'soft-close' }
      ],
      // Bare haine: { id, x1, x2, y }
      rods: [
        { id: 'rod_1', x1: 18, x2: 500, y: 1140 }
      ],
      // Benzi LED: { id, x1, x2, y }
      leds: []
    };

    this.selectedTool = 'select'; // unealtă activă sau tip element selectat din paletă
    this.selectedItem = null;
    this.viewMode = 'technical'; // 'technical', 'interior', 'facade'
    this.zoomScale = 1.0;
    this.panOffset = { x: 0, y: 0 };
    this.isDrawing = false;
    this.drawingStroke = null;
    this.draggingItem = null;
    this.dragStartPos = null;
    this.dropTargetComp = null;

    // Drag & Drop din paletă
    this.paletteDragItem = null;
    this.ghostEl = null;

    this.normalizeCabinet();
  }

  normalizeCabinet() {
    const W = this.cabinet.width || 1000;
    const H = this.cabinet.height || 1800;
    const T = this.cabinet.thickness || 18;

    if (Array.isArray(this.cabinet.shelves)) {
      this.cabinet.shelves = this.cabinet.shelves.map((sh, idx) => {
        if (typeof sh === 'number') {
          return { id: `sh_${idx + 1}`, y: sh, x1: T, x2: W - T, thickness: T };
        }
        return {
          id: sh.id || `sh_${idx + 1}`,
          y: Math.round(sh.y),
          x1: Math.round(sh.x1 != null ? sh.x1 : T),
          x2: Math.round(sh.x2 != null ? sh.x2 : W - T),
          thickness: sh.thickness || T,
          material: sh.material || 'PAL Standard 18mm',
          joinery: sh.joinery || 'confirmat'
        };
      });
    } else {
      this.cabinet.shelves = [];
    }

    if (Array.isArray(this.cabinet.dividers)) {
      this.cabinet.dividers = this.cabinet.dividers.map((dv, idx) => {
        if (typeof dv === 'number') {
          return { id: `div_${idx + 1}`, x: dv, y1: T, y2: H - T, thickness: T };
        }
        return {
          id: dv.id || `div_${idx + 1}`,
          x: Math.round(dv.x),
          y1: Math.round(dv.y1 != null ? dv.y1 : T),
          y2: Math.round(dv.y2 != null ? dv.y2 : H - T),
          thickness: dv.thickness || T,
          material: dv.material || 'PAL Standard 18mm'
        };
      });
    } else {
      this.cabinet.dividers = [];
    }

    if (!Array.isArray(this.cabinet.doors)) this.cabinet.doors = [];
    if (!Array.isArray(this.cabinet.drawers)) this.cabinet.drawers = [];
    if (!Array.isArray(this.cabinet.rods)) this.cabinet.rods = [];
    if (!Array.isArray(this.cabinet.leds)) this.cabinet.leds = [];
  }

  render() {
    this.container.innerHTML = `
      <div class="card" style="margin-top:0;padding:12px;">
        <div class="row between" style="align-items:flex-start;">
          <div>
            <h3 style="margin:0 0 2px;">Configurator CAD Mobilier</h3>
            <span class="muted small">Trage elemente din catalog direct în corp (Drag & Drop)</span>
          </div>
          <div style="display:flex;gap:4px;">
            <button class="btn sm ${this.viewMode === 'technical' ? 'acc' : 'ghost'}" id="vmTechBtn" title="Vedere tehnică cotată">📐 Tehnic</button>
            <button class="btn sm ${this.viewMode === 'interior' ? 'acc' : 'ghost'}" id="vmIntBtn" title="Vedere structură interioară">📂 Interior</button>
            <button class="btn sm ${this.viewMode === 'facade' ? 'acc' : 'ghost'}" id="vmFacBtn" title="Vedere fațadă cu uși">🚪 Fațadă</button>
          </div>
        </div>

        <!-- Catalog Vizual de Componente Drag & Drop -->
        <div style="margin-top:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <span style="font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;">Bibliotecă Elemente Modulare (Trage în Corp):</span>
            <span style="font-size:11px;color:var(--accent);font-weight:600;">👆 Atinge sau Trage</span>
          </div>
          <div class="cad-palette" id="cadPalette">
            ${CAD_PALETTE_ITEMS.map(item => `
              <div class="cad-item-card" data-type="${item.type}">
                <div class="cad-item-icon">${item.icon}</div>
                <div class="cad-item-title">${item.title}</div>
                <div class="cad-item-sub">${item.sub}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Bara Secundară de Acțiuni Rapide -->
        <div class="dtool" style="margin-top:4px;border-radius:10px;padding:6px 8px;border:1px solid var(--line);align-items:center;">
          <button class="btn sm ${this.selectedTool === 'select' ? 'acc' : 'ghost'}" data-action="select" title="Selectează și trage elemente direct pe ecran">
            👆 Selectare / Mutare
          </button>
          <button class="btn sm ${this.selectedTool === 'eraser' ? 'acc' : 'ghost'}" data-action="eraser" title="Șterge oricare element atins">
            🧹 Radieră
          </button>
          <div class="sep"></div>
          <button class="btn sm ghost" id="cadPresetEmpty" title="Golește interiorul pentru libertate totală de la zero">
            ✨ Pânză Goală
          </button>
          <button class="btn sm ghost" id="cadPresetDressing" title="Încarcă dressing mare">
            👗 Dressing
          </button>
          <button class="btn sm ghost" id="cadPresetKitchen" title="Încarcă corp bucătărie">
            🍽️ Bucătărie
          </button>
          <button class="btn sm ghost" id="cadPresetDresser" title="Comodă 4 sertare">
            🗄️ Comodă
          </button>
        </div>

        <!-- Canvas CAD Interactiv cu Ghidaje Magnetice și Drop Zone -->
        <div style="position:relative;margin-top:10px;background:#fcfaf7;border-radius:14px;border:1px solid var(--line);overflow:hidden;touch-action:none;">
          <canvas id="sketchCanvas" width="560" height="460" style="display:block;width:100%;height:auto;cursor:crosshair;"></canvas>
          
          <!-- Butoane plutitoare Zoom & Pan -->
          <div style="position:absolute;top:10px;right:10px;display:flex;flex-direction:column;gap:6px;z-index:4;">
            <button id="cadZoomIn" class="btn sm ghost" style="background:rgba(255,255,255,.94);font-weight:bold;padding:6px 10px;box-shadow:0 2px 5px rgba(0,0,0,.12);">🔍+</button>
            <button id="cadZoomOut" class="btn sm ghost" style="background:rgba(255,255,255,.94);font-weight:bold;padding:6px 10px;box-shadow:0 2px 5px rgba(0,0,0,.12);">🔍−</button>
            <button id="cadZoomReset" class="btn sm ghost" style="background:rgba(255,255,255,.94);font-weight:bold;padding:4px 6px;font-size:11px;box-shadow:0 2px 5px rgba(0,0,0,.12);">100%</button>
          </div>

          <!-- Bară de Stare / Prompt Interactiv -->
          <div id="cadStatusBar" style="position:absolute;bottom:8px;left:10px;right:10px;font-size:12px;color:#3e3328;background:rgba(255,255,255,.95);padding:6px 12px;border-radius:10px;box-shadow:0 1px 6px rgba(0,0,0,.12);display:flex;justify-content:space-between;align-items:center;z-index:4;">
            <span id="cadStatusText" style="font-weight:600;">Trage o piesă din bibliotecă sau atinge corpul pentru a modifica</span>
            <span id="cadCoordsBadge" style="font-size:11px;font-weight:700;color:var(--accent);"></span>
          </div>
        </div>

        <!-- PANOU INSPECTOR / CONFIGURATOR ELEMENT SELECTAT -->
        <div id="cadInspectorContainer" class="cad-inspector" style="display:none;">
          <!-- Generat dinamic în updateInspector() -->
        </div>

        <!-- Cote Corp Exterior & Feronerie Globală -->
        <div class="card" style="margin:12px 0 0;background:#fff;border:1px solid var(--line);padding:12px;">
          <h4 style="margin:0 0 8px;">Cote Corp General & Tehnologie Fabricație</h4>
          <div class="row" style="gap:8px;">
            <div class="grow">
              <label class="f">Lățime Totală - L (mm)</label>
              <input type="number" id="cabW" class="i" value="${this.cabinet.width}" step="50">
            </div>
            <div class="grow">
              <label class="f">Înălțime Totală - H (mm)</label>
              <input type="number" id="cabH" class="i" value="${this.cabinet.height}" step="50">
            </div>
            <div class="grow">
              <label class="f">Adâncime - D (mm)</label>
              <input type="number" id="cabD" class="i" value="${this.cabinet.depth}" step="50">
            </div>
          </div>
          <div class="row" style="gap:8px;margin-top:8px;">
            <div class="grow">
              <label class="f">Grosime Panou Carcasă</label>
              <select id="cabT" class="i">
                <option value="18" ${this.cabinet.thickness === 18 ? 'selected' : ''}>18 mm (Standard PAL Melaminat)</option>
                <option value="22" ${this.cabinet.thickness === 22 ? 'selected' : ''}>22 mm (Robustețe mărită)</option>
                <option value="28" ${this.cabinet.thickness === 28 ? 'selected' : ''}>28 mm (Lemn masiv gros)</option>
              </select>
            </div>
            <div class="grow">
              <label class="f">Îmbinare Structură</label>
              <select id="cabJoinery" class="i">
                <option value="confirmat" ${this.cabinet.joineryType === 'confirmat' ? 'selected' : ''}>Euro-șuruburi Confirmate 7x50mm</option>
                <option value="dowel" ${this.cabinet.joineryType === 'dowel' ? 'selected' : ''}>Dibluri Lemn Fag 8x35mm (Invizibil)</option>
                <option value="minifix" ${this.cabinet.joineryType === 'minifix' ? 'selected' : ''}>Came Minifix 15mm (Demontabil)</option>
                <option value="pocket" ${this.cabinet.joineryType === 'pocket' ? 'selected' : ''}>Pocket-Holes Kreg 32mm</option>
              </select>
            </div>
          </div>

          <div style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--line);display:flex;flex-wrap:wrap;gap:12px;font-size:13px;">
            <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
              <input type="checkbox" id="cabBack" ${this.cabinet.hasBack ? 'checked' : ''}>
              <span>Spate HDF / PFL 3mm montat în falt</span>
            </label>
            <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
              <input type="checkbox" id="cabPushOpen" ${this.cabinet.hasPushToOpen ? 'checked' : ''}>
              <span>Pistoane Push-to-Open (fără mânere)</span>
            </label>
            <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
              <input type="checkbox" id="cabLegs" ${this.cabinet.hasLegs ? 'checked' : ''}>
              <span>Picioare reglabile H=100mm + plintă</span>
            </label>
          </div>
        </div>

        <!-- Buton Principal: Treci în 3D & Calcul Îmbinări -->
        <div style="margin-top:14px;display:flex;flex-direction:column;gap:8px;">
          <button class="btn acc block" id="extrude3dBtn" style="padding:14px;font-size:16px;">
            🚀 Generează Model 3D + Cote Îmbinări
          </button>
        </div>
      </div>
    `;

    this.bindEvents();
    this.redrawCanvas();
  }

  bindEvents() {
    const canvas = this.container.querySelector('#sketchCanvas');

    // Drag and drop din paleta de componente
    this.setupPaletteDragDrop();

    // Evenimente pe Canvas (Pointer)
    canvas.addEventListener('pointerdown', (e) => this.handleCanvasPointerDown(e));
    canvas.addEventListener('pointermove', (e) => this.handleCanvasPointerMove(e));
    canvas.addEventListener('pointerup', (e) => this.handleCanvasPointerUp(e));
    canvas.addEventListener('pointercancel', (e) => this.handleCanvasPointerUp(e));

    // Moduri de vizualizare
    const vmTech = this.container.querySelector('#vmTechBtn');
    const vmInt = this.container.querySelector('#vmIntBtn');
    const vmFac = this.container.querySelector('#vmFacBtn');

    vmTech.addEventListener('click', () => {
      this.viewMode = 'technical';
      vmTech.classList.replace('ghost', 'acc');
      vmInt.classList.replace('acc', 'ghost');
      vmFac.classList.replace('acc', 'ghost');
      this.redrawCanvas();
    });

    vmInt.addEventListener('click', () => {
      this.viewMode = 'interior';
      vmInt.classList.replace('ghost', 'acc');
      vmTech.classList.replace('acc', 'ghost');
      vmFac.classList.replace('acc', 'ghost');
      this.redrawCanvas();
    });

    vmFac.addEventListener('click', () => {
      this.viewMode = 'facade';
      vmFac.classList.replace('ghost', 'acc');
      vmTech.classList.replace('acc', 'ghost');
      vmInt.classList.replace('acc', 'ghost');
      this.redrawCanvas();
    });

    // Butoane acțiuni secundare
    this.container.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        this.selectedTool = action;
        this.container.querySelectorAll('[data-action]').forEach(b => b.classList.replace('acc', 'ghost'));
        this.container.querySelectorAll('.cad-item-card').forEach(c => c.classList.remove('active-source'));
        btn.classList.replace('ghost', 'acc');
        if (action === 'eraser') {
          this.setStatusText('🧹 Mod Radieră: Atinge orice piesă pentru a o șterge.');
        } else {
          this.setStatusText('👆 Mod Selectare: Atinge sau trage de piese direct pe ecran.');
        }
      });
    });

    // Preseturi
    this.container.querySelector('#cadPresetEmpty').addEventListener('click', () => {
      this.cabinet.shelves = [];
      this.cabinet.dividers = [];
      this.cabinet.doors = [];
      this.cabinet.drawers = [];
      this.cabinet.rods = [];
      this.cabinet.leds = [];
      this.selectedItem = null;
      this.updateInspector();
      this.redrawCanvas();
      this.showToast('✨ Pânză goală încărcată! Adaugă elemente libere.');
    });

    this.container.querySelector('#cadPresetDressing').addEventListener('click', () => {
      this.loadDressingPreset();
    });

    this.container.querySelector('#cadPresetKitchen').addEventListener('click', () => {
      this.loadKitchenPreset();
    });

    this.container.querySelector('#cadPresetDresser').addEventListener('click', () => {
      this.loadDresserPreset();
    });

    // Zoom & Centrare
    this.container.querySelector('#cadZoomIn').addEventListener('click', () => {
      this.zoomScale = Math.min(2.5, this.zoomScale + 0.2);
      this.redrawCanvas();
    });
    this.container.querySelector('#cadZoomOut').addEventListener('click', () => {
      this.zoomScale = Math.max(0.6, this.zoomScale - 0.2);
      this.redrawCanvas();
    });
    this.container.querySelector('#cadZoomReset').addEventListener('click', () => {
      this.zoomScale = 1.0;
      this.panOffset = { x: 0, y: 0 };
      this.redrawCanvas();
    });

    // Actualizare parametri carcasă
    const wIn = this.container.querySelector('#cabW');
    const hIn = this.container.querySelector('#cabH');
    const dIn = this.container.querySelector('#cabD');
    const tIn = this.container.querySelector('#cabT');
    const jIn = this.container.querySelector('#cabJoinery');
    const backCb = this.container.querySelector('#cabBack');
    const pushCb = this.container.querySelector('#cabPushOpen');
    const legsCb = this.container.querySelector('#cabLegs');

    const updateCab = () => {
      this.cabinet.width = Math.max(200, parseInt(wIn.value) || 1000);
      this.cabinet.height = Math.max(200, parseInt(hIn.value) || 1800);
      this.cabinet.depth = Math.max(150, parseInt(dIn.value) || 500);
      this.cabinet.thickness = parseInt(tIn.value) || 18;
      this.cabinet.joineryType = jIn.value;
      this.cabinet.hasBack = backCb.checked;
      this.cabinet.hasPushToOpen = pushCb.checked;
      this.cabinet.hasLegs = legsCb.checked;
      this.normalizeCabinet();
      this.redrawCanvas();
    };

    wIn.addEventListener('change', updateCab);
    hIn.addEventListener('change', updateCab);
    dIn.addEventListener('change', updateCab);
    tIn.addEventListener('change', updateCab);
    jIn.addEventListener('change', updateCab);
    backCb.addEventListener('change', updateCab);
    pushCb.addEventListener('change', updateCab);
    legsCb.addEventListener('change', updateCab);

    // Buton Generare 3D
    this.container.querySelector('#extrude3dBtn').addEventListener('click', () => {
      updateCab();
      if (this.options.onExtrude) {
        this.options.onExtrude(this.cabinet);
      }
    });
  }

  setupPaletteDragDrop() {
    const cards = this.container.querySelectorAll('.cad-item-card');
    const canvas = this.container.querySelector('#sketchCanvas');

    cards.forEach(card => {
      const type = card.dataset.type;

      // Pointer down pe card
      card.addEventListener('pointerdown', (e) => {
        card.setPointerCapture(e.pointerId);
        this.paletteDragItem = CAD_PALETTE_ITEMS.find(p => p.type === type);

        // Highlight card activ
        cards.forEach(c => c.classList.remove('active-source'));
        card.classList.add('active-source');

        // Creem element ghost plutitor
        if (!this.ghostEl) {
          this.ghostEl = document.createElement('div');
          this.ghostEl.className = 'cad-ghost';
          document.body.appendChild(this.ghostEl);
        }
        this.ghostEl.innerHTML = `${this.paletteDragItem.icon} <span>${this.paletteDragItem.title}</span>`;
        this.ghostEl.style.left = `${e.clientX}px`;
        this.ghostEl.style.top = `${e.clientY}px`;
        this.ghostEl.style.display = 'flex';

        this.setStatusText(`Trage piesa peste corpul de mobilier și eliberează!`);
      });

      card.addEventListener('pointermove', (e) => {
        if (!this.paletteDragItem || !this.ghostEl) return;
        this.ghostEl.style.left = `${e.clientX}px`;
        this.ghostEl.style.top = `${e.clientY}px`;

        // Verificăm dacă suntem deasupra canvas-ului
        const rect = canvas.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
          const scaleX = canvas.width / rect.width;
          const scaleY = canvas.height / rect.height;
          const px = (e.clientX - rect.left) * scaleX;
          const py = (e.clientY - rect.top) * scaleY;
          const bounds = this.getBoxBounds(canvas);
          const { mmX, mmY } = this.pixelToMm(px, py, bounds);

          this.dropTargetComp = this.findCompartmentAt(mmX, mmY);
          this.redrawCanvas();
        } else {
          if (this.dropTargetComp) {
            this.dropTargetComp = null;
            this.redrawCanvas();
          }
        }
      });

      const handleEnd = (e) => {
        if (!this.paletteDragItem) return;
        const droppedType = this.paletteDragItem.type;
        this.paletteDragItem = null;

        if (this.ghostEl) {
          this.ghostEl.remove();
          this.ghostEl = null;
        }

        const rect = canvas.getBoundingClientRect();
        const wasOverCanvas = (e.clientX >= rect.left && e.clientX <= rect.right &&
                               e.clientY >= rect.top && e.clientY <= rect.bottom);

        if (wasOverCanvas && this.dropTargetComp) {
          this.instantiateDroppedItem(droppedType, this.dropTargetComp);
        } else if (!wasOverCanvas) {
          // A fost doar un simplu tap pe card -> comută unealta activă pe acest tip
          this.selectedTool = droppedType;
          this.setStatusText(`Ai selectat: ${card.querySelector('.cad-item-title').textContent}. Atinge nișa unde vrei să o plasezi!`);
        }

        this.dropTargetComp = null;
        this.redrawCanvas();
      };

      card.addEventListener('pointerup', handleEnd);
      card.addEventListener('pointercancel', handleEnd);
    });
  }

  instantiateDroppedItem(type, comp) {
    const T = this.cabinet.thickness;

    if (type === 'shelf' || type === 'thickShelf') {
      const shT = type === 'thickShelf' ? 28 : 18;
      const y = Math.round((comp.y1 + comp.y2) / 20) * 10;
      const newShelf = {
        id: `sh_${Date.now()}`,
        y,
        x1: comp.x1,
        x2: comp.x2,
        thickness: shT,
        material: shT === 28 ? 'Lemn Masiv Ranforsat 28mm' : 'PAL Melaminat 18mm',
        joinery: this.cabinet.joineryType
      };
      this.cabinet.shelves.push(newShelf);
      this.selectedItem = { type: 'shelf', id: newShelf.id, val: y, item: newShelf };
      this.showToast(`Poliță montată la cota Y=${y}mm (L=${comp.x2 - comp.x1}mm)!`);

    } else if (type === 'divider') {
      const x = Math.round((comp.x1 + comp.x2) / 20) * 10;
      const newDiv = {
        id: `div_${Date.now()}`,
        x,
        y1: comp.y1,
        y2: comp.y2,
        thickness: T,
        material: 'PAL Melaminat 18mm'
      };
      this.cabinet.dividers.push(newDiv);
      this.selectedItem = { type: 'divider', id: newDiv.id, val: x, item: newDiv };
      this.showToast(`Montant despărțitor montat la X=${x}mm (H=${comp.y2 - comp.y1}mm)!`);

    } else if (type === 'door-left' || type === 'door-right' || type === 'door-double') {
      const doorType = type === 'door-left' ? 'single-left' : (type === 'door-right' ? 'single-right' : 'double');
      const newDoor = {
        id: `door_${Date.now()}`,
        x1: comp.x1,
        x2: comp.x2,
        y1: comp.y1,
        y2: comp.y2,
        type: doorType,
        handle: 'bar'
      };
      this.cabinet.doors.push(newDoor);
      this.selectedItem = { type: 'door', id: newDoor.id, item: newDoor };
      this.showToast(`Ușă montată pe nișa ${comp.width}x${comp.height}mm!`);

    } else if (type === 'drawer-std' || type === 'drawer-deep') {
      const dH = type === 'drawer-deep' ? Math.min(comp.height, 280) : Math.min(comp.height, 160);
      const newDrawer = {
        id: `dw_${Date.now()}`,
        x1: comp.x1,
        x2: comp.x2,
        y1: comp.y1,
        y2: comp.y1 + dH,
        height: dH,
        slides: 'soft-close'
      };
      this.cabinet.drawers.push(newDrawer);
      this.selectedItem = { type: 'drawer', id: newDrawer.id, item: newDrawer };
      this.showToast(`Sertar montat (H=${dH}mm)!`);

    } else if (type === 'drawer-triple') {
      // Împarte nișa în 3 sertare egale
      const totalH = comp.height - 12;
      const eachH = Math.floor(totalH / 3);
      for (let i = 0; i < 3; i++) {
        const sy1 = comp.y1 + i * (eachH + 4);
        this.cabinet.drawers.push({
          id: `dw_${Date.now()}_${i}`,
          x1: comp.x1,
          x2: comp.x2,
          y1: sy1,
          y2: sy1 + eachH,
          height: eachH,
          slides: 'soft-close'
        });
      }
      this.showToast(`Bloc de 3 sertare montat în nișă!`);

    } else if (type === 'rod') {
      const newRod = {
        id: `rod_${Date.now()}`,
        x1: comp.x1,
        x2: comp.x2,
        y: Math.max(comp.y1 + 100, comp.y2 - 60)
      };
      this.cabinet.rods.push(newRod);
      this.selectedItem = { type: 'rod', id: newRod.id, item: newRod };
      this.showToast(`Bară de haine umerașe montată!`);

    } else if (type === 'led') {
      const newLed = {
        id: `led_${Date.now()}`,
        x1: comp.x1,
        x2: comp.x2,
        y: comp.y2 - 12
      };
      this.cabinet.leds.push(newLed);
      this.selectedItem = { type: 'led', id: newLed.id, item: newLed };
      this.showToast(`Bandă LED montată în tavanul nișei!`);

    } else if (type === 'legs') {
      this.cabinet.hasLegs = true;
      const legsCb = this.container.querySelector('#cabLegs');
      if (legsCb) legsCb.checked = true;
      this.showToast(`Picioare reglabile activate la baza dulapului!`);
    }

    this.updateInspector();
  }

  handleCanvasPointerDown(e) {
    const canvas = this.container.querySelector('#sketchCanvas');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const px = (e.clientX - rect.left) * scaleX;
    const py = (e.clientY - rect.top) * scaleY;

    canvas.setPointerCapture(e.pointerId);
    const bounds = this.getBoxBounds(canvas);
    const { mmX, mmY } = this.pixelToMm(px, py, bounds);

    // Dacă utilizatorul a selectat o unealtă din paletă și dă click pe canvas
    const matchingPalette = CAD_PALETTE_ITEMS.find(p => p.type === this.selectedTool);
    if (matchingPalette) {
      const comp = this.findCompartmentAt(mmX, mmY);
      if (comp) {
        this.instantiateDroppedItem(matchingPalette.type, comp);
        this.selectedTool = 'select';
        this.container.querySelectorAll('.cad-item-card').forEach(c => c.classList.remove('active-source'));
        this.redrawCanvas();
        return;
      }
    }

    if (this.selectedTool === 'eraser') {
      const item = this.findItemNear(mmX, mmY);
      if (item) {
        this.deleteItem(item);
        this.selectedItem = null;
        this.updateInspector();
        this.redrawCanvas();
      }
      return;
    }

    // Căutare piesă existentă pentru selectare și drag & drop direct pe canvas
    const hitItem = this.findItemNear(mmX, mmY);
    if (hitItem) {
      this.selectedItem = hitItem;
      this.draggingItem = hitItem;
      this.dragStartPos = { mmX, mmY };
      this.updateInspector();
      this.redrawCanvas();
      return;
    }

    // Deselectare dacă a apăsat pe spațiu gol
    this.selectedItem = null;
    this.updateInspector();
    this.redrawCanvas();
  }

  handleCanvasPointerMove(e) {
    const canvas = this.container.querySelector('#sketchCanvas');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const px = (e.clientX - rect.left) * scaleX;
    const py = (e.clientY - rect.top) * scaleY;
    const bounds = this.getBoxBounds(canvas);
    const { mmX, mmY } = this.pixelToMm(px, py, bounds);

    const coordsBadge = this.container.querySelector('#cadCoordsBadge');
    if (coordsBadge) {
      coordsBadge.textContent = `X: ${mmX} mm | Y: ${mmY} mm`;
    }

    if (this.draggingItem) {
      // Glisare piesă direct pe ecran cu snap magnetic la pas de 32mm sau 10mm
      const snapVal = Math.round((this.draggingItem.type === 'shelf' || this.draggingItem.type === 'rod' ? mmY : mmX) / 10) * 10;

      if (this.draggingItem.type === 'shelf') {
        const item = this.cabinet.shelves.find(s => s.id === this.draggingItem.id);
        if (item && snapVal > 50 && snapVal < this.cabinet.height - 50) {
          item.y = snapVal;
          this.draggingItem.val = snapVal;
        }
      } else if (this.draggingItem.type === 'divider') {
        const item = this.cabinet.dividers.find(d => d.id === this.draggingItem.id);
        if (item && snapVal > 50 && snapVal < this.cabinet.width - 50) {
          item.x = snapVal;
          this.draggingItem.val = snapVal;
        }
      } else if (this.draggingItem.type === 'rod') {
        const item = this.cabinet.rods.find(r => r.id === this.draggingItem.id);
        if (item && snapVal > 100 && snapVal < this.cabinet.height - 50) {
          item.y = snapVal;
        }
      }

      this.updateInspector();
      this.redrawCanvas();
    }
  }

  handleCanvasPointerUp(e) {
    if (this.draggingItem) {
      this.draggingItem = null;
      this.dragStartPos = null;
      this.redrawCanvas();
    }
  }

  updateInspector() {
    const container = this.container.querySelector('#cadInspectorContainer');
    if (!container) return;

    if (!this.selectedItem) {
      container.style.display = 'none';
      return;
    }

    container.style.display = 'block';
    const { type, item } = this.selectedItem;

    if (type === 'shelf') {
      const sh = this.cabinet.shelves.find(s => s.id === item.id) || item;
      const shW = Math.round(sh.x2 - sh.x1);
      container.innerHTML = `
        <div class="row between" style="margin-bottom:8px;">
          <div>
            <b style="color:var(--accent);font-size:14px;">➖ Poliță Orizontală</b>
            <div class="muted small">Lățime utilă: ${shW} mm | Grosime: ${sh.thickness || 18} mm</div>
          </div>
          <button class="btn sm ghost" id="inspDelBtn" style="color:#d32f2f;">🗑️ Șterge</button>
        </div>
        <div class="row" style="gap:8px;align-items:center;">
          <div class="grow">
            <label class="f" style="margin-top:0;">Cota de montaj de la bază (Y):</label>
            <div style="display:flex;gap:4px;align-items:center;">
              <button class="btn sm ghost" id="shYMinus50">-50</button>
              <button class="btn sm ghost" id="shYMinus10">-10</button>
              <input type="number" id="inspYInput" class="i" style="text-align:center;font-weight:bold;width:90px;" value="${sh.y}">
              <button class="btn sm ghost" id="shYPlus10">+10</button>
              <button class="btn sm ghost" id="shYPlus50">+50</button>
            </div>
          </div>
          <div>
            <label class="f" style="margin-top:0;">Acțiuni Rapide:</label>
            <div style="display:flex;gap:4px;">
              <button class="btn sm ghost" id="inspCenterBtn" title="Centrează polița în nișă">🎯 Centrează</button>
              <button class="btn sm ghost" id="inspDupBtn" title="Creează o copie identică deasupra">+1 Copiază</button>
            </div>
          </div>
        </div>
      `;

      // Handlers
      container.querySelector('#inspYInput').addEventListener('change', (e) => {
        sh.y = parseInt(e.target.value) || sh.y;
        this.redrawCanvas();
      });
      container.querySelector('#shYMinus10').addEventListener('click', () => { sh.y -= 10; this.redrawCanvas(); this.updateInspector(); });
      container.querySelector('#shYPlus10').addEventListener('click', () => { sh.y += 10; this.redrawCanvas(); this.updateInspector(); });
      container.querySelector('#shYMinus50').addEventListener('click', () => { sh.y -= 50; this.redrawCanvas(); this.updateInspector(); });
      container.querySelector('#shYPlus50').addEventListener('click', () => { sh.y += 50; this.redrawCanvas(); this.updateInspector(); });
      container.querySelector('#inspCenterBtn').addEventListener('click', () => {
        const comp = this.findCompartmentAt((sh.x1 + sh.x2) / 2, sh.y);
        sh.y = Math.round((comp.y1 + comp.y2) / 20) * 10;
        this.redrawCanvas();
        this.updateInspector();
      });
      container.querySelector('#inspDupBtn').addEventListener('click', () => {
        const newSh = { ...sh, id: `sh_${Date.now()}`, y: Math.min(this.cabinet.height - 60, sh.y + 250) };
        this.cabinet.shelves.push(newSh);
        this.selectedItem = { type: 'shelf', id: newSh.id, val: newSh.y, item: newSh };
        this.redrawCanvas();
        this.updateInspector();
      });
      container.querySelector('#inspDelBtn').addEventListener('click', () => {
        this.deleteItem(this.selectedItem);
        this.selectedItem = null;
        this.updateInspector();
        this.redrawCanvas();
      });

    } else if (type === 'divider') {
      const dv = this.cabinet.dividers.find(d => d.id === item.id) || item;
      const dvH = Math.round(dv.y2 - dv.y1);
      container.innerHTML = `
        <div class="row between" style="margin-bottom:8px;">
          <div>
            <b style="color:var(--accent);font-size:14px;">┃ Montant Vertical Despărțitor</b>
            <div class="muted small">Înălțime utilă: ${dvH} mm | Grosime: ${dv.thickness || 18} mm</div>
          </div>
          <button class="btn sm ghost" id="inspDelBtn" style="color:#d32f2f;">🗑️ Șterge</button>
        </div>
        <div class="row" style="gap:8px;align-items:center;">
          <div class="grow">
            <label class="f" style="margin-top:0;">Poziție orizontală de la stânga (X):</label>
            <div style="display:flex;gap:4px;align-items:center;">
              <button class="btn sm ghost" id="dvXMinus50">-50</button>
              <button class="btn sm ghost" id="dvXMinus10">-10</button>
              <input type="number" id="inspXInput" class="i" style="text-align:center;font-weight:bold;width:90px;" value="${dv.x}">
              <button class="btn sm ghost" id="dvXPlus10">+10</button>
              <button class="btn sm ghost" id="dvXPlus50">+50</button>
            </div>
          </div>
        </div>
      `;

      container.querySelector('#inspXInput').addEventListener('change', (e) => {
        dv.x = parseInt(e.target.value) || dv.x;
        this.redrawCanvas();
      });
      container.querySelector('#dvXMinus10').addEventListener('click', () => { dv.x -= 10; this.redrawCanvas(); this.updateInspector(); });
      container.querySelector('#dvXPlus10').addEventListener('click', () => { dv.x += 10; this.redrawCanvas(); this.updateInspector(); });
      container.querySelector('#dvXMinus50').addEventListener('click', () => { dv.x -= 50; this.redrawCanvas(); this.updateInspector(); });
      container.querySelector('#dvXPlus50').addEventListener('click', () => { dv.x += 50; this.redrawCanvas(); this.updateInspector(); });
      container.querySelector('#inspDelBtn').addEventListener('click', () => {
        this.deleteItem(this.selectedItem);
        this.selectedItem = null;
        this.updateInspector();
        this.redrawCanvas();
      });

    } else if (type === 'door') {
      const dr = this.cabinet.doors.find(d => d.id === item.id) || item;
      const drW = Math.round(dr.x2 - dr.x1);
      const drH = Math.round(dr.y2 - dr.y1);
      container.innerHTML = `
        <div class="row between" style="margin-bottom:8px;">
          <div>
            <b style="color:var(--accent);font-size:14px;">🚪 Ușă Batantă (${dr.type.toUpperCase()})</b>
            <div class="muted small">Lățime: ${drW} mm | Înălțime: ${drH} mm</div>
          </div>
          <button class="btn sm ghost" id="inspDelBtn" style="color:#d32f2f;">🗑️ Șterge</button>
        </div>
        <div class="row" style="gap:8px;">
          <div class="grow">
            <label class="f" style="margin-top:0;">Tip Deschidere:</label>
            <select id="inspDoorType" class="i">
              <option value="single-left" ${dr.type === 'single-left' ? 'selected' : ''}>Ușă Simplă (Balamale Stânga)</option>
              <option value="single-right" ${dr.type === 'single-right' ? 'selected' : ''}>Ușă Simplă (Balamale Dreapta)</option>
              <option value="double" ${dr.type === 'double' ? 'selected' : ''}>Uși Duble (Pereche)</option>
            </select>
          </div>
        </div>
      `;

      container.querySelector('#inspDoorType').addEventListener('change', (e) => {
        dr.type = e.target.value;
        this.redrawCanvas();
      });
      container.querySelector('#inspDelBtn').addEventListener('click', () => {
        this.deleteItem(this.selectedItem);
        this.selectedItem = null;
        this.updateInspector();
        this.redrawCanvas();
      });

    } else if (type === 'drawer') {
      const dw = this.cabinet.drawers.find(d => d.id === item.id) || item;
      const dwW = Math.round(dw.x2 - dw.x1);
      container.innerHTML = `
        <div class="row between" style="margin-bottom:8px;">
          <div>
            <b style="color:var(--accent);font-size:14px;">🗄️ Casetă Sertar</b>
            <div class="muted small">Lățime: ${dwW} mm | Înălțime front: ${dw.height || 180} mm</div>
          </div>
          <button class="btn sm ghost" id="inspDelBtn" style="color:#d32f2f;">🗑️ Șterge</button>
        </div>
        <div class="row" style="gap:8px;">
          <div class="grow">
            <label class="f" style="margin-top:0;">Înălțime Front (mm):</label>
            <input type="number" id="inspDwHeight" class="i" value="${dw.height || 180}" step="20">
          </div>
        </div>
      `;

      container.querySelector('#inspDwHeight').addEventListener('change', (e) => {
        dw.height = parseInt(e.target.value) || dw.height;
        dw.y2 = dw.y1 + dw.height;
        this.redrawCanvas();
      });
      container.querySelector('#inspDelBtn').addEventListener('click', () => {
        this.deleteItem(this.selectedItem);
        this.selectedItem = null;
        this.updateInspector();
        this.redrawCanvas();
      });

    } else {
      container.innerHTML = `
        <div class="row between">
          <div><b>${type.toUpperCase()}</b></div>
          <button class="btn sm ghost" id="inspDelBtn" style="color:#d32f2f;">🗑️ Șterge</button>
        </div>
      `;
      container.querySelector('#inspDelBtn').addEventListener('click', () => {
        this.deleteItem(this.selectedItem);
        this.selectedItem = null;
        this.updateInspector();
        this.redrawCanvas();
      });
    }
  }

  setStatusText(txt) {
    const el = this.container.querySelector('#cadStatusText');
    if (el) el.textContent = txt;
  }

  showToast(msg) {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2400);
    }
  }

  findCompartmentAt(mmX, mmY) {
    const W = this.cabinet.width;
    const H = this.cabinet.height;
    const T = this.cabinet.thickness;

    let leftX = T;
    let rightX = W - T;

    (this.cabinet.dividers || []).forEach(d => {
      const y1 = d.y1 != null ? d.y1 : T;
      const y2 = d.y2 != null ? d.y2 : H - T;
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);
      if (mmY >= minY - 15 && mmY <= maxY + 15) {
        if (d.x < mmX && d.x > leftX) leftX = d.x;
        if (d.x > mmX && d.x < rightX) rightX = d.x;
      }
    });

    let bottomY = T;
    let topY = H - T;

    (this.cabinet.shelves || []).forEach(s => {
      const x1 = s.x1 != null ? s.x1 : T;
      const x2 = s.x2 != null ? s.x2 : W - T;
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      if (mmX >= minX - 15 && mmX <= maxX + 15) {
        if (s.y < mmY && s.y > bottomY) bottomY = s.y;
        if (s.y > mmY && s.y < topY) topY = s.y;
      }
    });

    return {
      x1: Math.round(leftX),
      x2: Math.round(rightX),
      y1: Math.round(bottomY),
      y2: Math.round(topY),
      width: Math.round(rightX - leftX),
      height: Math.round(topY - bottomY)
    };
  }

  findItemNear(mmX, mmY) {
    const tol = 30;

    for (const sh of this.cabinet.shelves) {
      if (Math.abs(mmY - sh.y) < tol && mmX >= (sh.x1 - 20) && mmX <= (sh.x2 + 20)) {
        return { type: 'shelf', id: sh.id, val: sh.y, item: sh };
      }
    }

    for (const dv of this.cabinet.dividers) {
      if (Math.abs(mmX - dv.x) < tol && mmY >= (dv.y1 - 20) && mmY <= (dv.y2 + 20)) {
        return { type: 'divider', id: dv.id, val: dv.x, item: dv };
      }
    }

    for (const rd of this.cabinet.rods) {
      if (Math.abs(mmY - rd.y) < tol && mmX >= rd.x1 && mmX <= rd.x2) {
        return { type: 'rod', id: rd.id, val: rd.y, item: rd };
      }
    }

    for (const dw of this.cabinet.drawers) {
      if (mmX >= dw.x1 && mmX <= dw.x2 && mmY >= dw.y1 && mmY <= dw.y2) {
        return { type: 'drawer', id: dw.id, val: dw.y1, item: dw };
      }
    }

    for (const dr of this.cabinet.doors) {
      if (mmX >= dr.x1 && mmX <= dr.x2 && mmY >= dr.y1 && mmY <= dr.y2) {
        return { type: 'door', id: dr.id, val: dr.y1, item: dr };
      }
    }

    return null;
  }

  deleteItem(found) {
    if (!found) return;
    if (found.type === 'shelf') {
      this.cabinet.shelves = this.cabinet.shelves.filter(s => s.id !== found.id);
      this.showToast('Polița a fost ștearsă.');
    } else if (found.type === 'divider') {
      this.cabinet.dividers = this.cabinet.dividers.filter(d => d.id !== found.id);
      this.showToast('Montantul a fost șters.');
    } else if (found.type === 'door') {
      this.cabinet.doors = this.cabinet.doors.filter(d => d.id !== found.id);
      this.showToast('Ușa a fost ștearsă.');
    } else if (found.type === 'drawer') {
      this.cabinet.drawers = this.cabinet.drawers.filter(d => d.id !== found.id);
      this.showToast('Sertarul a fost șters.');
    } else if (found.type === 'rod') {
      this.cabinet.rods = this.cabinet.rods.filter(r => r.id !== found.id);
      this.showToast('Bara a fost ștearsă.');
    } else if (found.type === 'led') {
      this.cabinet.leds = this.cabinet.leds.filter(l => l.id !== found.id);
      this.showToast('Banda LED a fost ștearsă.');
    }
  }

  getBoxBounds(canvas) {
    const margin = 44;
    const maxW = canvas.width - margin * 2;
    const maxH = canvas.height - margin * 2;

    const baseScale = Math.min(maxW / this.cabinet.width, maxH / this.cabinet.height) * 0.94;
    const scale = baseScale * (this.zoomScale || 1.0);
    const w = this.cabinet.width * scale;
    const h = this.cabinet.height * scale;
    const x = (canvas.width - w) / 2 + this.panOffset.x;
    const y = (canvas.height - h) / 2 + 10 + this.panOffset.y;

    return { x, y, w, h, scale };
  }

  pixelToMm(px, py, bounds) {
    const mmX = (px - bounds.x) / bounds.scale;
    const mmY = (bounds.y + bounds.h - py) / bounds.scale;
    return { mmX: Math.round(mmX), mmY: Math.round(mmY) };
  }

  loadDressingPreset() {
    this.cabinet.width = 1200;
    this.cabinet.height = 2000;
    this.cabinet.depth = 550;
    this.cabinet.shelves = [
      { id: 's1', y: 400, x1: 600, x2: 1182, thickness: 18 },
      { id: 's2', y: 800, x1: 600, x2: 1182, thickness: 18 },
      { id: 's3', y: 1200, x1: 600, x2: 1182, thickness: 18 },
      { id: 's4', y: 1600, x1: 18, x2: 1182, thickness: 18 }
    ];
    this.cabinet.dividers = [
      { id: 'd1', x: 600, y1: 18, y2: 1600, thickness: 18 }
    ];
    this.cabinet.doors = [
      { id: 'door1', x1: 18, x2: 600, y1: 18, y2: 1600, type: 'single-left', handle: 'bar' }
    ];
    this.cabinet.drawers = [
      { id: 'dw1', x1: 600, x2: 1182, y1: 18, y2: 200, height: 180 }
    ];
    this.cabinet.rods = [
      { id: 'rod1', x1: 18, x2: 600, y: 1540 }
    ];
    this.cabinet.leds = [];
    this.container.querySelector('#cabW').value = 1200;
    this.container.querySelector('#cabH').value = 2000;
    this.container.querySelector('#cabD').value = 550;
    this.selectedItem = null;
    this.updateInspector();
    this.redrawCanvas();
    this.showToast('👗 Dressing Asimetric încărcat!');
  }

  loadKitchenPreset() {
    this.cabinet.width = 600;
    this.cabinet.height = 720;
    this.cabinet.depth = 330;
    this.cabinet.shelves = [
      { id: 's1', y: 360, x1: 18, x2: 582, thickness: 18 }
    ];
    this.cabinet.dividers = [];
    this.cabinet.doors = [
      { id: 'door1', x1: 18, x2: 582, y1: 18, y2: 702, type: 'single-left', handle: 'bar' }
    ];
    this.cabinet.drawers = [];
    this.cabinet.rods = [];
    this.cabinet.leds = [{ id: 'led1', x1: 18, x2: 582, y: 708 }];
    this.container.querySelector('#cabW').value = 600;
    this.container.querySelector('#cabH').value = 720;
    this.container.querySelector('#cabD').value = 330;
    this.selectedItem = null;
    this.updateInspector();
    this.redrawCanvas();
    this.showToast('🍽️ Corp bucătărie suspendat încărcat!');
  }

  loadDresserPreset() {
    this.cabinet.width = 900;
    this.cabinet.height = 850;
    this.cabinet.depth = 450;
    this.cabinet.shelves = [
      { id: 's1', y: 210, x1: 18, x2: 882, thickness: 18 },
      { id: 's2', y: 420, x1: 18, x2: 882, thickness: 18 },
      { id: 's3', y: 630, x1: 18, x2: 882, thickness: 18 }
    ];
    this.cabinet.dividers = [];
    this.cabinet.doors = [];
    this.cabinet.drawers = [
      { id: 'dw1', x1: 18, x2: 882, y1: 18, y2: 210, height: 190 },
      { id: 'dw2', x1: 18, x2: 882, y1: 210, y2: 420, height: 190 },
      { id: 'dw3', x1: 18, x2: 882, y1: 420, y2: 630, height: 190 },
      { id: 'dw4', x1: 18, x2: 882, y1: 630, y2: 832, height: 190 }
    ];
    this.cabinet.rods = [];
    this.cabinet.leds = [];
    this.container.querySelector('#cabW').value = 900;
    this.container.querySelector('#cabH').value = 850;
    this.container.querySelector('#cabD').value = 450;
    this.selectedItem = null;
    this.updateInspector();
    this.redrawCanvas();
    this.showToast('🗄️ Comodă cu 4 sertare încărcată!');
  }

  redrawCanvas() {
    const canvas = this.container.querySelector('#sketchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const bounds = this.getBoxBounds(canvas);
    const { x, y, w, h, scale } = bounds;

    // Clear fundal
    ctx.fillStyle = '#fbf9f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid milimetric tehnic fin
    ctx.strokeStyle = '#efe7db';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < canvas.width; gx += 20) {
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, canvas.height); ctx.stroke();
    }
    for (let gy = 0; gy < canvas.height; gy += 20) {
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(canvas.width, gy); ctx.stroke();
    }

    const T = this.cabinet.thickness;
    const Tpx = Math.max(3, T * scale);

    // 1. Spate HDF dacă este activ
    if (this.cabinet.hasBack) {
      ctx.fillStyle = '#f3ebe0';
      ctx.fillRect(x + Tpx, y + Tpx, w - 2 * Tpx, h - 2 * Tpx);
    }

    // 2. Carcasă Exterioară (Laterale, Capac, Bază)
    ctx.fillStyle = '#ebd8c2';
    ctx.strokeStyle = '#2b2118';
    ctx.lineWidth = 2;

    // Laterală Stânga
    ctx.fillRect(x, y, Tpx, h);
    ctx.strokeRect(x, y, Tpx, h);

    // Laterală Dreapta
    ctx.fillRect(x + w - Tpx, y, Tpx, h);
    ctx.strokeRect(x + w - Tpx, y, Tpx, h);

    // Capac (Top)
    ctx.fillRect(x + Tpx, y, w - 2 * Tpx, Tpx);
    ctx.strokeRect(x + Tpx, y, w - 2 * Tpx, Tpx);

    // Fund (Bază)
    ctx.fillRect(x + Tpx, y + h - Tpx, w - 2 * Tpx, Tpx);
    ctx.strokeRect(x + Tpx, y + h - Tpx, w - 2 * Tpx, Tpx);

    // Picioare reglabile jos
    if (this.cabinet.hasLegs) {
      ctx.fillStyle = '#37474f';
      const legW = 16 * scale;
      const legH = 22 * scale;
      ctx.fillRect(x + 15 * scale, y + h, legW, legH);
      ctx.fillRect(x + w - 15 * scale - legW, y + h, legW, legH);
      if (this.cabinet.width > 900) {
        ctx.fillRect(x + w / 2 - legW / 2, y + h, legW, legH);
      }
    }

    // 3. Montanți Verticali
    (this.cabinet.dividers || []).forEach(dv => {
      const isSel = this.selectedItem && this.selectedItem.id === dv.id;
      const px = x + dv.x * scale;
      const py1 = y + h - (dv.y2 != null ? dv.y2 : this.cabinet.height - T) * scale;
      const py2 = y + h - (dv.y1 != null ? dv.y1 : T) * scale;
      const pH = Math.max(4, py2 - py1);

      ctx.fillStyle = isSel ? '#ff9800' : '#ebd8c2';
      ctx.strokeStyle = isSel ? '#d84315' : '#2b2118';
      ctx.lineWidth = isSel ? 3 : 2;

      ctx.fillRect(px - Tpx / 2, py1, Tpx, pH);
      ctx.strokeRect(px - Tpx / 2, py1, Tpx, pH);

      // Cotă X
      ctx.font = isSel ? 'bold 11px monospace' : '9px monospace';
      ctx.fillStyle = isSel ? '#d84315' : '#1976d2';
      ctx.textAlign = 'center';
      ctx.fillText(`${dv.x}mm`, px, y + h + 15);
    });

    // 4. Polițe Orizontale
    (this.cabinet.shelves || []).forEach(sh => {
      const isSel = this.selectedItem && this.selectedItem.id === sh.id;
      const py = y + h - sh.y * scale;
      const px1 = x + (sh.x1 != null ? sh.x1 : T) * scale;
      const px2 = x + (sh.x2 != null ? sh.x2 : this.cabinet.width - T) * scale;
      const pW = Math.max(4, px2 - px1);
      const sTpx = Math.max(3, (sh.thickness || T) * scale);

      ctx.fillStyle = isSel ? '#ff9800' : (sh.thickness > 22 ? '#d7be9f' : '#dfc9b0');
      ctx.strokeStyle = isSel ? '#d84315' : '#2b2118';
      ctx.lineWidth = isSel ? 3 : 2;

      ctx.fillRect(px1, py - sTpx / 2, pW, sTpx);
      ctx.strokeRect(px1, py - sTpx / 2, pW, sTpx);

      // Notă cotă Y
      ctx.font = isSel ? 'bold 11px monospace' : '9px monospace';
      ctx.fillStyle = isSel ? '#d84315' : '#e65100';
      ctx.textAlign = 'right';
      ctx.fillText(`Y:${sh.y}`, px1 - 6, py + 3);

      // Cotă lățime utilă
      if (this.viewMode === 'technical') {
        ctx.font = '8px monospace';
        ctx.fillStyle = '#6d5a49';
        ctx.textAlign = 'center';
        ctx.fillText(`L:${Math.round(sh.x2 - sh.x1)}`, px1 + pW / 2, py - 4);
      }
    });

    // 5. Bare Haine
    (this.cabinet.rods || []).forEach(rd => {
      const py = y + h - rd.y * scale;
      const px1 = x + rd.x1 * scale + 4;
      const px2 = x + rd.x2 * scale - 4;
      const isSel = this.selectedItem && this.selectedItem.id === rd.id;

      ctx.strokeStyle = isSel ? '#d84315' : '#607d8b';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(px1, py);
      ctx.lineTo(px2, py);
      ctx.stroke();

      ctx.fillStyle = '#37474f';
      ctx.fillRect(px1 - 2, py - 4, 4, 8);
      ctx.fillRect(px2 - 2, py - 4, 4, 8);

      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#37474f';
      ctx.textAlign = 'center';
      ctx.fillText('👔 Bară Haine', (px1 + px2) / 2, py - 6);
    });

    // 6. Benzi LED
    (this.cabinet.leds || []).forEach(ld => {
      const py = y + h - ld.y * scale;
      const px1 = x + ld.x1 * scale + 4;
      const px2 = x + ld.x2 * scale - 4;
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(px1, py); ctx.lineTo(px2, py); ctx.stroke();
    });

    // 7. Sertare (dacă nu e doar mod fațadă)
    if (this.viewMode !== 'facade') {
      (this.cabinet.drawers || []).forEach(dw => {
        const isSel = this.selectedItem && this.selectedItem.id === dw.id;
        const px1 = x + dw.x1 * scale + 4;
        const px2 = x + dw.x2 * scale - 4;
        const py2 = y + h - dw.y1 * scale - 2;
        const py1 = y + h - dw.y2 * scale + 2;
        const pW = px2 - px1;
        const pH = py2 - py1;

        ctx.fillStyle = isSel ? 'rgba(255, 152, 0, 0.25)' : 'rgba(230, 81, 0, 0.12)';
        ctx.strokeStyle = isSel ? '#d84315' : '#e65100';
        ctx.lineWidth = 1.8;
        ctx.fillRect(px1, py1, pW, pH);
        ctx.strokeRect(px1, py1, pW, pH);

        ctx.fillStyle = '#212121';
        ctx.fillRect(px1 + pW / 2 - 20, py1 + pH / 2 - 2, 40, 4);

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = '#e65100';
        ctx.textAlign = 'center';
        ctx.fillText(`🗄️ Sertar (H=${Math.round(dw.height || 180)})`, px1 + pW / 2, py1 + pH / 2 + 13);
      });
    }

    // 8. Uși (dacă nu e în modul interior)
    if (this.viewMode !== 'interior') {
      (this.cabinet.doors || []).forEach(dr => {
        const isSel = this.selectedItem && this.selectedItem.id === dr.id;
        const px1 = x + dr.x1 * scale + 3;
        const px2 = x + dr.x2 * scale - 3;
        const py2 = y + h - dr.y1 * scale - 3;
        const py1 = y + h - dr.y2 * scale + 3;
        const pW = px2 - px1;
        const pH = py2 - py1;

        ctx.save();
        ctx.strokeStyle = isSel ? '#d84315' : '#2e7d32';
        ctx.lineWidth = isSel ? 2.5 : 1.6;
        ctx.setLineDash([5, 4]);

        if (dr.type === 'double') {
          const halfW = pW / 2 - 2;
          ctx.strokeRect(px1, py1, halfW, pH);
          ctx.strokeRect(px1 + halfW + 4, py1, halfW, pH);
          ctx.setLineDash([]);
          ctx.fillStyle = '#2e7d32';
          ctx.fillRect(px1 + halfW - 8, py1 + pH / 2 - 15, 3, 30);
          ctx.fillRect(px1 + halfW + 9, py1 + pH / 2 - 15, 3, 30);
        } else {
          ctx.strokeRect(px1, py1, pW, pH);
          ctx.setLineDash([]);
          ctx.fillStyle = '#2e7d32';
          if (dr.type === 'single-right') {
            ctx.fillRect(px1 + 8, py1 + pH / 2 - 15, 3, 30);
          } else {
            ctx.fillRect(px1 + pW - 11, py1 + pH / 2 - 15, 3, 30);
          }
        }

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = '#2e7d32';
        ctx.textAlign = 'center';
        ctx.fillText(`🚪 Ușă (${dr.type})`, px1 + pW / 2, py1 + 14);
        ctx.restore();
      });
    }

    // 9. Drop Zone Highlight (când utilizatorul trage o piesă peste canvas)
    if (this.dropTargetComp) {
      const c = this.dropTargetComp;
      const cX = x + c.x1 * scale + 2;
      const cY = y + h - c.y2 * scale + 2;
      const cW = (c.x2 - c.x1) * scale - 4;
      const cH = (c.y2 - c.y1) * scale - 4;

      ctx.save();
      ctx.fillStyle = 'rgba(76, 175, 80, 0.22)';
      ctx.fillRect(cX, cY, cW, cH);
      ctx.strokeStyle = '#2e7d32';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([6, 6]);
      ctx.strokeRect(cX, cY, cW, cH);

      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fillRect(cX + cW / 2 - 70, cY + cH / 2 - 12, 140, 24);
      ctx.fillStyle = '#1b5e20';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('📥 Eliberează aici', cX + cW / 2, cY + cH / 2 + 4);
      ctx.restore();
    }

    // 10. Cote Exterioare L x H
    ctx.strokeStyle = '#1f1a16';
    ctx.fillStyle = '#1f1a16';
    ctx.lineWidth = 1.2;

    // Cotă Lățime Sus
    ctx.beginPath();
    ctx.moveTo(x, y - 10); ctx.lineTo(x + w, y - 10);
    ctx.moveTo(x, y - 14); ctx.lineTo(x, y - 6);
    ctx.moveTo(x + w, y - 14); ctx.lineTo(x + w, y - 6);
    ctx.stroke();
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${this.cabinet.width} mm`, x + w / 2, y - 14);

    // Cotă Înălțime Dreapta
    ctx.beginPath();
    ctx.moveTo(x + w + 12, y); ctx.lineTo(x + w + 12, y + h);
    ctx.moveTo(x + w + 8, y); ctx.lineTo(x + w + 16, y);
    ctx.moveTo(x + w + 8, y + h); ctx.lineTo(x + w + 16, y + h);
    ctx.stroke();
    ctx.textAlign = 'left';
    ctx.fillText(`${this.cabinet.height} mm`, x + w + 16, y + h / 2 + 4);
  }
}
