// Optimizator debitare scânduri (1D Cut List Optimizer)
// Algoritm First-Fit Decreasing cu lățime de tăiere pânză (Kerf = 3mm)

export function optimizeCutList(parts, stockBoardLength = 2000, kerf = 3) {
  // Descompune piesele pe bucăți individuale
  const pieces = [];
  parts.forEach(p => {
    for (let i = 0; i < p.qty; i++) {
      pieces.push({
        name: p.name,
        length: p.length,
        width: p.width,
        thickness: p.thickness
      });
    }
  });

  // Sortare descrescătoare după lungime
  pieces.sort((a, b) => b.length - a.length);

  const boards = [];

  pieces.forEach(piece => {
    let placed = false;

    // Încearcă să așezi piesa într-o scândură existentă
    for (const b of boards) {
      const spaceNeeded = piece.length + (b.cuts.length > 0 ? kerf : 0);
      if (b.remainingLength >= spaceNeeded) {
        b.cuts.push(piece);
        b.usedLength += spaceNeeded;
        b.remainingLength -= spaceNeeded;
        placed = true;
        break;
      }
    }

    // Dacă nu încape în niciuna, alocă o scândură nouă
    if (!placed) {
      if (piece.length > stockBoardLength) {
        // Piesa e mai lungă decât scândura standard
        boards.push({
          boardIndex: boards.length + 1,
          totalLength: piece.length + 50,
          usedLength: piece.length,
          remainingLength: 50,
          cuts: [piece],
          isCustom: true
        });
      } else {
        boards.push({
          boardIndex: boards.length + 1,
          totalLength: stockBoardLength,
          usedLength: piece.length,
          remainingLength: stockBoardLength - piece.length,
          cuts: [piece]
        });
      }
    }
  });

  const totalStockLength = boards.reduce((acc, b) => acc + b.totalLength, 0);
  const totalUsedLength = boards.reduce((acc, b) => acc + b.usedLength, 0);
  const totalWasteLength = totalStockLength - totalUsedLength;
  const wastePercent = totalStockLength > 0 ? ((totalWasteLength / totalStockLength) * 100).toFixed(1) : 0;

  return {
    stockBoardLength,
    kerf,
    totalBoards: boards.length,
    boards,
    totalStockLength,
    totalUsedLength,
    totalWasteLength,
    wastePercent
  };
}

// Generează HTML cu diagrame grafice de debitare
export function renderCutListDiagram(result) {
  let html = `
    <div class="cut-summary">
      <div class="kpi">
        <div><b>${result.totalBoards}</b><span>Scânduri standard (${result.stockBoardLength}mm)</span></div>
        <div><b>${result.wastePercent}%</b><span>Pierdere rumeguș/resturi</span></div>
        <div><b>${(result.totalStockLength / 1000).toFixed(1)}m</b><span>Lungime totală achiziție</span></div>
      </div>
    </div>
    <div class="board-diagrams" style="display:flex;flex-direction:column;gap:12px;margin-top:14px;">
  `;

  const colors = ['#e8772e', '#4f772d', '#2b6cb0', '#9b59b6', '#319795', '#d69e2e', '#e53e3e'];

  result.boards.forEach((b, idx) => {
    html += `
      <div class="board-card" style="background:#fff;border-radius:12px;padding:10px 12px;border:1px solid var(--line);">
        <div class="row between" style="margin-bottom:6px;font-size:13px;font-weight:700;">
          <span>Scândura #${b.boardIndex} (${b.totalLength}mm)</span>
          <span class="muted">Rest rămas: ${Math.max(0, b.remainingLength)}mm</span>
        </div>
        <div class="board-bar" style="display:flex;height:34px;background:#e9dfd5;border-radius:8px;overflow:hidden;position:relative;border:1px solid #d4c5b3;">
    `;

    b.cuts.forEach((c, cIdx) => {
      const widthPct = ((c.length / b.totalLength) * 100).toFixed(1);
      const color = colors[cIdx % colors.length];
      html += `
        <div style="flex:0 0 ${widthPct}%;background:${color};color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;overflow:hidden;white-space:nowrap;padding:0 4px;border-right:2px solid #fff;" title="${c.name} (${c.length}mm)">
          ${c.length}mm
        </div>
      `;
    });

    // Segment rest / deșeu
    const wastePct = Math.max(0, ((b.remainingLength / b.totalLength) * 100)).toFixed(1);
    if (wastePct > 0) {
      html += `
        <div style="flex:0 0 ${wastePct}%;background:#dfd7cc;color:#7a6f66;display:flex;align-items:center;justify-content:center;font-size:10px;" title="Rest liber: ${b.remainingLength}mm">
          Rest
        </div>
      `;
    }

    html += `
        </div>
        <div class="cut-labels" style="margin-top:6px;font-size:12px;display:flex;flex-wrap:wrap;gap:6px;">
    `;

    b.cuts.forEach((c, cIdx) => {
      const color = colors[cIdx % colors.length];
      html += `
        <span style="display:inline-flex;align-items:center;gap:4px;background:#f5f0eb;padding:2px 6px;border-radius:4px;">
          <span style="width:8px;height:8px;border-radius:50%;background:${color};display:inline-block;"></span>
          ${c.name} (<b>${c.length}mm</b>)
        </span>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `</div>`;
  return html;
}
