// Modul Schițare CAD 2D Interactivă & Extrudare Complet Personalizabilă 3D
// Permite utilizatorului să traseze liber linii, polițe, montanți, uși și sertare pe ecran

export class SketcherStudio {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;

    // Dimensiuni și elemente dulap complet customizabile
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
      // Polițe configurabile liber: { id, y, x1, x2 }
      shelves: [
        { id: 'sh_1', y: 400, x1: 18, x2: 982 },
        { id: 'sh_2', y: 1200, x1: 18, x2: 982 }
      ],
      // Montanți verticali configurabili liber: { id, x, y1, y2 }
      dividers: [
        { id: 'div_1', x: 500, y1: 18, y2: 1782 }
      ],
      // Uși plasate pe compartimente specifice: { id, x1, x2, y1, y2, type: 'single-left'|'single-right'|'double' }
      doors: [
        { id: 'dr_1', x1: 18, x2: 500, y1: 18, y2: 1200, type: 'single-left' }
      ],
      // Sertare plasate pe compartimente specifice: { id, x1, x2, y1, y2, height }
      drawers: [
        { id: 'dw_1', x1: 500, x2: 982, y1: 18, y2: 240, height: 210 }
      ],
      // Bare pentru haine (umerașe): { id, x1, x2, y }
      rods: [
        { id: 'rod_1', x1: 18, x2: 500, y: 1140 }
      ]
    };

    this.selectedTool = 'shelf'; // 'shelf', 'divider', 'door', 'drawer', 'rod', 'drag', 'eraser', 'select'
    this.selectedItem = null;
    this.zoomScale = 1.0;
    this.panOffset = { x: 0, y: 0 };
    this.isDrawing = false;
    this.drawingStroke = null;
    this.draggingItem = null;
    this.dragStartPos = null;

    this.normalizeCabinet();
  }

  normalizeCabinet() {
    const W = this.cabinet.width || 1000;
    const H = this.cabinet.height || 1800;
    const T = this.cabinet.thickness || 18;

    // Normalizare polițe vechi (dacă erau array de numere simple)
    if (Array.isArray(this.cabinet.shelves)) {
      this.cabinet.shelves = this.cabinet.shelves.map((sh, idx) => {
        if (typeof sh === 'number') {
          return { id: `sh_${idx + 1}`, y: sh, x1: T, x2: W - T };
        }
        return {
          id: sh.id || `sh_${idx + 1}`,
          y: Math.round(sh.y),
          x1: Math.round(sh.x1 != null ? sh.x1 : T),
          x2: Math.round(sh.x2 != null ? sh.x2 : W - T)
        };
      });
    } else {
      this.cabinet.shelves = [];
    }

    // Normalizare montanți vechi (dacă erau array de numere simple)
    if (Array.isArray(this.cabinet.dividers)) {
      this.cabinet.dividers = this.cabinet.dividers.map((dv, idx) => {
        if (typeof dv === 'number') {
          return { id: `div_${idx + 1}`, x: dv, y1: T, y2: H - T };
        }
        return {
          id: dv.id || `div_${idx + 1}`,
          x: Math.round(dv.x),
          y1: Math.round(dv.y1 != null ? dv.y1 : T),
          y2: Math.round(dv.y2 != null ? dv.y2 : H - T)
        };
      });
    } else {
      this.cabinet.dividers = [];
    }

    if (!Array.isArray(this.cabinet.doors)) this.cabinet.doors = [];
    if (!Array.isArray(this.cabinet.drawers)) this.cabinet.drawers = [];
    if (!Array.isArray(this.cabinet.rods)) this.cabinet.rods = [];
  }

  render() {
    this.container.innerHTML = `
      <div class="card" style="margin-top:0;">
        <div class="row between">
          <div>
            <h3 style="margin:0 0 2px;">Atelier Schiță 2D & CAD Custom</h3>
            <span class="muted small">Trasează liber linii pentru polițe, montanți, uși și sertare</span>
          </div>
          <span class="badge o">Libertate Totală</span>
        </div>

        <!-- Preseturi Rapide & Pânză Goală -->
        <div class="chips" id="sketchPresets" style="margin-top:10px;">
          <button class="chip" data-preset="empty">✨ Pânză Goală (De la zero)</button>
          <button class="chip on" data-preset="dressingAsym">👗 Dressing Asimetric (1000x1800)</button>
          <button class="chip" data-preset="wardrobe2">🚪 Dulap 2 Uși (800x1200)</button>
          <button class="chip" data-preset="dresser4">🗄️ Comodă Sertare (900x850)</button>
          <button class="chip" data-preset="kitchenUnit">🍽️ Corp Bucătărie (600x720)</button>
          <button class="chip" data-preset="openBookshelf">📚 Etajeră Cărți (750x1500)</button>
        </div>

        <!-- Bara Principală de Unelte CAD (Scrollabilă pe telefon) -->
        <div class="dtool" style="margin-top:8px;border-radius:12px;border:1px solid var(--line);align-items:center;">
          <button class="btn sm ${this.selectedTool === 'shelf' ? 'acc' : 'ghost'}" data-tool="shelf" title="Trasează poliță orizontală cu degetul sau apasă pe un compartiment">
            ➖ Trasează Poliță
          </button>
          <button class="btn sm ${this.selectedTool === 'divider' ? 'acc' : 'ghost'}" data-tool="divider" title="Trasează montant vertical cu degetul sau apasă pe un compartiment">
            ┃ Trasează Montant
          </button>
          <button class="btn sm ${this.selectedTool === 'door' ? 'acc' : 'ghost'}" data-tool="door" title="Apasă pe un compartiment pentru a pune ușă (simplă sau dublă)">
            🚪 Pune Ușă
          </button>
          <button class="btn sm ${this.selectedTool === 'drawer' ? 'acc' : 'ghost'}" data-tool="drawer" title="Apasă pe un compartiment pentru a pune sertar">
            🗄️ Pune Sertar
          </button>
          <button class="btn sm ${this.selectedTool === 'rod' ? 'acc' : 'ghost'}" data-tool="rod" title="Apasă pe un compartiment pentru bară de umerașe">
            👔 Bară Haine
          </button>
          <button class="btn sm ${this.selectedTool === 'drag' ? 'acc' : 'ghost'}" data-tool="drag" title="Trage cu degetul de orice poliță sau montant pentru a-l muta în timp real">
            ↔️ Mută Piesa
          </button>
          <button class="btn sm ${this.selectedTool === 'select' ? 'acc' : 'ghost'}" data-tool="select" title="Selectează o piesă pentru a-i vedea și edita cota la milimetru">
            👆 Selectare / Cotă
          </button>
          <button class="btn sm ${this.selectedTool === 'eraser' ? 'acc' : 'ghost'}" data-tool="eraser" title="Radieră: apasă pe orice piesă sau element pentru a-l șterge">
            🧹 Radieră
          </button>
          <button class="btn sm ghost" id="resetToFrameBtn" title="Șterge tot interiorul și lasă doar carcasa exterioară">
            🗑️ Golește Interiorul
          </button>
        </div>

        <!-- Canvas Schiță CAD cu Butoane de Zoom & Mesaj Interactiv -->
        <div style="position:relative;margin-top:10px;background:#fcfbf9;border-radius:12px;border:1px solid var(--line);overflow:hidden;touch-action:none;">
          <canvas id="sketchCanvas" width="560" height="460" style="display:block;width:100%;height:auto;cursor:crosshair;"></canvas>
          
          <!-- Butoane plutitoare Zoom -->
          <div style="position:absolute;top:10px;right:10px;display:flex;flex-direction:column;gap:6px;z-index:4;">
            <button id="sketchZoomInBtn" class="btn sm ghost" style="background:rgba(255,255,255,.92);font-weight:bold;padding:6px 10px;box-shadow:0 2px 5px rgba(0,0,0,.15);" title="Mărește">🔍+</button>
            <button id="sketchZoomOutBtn" class="btn sm ghost" style="background:rgba(255,255,255,.92);font-weight:bold;padding:6px 10px;box-shadow:0 2px 5px rgba(0,0,0,.15);" title="Micșorează">🔍−</button>
            <button id="sketchZoomResetBtn" class="btn sm ghost" style="background:rgba(255,255,255,.92);font-weight:bold;padding:4px 6px;font-size:11px;box-shadow:0 2px 5px rgba(0,0,0,.15);" title="Reset 100%">100%</button>
          </div>

          <!-- Ghidaj tactil jos -->
          <div id="sketchHintBar" style="position:absolute;bottom:8px;left:10px;right:10px;font-size:12px;color:#4a3f35;background:rgba(255,255,255,.94);padding:6px 12px;border-radius:8px;box-shadow:0 1px 5px rgba(0,0,0,.1);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;z-index:4;">
            <span id="sketchStatusMsg" style="font-weight:600;">Trage o linie sau apasă pe o nișă pentru a adăuga poliță</span>
            <div id="sketchEditRow" style="display:none;align-items:center;gap:6px;">
              <span id="sketchEditLabel" style="font-size:11px;font-weight:bold;color:var(--accent);"></span>
              <input type="number" id="sketchEditInput" class="i" style="width:75px;padding:4px 6px;height:28px;font-size:12px;font-weight:bold;" step="10">
              <button class="btn sm acc" id="sketchEditApplyBtn" style="padding:4px 8px;font-size:11px;height:28px;">Aplică</button>
              <button class="btn sm ghost" id="sketchEditDelBtn" style="padding:4px 8px;font-size:11px;height:28px;color:#c62828;">Șterge</button>
            </div>
          </div>
        </div>

        <!-- Parametri Dimensiuni Carcasă & Feronerie -->
        <div class="card" style="margin:12px 0 0;background:#fff;border:1px solid var(--line);padding:12px;">
          <h4 style="margin:0 0 8px;">Cote Corp Exterior & Tehnologie Îmbinare</h4>
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
              <label class="f">Grosime Panou (T)</label>
              <select id="cabT" class="i">
                <option value="18" ${this.cabinet.thickness === 18 ? 'selected' : ''}>18 mm (Standard PAL / Masiv)</option>
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

          <!-- Accesorii Opționale -->
          <div style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--line);display:flex;flex-wrap:wrap;gap:12px;font-size:13px;">
            <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
              <input type="checkbox" id="cabBack" ${this.cabinet.hasBack ? 'checked' : ''}>
              <span>Spate PFL / HDF 3mm</span>
            </label>
            <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
              <input type="checkbox" id="cabPushOpen" ${this.cabinet.hasPushToOpen ? 'checked' : ''}>
              <span>Pistoane Push-to-Open</span>
            </label>
            <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
              <input type="checkbox" id="cabBrackets" ${this.cabinet.hasAngleBrackets ? 'checked' : ''}>
              <span>Colțare & bride perete</span>
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

    // Pointer Events pentru desenare fluidă cu degetul sau mouse-ul
    canvas.addEventListener('pointerdown', (e) => this.handlePointerDown(e));
    canvas.addEventListener('pointermove', (e) => this.handlePointerMove(e));
    canvas.addEventListener('pointerup', (e) => this.handlePointerUp(e));
    canvas.addEventListener('pointercancel', (e) => this.handlePointerUp(e));

    // Schimbare unealtă
    this.container.querySelectorAll('[data-tool]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedTool = btn.dataset.tool;
        this.container.querySelectorAll('[data-tool]').forEach(b => b.classList.replace('acc', 'ghost'));
        btn.classList.replace('ghost', 'acc');
        this.updateToolHint();
        this.selectedItem = null;
        this.updateEditBox();
        this.redrawCanvas();
      });
    });

    // Zoom
    this.container.querySelector('#sketchZoomInBtn').addEventListener('click', () => {
      this.zoomScale = Math.min(2.5, this.zoomScale + 0.2);
      this.redrawCanvas();
    });
    this.container.querySelector('#sketchZoomOutBtn').addEventListener('click', () => {
      this.zoomScale = Math.max(0.6, this.zoomScale - 0.2);
      this.redrawCanvas();
    });
    this.container.querySelector('#sketchZoomResetBtn').addEventListener('click', () => {
      this.zoomScale = 1.0;
      this.redrawCanvas();
    });

    // Golire interior (Corp gol)
    this.container.querySelector('#resetToFrameBtn').addEventListener('click', () => {
      this.cabinet.shelves = [];
      this.cabinet.dividers = [];
      this.cabinet.doors = [];
      this.cabinet.drawers = [];
      this.cabinet.rods = [];
      this.selectedItem = null;
      this.updateEditBox();
      this.redrawCanvas();
      this.showToast('Interiorul a fost golit! Ai libertate completă să desenezi de la zero.');
    });

    // Presets
    this.container.querySelectorAll('#sketchPresets .chip').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('#sketchPresets .chip').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        this.applyPreset(btn.dataset.preset);
      });
    });

    // Actualizare cote carcasă
    const wIn = this.container.querySelector('#cabW');
    const hIn = this.container.querySelector('#cabH');
    const dIn = this.container.querySelector('#cabD');
    const tIn = this.container.querySelector('#cabT');
    const jIn = this.container.querySelector('#cabJoinery');
    const backCb = this.container.querySelector('#cabBack');
    const pushCb = this.container.querySelector('#cabPushOpen');
    const bracCb = this.container.querySelector('#cabBrackets');

    const updateCab = () => {
      this.cabinet.width = Math.max(200, parseInt(wIn.value) || 1000);
      this.cabinet.height = Math.max(200, parseInt(hIn.value) || 1800);
      this.cabinet.depth = Math.max(150, parseInt(dIn.value) || 500);
      this.cabinet.thickness = parseInt(tIn.value) || 18;
      this.cabinet.joineryType = jIn.value;
      this.cabinet.hasBack = backCb.checked;
      this.cabinet.hasPushToOpen = pushCb.checked;
      this.cabinet.hasAngleBrackets = bracCb.checked;
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
    bracCb.addEventListener('change', updateCab);

    // Editare numerică selectare
    const editApplyBtn = this.container.querySelector('#sketchEditApplyBtn');
    const editDelBtn = this.container.querySelector('#sketchEditDelBtn');
    const editInput = this.container.querySelector('#sketchEditInput');

    editApplyBtn.addEventListener('click', () => {
      if (!this.selectedItem) return;
      const val = parseInt(editInput.value);
      if (isNaN(val)) return;

      if (this.selectedItem.type === 'shelf') {
        const item = this.cabinet.shelves.find(s => s.id === this.selectedItem.id);
        if (item) item.y = val;
      } else if (this.selectedItem.type === 'divider') {
        const item = this.cabinet.dividers.find(d => d.id === this.selectedItem.id);
        if (item) item.x = val;
      }
      this.redrawCanvas();
      this.updateEditBox();
    });

    editDelBtn.addEventListener('click', () => {
      if (!this.selectedItem) return;
      this.deleteItem(this.selectedItem);
      this.selectedItem = null;
      this.updateEditBox();
      this.redrawCanvas();
    });

    // Buton Generare 3D
    this.container.querySelector('#extrude3dBtn').addEventListener('click', () => {
      updateCab();
      if (this.options.onExtrude) {
        this.options.onExtrude(this.cabinet);
      }
    });
  }

  updateToolHint() {
    const statusMsg = this.container.querySelector('#sketchStatusMsg');
    if (!statusMsg) return;
    switch (this.selectedTool) {
      case 'shelf':
        statusMsg.textContent = '➖ Mod Poliță: Trasează linie orizontală sau apasă pe o nișă';
        break;
      case 'divider':
        statusMsg.textContent = '┃ Mod Montant: Trasează linie verticală sau apasă pe o nișă';
        break;
      case 'door':
        statusMsg.textContent = '🚪 Mod Ușă: Apasă pe orice nișă pentru a-i pune ușă batantă';
        break;
      case 'drawer':
        statusMsg.textContent = '🗄️ Mod Sertar: Apasă pe orice nișă pentru a plasa un sertar';
        break;
      case 'rod':
        statusMsg.textContent = '👔 Mod Bară Haine: Apasă pe o nișă pentru bară de umerașe';
        break;
      case 'drag':
        statusMsg.textContent = '↔️ Mod Mutare: Trage cu degetul direct de polițe sau montanți';
        break;
      case 'select':
        statusMsg.textContent = '👆 Mod Selectare: Apasă pe orice piesă pentru cota exactă';
        break;
      case 'eraser':
        statusMsg.textContent = '🧹 Mod Radieră: Apasă pe orice piesă pentru a o șterge';
        break;
    }
  }

  updateEditBox() {
    const editRow = this.container.querySelector('#sketchEditRow');
    const editLabel = this.container.querySelector('#sketchEditLabel');
    const editInput = this.container.querySelector('#sketchEditInput');
    if (!editRow || !editLabel || !editInput) return;

    if (!this.selectedItem) {
      editRow.style.display = 'none';
      return;
    }

    editRow.style.display = 'flex';
    if (this.selectedItem.type === 'shelf') {
      editLabel.textContent = `Poliță Y:`;
      editInput.value = this.selectedItem.val;
    } else if (this.selectedItem.type === 'divider') {
      editLabel.textContent = `Montant X:`;
      editInput.value = this.selectedItem.val;
    } else if (this.selectedItem.type === 'door') {
      editLabel.textContent = `Ușă (${this.selectedItem.item.type}):`;
      editInput.value = Math.round(this.selectedItem.item.x2 - this.selectedItem.item.x1);
    } else if (this.selectedItem.type === 'drawer') {
      editLabel.textContent = `Sertar H:`;
      editInput.value = Math.round(this.selectedItem.item.height || 200);
    } else if (this.selectedItem.type === 'rod') {
      editLabel.textContent = `Bară Y:`;
      editInput.value = Math.round(this.selectedItem.item.y);
    }
  }

  showToast(msg) {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }
  }

  applyPreset(preset) {
    const T = this.cabinet.thickness || 18;

    if (preset === 'empty') {
      this.cabinet.width = 1000;
      this.cabinet.height = 1800;
      this.cabinet.depth = 500;
      this.cabinet.shelves = [];
      this.cabinet.dividers = [];
      this.cabinet.doors = [];
      this.cabinet.drawers = [];
      this.cabinet.rods = [];
      this.showToast('Pânză liberă încărcată!');
    } else if (preset === 'dressingAsym') {
      this.cabinet.width = 1000;
      this.cabinet.height = 1800;
      this.cabinet.depth = 500;
      this.cabinet.shelves = [
        { id: 's1', y: 400, x1: 500, x2: 982 },
        { id: 's2', y: 800, x1: 500, x2: 982 },
        { id: 's3', y: 1200, x1: 500, x2: 982 },
        { id: 's4', y: 1400, x1: 18, x2: 982 }
      ];
      this.cabinet.dividers = [
        { id: 'd1', x: 500, y1: 18, y2: 1400 }
      ];
      this.cabinet.doors = [
        { id: 'door1', x1: 18, x2: 500, y1: 18, y2: 1400, type: 'single-left' }
      ];
      this.cabinet.drawers = [
        { id: 'dw1', x1: 500, x2: 982, y1: 18, y2: 200, height: 180 }
      ];
      this.cabinet.rods = [
        { id: 'rod1', x1: 18, x2: 500, y: 1340 }
      ];
    } else if (preset === 'wardrobe2') {
      this.cabinet.width = 800;
      this.cabinet.height = 1200;
      this.cabinet.depth = 450;
      this.cabinet.shelves = [
        { id: 's1', y: 400, x1: 18, x2: 782 },
        { id: 's2', y: 800, x1: 18, x2: 782 }
      ];
      this.cabinet.dividers = [];
      this.cabinet.doors = [
        { id: 'door1', x1: 18, x2: 782, y1: 18, y2: 1182, type: 'double' }
      ];
      this.cabinet.drawers = [];
      this.cabinet.rods = [];
    } else if (preset === 'dresser4') {
      this.cabinet.width = 900;
      this.cabinet.height = 850;
      this.cabinet.depth = 450;
      this.cabinet.shelves = [
        { id: 's1', y: 210, x1: 18, x2: 882 },
        { id: 's2', y: 420, x1: 18, x2: 882 },
        { id: 's3', y: 630, x1: 18, x2: 882 }
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
    } else if (preset === 'kitchenUnit') {
      this.cabinet.width = 600;
      this.cabinet.height = 720;
      this.cabinet.depth = 320;
      this.cabinet.shelves = [
        { id: 's1', y: 360, x1: 18, x2: 582 }
      ];
      this.cabinet.dividers = [];
      this.cabinet.doors = [
        { id: 'door1', x1: 18, x2: 582, y1: 18, y2: 702, type: 'single-left' }
      ];
      this.cabinet.drawers = [];
      this.cabinet.rods = [];
    } else if (preset === 'openBookshelf') {
      this.cabinet.width = 750;
      this.cabinet.height = 1500;
      this.cabinet.depth = 280;
      this.cabinet.shelves = [
        { id: 's1', y: 375, x1: 18, x2: 732 },
        { id: 's2', y: 750, x1: 18, x2: 732 },
        { id: 's3', y: 1125, x1: 18, x2: 732 }
      ];
      this.cabinet.dividers = [];
      this.cabinet.doors = [];
      this.cabinet.drawers = [];
      this.cabinet.rods = [];
    }

    this.container.querySelector('#cabW').value = this.cabinet.width;
    this.container.querySelector('#cabH').value = this.cabinet.height;
    this.container.querySelector('#cabD').value = this.cabinet.depth;
    this.selectedItem = null;
    this.updateEditBox();
    this.redrawCanvas();
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
    const tol = 30; // 30 mm toleranță hit test

    // 1. Polițe
    for (const sh of this.cabinet.shelves) {
      if (Math.abs(mmY - sh.y) < tol && mmX >= (sh.x1 - 20) && mmX <= (sh.x2 + 20)) {
        return { type: 'shelf', id: sh.id, val: sh.y, item: sh };
      }
    }

    // 2. Montanți
    for (const dv of this.cabinet.dividers) {
      if (Math.abs(mmX - dv.x) < tol && mmY >= (dv.y1 - 20) && mmY <= (dv.y2 + 20)) {
        return { type: 'divider', id: dv.id, val: dv.x, item: dv };
      }
    }

    // 3. Bare haine
    for (const rd of this.cabinet.rods) {
      if (Math.abs(mmY - rd.y) < tol && mmX >= rd.x1 && mmX <= rd.x2) {
        return { type: 'rod', id: rd.id, val: rd.y, item: rd };
      }
    }

    // 4. Sertare
    for (const dw of this.cabinet.drawers) {
      if (mmX >= dw.x1 && mmX <= dw.x2 && mmY >= dw.y1 && mmY <= dw.y2) {
        return { type: 'drawer', id: dw.id, val: dw.y1, item: dw };
      }
    }

    // 5. Uși
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
      this.showToast(`Polița a fost ștearsă.`);
    } else if (found.type === 'divider') {
      this.cabinet.dividers = this.cabinet.dividers.filter(d => d.id !== found.id);
      this.showToast(`Montantul a fost șters.`);
    } else if (found.type === 'door') {
      this.cabinet.doors = this.cabinet.doors.filter(d => d.id !== found.id);
      this.showToast(`Ușa a fost ștearsă.`);
    } else if (found.type === 'drawer') {
      this.cabinet.drawers = this.cabinet.drawers.filter(d => d.id !== found.id);
      this.showToast(`Sertarul a fost șters.`);
    } else if (found.type === 'rod') {
      this.cabinet.rods = this.cabinet.rods.filter(r => r.id !== found.id);
      this.showToast(`Bara de haine a fost ștearsă.`);
    }
  }

  handlePointerDown(e) {
    const canvas = this.container.querySelector('#sketchCanvas');
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const px = (e.clientX - rect.left) * scaleX;
    const py = (e.clientY - rect.top) * scaleY;

    canvas.setPointerCapture(e.pointerId);
    const bounds = this.getBoxBounds(canvas);
    const { mmX, mmY } = this.pixelToMm(px, py, bounds);

    // Verifică limite corp
    if (mmX < -40 || mmX > this.cabinet.width + 40 || mmY < -40 || mmY > this.cabinet.height + 40) {
      return;
    }

    if (this.selectedTool === 'eraser') {
      const item = this.findItemNear(mmX, mmY);
      if (item) {
        this.deleteItem(item);
        this.selectedItem = null;
        this.updateEditBox();
        this.redrawCanvas();
      }
      return;
    }

    if (this.selectedTool === 'select') {
      const item = this.findItemNear(mmX, mmY);
      this.selectedItem = item;
      this.updateEditBox();
      this.redrawCanvas();
      return;
    }

    if (this.selectedTool === 'drag') {
      const item = this.findItemNear(mmX, mmY);
      if (item && (item.type === 'shelf' || item.type === 'divider')) {
        this.draggingItem = item;
        this.dragStartPos = { mmX, mmY };
      }
      return;
    }

    // Trasare activă cu degetul sau cursorul
    this.isDrawing = true;
    this.drawingStroke = {
      startPx: { x: px, y: py },
      currPx: { x: px, y: py },
      startMm: { mmX, mmY },
      currMm: { mmX, mmY }
    };
  }

  handlePointerMove(e) {
    const canvas = this.container.querySelector('#sketchCanvas');
    if (!this.isDrawing && !this.draggingItem) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const px = (e.clientX - rect.left) * scaleX;
    const py = (e.clientY - rect.top) * scaleY;
    const bounds = this.getBoxBounds(canvas);
    const { mmX, mmY } = this.pixelToMm(px, py, bounds);

    if (this.draggingItem) {
      // Mută elementul selectat în trepte de 10mm
      const snapVal = Math.round(this.draggingItem.type === 'shelf' ? mmY : mmX / 10) * 10;
      if (this.draggingItem.type === 'shelf') {
        const item = this.cabinet.shelves.find(s => s.id === this.draggingItem.id);
        if (item && snapVal > 60 && snapVal < this.cabinet.height - 60) {
          item.y = snapVal;
          this.draggingItem.val = snapVal;
        }
      } else if (this.draggingItem.type === 'divider') {
        const item = this.cabinet.dividers.find(d => d.id === this.draggingItem.id);
        if (item && snapVal > 60 && snapVal < this.cabinet.width - 60) {
          item.x = snapVal;
          this.draggingItem.val = snapVal;
        }
      }
      this.updateEditBox();
      this.redrawCanvas();
      return;
    }

    if (this.isDrawing && this.drawingStroke) {
      this.drawingStroke.currPx = { x: px, y: py };
      this.drawingStroke.currMm = { mmX, mmY };
      this.redrawCanvas();
    }
  }

  handlePointerUp(e) {
    if (this.draggingItem) {
      this.draggingItem = null;
      this.dragStartPos = null;
      this.redrawCanvas();
      return;
    }

    if (!this.isDrawing || !this.drawingStroke) return;
    this.isDrawing = false;

    const { startMm, currMm, startPx, currPx } = this.drawingStroke;
    this.drawingStroke = null;

    const dx = Math.abs(currPx.x - startPx.x);
    const dy = Math.abs(currPx.y - startPx.y);
    const isDrag = dx > 20 || dy > 20;

    const comp = this.findCompartmentAt(startMm.mmX, startMm.mmY);

    if (this.selectedTool === 'shelf') {
      let y = Math.round(startMm.mmY / 10) * 10;
      let x1 = comp.x1;
      let x2 = comp.x2;

      // Dacă utilizatorul a trasat explicit o linie orizontală lungă
      if (isDrag && dx > dy) {
        y = Math.round((startMm.mmY + currMm.mmY) / 20) * 10;
        const dragMinX = Math.min(startMm.mmX, currMm.mmX);
        const dragMaxX = Math.max(startMm.mmX, currMm.mmX);
        // Snap la margini/montanți
        x1 = Math.abs(dragMinX - comp.x1) < 80 ? comp.x1 : dragMinX;
        x2 = Math.abs(dragMaxX - comp.x2) < 80 ? comp.x2 : dragMaxX;
      }

      if (y > 40 && y < this.cabinet.height - 40 && x2 - x1 >= 40) {
        const newShelf = {
          id: `sh_${Date.now()}`,
          y,
          x1,
          x2
        };
        this.cabinet.shelves.push(newShelf);
        this.selectedItem = { type: 'shelf', id: newShelf.id, val: y, item: newShelf };
        this.showToast(`Poliță adăugată la Y=${y}mm (L=${x2 - x1}mm)!`);
      }
    } else if (this.selectedTool === 'divider') {
      let x = Math.round(startMm.mmX / 10) * 10;
      let y1 = comp.y1;
      let y2 = comp.y2;

      if (isDrag && dy > dx) {
        x = Math.round((startMm.mmX + currMm.mmX) / 20) * 10;
        const dragMinY = Math.min(startMm.mmY, currMm.mmY);
        const dragMaxY = Math.max(startMm.mmY, currMm.mmY);
        y1 = Math.abs(dragMinY - comp.y1) < 80 ? comp.y1 : dragMinY;
        y2 = Math.abs(dragMaxY - comp.y2) < 80 ? comp.y2 : dragMaxY;
      }

      if (x > 40 && x < this.cabinet.width - 40 && y2 - y1 >= 40) {
        const newDiv = {
          id: `div_${Date.now()}`,
          x,
          y1,
          y2
        };
        this.cabinet.dividers.push(newDiv);
        this.selectedItem = { type: 'divider', id: newDiv.id, val: x, item: newDiv };
        this.showToast(`Montant adăugat la X=${x}mm (H=${y2 - y1}mm)!`);
      }
    } else if (this.selectedTool === 'door') {
      // Toggle ușă pe compartimentul apăsat
      const existingDoorIdx = this.cabinet.doors.findIndex(d =>
        Math.abs(d.x1 - comp.x1) < 25 && Math.abs(d.x2 - comp.x2) < 25 &&
        Math.abs(d.y1 - comp.y1) < 25 && Math.abs(d.y2 - comp.y2) < 25
      );

      if (existingDoorIdx >= 0) {
        const currentType = this.cabinet.doors[existingDoorIdx].type;
        if (currentType === 'single-left') {
          this.cabinet.doors[existingDoorIdx].type = 'single-right';
          this.showToast('Ușă schimbată: Deschidere Dreapta');
        } else if (currentType === 'single-right') {
          this.cabinet.doors[existingDoorIdx].type = 'double';
          this.showToast('Uși schimbate: 2 Uși Duble');
        } else {
          this.cabinet.doors.splice(existingDoorIdx, 1);
          this.showToast('Ușă eliminată!');
        }
      } else {
        const newDoor = {
          id: `door_${Date.now()}`,
          x1: comp.x1,
          x2: comp.x2,
          y1: comp.y1,
          y2: comp.y2,
          type: comp.width > 550 ? 'double' : 'single-left'
        };
        this.cabinet.doors.push(newDoor);
        this.showToast(`Ușă montată pe nișa ${comp.width}x${comp.height}mm!`);
      }
    } else if (this.selectedTool === 'drawer') {
      const existingDrawerIdx = this.cabinet.drawers.findIndex(d =>
        Math.abs(d.x1 - comp.x1) < 25 && Math.abs(d.x2 - comp.x2) < 25 &&
        Math.abs(d.y1 - comp.y1) < 25
      );

      if (existingDrawerIdx >= 0) {
        this.cabinet.drawers.splice(existingDrawerIdx, 1);
        this.showToast('Sertar eliminat!');
      } else {
        const dH = Math.min(220, comp.height);
        const newDrawer = {
          id: `dw_${Date.now()}`,
          x1: comp.x1,
          x2: comp.x2,
          y1: comp.y1,
          y2: comp.y1 + dH,
          height: dH
        };
        this.cabinet.drawers.push(newDrawer);
        this.showToast(`Sertar montat (H=${dH}mm)!`);
      }
    } else if (this.selectedTool === 'rod') {
      const existingRodIdx = this.cabinet.rods.findIndex(r =>
        Math.abs(r.x1 - comp.x1) < 25 && Math.abs(r.x2 - comp.x2) < 25
      );

      if (existingRodIdx >= 0) {
        this.cabinet.rods.splice(existingRodIdx, 1);
        this.showToast('Bară haine eliminată!');
      } else {
        const newRod = {
          id: `rod_${Date.now()}`,
          x1: comp.x1,
          x2: comp.x2,
          y: Math.max(comp.y1 + 100, comp.y2 - 60)
        };
        this.cabinet.rods.push(newRod);
        this.showToast('Bară de umerașe montată!');
      }
    }

    this.updateEditBox();
    this.redrawCanvas();
  }

  redrawCanvas() {
    const canvas = this.container.querySelector('#sketchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const bounds = this.getBoxBounds(canvas);
    const { x, y, w, h, scale } = bounds;

    // Clear fundal
    ctx.fillStyle = '#faf8f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid milimetric fin CAD
    ctx.strokeStyle = '#f1e9dd';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < canvas.width; gx += 20) {
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, canvas.height); ctx.stroke();
    }
    for (let gy = 0; gy < canvas.height; gy += 20) {
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(canvas.width, gy); ctx.stroke();
    }

    const T = this.cabinet.thickness;
    const Tpx = Math.max(3, T * scale);

    // 1. Spate PFL dacă este activ
    if (this.cabinet.hasBack) {
      ctx.fillStyle = '#f5ede3';
      ctx.fillRect(x + Tpx, y + Tpx, w - 2 * Tpx, h - 2 * Tpx);
    }

    // 2. Carcasa Exterioară (Laterale, Capac, Bază)
    ctx.fillStyle = '#ebd8c2';
    ctx.strokeStyle = '#322316';
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

    // 3. Montanți Verticali Despărțitori
    (this.cabinet.dividers || []).forEach(dv => {
      const isSel = this.selectedItem && this.selectedItem.id === dv.id;
      const px = x + dv.x * scale;
      const py1 = y + h - (dv.y2 != null ? dv.y2 : this.cabinet.height - T) * scale;
      const py2 = y + h - (dv.y1 != null ? dv.y1 : T) * scale;
      const pH = Math.max(4, py2 - py1);

      ctx.fillStyle = isSel ? '#ff9800' : '#ebd8c2';
      ctx.strokeStyle = isSel ? '#d84315' : '#322316';
      ctx.lineWidth = isSel ? 3 : 2;

      ctx.fillRect(px - Tpx / 2, py1, Tpx, pH);
      ctx.strokeRect(px - Tpx / 2, py1, Tpx, pH);

      // Etichetă cotă X
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

      ctx.fillStyle = isSel ? '#ff9800' : '#dfc9b0';
      ctx.strokeStyle = isSel ? '#d84315' : '#322316';
      ctx.lineWidth = isSel ? 3 : 2;

      ctx.fillRect(px1, py - Tpx / 2, pW, Tpx);
      ctx.strokeRect(px1, py - Tpx / 2, pW, Tpx);

      // Etichetă cotă Y
      ctx.font = isSel ? 'bold 11px monospace' : '9px monospace';
      ctx.fillStyle = isSel ? '#d84315' : '#e65100';
      ctx.textAlign = 'right';
      ctx.fillText(`Y:${sh.y}`, px1 - 6, py + 3);
    });

    // 5. Bare Haine Umerașe
    (this.cabinet.rods || []).forEach(rd => {
      const py = y + h - rd.y * scale;
      const px1 = x + rd.x1 * scale + 4;
      const px2 = x + rd.x2 * scale - 4;
      const isSel = this.selectedItem && this.selectedItem.id === rd.id;

      ctx.strokeStyle = isSel ? '#d84315' : '#78909c';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(px1, py);
      ctx.lineTo(px2, py);
      ctx.stroke();

      // Suport rotund la capete
      ctx.fillStyle = '#455a64';
      ctx.fillRect(px1 - 2, py - 4, 4, 8);
      ctx.fillRect(px2 - 2, py - 4, 4, 8);

      // Iconiță umeraș
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#37474f';
      ctx.textAlign = 'center';
      ctx.fillText('👔 Bară Haine', (px1 + px2) / 2, py - 6);
    });

    // 6. Sertare
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

      // Mâner sertar
      ctx.fillStyle = '#212121';
      ctx.fillRect(px1 + pW / 2 - 20, py1 + pH / 2 - 2, 40, 4);

      ctx.font = 'bold 10px sans-serif';
      ctx.fillStyle = '#e65100';
      ctx.textAlign = 'center';
      ctx.fillText(`🗄️ Sertar (H=${Math.round(dw.height || 200)}mm)`, px1 + pW / 2, py1 + pH / 2 + 13);
    });

    // 7. Uși
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
        // Ușa Stânga
        ctx.strokeRect(px1, py1, halfW, pH);
        // Ușa Dreapta
        ctx.strokeRect(px1 + halfW + 4, py1, halfW, pH);

        ctx.setLineDash([]);
        // Mânere
        ctx.fillStyle = '#2e7d32';
        ctx.fillRect(px1 + halfW - 8, py1 + pH / 2 - 15, 3, 30);
        ctx.fillRect(px1 + halfW + 9, py1 + pH / 2 - 15, 3, 30);
      } else {
        ctx.strokeRect(px1, py1, pW, pH);
        ctx.setLineDash([]);
        // Mâner stânga sau dreapta
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

    // 8. Linia activă desenată în timp real
    if (this.isDrawing && this.drawingStroke) {
      const { startPx, currPx, startMm, currMm } = this.drawingStroke;
      ctx.save();
      ctx.strokeStyle = '#ff3d00';
      ctx.fillStyle = '#ff3d00';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([4, 4]);

      ctx.beginPath();
      ctx.moveTo(startPx.x, startPx.y);
      ctx.lineTo(currPx.x, currPx.y);
      ctx.stroke();

      // Punct de capăt
      ctx.beginPath();
      ctx.arc(currPx.x, currPx.y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Badge plutitor cotă în timp real
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(0,0,0,0.8)';
      ctx.font = 'bold 11px monospace';
      const label = this.selectedTool === 'shelf'
        ? `Y: ${Math.round(currMm.mmY)} mm`
        : (this.selectedTool === 'divider' ? `X: ${Math.round(currMm.mmX)} mm` : `${Math.round(currMm.mmX)} x ${Math.round(currMm.mmY)} mm`);
      ctx.fillRect(currPx.x + 8, currPx.y - 20, 95, 20);
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'left';
      ctx.fillText(label, currPx.x + 12, currPx.y - 6);
      ctx.restore();
    }

    // 9. Cote exterioare L x H
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
