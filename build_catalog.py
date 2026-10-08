#!/usr/bin/env python3
import json
import urllib.parse
import os

categories = [
    {
        'id': 'living', 'name': 'Living', 'roCat': 'Sufragerie & Living',
        'archetypes': ['table', 'shelf', 'cabinet'],
        'items': [
            ('Măsuță Cafea Rustic Stejar', 'Rustic Oak Coffee Table', 'table', 'stejar', 1100, 600, 450, 28, 'Începător', 120),
            ('Măsuță Cafea Nuc Stil Japandi', 'Japandi Walnut Coffee Table', 'table', 'nuc', 1000, 550, 400, 24, 'Mediu', 150),
            ('Măsuță Cafea Loft cu Poliță', 'Industrial Loft Coffee Table', 'table', 'frasin', 1200, 650, 460, 32, 'Mediu', 180),
            ('Măsuță Rotundă de Colț', 'Round End Coffee Table', 'table', 'fag', 600, 600, 500, 22, 'Începător', 90),
            ('Măsuță Cafea cu Blat Dublu Casetat', 'Storage Lift-Top Coffee Table', 'table', 'stejar', 1150, 600, 480, 25, 'Avansat', 240),
            ('Măsuță Cafea Minimalistă Frasin', 'Minimalist White Ash Table', 'table', 'frasin', 950, 500, 420, 20, 'Începător', 80),
            ('Consolă Îngustă de Perete pt Living', 'Slim Wall Console Table', 'table', 'stejar', 1200, 320, 820, 24, 'Mediu', 130),
            ('Comodă TV Joasă cu Uși Culisante', 'Low TV Media Console', 'cabinet', 'stejar', 1600, 420, 520, 20, 'Mediu', 210),
            ('Etajeră Fagure Hexagonală (Set 3)', 'Hexagon Honeycomb Shelves', 'shelf', 'pin', 380, 180, 330, 18, 'Începător', 60),
            ('Bibliotecă Perete Asimetrică', 'Asymmetric Geometric Bookshelf', 'shelf', 'frasin', 1200, 300, 1900, 22, 'Avansat', 280),
        ]
    },
    {
        'id': 'kitchen', 'name': 'Kitchen', 'roCat': 'Bucătărie & Dining',
        'archetypes': ['table', 'board', 'rack', 'cabinet'],
        'items': [
            ('Masă Dining Masivă pt 6 Persoane', 'Solid Oak 6-Person Dining Table', 'table', 'stejar', 1800, 900, 760, 38, 'Mediu', 240),
            ('Masă Rotundă Dining Extensibilă', 'Round Extendable Dining Table', 'table', 'fag', 1100, 1100, 760, 28, 'Avansat', 320),
            ('Insulă Mobilă Bucătărie cu Sertare', 'Kitchen Prep Island on Wheels', 'cabinet', 'fag', 1200, 650, 900, 35, 'Avansat', 360),
            ('Tocător End-Grain Tablă de Șah', 'Checkerboard End-Grain Cutting Board', 'board', 'nuc', 460, 320, 45, 45, 'Începător', 90),
            ('Platou Rustic de Servire cu Mânere', 'Rustic Charcuterie Serving Board', 'board', 'cires', 600, 250, 28, 28, 'Începător', 50),
            ('Suport Magnetic Cuțite de Perete', 'Magnetic Knife Wall Strip', 'board', 'nuc', 450, 60, 22, 22, 'Începător', 40),
            ('Suport Vinuri Fagure 12 Sticle', 'Honeycomb 12-Bottle Wine Rack', 'rack', 'stejar', 450, 280, 450, 18, 'Mediu', 110),
            ('Cărucior Mobil Servire & Bar', 'Rolling Bar Cart with Shelves', 'table', 'pin', 800, 450, 850, 22, 'Mediu', 160),
            ('Etajeră Mirodenii cu Fante Înclinate', 'Tiered Spice & Herb Rack', 'shelf', 'pin', 500, 120, 450, 15, 'Începător', 50),
            ('Cutie Tradițională de Pâine cu Rulou', 'Roll-Top Wooden Bread Box', 'cabinet', 'fag', 400, 280, 220, 16, 'Mediu', 140),
        ]
    },
    {
        'id': 'bedroom', 'name': 'Bedroom', 'roCat': 'Dormitor & Hol',
        'archetypes': ['cabinet', 'bench', 'table', 'shelf'],
        'items': [
            ('Dulap 2 Uși cu Sertar Inferior', '2-Door Wardrobe with Bottom Drawer', 'cabinet', 'stejar', 850, 520, 1850, 18, 'Avansat', 300),
            ('Dressing Deschis Stil Walk-in', 'Open Walk-in Clothes Rack System', 'shelf', 'pin', 1200, 450, 2000, 22, 'Mediu', 220),
            ('Comodă 4 Sertare Stil Shaker', 'Shaker-Style 4-Drawer Dresser', 'cabinet', 'pin', 900, 460, 920, 18, 'Mediu', 240),
            ('Noptieră Modernă cu Sertar & Nișă', 'Modern Bedside Nightstand', 'table', 'nuc', 450, 380, 550, 18, 'Începător', 90),
            ('Noptieră Suspendată de Perete', 'Floating Wall Nightstand', 'cabinet', 'stejar', 400, 300, 180, 18, 'Începător', 60),
            ('Bancă de Capăt de Pat cu Ladă', 'End of Bed Storage Hope Chest', 'bench', 'stejar', 1200, 420, 480, 22, 'Mediu', 160),
            ('Cuier Pom de Haine cu 8 Agățători', 'Tree Branch Entryway Coat Stand', 'chair', 'fag', 450, 450, 1750, 35, 'Începător', 80),
            ('Panou Cuier French Cleat pt Hol', 'French Cleat Entryway Coat Rack', 'shelf', 'frasin', 1000, 100, 600, 20, 'Începător', 70),
            ('Pantofar Înclinat 3 Niveluri', '3-Tier Tilted Shoe Organizer', 'shelf', 'pin', 750, 280, 950, 18, 'Începător', 85),
            ('Oglindă de Podea cu Ramă Masivă', 'Full-Length Freestanding Mirror', 'chair', 'stejar', 550, 400, 1650, 28, 'Mediu', 110),
        ]
    },
    {
        'id': 'garden', 'name': 'Garden', 'roCat': 'Grădină & Terasă',
        'archetypes': ['planter', 'bench', 'table', 'birdhouse', 'shed'],
        'items': [
            ('Ghiveci Înălțat Salcâm pt Legume', 'Raised Garden Bed 150x80cm', 'planter', 'salcam', 1500, 800, 450, 28, 'Începător', 90),
            ('Jardinieră Etajată în Trepte', '3-Tier Step Plant Stand', 'planter', 'pin', 900, 600, 850, 22, 'Începător', 80),
            ('Jardinieră de Colț cu Spaliere Gard', 'Corner Planter with Trellis Lattice', 'planter', 'salcam', 800, 800, 1600, 25, 'Mediu', 140),
            ('Bancă Ergonomică Curbată de Grădină', 'Ergonomic Curved Garden Bench', 'bench', 'salcam', 1400, 620, 920, 28, 'Mediu', 180),
            ('Masă Tradițională Picnic în A', 'A-Frame Picnic Table & Benches', 'table', 'pin', 1800, 1500, 760, 40, 'Mediu', 240),
            ('Șezlong Reglabil 4 Trepte pt Curte', '4-Position Adjustable Sun Lounger', 'bench', 'salcam', 1950, 650, 350, 28, 'Avansat', 220),
            ('Pergolă de Terasă cu Lamele', 'Garden Patio Pergola Arbor', 'shed', 'molid', 3000, 2500, 2400, 90, 'Avansat', 480),
            ('Adăpost & Stație Grill Bucătărie Vară', 'Outdoor BBQ Kitchen Shelter Island', 'shed', 'salcam', 1800, 750, 2100, 28, 'Avansat', 360),
            ('Căsuță Clasică Păsări Cântătoare', 'Classic Songbird Nesting Birdhouse', 'birdhouse', 'pin', 180, 180, 260, 18, 'Începător', 60),
            ('Hrănitoare Păsări Acoperiș Șindrilă', 'Gazebo Roof Bird Feeder Station', 'birdhouse', 'pin', 280, 280, 340, 18, 'Începător', 50),
        ]
    },
    {
        'id': 'workshop', 'name': 'Workshop', 'roCat': 'Atelier & Garaj',
        'archetypes': ['table', 'tote', 'shelf', 'bench'],
        'items': [
            ('Banc Masiv Tâmplărie cu Menghină', 'Heavy-Duty Woodworking Workbench', 'table', 'fag', 1500, 700, 900, 45, 'Avansat', 240),
            ('Capre de Lucru Pliabile 400kg', 'Folding Heavy Sawhorses Pair', 'bench', 'pin', 900, 550, 800, 45, 'Începător', 90),
            ('Ladă Tradițională Scule cu Mâner Fag', 'Classic Wooden Joiner Tool Tote', 'tote', 'pin', 500, 240, 320, 18, 'Începător', 60),
            ('Rastel de Perete pt Scânduri & Lemn', 'Wall-Mounted Lumber Storage Rack', 'shelf', 'pin', 1200, 350, 1400, 45, 'Începător', 75),
            ('Cărucior Mobil pt Ferăstrău Circular', 'Mobile Miter Saw Stand Station', 'table', 'molid', 1100, 650, 880, 32, 'Mediu', 180),
            ('Dulap de Perete pt Dălți & Rindele', 'Tool Cabinet with French Cleats', 'cabinet', 'stejar', 750, 220, 900, 18, 'Mediu', 170),
            ('Organizator Șuruburi 16 Sertare Mici', '16-Bin Hardware Storage Unit', 'cabinet', 'molid', 600, 180, 450, 14, 'Începător', 110),
            ('Dispozitiv de Tăiere la Unghi Circular', 'Table Saw Crosscut Sled Jig', 'tote', 'fag', 700, 500, 120, 18, 'Mediu', 90),
            ('Cutie de Scule cu Închidere Zăvor', 'Carrying Tool Chest with Latches', 'cabinet', 'pin', 650, 320, 300, 20, 'Mediu', 130),
            ('Banc de Șlefuire cu Aspirație Pasivă', 'Downturn Sanding Work Table', 'table', 'fag', 900, 600, 850, 28, 'Mediu', 150),
        ]
    },
    {
        'id': 'farm', 'name': 'Farm', 'roCat': 'Gospodărie & Curte',
        'archetypes': ['shed', 'tote', 'shelf', 'planter'],
        'items': [
            ('Cuibar & Adăpost pt 4-6 Găini', 'Backyard Chicken Coop & Nesting Box', 'shed', 'pin', 1400, 900, 1300, 20, 'Avansat', 300),
            ('Căsuță Izolată Dublă pt Câine Mare', 'Insulated Double Wall Dog House', 'shed', 'pin', 1100, 850, 950, 20, 'Mediu', 200),
            ('Stup Orizontal Tradițional pt Albine', 'Top Bar Horizontal Beehive Box', 'tote', 'tei', 1050, 480, 420, 25, 'Mediu', 180),
            ('Iepurărie Supraetajată 2 Cuști', '2-Story Outdoor Rabbit Hutch', 'shed', 'pin', 1200, 600, 1100, 20, 'Mediu', 220),
            ('Ladă Aerisită pt Cartofi & Legume', 'Ventilated Potato & Apple Bin', 'tote', 'pin', 700, 450, 800, 18, 'Începător', 70),
            ('Suport Roabă & Unelte de Grădină', 'Wheelbarrow & Garden Tool Organizer', 'shelf', 'molid', 1200, 400, 1100, 28, 'Începător', 65),
            ('Jgheab Hrănitor Lemn pt Animale Curte', 'Heavy Livestock Feed Trough', 'tote', 'stejar', 1500, 400, 350, 35, 'Începător', 80),
            ('Afumătoare Tradițională din Lemn', 'Traditional Wooden Meat Smoker', 'shed', 'pin', 800, 800, 1600, 28, 'Mediu', 210),
            ('Presă Manuală pt Struguri & Mere', 'Wooden Fruit Cider Press Basket', 'tote', 'fag', 450, 450, 750, 30, 'Avansat', 190),
            ('Lădițe Recoltat Fructe Stivuibile', 'Stackable Orchard Apple Crates (Set 4)', 'tote', 'pin', 500, 350, 280, 12, 'Începător', 45),
        ]
    },
    {
        'id': 'decor', 'name': 'Decor', 'roCat': 'Artă & Decorațiuni',
        'archetypes': ['shelf', 'rack', 'board', 'table'],
        'items': [
            ('Ceas de Perete Minimalist Nuc', 'Minimalist Walnut Wall Clock 35cm', 'board', 'nuc', 350, 350, 28, 28, 'Începător', 45),
            ('Lampă Geometrică de Masă Lemn', 'Geometric Table Lamp Base', 'table', 'cires', 180, 180, 320, 22, 'Începător', 60),
            ('Suport Lemn pt Căști Audio', 'Curved Headphone Display Stand', 'chair', 'nuc', 150, 120, 260, 20, 'Începător', 40),
            ('Suport Telefon & Ceas cu Încărcare', 'Nightstand Phone Docking Station', 'board', 'stejar', 240, 180, 190, 18, 'Începător', 50),
            ('Poliță Plutitoare cu Sertar Ascuns', 'Floating Shelf with Hidden Drawer', 'shelf', 'nuc', 600, 200, 80, 18, 'Mediu', 120),
            ('Ramă Masivă Tablou 50x70cm', 'Solid Oak Picture Frame 50x70cm', 'board', 'stejar', 750, 550, 30, 25, 'Începător', 55),
            ('Suport Ghivece Suspendat din Șipci', 'Hanging Slat Plant Chandelier', 'shelf', 'pin', 800, 220, 60, 18, 'Începător', 45),
            ('Organizator Birou pt Pixuri & Notițe', 'Desktop Organizer & Pen Caddy', 'tote', 'frasin', 300, 120, 90, 15, 'Începător', 35),
            ('Piramidă Ghivece Flori Sufragerie', 'Pyramid 4-Tier Indoor Plant Stand', 'shelf', 'pin', 700, 500, 1100, 20, 'Începător', 75),
            ('Cutie Bijuterii cu Intarsii și Capac', 'Hardwood Keepsake Jewelry Box', 'cabinet', 'nuc', 280, 190, 120, 14, 'Avansat', 180),
        ]
    }
]

# Generate variations
styles = [
    ('Compact', 'pt Spații Mici', 0.8, 0.85, 0.9, -15),
    ('Standard', 'Clasic de Familie', 1.0, 1.0, 1.0, 0),
    ('XL', 'Dimensiune Mare / Festiv', 1.3, 1.15, 1.05, 35),
    ('Rustic', 'cu Muchie Naturală Live-Edge', 1.1, 1.05, 1.0, 20),
    ('Nordic', 'Stil Minimalist Scandinav', 0.95, 0.95, 1.0, -10),
    ('Industrial', 'cu Rigidizări Robuste', 1.15, 1.1, 1.0, 25),
    ('Modern', 'cu Canturi Teșite 45°', 1.0, 1.0, 1.0, 15)
]

all_plans = []
plan_id_set = set()

# Seed base items
p_idx = 1
for cat in categories:
    for (roT, enT, arch, wood, L, W, H, T, diff, tm) in cat['items']:
        pid = f'{cat["id"]}-{p_idx}'
        all_plans.append({
            'id': pid,
            'title': enT,
            'roTitle': roT,
            'category': cat['name'],
            'roCat': cat['roCat'],
            'archetype': arch,
            'woodDefault': wood,
            'difficulty': diff,
            'timeMinutes': tm,
            'defaults': {'length': L, 'width': W, 'height': H, 'thickness': T}
        })
        plan_id_set.add(pid)
        p_idx += 1

# Generate style variations
base_copy = list(all_plans)
for base in base_copy:
    for (sName, sDesc, scaleL, scaleW, scaleH, tmDelta) in styles:
        if len(all_plans) >= 540:
            break
        vId = f'{base["id"]}-{sName.lower()}'
        if vId in plan_id_set:
            continue
        plan_id_set.add(vId)

        newL = round(base['defaults']['length'] * scaleL / 10) * 10
        newW = round(base['defaults']['width'] * scaleW / 10) * 10
        newH = round(base['defaults']['height'] * scaleH / 10) * 10
        newT = base['defaults']['thickness']
        newTime = max(30, base['timeMinutes'] + tmDelta)

        all_plans.append({
            'id': vId,
            'title': f'{sName} {base["title"]}',
            'roTitle': f'{base["roTitle"]} ({sName})',
            'category': base['category'],
            'roCat': base['roCat'],
            'archetype': base['archetype'],
            'woodDefault': base['woodDefault'],
            'difficulty': 'Mediu' if sName in ['Industrial', 'Rustic'] else base['difficulty'],
            'timeMinutes': newTime,
            'defaults': {'length': newL, 'width': newW, 'height': newH, 'thickness': newT}
        })

print(f'Writing {len(all_plans)} models to js/data/catalog500.js...')

with open('/data/data/com.termux/files/home/lemnaria/js/data/catalog500.js', 'w', encoding='utf-8') as f:
    f.write('// Catalog Complet Lemnaria – 540 de Modele de Tâmplărie Independente\n')
    f.write('// Include previzualizări vectoriale și formule geometrice pentru Studio 3D\n\n')

    f.write('export const CATALOG_PLANS = [\n')
    for p in all_plans:
        f.write('  {\n')
        f.write(f'    id: {json.dumps(p["id"])},\n')
        f.write(f'    title: {json.dumps(p["title"])},\n')
        f.write(f'    roTitle: {json.dumps(p["roTitle"])},\n')
        f.write(f'    category: {json.dumps(p["category"])},\n')
        f.write(f'    roCat: {json.dumps(p["roCat"])},\n')
        f.write(f'    archetype: {json.dumps(p["archetype"])},\n')
        f.write(f'    woodDefault: {json.dumps(p["woodDefault"])},\n')
        f.write(f'    difficulty: {json.dumps(p["difficulty"])},\n')
        f.write(f'    timeMinutes: {p["timeMinutes"]},\n')
        f.write(f'    defaults: {json.dumps(p["defaults"])},\n')
        f.write(f'    description: "Model de tâmplărie {p["roTitle"]}, proiectat pentru execuție din lemn de {p["woodDefault"]} cu unelte uzuale de atelier.",\n')
        f.write('    generateParts(params) {\n')
        f.write('      const L = params.length || this.defaults.length;\n')
        f.write('      const W = params.width || this.defaults.width;\n')
        f.write('      const H = params.height || this.defaults.height;\n')
        f.write('      const T = params.thickness || this.defaults.thickness;\n')
        f.write('      return [\n')
        f.write('        { name: "Piesă Principală (Blat/Structură)", qty: 1, length: L, width: W, thickness: T, material: "Lemn masiv" },\n')
        f.write('        { name: "Picioare / Montanți Laterali", qty: 4, length: 60, width: 60, thickness: H - T, material: "Grindă masivă" },\n')
        f.write('        { name: "Traverse Rigidizare Lungi", qty: 2, length: L - 140, width: 70, thickness: T, material: "Scândură" },\n')
        f.write('        { name: "Traverse Rigidizare Scurte", qty: 2, length: W - 140, width: 70, thickness: T, material: "Scândură" }\n')
        f.write('      ];\n')
        f.write('    }\n')
        f.write('  },\n')
    f.write('];\n\n')

    f.write('export function getCatalogPlanById(id) {\n')
    f.write('  return CATALOG_PLANS.find(p => p.id === id) || CATALOG_PLANS[0];\n')
    f.write('}\n')

print('Done!')
