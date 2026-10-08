// Motor Inteligent de Calcul și Cotare a Îmbinărilor & Feroneriei
// Conform standardelor profesionale de mobilier (System 32)

export function calculateJoinery({
  width = 800,
  height = 1200,
  depth = 450,
  thickness = 18,
  shelves = 2,
  dividers = 0,
  doors = 2,
  drawers = 1,
  joineryType = 'confirmat', // 'confirmat', 'dowel', 'minifix', 'pocket'
  hasLocks = false,
  hasPushToOpen = false,
  hasAngleBrackets = false
}) {
  const holes = [];
  const hardware = [];
  const tools = [];
  const instructions = [];

  // Normalizare sigură dacă parametrii vin ca array de cote sau numere
  const shelfList = Array.isArray(shelves) ? shelves : [];
  const shelfCount = Array.isArray(shelves) ? shelves.length : (typeof shelves === 'number' && !isNaN(shelves) ? shelves : 2);
  const dividerList = Array.isArray(dividers) ? dividers : [];
  const dividerCount = Array.isArray(dividers) ? dividers.length : (typeof dividers === 'number' && !isNaN(dividers) ? dividers : 0);
  const doorCount = typeof doors === 'number' ? doors : (doors ? 2 : 0);
  const drawerCount = typeof drawers === 'number' ? drawers : (drawers ? 1 : 0);

  // Regula de amplasare a găurilor pe adâncime:
  // Gaură 1 la 37mm de la față, Gaură 2 la 37mm de la spate.
  // Dacă adâncimea D > 350mm, adăugăm o a treia gaură la mijloc.
  const holePositionsZ = [37, depth - 37];
  if (depth > 350) {
    holePositionsZ.splice(1, 0, Math.round(depth / 2));
  }

  // 1. Îmbinări Bază & Top (Fund și Capac)
  // Fiecare capăt se prinde în laterală prin holePositionsZ.length găuri
  const jointsPerCorner = holePositionsZ.length;
  // Bază stânga, bază dreapta, top stânga, top dreapta = 4 conexiuni
  const frameJointCount = 4 * jointsPerCorner;

  // 2. Polițe fixe sau mobile
  const fixedShelves = Math.min(shelfCount, 1); // Minim una fixă structural
  const adjustableShelves = Math.max(0, shelfCount - fixedShelves);
  const shelfJointCount = fixedShelves * 2 * jointsPerCorner;

  // 3. Montanți despărțitori verticali (dacă există)
  const dividerJointCount = dividerCount * 2 * jointsPerCorner;

  const totalStructuralJoints = frameJointCount + shelfJointCount + dividerJointCount;

  // Configurare feronerie conform tipului ales
  if (joineryType === 'confirmat') {
    hardware.push({
      name: 'Euro-șuruburi confirmate pentru lemn/PAL 7x50mm',
      qty: totalStructuralJoints,
      unit: 'buc',
      specs: 'Găurire treaptă: tijă Ø5mm / guler Ø7mm / cap zencuit'
    });
    hardware.push({
      name: 'Căpăcele mascare confirmate (la nuanța lemnului)',
      qty: totalStructuralJoints,
      unit: 'buc',
      specs: 'Montaj prin presare pe cap inbus'
    });
    // Dibluri de ghidaj pentru aliniere fără alunecare
    hardware.push({
      name: 'Dibluri lemn fag canelat 8x35mm (ghidaj)',
      qty: Math.round(totalStructuralJoints / 2),
      unit: 'buc',
      specs: 'Găurire Ø8mm, adâncime 22mm pe cant / 12mm pe față'
    });

    tools.push('Burghiu special cu treaptă pentru confirmate (Ø5 - Ø7mm)');
    tools.push('Cheie sau bit inbus hexagonal SW 4mm');
    tools.push('Limitator de adâncime pentru bormașină');

    instructions.push({
      step: 'Găurire cant & față',
      text: `Panourile laterale se perforează la Ø7mm (sau cu burghiu cu treaptă), iar canturile fundului și capacului se găuresc centrat la grosimea T/2 = ${thickness / 2}mm cu Ø5mm pe adâncimea de 38mm.`
    });

  } else if (joineryType === 'dowel') {
    hardware.push({
      name: 'Dibluri lemn fag uscat canelat 8x35mm',
      qty: totalStructuralJoints * 2,
      unit: 'buc',
      specs: 'Îmbinare 100% ascunsă'
    });
    hardware.push({
      name: 'Adeziv lemn D3 / D4 pentru dibluri',
      qty: 150,
      unit: 'ml',
      specs: 'Aplicare în orificii înainte de presare'
    });

    tools.push('Burghiu lemn Ø8mm cu vârf de centrare (Brad point)');
    tools.push('Vârfuri de centrare (dowel centers / markere metalice)');
    tools.push('Menghine lungi (minim 4 buc) pentru strângere cadru');

    instructions.push({
      step: 'Găurire în pereche',
      text: 'Găuriți canturile la adâncime de 24mm, introduceți markerele metalice, presați peste fața panoului lateral pentru transferul precis al centrelor, apoi găuriți fața la 12mm adâncime.'
    });

  } else if (joineryType === 'minifix') {
    hardware.push({
      name: 'Came excentric Minifix Ø15mm',
      qty: totalStructuralJoints,
      unit: 'buc',
      specs: 'Frezare la 34mm de cant, adâncime 12.5mm'
    });
    hardware.push({
      name: 'Tije filetate Minifix M6 x 34mm',
      qty: totalStructuralJoints,
      unit: 'buc',
      specs: 'Găurire Ø5mm pe fața laterală'
    });
    hardware.push({
      name: 'Dibluri lemn fag 8x35mm (ghidare)',
      qty: totalStructuralJoints,
      unit: 'buc',
      specs: 'Găurire Ø8mm paralel cu tija'
    });

    tools.push('Freză Forstner Ø15mm');
    tools.push('Șablon găurire excentric (jig mobilier)');
    tools.push('Șurubelniță PZ2');
  } else {
    // Pocket hole
    hardware.push({
      name: 'Șuruburi Kreg Maxi-Loc cu filet mare 1-1/4" (32mm)',
      qty: totalStructuralJoints * 2,
      unit: 'buc',
      specs: 'Găurire înclinată la 15 grade pe dosul panourilor'
    });
    tools.push('Șablon buzunar Kreg Jig');
    tools.push('Burghiu în trepte Kreg cu limitator');
    tools.push('Bit pătrat Robertson #2');
  }

  // 4. Polițe mobile
  if (adjustableShelves > 0) {
    const pinHolesPerShelf = 4;
    hardware.push({
      name: 'Știfturi suport poliță din alamă sau oțel cu guler Ø5mm',
      qty: adjustableShelves * pinHolesPerShelf,
      unit: 'buc',
      specs: 'Găuri Ø5mm la pas de 32mm în laterale'
    });
  }

  // 5. Uși & Balamale
  if (doorCount > 0) {
    const hingesPerDoor = height > 900 ? 3 : 2;
    const totalHinges = doorCount * hingesPerDoor;
    hardware.push({
      name: 'Balamale aruncătoare aplicate cu amortizor (Soft-close) Ø35mm',
      qty: totalHinges,
      unit: 'buc',
      specs: 'Oală Ø35mm la 21.5mm de muchie, distanță 90mm de capete'
    });
    hardware.push({
      name: 'Șuruburi prindere balamale 3.5x16mm',
      qty: totalHinges * 4,
      unit: 'buc',
      specs: 'Cap înecat'
    });
    hardware.push({
      name: 'Mânere mobilier (la alegere) cu șuruburi M4',
      qty: doorCount,
      unit: 'buc',
      specs: 'Găurire Ø4.5mm'
    });

    tools.push('Freză Forstner Ø35mm pentru oală balamale');
  }

  // Încuietori cu cheie pentru uși/sertare
  if (hasLocks) {
    const lockCount = (doorCount > 0 ? 1 : 0) + (drawerCount > 0 ? 1 : 0);
    if (lockCount > 0) {
      hardware.push({
        name: 'Broască / Încuietoare cilindrică mobilier cu cheie articulată Ø19mm',
        qty: lockCount,
        unit: 'buc',
        specs: 'Frezare Ø19mm la 25mm de cant, plăcuță opritoare pe carcasă'
      });
      hardware.push({
        name: 'Șuruburi prindere broască 3x15mm',
        qty: lockCount * 4,
        unit: 'buc',
        specs: 'Fixare pe interiorul ușii/sertarului'
      });
      tools.push('Burghiu / freză plană lemn Ø19mm');
    }
  }

  // Sistem Push-to-Open (Tip-on) fără mânere
  if (hasPushToOpen) {
    const pushCount = (doors || 1) + (drawers || 0);
    hardware.push({
      name: 'Piston mecanic Tip-On / Push-to-open lung cu magnet',
      qty: pushCount,
      unit: 'buc',
      specs: 'Montaj prin clipsare în adaptor pe cantul carcasei'
    });
    hardware.push({
      name: 'Plăcuțe metalice autoadezive / înșurubabile pentru magnet Tip-on',
      qty: pushCount,
      unit: 'buc',
      specs: 'Fixare pe dosul ușii la contactul cu pistonul'
    });
  }

  // Colțare metalice de rigidizare / ancorare perete
  if (hasAngleBrackets) {
    hardware.push({
      name: 'Colțare metalice zincate de rigidizare 40x40x2mm',
      qty: 8,
      unit: 'buc',
      specs: 'Ranforsare colțuri interioare și prindere carcasă'
    });
    hardware.push({
      name: 'Șuruburi lemn cap înecat 4x16mm pentru colțare',
      qty: 32,
      unit: 'buc',
      specs: 'Fixare pe panouri T18'
    });
    hardware.push({
      name: 'Bride metalice ancorare perete împotriva răsturnării + dibluri 8x60mm',
      qty: 2,
      unit: 'set',
      specs: 'Ancorare superioară obligatorie pentru corpuri H > 1000mm'
    });
  }

  // 6. Sertare & Glisiere
  if (drawerCount > 0) {
    hardware.push({
      name: `Set glisiere cu bile și amortizor ${Math.min(depth - 50, 450)}mm`,
      qty: drawerCount,
      unit: 'set',
      specs: 'Prindere pe laterală la 37mm de la fațadă'
    });
    hardware.push({
      name: 'Șuruburi euro 6.3x13mm sau 3.5x16mm pt glisiere',
      qty: drawerCount * 12,
      unit: 'buc',
      specs: 'Fixare pe laterale'
    });
  }

  // 7. Picioare / Suspensie
  hardware.push({
    name: 'Picioare reglabile negre H=100mm (cu clips soclu)',
    qty: width > 1000 ? 6 : 4,
    unit: 'buc',
    specs: 'Reglaj nivel 95-125mm'
  });

  // Calcul puncte exacte de găurire pentru desenul tehnic al Montantului Lateral Stânga
  // Axul Y = de la 0 (fund) la H (top)
  // Axul Z = de la 0 (față) la D (spate)
  const sideDrillingPoints = [];

  // Puncte fund (bază)
  const baseCenterY = thickness / 2;
  holePositionsZ.forEach(z => {
    sideDrillingPoints.push({
      name: 'Gaură Prindere Fund',
      y: baseCenterY,
      z,
      diam: joineryType === 'confirmat' ? 7 : (joineryType === 'dowel' ? 8 : 5),
      depth: thickness,
      type: 'structural'
    });
  });

  // Puncte capac (top)
  const topCenterY = height - thickness / 2;
  holePositionsZ.forEach(z => {
    sideDrillingPoints.push({
      name: 'Gaură Prindere Top',
      y: topCenterY,
      z,
      diam: joineryType === 'confirmat' ? 7 : (joineryType === 'dowel' ? 8 : 5),
      depth: thickness,
      type: 'structural'
    });
  });

  // Puncte polițe (din cotele reale desenate sau calculate)
  const actualShelvesY = shelfList.length > 0 ? shelfList : (fixedShelves > 0 ? [Math.round(height / 2)] : []);
  actualShelvesY.forEach((shY, sIdx) => {
    holePositionsZ.forEach(z => {
      sideDrillingPoints.push({
        name: `Gaură Poliță #${sIdx + 1}`,
        y: shY,
        z,
        diam: joineryType === 'confirmat' ? 7 : (joineryType === 'dowel' ? 8 : 5),
        depth: thickness,
        type: 'structural'
      });
    });
  });

  // Puncte balamale pe montant
  if (doorCount > 0) {
    sideDrillingPoints.push({
      name: 'Plăcuță Balama Jos',
      y: 90,
      z: 37,
      diam: 5,
      depth: 12,
      type: 'hinge'
    });
    sideDrillingPoints.push({
      name: 'Plăcuță Balama Sus',
      y: height - 90,
      z: 37,
      diam: 5,
      depth: 12,
      type: 'hinge'
    });
    if (height > 900) {
      sideDrillingPoints.push({
        name: 'Plăcuță Balama Mijloc',
        y: Math.round(height / 2) + 60,
        z: 37,
        diam: 5,
        depth: 12,
        type: 'hinge'
      });
    }
  }

  return {
    joineryType,
    totalStructuralJoints,
    holePositionsZ,
    sideDrillingPoints,
    hardware,
    tools: [...new Set(tools)],
    instructions
  };
}

// Desenează pe canvas planul de găurire cotat milimetric conform normelor industriale de mobilier
export function renderDrillingBlueprint(canvas, cabinetData, joineryData) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Background hârtie tehnică
  ctx.fillStyle = '#faf8f5';
  ctx.fillRect(0, 0, w, h);

  // Grid tehnic fin
  ctx.strokeStyle = '#eee5d8';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 20) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 20) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Ramă exterioară
  ctx.strokeStyle = '#2b2118';
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, w - 20, h - 20);

  // 1. ZONA DESEN PANOU (Stânga)
  // Panoul lateral: lățime = depth, înălțime = height
  const panelDrawLeft = 70;
  const panelDrawTop = 50;
  const panelDrawMaxW = 150;
  const panelDrawMaxH = h - 140;

  const scale = Math.min(panelDrawMaxW / cabinetData.depth, panelDrawMaxH / cabinetData.height);
  const pw = cabinetData.depth * scale;
  const ph = cabinetData.height * scale;

  const originX = panelDrawLeft;
  const originY = panelDrawTop;

  // Desenare Panou Corp Lemn
  ctx.fillStyle = '#e8d8c3';
  ctx.strokeStyle = '#2b2118';
  ctx.lineWidth = 2;
  ctx.fillRect(originX, originY, pw, ph);
  ctx.strokeRect(originX, originY, pw, ph);

  // Origine (0, 0) Marcată în colțul stânga-jos (Față / Bază)
  const oPx = originX;
  const oPy = originY + ph;
  ctx.strokeStyle = '#e65100';
  ctx.fillStyle = '#e65100';
  ctx.lineWidth = 2;
  // Săgeată axa Z (orizontală - adâncime)
  ctx.beginPath(); ctx.moveTo(oPx, oPy); ctx.lineTo(oPx + 35, oPy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(oPx + 35, oPy); ctx.lineTo(oPx + 28, oPy - 3); ctx.lineTo(oPx + 28, oPy + 3); ctx.fill();
  // Săgeată axa Y (verticală - înălțime)
  ctx.beginPath(); ctx.moveTo(oPx, oPy); ctx.lineTo(oPx, oPy - 35); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(oPx, oPy - 35); ctx.lineTo(oPx - 3, oPy - 28); ctx.lineTo(oPx + 3, oPy - 28); ctx.fill();

  ctx.font = 'bold 9px monospace';
  ctx.fillText('Z (Adâncime)', oPx + 10, oPy + 12);
  ctx.fillText('Y', oPx - 12, oPy - 25);
  ctx.font = 'bold 10px monospace';
  ctx.fillText('(0,0)', oPx - 24, oPy + 12);

  // Etichete Margini Panou
  ctx.fillStyle = '#2b6cb0';
  ctx.font = 'bold 9px sans-serif';
  ctx.fillText('FAȚĂ CORP (Cant vizibil)', originX, originY - 10);
  ctx.fillStyle = '#666';
  ctx.fillText('SPATE (Nut PFL)', originX + pw - 75, originY - 10);

  // Cota Lățime Panou (Adâncime)
  drawDim(ctx, originX, originY - 4, originX + pw, originY - 4, `${cabinetData.depth} mm`);
  // Cota Înălțime Panou
  drawDim(ctx, originX - 22, originY, originX - 22, originY + ph, `${cabinetData.height} mm`, true);

  // Linie punctată Ax Balamale / Găuri Față la 37mm
  const ax37Px = originX + 37 * scale;
  ctx.strokeStyle = '#2b6cb0';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(ax37Px, originY);
  ctx.lineTo(ax37Px, originY + ph);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#2b6cb0';
  ctx.font = 'bold 8px monospace';
  ctx.fillText('37mm', ax37Px - 10, originY + ph + 16);

  // Linie punctată Ax Spate la 37mm de la spate
  const axBackPx = originX + (cabinetData.depth - 37) * scale;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(axBackPx, originY);
  ctx.lineTo(axBackPx, originY + ph);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillText('37mm', axBackPx - 10, originY + ph + 16);

  // 2. DESENARE GĂURI ȘI LITERE DE IDENTIFICARE (A, B, C...)
  // Sortăm punctele după Y crescător de la bază la top
  const sortedPoints = [...joineryData.sideDrillingPoints].sort((a, b) => a.y - b.y || a.z - b.z);

  sortedPoints.forEach((pt, idx) => {
    const letter = String.fromCharCode(65 + (idx % 26)) + (idx >= 26 ? Math.floor(idx / 26) : '');
    pt.refLetter = letter;

    const gx = originX + pt.z * scale;
    const gy = originY + (cabinetData.height - pt.y) * scale;

    const isHinge = pt.type === 'hinge';

    // Punct gaură
    ctx.beginPath();
    ctx.arc(gx, gy, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = isHinge ? '#2e9d5b' : '#d64545';
    ctx.fill();
    ctx.strokeStyle = '#1f1a16';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Marcaj cruce fin
    ctx.beginPath();
    ctx.moveTo(gx - 4, gy); ctx.lineTo(gx + 4, gy);
    ctx.moveTo(gx, gy - 4); ctx.lineTo(gx, gy + 4);
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    // Identificator literă mică lângă gaură
    ctx.font = 'bold 9px monospace';
    ctx.fillStyle = isHinge ? '#1e7843' : '#b22222';
    ctx.fillText(letter, gx + 5, gy - 3);
  });

  // 3. TABEL INDUSTRIAL DE COORDONATE PE CANVAS (Dreapta)
  const tblX = Math.max(originX + pw + 35, w - 215);
  const tblY = 35;
  const tblW = w - tblX - 15;

  ctx.fillStyle = '#2b2118';
  ctx.fillRect(tblX, tblY, tblW, 18);
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 9px monospace';
  ctx.fillText('REF', tblX + 4, tblY + 12);
  ctx.fillText('TIP GAURĂ', tblX + 28, tblY + 12);
  ctx.fillText('Y (mm)', tblX + 105, tblY + 12);
  ctx.fillText('Z (mm)', tblX + 145, tblY + 12);

  const rowH = 14;
  sortedPoints.slice(0, 24).forEach((pt, rIdx) => {
    const curY = tblY + 18 + rIdx * rowH;
    ctx.fillStyle = rIdx % 2 === 0 ? '#f7f3ee' : '#ffffff';
    ctx.fillRect(tblX, curY, tblW, rowH);

    ctx.strokeStyle = '#e6dfd5';
    ctx.strokeRect(tblX, curY, tblW, rowH);

    const isHinge = pt.type === 'hinge';
    ctx.fillStyle = isHinge ? '#1e7843' : '#b22222';
    ctx.font = 'bold 9px monospace';
    ctx.fillText(pt.refLetter, tblX + 5, curY + 10);

    ctx.fillStyle = '#333';
    ctx.font = '8px sans-serif';
    const typeLabel = isHinge ? 'Ø5 Balama' : `Ø${pt.diam} Confirmat`;
    ctx.fillText(typeLabel, tblX + 28, curY + 10);

    ctx.font = '9px monospace';
    ctx.fillText(String(Math.round(pt.y)), tblX + 107, curY + 10);
    ctx.fillText(String(Math.round(pt.z)), tblX + 147, curY + 10);
  });

  // Cartuș Tehnic în partea de jos
  const cartH = 42;
  const cartY = h - 14 - cartH;
  const cartX = 14;
  const cartW = w - 28;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(cartX, cartY, cartW, cartH);
  ctx.strokeStyle = '#2b2118';
  ctx.lineWidth = 1.2;
  ctx.strokeRect(cartX, cartY, cartW, cartH);

  ctx.fillStyle = '#1f1a16';
  ctx.font = 'bold 10px monospace';
  ctx.fillText('LEMNARIA CAD • PLAN TEHNIC GĂURIRE MONTANT LATERAL', cartX + 10, cartY + 15);
  ctx.font = '8.5px sans-serif';
  ctx.fillStyle = '#555';
  ctx.fillText(`Dimensiune panou: H=${cabinetData.height} mm × Lățime=${cabinetData.depth} mm (T=${cabinetData.thickness}mm) | Îmbinare: ${joineryData.joineryType.toUpperCase()}`, cartX + 10, cartY + 28);
  ctx.fillText(`Origine cote: Colțul Stânga-Jos (Z=0 la fațadă, Y=0 la bază) | Toate găurile sunt definite în tabelul din dreapta.`, cartX + 10, cartY + 39);
}

function drawDim(ctx, x1, y1, x2, y2, text, vertical = false) {
  ctx.save();
  ctx.strokeStyle = '#d9651e';
  ctx.fillStyle = '#d9651e';
  ctx.lineWidth = 1.2;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  if (vertical) {
    ctx.beginPath(); ctx.moveTo(x1 - 3, y1); ctx.lineTo(x1 + 3, y1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2 - 3, y2); ctx.lineTo(x2 + 3, y2); ctx.stroke();
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(text, x1 - 5, (y1 + y2) / 2 + 3);
  } else {
    ctx.beginPath(); ctx.moveTo(x1, y1 - 3); ctx.lineTo(x1, y1 + 3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2, y2 - 3); ctx.lineTo(x2, y2 + 3); ctx.stroke();
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, (x1 + x2) / 2, y1 - 4);
  }
  ctx.restore();
}
