// Modul Imagini și Previzualizări Realiste pentru Proiectele Lemnaria
// Înlocuiește desenele vectoriale simpliste („lego”) cu fotografii profesionale de tâmplărie fină
// și planșe tehnice arhitecturale de mare rezoluție

export const PROJECT_IMAGES = {
  // 1. Tavă din șipci lemn masiv
  'slatted-boot-tray': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',

  // 2. Bancă de hol cu pantofar & șezut
  'shoe-storage-bench': 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',

  // 3. Măsuță de cafea rustic-modernă
  'coffee-table': 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80',

  // 4. Bibliotecă modulară stil nordic
  'modular-bookshelf': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',

  // 5. Dulap / dressing customizabil
  'custom-cabinet': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',

  // 6. Tocător bucătărie fibră terminală (end-grain)
  'endgrain-cutting-board': 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80',

  // 7. Suport vinuri lemn masiv
  'wine-rack': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',

  // 8. Căsuță tradițională pentru păsări
  'classic-birdhouse': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',

  // 9. Jardinieră înălțată pentru grădină
  'raised-garden-bed': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',

  // 10. Bancă rustică de grădină
  'garden-bench': 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',

  // 11. Masă de picnic cu bănci integrate
  'picnic-table': 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=800&q=80',

  // 12. Bucătărie de grădină & adăpost grill BBQ
  'outdoor-bbq-station': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',

  // 13. Cușcă izolată pentru cățel
  'dog-house': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',

  // 14. Banc de lucru profesional pentru atelier
  'workbench': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',

  // 15. Lădiță clasică de scule tâmplărie
  'tool-tote': 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',

  // 16. Capre pliabile pentru debitare
  'folding-sawhorses': 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',

  // 17. Cuibar și adăpost din lemn pentru găini
  'chicken-coop': 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80'
};

// Mapare arhetipuri pe fotografii reale de tâmplărie
export const ARCHETYPE_IMAGES = {
  'table': 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80',
  'bench': 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
  'chair': 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
  'cabinet': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  'shelf': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
  'planter': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
  'birdhouse': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
  'tote': 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',
  'board': 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80',
  'rack': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  'shed': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  'workbench': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'
};

// Fallback tehnic architectural (linie fină izometrică, fără lego infantil)
export function getBlueprintFallback(title = 'Proiect Tâmplărie', archetype = 'table') {
  const safeTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <rect width="600" height="450" fill="#1b1612"/>
      <defs>
        <pattern id="cadgrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2d241c" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="600" height="450" fill="url(#cadgrid)"/>
      <rect x="20" y="20" width="560" height="410" fill="none" stroke="#4a3b2c" stroke-width="1.5"/>
      <!-- Geometrie tehnică isometrică filigran -->
      <g stroke="#d4a373" stroke-width="1.8" fill="none" stroke-linejoin="round">
        <polygon points="160,180 300,100 440,180 300,260"/>
        <polygon points="160,200 300,280 440,200 440,180 300,260 160,180" fill="rgba(212,163,115,0.08)"/>
        <line x1="190" y1="218" x2="190" y2="340"/>
        <line x1="210" y1="230" x2="210" y2="340"/>
        <line x1="390" y1="230" x2="390" y2="340"/>
        <line x1="410" y1="218" x2="410" y2="340"/>
        <line x1="300" y1="280" x2="300" y2="360"/>
      </g>
      <!-- Cartuș tehnic CAD -->
      <rect x="35" y="375" width="530" height="40" fill="#241d17" stroke="#4a3b2c" stroke-width="1"/>
      <text x="50" y="400" font-family="monospace" font-size="13" font-weight="bold" fill="#e8c49e">LEMNARIA CAD • ${safeTitle.toUpperCase()}</text>
      <text x="545" y="400" text-anchor="end" font-family="monospace" font-size="11" fill="#a8927d">PLAN 3D</text>
    </svg>
  `.trim();

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// Alias pentru compatibilitate cu codul existent
export const PROJECT_SVGS = PROJECT_IMAGES;

export function getProjectIllustration(id, archetype = 'table', title = 'Proiect Tâmplărie') {
  if (PROJECT_IMAGES[id]) {
    return PROJECT_IMAGES[id];
  }

  const t = (title || '').toLowerCase();
  const i = (id || '').toLowerCase();

  // Măsuțe rotunde / Mese rotunde
  if (t.includes('rotund') || i.includes('round')) {
    return 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80';
  }

  // Noptieră
  if (t.includes('noptier') || i.includes('nightstand')) {
    return 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80';
  }

  // Consolă perete
  if (t.includes('consol') || i.includes('console')) {
    return 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80';
  }

  // Masă dining mare
  if (t.includes('dining') || i.includes('dining')) {
    return 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80';
  }

  if (ARCHETYPE_IMAGES[archetype]) {
    return ARCHETYPE_IMAGES[archetype];
  }
  return ARCHETYPE_IMAGES['table'];
}
