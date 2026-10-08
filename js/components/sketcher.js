// Modul Schițare 2D Interactivă & Extrudare Automată în Corp de Mobilier 3D
// Permite utilizatorului să traseze linii/compartimente pe telefon cu asistență AI

export class SketcherStudio {
  constructor(container, options = {}) {
    this.container = container;
    this.options = options;

    // Dimensiuni implicite dulap în milimetri
    this.cabinet = {
      width: 800,
      height: 1200,
      depth: 450,
      thickness: 18,
      shelves: [400, 800], // Y coordinates (de la fund în sus)
      dividers: [],        // X coordinates (de la stânga la dreapta)
      hasDoors: true,
      doorCount: 2,
      hasDrawers: false,
      drawerCount: 0,
      hasBack: true,
      joineryType: 'confirmat',
      hasLocks: false,
      hasPushToOpen: false,
      hasAngleBrackets: false
    };

    this.selectedTool = 'shelf'; // 'shelf', 'divider', 'select', 'eraser'
    this.selectedItem = null;    // { type: 'shelf'|'divider', val: number }
    this.zoomScale = 1.0;
    this.isDrawing = false;
  }

  render() {
    this.container.innerHTML = `
      <div class="card" style="margin-top:0;">
        <div class="row between">
          <div>
            <h3 style="margin:0 0 2px;">Schiță 2D & Constructor Dulap</h3>
            <span class="muted small">Trage linii pentru compartimente sau alege un șablon AI</span>
          </div>
          <span class="badge o">AI Smart Sketch</span>
        </div>

        <!-- Șabloane rapide AI -->
        <div class="chips" id="sketchPresets" style="margin-top:10px;">
          <button class="chip on" data-preset="wardrobe2">🚪 Dulap 2 Uși (800x1200)</button>
          <button class="chip" data-preset="tallDressing">👗 Dressing Înalt (1000x2000)</button>
          <button class="chip" data-preset="dresser3">🗄️ Comodă Sertare (900x850)</button>
          <button class="chip" data-preset="kitchenTop">🍽️ Corp Bucătărie (600x720)</button>
          <button class="chip" data-preset="openRack">📚 Etajeră Deschisă (700x1500)</button>
        </div>

        <!-- Bara de Unelte Schițare -->
        <div class="dtool" style="margin-top:8px;border-radius:10px;border:1px solid var(--line);align-items:center;">
          <button class="btn sm ${this.selectedTool === 'shelf' ? 'acc' : 'ghost'}" data-tool="shelf">
            ➖ Poliță
          </button>
          <button class="btn sm ${this.selectedTool === 'divider' ? 'acc' : 'ghost'}" data-tool="divider">
            | Montant
          </button>
          <button class="btn sm ${this.selectedTool === 'select' ? 'acc' : 'ghost'}" data-tool="select" title="Selectează o piesă pentru a-i vedea cotele">
            👆 Selectare
          </button>
          <button class="btn sm ${this.selectedTool === 'eraser' ? 'acc' : 'ghost'}" data-tool="eraser" title="Radieră: apasă pe orice poliță sau montant pentru a-l șterge">
            🧹 Radieră
          </button>
          <button class="btn sm ${this.cabinet.hasDoors ? 'acc' : 'ghost'}" id="toggleDoorsBtn">
            🚪 Uși (${this.cabinet.hasDoors ? 'ON' : 'OFF'})
          </button>
          <button class="btn sm ${this.cabinet.hasDrawers ? 'acc' : 'ghost'}" id="toggleDrawersBtn">
            🗄️ Sertar (${this.cabinet.hasDrawers ? 'ON' : 'OFF'})
          </button>
          <button class="btn sm ghost" id="resetSketchBtn">
            🗑️ Curăță Tot
          </button>
        </div>

        <!-- Canvas Schiță Interactivă cu Butoane Zoom In / Zoom Out -->
        <div style="position:relative;margin-top:10px;background:#faf8f5;border-radius:12px;border:1px solid var(--line);overflow:hidden;touch-action:none;">
          <canvas id="sketchCanvas" width="500" height="420" style="display:block;width:100%;height:auto;"></canvas>
          
          <!-- Butoane plutitoare Zoom In / Zoom Out / Reset View -->
          <div style="position:absolute;top:10px;right:10px;display:flex;flex-direction:column;gap:6px;z-index:2;">
            <button id="sketchZoomInBtn" class="btn sm ghost" style="background:rgba(255,255,255,.9);font-weight:bold;padding:6px 10px;box-shadow:0 2px 5px rgba(0,0,0,.15);" title="Mărește schița">🔍+</button>
            <button id="sketchZoomOutBtn" class="btn sm ghost" style="background:rgba(255,255,255,.9);font-weight:bold;padding:6px 10px;box-shadow:0 2px 5px rgba(0,0,0,.15);" title="Micșorează schița">🔍−</button>
            <button id="sketchZoomResetBtn" class="btn sm ghost" style="background:rgba(255,255,255,.9);font-weight:bold;padding:4px 6px;font-size:11px;box-shadow:0 2px 5px rgba(0,0,0,.15);" title="Resetare scară">100%</button>
          </div>

          <div id="sketchHintBar" style="position:absolute;bottom:8px;left:10px;right:10px;font-size:11px;color:#7a6f66;background:rgba(255,255,255,.9);padding:4px 10px;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.08);display:flex;justify-content:space-between;align-items:center;">
            <span id="sketchStatusMsg">Apasă pe interiorul dulapului pentru a plasa polițe sau montanți</span>
            <span id="sketchSelectedInfo" style="font-weight:bold;color:var(--accent);"></span>
          </div>
        </div>

        <!-- Dimensiuni Generale Dulap & Gama Largă de Elemente de Asamblare -->
        <div class="card" style="margin:12px 0 0;background:#fff;border:1px solid var(--line);padding:12px;">
          <h4 style="margin:0 0 8px;">Cote Corp & Elemente de Asamblare</h4>
          <div class="row" style="gap:8px;">
            <div class="grow">
              <label class="f">Lățime - L (mm)</label>
              <input type="number" id="cabW" class="i" value="${this.cabinet.width}" step="50">
            </div>
            <div class="grow">
              <label class="f">Înălțime - H (mm)</label>
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
                <option value="18" selected>18 mm (Standard PAL / Masiv)</option>
                <option value="22">22 mm (Robustețe mărită)</option>
                <option value="28">28 mm (Lemn masiv gros)</option>
              </select>
            </div>
            <div class="grow">
              <label class="f">Tip Îmbinare Structură</label>
              <select id="cabJoinery" class="i">
                <option value="confirmat" selected>Confirmate 7x50mm + Dibluri</option>
                <option value="dowel">Dibluri Fag 8x35mm (Invizibil)</option>
                <option value="minifix">Came Minifix 15mm (Demontabil)</option>
                <option value="pocket">Pocket-Holes Kreg 32mm</option>
              </select>
            </div>
          </div>

          <!-- Gama Extinsă de Feronerie & Accesorii Funcționale -->
          <div style="margin-top:12px;padding-top:10px;border-top:1px dashed var(--line);">
            <label class="f" style="font-weight:700;margin-bottom:6px;">Accesorii Funcționale & Feronerie Avansată:</label>
            <div style="display:flex;flex-wrap:wrap;gap:12px;font-size:13px;">
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" id="cabLocks" ${this.cabinet.hasLocks ? 'checked' : ''}>
                <span>🔐 Încuietori cu cheie</span>
              </label>
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" id="cabPushOpen" ${this.cabinet.hasPushToOpen ? 'checked' : ''}>
                <span>🧲 Piston Push-to-Open (fără mânere)</span>
              </label>
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
                <input type="checkbox" id="cabBrackets" ${this.cabinet.hasAngleBrackets ? 'checked' : ''}>
                <span>📐 Colțare metalice & bride perete</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Buton Principal Conversie 3D + Calcul Feronerie -->
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

    // Tap pe canvas pentru inserare linie
    canvas.addEventListener('pointerdown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const clickX = (e.clientX - rect.left) * scaleX;
      const clickY = (e.clientY - rect.top) * scaleY;

      this.handleCanvasClick(clickX, clickY);
    });

    // Unelte
    this.container.querySelectorAll('[data-tool]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedTool = btn.dataset.tool;
        this.container.querySelectorAll('[data-tool]').forEach(b => b.classList.replace('acc', 'ghost'));
        btn.classList.replace('ghost', 'acc');

        const statusMsg = this.container.querySelector('#sketchStatusMsg');
        if (statusMsg) {
          if (this.selectedTool === 'shelf') statusMsg.textContent = 'Mod Poliță: apasă pe dulap pentru a adăuga o poliță';
          else if (this.selectedTool === 'divider') statusMsg.textContent = 'Mod Montant: apasă pe dulap pentru a adăuga un montant vertical';
          else if (this.selectedTool === 'select') statusMsg.textContent = 'Mod Selectare: apasă pe orice piesă pentru a-i vedea cotele exacte';
          else if (this.selectedTool === 'eraser') statusMsg.textContent = 'Mod Radieră: apasă pe orice poliță sau montant pentru a-l șterge imediat';
        }
      });
    });

    // Zoom In, Zoom Out, Zoom Reset
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

    // Checkbox-uri feronerie avansată
    const locksCb = this.container.querySelector('#cabLocks');
    const pushCb = this.container.querySelector('#cabPushOpen');
    const bracketsCb = this.container.querySelector('#cabBrackets');

    locksCb.addEventListener('change', () => { this.cabinet.hasLocks = locksCb.checked; });
    pushCb.addEventListener('change', () => { this.cabinet.hasPushToOpen = pushCb.checked; });
    bracketsCb.addEventListener('change', () => { this.cabinet.hasAngleBrackets = bracketsCb.checked; });

    // Toggle Uși
    const doorsBtn = this.container.querySelector('#toggleDoorsBtn');
    doorsBtn.addEventListener('click', () => {
      this.cabinet.hasDoors = !this.cabinet.hasDoors;
      doorsBtn.textContent = `🚪 Uși (${this.cabinet.hasDoors ? 'ON' : 'OFF'})`;
      doorsBtn.classList.toggle('acc', this.cabinet.hasDoors);
      doorsBtn.classList.toggle('ghost', !this.cabinet.hasDoors);
      this.redrawCanvas();
    });

    // Toggle Sertare
    const drawersBtn = this.container.querySelector('#toggleDrawersBtn');
    drawersBtn.addEventListener('click', () => {
      this.cabinet.hasDrawers = !this.cabinet.hasDrawers;
      this.cabinet.drawerCount = this.cabinet.hasDrawers ? 1 : 0;
      drawersBtn.textContent = `🗄️ Sertar (${this.cabinet.hasDrawers ? 'ON' : 'OFF'})`;
      drawersBtn.classList.toggle('acc', this.cabinet.hasDrawers);
      drawersBtn.classList.toggle('ghost', !this.cabinet.hasDrawers);
      this.redrawCanvas();
    });

    // Curăță Tot
    this.container.querySelector('#resetSketchBtn').addEventListener('click', () => {
      this.cabinet.shelves = [];
      this.cabinet.dividers = [];
      this.selectedItem = null;
      const infoSpan = this.container.querySelector('#sketchSelectedInfo');
      if (infoSpan) infoSpan.textContent = '';
      this.redrawCanvas();
    });

    // Preseturi AI
    this.container.querySelectorAll('#sketchPresets .chip').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('#sketchPresets .chip').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        this.applyPreset(btn.dataset.preset);
      });
    });

    // Modificare dimensiuni inputuri
    const wIn = this.container.querySelector('#cabW');
    const hIn = this.container.querySelector('#cabH');
    const dIn = this.container.querySelector('#cabD');
    const tIn = this.container.querySelector('#cabT');
    const jIn = this.container.querySelector('#cabJoinery');

    const updateCab = () => {
      this.cabinet.width = parseInt(wIn.value) || 800;
      this.cabinet.height = parseInt(hIn.value) || 1200;
      this.cabinet.depth = parseInt(dIn.value) || 450;
      this.cabinet.thickness = parseInt(tIn.value) || 18;
      this.cabinet.joineryType = jIn.value;
      this.cabinet.hasLocks = locksCb.checked;
      this.cabinet.hasPushToOpen = pushCb.checked;
      this.cabinet.hasAngleBrackets = bracketsCb.checked;
      this.redrawCanvas();
    };

    wIn.addEventListener('change', updateCab);
    hIn.addEventListener('change', updateCab);
    dIn.addEventListener('change', updateCab);
    tIn.addEventListener('change', updateCab);
    jIn.addEventListener('change', updateCab);

    // Buton Generare 3D
    this.container.querySelector('#extrude3dBtn').addEventListener('click', () => {
      updateCab();
      if (this.options.onExtrude) {
        this.options.onExtrude(this.cabinet);
      }
    });
  }

  applyPreset(preset) {
    if (preset === 'wardrobe2') {
      this.cabinet.width = 800;
      this.cabinet.height = 1200;
      this.cabinet.depth = 450;
      this.cabinet.shelves = [400, 800];
      this.cabinet.dividers = [];
      this.cabinet.hasDoors = true;
      this.cabinet.doorCount = 2;
      this.cabinet.hasDrawers = false;
    } else if (preset === 'tallDressing') {
      this.cabinet.width = 1000;
      this.cabinet.height = 2000;
      this.cabinet.depth = 550;
      this.cabinet.shelves = [500, 1000, 1500];
      this.cabinet.dividers = [500];
      this.cabinet.hasDoors = true;
      this.cabinet.doorCount = 2;
      this.cabinet.hasDrawers = true;
      this.cabinet.drawerCount = 2;
    } else if (preset === 'dresser3') {
      this.cabinet.width = 900;
      this.cabinet.height = 850;
      this.cabinet.depth = 450;
      this.cabinet.shelves = [260, 520];
      this.cabinet.dividers = [];
      this.cabinet.hasDoors = false;
      this.cabinet.hasDrawers = true;
      this.cabinet.drawerCount = 3;
    } else if (preset === 'kitchenTop') {
      this.cabinet.width = 600;
      this.cabinet.height = 720;
      this.cabinet.depth = 320;
      this.cabinet.shelves = [360];
      this.cabinet.dividers = [];
      this.cabinet.hasDoors = true;
      this.cabinet.doorCount = 1;
      this.cabinet.hasDrawers = false;
    } else if (preset === 'openRack') {
      this.cabinet.width = 700;
      this.cabinet.height = 1500;
      this.cabinet.depth = 280;
      this.cabinet.shelves = [350, 700, 1050];
      this.cabinet.dividers = [];
      this.cabinet.hasDoors = false;
      this.cabinet.hasDrawers = false;
    }

    this.container.querySelector('#cabW').value = this.cabinet.width;
    this.container.querySelector('#cabH').value = this.cabinet.height;
    this.container.querySelector('#cabD').value = this.cabinet.depth;
    this.redrawCanvas();
  }

  handleCanvasClick(clickX, clickY) {
    const canvas = this.container.querySelector('#sketchCanvas');
    const bounds = this.getBoxBounds(canvas);
    const infoSpan = this.container.querySelector('#sketchSelectedInfo');

    // Verifică dacă click-ul este în interiorul dulapului sau pe margini
    if (clickX < bounds.x - 20 || clickX > bounds.x + bounds.w + 20 ||
        clickY < bounds.y - 20 || clickY > bounds.y + bounds.h + 20) {
      return;
    }

    if (this.selectedTool === 'eraser') {
      // Hit test pentru ștergerea polițelor orizontale (toleranță 25px)
      let removedShelf = false;
      for (let i = 0; i < this.cabinet.shelves.length; i++) {
        const shY = this.cabinet.shelves[i];
        const py = bounds.y + bounds.h - shY * bounds.scale;
        if (Math.abs(clickY - py) < 22) {
          this.cabinet.shelves.splice(i, 1);
          removedShelf = true;
          if (infoSpan) infoSpan.textContent = `Polița de la Y=${shY}mm a fost ștearsă!`;
          break;
        }
      }

      // Hit test pentru ștergerea montanților verticali (toleranță 25px)
      if (!removedShelf) {
        for (let i = 0; i < this.cabinet.dividers.length; i++) {
          const divX = this.cabinet.dividers[i];
          const px = bounds.x + divX * bounds.scale;
          if (Math.abs(clickX - px) < 22) {
            this.cabinet.dividers.splice(i, 1);
            if (infoSpan) infoSpan.textContent = `Montantul de la X=${divX}mm a fost șters!`;
            break;
          }
        }
      }
      this.selectedItem = null;

    } else if (this.selectedTool === 'select') {
      // Hit test pentru selectarea unei piese și afișarea cotelor
      let found = false;
      for (let i = 0; i < this.cabinet.shelves.length; i++) {
        const shY = this.cabinet.shelves[i];
        const py = bounds.y + bounds.h - shY * bounds.scale;
        if (Math.abs(clickY - py) < 20) {
          this.selectedItem = { type: 'shelf', val: shY, index: i };
          const innerW = this.cabinet.width - 2 * this.cabinet.thickness;
          if (infoSpan) infoSpan.textContent = `Selectat: Poliță Y=${shY}mm (L=${innerW}mm, T=${this.cabinet.thickness}mm)`;
          found = true;
          break;
        }
      }

      if (!found) {
        for (let i = 0; i < this.cabinet.dividers.length; i++) {
          const divX = this.cabinet.dividers[i];
          const px = bounds.x + divX * bounds.scale;
          if (Math.abs(clickX - px) < 20) {
            this.selectedItem = { type: 'divider', val: divX, index: i };
            const innerH = this.cabinet.height - 2 * this.cabinet.thickness;
            if (infoSpan) infoSpan.textContent = `Selectat: Montant X=${divX}mm (H=${innerH}mm, T=${this.cabinet.thickness}mm)`;
            found = true;
            break;
          }
        }
      }

      if (!found) {
        this.selectedItem = null;
        if (infoSpan) infoSpan.textContent = `Selectat: Cadru corp exterior (${this.cabinet.width}x${this.cabinet.height}mm)`;
      }

    } else if (this.selectedTool === 'shelf') {
      // Conversie pixel Y în cota milimetrică de la bază
      const relY = (bounds.y + bounds.h - clickY) / bounds.h;
      const mmY = Math.round(relY * this.cabinet.height / 50) * 50; // Snap la 50mm

      // Evită dubluri
      if (mmY > 80 && mmY < this.cabinet.height - 80) {
        this.cabinet.shelves.push(mmY);
        this.cabinet.shelves.sort((a, b) => a - b);
        if (infoSpan) infoSpan.textContent = `Poliță nouă adăugată la cota Y=${mmY}mm`;
      }
    } else if (this.selectedTool === 'divider') {
      // Conversie pixel X în cota milimetrică de la stânga
      const relX = (clickX - bounds.x) / bounds.w;
      const mmX = Math.round(relX * this.cabinet.width / 50) * 50;

      if (mmX > 100 && mmX < this.cabinet.width - 100) {
        this.cabinet.dividers.push(mmX);
        this.cabinet.dividers.sort((a, b) => a - b);
        if (infoSpan) infoSpan.textContent = `Montant vertical nou adăugat la cota X=${mmX}mm`;
      }
    }

    this.redrawCanvas();
  }

  getBoxBounds(canvas) {
    const margin = 40;
    const maxW = canvas.width - margin * 2;
    const maxH = canvas.height - margin * 2;

    const baseScale = Math.min(maxW / this.cabinet.width, maxH / this.cabinet.height) * 0.92;
    const scale = baseScale * (this.zoomScale || 1.0);
    const w = this.cabinet.width * scale;
    const h = this.cabinet.height * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2 + 10;

    return { x, y, w, h, scale };
  }

  redrawCanvas() {
    const canvas = this.container.querySelector('#sketchCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y, w, h, scale } = this.getBoxBounds(canvas);

    // Clear
    ctx.fillStyle = '#faf8f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid milimetric
    ctx.strokeStyle = '#f0e8dd';
    ctx.lineWidth = 1;
    for (let gx = 0; gx < canvas.width; gx += 20) {
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, canvas.height); ctx.stroke();
    }
    for (let gy = 0; gy < canvas.height; gy += 20) {
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(canvas.width, gy); ctx.stroke();
    }

    // Grosime panou desenat
    const Tpx = Math.max(3, this.cabinet.thickness * scale);

    // Contur corp exterior (Carcasă)
    ctx.fillStyle = '#ecdcc9';
    ctx.strokeStyle = '#3a2b1c';
    ctx.lineWidth = 2;

    // Laterală Stânga
    ctx.fillRect(x, y, Tpx, h);
    ctx.strokeRect(x, y, Tpx, h);

    // Laterală Dreapta
    ctx.fillRect(x + w - Tpx, y, Tpx, h);
    ctx.strokeRect(x + w - Tpx, y, Tpx, h);

    // Top (Capac)
    ctx.fillRect(x + Tpx, y, w - 2 * Tpx, Tpx);
    ctx.strokeRect(x + Tpx, y, w - 2 * Tpx, Tpx);

    // Fund (Bază)
    ctx.fillRect(x + Tpx, y + h - Tpx, w - 2 * Tpx, Tpx);
    ctx.strokeRect(x + Tpx, y + h - Tpx, w - 2 * Tpx, Tpx);

    // Montanți verticali
    this.cabinet.dividers.forEach((divX, idx) => {
      const isSelected = this.selectedItem && this.selectedItem.type === 'divider' && this.selectedItem.val === divX;
      const px = x + divX * scale;
      ctx.fillStyle = isSelected ? '#ff8c00' : '#ecdcc9';
      ctx.strokeStyle = isSelected ? '#d9381e' : '#3a2b1c';
      ctx.lineWidth = isSelected ? 3 : 2;
      ctx.fillRect(px - Tpx / 2, y + Tpx, Tpx, h - 2 * Tpx);
      ctx.strokeRect(px - Tpx / 2, y + Tpx, Tpx, h - 2 * Tpx);

      // Notă cotă X
      ctx.font = isSelected ? 'bold 10px monospace' : '9px monospace';
      ctx.fillStyle = isSelected ? '#d9381e' : '#2b6cb0';
      ctx.fillText(`${divX}mm`, px - 12, y + h + 15);
    });

    // Polițe orizontale
    this.cabinet.shelves.forEach((shY, idx) => {
      const isSelected = this.selectedItem && this.selectedItem.type === 'shelf' && this.selectedItem.val === shY;
      const py = y + h - shY * scale;
      ctx.fillStyle = isSelected ? '#ff8c00' : '#e4d2bc';
      ctx.strokeStyle = isSelected ? '#d9381e' : '#3a2b1c';
      ctx.lineWidth = isSelected ? 3 : 2;
      ctx.fillRect(x + Tpx, py - Tpx / 2, w - 2 * Tpx, Tpx);
      ctx.strokeRect(x + Tpx, py - Tpx / 2, w - 2 * Tpx, Tpx);

      // Notă cotă Y de la podea
      ctx.font = isSelected ? 'bold 10px monospace' : '9px monospace';
      ctx.fillStyle = isSelected ? '#d9381e' : '#e8772e';
      ctx.fillText(`Y: ${shY}mm`, x - 42, py + 3);
    });

    // Dacă are sertar jos
    if (this.cabinet.hasDrawers) {
      const drawerH = Math.min(220 * scale, h * 0.28);
      ctx.fillStyle = 'rgba(232, 119, 46, 0.12)';
      ctx.fillRect(x + Tpx + 4, y + h - Tpx - drawerH, w - 2 * Tpx - 8, drawerH);
      ctx.strokeStyle = '#e8772e';
      ctx.strokeRect(x + Tpx + 4, y + h - Tpx - drawerH, w - 2 * Tpx - 8, drawerH);

      // Mâner sertar
      ctx.fillStyle = '#1f1a16';
      ctx.fillRect(x + w / 2 - 25, y + h - Tpx - drawerH / 2 - 2, 50, 4);

      ctx.font = 'bold 10px sans-serif';
      ctx.fillStyle = '#e8772e';
      ctx.fillText('Sertar', x + w / 2 - 15, y + h - Tpx - drawerH / 2 + 14);
    }

    // Dacă are uși reprezentate punctat
    if (this.cabinet.hasDoors) {
      ctx.strokeStyle = '#2e9d5b';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);

      if (this.cabinet.doorCount === 2) {
        // Ușă stânga
        ctx.strokeRect(x + 2, y + 2, w / 2 - 3, h - 4);
        // Mâner stânga
        ctx.fillStyle = '#2e9d5b';
        ctx.fillRect(x + w / 2 - 14, y + h / 2 - 20, 3, 40);

        // Ușă dreapta
        ctx.strokeRect(x + w / 2 + 1, y + 2, w / 2 - 3, h - 4);
        // Mâner dreapta
        ctx.fillRect(x + w / 2 + 11, y + h / 2 - 20, 3, 40);
      } else {
        ctx.strokeRect(x + 2, y + 2, w - 4, h - 4);
        ctx.fillStyle = '#2e9d5b';
        ctx.fillRect(x + w - 16, y + h / 2 - 20, 3, 40);
      }
      ctx.setLineDash([]);
    }

    // Cote exterioare totale L x H
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
