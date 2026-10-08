// Catalog Complet Lemnaria – 540 de Modele de Tâmplărie Independente
// Include previzualizări vectoriale și formule geometrice pentru Studio 3D

export const CATALOG_PLANS = [
  {
    id: "living-1",
    title: "Rustic Oak Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Rustic Stejar",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 120,
    defaults: {"length": 1100, "width": 600, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Măsuță Cafea Rustic Stejar, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-2",
    title: "Japandi Walnut Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Nuc Stil Japandi",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 150,
    defaults: {"length": 1000, "width": 550, "height": 400, "thickness": 24},
    description: "Model de tâmplărie Măsuță Cafea Nuc Stil Japandi, proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-3",
    title: "Industrial Loft Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Loft cu Poli\u021b\u0103",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1200, "width": 650, "height": 460, "thickness": 32},
    description: "Model de tâmplărie Măsuță Cafea Loft cu Poliță, proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-4",
    title: "Round End Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Rotund\u0103 de Col\u021b",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 600, "width": 600, "height": 500, "thickness": 22},
    description: "Model de tâmplărie Măsuță Rotundă de Colț, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-5",
    title: "Storage Lift-Top Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea cu Blat Dublu Casetat",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 240,
    defaults: {"length": 1150, "width": 600, "height": 480, "thickness": 25},
    description: "Model de tâmplărie Măsuță Cafea cu Blat Dublu Casetat, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-6",
    title: "Minimalist White Ash Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Minimalist\u0103 Frasin",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 950, "width": 500, "height": 420, "thickness": 20},
    description: "Model de tâmplărie Măsuță Cafea Minimalistă Frasin, proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-7",
    title: "Slim Wall Console Table",
    roTitle: "Consol\u0103 \u00cengust\u0103 de Perete pt Living",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 1200, "width": 320, "height": 820, "thickness": 24},
    description: "Model de tâmplărie Consolă Îngustă de Perete pt Living, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-8",
    title: "Low TV Media Console",
    roTitle: "Comod\u0103 TV Joas\u0103 cu U\u0219i Culisante",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 210,
    defaults: {"length": 1600, "width": 420, "height": 520, "thickness": 20},
    description: "Model de tâmplărie Comodă TV Joasă cu Uși Culisante, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-9",
    title: "Hexagon Honeycomb Shelves",
    roTitle: "Etajer\u0103 Fagure Hexagonal\u0103 (Set 3)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 380, "width": 180, "height": 330, "thickness": 18},
    description: "Model de tâmplărie Etajeră Fagure Hexagonală (Set 3), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-10",
    title: "Asymmetric Geometric Bookshelf",
    roTitle: "Bibliotec\u0103 Perete Asimetric\u0103",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Avansat",
    timeMinutes: 280,
    defaults: {"length": 1200, "width": 300, "height": 1900, "thickness": 22},
    description: "Model de tâmplărie Bibliotecă Perete Asimetrică, proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-11",
    title: "Solid Oak 6-Person Dining Table",
    roTitle: "Mas\u0103 Dining Masiv\u0103 pt 6 Persoane",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 1800, "width": 900, "height": 760, "thickness": 38},
    description: "Model de tâmplărie Masă Dining Masivă pt 6 Persoane, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-12",
    title: "Round Extendable Dining Table",
    roTitle: "Mas\u0103 Rotund\u0103 Dining Extensibil\u0103",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 320,
    defaults: {"length": 1100, "width": 1100, "height": 760, "thickness": 28},
    description: "Model de tâmplărie Masă Rotundă Dining Extensibilă, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-13",
    title: "Kitchen Prep Island on Wheels",
    roTitle: "Insul\u0103 Mobil\u0103 Buc\u0103t\u0103rie cu Sertare",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 360,
    defaults: {"length": 1200, "width": 650, "height": 900, "thickness": 35},
    description: "Model de tâmplărie Insulă Mobilă Bucătărie cu Sertare, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-14",
    title: "Checkerboard End-Grain Cutting Board",
    roTitle: "Toc\u0103tor End-Grain Tabl\u0103 de \u0218ah",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 460, "width": 320, "height": 45, "thickness": 45},
    description: "Model de tâmplărie Tocător End-Grain Tablă de Șah, proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-15",
    title: "Rustic Charcuterie Serving Board",
    roTitle: "Platou Rustic de Servire cu M\u00e2nere",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 600, "width": 250, "height": 28, "thickness": 28},
    description: "Model de tâmplărie Platou Rustic de Servire cu Mânere, proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-16",
    title: "Magnetic Knife Wall Strip",
    roTitle: "Suport Magnetic Cu\u021bite de Perete",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 450, "width": 60, "height": 22, "thickness": 22},
    description: "Model de tâmplărie Suport Magnetic Cuțite de Perete, proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-17",
    title: "Honeycomb 12-Bottle Wine Rack",
    roTitle: "Suport Vinuri Fagure 12 Sticle",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "rack",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 450, "width": 280, "height": 450, "thickness": 18},
    description: "Model de tâmplărie Suport Vinuri Fagure 12 Sticle, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-18",
    title: "Rolling Bar Cart with Shelves",
    roTitle: "C\u0103rucior Mobil Servire & Bar",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 160,
    defaults: {"length": 800, "width": 450, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Cărucior Mobil Servire & Bar, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-19",
    title: "Tiered Spice & Herb Rack",
    roTitle: "Etajer\u0103 Mirodenii cu Fante \u00cenclinate",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 500, "width": 120, "height": 450, "thickness": 15},
    description: "Model de tâmplărie Etajeră Mirodenii cu Fante Înclinate, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-20",
    title: "Roll-Top Wooden Bread Box",
    roTitle: "Cutie Tradi\u021bional\u0103 de P\u00e2ine cu Rulou",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 140,
    defaults: {"length": 400, "width": 280, "height": 220, "thickness": 16},
    description: "Model de tâmplărie Cutie Tradițională de Pâine cu Rulou, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-21",
    title: "2-Door Wardrobe with Bottom Drawer",
    roTitle: "Dulap 2 U\u0219i cu Sertar Inferior",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 300,
    defaults: {"length": 850, "width": 520, "height": 1850, "thickness": 18},
    description: "Model de tâmplărie Dulap 2 Uși cu Sertar Inferior, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-22",
    title: "Open Walk-in Clothes Rack System",
    roTitle: "Dressing Deschis Stil Walk-in",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 220,
    defaults: {"length": 1200, "width": 450, "height": 2000, "thickness": 22},
    description: "Model de tâmplărie Dressing Deschis Stil Walk-in, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-23",
    title: "Shaker-Style 4-Drawer Dresser",
    roTitle: "Comod\u0103 4 Sertare Stil Shaker",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 900, "width": 460, "height": 920, "thickness": 18},
    description: "Model de tâmplărie Comodă 4 Sertare Stil Shaker, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-24",
    title: "Modern Bedside Nightstand",
    roTitle: "Noptier\u0103 Modern\u0103 cu Sertar & Ni\u0219\u0103",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 450, "width": 380, "height": 550, "thickness": 18},
    description: "Model de tâmplărie Noptieră Modernă cu Sertar & Nișă, proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-25",
    title: "Floating Wall Nightstand",
    roTitle: "Noptier\u0103 Suspendat\u0103 de Perete",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 400, "width": 300, "height": 180, "thickness": 18},
    description: "Model de tâmplărie Noptieră Suspendată de Perete, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-26",
    title: "End of Bed Storage Hope Chest",
    roTitle: "Banc\u0103 de Cap\u0103t de Pat cu Lad\u0103",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "bench",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 160,
    defaults: {"length": 1200, "width": 420, "height": 480, "thickness": 22},
    description: "Model de tâmplărie Bancă de Capăt de Pat cu Ladă, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-27",
    title: "Tree Branch Entryway Coat Stand",
    roTitle: "Cuier Pom de Haine cu 8 Ag\u0103\u021b\u0103tori",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 450, "width": 450, "height": 1750, "thickness": 35},
    description: "Model de tâmplărie Cuier Pom de Haine cu 8 Agățători, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-28",
    title: "French Cleat Entryway Coat Rack",
    roTitle: "Panou Cuier French Cleat pt Hol",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 1000, "width": 100, "height": 600, "thickness": 20},
    description: "Model de tâmplărie Panou Cuier French Cleat pt Hol, proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-29",
    title: "3-Tier Tilted Shoe Organizer",
    roTitle: "Pantofar \u00cenclinat 3 Niveluri",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 85,
    defaults: {"length": 750, "width": 280, "height": 950, "thickness": 18},
    description: "Model de tâmplărie Pantofar Înclinat 3 Niveluri, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-30",
    title: "Full-Length Freestanding Mirror",
    roTitle: "Oglind\u0103 de Podea cu Ram\u0103 Masiv\u0103",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 550, "width": 400, "height": 1650, "thickness": 28},
    description: "Model de tâmplărie Oglindă de Podea cu Ramă Masivă, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-31",
    title: "Raised Garden Bed 150x80cm",
    roTitle: "Ghiveci \u00cen\u0103l\u021bat Salc\u00e2m pt Legume",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 1500, "width": 800, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Ghiveci Înălțat Salcâm pt Legume, proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-32",
    title: "3-Tier Step Plant Stand",
    roTitle: "Jardinier\u0103 Etajat\u0103 \u00een Trepte",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 900, "width": 600, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Jardinieră Etajată în Trepte, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-33",
    title: "Corner Planter with Trellis Lattice",
    roTitle: "Jardinier\u0103 de Col\u021b cu Spaliere Gard",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 140,
    defaults: {"length": 800, "width": 800, "height": 1600, "thickness": 25},
    description: "Model de tâmplărie Jardinieră de Colț cu Spaliere Gard, proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-34",
    title: "Ergonomic Curved Garden Bench",
    roTitle: "Banc\u0103 Ergonomic\u0103 Curbat\u0103 de Gr\u0103din\u0103",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1400, "width": 620, "height": 920, "thickness": 28},
    description: "Model de tâmplărie Bancă Ergonomică Curbată de Grădină, proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-35",
    title: "A-Frame Picnic Table & Benches",
    roTitle: "Mas\u0103 Tradi\u021bional\u0103 Picnic \u00een A",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 1800, "width": 1500, "height": 760, "thickness": 40},
    description: "Model de tâmplărie Masă Tradițională Picnic în A, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-36",
    title: "4-Position Adjustable Sun Lounger",
    roTitle: "\u0218ezlong Reglabil 4 Trepte pt Curte",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 220,
    defaults: {"length": 1950, "width": 650, "height": 350, "thickness": 28},
    description: "Model de tâmplărie Șezlong Reglabil 4 Trepte pt Curte, proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-37",
    title: "Garden Patio Pergola Arbor",
    roTitle: "Pergol\u0103 de Teras\u0103 cu Lamele",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "molid",
    difficulty: "Avansat",
    timeMinutes: 480,
    defaults: {"length": 3000, "width": 2500, "height": 2400, "thickness": 90},
    description: "Model de tâmplărie Pergolă de Terasă cu Lamele, proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-38",
    title: "Outdoor BBQ Kitchen Shelter Island",
    roTitle: "Ad\u0103post & Sta\u021bie Grill Buc\u0103t\u0103rie Var\u0103",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 360,
    defaults: {"length": 1800, "width": 750, "height": 2100, "thickness": 28},
    description: "Model de tâmplărie Adăpost & Stație Grill Bucătărie Vară, proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-39",
    title: "Classic Songbird Nesting Birdhouse",
    roTitle: "C\u0103su\u021b\u0103 Clasic\u0103 P\u0103s\u0103ri C\u00e2nt\u0103toare",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 180, "width": 180, "height": 260, "thickness": 18},
    description: "Model de tâmplărie Căsuță Clasică Păsări Cântătoare, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-40",
    title: "Gazebo Roof Bird Feeder Station",
    roTitle: "Hr\u0103nitoare P\u0103s\u0103ri Acoperi\u0219 \u0218indril\u0103",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 280, "width": 280, "height": 340, "thickness": 18},
    description: "Model de tâmplărie Hrănitoare Păsări Acoperiș Șindrilă, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-41",
    title: "Heavy-Duty Woodworking Workbench",
    roTitle: "Banc Masiv T\u00e2mpl\u0103rie cu Menghin\u0103",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 240,
    defaults: {"length": 1500, "width": 700, "height": 900, "thickness": 45},
    description: "Model de tâmplărie Banc Masiv Tâmplărie cu Menghină, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-42",
    title: "Folding Heavy Sawhorses Pair",
    roTitle: "Capre de Lucru Pliabile 400kg",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "bench",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 900, "width": 550, "height": 800, "thickness": 45},
    description: "Model de tâmplărie Capre de Lucru Pliabile 400kg, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-43",
    title: "Classic Wooden Joiner Tool Tote",
    roTitle: "Lad\u0103 Tradi\u021bional\u0103 Scule cu M\u00e2ner Fag",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 500, "width": 240, "height": 320, "thickness": 18},
    description: "Model de tâmplărie Ladă Tradițională Scule cu Mâner Fag, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-44",
    title: "Wall-Mounted Lumber Storage Rack",
    roTitle: "Rastel de Perete pt Sc\u00e2nduri & Lemn",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 1200, "width": 350, "height": 1400, "thickness": 45},
    description: "Model de tâmplărie Rastel de Perete pt Scânduri & Lemn, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-45",
    title: "Mobile Miter Saw Stand Station",
    roTitle: "C\u0103rucior Mobil pt Fer\u0103str\u0103u Circular",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1100, "width": 650, "height": 880, "thickness": 32},
    description: "Model de tâmplărie Cărucior Mobil pt Ferăstrău Circular, proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-46",
    title: "Tool Cabinet with French Cleats",
    roTitle: "Dulap de Perete pt D\u0103l\u021bi & Rindele",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 170,
    defaults: {"length": 750, "width": 220, "height": 900, "thickness": 18},
    description: "Model de tâmplărie Dulap de Perete pt Dălți & Rindele, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-47",
    title: "16-Bin Hardware Storage Unit",
    roTitle: "Organizator \u0218uruburi 16 Sertare Mici",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 110,
    defaults: {"length": 600, "width": 180, "height": 450, "thickness": 14},
    description: "Model de tâmplărie Organizator Șuruburi 16 Sertare Mici, proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-48",
    title: "Table Saw Crosscut Sled Jig",
    roTitle: "Dispozitiv de T\u0103iere la Unghi Circular",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 90,
    defaults: {"length": 700, "width": 500, "height": 120, "thickness": 18},
    description: "Model de tâmplărie Dispozitiv de Tăiere la Unghi Circular, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-49",
    title: "Carrying Tool Chest with Latches",
    roTitle: "Cutie de Scule cu \u00cenchidere Z\u0103vor",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 650, "width": 320, "height": 300, "thickness": 20},
    description: "Model de tâmplărie Cutie de Scule cu Închidere Zăvor, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-50",
    title: "Downturn Sanding Work Table",
    roTitle: "Banc de \u0218lefuire cu Aspira\u021bie Pasiv\u0103",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 150,
    defaults: {"length": 900, "width": 600, "height": 850, "thickness": 28},
    description: "Model de tâmplărie Banc de Șlefuire cu Aspirație Pasivă, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-51",
    title: "Backyard Chicken Coop & Nesting Box",
    roTitle: "Cuibar & Ad\u0103post pt 4-6 G\u0103ini",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Avansat",
    timeMinutes: 300,
    defaults: {"length": 1400, "width": 900, "height": 1300, "thickness": 20},
    description: "Model de tâmplărie Cuibar & Adăpost pt 4-6 Găini, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-52",
    title: "Insulated Double Wall Dog House",
    roTitle: "C\u0103su\u021b\u0103 Izolat\u0103 Dubl\u0103 pt C\u00e2ine Mare",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 200,
    defaults: {"length": 1100, "width": 850, "height": 950, "thickness": 20},
    description: "Model de tâmplărie Căsuță Izolată Dublă pt Câine Mare, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-53",
    title: "Top Bar Horizontal Beehive Box",
    roTitle: "Stup Orizontal Tradi\u021bional pt Albine",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "tei",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1050, "width": 480, "height": 420, "thickness": 25},
    description: "Model de tâmplărie Stup Orizontal Tradițional pt Albine, proiectat pentru execuție din lemn de tei cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-54",
    title: "2-Story Outdoor Rabbit Hutch",
    roTitle: "Iepur\u0103rie Supraetajat\u0103 2 Cu\u0219ti",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 220,
    defaults: {"length": 1200, "width": 600, "height": 1100, "thickness": 20},
    description: "Model de tâmplărie Iepurărie Supraetajată 2 Cuști, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-55",
    title: "Ventilated Potato & Apple Bin",
    roTitle: "Lad\u0103 Aerisit\u0103 pt Cartofi & Legume",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 700, "width": 450, "height": 800, "thickness": 18},
    description: "Model de tâmplărie Ladă Aerisită pt Cartofi & Legume, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-56",
    title: "Wheelbarrow & Garden Tool Organizer",
    roTitle: "Suport Roab\u0103 & Unelte de Gr\u0103din\u0103",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shelf",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 1200, "width": 400, "height": 1100, "thickness": 28},
    description: "Model de tâmplărie Suport Roabă & Unelte de Grădină, proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-57",
    title: "Heavy Livestock Feed Trough",
    roTitle: "Jgheab Hr\u0103nitor Lemn pt Animale Curte",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 1500, "width": 400, "height": 350, "thickness": 35},
    description: "Model de tâmplărie Jgheab Hrănitor Lemn pt Animale Curte, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-58",
    title: "Traditional Wooden Meat Smoker",
    roTitle: "Afum\u0103toare Tradi\u021bional\u0103 din Lemn",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 210,
    defaults: {"length": 800, "width": 800, "height": 1600, "thickness": 28},
    description: "Model de tâmplărie Afumătoare Tradițională din Lemn, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-59",
    title: "Wooden Fruit Cider Press Basket",
    roTitle: "Pres\u0103 Manual\u0103 pt Struguri & Mere",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 190,
    defaults: {"length": 450, "width": 450, "height": 750, "thickness": 30},
    description: "Model de tâmplărie Presă Manuală pt Struguri & Mere, proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-60",
    title: "Stackable Orchard Apple Crates (Set 4)",
    roTitle: "L\u0103di\u021be Recoltat Fructe Stivuibile",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 500, "width": 350, "height": 280, "thickness": 12},
    description: "Model de tâmplărie Lădițe Recoltat Fructe Stivuibile, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-61",
    title: "Minimalist Walnut Wall Clock 35cm",
    roTitle: "Ceas de Perete Minimalist Nuc",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 350, "width": 350, "height": 28, "thickness": 28},
    description: "Model de tâmplărie Ceas de Perete Minimalist Nuc, proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-62",
    title: "Geometric Table Lamp Base",
    roTitle: "Lamp\u0103 Geometric\u0103 de Mas\u0103 Lemn",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "table",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 180, "width": 180, "height": 320, "thickness": 22},
    description: "Model de tâmplărie Lampă Geometrică de Masă Lemn, proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-63",
    title: "Curved Headphone Display Stand",
    roTitle: "Suport Lemn pt C\u0103\u0219ti Audio",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "chair",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 150, "width": 120, "height": 260, "thickness": 20},
    description: "Model de tâmplărie Suport Lemn pt Căști Audio, proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-64",
    title: "Nightstand Phone Docking Station",
    roTitle: "Suport Telefon & Ceas cu \u00cenc\u0103rcare",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 240, "width": 180, "height": 190, "thickness": 18},
    description: "Model de tâmplărie Suport Telefon & Ceas cu Încărcare, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-65",
    title: "Floating Shelf with Hidden Drawer",
    roTitle: "Poli\u021b\u0103 Plutitoare cu Sertar Ascuns",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 120,
    defaults: {"length": 600, "width": 200, "height": 80, "thickness": 18},
    description: "Model de tâmplărie Poliță Plutitoare cu Sertar Ascuns, proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-66",
    title: "Solid Oak Picture Frame 50x70cm",
    roTitle: "Ram\u0103 Masiv\u0103 Tablou 50x70cm",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 55,
    defaults: {"length": 750, "width": 550, "height": 30, "thickness": 25},
    description: "Model de tâmplărie Ramă Masivă Tablou 50x70cm, proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-67",
    title: "Hanging Slat Plant Chandelier",
    roTitle: "Suport Ghivece Suspendat din \u0218ipci",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 800, "width": 220, "height": 60, "thickness": 18},
    description: "Model de tâmplărie Suport Ghivece Suspendat din Șipci, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-68",
    title: "Desktop Organizer & Pen Caddy",
    roTitle: "Organizator Birou pt Pixuri & Noti\u021be",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "tote",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 35,
    defaults: {"length": 300, "width": 120, "height": 90, "thickness": 15},
    description: "Model de tâmplărie Organizator Birou pt Pixuri & Notițe, proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-69",
    title: "Pyramid 4-Tier Indoor Plant Stand",
    roTitle: "Piramid\u0103 Ghivece Flori Sufragerie",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 700, "width": 500, "height": 1100, "thickness": 20},
    description: "Model de tâmplărie Piramidă Ghivece Flori Sufragerie, proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-70",
    title: "Hardwood Keepsake Jewelry Box",
    roTitle: "Cutie Bijuterii cu Intarsii \u0219i Capac",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "cabinet",
    woodDefault: "nuc",
    difficulty: "Avansat",
    timeMinutes: 180,
    defaults: {"length": 280, "width": 190, "height": 120, "thickness": 14},
    description: "Model de tâmplărie Cutie Bijuterii cu Intarsii și Capac, proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-1-compact",
    title: "Compact Rustic Oak Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Rustic Stejar (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 105,
    defaults: {"length": 880, "width": 510, "height": 400, "thickness": 28},
    description: "Model de tâmplărie Măsuță Cafea Rustic Stejar (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-1-standard",
    title: "Standard Rustic Oak Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Rustic Stejar (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 120,
    defaults: {"length": 1100, "width": 600, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Măsuță Cafea Rustic Stejar (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-1-xl",
    title: "XL Rustic Oak Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Rustic Stejar (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 155,
    defaults: {"length": 1430, "width": 690, "height": 470, "thickness": 28},
    description: "Model de tâmplărie Măsuță Cafea Rustic Stejar (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-1-rustic",
    title: "Rustic Rustic Oak Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Rustic Stejar (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 140,
    defaults: {"length": 1210, "width": 630, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Măsuță Cafea Rustic Stejar (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-1-nordic",
    title: "Nordic Rustic Oak Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Rustic Stejar (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 110,
    defaults: {"length": 1040, "width": 570, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Măsuță Cafea Rustic Stejar (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-1-industrial",
    title: "Industrial Rustic Oak Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Rustic Stejar (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 145,
    defaults: {"length": 1260, "width": 660, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Măsuță Cafea Rustic Stejar (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-1-modern",
    title: "Modern Rustic Oak Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Rustic Stejar (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 135,
    defaults: {"length": 1100, "width": 600, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Măsuță Cafea Rustic Stejar (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-2-compact",
    title: "Compact Japandi Walnut Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Nuc Stil Japandi (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 135,
    defaults: {"length": 800, "width": 470, "height": 360, "thickness": 24},
    description: "Model de tâmplărie Măsuță Cafea Nuc Stil Japandi (Compact), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-2-standard",
    title: "Standard Japandi Walnut Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Nuc Stil Japandi (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 150,
    defaults: {"length": 1000, "width": 550, "height": 400, "thickness": 24},
    description: "Model de tâmplărie Măsuță Cafea Nuc Stil Japandi (Standard), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-2-xl",
    title: "XL Japandi Walnut Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Nuc Stil Japandi (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 185,
    defaults: {"length": 1300, "width": 630, "height": 420, "thickness": 24},
    description: "Model de tâmplărie Măsuță Cafea Nuc Stil Japandi (XL), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-2-rustic",
    title: "Rustic Japandi Walnut Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Nuc Stil Japandi (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 170,
    defaults: {"length": 1100, "width": 580, "height": 400, "thickness": 24},
    description: "Model de tâmplărie Măsuță Cafea Nuc Stil Japandi (Rustic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-2-nordic",
    title: "Nordic Japandi Walnut Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Nuc Stil Japandi (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 140,
    defaults: {"length": 950, "width": 520, "height": 400, "thickness": 24},
    description: "Model de tâmplărie Măsuță Cafea Nuc Stil Japandi (Nordic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-2-industrial",
    title: "Industrial Japandi Walnut Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Nuc Stil Japandi (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 175,
    defaults: {"length": 1150, "width": 600, "height": 400, "thickness": 24},
    description: "Model de tâmplărie Măsuță Cafea Nuc Stil Japandi (Industrial), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-2-modern",
    title: "Modern Japandi Walnut Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Nuc Stil Japandi (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 1000, "width": 550, "height": 400, "thickness": 24},
    description: "Model de tâmplărie Măsuță Cafea Nuc Stil Japandi (Modern), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-3-compact",
    title: "Compact Industrial Loft Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Loft cu Poli\u021b\u0103 (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 960, "width": 550, "height": 410, "thickness": 32},
    description: "Model de tâmplărie Măsuță Cafea Loft cu Poliță (Compact), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-3-standard",
    title: "Standard Industrial Loft Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Loft cu Poli\u021b\u0103 (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1200, "width": 650, "height": 460, "thickness": 32},
    description: "Model de tâmplărie Măsuță Cafea Loft cu Poliță (Standard), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-3-xl",
    title: "XL Industrial Loft Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Loft cu Poli\u021b\u0103 (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 215,
    defaults: {"length": 1560, "width": 750, "height": 480, "thickness": 32},
    description: "Model de tâmplărie Măsuță Cafea Loft cu Poliță (XL), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-3-rustic",
    title: "Rustic Industrial Loft Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Loft cu Poli\u021b\u0103 (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 200,
    defaults: {"length": 1320, "width": 680, "height": 460, "thickness": 32},
    description: "Model de tâmplărie Măsuță Cafea Loft cu Poliță (Rustic), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-3-nordic",
    title: "Nordic Industrial Loft Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Loft cu Poli\u021b\u0103 (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 170,
    defaults: {"length": 1140, "width": 620, "height": 460, "thickness": 32},
    description: "Model de tâmplărie Măsuță Cafea Loft cu Poliță (Nordic), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-3-industrial",
    title: "Industrial Industrial Loft Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Loft cu Poli\u021b\u0103 (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 205,
    defaults: {"length": 1380, "width": 720, "height": 460, "thickness": 32},
    description: "Model de tâmplărie Măsuță Cafea Loft cu Poliță (Industrial), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-3-modern",
    title: "Modern Industrial Loft Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Loft cu Poli\u021b\u0103 (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 1200, "width": 650, "height": 460, "thickness": 32},
    description: "Model de tâmplărie Măsuță Cafea Loft cu Poliță (Modern), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-4-compact",
    title: "Compact Round End Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Rotund\u0103 de Col\u021b (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 480, "width": 510, "height": 450, "thickness": 22},
    description: "Model de tâmplărie Măsuță Rotundă de Colț (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-4-standard",
    title: "Standard Round End Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Rotund\u0103 de Col\u021b (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 600, "width": 600, "height": 500, "thickness": 22},
    description: "Model de tâmplărie Măsuță Rotundă de Colț (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-4-xl",
    title: "XL Round End Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Rotund\u0103 de Col\u021b (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 125,
    defaults: {"length": 780, "width": 690, "height": 520, "thickness": 22},
    description: "Model de tâmplărie Măsuță Rotundă de Colț (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-4-rustic",
    title: "Rustic Round End Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Rotund\u0103 de Col\u021b (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 660, "width": 630, "height": 500, "thickness": 22},
    description: "Model de tâmplărie Măsuță Rotundă de Colț (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-4-nordic",
    title: "Nordic Round End Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Rotund\u0103 de Col\u021b (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 570, "width": 570, "height": 500, "thickness": 22},
    description: "Model de tâmplărie Măsuță Rotundă de Colț (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-4-industrial",
    title: "Industrial Round End Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Rotund\u0103 de Col\u021b (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 115,
    defaults: {"length": 690, "width": 660, "height": 500, "thickness": 22},
    description: "Model de tâmplărie Măsuță Rotundă de Colț (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-4-modern",
    title: "Modern Round End Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Rotund\u0103 de Col\u021b (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 105,
    defaults: {"length": 600, "width": 600, "height": 500, "thickness": 22},
    description: "Model de tâmplărie Măsuță Rotundă de Colț (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-5-compact",
    title: "Compact Storage Lift-Top Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea cu Blat Dublu Casetat (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 225,
    defaults: {"length": 920, "width": 510, "height": 430, "thickness": 25},
    description: "Model de tâmplărie Măsuță Cafea cu Blat Dublu Casetat (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-5-standard",
    title: "Standard Storage Lift-Top Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea cu Blat Dublu Casetat (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 240,
    defaults: {"length": 1150, "width": 600, "height": 480, "thickness": 25},
    description: "Model de tâmplărie Măsuță Cafea cu Blat Dublu Casetat (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-5-xl",
    title: "XL Storage Lift-Top Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea cu Blat Dublu Casetat (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 275,
    defaults: {"length": 1500, "width": 690, "height": 500, "thickness": 25},
    description: "Model de tâmplărie Măsuță Cafea cu Blat Dublu Casetat (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-5-rustic",
    title: "Rustic Storage Lift-Top Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea cu Blat Dublu Casetat (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 260,
    defaults: {"length": 1260, "width": 630, "height": 480, "thickness": 25},
    description: "Model de tâmplărie Măsuță Cafea cu Blat Dublu Casetat (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-5-nordic",
    title: "Nordic Storage Lift-Top Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea cu Blat Dublu Casetat (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 230,
    defaults: {"length": 1090, "width": 570, "height": 480, "thickness": 25},
    description: "Model de tâmplărie Măsuță Cafea cu Blat Dublu Casetat (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-5-industrial",
    title: "Industrial Storage Lift-Top Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea cu Blat Dublu Casetat (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 265,
    defaults: {"length": 1320, "width": 660, "height": 480, "thickness": 25},
    description: "Model de tâmplărie Măsuță Cafea cu Blat Dublu Casetat (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-5-modern",
    title: "Modern Storage Lift-Top Coffee Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea cu Blat Dublu Casetat (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 255,
    defaults: {"length": 1150, "width": 600, "height": 480, "thickness": 25},
    description: "Model de tâmplărie Măsuță Cafea cu Blat Dublu Casetat (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-6-compact",
    title: "Compact Minimalist White Ash Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Minimalist\u0103 Frasin (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 760, "width": 420, "height": 380, "thickness": 20},
    description: "Model de tâmplărie Măsuță Cafea Minimalistă Frasin (Compact), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-6-standard",
    title: "Standard Minimalist White Ash Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Minimalist\u0103 Frasin (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 950, "width": 500, "height": 420, "thickness": 20},
    description: "Model de tâmplărie Măsuță Cafea Minimalistă Frasin (Standard), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-6-xl",
    title: "XL Minimalist White Ash Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Minimalist\u0103 Frasin (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 115,
    defaults: {"length": 1240, "width": 580, "height": 440, "thickness": 20},
    description: "Model de tâmplărie Măsuță Cafea Minimalistă Frasin (XL), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-6-rustic",
    title: "Rustic Minimalist White Ash Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Minimalist\u0103 Frasin (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 100,
    defaults: {"length": 1040, "width": 520, "height": 420, "thickness": 20},
    description: "Model de tâmplărie Măsuță Cafea Minimalistă Frasin (Rustic), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-6-nordic",
    title: "Nordic Minimalist White Ash Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Minimalist\u0103 Frasin (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 900, "width": 480, "height": 420, "thickness": 20},
    description: "Model de tâmplărie Măsuță Cafea Minimalistă Frasin (Nordic), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-6-industrial",
    title: "Industrial Minimalist White Ash Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Minimalist\u0103 Frasin (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 105,
    defaults: {"length": 1090, "width": 550, "height": 420, "thickness": 20},
    description: "Model de tâmplărie Măsuță Cafea Minimalistă Frasin (Industrial), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-6-modern",
    title: "Modern Minimalist White Ash Table",
    roTitle: "M\u0103su\u021b\u0103 Cafea Minimalist\u0103 Frasin (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 950, "width": 500, "height": 420, "thickness": 20},
    description: "Model de tâmplărie Măsuță Cafea Minimalistă Frasin (Modern), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-7-compact",
    title: "Compact Slim Wall Console Table",
    roTitle: "Consol\u0103 \u00cengust\u0103 de Perete pt Living (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 115,
    defaults: {"length": 960, "width": 270, "height": 740, "thickness": 24},
    description: "Model de tâmplărie Consolă Îngustă de Perete pt Living (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-7-standard",
    title: "Standard Slim Wall Console Table",
    roTitle: "Consol\u0103 \u00cengust\u0103 de Perete pt Living (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 1200, "width": 320, "height": 820, "thickness": 24},
    description: "Model de tâmplărie Consolă Îngustă de Perete pt Living (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-7-xl",
    title: "XL Slim Wall Console Table",
    roTitle: "Consol\u0103 \u00cengust\u0103 de Perete pt Living (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 1560, "width": 370, "height": 860, "thickness": 24},
    description: "Model de tâmplărie Consolă Îngustă de Perete pt Living (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-7-rustic",
    title: "Rustic Slim Wall Console Table",
    roTitle: "Consol\u0103 \u00cengust\u0103 de Perete pt Living (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 150,
    defaults: {"length": 1320, "width": 340, "height": 820, "thickness": 24},
    description: "Model de tâmplărie Consolă Îngustă de Perete pt Living (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-7-nordic",
    title: "Nordic Slim Wall Console Table",
    roTitle: "Consol\u0103 \u00cengust\u0103 de Perete pt Living (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 120,
    defaults: {"length": 1140, "width": 300, "height": 820, "thickness": 24},
    description: "Model de tâmplărie Consolă Îngustă de Perete pt Living (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-7-industrial",
    title: "Industrial Slim Wall Console Table",
    roTitle: "Consol\u0103 \u00cengust\u0103 de Perete pt Living (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 155,
    defaults: {"length": 1380, "width": 350, "height": 820, "thickness": 24},
    description: "Model de tâmplărie Consolă Îngustă de Perete pt Living (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-7-modern",
    title: "Modern Slim Wall Console Table",
    roTitle: "Consol\u0103 \u00cengust\u0103 de Perete pt Living (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 145,
    defaults: {"length": 1200, "width": 320, "height": 820, "thickness": 24},
    description: "Model de tâmplărie Consolă Îngustă de Perete pt Living (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-8-compact",
    title: "Compact Low TV Media Console",
    roTitle: "Comod\u0103 TV Joas\u0103 cu U\u0219i Culisante (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 1280, "width": 360, "height": 470, "thickness": 20},
    description: "Model de tâmplărie Comodă TV Joasă cu Uși Culisante (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-8-standard",
    title: "Standard Low TV Media Console",
    roTitle: "Comod\u0103 TV Joas\u0103 cu U\u0219i Culisante (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 210,
    defaults: {"length": 1600, "width": 420, "height": 520, "thickness": 20},
    description: "Model de tâmplărie Comodă TV Joasă cu Uși Culisante (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-8-xl",
    title: "XL Low TV Media Console",
    roTitle: "Comod\u0103 TV Joas\u0103 cu U\u0219i Culisante (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 245,
    defaults: {"length": 2080, "width": 480, "height": 550, "thickness": 20},
    description: "Model de tâmplărie Comodă TV Joasă cu Uși Culisante (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-8-rustic",
    title: "Rustic Low TV Media Console",
    roTitle: "Comod\u0103 TV Joas\u0103 cu U\u0219i Culisante (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 230,
    defaults: {"length": 1760, "width": 440, "height": 520, "thickness": 20},
    description: "Model de tâmplărie Comodă TV Joasă cu Uși Culisante (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-8-nordic",
    title: "Nordic Low TV Media Console",
    roTitle: "Comod\u0103 TV Joas\u0103 cu U\u0219i Culisante (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 200,
    defaults: {"length": 1520, "width": 400, "height": 520, "thickness": 20},
    description: "Model de tâmplărie Comodă TV Joasă cu Uși Culisante (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-8-industrial",
    title: "Industrial Low TV Media Console",
    roTitle: "Comod\u0103 TV Joas\u0103 cu U\u0219i Culisante (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 235,
    defaults: {"length": 1840, "width": 460, "height": 520, "thickness": 20},
    description: "Model de tâmplărie Comodă TV Joasă cu Uși Culisante (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-8-modern",
    title: "Modern Low TV Media Console",
    roTitle: "Comod\u0103 TV Joas\u0103 cu U\u0219i Culisante (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 225,
    defaults: {"length": 1600, "width": 420, "height": 520, "thickness": 20},
    description: "Model de tâmplărie Comodă TV Joasă cu Uși Culisante (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-9-compact",
    title: "Compact Hexagon Honeycomb Shelves",
    roTitle: "Etajer\u0103 Fagure Hexagonal\u0103 (Set 3) (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 300, "width": 150, "height": 300, "thickness": 18},
    description: "Model de tâmplărie Etajeră Fagure Hexagonală (Set 3) (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-9-standard",
    title: "Standard Hexagon Honeycomb Shelves",
    roTitle: "Etajer\u0103 Fagure Hexagonal\u0103 (Set 3) (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 380, "width": 180, "height": 330, "thickness": 18},
    description: "Model de tâmplărie Etajeră Fagure Hexagonală (Set 3) (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-9-xl",
    title: "XL Hexagon Honeycomb Shelves",
    roTitle: "Etajer\u0103 Fagure Hexagonal\u0103 (Set 3) (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 490, "width": 210, "height": 350, "thickness": 18},
    description: "Model de tâmplărie Etajeră Fagure Hexagonală (Set 3) (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-9-rustic",
    title: "Rustic Hexagon Honeycomb Shelves",
    roTitle: "Etajer\u0103 Fagure Hexagonal\u0103 (Set 3) (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 80,
    defaults: {"length": 420, "width": 190, "height": 330, "thickness": 18},
    description: "Model de tâmplărie Etajeră Fagure Hexagonală (Set 3) (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-9-nordic",
    title: "Nordic Hexagon Honeycomb Shelves",
    roTitle: "Etajer\u0103 Fagure Hexagonal\u0103 (Set 3) (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 360, "width": 170, "height": 330, "thickness": 18},
    description: "Model de tâmplărie Etajeră Fagure Hexagonală (Set 3) (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-9-industrial",
    title: "Industrial Hexagon Honeycomb Shelves",
    roTitle: "Etajer\u0103 Fagure Hexagonal\u0103 (Set 3) (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 85,
    defaults: {"length": 440, "width": 200, "height": 330, "thickness": 18},
    description: "Model de tâmplărie Etajeră Fagure Hexagonală (Set 3) (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-9-modern",
    title: "Modern Hexagon Honeycomb Shelves",
    roTitle: "Etajer\u0103 Fagure Hexagonal\u0103 (Set 3) (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 380, "width": 180, "height": 330, "thickness": 18},
    description: "Model de tâmplărie Etajeră Fagure Hexagonală (Set 3) (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-10-compact",
    title: "Compact Asymmetric Geometric Bookshelf",
    roTitle: "Bibliotec\u0103 Perete Asimetric\u0103 (Compact)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Avansat",
    timeMinutes: 265,
    defaults: {"length": 960, "width": 260, "height": 1710, "thickness": 22},
    description: "Model de tâmplărie Bibliotecă Perete Asimetrică (Compact), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-10-standard",
    title: "Standard Asymmetric Geometric Bookshelf",
    roTitle: "Bibliotec\u0103 Perete Asimetric\u0103 (Standard)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Avansat",
    timeMinutes: 280,
    defaults: {"length": 1200, "width": 300, "height": 1900, "thickness": 22},
    description: "Model de tâmplărie Bibliotecă Perete Asimetrică (Standard), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-10-xl",
    title: "XL Asymmetric Geometric Bookshelf",
    roTitle: "Bibliotec\u0103 Perete Asimetric\u0103 (XL)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Avansat",
    timeMinutes: 315,
    defaults: {"length": 1560, "width": 340, "height": 2000, "thickness": 22},
    description: "Model de tâmplărie Bibliotecă Perete Asimetrică (XL), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-10-rustic",
    title: "Rustic Asymmetric Geometric Bookshelf",
    roTitle: "Bibliotec\u0103 Perete Asimetric\u0103 (Rustic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 300,
    defaults: {"length": 1320, "width": 320, "height": 1900, "thickness": 22},
    description: "Model de tâmplărie Bibliotecă Perete Asimetrică (Rustic), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-10-nordic",
    title: "Nordic Asymmetric Geometric Bookshelf",
    roTitle: "Bibliotec\u0103 Perete Asimetric\u0103 (Nordic)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Avansat",
    timeMinutes: 270,
    defaults: {"length": 1140, "width": 280, "height": 1900, "thickness": 22},
    description: "Model de tâmplărie Bibliotecă Perete Asimetrică (Nordic), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-10-industrial",
    title: "Industrial Asymmetric Geometric Bookshelf",
    roTitle: "Bibliotec\u0103 Perete Asimetric\u0103 (Industrial)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 305,
    defaults: {"length": 1380, "width": 330, "height": 1900, "thickness": 22},
    description: "Model de tâmplărie Bibliotecă Perete Asimetrică (Industrial), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "living-10-modern",
    title: "Modern Asymmetric Geometric Bookshelf",
    roTitle: "Bibliotec\u0103 Perete Asimetric\u0103 (Modern)",
    category: "Living",
    roCat: "Sufragerie & Living",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Avansat",
    timeMinutes: 295,
    defaults: {"length": 1200, "width": 300, "height": 1900, "thickness": 22},
    description: "Model de tâmplărie Bibliotecă Perete Asimetrică (Modern), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-11-compact",
    title: "Compact Solid Oak 6-Person Dining Table",
    roTitle: "Mas\u0103 Dining Masiv\u0103 pt 6 Persoane (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 225,
    defaults: {"length": 1440, "width": 760, "height": 680, "thickness": 38},
    description: "Model de tâmplărie Masă Dining Masivă pt 6 Persoane (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-11-standard",
    title: "Standard Solid Oak 6-Person Dining Table",
    roTitle: "Mas\u0103 Dining Masiv\u0103 pt 6 Persoane (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 1800, "width": 900, "height": 760, "thickness": 38},
    description: "Model de tâmplărie Masă Dining Masivă pt 6 Persoane (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-11-xl",
    title: "XL Solid Oak 6-Person Dining Table",
    roTitle: "Mas\u0103 Dining Masiv\u0103 pt 6 Persoane (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 275,
    defaults: {"length": 2340, "width": 1040, "height": 800, "thickness": 38},
    description: "Model de tâmplărie Masă Dining Masivă pt 6 Persoane (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-11-rustic",
    title: "Rustic Solid Oak 6-Person Dining Table",
    roTitle: "Mas\u0103 Dining Masiv\u0103 pt 6 Persoane (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 260,
    defaults: {"length": 1980, "width": 940, "height": 760, "thickness": 38},
    description: "Model de tâmplărie Masă Dining Masivă pt 6 Persoane (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-11-nordic",
    title: "Nordic Solid Oak 6-Person Dining Table",
    roTitle: "Mas\u0103 Dining Masiv\u0103 pt 6 Persoane (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 230,
    defaults: {"length": 1710, "width": 860, "height": 760, "thickness": 38},
    description: "Model de tâmplărie Masă Dining Masivă pt 6 Persoane (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-11-industrial",
    title: "Industrial Solid Oak 6-Person Dining Table",
    roTitle: "Mas\u0103 Dining Masiv\u0103 pt 6 Persoane (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 265,
    defaults: {"length": 2070, "width": 990, "height": 760, "thickness": 38},
    description: "Model de tâmplărie Masă Dining Masivă pt 6 Persoane (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-11-modern",
    title: "Modern Solid Oak 6-Person Dining Table",
    roTitle: "Mas\u0103 Dining Masiv\u0103 pt 6 Persoane (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 255,
    defaults: {"length": 1800, "width": 900, "height": 760, "thickness": 38},
    description: "Model de tâmplărie Masă Dining Masivă pt 6 Persoane (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-12-compact",
    title: "Compact Round Extendable Dining Table",
    roTitle: "Mas\u0103 Rotund\u0103 Dining Extensibil\u0103 (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 305,
    defaults: {"length": 880, "width": 940, "height": 680, "thickness": 28},
    description: "Model de tâmplărie Masă Rotundă Dining Extensibilă (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-12-standard",
    title: "Standard Round Extendable Dining Table",
    roTitle: "Mas\u0103 Rotund\u0103 Dining Extensibil\u0103 (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 320,
    defaults: {"length": 1100, "width": 1100, "height": 760, "thickness": 28},
    description: "Model de tâmplărie Masă Rotundă Dining Extensibilă (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-12-xl",
    title: "XL Round Extendable Dining Table",
    roTitle: "Mas\u0103 Rotund\u0103 Dining Extensibil\u0103 (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 355,
    defaults: {"length": 1430, "width": 1260, "height": 800, "thickness": 28},
    description: "Model de tâmplărie Masă Rotundă Dining Extensibilă (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-12-rustic",
    title: "Rustic Round Extendable Dining Table",
    roTitle: "Mas\u0103 Rotund\u0103 Dining Extensibil\u0103 (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 340,
    defaults: {"length": 1210, "width": 1160, "height": 760, "thickness": 28},
    description: "Model de tâmplărie Masă Rotundă Dining Extensibilă (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-12-nordic",
    title: "Nordic Round Extendable Dining Table",
    roTitle: "Mas\u0103 Rotund\u0103 Dining Extensibil\u0103 (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 310,
    defaults: {"length": 1040, "width": 1040, "height": 760, "thickness": 28},
    description: "Model de tâmplărie Masă Rotundă Dining Extensibilă (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-12-industrial",
    title: "Industrial Round Extendable Dining Table",
    roTitle: "Mas\u0103 Rotund\u0103 Dining Extensibil\u0103 (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 345,
    defaults: {"length": 1260, "width": 1210, "height": 760, "thickness": 28},
    description: "Model de tâmplărie Masă Rotundă Dining Extensibilă (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-12-modern",
    title: "Modern Round Extendable Dining Table",
    roTitle: "Mas\u0103 Rotund\u0103 Dining Extensibil\u0103 (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 335,
    defaults: {"length": 1100, "width": 1100, "height": 760, "thickness": 28},
    description: "Model de tâmplărie Masă Rotundă Dining Extensibilă (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-13-compact",
    title: "Compact Kitchen Prep Island on Wheels",
    roTitle: "Insul\u0103 Mobil\u0103 Buc\u0103t\u0103rie cu Sertare (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 345,
    defaults: {"length": 960, "width": 550, "height": 810, "thickness": 35},
    description: "Model de tâmplărie Insulă Mobilă Bucătărie cu Sertare (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-13-standard",
    title: "Standard Kitchen Prep Island on Wheels",
    roTitle: "Insul\u0103 Mobil\u0103 Buc\u0103t\u0103rie cu Sertare (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 360,
    defaults: {"length": 1200, "width": 650, "height": 900, "thickness": 35},
    description: "Model de tâmplărie Insulă Mobilă Bucătărie cu Sertare (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-13-xl",
    title: "XL Kitchen Prep Island on Wheels",
    roTitle: "Insul\u0103 Mobil\u0103 Buc\u0103t\u0103rie cu Sertare (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 395,
    defaults: {"length": 1560, "width": 750, "height": 940, "thickness": 35},
    description: "Model de tâmplărie Insulă Mobilă Bucătărie cu Sertare (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-13-rustic",
    title: "Rustic Kitchen Prep Island on Wheels",
    roTitle: "Insul\u0103 Mobil\u0103 Buc\u0103t\u0103rie cu Sertare (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 380,
    defaults: {"length": 1320, "width": 680, "height": 900, "thickness": 35},
    description: "Model de tâmplărie Insulă Mobilă Bucătărie cu Sertare (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-13-nordic",
    title: "Nordic Kitchen Prep Island on Wheels",
    roTitle: "Insul\u0103 Mobil\u0103 Buc\u0103t\u0103rie cu Sertare (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 350,
    defaults: {"length": 1140, "width": 620, "height": 900, "thickness": 35},
    description: "Model de tâmplărie Insulă Mobilă Bucătărie cu Sertare (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-13-industrial",
    title: "Industrial Kitchen Prep Island on Wheels",
    roTitle: "Insul\u0103 Mobil\u0103 Buc\u0103t\u0103rie cu Sertare (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 385,
    defaults: {"length": 1380, "width": 720, "height": 900, "thickness": 35},
    description: "Model de tâmplărie Insulă Mobilă Bucătărie cu Sertare (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-13-modern",
    title: "Modern Kitchen Prep Island on Wheels",
    roTitle: "Insul\u0103 Mobil\u0103 Buc\u0103t\u0103rie cu Sertare (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 375,
    defaults: {"length": 1200, "width": 650, "height": 900, "thickness": 35},
    description: "Model de tâmplărie Insulă Mobilă Bucătărie cu Sertare (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-14-compact",
    title: "Compact Checkerboard End-Grain Cutting Board",
    roTitle: "Toc\u0103tor End-Grain Tabl\u0103 de \u0218ah (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 370, "width": 270, "height": 40, "thickness": 45},
    description: "Model de tâmplărie Tocător End-Grain Tablă de Șah (Compact), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-14-standard",
    title: "Standard Checkerboard End-Grain Cutting Board",
    roTitle: "Toc\u0103tor End-Grain Tabl\u0103 de \u0218ah (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 460, "width": 320, "height": 40, "thickness": 45},
    description: "Model de tâmplărie Tocător End-Grain Tablă de Șah (Standard), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-14-xl",
    title: "XL Checkerboard End-Grain Cutting Board",
    roTitle: "Toc\u0103tor End-Grain Tabl\u0103 de \u0218ah (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 125,
    defaults: {"length": 600, "width": 370, "height": 50, "thickness": 45},
    description: "Model de tâmplărie Tocător End-Grain Tablă de Șah (XL), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-14-rustic",
    title: "Rustic Checkerboard End-Grain Cutting Board",
    roTitle: "Toc\u0103tor End-Grain Tabl\u0103 de \u0218ah (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 510, "width": 340, "height": 40, "thickness": 45},
    description: "Model de tâmplărie Tocător End-Grain Tablă de Șah (Rustic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-14-nordic",
    title: "Nordic Checkerboard End-Grain Cutting Board",
    roTitle: "Toc\u0103tor End-Grain Tabl\u0103 de \u0218ah (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 440, "width": 300, "height": 40, "thickness": 45},
    description: "Model de tâmplărie Tocător End-Grain Tablă de Șah (Nordic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-14-industrial",
    title: "Industrial Checkerboard End-Grain Cutting Board",
    roTitle: "Toc\u0103tor End-Grain Tabl\u0103 de \u0218ah (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 115,
    defaults: {"length": 530, "width": 350, "height": 40, "thickness": 45},
    description: "Model de tâmplărie Tocător End-Grain Tablă de Șah (Industrial), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-14-modern",
    title: "Modern Checkerboard End-Grain Cutting Board",
    roTitle: "Toc\u0103tor End-Grain Tabl\u0103 de \u0218ah (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 105,
    defaults: {"length": 460, "width": 320, "height": 40, "thickness": 45},
    description: "Model de tâmplărie Tocător End-Grain Tablă de Șah (Modern), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-15-compact",
    title: "Compact Rustic Charcuterie Serving Board",
    roTitle: "Platou Rustic de Servire cu M\u00e2nere (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 35,
    defaults: {"length": 480, "width": 210, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Platou Rustic de Servire cu Mânere (Compact), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-15-standard",
    title: "Standard Rustic Charcuterie Serving Board",
    roTitle: "Platou Rustic de Servire cu M\u00e2nere (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 600, "width": 250, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Platou Rustic de Servire cu Mânere (Standard), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-15-xl",
    title: "XL Rustic Charcuterie Serving Board",
    roTitle: "Platou Rustic de Servire cu M\u00e2nere (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 85,
    defaults: {"length": 780, "width": 290, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Platou Rustic de Servire cu Mânere (XL), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-15-rustic",
    title: "Rustic Rustic Charcuterie Serving Board",
    roTitle: "Platou Rustic de Servire cu M\u00e2nere (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "cires",
    difficulty: "Mediu",
    timeMinutes: 70,
    defaults: {"length": 660, "width": 260, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Platou Rustic de Servire cu Mânere (Rustic), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-15-nordic",
    title: "Nordic Rustic Charcuterie Serving Board",
    roTitle: "Platou Rustic de Servire cu M\u00e2nere (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 570, "width": 240, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Platou Rustic de Servire cu Mânere (Nordic), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-15-industrial",
    title: "Industrial Rustic Charcuterie Serving Board",
    roTitle: "Platou Rustic de Servire cu M\u00e2nere (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "cires",
    difficulty: "Mediu",
    timeMinutes: 75,
    defaults: {"length": 690, "width": 280, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Platou Rustic de Servire cu Mânere (Industrial), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-15-modern",
    title: "Modern Rustic Charcuterie Serving Board",
    roTitle: "Platou Rustic de Servire cu M\u00e2nere (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 600, "width": 250, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Platou Rustic de Servire cu Mânere (Modern), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-16-compact",
    title: "Compact Magnetic Knife Wall Strip",
    roTitle: "Suport Magnetic Cu\u021bite de Perete (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 30,
    defaults: {"length": 360, "width": 50, "height": 20, "thickness": 22},
    description: "Model de tâmplărie Suport Magnetic Cuțite de Perete (Compact), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-16-standard",
    title: "Standard Magnetic Knife Wall Strip",
    roTitle: "Suport Magnetic Cu\u021bite de Perete (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 450, "width": 60, "height": 20, "thickness": 22},
    description: "Model de tâmplărie Suport Magnetic Cuțite de Perete (Standard), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-16-xl",
    title: "XL Magnetic Knife Wall Strip",
    roTitle: "Suport Magnetic Cu\u021bite de Perete (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 580, "width": 70, "height": 20, "thickness": 22},
    description: "Model de tâmplărie Suport Magnetic Cuțite de Perete (XL), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-16-rustic",
    title: "Rustic Magnetic Knife Wall Strip",
    roTitle: "Suport Magnetic Cu\u021bite de Perete (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 60,
    defaults: {"length": 500, "width": 60, "height": 20, "thickness": 22},
    description: "Model de tâmplărie Suport Magnetic Cuțite de Perete (Rustic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-16-nordic",
    title: "Nordic Magnetic Knife Wall Strip",
    roTitle: "Suport Magnetic Cu\u021bite de Perete (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 30,
    defaults: {"length": 430, "width": 60, "height": 20, "thickness": 22},
    description: "Model de tâmplărie Suport Magnetic Cuțite de Perete (Nordic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-16-industrial",
    title: "Industrial Magnetic Knife Wall Strip",
    roTitle: "Suport Magnetic Cu\u021bite de Perete (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 65,
    defaults: {"length": 520, "width": 70, "height": 20, "thickness": 22},
    description: "Model de tâmplărie Suport Magnetic Cuțite de Perete (Industrial), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-16-modern",
    title: "Modern Magnetic Knife Wall Strip",
    roTitle: "Suport Magnetic Cu\u021bite de Perete (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 55,
    defaults: {"length": 450, "width": 60, "height": 20, "thickness": 22},
    description: "Model de tâmplărie Suport Magnetic Cuțite de Perete (Modern), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-17-compact",
    title: "Compact Honeycomb 12-Bottle Wine Rack",
    roTitle: "Suport Vinuri Fagure 12 Sticle (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "rack",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 95,
    defaults: {"length": 360, "width": 240, "height": 400, "thickness": 18},
    description: "Model de tâmplărie Suport Vinuri Fagure 12 Sticle (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-17-standard",
    title: "Standard Honeycomb 12-Bottle Wine Rack",
    roTitle: "Suport Vinuri Fagure 12 Sticle (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "rack",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 450, "width": 280, "height": 450, "thickness": 18},
    description: "Model de tâmplărie Suport Vinuri Fagure 12 Sticle (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-17-xl",
    title: "XL Honeycomb 12-Bottle Wine Rack",
    roTitle: "Suport Vinuri Fagure 12 Sticle (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "rack",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 145,
    defaults: {"length": 580, "width": 320, "height": 470, "thickness": 18},
    description: "Model de tâmplărie Suport Vinuri Fagure 12 Sticle (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-17-rustic",
    title: "Rustic Honeycomb 12-Bottle Wine Rack",
    roTitle: "Suport Vinuri Fagure 12 Sticle (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "rack",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 500, "width": 290, "height": 450, "thickness": 18},
    description: "Model de tâmplărie Suport Vinuri Fagure 12 Sticle (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-17-nordic",
    title: "Nordic Honeycomb 12-Bottle Wine Rack",
    roTitle: "Suport Vinuri Fagure 12 Sticle (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "rack",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 100,
    defaults: {"length": 430, "width": 270, "height": 450, "thickness": 18},
    description: "Model de tâmplărie Suport Vinuri Fagure 12 Sticle (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-17-industrial",
    title: "Industrial Honeycomb 12-Bottle Wine Rack",
    roTitle: "Suport Vinuri Fagure 12 Sticle (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "rack",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 135,
    defaults: {"length": 520, "width": 310, "height": 450, "thickness": 18},
    description: "Model de tâmplărie Suport Vinuri Fagure 12 Sticle (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-17-modern",
    title: "Modern Honeycomb 12-Bottle Wine Rack",
    roTitle: "Suport Vinuri Fagure 12 Sticle (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "rack",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 125,
    defaults: {"length": 450, "width": 280, "height": 450, "thickness": 18},
    description: "Model de tâmplărie Suport Vinuri Fagure 12 Sticle (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-18-compact",
    title: "Compact Rolling Bar Cart with Shelves",
    roTitle: "C\u0103rucior Mobil Servire & Bar (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 145,
    defaults: {"length": 640, "width": 380, "height": 760, "thickness": 22},
    description: "Model de tâmplărie Cărucior Mobil Servire & Bar (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-18-standard",
    title: "Standard Rolling Bar Cart with Shelves",
    roTitle: "C\u0103rucior Mobil Servire & Bar (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 160,
    defaults: {"length": 800, "width": 450, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Cărucior Mobil Servire & Bar (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-18-xl",
    title: "XL Rolling Bar Cart with Shelves",
    roTitle: "C\u0103rucior Mobil Servire & Bar (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 1040, "width": 520, "height": 890, "thickness": 22},
    description: "Model de tâmplărie Cărucior Mobil Servire & Bar (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-18-rustic",
    title: "Rustic Rolling Bar Cart with Shelves",
    roTitle: "C\u0103rucior Mobil Servire & Bar (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 880, "width": 470, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Cărucior Mobil Servire & Bar (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-18-nordic",
    title: "Nordic Rolling Bar Cart with Shelves",
    roTitle: "C\u0103rucior Mobil Servire & Bar (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 150,
    defaults: {"length": 760, "width": 430, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Cărucior Mobil Servire & Bar (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-18-industrial",
    title: "Industrial Rolling Bar Cart with Shelves",
    roTitle: "C\u0103rucior Mobil Servire & Bar (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 185,
    defaults: {"length": 920, "width": 500, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Cărucior Mobil Servire & Bar (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-18-modern",
    title: "Modern Rolling Bar Cart with Shelves",
    roTitle: "C\u0103rucior Mobil Servire & Bar (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 175,
    defaults: {"length": 800, "width": 450, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Cărucior Mobil Servire & Bar (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-19-compact",
    title: "Compact Tiered Spice & Herb Rack",
    roTitle: "Etajer\u0103 Mirodenii cu Fante \u00cenclinate (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 35,
    defaults: {"length": 400, "width": 100, "height": 400, "thickness": 15},
    description: "Model de tâmplărie Etajeră Mirodenii cu Fante Înclinate (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-19-standard",
    title: "Standard Tiered Spice & Herb Rack",
    roTitle: "Etajer\u0103 Mirodenii cu Fante \u00cenclinate (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 500, "width": 120, "height": 450, "thickness": 15},
    description: "Model de tâmplărie Etajeră Mirodenii cu Fante Înclinate (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-19-xl",
    title: "XL Tiered Spice & Herb Rack",
    roTitle: "Etajer\u0103 Mirodenii cu Fante \u00cenclinate (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 85,
    defaults: {"length": 650, "width": 140, "height": 470, "thickness": 15},
    description: "Model de tâmplărie Etajeră Mirodenii cu Fante Înclinate (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-19-rustic",
    title: "Rustic Tiered Spice & Herb Rack",
    roTitle: "Etajer\u0103 Mirodenii cu Fante \u00cenclinate (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 70,
    defaults: {"length": 550, "width": 130, "height": 450, "thickness": 15},
    description: "Model de tâmplărie Etajeră Mirodenii cu Fante Înclinate (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-19-nordic",
    title: "Nordic Tiered Spice & Herb Rack",
    roTitle: "Etajer\u0103 Mirodenii cu Fante \u00cenclinate (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 480, "width": 110, "height": 450, "thickness": 15},
    description: "Model de tâmplărie Etajeră Mirodenii cu Fante Înclinate (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-19-industrial",
    title: "Industrial Tiered Spice & Herb Rack",
    roTitle: "Etajer\u0103 Mirodenii cu Fante \u00cenclinate (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 75,
    defaults: {"length": 580, "width": 130, "height": 450, "thickness": 15},
    description: "Model de tâmplărie Etajeră Mirodenii cu Fante Înclinate (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-19-modern",
    title: "Modern Tiered Spice & Herb Rack",
    roTitle: "Etajer\u0103 Mirodenii cu Fante \u00cenclinate (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 500, "width": 120, "height": 450, "thickness": 15},
    description: "Model de tâmplărie Etajeră Mirodenii cu Fante Înclinate (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-20-compact",
    title: "Compact Roll-Top Wooden Bread Box",
    roTitle: "Cutie Tradi\u021bional\u0103 de P\u00e2ine cu Rulou (Compact)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 125,
    defaults: {"length": 320, "width": 240, "height": 200, "thickness": 16},
    description: "Model de tâmplărie Cutie Tradițională de Pâine cu Rulou (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-20-standard",
    title: "Standard Roll-Top Wooden Bread Box",
    roTitle: "Cutie Tradi\u021bional\u0103 de P\u00e2ine cu Rulou (Standard)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 140,
    defaults: {"length": 400, "width": 280, "height": 220, "thickness": 16},
    description: "Model de tâmplărie Cutie Tradițională de Pâine cu Rulou (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-20-xl",
    title: "XL Roll-Top Wooden Bread Box",
    roTitle: "Cutie Tradi\u021bional\u0103 de P\u00e2ine cu Rulou (XL)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 175,
    defaults: {"length": 520, "width": 320, "height": 230, "thickness": 16},
    description: "Model de tâmplărie Cutie Tradițională de Pâine cu Rulou (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-20-rustic",
    title: "Rustic Roll-Top Wooden Bread Box",
    roTitle: "Cutie Tradi\u021bional\u0103 de P\u00e2ine cu Rulou (Rustic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 160,
    defaults: {"length": 440, "width": 290, "height": 220, "thickness": 16},
    description: "Model de tâmplărie Cutie Tradițională de Pâine cu Rulou (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-20-nordic",
    title: "Nordic Roll-Top Wooden Bread Box",
    roTitle: "Cutie Tradi\u021bional\u0103 de P\u00e2ine cu Rulou (Nordic)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 380, "width": 270, "height": 220, "thickness": 16},
    description: "Model de tâmplărie Cutie Tradițională de Pâine cu Rulou (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-20-industrial",
    title: "Industrial Roll-Top Wooden Bread Box",
    roTitle: "Cutie Tradi\u021bional\u0103 de P\u00e2ine cu Rulou (Industrial)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 460, "width": 310, "height": 220, "thickness": 16},
    description: "Model de tâmplărie Cutie Tradițională de Pâine cu Rulou (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "kitchen-20-modern",
    title: "Modern Roll-Top Wooden Bread Box",
    roTitle: "Cutie Tradi\u021bional\u0103 de P\u00e2ine cu Rulou (Modern)",
    category: "Kitchen",
    roCat: "Buc\u0103t\u0103rie & Dining",
    archetype: "cabinet",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 155,
    defaults: {"length": 400, "width": 280, "height": 220, "thickness": 16},
    description: "Model de tâmplărie Cutie Tradițională de Pâine cu Rulou (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-21-compact",
    title: "Compact 2-Door Wardrobe with Bottom Drawer",
    roTitle: "Dulap 2 U\u0219i cu Sertar Inferior (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 285,
    defaults: {"length": 680, "width": 440, "height": 1660, "thickness": 18},
    description: "Model de tâmplărie Dulap 2 Uși cu Sertar Inferior (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-21-standard",
    title: "Standard 2-Door Wardrobe with Bottom Drawer",
    roTitle: "Dulap 2 U\u0219i cu Sertar Inferior (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 300,
    defaults: {"length": 850, "width": 520, "height": 1850, "thickness": 18},
    description: "Model de tâmplărie Dulap 2 Uși cu Sertar Inferior (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-21-xl",
    title: "XL 2-Door Wardrobe with Bottom Drawer",
    roTitle: "Dulap 2 U\u0219i cu Sertar Inferior (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 335,
    defaults: {"length": 1100, "width": 600, "height": 1940, "thickness": 18},
    description: "Model de tâmplărie Dulap 2 Uși cu Sertar Inferior (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-21-rustic",
    title: "Rustic 2-Door Wardrobe with Bottom Drawer",
    roTitle: "Dulap 2 U\u0219i cu Sertar Inferior (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 320,
    defaults: {"length": 940, "width": 550, "height": 1850, "thickness": 18},
    description: "Model de tâmplărie Dulap 2 Uși cu Sertar Inferior (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-21-nordic",
    title: "Nordic 2-Door Wardrobe with Bottom Drawer",
    roTitle: "Dulap 2 U\u0219i cu Sertar Inferior (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 290,
    defaults: {"length": 810, "width": 490, "height": 1850, "thickness": 18},
    description: "Model de tâmplărie Dulap 2 Uși cu Sertar Inferior (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-21-industrial",
    title: "Industrial 2-Door Wardrobe with Bottom Drawer",
    roTitle: "Dulap 2 U\u0219i cu Sertar Inferior (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 325,
    defaults: {"length": 980, "width": 570, "height": 1850, "thickness": 18},
    description: "Model de tâmplărie Dulap 2 Uși cu Sertar Inferior (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-21-modern",
    title: "Modern 2-Door Wardrobe with Bottom Drawer",
    roTitle: "Dulap 2 U\u0219i cu Sertar Inferior (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Avansat",
    timeMinutes: 315,
    defaults: {"length": 850, "width": 520, "height": 1850, "thickness": 18},
    description: "Model de tâmplărie Dulap 2 Uși cu Sertar Inferior (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-22-compact",
    title: "Compact Open Walk-in Clothes Rack System",
    roTitle: "Dressing Deschis Stil Walk-in (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 205,
    defaults: {"length": 960, "width": 380, "height": 1800, "thickness": 22},
    description: "Model de tâmplărie Dressing Deschis Stil Walk-in (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-22-standard",
    title: "Standard Open Walk-in Clothes Rack System",
    roTitle: "Dressing Deschis Stil Walk-in (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 220,
    defaults: {"length": 1200, "width": 450, "height": 2000, "thickness": 22},
    description: "Model de tâmplărie Dressing Deschis Stil Walk-in (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-22-xl",
    title: "XL Open Walk-in Clothes Rack System",
    roTitle: "Dressing Deschis Stil Walk-in (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 255,
    defaults: {"length": 1560, "width": 520, "height": 2100, "thickness": 22},
    description: "Model de tâmplărie Dressing Deschis Stil Walk-in (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-22-rustic",
    title: "Rustic Open Walk-in Clothes Rack System",
    roTitle: "Dressing Deschis Stil Walk-in (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 1320, "width": 470, "height": 2000, "thickness": 22},
    description: "Model de tâmplărie Dressing Deschis Stil Walk-in (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-22-nordic",
    title: "Nordic Open Walk-in Clothes Rack System",
    roTitle: "Dressing Deschis Stil Walk-in (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 210,
    defaults: {"length": 1140, "width": 430, "height": 2000, "thickness": 22},
    description: "Model de tâmplărie Dressing Deschis Stil Walk-in (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-22-industrial",
    title: "Industrial Open Walk-in Clothes Rack System",
    roTitle: "Dressing Deschis Stil Walk-in (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 245,
    defaults: {"length": 1380, "width": 500, "height": 2000, "thickness": 22},
    description: "Model de tâmplărie Dressing Deschis Stil Walk-in (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-22-modern",
    title: "Modern Open Walk-in Clothes Rack System",
    roTitle: "Dressing Deschis Stil Walk-in (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 235,
    defaults: {"length": 1200, "width": 450, "height": 2000, "thickness": 22},
    description: "Model de tâmplărie Dressing Deschis Stil Walk-in (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-23-compact",
    title: "Compact Shaker-Style 4-Drawer Dresser",
    roTitle: "Comod\u0103 4 Sertare Stil Shaker (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 225,
    defaults: {"length": 720, "width": 390, "height": 830, "thickness": 18},
    description: "Model de tâmplărie Comodă 4 Sertare Stil Shaker (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-23-standard",
    title: "Standard Shaker-Style 4-Drawer Dresser",
    roTitle: "Comod\u0103 4 Sertare Stil Shaker (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 900, "width": 460, "height": 920, "thickness": 18},
    description: "Model de tâmplărie Comodă 4 Sertare Stil Shaker (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-23-xl",
    title: "XL Shaker-Style 4-Drawer Dresser",
    roTitle: "Comod\u0103 4 Sertare Stil Shaker (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 275,
    defaults: {"length": 1170, "width": 530, "height": 970, "thickness": 18},
    description: "Model de tâmplărie Comodă 4 Sertare Stil Shaker (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-23-rustic",
    title: "Rustic Shaker-Style 4-Drawer Dresser",
    roTitle: "Comod\u0103 4 Sertare Stil Shaker (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 260,
    defaults: {"length": 990, "width": 480, "height": 920, "thickness": 18},
    description: "Model de tâmplărie Comodă 4 Sertare Stil Shaker (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-23-nordic",
    title: "Nordic Shaker-Style 4-Drawer Dresser",
    roTitle: "Comod\u0103 4 Sertare Stil Shaker (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 230,
    defaults: {"length": 860, "width": 440, "height": 920, "thickness": 18},
    description: "Model de tâmplărie Comodă 4 Sertare Stil Shaker (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-23-industrial",
    title: "Industrial Shaker-Style 4-Drawer Dresser",
    roTitle: "Comod\u0103 4 Sertare Stil Shaker (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 265,
    defaults: {"length": 1040, "width": 510, "height": 920, "thickness": 18},
    description: "Model de tâmplărie Comodă 4 Sertare Stil Shaker (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-23-modern",
    title: "Modern Shaker-Style 4-Drawer Dresser",
    roTitle: "Comod\u0103 4 Sertare Stil Shaker (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 255,
    defaults: {"length": 900, "width": 460, "height": 920, "thickness": 18},
    description: "Model de tâmplărie Comodă 4 Sertare Stil Shaker (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-24-compact",
    title: "Compact Modern Bedside Nightstand",
    roTitle: "Noptier\u0103 Modern\u0103 cu Sertar & Ni\u0219\u0103 (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 360, "width": 320, "height": 500, "thickness": 18},
    description: "Model de tâmplărie Noptieră Modernă cu Sertar & Nișă (Compact), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-24-standard",
    title: "Standard Modern Bedside Nightstand",
    roTitle: "Noptier\u0103 Modern\u0103 cu Sertar & Ni\u0219\u0103 (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 450, "width": 380, "height": 550, "thickness": 18},
    description: "Model de tâmplărie Noptieră Modernă cu Sertar & Nișă (Standard), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-24-xl",
    title: "XL Modern Bedside Nightstand",
    roTitle: "Noptier\u0103 Modern\u0103 cu Sertar & Ni\u0219\u0103 (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 125,
    defaults: {"length": 580, "width": 440, "height": 580, "thickness": 18},
    description: "Model de tâmplărie Noptieră Modernă cu Sertar & Nișă (XL), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-24-rustic",
    title: "Rustic Modern Bedside Nightstand",
    roTitle: "Noptier\u0103 Modern\u0103 cu Sertar & Ni\u0219\u0103 (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 500, "width": 400, "height": 550, "thickness": 18},
    description: "Model de tâmplărie Noptieră Modernă cu Sertar & Nișă (Rustic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-24-nordic",
    title: "Nordic Modern Bedside Nightstand",
    roTitle: "Noptier\u0103 Modern\u0103 cu Sertar & Ni\u0219\u0103 (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 430, "width": 360, "height": 550, "thickness": 18},
    description: "Model de tâmplărie Noptieră Modernă cu Sertar & Nișă (Nordic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-24-industrial",
    title: "Industrial Modern Bedside Nightstand",
    roTitle: "Noptier\u0103 Modern\u0103 cu Sertar & Ni\u0219\u0103 (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 115,
    defaults: {"length": 520, "width": 420, "height": 550, "thickness": 18},
    description: "Model de tâmplărie Noptieră Modernă cu Sertar & Nișă (Industrial), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-24-modern",
    title: "Modern Modern Bedside Nightstand",
    roTitle: "Noptier\u0103 Modern\u0103 cu Sertar & Ni\u0219\u0103 (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "table",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 105,
    defaults: {"length": 450, "width": 380, "height": 550, "thickness": 18},
    description: "Model de tâmplărie Noptieră Modernă cu Sertar & Nișă (Modern), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-25-compact",
    title: "Compact Floating Wall Nightstand",
    roTitle: "Noptier\u0103 Suspendat\u0103 de Perete (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 320, "width": 260, "height": 160, "thickness": 18},
    description: "Model de tâmplărie Noptieră Suspendată de Perete (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-25-standard",
    title: "Standard Floating Wall Nightstand",
    roTitle: "Noptier\u0103 Suspendat\u0103 de Perete (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 400, "width": 300, "height": 180, "thickness": 18},
    description: "Model de tâmplărie Noptieră Suspendată de Perete (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-25-xl",
    title: "XL Floating Wall Nightstand",
    roTitle: "Noptier\u0103 Suspendat\u0103 de Perete (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 520, "width": 340, "height": 190, "thickness": 18},
    description: "Model de tâmplărie Noptieră Suspendată de Perete (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-25-rustic",
    title: "Rustic Floating Wall Nightstand",
    roTitle: "Noptier\u0103 Suspendat\u0103 de Perete (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 80,
    defaults: {"length": 440, "width": 320, "height": 180, "thickness": 18},
    description: "Model de tâmplărie Noptieră Suspendată de Perete (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-25-nordic",
    title: "Nordic Floating Wall Nightstand",
    roTitle: "Noptier\u0103 Suspendat\u0103 de Perete (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 380, "width": 280, "height": 180, "thickness": 18},
    description: "Model de tâmplărie Noptieră Suspendată de Perete (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-25-industrial",
    title: "Industrial Floating Wall Nightstand",
    roTitle: "Noptier\u0103 Suspendat\u0103 de Perete (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 85,
    defaults: {"length": 460, "width": 330, "height": 180, "thickness": 18},
    description: "Model de tâmplărie Noptieră Suspendată de Perete (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-25-modern",
    title: "Modern Floating Wall Nightstand",
    roTitle: "Noptier\u0103 Suspendat\u0103 de Perete (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 400, "width": 300, "height": 180, "thickness": 18},
    description: "Model de tâmplărie Noptieră Suspendată de Perete (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-26-compact",
    title: "Compact End of Bed Storage Hope Chest",
    roTitle: "Banc\u0103 de Cap\u0103t de Pat cu Lad\u0103 (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "bench",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 145,
    defaults: {"length": 960, "width": 360, "height": 430, "thickness": 22},
    description: "Model de tâmplărie Bancă de Capăt de Pat cu Ladă (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-26-standard",
    title: "Standard End of Bed Storage Hope Chest",
    roTitle: "Banc\u0103 de Cap\u0103t de Pat cu Lad\u0103 (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "bench",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 160,
    defaults: {"length": 1200, "width": 420, "height": 480, "thickness": 22},
    description: "Model de tâmplărie Bancă de Capăt de Pat cu Ladă (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-26-xl",
    title: "XL End of Bed Storage Hope Chest",
    roTitle: "Banc\u0103 de Cap\u0103t de Pat cu Lad\u0103 (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "bench",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 1560, "width": 480, "height": 500, "thickness": 22},
    description: "Model de tâmplărie Bancă de Capăt de Pat cu Ladă (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-26-rustic",
    title: "Rustic End of Bed Storage Hope Chest",
    roTitle: "Banc\u0103 de Cap\u0103t de Pat cu Lad\u0103 (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "bench",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1320, "width": 440, "height": 480, "thickness": 22},
    description: "Model de tâmplărie Bancă de Capăt de Pat cu Ladă (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-26-nordic",
    title: "Nordic End of Bed Storage Hope Chest",
    roTitle: "Banc\u0103 de Cap\u0103t de Pat cu Lad\u0103 (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "bench",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 150,
    defaults: {"length": 1140, "width": 400, "height": 480, "thickness": 22},
    description: "Model de tâmplărie Bancă de Capăt de Pat cu Ladă (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-26-industrial",
    title: "Industrial End of Bed Storage Hope Chest",
    roTitle: "Banc\u0103 de Cap\u0103t de Pat cu Lad\u0103 (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "bench",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 185,
    defaults: {"length": 1380, "width": 460, "height": 480, "thickness": 22},
    description: "Model de tâmplărie Bancă de Capăt de Pat cu Ladă (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-26-modern",
    title: "Modern End of Bed Storage Hope Chest",
    roTitle: "Banc\u0103 de Cap\u0103t de Pat cu Lad\u0103 (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "bench",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 175,
    defaults: {"length": 1200, "width": 420, "height": 480, "thickness": 22},
    description: "Model de tâmplărie Bancă de Capăt de Pat cu Ladă (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-27-compact",
    title: "Compact Tree Branch Entryway Coat Stand",
    roTitle: "Cuier Pom de Haine cu 8 Ag\u0103\u021b\u0103tori (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 360, "width": 380, "height": 1580, "thickness": 35},
    description: "Model de tâmplărie Cuier Pom de Haine cu 8 Agățători (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-27-standard",
    title: "Standard Tree Branch Entryway Coat Stand",
    roTitle: "Cuier Pom de Haine cu 8 Ag\u0103\u021b\u0103tori (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 450, "width": 450, "height": 1750, "thickness": 35},
    description: "Model de tâmplărie Cuier Pom de Haine cu 8 Agățători (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-27-xl",
    title: "XL Tree Branch Entryway Coat Stand",
    roTitle: "Cuier Pom de Haine cu 8 Ag\u0103\u021b\u0103tori (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 115,
    defaults: {"length": 580, "width": 520, "height": 1840, "thickness": 35},
    description: "Model de tâmplărie Cuier Pom de Haine cu 8 Agățători (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-27-rustic",
    title: "Rustic Tree Branch Entryway Coat Stand",
    roTitle: "Cuier Pom de Haine cu 8 Ag\u0103\u021b\u0103tori (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 100,
    defaults: {"length": 500, "width": 470, "height": 1750, "thickness": 35},
    description: "Model de tâmplărie Cuier Pom de Haine cu 8 Agățători (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-27-nordic",
    title: "Nordic Tree Branch Entryway Coat Stand",
    roTitle: "Cuier Pom de Haine cu 8 Ag\u0103\u021b\u0103tori (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 430, "width": 430, "height": 1750, "thickness": 35},
    description: "Model de tâmplărie Cuier Pom de Haine cu 8 Agățători (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-27-industrial",
    title: "Industrial Tree Branch Entryway Coat Stand",
    roTitle: "Cuier Pom de Haine cu 8 Ag\u0103\u021b\u0103tori (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 105,
    defaults: {"length": 520, "width": 500, "height": 1750, "thickness": 35},
    description: "Model de tâmplărie Cuier Pom de Haine cu 8 Agățători (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-27-modern",
    title: "Modern Tree Branch Entryway Coat Stand",
    roTitle: "Cuier Pom de Haine cu 8 Ag\u0103\u021b\u0103tori (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "fag",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 450, "width": 450, "height": 1750, "thickness": 35},
    description: "Model de tâmplărie Cuier Pom de Haine cu 8 Agățători (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-28-compact",
    title: "Compact French Cleat Entryway Coat Rack",
    roTitle: "Panou Cuier French Cleat pt Hol (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 55,
    defaults: {"length": 800, "width": 80, "height": 540, "thickness": 20},
    description: "Model de tâmplărie Panou Cuier French Cleat pt Hol (Compact), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-28-standard",
    title: "Standard French Cleat Entryway Coat Rack",
    roTitle: "Panou Cuier French Cleat pt Hol (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 1000, "width": 100, "height": 600, "thickness": 20},
    description: "Model de tâmplărie Panou Cuier French Cleat pt Hol (Standard), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-28-xl",
    title: "XL French Cleat Entryway Coat Rack",
    roTitle: "Panou Cuier French Cleat pt Hol (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 105,
    defaults: {"length": 1300, "width": 110, "height": 630, "thickness": 20},
    description: "Model de tâmplărie Panou Cuier French Cleat pt Hol (XL), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-28-rustic",
    title: "Rustic French Cleat Entryway Coat Rack",
    roTitle: "Panou Cuier French Cleat pt Hol (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 90,
    defaults: {"length": 1100, "width": 100, "height": 600, "thickness": 20},
    description: "Model de tâmplărie Panou Cuier French Cleat pt Hol (Rustic), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-28-nordic",
    title: "Nordic French Cleat Entryway Coat Rack",
    roTitle: "Panou Cuier French Cleat pt Hol (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 950, "width": 100, "height": 600, "thickness": 20},
    description: "Model de tâmplărie Panou Cuier French Cleat pt Hol (Nordic), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-28-industrial",
    title: "Industrial French Cleat Entryway Coat Rack",
    roTitle: "Panou Cuier French Cleat pt Hol (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "Mediu",
    timeMinutes: 95,
    defaults: {"length": 1150, "width": 110, "height": 600, "thickness": 20},
    description: "Model de tâmplărie Panou Cuier French Cleat pt Hol (Industrial), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-28-modern",
    title: "Modern French Cleat Entryway Coat Rack",
    roTitle: "Panou Cuier French Cleat pt Hol (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 85,
    defaults: {"length": 1000, "width": 100, "height": 600, "thickness": 20},
    description: "Model de tâmplărie Panou Cuier French Cleat pt Hol (Modern), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-29-compact",
    title: "Compact 3-Tier Tilted Shoe Organizer",
    roTitle: "Pantofar \u00cenclinat 3 Niveluri (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 600, "width": 240, "height": 860, "thickness": 18},
    description: "Model de tâmplărie Pantofar Înclinat 3 Niveluri (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-29-standard",
    title: "Standard 3-Tier Tilted Shoe Organizer",
    roTitle: "Pantofar \u00cenclinat 3 Niveluri (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 85,
    defaults: {"length": 750, "width": 280, "height": 950, "thickness": 18},
    description: "Model de tâmplărie Pantofar Înclinat 3 Niveluri (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-29-xl",
    title: "XL 3-Tier Tilted Shoe Organizer",
    roTitle: "Pantofar \u00cenclinat 3 Niveluri (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 120,
    defaults: {"length": 980, "width": 320, "height": 1000, "thickness": 18},
    description: "Model de tâmplărie Pantofar Înclinat 3 Niveluri (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-29-rustic",
    title: "Rustic 3-Tier Tilted Shoe Organizer",
    roTitle: "Pantofar \u00cenclinat 3 Niveluri (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 105,
    defaults: {"length": 830, "width": 290, "height": 950, "thickness": 18},
    description: "Model de tâmplărie Pantofar Înclinat 3 Niveluri (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-29-nordic",
    title: "Nordic 3-Tier Tilted Shoe Organizer",
    roTitle: "Pantofar \u00cenclinat 3 Niveluri (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 710, "width": 270, "height": 950, "thickness": 18},
    description: "Model de tâmplărie Pantofar Înclinat 3 Niveluri (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-29-industrial",
    title: "Industrial 3-Tier Tilted Shoe Organizer",
    roTitle: "Pantofar \u00cenclinat 3 Niveluri (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 860, "width": 310, "height": 950, "thickness": 18},
    description: "Model de tâmplărie Pantofar Înclinat 3 Niveluri (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-29-modern",
    title: "Modern 3-Tier Tilted Shoe Organizer",
    roTitle: "Pantofar \u00cenclinat 3 Niveluri (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 100,
    defaults: {"length": 750, "width": 280, "height": 950, "thickness": 18},
    description: "Model de tâmplărie Pantofar Înclinat 3 Niveluri (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-30-compact",
    title: "Compact Full-Length Freestanding Mirror",
    roTitle: "Oglind\u0103 de Podea cu Ram\u0103 Masiv\u0103 (Compact)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 95,
    defaults: {"length": 440, "width": 340, "height": 1480, "thickness": 28},
    description: "Model de tâmplărie Oglindă de Podea cu Ramă Masivă (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-30-standard",
    title: "Standard Full-Length Freestanding Mirror",
    roTitle: "Oglind\u0103 de Podea cu Ram\u0103 Masiv\u0103 (Standard)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 550, "width": 400, "height": 1650, "thickness": 28},
    description: "Model de tâmplărie Oglindă de Podea cu Ramă Masivă (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-30-xl",
    title: "XL Full-Length Freestanding Mirror",
    roTitle: "Oglind\u0103 de Podea cu Ram\u0103 Masiv\u0103 (XL)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 145,
    defaults: {"length": 720, "width": 460, "height": 1730, "thickness": 28},
    description: "Model de tâmplărie Oglindă de Podea cu Ramă Masivă (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-30-rustic",
    title: "Rustic Full-Length Freestanding Mirror",
    roTitle: "Oglind\u0103 de Podea cu Ram\u0103 Masiv\u0103 (Rustic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 600, "width": 420, "height": 1650, "thickness": 28},
    description: "Model de tâmplărie Oglindă de Podea cu Ramă Masivă (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-30-nordic",
    title: "Nordic Full-Length Freestanding Mirror",
    roTitle: "Oglind\u0103 de Podea cu Ram\u0103 Masiv\u0103 (Nordic)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 100,
    defaults: {"length": 520, "width": 380, "height": 1650, "thickness": 28},
    description: "Model de tâmplărie Oglindă de Podea cu Ramă Masivă (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-30-industrial",
    title: "Industrial Full-Length Freestanding Mirror",
    roTitle: "Oglind\u0103 de Podea cu Ram\u0103 Masiv\u0103 (Industrial)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 135,
    defaults: {"length": 630, "width": 440, "height": 1650, "thickness": 28},
    description: "Model de tâmplărie Oglindă de Podea cu Ramă Masivă (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "bedroom-30-modern",
    title: "Modern Full-Length Freestanding Mirror",
    roTitle: "Oglind\u0103 de Podea cu Ram\u0103 Masiv\u0103 (Modern)",
    category: "Bedroom",
    roCat: "Dormitor & Hol",
    archetype: "chair",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 125,
    defaults: {"length": 550, "width": 400, "height": 1650, "thickness": 28},
    description: "Model de tâmplărie Oglindă de Podea cu Ramă Masivă (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-31-compact",
    title: "Compact Raised Garden Bed 150x80cm",
    roTitle: "Ghiveci \u00cen\u0103l\u021bat Salc\u00e2m pt Legume (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 1200, "width": 680, "height": 400, "thickness": 28},
    description: "Model de tâmplărie Ghiveci Înălțat Salcâm pt Legume (Compact), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-31-standard",
    title: "Standard Raised Garden Bed 150x80cm",
    roTitle: "Ghiveci \u00cen\u0103l\u021bat Salc\u00e2m pt Legume (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 1500, "width": 800, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Ghiveci Înălțat Salcâm pt Legume (Standard), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-31-xl",
    title: "XL Raised Garden Bed 150x80cm",
    roTitle: "Ghiveci \u00cen\u0103l\u021bat Salc\u00e2m pt Legume (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 125,
    defaults: {"length": 1950, "width": 920, "height": 470, "thickness": 28},
    description: "Model de tâmplărie Ghiveci Înălțat Salcâm pt Legume (XL), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-31-rustic",
    title: "Rustic Raised Garden Bed 150x80cm",
    roTitle: "Ghiveci \u00cen\u0103l\u021bat Salc\u00e2m pt Legume (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 1650, "width": 840, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Ghiveci Înălțat Salcâm pt Legume (Rustic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-31-nordic",
    title: "Nordic Raised Garden Bed 150x80cm",
    roTitle: "Ghiveci \u00cen\u0103l\u021bat Salc\u00e2m pt Legume (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 1420, "width": 760, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Ghiveci Înălțat Salcâm pt Legume (Nordic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-31-industrial",
    title: "Industrial Raised Garden Bed 150x80cm",
    roTitle: "Ghiveci \u00cen\u0103l\u021bat Salc\u00e2m pt Legume (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 115,
    defaults: {"length": 1720, "width": 880, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Ghiveci Înălțat Salcâm pt Legume (Industrial), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-31-modern",
    title: "Modern Raised Garden Bed 150x80cm",
    roTitle: "Ghiveci \u00cen\u0103l\u021bat Salc\u00e2m pt Legume (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 105,
    defaults: {"length": 1500, "width": 800, "height": 450, "thickness": 28},
    description: "Model de tâmplărie Ghiveci Înălțat Salcâm pt Legume (Modern), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-32-compact",
    title: "Compact 3-Tier Step Plant Stand",
    roTitle: "Jardinier\u0103 Etajat\u0103 \u00een Trepte (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 720, "width": 510, "height": 760, "thickness": 22},
    description: "Model de tâmplărie Jardinieră Etajată în Trepte (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-32-standard",
    title: "Standard 3-Tier Step Plant Stand",
    roTitle: "Jardinier\u0103 Etajat\u0103 \u00een Trepte (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 900, "width": 600, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Jardinieră Etajată în Trepte (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-32-xl",
    title: "XL 3-Tier Step Plant Stand",
    roTitle: "Jardinier\u0103 Etajat\u0103 \u00een Trepte (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 115,
    defaults: {"length": 1170, "width": 690, "height": 890, "thickness": 22},
    description: "Model de tâmplărie Jardinieră Etajată în Trepte (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-32-rustic",
    title: "Rustic 3-Tier Step Plant Stand",
    roTitle: "Jardinier\u0103 Etajat\u0103 \u00een Trepte (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 100,
    defaults: {"length": 990, "width": 630, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Jardinieră Etajată în Trepte (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-32-nordic",
    title: "Nordic 3-Tier Step Plant Stand",
    roTitle: "Jardinier\u0103 Etajat\u0103 \u00een Trepte (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 860, "width": 570, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Jardinieră Etajată în Trepte (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-32-industrial",
    title: "Industrial 3-Tier Step Plant Stand",
    roTitle: "Jardinier\u0103 Etajat\u0103 \u00een Trepte (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 105,
    defaults: {"length": 1040, "width": 660, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Jardinieră Etajată în Trepte (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-32-modern",
    title: "Modern 3-Tier Step Plant Stand",
    roTitle: "Jardinier\u0103 Etajat\u0103 \u00een Trepte (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 900, "width": 600, "height": 850, "thickness": 22},
    description: "Model de tâmplărie Jardinieră Etajată în Trepte (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-33-compact",
    title: "Compact Corner Planter with Trellis Lattice",
    roTitle: "Jardinier\u0103 de Col\u021b cu Spaliere Gard (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 125,
    defaults: {"length": 640, "width": 680, "height": 1440, "thickness": 25},
    description: "Model de tâmplărie Jardinieră de Colț cu Spaliere Gard (Compact), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-33-standard",
    title: "Standard Corner Planter with Trellis Lattice",
    roTitle: "Jardinier\u0103 de Col\u021b cu Spaliere Gard (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 140,
    defaults: {"length": 800, "width": 800, "height": 1600, "thickness": 25},
    description: "Model de tâmplărie Jardinieră de Colț cu Spaliere Gard (Standard), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-33-xl",
    title: "XL Corner Planter with Trellis Lattice",
    roTitle: "Jardinier\u0103 de Col\u021b cu Spaliere Gard (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 175,
    defaults: {"length": 1040, "width": 920, "height": 1680, "thickness": 25},
    description: "Model de tâmplărie Jardinieră de Colț cu Spaliere Gard (XL), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-33-rustic",
    title: "Rustic Corner Planter with Trellis Lattice",
    roTitle: "Jardinier\u0103 de Col\u021b cu Spaliere Gard (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 160,
    defaults: {"length": 880, "width": 840, "height": 1600, "thickness": 25},
    description: "Model de tâmplărie Jardinieră de Colț cu Spaliere Gard (Rustic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-33-nordic",
    title: "Nordic Corner Planter with Trellis Lattice",
    roTitle: "Jardinier\u0103 de Col\u021b cu Spaliere Gard (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 760, "width": 760, "height": 1600, "thickness": 25},
    description: "Model de tâmplărie Jardinieră de Colț cu Spaliere Gard (Nordic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-33-industrial",
    title: "Industrial Corner Planter with Trellis Lattice",
    roTitle: "Jardinier\u0103 de Col\u021b cu Spaliere Gard (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 920, "width": 880, "height": 1600, "thickness": 25},
    description: "Model de tâmplărie Jardinieră de Colț cu Spaliere Gard (Industrial), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-33-modern",
    title: "Modern Corner Planter with Trellis Lattice",
    roTitle: "Jardinier\u0103 de Col\u021b cu Spaliere Gard (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "planter",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 155,
    defaults: {"length": 800, "width": 800, "height": 1600, "thickness": 25},
    description: "Model de tâmplărie Jardinieră de Colț cu Spaliere Gard (Modern), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-34-compact",
    title: "Compact Ergonomic Curved Garden Bench",
    roTitle: "Banc\u0103 Ergonomic\u0103 Curbat\u0103 de Gr\u0103din\u0103 (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 1120, "width": 530, "height": 830, "thickness": 28},
    description: "Model de tâmplărie Bancă Ergonomică Curbată de Grădină (Compact), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-34-standard",
    title: "Standard Ergonomic Curved Garden Bench",
    roTitle: "Banc\u0103 Ergonomic\u0103 Curbat\u0103 de Gr\u0103din\u0103 (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1400, "width": 620, "height": 920, "thickness": 28},
    description: "Model de tâmplărie Bancă Ergonomică Curbată de Grădină (Standard), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-34-xl",
    title: "XL Ergonomic Curved Garden Bench",
    roTitle: "Banc\u0103 Ergonomic\u0103 Curbat\u0103 de Gr\u0103din\u0103 (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 215,
    defaults: {"length": 1820, "width": 710, "height": 970, "thickness": 28},
    description: "Model de tâmplărie Bancă Ergonomică Curbată de Grădină (XL), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-34-rustic",
    title: "Rustic Ergonomic Curved Garden Bench",
    roTitle: "Banc\u0103 Ergonomic\u0103 Curbat\u0103 de Gr\u0103din\u0103 (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 200,
    defaults: {"length": 1540, "width": 650, "height": 920, "thickness": 28},
    description: "Model de tâmplărie Bancă Ergonomică Curbată de Grădină (Rustic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-34-nordic",
    title: "Nordic Ergonomic Curved Garden Bench",
    roTitle: "Banc\u0103 Ergonomic\u0103 Curbat\u0103 de Gr\u0103din\u0103 (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 170,
    defaults: {"length": 1330, "width": 590, "height": 920, "thickness": 28},
    description: "Model de tâmplărie Bancă Ergonomică Curbată de Grădină (Nordic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-34-industrial",
    title: "Industrial Ergonomic Curved Garden Bench",
    roTitle: "Banc\u0103 Ergonomic\u0103 Curbat\u0103 de Gr\u0103din\u0103 (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 205,
    defaults: {"length": 1610, "width": 680, "height": 920, "thickness": 28},
    description: "Model de tâmplărie Bancă Ergonomică Curbată de Grădină (Industrial), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-34-modern",
    title: "Modern Ergonomic Curved Garden Bench",
    roTitle: "Banc\u0103 Ergonomic\u0103 Curbat\u0103 de Gr\u0103din\u0103 (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 1400, "width": 620, "height": 920, "thickness": 28},
    description: "Model de tâmplărie Bancă Ergonomică Curbată de Grădină (Modern), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-35-compact",
    title: "Compact A-Frame Picnic Table & Benches",
    roTitle: "Mas\u0103 Tradi\u021bional\u0103 Picnic \u00een A (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 225,
    defaults: {"length": 1440, "width": 1280, "height": 680, "thickness": 40},
    description: "Model de tâmplărie Masă Tradițională Picnic în A (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-35-standard",
    title: "Standard A-Frame Picnic Table & Benches",
    roTitle: "Mas\u0103 Tradi\u021bional\u0103 Picnic \u00een A (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 1800, "width": 1500, "height": 760, "thickness": 40},
    description: "Model de tâmplărie Masă Tradițională Picnic în A (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-35-xl",
    title: "XL A-Frame Picnic Table & Benches",
    roTitle: "Mas\u0103 Tradi\u021bional\u0103 Picnic \u00een A (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 275,
    defaults: {"length": 2340, "width": 1720, "height": 800, "thickness": 40},
    description: "Model de tâmplărie Masă Tradițională Picnic în A (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-35-rustic",
    title: "Rustic A-Frame Picnic Table & Benches",
    roTitle: "Mas\u0103 Tradi\u021bional\u0103 Picnic \u00een A (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 260,
    defaults: {"length": 1980, "width": 1580, "height": 760, "thickness": 40},
    description: "Model de tâmplărie Masă Tradițională Picnic în A (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-35-nordic",
    title: "Nordic A-Frame Picnic Table & Benches",
    roTitle: "Mas\u0103 Tradi\u021bional\u0103 Picnic \u00een A (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 230,
    defaults: {"length": 1710, "width": 1420, "height": 760, "thickness": 40},
    description: "Model de tâmplărie Masă Tradițională Picnic în A (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-35-industrial",
    title: "Industrial A-Frame Picnic Table & Benches",
    roTitle: "Mas\u0103 Tradi\u021bional\u0103 Picnic \u00een A (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 265,
    defaults: {"length": 2070, "width": 1650, "height": 760, "thickness": 40},
    description: "Model de tâmplărie Masă Tradițională Picnic în A (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-35-modern",
    title: "Modern A-Frame Picnic Table & Benches",
    roTitle: "Mas\u0103 Tradi\u021bional\u0103 Picnic \u00een A (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "table",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 255,
    defaults: {"length": 1800, "width": 1500, "height": 760, "thickness": 40},
    description: "Model de tâmplărie Masă Tradițională Picnic în A (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-36-compact",
    title: "Compact 4-Position Adjustable Sun Lounger",
    roTitle: "\u0218ezlong Reglabil 4 Trepte pt Curte (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 205,
    defaults: {"length": 1560, "width": 550, "height": 320, "thickness": 28},
    description: "Model de tâmplărie Șezlong Reglabil 4 Trepte pt Curte (Compact), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-36-standard",
    title: "Standard 4-Position Adjustable Sun Lounger",
    roTitle: "\u0218ezlong Reglabil 4 Trepte pt Curte (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 220,
    defaults: {"length": 1950, "width": 650, "height": 350, "thickness": 28},
    description: "Model de tâmplărie Șezlong Reglabil 4 Trepte pt Curte (Standard), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-36-xl",
    title: "XL 4-Position Adjustable Sun Lounger",
    roTitle: "\u0218ezlong Reglabil 4 Trepte pt Curte (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 255,
    defaults: {"length": 2540, "width": 750, "height": 370, "thickness": 28},
    description: "Model de tâmplărie Șezlong Reglabil 4 Trepte pt Curte (XL), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-36-rustic",
    title: "Rustic 4-Position Adjustable Sun Lounger",
    roTitle: "\u0218ezlong Reglabil 4 Trepte pt Curte (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 2140, "width": 680, "height": 350, "thickness": 28},
    description: "Model de tâmplărie Șezlong Reglabil 4 Trepte pt Curte (Rustic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-36-nordic",
    title: "Nordic 4-Position Adjustable Sun Lounger",
    roTitle: "\u0218ezlong Reglabil 4 Trepte pt Curte (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 210,
    defaults: {"length": 1850, "width": 620, "height": 350, "thickness": 28},
    description: "Model de tâmplărie Șezlong Reglabil 4 Trepte pt Curte (Nordic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-36-industrial",
    title: "Industrial 4-Position Adjustable Sun Lounger",
    roTitle: "\u0218ezlong Reglabil 4 Trepte pt Curte (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 245,
    defaults: {"length": 2240, "width": 720, "height": 350, "thickness": 28},
    description: "Model de tâmplărie Șezlong Reglabil 4 Trepte pt Curte (Industrial), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-36-modern",
    title: "Modern 4-Position Adjustable Sun Lounger",
    roTitle: "\u0218ezlong Reglabil 4 Trepte pt Curte (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "bench",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 235,
    defaults: {"length": 1950, "width": 650, "height": 350, "thickness": 28},
    description: "Model de tâmplărie Șezlong Reglabil 4 Trepte pt Curte (Modern), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-37-compact",
    title: "Compact Garden Patio Pergola Arbor",
    roTitle: "Pergol\u0103 de Teras\u0103 cu Lamele (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "molid",
    difficulty: "Avansat",
    timeMinutes: 465,
    defaults: {"length": 2400, "width": 2120, "height": 2160, "thickness": 90},
    description: "Model de tâmplărie Pergolă de Terasă cu Lamele (Compact), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-37-standard",
    title: "Standard Garden Patio Pergola Arbor",
    roTitle: "Pergol\u0103 de Teras\u0103 cu Lamele (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "molid",
    difficulty: "Avansat",
    timeMinutes: 480,
    defaults: {"length": 3000, "width": 2500, "height": 2400, "thickness": 90},
    description: "Model de tâmplărie Pergolă de Terasă cu Lamele (Standard), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-37-xl",
    title: "XL Garden Patio Pergola Arbor",
    roTitle: "Pergol\u0103 de Teras\u0103 cu Lamele (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "molid",
    difficulty: "Avansat",
    timeMinutes: 515,
    defaults: {"length": 3900, "width": 2880, "height": 2520, "thickness": 90},
    description: "Model de tâmplărie Pergolă de Terasă cu Lamele (XL), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-37-rustic",
    title: "Rustic Garden Patio Pergola Arbor",
    roTitle: "Pergol\u0103 de Teras\u0103 cu Lamele (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 500,
    defaults: {"length": 3300, "width": 2620, "height": 2400, "thickness": 90},
    description: "Model de tâmplărie Pergolă de Terasă cu Lamele (Rustic), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-37-nordic",
    title: "Nordic Garden Patio Pergola Arbor",
    roTitle: "Pergol\u0103 de Teras\u0103 cu Lamele (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "molid",
    difficulty: "Avansat",
    timeMinutes: 470,
    defaults: {"length": 2850, "width": 2380, "height": 2400, "thickness": 90},
    description: "Model de tâmplărie Pergolă de Terasă cu Lamele (Nordic), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-37-industrial",
    title: "Industrial Garden Patio Pergola Arbor",
    roTitle: "Pergol\u0103 de Teras\u0103 cu Lamele (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 505,
    defaults: {"length": 3450, "width": 2750, "height": 2400, "thickness": 90},
    description: "Model de tâmplărie Pergolă de Terasă cu Lamele (Industrial), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-37-modern",
    title: "Modern Garden Patio Pergola Arbor",
    roTitle: "Pergol\u0103 de Teras\u0103 cu Lamele (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "molid",
    difficulty: "Avansat",
    timeMinutes: 495,
    defaults: {"length": 3000, "width": 2500, "height": 2400, "thickness": 90},
    description: "Model de tâmplărie Pergolă de Terasă cu Lamele (Modern), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-38-compact",
    title: "Compact Outdoor BBQ Kitchen Shelter Island",
    roTitle: "Ad\u0103post & Sta\u021bie Grill Buc\u0103t\u0103rie Var\u0103 (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 345,
    defaults: {"length": 1440, "width": 640, "height": 1890, "thickness": 28},
    description: "Model de tâmplărie Adăpost & Stație Grill Bucătărie Vară (Compact), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-38-standard",
    title: "Standard Outdoor BBQ Kitchen Shelter Island",
    roTitle: "Ad\u0103post & Sta\u021bie Grill Buc\u0103t\u0103rie Var\u0103 (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 360,
    defaults: {"length": 1800, "width": 750, "height": 2100, "thickness": 28},
    description: "Model de tâmplărie Adăpost & Stație Grill Bucătărie Vară (Standard), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-38-xl",
    title: "XL Outdoor BBQ Kitchen Shelter Island",
    roTitle: "Ad\u0103post & Sta\u021bie Grill Buc\u0103t\u0103rie Var\u0103 (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 395,
    defaults: {"length": 2340, "width": 860, "height": 2200, "thickness": 28},
    description: "Model de tâmplărie Adăpost & Stație Grill Bucătărie Vară (XL), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-38-rustic",
    title: "Rustic Outdoor BBQ Kitchen Shelter Island",
    roTitle: "Ad\u0103post & Sta\u021bie Grill Buc\u0103t\u0103rie Var\u0103 (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 380,
    defaults: {"length": 1980, "width": 790, "height": 2100, "thickness": 28},
    description: "Model de tâmplărie Adăpost & Stație Grill Bucătărie Vară (Rustic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-38-nordic",
    title: "Nordic Outdoor BBQ Kitchen Shelter Island",
    roTitle: "Ad\u0103post & Sta\u021bie Grill Buc\u0103t\u0103rie Var\u0103 (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 350,
    defaults: {"length": 1710, "width": 710, "height": 2100, "thickness": 28},
    description: "Model de tâmplărie Adăpost & Stație Grill Bucătărie Vară (Nordic), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-38-industrial",
    title: "Industrial Outdoor BBQ Kitchen Shelter Island",
    roTitle: "Ad\u0103post & Sta\u021bie Grill Buc\u0103t\u0103rie Var\u0103 (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "salcam",
    difficulty: "Mediu",
    timeMinutes: 385,
    defaults: {"length": 2070, "width": 830, "height": 2100, "thickness": 28},
    description: "Model de tâmplărie Adăpost & Stație Grill Bucătărie Vară (Industrial), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-38-modern",
    title: "Modern Outdoor BBQ Kitchen Shelter Island",
    roTitle: "Ad\u0103post & Sta\u021bie Grill Buc\u0103t\u0103rie Var\u0103 (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "shed",
    woodDefault: "salcam",
    difficulty: "Avansat",
    timeMinutes: 375,
    defaults: {"length": 1800, "width": 750, "height": 2100, "thickness": 28},
    description: "Model de tâmplărie Adăpost & Stație Grill Bucătărie Vară (Modern), proiectat pentru execuție din lemn de salcam cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-39-compact",
    title: "Compact Classic Songbird Nesting Birdhouse",
    roTitle: "C\u0103su\u021b\u0103 Clasic\u0103 P\u0103s\u0103ri C\u00e2nt\u0103toare (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 140, "width": 150, "height": 230, "thickness": 18},
    description: "Model de tâmplărie Căsuță Clasică Păsări Cântătoare (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-39-standard",
    title: "Standard Classic Songbird Nesting Birdhouse",
    roTitle: "C\u0103su\u021b\u0103 Clasic\u0103 P\u0103s\u0103ri C\u00e2nt\u0103toare (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 180, "width": 180, "height": 260, "thickness": 18},
    description: "Model de tâmplărie Căsuță Clasică Păsări Cântătoare (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-39-xl",
    title: "XL Classic Songbird Nesting Birdhouse",
    roTitle: "C\u0103su\u021b\u0103 Clasic\u0103 P\u0103s\u0103ri C\u00e2nt\u0103toare (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 230, "width": 210, "height": 270, "thickness": 18},
    description: "Model de tâmplărie Căsuță Clasică Păsări Cântătoare (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-39-rustic",
    title: "Rustic Classic Songbird Nesting Birdhouse",
    roTitle: "C\u0103su\u021b\u0103 Clasic\u0103 P\u0103s\u0103ri C\u00e2nt\u0103toare (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 80,
    defaults: {"length": 200, "width": 190, "height": 260, "thickness": 18},
    description: "Model de tâmplărie Căsuță Clasică Păsări Cântătoare (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-39-nordic",
    title: "Nordic Classic Songbird Nesting Birdhouse",
    roTitle: "C\u0103su\u021b\u0103 Clasic\u0103 P\u0103s\u0103ri C\u00e2nt\u0103toare (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 170, "width": 170, "height": 260, "thickness": 18},
    description: "Model de tâmplărie Căsuță Clasică Păsări Cântătoare (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-39-industrial",
    title: "Industrial Classic Songbird Nesting Birdhouse",
    roTitle: "C\u0103su\u021b\u0103 Clasic\u0103 P\u0103s\u0103ri C\u00e2nt\u0103toare (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 85,
    defaults: {"length": 210, "width": 200, "height": 260, "thickness": 18},
    description: "Model de tâmplărie Căsuță Clasică Păsări Cântătoare (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-39-modern",
    title: "Modern Classic Songbird Nesting Birdhouse",
    roTitle: "C\u0103su\u021b\u0103 Clasic\u0103 P\u0103s\u0103ri C\u00e2nt\u0103toare (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 180, "width": 180, "height": 260, "thickness": 18},
    description: "Model de tâmplărie Căsuță Clasică Păsări Cântătoare (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-40-compact",
    title: "Compact Gazebo Roof Bird Feeder Station",
    roTitle: "Hr\u0103nitoare P\u0103s\u0103ri Acoperi\u0219 \u0218indril\u0103 (Compact)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 35,
    defaults: {"length": 220, "width": 240, "height": 310, "thickness": 18},
    description: "Model de tâmplărie Hrănitoare Păsări Acoperiș Șindrilă (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-40-standard",
    title: "Standard Gazebo Roof Bird Feeder Station",
    roTitle: "Hr\u0103nitoare P\u0103s\u0103ri Acoperi\u0219 \u0218indril\u0103 (Standard)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 280, "width": 280, "height": 340, "thickness": 18},
    description: "Model de tâmplărie Hrănitoare Păsări Acoperiș Șindrilă (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-40-xl",
    title: "XL Gazebo Roof Bird Feeder Station",
    roTitle: "Hr\u0103nitoare P\u0103s\u0103ri Acoperi\u0219 \u0218indril\u0103 (XL)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 85,
    defaults: {"length": 360, "width": 320, "height": 360, "thickness": 18},
    description: "Model de tâmplărie Hrănitoare Păsări Acoperiș Șindrilă (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-40-rustic",
    title: "Rustic Gazebo Roof Bird Feeder Station",
    roTitle: "Hr\u0103nitoare P\u0103s\u0103ri Acoperi\u0219 \u0218indril\u0103 (Rustic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 70,
    defaults: {"length": 310, "width": 290, "height": 340, "thickness": 18},
    description: "Model de tâmplărie Hrănitoare Păsări Acoperiș Șindrilă (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-40-nordic",
    title: "Nordic Gazebo Roof Bird Feeder Station",
    roTitle: "Hr\u0103nitoare P\u0103s\u0103ri Acoperi\u0219 \u0218indril\u0103 (Nordic)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 270, "width": 270, "height": 340, "thickness": 18},
    description: "Model de tâmplărie Hrănitoare Păsări Acoperiș Șindrilă (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-40-industrial",
    title: "Industrial Gazebo Roof Bird Feeder Station",
    roTitle: "Hr\u0103nitoare P\u0103s\u0103ri Acoperi\u0219 \u0218indril\u0103 (Industrial)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 75,
    defaults: {"length": 320, "width": 310, "height": 340, "thickness": 18},
    description: "Model de tâmplărie Hrănitoare Păsări Acoperiș Șindrilă (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "garden-40-modern",
    title: "Modern Gazebo Roof Bird Feeder Station",
    roTitle: "Hr\u0103nitoare P\u0103s\u0103ri Acoperi\u0219 \u0218indril\u0103 (Modern)",
    category: "Garden",
    roCat: "Gr\u0103din\u0103 & Teras\u0103",
    archetype: "birdhouse",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 280, "width": 280, "height": 340, "thickness": 18},
    description: "Model de tâmplărie Hrănitoare Păsări Acoperiș Șindrilă (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-41-compact",
    title: "Compact Heavy-Duty Woodworking Workbench",
    roTitle: "Banc Masiv T\u00e2mpl\u0103rie cu Menghin\u0103 (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 225,
    defaults: {"length": 1200, "width": 600, "height": 810, "thickness": 45},
    description: "Model de tâmplărie Banc Masiv Tâmplărie cu Menghină (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-41-standard",
    title: "Standard Heavy-Duty Woodworking Workbench",
    roTitle: "Banc Masiv T\u00e2mpl\u0103rie cu Menghin\u0103 (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 240,
    defaults: {"length": 1500, "width": 700, "height": 900, "thickness": 45},
    description: "Model de tâmplărie Banc Masiv Tâmplărie cu Menghină (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-41-xl",
    title: "XL Heavy-Duty Woodworking Workbench",
    roTitle: "Banc Masiv T\u00e2mpl\u0103rie cu Menghin\u0103 (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 275,
    defaults: {"length": 1950, "width": 800, "height": 940, "thickness": 45},
    description: "Model de tâmplărie Banc Masiv Tâmplărie cu Menghină (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-41-rustic",
    title: "Rustic Heavy-Duty Woodworking Workbench",
    roTitle: "Banc Masiv T\u00e2mpl\u0103rie cu Menghin\u0103 (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 260,
    defaults: {"length": 1650, "width": 740, "height": 900, "thickness": 45},
    description: "Model de tâmplărie Banc Masiv Tâmplărie cu Menghină (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-41-nordic",
    title: "Nordic Heavy-Duty Woodworking Workbench",
    roTitle: "Banc Masiv T\u00e2mpl\u0103rie cu Menghin\u0103 (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 230,
    defaults: {"length": 1420, "width": 660, "height": 900, "thickness": 45},
    description: "Model de tâmplărie Banc Masiv Tâmplărie cu Menghină (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-41-industrial",
    title: "Industrial Heavy-Duty Woodworking Workbench",
    roTitle: "Banc Masiv T\u00e2mpl\u0103rie cu Menghin\u0103 (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 265,
    defaults: {"length": 1720, "width": 770, "height": 900, "thickness": 45},
    description: "Model de tâmplărie Banc Masiv Tâmplărie cu Menghină (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-41-modern",
    title: "Modern Heavy-Duty Woodworking Workbench",
    roTitle: "Banc Masiv T\u00e2mpl\u0103rie cu Menghin\u0103 (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 255,
    defaults: {"length": 1500, "width": 700, "height": 900, "thickness": 45},
    description: "Model de tâmplărie Banc Masiv Tâmplărie cu Menghină (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-42-compact",
    title: "Compact Folding Heavy Sawhorses Pair",
    roTitle: "Capre de Lucru Pliabile 400kg (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "bench",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 720, "width": 470, "height": 720, "thickness": 45},
    description: "Model de tâmplărie Capre de Lucru Pliabile 400kg (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-42-standard",
    title: "Standard Folding Heavy Sawhorses Pair",
    roTitle: "Capre de Lucru Pliabile 400kg (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "bench",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 900, "width": 550, "height": 800, "thickness": 45},
    description: "Model de tâmplărie Capre de Lucru Pliabile 400kg (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-42-xl",
    title: "XL Folding Heavy Sawhorses Pair",
    roTitle: "Capre de Lucru Pliabile 400kg (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "bench",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 125,
    defaults: {"length": 1170, "width": 630, "height": 840, "thickness": 45},
    description: "Model de tâmplărie Capre de Lucru Pliabile 400kg (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-42-rustic",
    title: "Rustic Folding Heavy Sawhorses Pair",
    roTitle: "Capre de Lucru Pliabile 400kg (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "bench",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 990, "width": 580, "height": 800, "thickness": 45},
    description: "Model de tâmplărie Capre de Lucru Pliabile 400kg (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-42-nordic",
    title: "Nordic Folding Heavy Sawhorses Pair",
    roTitle: "Capre de Lucru Pliabile 400kg (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "bench",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 860, "width": 520, "height": 800, "thickness": 45},
    description: "Model de tâmplărie Capre de Lucru Pliabile 400kg (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-42-industrial",
    title: "Industrial Folding Heavy Sawhorses Pair",
    roTitle: "Capre de Lucru Pliabile 400kg (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "bench",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 115,
    defaults: {"length": 1040, "width": 600, "height": 800, "thickness": 45},
    description: "Model de tâmplărie Capre de Lucru Pliabile 400kg (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-42-modern",
    title: "Modern Folding Heavy Sawhorses Pair",
    roTitle: "Capre de Lucru Pliabile 400kg (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "bench",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 105,
    defaults: {"length": 900, "width": 550, "height": 800, "thickness": 45},
    description: "Model de tâmplărie Capre de Lucru Pliabile 400kg (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-43-compact",
    title: "Compact Classic Wooden Joiner Tool Tote",
    roTitle: "Lad\u0103 Tradi\u021bional\u0103 Scule cu M\u00e2ner Fag (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 400, "width": 200, "height": 290, "thickness": 18},
    description: "Model de tâmplărie Ladă Tradițională Scule cu Mâner Fag (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-43-standard",
    title: "Standard Classic Wooden Joiner Tool Tote",
    roTitle: "Lad\u0103 Tradi\u021bional\u0103 Scule cu M\u00e2ner Fag (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 500, "width": 240, "height": 320, "thickness": 18},
    description: "Model de tâmplărie Ladă Tradițională Scule cu Mâner Fag (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-43-xl",
    title: "XL Classic Wooden Joiner Tool Tote",
    roTitle: "Lad\u0103 Tradi\u021bional\u0103 Scule cu M\u00e2ner Fag (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 650, "width": 280, "height": 340, "thickness": 18},
    description: "Model de tâmplărie Ladă Tradițională Scule cu Mâner Fag (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-43-rustic",
    title: "Rustic Classic Wooden Joiner Tool Tote",
    roTitle: "Lad\u0103 Tradi\u021bional\u0103 Scule cu M\u00e2ner Fag (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 80,
    defaults: {"length": 550, "width": 250, "height": 320, "thickness": 18},
    description: "Model de tâmplărie Ladă Tradițională Scule cu Mâner Fag (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-43-nordic",
    title: "Nordic Classic Wooden Joiner Tool Tote",
    roTitle: "Lad\u0103 Tradi\u021bional\u0103 Scule cu M\u00e2ner Fag (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 480, "width": 230, "height": 320, "thickness": 18},
    description: "Model de tâmplărie Ladă Tradițională Scule cu Mâner Fag (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-43-industrial",
    title: "Industrial Classic Wooden Joiner Tool Tote",
    roTitle: "Lad\u0103 Tradi\u021bional\u0103 Scule cu M\u00e2ner Fag (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 85,
    defaults: {"length": 580, "width": 260, "height": 320, "thickness": 18},
    description: "Model de tâmplărie Ladă Tradițională Scule cu Mâner Fag (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-43-modern",
    title: "Modern Classic Wooden Joiner Tool Tote",
    roTitle: "Lad\u0103 Tradi\u021bional\u0103 Scule cu M\u00e2ner Fag (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 500, "width": 240, "height": 320, "thickness": 18},
    description: "Model de tâmplărie Ladă Tradițională Scule cu Mâner Fag (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-44-compact",
    title: "Compact Wall-Mounted Lumber Storage Rack",
    roTitle: "Rastel de Perete pt Sc\u00e2nduri & Lemn (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 960, "width": 300, "height": 1260, "thickness": 45},
    description: "Model de tâmplărie Rastel de Perete pt Scânduri & Lemn (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-44-standard",
    title: "Standard Wall-Mounted Lumber Storage Rack",
    roTitle: "Rastel de Perete pt Sc\u00e2nduri & Lemn (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 1200, "width": 350, "height": 1400, "thickness": 45},
    description: "Model de tâmplărie Rastel de Perete pt Scânduri & Lemn (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-44-xl",
    title: "XL Wall-Mounted Lumber Storage Rack",
    roTitle: "Rastel de Perete pt Sc\u00e2nduri & Lemn (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 110,
    defaults: {"length": 1560, "width": 400, "height": 1470, "thickness": 45},
    description: "Model de tâmplărie Rastel de Perete pt Scânduri & Lemn (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-44-rustic",
    title: "Rustic Wall-Mounted Lumber Storage Rack",
    roTitle: "Rastel de Perete pt Sc\u00e2nduri & Lemn (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 95,
    defaults: {"length": 1320, "width": 370, "height": 1400, "thickness": 45},
    description: "Model de tâmplărie Rastel de Perete pt Scânduri & Lemn (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-44-nordic",
    title: "Nordic Wall-Mounted Lumber Storage Rack",
    roTitle: "Rastel de Perete pt Sc\u00e2nduri & Lemn (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 1140, "width": 330, "height": 1400, "thickness": 45},
    description: "Model de tâmplărie Rastel de Perete pt Scânduri & Lemn (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-44-industrial",
    title: "Industrial Wall-Mounted Lumber Storage Rack",
    roTitle: "Rastel de Perete pt Sc\u00e2nduri & Lemn (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 100,
    defaults: {"length": 1380, "width": 390, "height": 1400, "thickness": 45},
    description: "Model de tâmplărie Rastel de Perete pt Scânduri & Lemn (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-44-modern",
    title: "Modern Wall-Mounted Lumber Storage Rack",
    roTitle: "Rastel de Perete pt Sc\u00e2nduri & Lemn (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 1200, "width": 350, "height": 1400, "thickness": 45},
    description: "Model de tâmplărie Rastel de Perete pt Scânduri & Lemn (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-45-compact",
    title: "Compact Mobile Miter Saw Stand Station",
    roTitle: "C\u0103rucior Mobil pt Fer\u0103str\u0103u Circular (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 880, "width": 550, "height": 790, "thickness": 32},
    description: "Model de tâmplărie Cărucior Mobil pt Ferăstrău Circular (Compact), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-45-standard",
    title: "Standard Mobile Miter Saw Stand Station",
    roTitle: "C\u0103rucior Mobil pt Fer\u0103str\u0103u Circular (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1100, "width": 650, "height": 880, "thickness": 32},
    description: "Model de tâmplărie Cărucior Mobil pt Ferăstrău Circular (Standard), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-45-xl",
    title: "XL Mobile Miter Saw Stand Station",
    roTitle: "C\u0103rucior Mobil pt Fer\u0103str\u0103u Circular (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 215,
    defaults: {"length": 1430, "width": 750, "height": 920, "thickness": 32},
    description: "Model de tâmplărie Cărucior Mobil pt Ferăstrău Circular (XL), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-45-rustic",
    title: "Rustic Mobile Miter Saw Stand Station",
    roTitle: "C\u0103rucior Mobil pt Fer\u0103str\u0103u Circular (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 200,
    defaults: {"length": 1210, "width": 680, "height": 880, "thickness": 32},
    description: "Model de tâmplărie Cărucior Mobil pt Ferăstrău Circular (Rustic), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-45-nordic",
    title: "Nordic Mobile Miter Saw Stand Station",
    roTitle: "C\u0103rucior Mobil pt Fer\u0103str\u0103u Circular (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 170,
    defaults: {"length": 1040, "width": 620, "height": 880, "thickness": 32},
    description: "Model de tâmplărie Cărucior Mobil pt Ferăstrău Circular (Nordic), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-45-industrial",
    title: "Industrial Mobile Miter Saw Stand Station",
    roTitle: "C\u0103rucior Mobil pt Fer\u0103str\u0103u Circular (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 205,
    defaults: {"length": 1260, "width": 720, "height": 880, "thickness": 32},
    description: "Model de tâmplărie Cărucior Mobil pt Ferăstrău Circular (Industrial), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-45-modern",
    title: "Modern Mobile Miter Saw Stand Station",
    roTitle: "C\u0103rucior Mobil pt Fer\u0103str\u0103u Circular (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 1100, "width": 650, "height": 880, "thickness": 32},
    description: "Model de tâmplărie Cărucior Mobil pt Ferăstrău Circular (Modern), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-46-compact",
    title: "Compact Tool Cabinet with French Cleats",
    roTitle: "Dulap de Perete pt D\u0103l\u021bi & Rindele (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 155,
    defaults: {"length": 600, "width": 190, "height": 810, "thickness": 18},
    description: "Model de tâmplărie Dulap de Perete pt Dălți & Rindele (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-46-standard",
    title: "Standard Tool Cabinet with French Cleats",
    roTitle: "Dulap de Perete pt D\u0103l\u021bi & Rindele (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 170,
    defaults: {"length": 750, "width": 220, "height": 900, "thickness": 18},
    description: "Model de tâmplărie Dulap de Perete pt Dălți & Rindele (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-46-xl",
    title: "XL Tool Cabinet with French Cleats",
    roTitle: "Dulap de Perete pt D\u0103l\u021bi & Rindele (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 205,
    defaults: {"length": 980, "width": 250, "height": 940, "thickness": 18},
    description: "Model de tâmplărie Dulap de Perete pt Dălți & Rindele (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-46-rustic",
    title: "Rustic Tool Cabinet with French Cleats",
    roTitle: "Dulap de Perete pt D\u0103l\u021bi & Rindele (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 190,
    defaults: {"length": 830, "width": 230, "height": 900, "thickness": 18},
    description: "Model de tâmplărie Dulap de Perete pt Dălți & Rindele (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-46-nordic",
    title: "Nordic Tool Cabinet with French Cleats",
    roTitle: "Dulap de Perete pt D\u0103l\u021bi & Rindele (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 160,
    defaults: {"length": 710, "width": 210, "height": 900, "thickness": 18},
    description: "Model de tâmplărie Dulap de Perete pt Dălți & Rindele (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-46-industrial",
    title: "Industrial Tool Cabinet with French Cleats",
    roTitle: "Dulap de Perete pt D\u0103l\u021bi & Rindele (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 860, "width": 240, "height": 900, "thickness": 18},
    description: "Model de tâmplărie Dulap de Perete pt Dălți & Rindele (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-46-modern",
    title: "Modern Tool Cabinet with French Cleats",
    roTitle: "Dulap de Perete pt D\u0103l\u021bi & Rindele (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 185,
    defaults: {"length": 750, "width": 220, "height": 900, "thickness": 18},
    description: "Model de tâmplărie Dulap de Perete pt Dălți & Rindele (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-47-compact",
    title: "Compact 16-Bin Hardware Storage Unit",
    roTitle: "Organizator \u0218uruburi 16 Sertare Mici (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 480, "width": 150, "height": 400, "thickness": 14},
    description: "Model de tâmplărie Organizator Șuruburi 16 Sertare Mici (Compact), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-47-standard",
    title: "Standard 16-Bin Hardware Storage Unit",
    roTitle: "Organizator \u0218uruburi 16 Sertare Mici (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 110,
    defaults: {"length": 600, "width": 180, "height": 450, "thickness": 14},
    description: "Model de tâmplărie Organizator Șuruburi 16 Sertare Mici (Standard), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-47-xl",
    title: "XL 16-Bin Hardware Storage Unit",
    roTitle: "Organizator \u0218uruburi 16 Sertare Mici (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 145,
    defaults: {"length": 780, "width": 210, "height": 470, "thickness": 14},
    description: "Model de tâmplărie Organizator Șuruburi 16 Sertare Mici (XL), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-47-rustic",
    title: "Rustic 16-Bin Hardware Storage Unit",
    roTitle: "Organizator \u0218uruburi 16 Sertare Mici (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 660, "width": 190, "height": 450, "thickness": 14},
    description: "Model de tâmplărie Organizator Șuruburi 16 Sertare Mici (Rustic), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-47-nordic",
    title: "Nordic 16-Bin Hardware Storage Unit",
    roTitle: "Organizator \u0218uruburi 16 Sertare Mici (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 100,
    defaults: {"length": 570, "width": 170, "height": 450, "thickness": 14},
    description: "Model de tâmplărie Organizator Șuruburi 16 Sertare Mici (Nordic), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-47-industrial",
    title: "Industrial 16-Bin Hardware Storage Unit",
    roTitle: "Organizator \u0218uruburi 16 Sertare Mici (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 135,
    defaults: {"length": 690, "width": 200, "height": 450, "thickness": 14},
    description: "Model de tâmplărie Organizator Șuruburi 16 Sertare Mici (Industrial), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-47-modern",
    title: "Modern 16-Bin Hardware Storage Unit",
    roTitle: "Organizator \u0218uruburi 16 Sertare Mici (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 125,
    defaults: {"length": 600, "width": 180, "height": 450, "thickness": 14},
    description: "Model de tâmplărie Organizator Șuruburi 16 Sertare Mici (Modern), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-48-compact",
    title: "Compact Table Saw Crosscut Sled Jig",
    roTitle: "Dispozitiv de T\u0103iere la Unghi Circular (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 75,
    defaults: {"length": 560, "width": 420, "height": 110, "thickness": 18},
    description: "Model de tâmplărie Dispozitiv de Tăiere la Unghi Circular (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-48-standard",
    title: "Standard Table Saw Crosscut Sled Jig",
    roTitle: "Dispozitiv de T\u0103iere la Unghi Circular (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 90,
    defaults: {"length": 700, "width": 500, "height": 120, "thickness": 18},
    description: "Model de tâmplărie Dispozitiv de Tăiere la Unghi Circular (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-48-xl",
    title: "XL Table Saw Crosscut Sled Jig",
    roTitle: "Dispozitiv de T\u0103iere la Unghi Circular (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 125,
    defaults: {"length": 910, "width": 580, "height": 130, "thickness": 18},
    description: "Model de tâmplărie Dispozitiv de Tăiere la Unghi Circular (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-48-rustic",
    title: "Rustic Table Saw Crosscut Sled Jig",
    roTitle: "Dispozitiv de T\u0103iere la Unghi Circular (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 770, "width": 520, "height": 120, "thickness": 18},
    description: "Model de tâmplărie Dispozitiv de Tăiere la Unghi Circular (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-48-nordic",
    title: "Nordic Table Saw Crosscut Sled Jig",
    roTitle: "Dispozitiv de T\u0103iere la Unghi Circular (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 80,
    defaults: {"length": 660, "width": 480, "height": 120, "thickness": 18},
    description: "Model de tâmplărie Dispozitiv de Tăiere la Unghi Circular (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-48-industrial",
    title: "Industrial Table Saw Crosscut Sled Jig",
    roTitle: "Dispozitiv de T\u0103iere la Unghi Circular (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 115,
    defaults: {"length": 800, "width": 550, "height": 120, "thickness": 18},
    description: "Model de tâmplărie Dispozitiv de Tăiere la Unghi Circular (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-48-modern",
    title: "Modern Table Saw Crosscut Sled Jig",
    roTitle: "Dispozitiv de T\u0103iere la Unghi Circular (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 105,
    defaults: {"length": 700, "width": 500, "height": 120, "thickness": 18},
    description: "Model de tâmplărie Dispozitiv de Tăiere la Unghi Circular (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-49-compact",
    title: "Compact Carrying Tool Chest with Latches",
    roTitle: "Cutie de Scule cu \u00cenchidere Z\u0103vor (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 115,
    defaults: {"length": 520, "width": 270, "height": 270, "thickness": 20},
    description: "Model de tâmplărie Cutie de Scule cu Închidere Zăvor (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-49-standard",
    title: "Standard Carrying Tool Chest with Latches",
    roTitle: "Cutie de Scule cu \u00cenchidere Z\u0103vor (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 130,
    defaults: {"length": 650, "width": 320, "height": 300, "thickness": 20},
    description: "Model de tâmplărie Cutie de Scule cu Închidere Zăvor (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-49-xl",
    title: "XL Carrying Tool Chest with Latches",
    roTitle: "Cutie de Scule cu \u00cenchidere Z\u0103vor (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 840, "width": 370, "height": 320, "thickness": 20},
    description: "Model de tâmplărie Cutie de Scule cu Închidere Zăvor (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-49-rustic",
    title: "Rustic Carrying Tool Chest with Latches",
    roTitle: "Cutie de Scule cu \u00cenchidere Z\u0103vor (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 150,
    defaults: {"length": 720, "width": 340, "height": 300, "thickness": 20},
    description: "Model de tâmplărie Cutie de Scule cu Închidere Zăvor (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-49-nordic",
    title: "Nordic Carrying Tool Chest with Latches",
    roTitle: "Cutie de Scule cu \u00cenchidere Z\u0103vor (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 120,
    defaults: {"length": 620, "width": 300, "height": 300, "thickness": 20},
    description: "Model de tâmplărie Cutie de Scule cu Închidere Zăvor (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-49-industrial",
    title: "Industrial Carrying Tool Chest with Latches",
    roTitle: "Cutie de Scule cu \u00cenchidere Z\u0103vor (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 155,
    defaults: {"length": 750, "width": 350, "height": 300, "thickness": 20},
    description: "Model de tâmplărie Cutie de Scule cu Închidere Zăvor (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-49-modern",
    title: "Modern Carrying Tool Chest with Latches",
    roTitle: "Cutie de Scule cu \u00cenchidere Z\u0103vor (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "cabinet",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 145,
    defaults: {"length": 650, "width": 320, "height": 300, "thickness": 20},
    description: "Model de tâmplărie Cutie de Scule cu Închidere Zăvor (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-50-compact",
    title: "Compact Downturn Sanding Work Table",
    roTitle: "Banc de \u0218lefuire cu Aspira\u021bie Pasiv\u0103 (Compact)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 135,
    defaults: {"length": 720, "width": 510, "height": 760, "thickness": 28},
    description: "Model de tâmplărie Banc de Șlefuire cu Aspirație Pasivă (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-50-standard",
    title: "Standard Downturn Sanding Work Table",
    roTitle: "Banc de \u0218lefuire cu Aspira\u021bie Pasiv\u0103 (Standard)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 150,
    defaults: {"length": 900, "width": 600, "height": 850, "thickness": 28},
    description: "Model de tâmplărie Banc de Șlefuire cu Aspirație Pasivă (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-50-xl",
    title: "XL Downturn Sanding Work Table",
    roTitle: "Banc de \u0218lefuire cu Aspira\u021bie Pasiv\u0103 (XL)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 185,
    defaults: {"length": 1170, "width": 690, "height": 890, "thickness": 28},
    description: "Model de tâmplărie Banc de Șlefuire cu Aspirație Pasivă (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-50-rustic",
    title: "Rustic Downturn Sanding Work Table",
    roTitle: "Banc de \u0218lefuire cu Aspira\u021bie Pasiv\u0103 (Rustic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 170,
    defaults: {"length": 990, "width": 630, "height": 850, "thickness": 28},
    description: "Model de tâmplărie Banc de Șlefuire cu Aspirație Pasivă (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-50-nordic",
    title: "Nordic Downturn Sanding Work Table",
    roTitle: "Banc de \u0218lefuire cu Aspira\u021bie Pasiv\u0103 (Nordic)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 140,
    defaults: {"length": 860, "width": 570, "height": 850, "thickness": 28},
    description: "Model de tâmplărie Banc de Șlefuire cu Aspirație Pasivă (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-50-industrial",
    title: "Industrial Downturn Sanding Work Table",
    roTitle: "Banc de \u0218lefuire cu Aspira\u021bie Pasiv\u0103 (Industrial)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 175,
    defaults: {"length": 1040, "width": 660, "height": 850, "thickness": 28},
    description: "Model de tâmplărie Banc de Șlefuire cu Aspirație Pasivă (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "workshop-50-modern",
    title: "Modern Downturn Sanding Work Table",
    roTitle: "Banc de \u0218lefuire cu Aspira\u021bie Pasiv\u0103 (Modern)",
    category: "Workshop",
    roCat: "Atelier & Garaj",
    archetype: "table",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 900, "width": 600, "height": 850, "thickness": 28},
    description: "Model de tâmplărie Banc de Șlefuire cu Aspirație Pasivă (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-51-compact",
    title: "Compact Backyard Chicken Coop & Nesting Box",
    roTitle: "Cuibar & Ad\u0103post pt 4-6 G\u0103ini (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Avansat",
    timeMinutes: 285,
    defaults: {"length": 1120, "width": 760, "height": 1170, "thickness": 20},
    description: "Model de tâmplărie Cuibar & Adăpost pt 4-6 Găini (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-51-standard",
    title: "Standard Backyard Chicken Coop & Nesting Box",
    roTitle: "Cuibar & Ad\u0103post pt 4-6 G\u0103ini (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Avansat",
    timeMinutes: 300,
    defaults: {"length": 1400, "width": 900, "height": 1300, "thickness": 20},
    description: "Model de tâmplărie Cuibar & Adăpost pt 4-6 Găini (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-51-xl",
    title: "XL Backyard Chicken Coop & Nesting Box",
    roTitle: "Cuibar & Ad\u0103post pt 4-6 G\u0103ini (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Avansat",
    timeMinutes: 335,
    defaults: {"length": 1820, "width": 1040, "height": 1360, "thickness": 20},
    description: "Model de tâmplărie Cuibar & Adăpost pt 4-6 Găini (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-51-rustic",
    title: "Rustic Backyard Chicken Coop & Nesting Box",
    roTitle: "Cuibar & Ad\u0103post pt 4-6 G\u0103ini (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 320,
    defaults: {"length": 1540, "width": 940, "height": 1300, "thickness": 20},
    description: "Model de tâmplărie Cuibar & Adăpost pt 4-6 Găini (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-51-nordic",
    title: "Nordic Backyard Chicken Coop & Nesting Box",
    roTitle: "Cuibar & Ad\u0103post pt 4-6 G\u0103ini (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Avansat",
    timeMinutes: 290,
    defaults: {"length": 1330, "width": 860, "height": 1300, "thickness": 20},
    description: "Model de tâmplărie Cuibar & Adăpost pt 4-6 Găini (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-51-industrial",
    title: "Industrial Backyard Chicken Coop & Nesting Box",
    roTitle: "Cuibar & Ad\u0103post pt 4-6 G\u0103ini (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 325,
    defaults: {"length": 1610, "width": 990, "height": 1300, "thickness": 20},
    description: "Model de tâmplărie Cuibar & Adăpost pt 4-6 Găini (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-51-modern",
    title: "Modern Backyard Chicken Coop & Nesting Box",
    roTitle: "Cuibar & Ad\u0103post pt 4-6 G\u0103ini (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Avansat",
    timeMinutes: 315,
    defaults: {"length": 1400, "width": 900, "height": 1300, "thickness": 20},
    description: "Model de tâmplărie Cuibar & Adăpost pt 4-6 Găini (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-52-compact",
    title: "Compact Insulated Double Wall Dog House",
    roTitle: "C\u0103su\u021b\u0103 Izolat\u0103 Dubl\u0103 pt C\u00e2ine Mare (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 185,
    defaults: {"length": 880, "width": 720, "height": 860, "thickness": 20},
    description: "Model de tâmplărie Căsuță Izolată Dublă pt Câine Mare (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-52-standard",
    title: "Standard Insulated Double Wall Dog House",
    roTitle: "C\u0103su\u021b\u0103 Izolat\u0103 Dubl\u0103 pt C\u00e2ine Mare (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 200,
    defaults: {"length": 1100, "width": 850, "height": 950, "thickness": 20},
    description: "Model de tâmplărie Căsuță Izolată Dublă pt Câine Mare (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-52-xl",
    title: "XL Insulated Double Wall Dog House",
    roTitle: "C\u0103su\u021b\u0103 Izolat\u0103 Dubl\u0103 pt C\u00e2ine Mare (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 235,
    defaults: {"length": 1430, "width": 980, "height": 1000, "thickness": 20},
    description: "Model de tâmplărie Căsuță Izolată Dublă pt Câine Mare (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-52-rustic",
    title: "Rustic Insulated Double Wall Dog House",
    roTitle: "C\u0103su\u021b\u0103 Izolat\u0103 Dubl\u0103 pt C\u00e2ine Mare (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 220,
    defaults: {"length": 1210, "width": 890, "height": 950, "thickness": 20},
    description: "Model de tâmplărie Căsuță Izolată Dublă pt Câine Mare (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-52-nordic",
    title: "Nordic Insulated Double Wall Dog House",
    roTitle: "C\u0103su\u021b\u0103 Izolat\u0103 Dubl\u0103 pt C\u00e2ine Mare (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 190,
    defaults: {"length": 1040, "width": 810, "height": 950, "thickness": 20},
    description: "Model de tâmplărie Căsuță Izolată Dublă pt Câine Mare (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-52-industrial",
    title: "Industrial Insulated Double Wall Dog House",
    roTitle: "C\u0103su\u021b\u0103 Izolat\u0103 Dubl\u0103 pt C\u00e2ine Mare (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 225,
    defaults: {"length": 1260, "width": 940, "height": 950, "thickness": 20},
    description: "Model de tâmplărie Căsuță Izolată Dublă pt Câine Mare (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-52-modern",
    title: "Modern Insulated Double Wall Dog House",
    roTitle: "C\u0103su\u021b\u0103 Izolat\u0103 Dubl\u0103 pt C\u00e2ine Mare (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 215,
    defaults: {"length": 1100, "width": 850, "height": 950, "thickness": 20},
    description: "Model de tâmplărie Căsuță Izolată Dublă pt Câine Mare (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-53-compact",
    title: "Compact Top Bar Horizontal Beehive Box",
    roTitle: "Stup Orizontal Tradi\u021bional pt Albine (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "tei",
    difficulty: "Mediu",
    timeMinutes: 165,
    defaults: {"length": 840, "width": 410, "height": 380, "thickness": 25},
    description: "Model de tâmplărie Stup Orizontal Tradițional pt Albine (Compact), proiectat pentru execuție din lemn de tei cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-53-standard",
    title: "Standard Top Bar Horizontal Beehive Box",
    roTitle: "Stup Orizontal Tradi\u021bional pt Albine (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "tei",
    difficulty: "Mediu",
    timeMinutes: 180,
    defaults: {"length": 1050, "width": 480, "height": 420, "thickness": 25},
    description: "Model de tâmplărie Stup Orizontal Tradițional pt Albine (Standard), proiectat pentru execuție din lemn de tei cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-53-xl",
    title: "XL Top Bar Horizontal Beehive Box",
    roTitle: "Stup Orizontal Tradi\u021bional pt Albine (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "tei",
    difficulty: "Mediu",
    timeMinutes: 215,
    defaults: {"length": 1360, "width": 550, "height": 440, "thickness": 25},
    description: "Model de tâmplărie Stup Orizontal Tradițional pt Albine (XL), proiectat pentru execuție din lemn de tei cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-53-rustic",
    title: "Rustic Top Bar Horizontal Beehive Box",
    roTitle: "Stup Orizontal Tradi\u021bional pt Albine (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "tei",
    difficulty: "Mediu",
    timeMinutes: 200,
    defaults: {"length": 1160, "width": 500, "height": 420, "thickness": 25},
    description: "Model de tâmplărie Stup Orizontal Tradițional pt Albine (Rustic), proiectat pentru execuție din lemn de tei cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-53-nordic",
    title: "Nordic Top Bar Horizontal Beehive Box",
    roTitle: "Stup Orizontal Tradi\u021bional pt Albine (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "tei",
    difficulty: "Mediu",
    timeMinutes: 170,
    defaults: {"length": 1000, "width": 460, "height": 420, "thickness": 25},
    description: "Model de tâmplărie Stup Orizontal Tradițional pt Albine (Nordic), proiectat pentru execuție din lemn de tei cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-53-industrial",
    title: "Industrial Top Bar Horizontal Beehive Box",
    roTitle: "Stup Orizontal Tradi\u021bional pt Albine (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "tei",
    difficulty: "Mediu",
    timeMinutes: 205,
    defaults: {"length": 1210, "width": 530, "height": 420, "thickness": 25},
    description: "Model de tâmplărie Stup Orizontal Tradițional pt Albine (Industrial), proiectat pentru execuție din lemn de tei cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-53-modern",
    title: "Modern Top Bar Horizontal Beehive Box",
    roTitle: "Stup Orizontal Tradi\u021bional pt Albine (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "tei",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 1050, "width": 480, "height": 420, "thickness": 25},
    description: "Model de tâmplărie Stup Orizontal Tradițional pt Albine (Modern), proiectat pentru execuție din lemn de tei cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-54-compact",
    title: "Compact 2-Story Outdoor Rabbit Hutch",
    roTitle: "Iepur\u0103rie Supraetajat\u0103 2 Cu\u0219ti (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 205,
    defaults: {"length": 960, "width": 510, "height": 990, "thickness": 20},
    description: "Model de tâmplărie Iepurărie Supraetajată 2 Cuști (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-54-standard",
    title: "Standard 2-Story Outdoor Rabbit Hutch",
    roTitle: "Iepur\u0103rie Supraetajat\u0103 2 Cu\u0219ti (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 220,
    defaults: {"length": 1200, "width": 600, "height": 1100, "thickness": 20},
    description: "Model de tâmplărie Iepurărie Supraetajată 2 Cuști (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-54-xl",
    title: "XL 2-Story Outdoor Rabbit Hutch",
    roTitle: "Iepur\u0103rie Supraetajat\u0103 2 Cu\u0219ti (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 255,
    defaults: {"length": 1560, "width": 690, "height": 1160, "thickness": 20},
    description: "Model de tâmplărie Iepurărie Supraetajată 2 Cuști (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-54-rustic",
    title: "Rustic 2-Story Outdoor Rabbit Hutch",
    roTitle: "Iepur\u0103rie Supraetajat\u0103 2 Cu\u0219ti (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 240,
    defaults: {"length": 1320, "width": 630, "height": 1100, "thickness": 20},
    description: "Model de tâmplărie Iepurărie Supraetajată 2 Cuști (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-54-nordic",
    title: "Nordic 2-Story Outdoor Rabbit Hutch",
    roTitle: "Iepur\u0103rie Supraetajat\u0103 2 Cu\u0219ti (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 210,
    defaults: {"length": 1140, "width": 570, "height": 1100, "thickness": 20},
    description: "Model de tâmplărie Iepurărie Supraetajată 2 Cuști (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-54-industrial",
    title: "Industrial 2-Story Outdoor Rabbit Hutch",
    roTitle: "Iepur\u0103rie Supraetajat\u0103 2 Cu\u0219ti (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 245,
    defaults: {"length": 1380, "width": 660, "height": 1100, "thickness": 20},
    description: "Model de tâmplărie Iepurărie Supraetajată 2 Cuști (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-54-modern",
    title: "Modern 2-Story Outdoor Rabbit Hutch",
    roTitle: "Iepur\u0103rie Supraetajat\u0103 2 Cu\u0219ti (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 235,
    defaults: {"length": 1200, "width": 600, "height": 1100, "thickness": 20},
    description: "Model de tâmplărie Iepurărie Supraetajată 2 Cuști (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-55-compact",
    title: "Compact Ventilated Potato & Apple Bin",
    roTitle: "Lad\u0103 Aerisit\u0103 pt Cartofi & Legume (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 55,
    defaults: {"length": 560, "width": 380, "height": 720, "thickness": 18},
    description: "Model de tâmplărie Ladă Aerisită pt Cartofi & Legume (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-55-standard",
    title: "Standard Ventilated Potato & Apple Bin",
    roTitle: "Lad\u0103 Aerisit\u0103 pt Cartofi & Legume (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 700, "width": 450, "height": 800, "thickness": 18},
    description: "Model de tâmplărie Ladă Aerisită pt Cartofi & Legume (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-55-xl",
    title: "XL Ventilated Potato & Apple Bin",
    roTitle: "Lad\u0103 Aerisit\u0103 pt Cartofi & Legume (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 105,
    defaults: {"length": 910, "width": 520, "height": 840, "thickness": 18},
    description: "Model de tâmplărie Ladă Aerisită pt Cartofi & Legume (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-55-rustic",
    title: "Rustic Ventilated Potato & Apple Bin",
    roTitle: "Lad\u0103 Aerisit\u0103 pt Cartofi & Legume (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 90,
    defaults: {"length": 770, "width": 470, "height": 800, "thickness": 18},
    description: "Model de tâmplărie Ladă Aerisită pt Cartofi & Legume (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-55-nordic",
    title: "Nordic Ventilated Potato & Apple Bin",
    roTitle: "Lad\u0103 Aerisit\u0103 pt Cartofi & Legume (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 660, "width": 430, "height": 800, "thickness": 18},
    description: "Model de tâmplărie Ladă Aerisită pt Cartofi & Legume (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-55-industrial",
    title: "Industrial Ventilated Potato & Apple Bin",
    roTitle: "Lad\u0103 Aerisit\u0103 pt Cartofi & Legume (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 95,
    defaults: {"length": 800, "width": 500, "height": 800, "thickness": 18},
    description: "Model de tâmplărie Ladă Aerisită pt Cartofi & Legume (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-55-modern",
    title: "Modern Ventilated Potato & Apple Bin",
    roTitle: "Lad\u0103 Aerisit\u0103 pt Cartofi & Legume (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 85,
    defaults: {"length": 700, "width": 450, "height": 800, "thickness": 18},
    description: "Model de tâmplărie Ladă Aerisită pt Cartofi & Legume (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-56-compact",
    title: "Compact Wheelbarrow & Garden Tool Organizer",
    roTitle: "Suport Roab\u0103 & Unelte de Gr\u0103din\u0103 (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shelf",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 960, "width": 340, "height": 990, "thickness": 28},
    description: "Model de tâmplărie Suport Roabă & Unelte de Grădină (Compact), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-56-standard",
    title: "Standard Wheelbarrow & Garden Tool Organizer",
    roTitle: "Suport Roab\u0103 & Unelte de Gr\u0103din\u0103 (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shelf",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 1200, "width": 400, "height": 1100, "thickness": 28},
    description: "Model de tâmplărie Suport Roabă & Unelte de Grădină (Standard), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-56-xl",
    title: "XL Wheelbarrow & Garden Tool Organizer",
    roTitle: "Suport Roab\u0103 & Unelte de Gr\u0103din\u0103 (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shelf",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 100,
    defaults: {"length": 1560, "width": 460, "height": 1160, "thickness": 28},
    description: "Model de tâmplărie Suport Roabă & Unelte de Grădină (XL), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-56-rustic",
    title: "Rustic Wheelbarrow & Garden Tool Organizer",
    roTitle: "Suport Roab\u0103 & Unelte de Gr\u0103din\u0103 (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shelf",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 85,
    defaults: {"length": 1320, "width": 420, "height": 1100, "thickness": 28},
    description: "Model de tâmplărie Suport Roabă & Unelte de Grădină (Rustic), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-56-nordic",
    title: "Nordic Wheelbarrow & Garden Tool Organizer",
    roTitle: "Suport Roab\u0103 & Unelte de Gr\u0103din\u0103 (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shelf",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 55,
    defaults: {"length": 1140, "width": 380, "height": 1100, "thickness": 28},
    description: "Model de tâmplărie Suport Roabă & Unelte de Grădină (Nordic), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-56-industrial",
    title: "Industrial Wheelbarrow & Garden Tool Organizer",
    roTitle: "Suport Roab\u0103 & Unelte de Gr\u0103din\u0103 (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shelf",
    woodDefault: "molid",
    difficulty: "Mediu",
    timeMinutes: 90,
    defaults: {"length": 1380, "width": 440, "height": 1100, "thickness": 28},
    description: "Model de tâmplărie Suport Roabă & Unelte de Grădină (Industrial), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-56-modern",
    title: "Modern Wheelbarrow & Garden Tool Organizer",
    roTitle: "Suport Roab\u0103 & Unelte de Gr\u0103din\u0103 (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shelf",
    woodDefault: "molid",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 1200, "width": 400, "height": 1100, "thickness": 28},
    description: "Model de tâmplărie Suport Roabă & Unelte de Grădină (Modern), proiectat pentru execuție din lemn de molid cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-57-compact",
    title: "Compact Heavy Livestock Feed Trough",
    roTitle: "Jgheab Hr\u0103nitor Lemn pt Animale Curte (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 1200, "width": 340, "height": 320, "thickness": 35},
    description: "Model de tâmplărie Jgheab Hrănitor Lemn pt Animale Curte (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-57-standard",
    title: "Standard Heavy Livestock Feed Trough",
    roTitle: "Jgheab Hr\u0103nitor Lemn pt Animale Curte (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 1500, "width": 400, "height": 350, "thickness": 35},
    description: "Model de tâmplărie Jgheab Hrănitor Lemn pt Animale Curte (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-57-xl",
    title: "XL Heavy Livestock Feed Trough",
    roTitle: "Jgheab Hr\u0103nitor Lemn pt Animale Curte (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 115,
    defaults: {"length": 1950, "width": 460, "height": 370, "thickness": 35},
    description: "Model de tâmplărie Jgheab Hrănitor Lemn pt Animale Curte (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-57-rustic",
    title: "Rustic Heavy Livestock Feed Trough",
    roTitle: "Jgheab Hr\u0103nitor Lemn pt Animale Curte (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 100,
    defaults: {"length": 1650, "width": 420, "height": 350, "thickness": 35},
    description: "Model de tâmplărie Jgheab Hrănitor Lemn pt Animale Curte (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-57-nordic",
    title: "Nordic Heavy Livestock Feed Trough",
    roTitle: "Jgheab Hr\u0103nitor Lemn pt Animale Curte (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 1420, "width": 380, "height": 350, "thickness": 35},
    description: "Model de tâmplărie Jgheab Hrănitor Lemn pt Animale Curte (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-57-industrial",
    title: "Industrial Heavy Livestock Feed Trough",
    roTitle: "Jgheab Hr\u0103nitor Lemn pt Animale Curte (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 105,
    defaults: {"length": 1720, "width": 440, "height": 350, "thickness": 35},
    description: "Model de tâmplărie Jgheab Hrănitor Lemn pt Animale Curte (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-57-modern",
    title: "Modern Heavy Livestock Feed Trough",
    roTitle: "Jgheab Hr\u0103nitor Lemn pt Animale Curte (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 1500, "width": 400, "height": 350, "thickness": 35},
    description: "Model de tâmplărie Jgheab Hrănitor Lemn pt Animale Curte (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-58-compact",
    title: "Compact Traditional Wooden Meat Smoker",
    roTitle: "Afum\u0103toare Tradi\u021bional\u0103 din Lemn (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 195,
    defaults: {"length": 640, "width": 680, "height": 1440, "thickness": 28},
    description: "Model de tâmplărie Afumătoare Tradițională din Lemn (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-58-standard",
    title: "Standard Traditional Wooden Meat Smoker",
    roTitle: "Afum\u0103toare Tradi\u021bional\u0103 din Lemn (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 210,
    defaults: {"length": 800, "width": 800, "height": 1600, "thickness": 28},
    description: "Model de tâmplărie Afumătoare Tradițională din Lemn (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-58-xl",
    title: "XL Traditional Wooden Meat Smoker",
    roTitle: "Afum\u0103toare Tradi\u021bional\u0103 din Lemn (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 245,
    defaults: {"length": 1040, "width": 920, "height": 1680, "thickness": 28},
    description: "Model de tâmplărie Afumătoare Tradițională din Lemn (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-58-rustic",
    title: "Rustic Traditional Wooden Meat Smoker",
    roTitle: "Afum\u0103toare Tradi\u021bional\u0103 din Lemn (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 230,
    defaults: {"length": 880, "width": 840, "height": 1600, "thickness": 28},
    description: "Model de tâmplărie Afumătoare Tradițională din Lemn (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-58-nordic",
    title: "Nordic Traditional Wooden Meat Smoker",
    roTitle: "Afum\u0103toare Tradi\u021bional\u0103 din Lemn (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 200,
    defaults: {"length": 760, "width": 760, "height": 1600, "thickness": 28},
    description: "Model de tâmplărie Afumătoare Tradițională din Lemn (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-58-industrial",
    title: "Industrial Traditional Wooden Meat Smoker",
    roTitle: "Afum\u0103toare Tradi\u021bional\u0103 din Lemn (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 235,
    defaults: {"length": 920, "width": 880, "height": 1600, "thickness": 28},
    description: "Model de tâmplărie Afumătoare Tradițională din Lemn (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-58-modern",
    title: "Modern Traditional Wooden Meat Smoker",
    roTitle: "Afum\u0103toare Tradi\u021bional\u0103 din Lemn (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "shed",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 225,
    defaults: {"length": 800, "width": 800, "height": 1600, "thickness": 28},
    description: "Model de tâmplărie Afumătoare Tradițională din Lemn (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-59-compact",
    title: "Compact Wooden Fruit Cider Press Basket",
    roTitle: "Pres\u0103 Manual\u0103 pt Struguri & Mere (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 175,
    defaults: {"length": 360, "width": 380, "height": 680, "thickness": 30},
    description: "Model de tâmplărie Presă Manuală pt Struguri & Mere (Compact), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-59-standard",
    title: "Standard Wooden Fruit Cider Press Basket",
    roTitle: "Pres\u0103 Manual\u0103 pt Struguri & Mere (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 190,
    defaults: {"length": 450, "width": 450, "height": 750, "thickness": 30},
    description: "Model de tâmplărie Presă Manuală pt Struguri & Mere (Standard), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-59-xl",
    title: "XL Wooden Fruit Cider Press Basket",
    roTitle: "Pres\u0103 Manual\u0103 pt Struguri & Mere (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 225,
    defaults: {"length": 580, "width": 520, "height": 790, "thickness": 30},
    description: "Model de tâmplărie Presă Manuală pt Struguri & Mere (XL), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-59-rustic",
    title: "Rustic Wooden Fruit Cider Press Basket",
    roTitle: "Pres\u0103 Manual\u0103 pt Struguri & Mere (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 210,
    defaults: {"length": 500, "width": 470, "height": 750, "thickness": 30},
    description: "Model de tâmplărie Presă Manuală pt Struguri & Mere (Rustic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-59-nordic",
    title: "Nordic Wooden Fruit Cider Press Basket",
    roTitle: "Pres\u0103 Manual\u0103 pt Struguri & Mere (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 180,
    defaults: {"length": 430, "width": 430, "height": 750, "thickness": 30},
    description: "Model de tâmplărie Presă Manuală pt Struguri & Mere (Nordic), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-59-industrial",
    title: "Industrial Wooden Fruit Cider Press Basket",
    roTitle: "Pres\u0103 Manual\u0103 pt Struguri & Mere (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Mediu",
    timeMinutes: 215,
    defaults: {"length": 520, "width": 500, "height": 750, "thickness": 30},
    description: "Model de tâmplărie Presă Manuală pt Struguri & Mere (Industrial), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-59-modern",
    title: "Modern Wooden Fruit Cider Press Basket",
    roTitle: "Pres\u0103 Manual\u0103 pt Struguri & Mere (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "fag",
    difficulty: "Avansat",
    timeMinutes: 205,
    defaults: {"length": 450, "width": 450, "height": 750, "thickness": 30},
    description: "Model de tâmplărie Presă Manuală pt Struguri & Mere (Modern), proiectat pentru execuție din lemn de fag cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-60-compact",
    title: "Compact Stackable Orchard Apple Crates (Set 4)",
    roTitle: "L\u0103di\u021be Recoltat Fructe Stivuibile (Compact)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 30,
    defaults: {"length": 400, "width": 300, "height": 250, "thickness": 12},
    description: "Model de tâmplărie Lădițe Recoltat Fructe Stivuibile (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-60-standard",
    title: "Standard Stackable Orchard Apple Crates (Set 4)",
    roTitle: "L\u0103di\u021be Recoltat Fructe Stivuibile (Standard)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 500, "width": 350, "height": 280, "thickness": 12},
    description: "Model de tâmplărie Lădițe Recoltat Fructe Stivuibile (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-60-xl",
    title: "XL Stackable Orchard Apple Crates (Set 4)",
    roTitle: "L\u0103di\u021be Recoltat Fructe Stivuibile (XL)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 650, "width": 400, "height": 290, "thickness": 12},
    description: "Model de tâmplărie Lădițe Recoltat Fructe Stivuibile (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-60-rustic",
    title: "Rustic Stackable Orchard Apple Crates (Set 4)",
    roTitle: "L\u0103di\u021be Recoltat Fructe Stivuibile (Rustic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 65,
    defaults: {"length": 550, "width": 370, "height": 280, "thickness": 12},
    description: "Model de tâmplărie Lădițe Recoltat Fructe Stivuibile (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-60-nordic",
    title: "Nordic Stackable Orchard Apple Crates (Set 4)",
    roTitle: "L\u0103di\u021be Recoltat Fructe Stivuibile (Nordic)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 35,
    defaults: {"length": 480, "width": 330, "height": 280, "thickness": 12},
    description: "Model de tâmplărie Lădițe Recoltat Fructe Stivuibile (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-60-industrial",
    title: "Industrial Stackable Orchard Apple Crates (Set 4)",
    roTitle: "L\u0103di\u021be Recoltat Fructe Stivuibile (Industrial)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 70,
    defaults: {"length": 580, "width": 390, "height": 280, "thickness": 12},
    description: "Model de tâmplărie Lădițe Recoltat Fructe Stivuibile (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "farm-60-modern",
    title: "Modern Stackable Orchard Apple Crates (Set 4)",
    roTitle: "L\u0103di\u021be Recoltat Fructe Stivuibile (Modern)",
    category: "Farm",
    roCat: "Gospod\u0103rie & Curte",
    archetype: "tote",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 500, "width": 350, "height": 280, "thickness": 12},
    description: "Model de tâmplărie Lădițe Recoltat Fructe Stivuibile (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-61-compact",
    title: "Compact Minimalist Walnut Wall Clock 35cm",
    roTitle: "Ceas de Perete Minimalist Nuc (Compact)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 30,
    defaults: {"length": 280, "width": 300, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Ceas de Perete Minimalist Nuc (Compact), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-61-standard",
    title: "Standard Minimalist Walnut Wall Clock 35cm",
    roTitle: "Ceas de Perete Minimalist Nuc (Standard)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 350, "width": 350, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Ceas de Perete Minimalist Nuc (Standard), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-61-xl",
    title: "XL Minimalist Walnut Wall Clock 35cm",
    roTitle: "Ceas de Perete Minimalist Nuc (XL)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 460, "width": 400, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Ceas de Perete Minimalist Nuc (XL), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-61-rustic",
    title: "Rustic Minimalist Walnut Wall Clock 35cm",
    roTitle: "Ceas de Perete Minimalist Nuc (Rustic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 65,
    defaults: {"length": 390, "width": 370, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Ceas de Perete Minimalist Nuc (Rustic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-61-nordic",
    title: "Nordic Minimalist Walnut Wall Clock 35cm",
    roTitle: "Ceas de Perete Minimalist Nuc (Nordic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 35,
    defaults: {"length": 330, "width": 330, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Ceas de Perete Minimalist Nuc (Nordic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-61-industrial",
    title: "Industrial Minimalist Walnut Wall Clock 35cm",
    roTitle: "Ceas de Perete Minimalist Nuc (Industrial)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 70,
    defaults: {"length": 400, "width": 390, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Ceas de Perete Minimalist Nuc (Industrial), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-61-modern",
    title: "Modern Minimalist Walnut Wall Clock 35cm",
    roTitle: "Ceas de Perete Minimalist Nuc (Modern)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 350, "width": 350, "height": 30, "thickness": 28},
    description: "Model de tâmplărie Ceas de Perete Minimalist Nuc (Modern), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-62-compact",
    title: "Compact Geometric Table Lamp Base",
    roTitle: "Lamp\u0103 Geometric\u0103 de Mas\u0103 Lemn (Compact)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "table",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 140, "width": 150, "height": 290, "thickness": 22},
    description: "Model de tâmplărie Lampă Geometrică de Masă Lemn (Compact), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-62-standard",
    title: "Standard Geometric Table Lamp Base",
    roTitle: "Lamp\u0103 Geometric\u0103 de Mas\u0103 Lemn (Standard)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "table",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 180, "width": 180, "height": 320, "thickness": 22},
    description: "Model de tâmplărie Lampă Geometrică de Masă Lemn (Standard), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-62-xl",
    title: "XL Geometric Table Lamp Base",
    roTitle: "Lamp\u0103 Geometric\u0103 de Mas\u0103 Lemn (XL)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "table",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 95,
    defaults: {"length": 230, "width": 210, "height": 340, "thickness": 22},
    description: "Model de tâmplărie Lampă Geometrică de Masă Lemn (XL), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-62-rustic",
    title: "Rustic Geometric Table Lamp Base",
    roTitle: "Lamp\u0103 Geometric\u0103 de Mas\u0103 Lemn (Rustic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "table",
    woodDefault: "cires",
    difficulty: "Mediu",
    timeMinutes: 80,
    defaults: {"length": 200, "width": 190, "height": 320, "thickness": 22},
    description: "Model de tâmplărie Lampă Geometrică de Masă Lemn (Rustic), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-62-nordic",
    title: "Nordic Geometric Table Lamp Base",
    roTitle: "Lamp\u0103 Geometric\u0103 de Mas\u0103 Lemn (Nordic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "table",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 170, "width": 170, "height": 320, "thickness": 22},
    description: "Model de tâmplărie Lampă Geometrică de Masă Lemn (Nordic), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-62-industrial",
    title: "Industrial Geometric Table Lamp Base",
    roTitle: "Lamp\u0103 Geometric\u0103 de Mas\u0103 Lemn (Industrial)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "table",
    woodDefault: "cires",
    difficulty: "Mediu",
    timeMinutes: 85,
    defaults: {"length": 210, "width": 200, "height": 320, "thickness": 22},
    description: "Model de tâmplărie Lampă Geometrică de Masă Lemn (Industrial), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-62-modern",
    title: "Modern Geometric Table Lamp Base",
    roTitle: "Lamp\u0103 Geometric\u0103 de Mas\u0103 Lemn (Modern)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "table",
    woodDefault: "cires",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 180, "width": 180, "height": 320, "thickness": 22},
    description: "Model de tâmplărie Lampă Geometrică de Masă Lemn (Modern), proiectat pentru execuție din lemn de cires cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-63-compact",
    title: "Compact Curved Headphone Display Stand",
    roTitle: "Suport Lemn pt C\u0103\u0219ti Audio (Compact)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "chair",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 30,
    defaults: {"length": 120, "width": 100, "height": 230, "thickness": 20},
    description: "Model de tâmplărie Suport Lemn pt Căști Audio (Compact), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-63-standard",
    title: "Standard Curved Headphone Display Stand",
    roTitle: "Suport Lemn pt C\u0103\u0219ti Audio (Standard)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "chair",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 150, "width": 120, "height": 260, "thickness": 20},
    description: "Model de tâmplărie Suport Lemn pt Căști Audio (Standard), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-63-xl",
    title: "XL Curved Headphone Display Stand",
    roTitle: "Suport Lemn pt C\u0103\u0219ti Audio (XL)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "chair",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 75,
    defaults: {"length": 200, "width": 140, "height": 270, "thickness": 20},
    description: "Model de tâmplărie Suport Lemn pt Căști Audio (XL), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-63-rustic",
    title: "Rustic Curved Headphone Display Stand",
    roTitle: "Suport Lemn pt C\u0103\u0219ti Audio (Rustic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "chair",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 60,
    defaults: {"length": 160, "width": 130, "height": 260, "thickness": 20},
    description: "Model de tâmplărie Suport Lemn pt Căști Audio (Rustic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-63-nordic",
    title: "Nordic Curved Headphone Display Stand",
    roTitle: "Suport Lemn pt C\u0103\u0219ti Audio (Nordic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "chair",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 30,
    defaults: {"length": 140, "width": 110, "height": 260, "thickness": 20},
    description: "Model de tâmplărie Suport Lemn pt Căști Audio (Nordic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-63-industrial",
    title: "Industrial Curved Headphone Display Stand",
    roTitle: "Suport Lemn pt C\u0103\u0219ti Audio (Industrial)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "chair",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 65,
    defaults: {"length": 170, "width": 130, "height": 260, "thickness": 20},
    description: "Model de tâmplărie Suport Lemn pt Căști Audio (Industrial), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-63-modern",
    title: "Modern Curved Headphone Display Stand",
    roTitle: "Suport Lemn pt C\u0103\u0219ti Audio (Modern)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "chair",
    woodDefault: "nuc",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 55,
    defaults: {"length": 150, "width": 120, "height": 260, "thickness": 20},
    description: "Model de tâmplărie Suport Lemn pt Căști Audio (Modern), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-64-compact",
    title: "Compact Nightstand Phone Docking Station",
    roTitle: "Suport Telefon & Ceas cu \u00cenc\u0103rcare (Compact)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 35,
    defaults: {"length": 190, "width": 150, "height": 170, "thickness": 18},
    description: "Model de tâmplărie Suport Telefon & Ceas cu Încărcare (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-64-standard",
    title: "Standard Nightstand Phone Docking Station",
    roTitle: "Suport Telefon & Ceas cu \u00cenc\u0103rcare (Standard)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 50,
    defaults: {"length": 240, "width": 180, "height": 190, "thickness": 18},
    description: "Model de tâmplărie Suport Telefon & Ceas cu Încărcare (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-64-xl",
    title: "XL Nightstand Phone Docking Station",
    roTitle: "Suport Telefon & Ceas cu \u00cenc\u0103rcare (XL)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 85,
    defaults: {"length": 310, "width": 210, "height": 200, "thickness": 18},
    description: "Model de tâmplărie Suport Telefon & Ceas cu Încărcare (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-64-rustic",
    title: "Rustic Nightstand Phone Docking Station",
    roTitle: "Suport Telefon & Ceas cu \u00cenc\u0103rcare (Rustic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 70,
    defaults: {"length": 260, "width": 190, "height": 190, "thickness": 18},
    description: "Model de tâmplărie Suport Telefon & Ceas cu Încărcare (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-64-nordic",
    title: "Nordic Nightstand Phone Docking Station",
    roTitle: "Suport Telefon & Ceas cu \u00cenc\u0103rcare (Nordic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 230, "width": 170, "height": 190, "thickness": 18},
    description: "Model de tâmplărie Suport Telefon & Ceas cu Încărcare (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-64-industrial",
    title: "Industrial Nightstand Phone Docking Station",
    roTitle: "Suport Telefon & Ceas cu \u00cenc\u0103rcare (Industrial)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 75,
    defaults: {"length": 280, "width": 200, "height": 190, "thickness": 18},
    description: "Model de tâmplărie Suport Telefon & Ceas cu Încărcare (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-64-modern",
    title: "Modern Nightstand Phone Docking Station",
    roTitle: "Suport Telefon & Ceas cu \u00cenc\u0103rcare (Modern)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 65,
    defaults: {"length": 240, "width": 180, "height": 190, "thickness": 18},
    description: "Model de tâmplărie Suport Telefon & Ceas cu Încărcare (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-65-compact",
    title: "Compact Floating Shelf with Hidden Drawer",
    roTitle: "Poli\u021b\u0103 Plutitoare cu Sertar Ascuns (Compact)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 105,
    defaults: {"length": 480, "width": 170, "height": 70, "thickness": 18},
    description: "Model de tâmplărie Poliță Plutitoare cu Sertar Ascuns (Compact), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-65-standard",
    title: "Standard Floating Shelf with Hidden Drawer",
    roTitle: "Poli\u021b\u0103 Plutitoare cu Sertar Ascuns (Standard)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 120,
    defaults: {"length": 600, "width": 200, "height": 80, "thickness": 18},
    description: "Model de tâmplărie Poliță Plutitoare cu Sertar Ascuns (Standard), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-65-xl",
    title: "XL Floating Shelf with Hidden Drawer",
    roTitle: "Poli\u021b\u0103 Plutitoare cu Sertar Ascuns (XL)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 155,
    defaults: {"length": 780, "width": 230, "height": 80, "thickness": 18},
    description: "Model de tâmplărie Poliță Plutitoare cu Sertar Ascuns (XL), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-65-rustic",
    title: "Rustic Floating Shelf with Hidden Drawer",
    roTitle: "Poli\u021b\u0103 Plutitoare cu Sertar Ascuns (Rustic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 140,
    defaults: {"length": 660, "width": 210, "height": 80, "thickness": 18},
    description: "Model de tâmplărie Poliță Plutitoare cu Sertar Ascuns (Rustic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-65-nordic",
    title: "Nordic Floating Shelf with Hidden Drawer",
    roTitle: "Poli\u021b\u0103 Plutitoare cu Sertar Ascuns (Nordic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 110,
    defaults: {"length": 570, "width": 190, "height": 80, "thickness": 18},
    description: "Model de tâmplărie Poliță Plutitoare cu Sertar Ascuns (Nordic), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-65-industrial",
    title: "Industrial Floating Shelf with Hidden Drawer",
    roTitle: "Poli\u021b\u0103 Plutitoare cu Sertar Ascuns (Industrial)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 145,
    defaults: {"length": 690, "width": 220, "height": 80, "thickness": 18},
    description: "Model de tâmplărie Poliță Plutitoare cu Sertar Ascuns (Industrial), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-65-modern",
    title: "Modern Floating Shelf with Hidden Drawer",
    roTitle: "Poli\u021b\u0103 Plutitoare cu Sertar Ascuns (Modern)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "nuc",
    difficulty: "Mediu",
    timeMinutes: 135,
    defaults: {"length": 600, "width": 200, "height": 80, "thickness": 18},
    description: "Model de tâmplărie Poliță Plutitoare cu Sertar Ascuns (Modern), proiectat pentru execuție din lemn de nuc cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-66-compact",
    title: "Compact Solid Oak Picture Frame 50x70cm",
    roTitle: "Ram\u0103 Masiv\u0103 Tablou 50x70cm (Compact)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 40,
    defaults: {"length": 600, "width": 470, "height": 30, "thickness": 25},
    description: "Model de tâmplărie Ramă Masivă Tablou 50x70cm (Compact), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-66-standard",
    title: "Standard Solid Oak Picture Frame 50x70cm",
    roTitle: "Ram\u0103 Masiv\u0103 Tablou 50x70cm (Standard)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 55,
    defaults: {"length": 750, "width": 550, "height": 30, "thickness": 25},
    description: "Model de tâmplărie Ramă Masivă Tablou 50x70cm (Standard), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-66-xl",
    title: "XL Solid Oak Picture Frame 50x70cm",
    roTitle: "Ram\u0103 Masiv\u0103 Tablou 50x70cm (XL)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 90,
    defaults: {"length": 980, "width": 630, "height": 30, "thickness": 25},
    description: "Model de tâmplărie Ramă Masivă Tablou 50x70cm (XL), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-66-rustic",
    title: "Rustic Solid Oak Picture Frame 50x70cm",
    roTitle: "Ram\u0103 Masiv\u0103 Tablou 50x70cm (Rustic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 75,
    defaults: {"length": 830, "width": 580, "height": 30, "thickness": 25},
    description: "Model de tâmplărie Ramă Masivă Tablou 50x70cm (Rustic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-66-nordic",
    title: "Nordic Solid Oak Picture Frame 50x70cm",
    roTitle: "Ram\u0103 Masiv\u0103 Tablou 50x70cm (Nordic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 710, "width": 520, "height": 30, "thickness": 25},
    description: "Model de tâmplărie Ramă Masivă Tablou 50x70cm (Nordic), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-66-industrial",
    title: "Industrial Solid Oak Picture Frame 50x70cm",
    roTitle: "Ram\u0103 Masiv\u0103 Tablou 50x70cm (Industrial)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "Mediu",
    timeMinutes: 80,
    defaults: {"length": 860, "width": 600, "height": 30, "thickness": 25},
    description: "Model de tâmplărie Ramă Masivă Tablou 50x70cm (Industrial), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-66-modern",
    title: "Modern Solid Oak Picture Frame 50x70cm",
    roTitle: "Ram\u0103 Masiv\u0103 Tablou 50x70cm (Modern)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "board",
    woodDefault: "stejar",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 70,
    defaults: {"length": 750, "width": 550, "height": 30, "thickness": 25},
    description: "Model de tâmplărie Ramă Masivă Tablou 50x70cm (Modern), proiectat pentru execuție din lemn de stejar cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-67-compact",
    title: "Compact Hanging Slat Plant Chandelier",
    roTitle: "Suport Ghivece Suspendat din \u0218ipci (Compact)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 30,
    defaults: {"length": 640, "width": 190, "height": 50, "thickness": 18},
    description: "Model de tâmplărie Suport Ghivece Suspendat din Șipci (Compact), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-67-standard",
    title: "Standard Hanging Slat Plant Chandelier",
    roTitle: "Suport Ghivece Suspendat din \u0218ipci (Standard)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 45,
    defaults: {"length": 800, "width": 220, "height": 60, "thickness": 18},
    description: "Model de tâmplărie Suport Ghivece Suspendat din Șipci (Standard), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-67-xl",
    title: "XL Hanging Slat Plant Chandelier",
    roTitle: "Suport Ghivece Suspendat din \u0218ipci (XL)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 80,
    defaults: {"length": 1040, "width": 250, "height": 60, "thickness": 18},
    description: "Model de tâmplărie Suport Ghivece Suspendat din Șipci (XL), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-67-rustic",
    title: "Rustic Hanging Slat Plant Chandelier",
    roTitle: "Suport Ghivece Suspendat din \u0218ipci (Rustic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 65,
    defaults: {"length": 880, "width": 230, "height": 60, "thickness": 18},
    description: "Model de tâmplărie Suport Ghivece Suspendat din Șipci (Rustic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-67-nordic",
    title: "Nordic Hanging Slat Plant Chandelier",
    roTitle: "Suport Ghivece Suspendat din \u0218ipci (Nordic)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 35,
    defaults: {"length": 760, "width": 210, "height": 60, "thickness": 18},
    description: "Model de tâmplărie Suport Ghivece Suspendat din Șipci (Nordic), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-67-industrial",
    title: "Industrial Hanging Slat Plant Chandelier",
    roTitle: "Suport Ghivece Suspendat din \u0218ipci (Industrial)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "Mediu",
    timeMinutes: 70,
    defaults: {"length": 920, "width": 240, "height": 60, "thickness": 18},
    description: "Model de tâmplărie Suport Ghivece Suspendat din Șipci (Industrial), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-67-modern",
    title: "Modern Hanging Slat Plant Chandelier",
    roTitle: "Suport Ghivece Suspendat din \u0218ipci (Modern)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "shelf",
    woodDefault: "pin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 60,
    defaults: {"length": 800, "width": 220, "height": 60, "thickness": 18},
    description: "Model de tâmplărie Suport Ghivece Suspendat din Șipci (Modern), proiectat pentru execuție din lemn de pin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
  {
    id: "decor-68-compact",
    title: "Compact Desktop Organizer & Pen Caddy",
    roTitle: "Organizator Birou pt Pixuri & Noti\u021be (Compact)",
    category: "Decor",
    roCat: "Art\u0103 & Decora\u021biuni",
    archetype: "tote",
    woodDefault: "frasin",
    difficulty: "\u00cencep\u0103tor",
    timeMinutes: 30,
    defaults: {"length": 240, "width": 100, "height": 80, "thickness": 15},
    description: "Model de tâmplărie Organizator Birou pt Pixuri & Notițe (Compact), proiectat pentru execuție din lemn de frasin cu unelte uzuale de atelier.",
    generateParts(params) {
      const L = params.length || this.defaults.length;
      const W = params.width || this.defaults.width;
      const H = params.height || this.defaults.height;
      const T = params.thickness || this.defaults.thickness;
      return [
        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },
        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },
        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },
        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }
      ];
    }
  },
];

export function getCatalogPlanById(id) {
  return CATALOG_PLANS.find(p => p.id === id) || CATALOG_PLANS[0];
}
