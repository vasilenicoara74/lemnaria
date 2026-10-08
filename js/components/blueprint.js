// Modul Generare Desene Tehnice 2D & Fișă Tehnică PDF Profesională
import { calculateBOM } from './bom.js';

// Desenează planuri 2D cotate pe un canvas HTML5
export function render2DBlueprint(canvas, plan, params = {}) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Background hârtie milimetrică tehnică / blueprint cald
  ctx.fillStyle = '#faf8f5';
  ctx.fillRect(0, 0, w, h);

  // Grid tehnic fin
  ctx.strokeStyle = '#eee5da';
  ctx.lineWidth = 1;
  const step = 20;
  for (let x = 0; x < w; x += step) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += step) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Ramă exterioară tehnică conform standardelor de desen
  ctx.strokeStyle = '#1f1a16';
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, w - 20, h - 20);

  // Cartuș tehnic în colțul din dreapta jos
  const cartW = 280, cartH = 65;
  const cartX = w - 10 - cartW, cartY = h - 10 - cartH;
  ctx.fillStyle = '#fff';
  ctx.fillRect(cartX, cartY, cartW, cartH);
  ctx.strokeRect(cartX, cartY, cartW, cartH);

  ctx.fillStyle = '#1f1a16';
  ctx.font = 'bold 12px monospace';
  ctx.fillText('LEMNARIA CAD STUDIO – PLAN 2D', cartX + 10, cartY + 18);
  ctx.font = '11px sans-serif';
  ctx.fillText(`PROIECT: ${plan.roTitle || plan.title}`, cartX + 10, cartY + 34);
  const now = new Date().toLocaleDateString('ro-RO');
  ctx.fillText(`SCARA: 1:10   |   DATA: ${now}`, cartX + 10, cartY + 52);

  // Dimensiuni reale
  const L = params.length || 800;
  const W = params.width || 380;
  const H = params.height || 120;
  const T = params.thickness || 18;

  // Calcul factor de scalare unitar astfel încât ambele vederi să încapă aerisit
  // Canvas: w=600, h=520 (sau dinamic)
  const availW = w - 160; // spațiu pentru vederi și cote
  const availH = h - cartH - 80;

  // Distribuim ecranul:
  // Stânga: Vedere din Față (L x H) sus, Vedere de Sus (L x W) jos
  // Dreapta: Vedere Laterală (W x H) sus, Detalii profil jos
  const scale = Math.min(220 / L, 130 / Math.max(H, 100), 120 / W);

  const fW = Math.max(80, L * scale);
  const fH = Math.max(40, H * scale);
  const topH = Math.max(40, W * scale);
  const sW = Math.max(50, W * scale);

  const fX = 60;
  const fY = 55;

  // 1. Vedere din Față (Front View)
  ctx.fillStyle = '#ecdcc9';
  ctx.strokeStyle = '#2b2118';
  ctx.lineWidth = 1.8;
  ctx.fillRect(fX, fY, fW, fH);
  ctx.strokeRect(fX, fY, fW, fH);

  // Hașură discretă
  ctx.strokeStyle = 'rgba(0,0,0,0.06)';
  ctx.lineWidth = 1;
  for (let ly = fY + 6; ly < fY + fH; ly += 10) {
    ctx.beginPath(); ctx.moveTo(fX, ly); ctx.lineTo(fX + fW, ly); ctx.stroke();
  }

  // Cotă Lățime Totală Față (sus)
  drawDimension(ctx, fX, fY - 12, fX + fW, fY - 12, `${L} mm`);
  // Cotă Înălțime Față (stânga)
  drawDimension(ctx, fX - 18, fY, fX - 18, fY + fH, `${H} mm`, true);

  ctx.fillStyle = '#1f1a16';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('VEDERE DIN FAȚĂ', fX, fY + fH + 16);

  // 2. Vedere de Sus (Top View) plasată sub vederea din față
  const tX = fX;
  const tY = fY + fH + 45;

  if (tY + topH < h - cartH - 10) {
    ctx.fillStyle = '#ecdcc9';
    ctx.strokeStyle = '#2b2118';
    ctx.lineWidth = 1.8;
    ctx.fillRect(tX, tY, fW, topH);
    ctx.strokeRect(tX, tY, fW, topH);

    // Contur interior (șipci / grosime)
    const innerT = Math.max(4, T * scale);
    ctx.strokeStyle = 'rgba(43,33,24,0.4)';
    ctx.strokeRect(tX + innerT, tY + innerT, fW - 2 * innerT, topH - 2 * innerT);

    // Cotă Adâncime Vedere de Sus (stânga)
    drawDimension(ctx, tX - 18, tY, tX - 18, tY + topH, `${W} mm`, true);

    ctx.fillStyle = '#1f1a16';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('VEDERE DE SUS', tX, tY + topH + 16);
  }

  // 3. Vedere Laterală (Side View) plasată în dreapta vederii din față
  const sX = fX + fW + 65;
  const sY = fY;

  ctx.fillStyle = '#e2d0ba';
  ctx.strokeStyle = '#2b2118';
  ctx.lineWidth = 1.8;
  ctx.fillRect(sX, sY, sW, fH);
  ctx.strokeRect(sX, sY, sW, fH);

  drawDimension(ctx, sX, sY - 12, sX + sW, sY - 12, `${W} mm`);
  ctx.fillStyle = '#1f1a16';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('VEDERE LATERALĂ', sX, sY + fH + 16);

  // Notă grosime material
  ctx.font = 'italic 11px sans-serif';
  ctx.fillStyle = '#555';
  ctx.fillText(`* Grosime material panou: T = ${T} mm | Cotele sunt exprimate în milimetri (mm)`, 20, h - cartH - 12);
}

// Funcție ajutătoare desenare cotă tehnică cu săgeți
function drawDimension(ctx, x1, y1, x2, y2, text, vertical = false) {
  ctx.save();
  ctx.strokeStyle = '#d9651e';
  ctx.fillStyle = '#d9651e';
  ctx.lineWidth = 1.2;

  // Linie de cotă
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Linii ajutătoare capete
  if (vertical) {
    ctx.beginPath(); ctx.moveTo(x1 - 4, y1); ctx.lineTo(x1 + 4, y1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2 - 4, y2); ctx.lineTo(x2 + 4, y2); ctx.stroke();
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(text, x1 - 5, (y1 + y2) / 2 + 3);
  } else {
    ctx.beginPath(); ctx.moveTo(x1, y1 - 4); ctx.lineTo(x1, y1 + 4); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2, y2 - 4); ctx.lineTo(x2, y2 + 4); ctx.stroke();
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, (x1 + x2) / 2, y1 - 4);
  }
  ctx.restore();
}

// Generare Document Tehnic PDF cu jsPDF
export async function exportTechnicalPDF({ plan, params = {}, woodId = 'pin', snapshot3D = null }) {
  if (typeof window.jspdf === 'undefined') {
    throw new Error('Biblioteca jsPDF nu este încărcată.');
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const bom = calculateBOM(plan, params, woodId);

  // Pagina 1: Copertă & Randare 3D & Date Generale
  // Header cu branding Lemnaria
  doc.setFillColor(31, 26, 22);
  doc.rect(0, 0, 210, 32, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.text('LEMNARIA', 15, 18);
  doc.setFontSize(10);
  doc.setTextColor(232, 119, 46);
  doc.text('ATELIER TÂMPLĂRIE & PROIECTARE 3D CAD', 15, 25);

  const dateStr = new Date().toLocaleDateString('ro-RO');
  doc.setTextColor(200, 200, 200);
  doc.text(`Data: ${dateStr}`, 165, 20);

  // Titlu Proiect
  doc.setTextColor(31, 26, 22);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text(plan.roTitle || plan.title, 15, 45);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(110, 100, 90);
  doc.text(`Categorie: ${plan.category}   |   Dificultate: ${plan.difficulty}   |   Timp estimat: ${plan.timeMinutes} min`, 15, 52);

  // Descriere
  const splitDesc = doc.splitTextToSize(plan.description, 180);
  doc.setTextColor(60, 50, 40);
  doc.text(splitDesc, 15, 60);

  // Snapshot 3D dacă există
  let nextY = 80;
  if (snapshot3D) {
    try {
      doc.addImage(snapshot3D, 'PNG', 15, nextY, 180, 95);
      nextY += 102;
    } catch (e) {
      console.warn('Nu s-a putut adăuga imaginea 3D în PDF:', e);
    }
  }

  // Casete KPI Sumar
  doc.setFillColor(245, 240, 235);
  doc.roundedRect(15, nextY, 56, 24, 3, 3, 'F');
  doc.roundedRect(77, nextY, 56, 24, 3, 3, 'F');
  doc.roundedRect(139, nextY, 56, 24, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(31, 26, 22);
  doc.text(`${bom.parts.length} piese`, 20, nextY + 11);
  doc.text(`${bom.woodName}`, 82, nextY + 11);
  doc.text(`${bom.totalWeightKg} kg`, 144, nextY + 11);

  doc.setFontSize(8);
  doc.setTextColor(130, 120, 110);
  doc.text('NUMĂR TOTAL PIESE', 20, nextY + 18);
  doc.text('SPECIE LEMN', 82, nextY + 18);
  doc.text('GREUTATE FINALĂ', 144, nextY + 18);

  nextY += 34;

  // Tabel Feronerie & Scule
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(31, 26, 22);
  doc.text('Feronerie & Scule Necesare', 15, nextY);
  nextY += 6;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  bom.hardware.forEach(h => {
    doc.text(`• ${h.name} – ${h.qty} ${h.unit} (${h.specs || 'Conform schiței'})`, 18, nextY);
    nextY += 5;
  });

  doc.text(`Scule recomandate: ${bom.tools.join(', ')}`, 18, nextY + 2);

  // Pagina 2: Lista Completă de Debitare & Pași de Execuție
  doc.addPage();

  // Header Pagina 2
  doc.setFillColor(31, 26, 22);
  doc.rect(0, 0, 210, 16, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('LISTA DE DEBITARE & GHID ASAMBLARE PAS CU PAS', 15, 11);

  let p2Y = 28;
  doc.setFontSize(14);
  doc.setTextColor(31, 26, 22);
  doc.text('1. Dimensiuni Piese (Cut List)', 15, p2Y);
  p2Y += 6;

  // Header tabel debitare
  doc.setFillColor(232, 119, 46);
  doc.rect(15, p2Y, 180, 7, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text('Nr.', 18, p2Y + 5);
  doc.text('Denumire Piesă', 30, p2Y + 5);
  doc.text('Cant.', 105, p2Y + 5);
  doc.text('L (mm)', 125, p2Y + 5);
  doc.text('W (mm)', 145, p2Y + 5);
  doc.text('T (mm)', 165, p2Y + 5);
  doc.text('Volum (m³)', 180, p2Y + 5);
  p2Y += 7;

  // Rânduri tabel debitare
  doc.setTextColor(31, 26, 22);
  bom.parts.forEach((p, idx) => {
    if (idx % 2 === 0) {
      doc.setFillColor(248, 245, 240);
      doc.rect(15, p2Y, 180, 6, 'F');
    }
    doc.text(String(p.id), 18, p2Y + 4.5);
    doc.text(p.name, 30, p2Y + 4.5);
    doc.text(`${p.qty} buc`, 105, p2Y + 4.5);
    doc.text(String(p.length), 125, p2Y + 4.5);
    doc.text(String(p.width), 145, p2Y + 4.5);
    doc.text(String(p.thickness), 165, p2Y + 4.5);
    doc.text(p.volumeM3.toFixed(4), 180, p2Y + 4.5);
    p2Y += 6;
  });

  p2Y += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('2. Ghid de Execuție & Asamblare Pas cu Pas', 15, p2Y);
  p2Y += 8;

  (plan.steps || []).forEach(s => {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(232, 119, 46);
    doc.text(`Pasul ${s.step}: ${s.title}`, 15, p2Y);
    p2Y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(40, 35, 30);
    const stepLines = doc.splitTextToSize(s.text, 180);
    doc.text(stepLines, 15, p2Y);
    p2Y += stepLines.length * 4.5 + 2;

    if (s.tip) {
      doc.setTextColor(46, 157, 91);
      doc.setFontSize(8.5);
      doc.text(`Sfat meseriaș: ${s.tip}`, 15, p2Y);
      p2Y += 5;
    }
    if (s.warn) {
      doc.setTextColor(214, 69, 69);
      doc.setFontSize(8.5);
      doc.text(`Atenție: ${s.warn}`, 15, p2Y);
      p2Y += 5;
    }
    p2Y += 3;
  });

  // Pagina 3: Desene Tehnice Individuale pentru Fiecare Piesă (Fișe de Fabricație)
  doc.addPage();
  doc.setFillColor(31, 26, 22);
  doc.rect(0, 0, 210, 16, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('FIȘE TEHNICE INDIVIDUALE PE ELEMENT (DETALIU DEBITARE & GĂURIRE)', 15, 11);

  let p3Y = 26;
  bom.parts.forEach((p, idx) => {
    if (p3Y > 240) {
      doc.addPage();
      doc.setFillColor(31, 26, 22);
      doc.rect(0, 0, 210, 16, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('FIȘE TEHNICE INDIVIDUALE PE ELEMENT (CONTINUARE)', 15, 11);
      p3Y = 26;
    }

    // Chenar piesă individuală
    doc.setFillColor(250, 248, 245);
    doc.roundedRect(15, p3Y, 180, 42, 2, 2, 'F');
    doc.setDrawColor(200, 190, 180);
    doc.roundedRect(15, p3Y, 180, 42, 2, 2, 'S');

    // Titlu element
    doc.setTextColor(31, 26, 22);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`Element #${p.id}: ${p.name} (${p.qty} bucăți)`, 20, p3Y + 8);

    // Mini-desen cotat al piesei
    const compW = Math.min(65, Math.max(35, (p.length / 1000) * 50));
    const compH = Math.min(22, Math.max(12, (p.width / 1000) * 35));
    const cX = 22;
    const cY = p3Y + 14;

    doc.setFillColor(232, 216, 195);
    doc.setDrawColor(58, 43, 28);
    doc.rect(cX, cY, compW, compH, 'FD');

    // Cote pe mini-desen
    doc.setTextColor(217, 101, 30);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    doc.text(`${p.length} mm`, cX + compW / 2, cY - 2, { align: 'center' });
    doc.text(`${p.width} mm`, cX + compW + 2, cY + compH / 2 + 1);

    // Specificații tehnice de montaj
    doc.setTextColor(60, 50, 40);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.text(`• Dimensiuni brute debitare: ${p.length} × ${p.width} × ${p.thickness} mm`, 105, p3Y + 15);
    doc.text(`• Grosime material panou: T = ${p.thickness} mm`, 105, p3Y + 22);
    doc.text(`• Prelucrare muchii: Cant ABS 0.4mm / Bizotare fină R2`, 105, p3Y + 29);
    doc.text(`• Sistem fixare: Găuri de ax la 37 mm de la capete`, 105, p3Y + 36);

    p3Y += 48;
  });

  // Footer cu copyright & număr pagină
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 140, 130);
    doc.text(`Generat gratuit cu Lemnaria CAD Studio  •  Pagina ${i} din ${pageCount}`, 105, 290, { align: 'center' });
  }

  // Salvare fișier PDF
  const filename = `Lemnaria_${plan.id}_Plan_Tehnic.pdf`;
  doc.save(filename);
}
