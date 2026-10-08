// Modul Calcul BOM (Bill of Materials) și Export Excel profesional (.xlsx)
import { getWoodById } from '../data/woods.js';

export function calculateBOM(plan, currentParams = {}, woodId = 'pin') {
  const wood = getWoodById(woodId);
  const parts = plan.generateParts ? plan.generateParts(currentParams) : [];

  let totalVolumeM3 = 0;
  const enrichedParts = parts.map((p, idx) => {
    // Calcul volum piesă în metri cubi: L(m) * W(m) * T(m) * cantitate
    const vol = (p.length / 1000) * (p.width / 1000) * (p.thickness / 1000) * p.qty;
    totalVolumeM3 += vol;
    return {
      ...p,
      id: idx + 1,
      volumeM3: vol
    };
  });

  // Lemnul brut necesită o marjă de pierdere de debitare / rindeluire de ~15-20%
  const grossVolumeM3 = totalVolumeM3 * 1.18;
  const woodCostRon = Math.round(grossVolumeM3 * (wood.priceRonM3 || 2000));
  const totalWeightKg = Math.round(totalVolumeM3 * (wood.density || 600));

  // Feronerie și accesorii
  const hardware = (plan.hardware || []).map(h => ({
    ...h
  }));

  return {
    planTitle: plan.roTitle || plan.title,
    woodName: wood.name,
    woodDensity: wood.density,
    parts: enrichedParts,
    hardware,
    tools: plan.tools || [],
    netVolumeM3: totalVolumeM3.toFixed(4),
    grossVolumeM3: grossVolumeM3.toFixed(4),
    totalWeightKg
  };
}

// Export fișier Excel (.xlsx) folosind SheetJS
export function exportToExcel(bomData, filename = 'Lemnaria_Lista_Cumparaturi_BOM.xlsx') {
  if (typeof window.XLSX === 'undefined') {
    throw new Error('Biblioteca XLSX nu este încărcată.');
  }

  const wb = window.XLSX.utils.book_new();

  // 1. Sheet: Lista Debitare Lemn
  const partsSheetData = [
    ['Nr.', 'Denumire Piesă', 'Cantitate (buc)', 'Lungime (mm)', 'Lățime (mm)', 'Grosime (mm)', 'Volum Net (m³)', 'Material']
  ];
  bomData.parts.forEach(p => {
    partsSheetData.push([
      p.id,
      p.name,
      p.qty,
      p.length,
      p.width,
      p.thickness,
      Number(p.volumeM3.toFixed(5)),
      p.material || bomData.woodName
    ]);
  });
  // Linie sumar
  partsSheetData.push([]);
  partsSheetData.push(['SUMAR LEMN', '', '', '', '', '', Number(bomData.netVolumeM3), `Specie: ${bomData.woodName}`]);
  partsSheetData.push(['VOLUM BRUT CU PIERDERI (18%)', '', '', '', '', '', Number(bomData.grossVolumeM3), `Greutate estimată: ${bomData.totalWeightKg} kg`]);

  const wsParts = window.XLSX.utils.aoa_to_sheet(partsSheetData);
  window.XLSX.utils.book_append_sheet(wb, wsParts, 'Debitare Lemn');

  // 2. Sheet: Feronerie & Consumabile
  const hwSheetData = [
    ['Nr.', 'Articol Feronerie / Consumabil', 'Cantitate', 'Unitate', 'Specificații']
  ];
  bomData.hardware.forEach((h, idx) => {
    hwSheetData.push([
      idx + 1,
      h.name,
      h.qty,
      h.unit,
      h.specs || 'Conform schiței'
    ]);
  });

  const wsHw = window.XLSX.utils.aoa_to_sheet(hwSheetData);
  window.XLSX.utils.book_append_sheet(wb, wsHw, 'Feronerie & Accesorii');

  // 3. Sheet: Sumar Materiale & Planificare
  const summarySheetData = [
    ['RAPORT MATERIALE ȘI NECESAR – LEMNARIA', ''],
    ['Proiect:', bomData.planTitle],
    ['Material lemnos:', bomData.woodName],
    ['Volum util debitat:', `${bomData.netVolumeM3} m³`],
    ['Necesar brut aprovizionare:', `${bomData.grossVolumeM3} m³`],
    ['Greutate produs final:', `${bomData.totalWeightKg} kg`],
    ['', ''],
    ['Scule recomandate:', bomData.tools.join(', ')]
  ];
  const wsSummary = window.XLSX.utils.aoa_to_sheet(summarySheetData);
  window.XLSX.utils.book_append_sheet(wb, wsSummary, 'Sumar & Buget');

  // Generare și declanșare descărcare
  window.XLSX.writeFile(wb, filename);
}
