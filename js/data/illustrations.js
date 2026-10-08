// Generator Ilustrații Tehnice Vexoriale SVG pentru Modele de Tâmplărie
// Garantează previzualizări 100% corecte, offline, fără imagini greșite sau rupte

function encodeSvg(svg) {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg.trim());
}

export const PROJECT_SVGS = {
  // 1. Tavă încălțăminte cu șipci
  'slatted-boot-tray': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
      <defs>
        <linearGradient id="bg_tray" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5efe6"/><stop offset="100%" stop-color="#dfd3c3"/></linearGradient>
        <linearGradient id="wood_dark" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#9e6638"/><stop offset="100%" stop-color="#7a4b22"/></linearGradient>
        <linearGradient id="wood_mid" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c98a52"/><stop offset="100%" stop-color="#aa6f3b"/></linearGradient>
        <linearGradient id="wood_light" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dfa46e"/><stop offset="100%" stop-color="#c68b55"/></linearGradient>
      </defs>
      <rect width="600" height="450" fill="url(#bg_tray)"/>
      <ellipse cx="300" cy="360" rx="240" ry="40" fill="rgba(0,0,0,0.12)"/>
      <!-- Cadru spate -->
      <polygon points="120,220 440,160 480,180 160,240" fill="url(#wood_dark)"/>
      <!-- Șipci fund aerisite -->
      <g fill="url(#wood_mid)" stroke="#683d18" stroke-width="2">
        <polygon points="175,250 435,200 445,215 185,265"/>
        <polygon points="195,270 445,220 455,235 205,285"/>
        <polygon points="215,290 455,240 465,255 225,305"/>
        <polygon points="235,310 465,260 475,275 245,325"/>
      </g>
      <!-- Capăt stânga -->
      <polygon points="120,220 160,240 180,310 140,290" fill="url(#wood_mid)" stroke="#532d0f" stroke-width="2"/>
      <!-- Capăt dreapta -->
      <polygon points="440,160 480,180 500,250 460,230" fill="url(#wood_dark)" stroke="#532d0f" stroke-width="2"/>
      <!-- Fațadă lungă -->
      <polygon points="140,290 460,230 480,270 160,330" fill="url(#wood_light)" stroke="#532d0f" stroke-width="3"/>
      <!-- Mânere laterale decupate -->
      <ellipse cx="310" cy="295" rx="35" ry="10" fill="#241508" opacity="0.65"/>
      <text x="300" y="395" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Tavă din Șipci Lemn Masiv</text>
    </svg>
  `),

  // 2. Bancă de hol cu pantofar
  'shoe-storage-bench': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f4ede2"/>
      <ellipse cx="300" cy="380" rx="230" ry="35" fill="rgba(0,0,0,0.12)"/>
      <!-- 4 Picioare -->
      <g fill="#7d4e28" stroke="#48270d" stroke-width="2">
        <rect x="110" y="190" width="30" height="180" rx="3"/>
        <rect x="460" y="190" width="30" height="180" rx="3"/>
        <rect x="160" y="160" width="25" height="170" rx="3" opacity="0.8"/>
        <rect x="430" y="160" width="25" height="170" rx="3" opacity="0.8"/>
      </g>
      <!-- Polițe pantofi șipci duble -->
      <g fill="#bf834c" stroke="#5a3111" stroke-width="2">
        <rect x="120" y="270" width="360" height="16" rx="2"/>
        <rect x="120" y="325" width="360" height="16" rx="2"/>
      </g>
      <!-- Șezut masiv lemn -->
      <polygon points="90,170 140,130 510,130 460,170" fill="#d89758" stroke="#5a3111" stroke-width="3"/>
      <rect x="90" y="170" width="370" height="30" rx="4" fill="#bd7e41" stroke="#5a3111" stroke-width="3"/>
      <!-- Pernă șezut textil gri/bej -->
      <polygon points="100,165 145,135 495,135 450,165" fill="#756b62"/>
      <rect x="100" y="152" width="350" height="16" rx="6" fill="#8f8379" stroke="#524a44" stroke-width="2"/>
      <text x="300" y="420" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Bancă Hol cu Pantofar Integrat</text>
    </svg>
  `),

  // 3. Măsuță de cafea
  'coffee-table': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f4ede4"/>
      <ellipse cx="300" cy="365" rx="220" ry="35" fill="rgba(0,0,0,0.12)"/>
      <!-- Picioare masive conice -->
      <g fill="#8f592d" stroke="#48270d" stroke-width="2">
        <polygon points="130,195 160,195 150,345 125,345"/>
        <polygon points="440,195 470,195 475,345 450,345"/>
        <polygon points="180,165 205,165 200,295 180,295" opacity="0.8"/>
        <polygon points="395,165 420,165 415,295 395,295" opacity="0.8"/>
      </g>
      <!-- Traverse sub blat -->
      <rect x="150" y="190" width="300" height="30" fill="#a86d3b" stroke="#5a3111" stroke-width="2"/>
      <!-- Poliță inferioară depozitare reviste -->
      <polygon points="160,285 210,250 430,250 380,285" fill="#c48a52" stroke="#5a3111" stroke-width="2"/>
      <!-- Blat masiv stejar / nuc cu fibră caldă -->
      <polygon points="90,175 160,115 510,115 440,175" fill="#d9995b" stroke="#502809" stroke-width="3"/>
      <rect x="90" y="175" width="350" height="24" rx="3" fill="#be7f42" stroke="#502809" stroke-width="3"/>
      <!-- Fibră decorativă -->
      <line x1="120" y1="165" x2="420" y2="128" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>
      <line x1="140" y1="185" x2="400" y2="185" stroke="rgba(0,0,0,0.15)" stroke-width="2"/>
      <text x="300" y="410" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Măsuță de Cafea Stejar Masiv</text>
    </svg>
  `),

  // 4. Căsuță păsări
  'classic-birdhouse': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f2ede4"/>
      <ellipse cx="300" cy="400" rx="140" ry="25" fill="rgba(0,0,0,0.12)"/>
      <!-- Stâlp sau suport spate prelungit -->
      <rect x="280" y="60" width="40" height="340" fill="#9c6334" stroke="#4a2a11" stroke-width="2"/>
      <!-- Corp căsuță pătrat -->
      <polygon points="210,180 390,180 370,350 230,350" fill="#d19256" stroke="#4a2a11" stroke-width="3"/>
      <!-- Fronton triunghiular -->
      <polygon points="210,180 300,90 390,180" fill="#dfa468" stroke="#4a2a11" stroke-width="3"/>
      <!-- Acoperiș 2 ape proeminent -->
      <polygon points="175,185 300,75 320,85 195,195" fill="#a44622" stroke="#41180a" stroke-width="3"/>
      <polygon points="425,185 300,75 280,85 405,195" fill="#c3562b" stroke="#41180a" stroke-width="3"/>
      <!-- Orificiu circular zbor 32mm -->
      <circle cx="300" cy="225" r="32" fill="#20150d" stroke="#5a3111" stroke-width="4"/>
      <ellipse cx="296" cy="220" rx="26" ry="26" fill="#0d0805"/>
      <!-- Stinghie din lemn fag rotund -->
      <circle cx="300" cy="285" r="7" fill="#6d421e"/>
      <line x1="300" y1="285" x2="300" y2="305" stroke="#ecc79a" stroke-width="9" stroke-linecap="round"/>
      <text x="300" y="425" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Căsuță Clasică pentru Păsări (32mm)</text>
    </svg>
  `),

  // 5. Banc atelier greu
  'workbench': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f1ebe2"/>
      <ellipse cx="300" cy="380" rx="240" ry="35" fill="rgba(0,0,0,0.14)"/>
      <!-- 4 Picioare grele 80x80mm -->
      <g fill="#7a4b22" stroke="#3b1f07" stroke-width="3">
        <rect x="100" y="160" width="45" height="200" rx="4"/>
        <rect x="455" y="160" width="45" height="200" rx="4"/>
        <rect x="155" y="130" width="40" height="190" rx="4" opacity="0.8"/>
        <rect x="420" y="130" width="40" height="190" rx="4" opacity="0.8"/>
      </g>
      <!-- H-stretchers traverse inferioare duble -->
      <rect x="120" y="290" width="360" height="35" fill="#99602e" stroke="#3b1f07" stroke-width="2"/>
      <rect x="120" y="240" width="360" height="15" fill="#b37841" stroke="#3b1f07" stroke-width="2"/>
      <!-- Blat gros tip butcher-block laminat 50mm -->
      <polygon points="70,150 140,80 530,80 460,150" fill="#d99f64" stroke="#3b1f07" stroke-width="4"/>
      <rect x="70" y="150" width="390" height="45" rx="3" fill="#be8144" stroke="#3b1f07" stroke-width="4"/>
      <!-- Menghină de banc integrată pe stânga -->
      <rect x="60" y="152" width="22" height="40" rx="3" fill="#54595e" stroke="#222" stroke-width="2"/>
      <circle cx="71" cy="172" r="7" fill="#888"/>
      <!-- Găuri câini de banc (bench dogs) -->
      <circle cx="160" cy="120" r="5" fill="#4a2e16"/>
      <circle cx="220" cy="115" r="5" fill="#4a2e16"/>
      <circle cx="280" cy="110" r="5" fill="#4a2e16"/>
      <circle cx="340" cy="105" r="5" fill="#4a2e16"/>
      <circle cx="400" cy="100" r="5" fill="#4a2e16"/>
      <text x="300" y="415" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Banc Robust Atelier (Heavy-Duty)</text>
    </svg>
  `),

  // 6. Bibliotecă modulară
  'modular-bookshelf': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f4eee6"/>
      <ellipse cx="300" cy="405" rx="190" ry="25" fill="rgba(0,0,0,0.12)"/>
      <!-- Carcasă corp înalt -->
      <g fill="#c98e55" stroke="#502f12" stroke-width="3">
        <!-- Montant stânga -->
        <rect x="160" y="50" width="22" height="340" rx="3"/>
        <!-- Montant dreapta -->
        <rect x="418" y="50" width="22" height="340" rx="3"/>
        <!-- Capac sus -->
        <rect x="155" y="45" width="290" height="22" rx="3" fill="#dfa46b"/>
        <!-- Bază jos -->
        <rect x="155" y="365" width="290" height="25" rx="3" fill="#b87b41"/>
      </g>
      <!-- Polițe interioare cu cărți colorate -->
      <g fill="#dba169" stroke="#502f12" stroke-width="2">
        <rect x="182" y="125" width="236" height="18"/>
        <rect x="182" y="195" width="236" height="18"/>
        <rect x="182" y="265" width="236" height="18"/>
        <rect x="182" y="330" width="236" height="18"/>
      </g>
      <!-- Cărți stilizate pe polițe -->
      <rect x="195" y="75" width="16" height="50" fill="#c54434" rx="2"/>
      <rect x="213" y="70" width="22" height="55" fill="#2d6cb5" rx="2"/>
      <rect x="237" y="80" width="18" height="45" fill="#2e9d5b" rx="2"/>
      <rect x="360" y="75" width="26" height="50" fill="#d9822b" rx="2"/>
      <rect x="195" y="145" width="25" height="50" fill="#445566" rx="2"/>
      <rect x="222" y="140" width="20" height="55" fill="#884488" rx="2"/>
      <rect x="340" y="215" width="55" height="50" fill="#b06530" rx="2"/>
      <text x="300" y="430" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Bibliotecă Stil Nordic cu Polițe</text>
    </svg>
  `),

  // 7. Dulap / Dressing Customizabil
  'custom-cabinet': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f4eee6"/>
      <ellipse cx="300" cy="405" rx="200" ry="25" fill="rgba(0,0,0,0.12)"/>
      <!-- Corp principal carcasă -->
      <rect x="160" y="55" width="280" height="330" rx="4" fill="#deb083" stroke="#48270b" stroke-width="3"/>
      <!-- Ușă stânga cu panou adâncit -->
      <rect x="166" y="62" width="132" height="316" rx="3" fill="#f3cb9f" stroke="#7e4a1c" stroke-width="2"/>
      <rect x="178" y="76" width="108" height="288" rx="2" fill="#deb083" stroke="#aa6f37" stroke-width="2"/>
      <!-- Mâner stânga bară verticală -->
      <rect x="282" y="195" width="6" height="40" rx="2" fill="#1f1a16"/>
      <!-- Ușă dreapta -->
      <rect x="302" y="62" width="132" height="316" rx="3" fill="#f3cb9f" stroke="#7e4a1c" stroke-width="2"/>
      <rect x="314" y="76" width="108" height="288" rx="2" fill="#deb083" stroke="#aa6f37" stroke-width="2"/>
      <!-- Mâner dreapta -->
      <rect x="312" y="195" width="6" height="40" rx="2" fill="#1f1a16"/>
      <!-- Picioare soclu negre reglabile -->
      <rect x="175" y="385" width="20" height="18" rx="2" fill="#222"/>
      <rect x="405" y="385" width="20" height="18" rx="2" fill="#222"/>
      <text x="300" y="430" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Dulap Modular 2 Uși cu Îmbinări</text>
    </svg>
  `),

  // 8. Bucătărie de vară & grill shelter
  'outdoor-bbq-station': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f2ebe0"/>
      <ellipse cx="300" cy="400" rx="240" ry="30" fill="rgba(0,0,0,0.12)"/>
      <!-- Stâlpi verticali masivi 90x90 -->
      <g fill="#8f5b2d" stroke="#48270b" stroke-width="3">
        <rect x="110" y="120" width="30" height="270" rx="3"/>
        <rect x="460" y="120" width="30" height="270" rx="3"/>
        <rect x="150" y="80" width="26" height="300" rx="3" opacity="0.8"/>
        <rect x="424" y="80" width="26" height="300" rx="3" opacity="0.8"/>
      </g>
      <!-- Șipci perete spate aerisite orizontale -->
      <g fill="#c98a52" stroke="#5a3111" stroke-width="1.5">
        <rect x="155" y="110" width="290" height="12"/>
        <rect x="155" y="130" width="290" height="12"/>
        <rect x="155" y="150" width="290" height="12"/>
        <rect x="155" y="170" width="290" height="12"/>
        <rect x="155" y="190" width="290" height="12"/>
        <rect x="155" y="210" width="290" height="12"/>
      </g>
      <!-- Acoperiș înclinat cu streașină -->
      <polygon points="80,120 120,60 510,60 470,120" fill="#5a3314" stroke="#261203" stroke-width="3"/>
      <!-- Blat de lucru masiv -->
      <polygon points="120,270 170,225 450,225 400,270" fill="#dba169" stroke="#48270b" stroke-width="2"/>
      <rect x="120" y="270" width="360" height="35" rx="3" fill="#be7f44" stroke="#48270b" stroke-width="3"/>
      <!-- Grătar inox încastrat pe blat -->
      <rect x="240" y="235" width="120" height="30" rx="4" fill="#6c757d" stroke="#333" stroke-width="2"/>
      <rect x="250" y="215" width="100" height="22" rx="10" fill="#495057"/>
      <!-- Dulap jos sub blat cu uși -->
      <rect x="140" y="305" width="320" height="85" fill="#a46937" stroke="#48270b" stroke-width="2"/>
      <line x1="300" y1="305" x2="300" y2="390" stroke="#3b1f07" stroke-width="3"/>
      <text x="300" y="425" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Bucătărie Grădină & Adăpost BBQ</text>
    </svg>
  `),

  // 9. Ghiveci înălțat grădină (Raised Garden Bed)
  'raised-garden-bed': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f0eae1"/>
      <ellipse cx="300" cy="380" rx="230" ry="35" fill="rgba(0,0,0,0.12)"/>
      <!-- Cutie scânduri suprapuse cu picioare colț -->
      <g fill="#9b612e" stroke="#48270b" stroke-width="2.5">
        <rect x="110" y="180" width="32" height="190" rx="3"/>
        <rect x="460" y="180" width="32" height="190" rx="3"/>
      </g>
      <!-- Scânduri laterale lungi -->
      <g fill="#c98a50" stroke="#48270b" stroke-width="2">
        <rect x="135" y="195" width="330" height="42" rx="2"/>
        <rect x="135" y="242" width="330" height="42" rx="2"/>
        <rect x="135" y="289" width="330" height="42" rx="2"/>
      </g>
      <!-- Pământ roditor la interior -->
      <polygon points="120,195 180,140 440,140 470,195" fill="#3d2817" stroke="#221408" stroke-width="2"/>
      <!-- Plante verzi care cresc -->
      <path d="M 230,150 Q 220,110 240,95 Q 260,110 250,150 Z" fill="#38a169"/>
      <path d="M 290,150 Q 280,100 300,80 Q 320,100 310,150 Z" fill="#2f855a"/>
      <path d="M 350,150 Q 340,115 360,100 Q 380,115 370,150 Z" fill="#38a169"/>
      <circle cx="300" cy="80" r="8" fill="#e53e3e"/>
      <text x="300" y="415" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Ghiveci Înălțat din Lemn de Grădină</text>
    </svg>
  `),

  // 10. Bancă ergonomică de grădină
  'garden-bench': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f2ede4"/>
      <ellipse cx="300" cy="385" rx="220" ry="30" fill="rgba(0,0,0,0.12)"/>
      <!-- Picioare laterale curbate -->
      <g fill="#7e4c22" stroke="#3b1f07" stroke-width="3">
        <path d="M 120,230 L 140,370 L 165,370 L 150,230 Z"/>
        <path d="M 440,230 L 460,370 L 485,370 L 470,230 Z"/>
        <!-- Montanți spătar înclinați la 105 grade -->
        <path d="M 115,240 L 95,100 L 120,100 L 145,240 Z"/>
        <path d="M 435,240 L 415,100 L 440,100 L 465,240 Z"/>
      </g>
      <!-- Șipci spătar orizontale -->
      <g fill="#c98a52" stroke="#48270b" stroke-width="2">
        <rect x="110" y="110" width="340" height="18" rx="3"/>
        <rect x="115" y="140" width="340" height="18" rx="3"/>
        <rect x="120" y="170" width="340" height="18" rx="3"/>
        <!-- Șipci șezut curbate -->
        <rect x="130" y="235" width="340" height="18" rx="3"/>
        <rect x="135" y="260" width="340" height="18" rx="3"/>
        <rect x="140" y="285" width="340" height="18" rx="3"/>
      </g>
      <!-- Brațe laterale curbate (Armrests) -->
      <rect x="110" y="200" width="60" height="16" rx="6" fill="#a46937" stroke="#3b1f07" stroke-width="2"/>
      <rect x="430" y="200" width="60" height="16" rx="6" fill="#a46937" stroke="#3b1f07" stroke-width="2"/>
      <text x="300" y="420" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Bancă Ergonomică de Grădină</text>
    </svg>
  `),

  // 11. Masă de picnic cu bănci integrate
  'picnic-table': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f4eee6"/>
      <ellipse cx="300" cy="385" rx="240" ry="35" fill="rgba(0,0,0,0.12)"/>
      <!-- Picioare în X / A-frame -->
      <g fill="#8f592d" stroke="#48270b" stroke-width="3">
        <polygon points="120,350 210,180 235,180 145,350"/>
        <polygon points="210,350 120,180 145,180 235,350"/>
        <polygon points="440,350 350,180 375,180 465,350"/>
        <polygon points="350,350 440,180 465,180 375,350"/>
      </g>
      <!-- Grinzi transversale suport bănci -->
      <rect x="70" y="270" width="460" height="24" rx="3" fill="#a46a38" stroke="#48270b" stroke-width="2"/>
      <!-- Bănci șezut stânga/dreapta -->
      <polygon points="60,265 110,215 210,215 160,265" fill="#c98a52" stroke="#48270b" stroke-width="2"/>
      <polygon points="390,265 440,215 540,215 490,265" fill="#c98a52" stroke="#48270b" stroke-width="2"/>
      <!-- Blat masă central scânduri masive -->
      <polygon points="160,175 230,105 440,105 370,175" fill="#dfa46e" stroke="#48270b" stroke-width="3"/>
      <rect x="160" y="175" width="240" height="24" rx="3" fill="#bd7e41" stroke="#48270b" stroke-width="3"/>
      <text x="300" y="420" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Masă Tradițională de Picnic cu Bănci</text>
    </svg>
  `),

  // 12. Căsuță de câine izolată
  'dog-house': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f2ebe2"/>
      <ellipse cx="300" cy="390" rx="190" ry="25" fill="rgba(0,0,0,0.12)"/>
      <!-- Podea pe tălpi ridicată de la sol -->
      <rect x="140" y="340" width="320" height="25" rx="3" fill="#6d3e18" stroke="#3b1f07" stroke-width="2"/>
      <!-- Pereți din lambriu lemn -->
      <polygon points="150,210 300,105 450,210 450,345 150,345" fill="#cf9258" stroke="#48270b" stroke-width="3"/>
      <!-- Ușă intrare boltită cu arcadă -->
      <path d="M 250,345 L 250,250 A 50,50 0 0,1 350,250 L 350,345 Z" fill="#2b1a0d" stroke="#5a3111" stroke-width="3"/>
      <!-- Acoperiș 2 ape cărămiziu / șindrilă -->
      <polygon points="120,215 300,80 320,95 140,230" fill="#9e3a1f" stroke="#381005" stroke-width="3"/>
      <polygon points="480,215 300,80 280,95 460,230" fill="#bd4828" stroke="#381005" stroke-width="3"/>
      <!-- Plăcuță nume os/lemn -->
      <rect x="270" y="170" width="60" height="22" rx="6" fill="#f5ede0" stroke="#48270b" stroke-width="2"/>
      <text x="300" y="186" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="12" fill="#7a4b22">REX</text>
      <text x="300" y="420" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Căsuță Izolată din Lemn pentru Câine</text>
    </svg>
  `),

  // 13. Ladă portabilă de scule cu mâner
  'tool-tote': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f4ede4"/>
      <ellipse cx="300" cy="375" rx="210" ry="30" fill="rgba(0,0,0,0.12)"/>
      <!-- Capete verticale trapezoidale -->
      <polygon points="130,280 180,130 220,130 230,280" fill="#995e2d" stroke="#48270b" stroke-width="2"/>
      <polygon points="430,280 380,130 420,130 470,280" fill="#995e2d" stroke="#48270b" stroke-width="2"/>
      <!-- Mâner rotund cilindric din fag (Dowel) -->
      <rect x="195" y="130" width="210" height="22" rx="10" fill="#dfb37e" stroke="#48270b" stroke-width="3"/>
      <!-- Pereți laterali lungi casetă -->
      <polygon points="120,290 480,290 460,210 140,210" fill="#c98a52" stroke="#48270b" stroke-width="3"/>
      <!-- Scule ieșite din ladă (ciocan, echer, rindea) -->
      <rect x="220" y="170" width="18" height="60" fill="#b0b0b0" stroke="#333" stroke-width="2" transform="rotate(-20 220 170)"/>
      <rect x="330" y="180" width="45" height="30" rx="3" fill="#8f5b2d" stroke="#333" stroke-width="2"/>
      <text x="300" y="415" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Ladă Clasică de Scule cu Mâner Rotund</text>
    </svg>
  `),

  // 14. Capre pliabile tâmplărie (Sawhorses)
  'folding-sawhorses': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f3ece2"/>
      <ellipse cx="300" cy="380" rx="230" ry="30" fill="rgba(0,0,0,0.12)"/>
      <!-- Picioare A-frame -->
      <g fill="#995e2d" stroke="#48270b" stroke-width="3">
        <polygon points="150,150 180,150 100,360 70,360"/>
        <polygon points="180,150 210,150 270,360 240,360"/>
        <polygon points="410,150 440,150 360,360 330,360"/>
        <polygon points="440,150 470,150 530,360 500,360"/>
      </g>
      <!-- Balama / contrafișă de blocare metalică -->
      <line x1="125" y1="280" x2="225" y2="280" stroke="#333" stroke-width="4"/>
      <line x1="385" y1="280" x2="485" y2="280" stroke="#333" stroke-width="4"/>
      <!-- Grinda principală superioară 2x4 (Grindă de sacrificiu) -->
      <rect x="100" y="130" width="400" height="35" rx="4" fill="#dfa46e" stroke="#48270b" stroke-width="3"/>
      <text x="300" y="415" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Capre Robuste de Atelier Pliabile (Pereche)</text>
    </svg>
  `),

  // 15. Tocător bucătărie end-grain
  'endgrain-cutting-board': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f4eee4"/>
      <ellipse cx="300" cy="360" rx="220" ry="40" fill="rgba(0,0,0,0.14)"/>
      <!-- Blat masiv gros 45mm cu tablă de șah din stejar și nuc -->
      <polygon points="120,240 210,150 480,150 390,240" fill="#d49b5c" stroke="#48270b" stroke-width="3"/>
      <rect x="120" y="240" width="270" height="45" rx="4" fill="#a46835" stroke="#48270b" stroke-width="3"/>
      <!-- Model carouri fibră terminală (End-grain checkerboard) -->
      <g stroke="#3b1f07" stroke-width="1.5">
        <polygon points="160,220 200,180 230,180 190,220" fill="#503117"/>
        <polygon points="220,220 260,180 290,180 250,220" fill="#503117"/>
        <polygon points="280,220 320,180 350,180 310,220" fill="#503117"/>
        <polygon points="340,220 380,180 410,180 370,220" fill="#503117"/>
      </g>
      <!-- Șanț perimetral colectare lichide (Juice groove) -->
      <path d="M 140,235 L 220,165 L 460,165 L 380,235 Z" fill="none" stroke="#3b1f07" stroke-width="3" opacity="0.6"/>
      <text x="300" y="405" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Tocător Fibră Terminală (End-Grain)</text>
    </svg>
  `),

  // 16. Suport vinuri
  'wine-rack': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f2ebe2"/>
      <ellipse cx="300" cy="385" rx="190" ry="25" fill="rgba(0,0,0,0.12)"/>
      <!-- Cadru suport -->
      <rect x="160" y="90" width="280" height="280" rx="4" fill="#deb083" stroke="#48270b" stroke-width="3"/>
      <!-- Rețea cruce diagonală suport sticle -->
      <line x1="160" y1="90" x2="440" y2="370" stroke="#7e4a1c" stroke-width="16"/>
      <line x1="160" y1="370" x2="440" y2="90" stroke="#7e4a1c" stroke-width="16"/>
      <!-- Baze de sticle culcate vizibile -->
      <circle cx="300" cy="180" r="24" fill="#3d141b" stroke="#1f080c" stroke-width="2"/>
      <circle cx="300" cy="180" r="10" fill="#5e1f29"/>
      <circle cx="230" cy="230" r="24" fill="#1b3022" stroke="#08140c" stroke-width="2"/>
      <circle cx="370" cy="230" r="24" fill="#3d141b" stroke="#1f080c" stroke-width="2"/>
      <circle cx="300" cy="280" r="24" fill="#1b3022" stroke="#08140c" stroke-width="2"/>
      <text x="300" y="420" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Suport Lemn Masiv pentru Sticle de Vin</text>
    </svg>
  `),

  // 17. Cuibar & adăpost mic găini (Backyard Chicken Coop)
  'chicken-coop': encodeSvg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
      <rect width="600" height="450" fill="#f0ebe1"/>
      <ellipse cx="300" cy="395" rx="230" ry="30" fill="rgba(0,0,0,0.12)"/>
      <!-- Picioare ridicate anti-umezeală/rozătoare -->
      <rect x="130" y="240" width="22" height="135" fill="#6a3d17" stroke="#3b1f07" stroke-width="2"/>
      <rect x="360" y="240" width="22" height="135" fill="#6a3d17" stroke="#3b1f07" stroke-width="2"/>
      <!-- Corp principal cuibar lambriu roșu/lemn -->
      <rect x="120" y="140" width="260" height="150" rx="3" fill="#b94c34" stroke="#48270b" stroke-width="3"/>
      <!-- Ușă acces cu rampă din șipci -->
      <rect x="150" y="190" width="50" height="80" rx="4" fill="#221208"/>
      <!-- Rampă urcare -->
      <polygon points="150,270 90,370 120,370 180,270" fill="#c98a52" stroke="#48270b" stroke-width="2"/>
      <!-- Acoperiș rabatabil pentru colectare ouă -->
      <polygon points="90,140 250,70 400,140" fill="#4a2a11" stroke="#261203" stroke-width="3"/>
      <!-- Cuibar lateral cu capac rabatabil -->
      <polygon points="380,180 470,210 470,290 380,290" fill="#cf9258" stroke="#48270b" stroke-width="2"/>
      <polygon points="370,175 480,205 470,215 370,185" fill="#4a2a11"/>
      <!-- Grilaj plasă sârmă volieră -->
      <rect x="230" y="160" width="70" height="50" fill="rgba(255,255,255,0.2)" stroke="#555" stroke-width="2"/>
      <text x="300" y="425" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="#4d321d">Cuibar & Adăpost din Lemn pentru Găini</text>
    </svg>
  `)
};

export function getProjectIllustration(id, archetype = 'table', title = 'Proiect Tâmplărie') {
  if (PROJECT_SVGS[id]) return PROJECT_SVGS[id];

  const icons = {
    'table': '<polygon points="80,180 140,110 460,110 400,180" fill="#d99b5b" stroke="#4a2a11" stroke-width="3"/><rect x="80" y="180" width="320" height="24" fill="#be7f42" stroke="#4a2a11" stroke-width="2"/><rect x="110" y="204" width="28" height="140" fill="#8f592d" stroke="#4a2a11" stroke-width="2"/><rect x="350" y="204" width="28" height="140" fill="#8f592d" stroke="#4a2a11" stroke-width="2"/>',
    'bench': '<polygon points="90,190 140,140 460,140 410,190" fill="#d99b5b" stroke="#4a2a11" stroke-width="3"/><rect x="90" y="190" width="320" height="20" fill="#be7f42" stroke="#4a2a11" stroke-width="2"/><rect x="110" y="210" width="24" height="130" fill="#8f592d" stroke="#4a2a11" stroke-width="2"/><rect x="365" y="210" width="24" height="130" fill="#8f592d" stroke="#4a2a11" stroke-width="2"/>',
    'chair': '<rect x="220" y="90" width="20" height="250" fill="#8f592d" stroke="#4a2a11" stroke-width="2"/><rect x="310" y="90" width="20" height="250" fill="#8f592d" stroke="#4a2a11" stroke-width="2"/><rect x="210" y="210" width="130" height="18" rx="3" fill="#dfa46e" stroke="#4a2a11" stroke-width="2"/>',
    'cabinet': '<rect x="160" y="70" width="280" height="300" rx="4" fill="#deb083" stroke="#48270b" stroke-width="3"/><rect x="168" y="78" width="130" height="284" fill="#f3cb9f" stroke="#7e4a1c" stroke-width="2"/><rect x="302" y="78" width="130" height="284" fill="#f3cb9f" stroke="#7e4a1c" stroke-width="2"/><circle cx="286" cy="220" r="5" fill="#222"/><circle cx="314" cy="220" r="5" fill="#222"/>',
    'shelf': '<rect x="170" y="60" width="20" height="320" rx="2" fill="#8f592d" stroke="#4a2a11" stroke-width="2"/><rect x="410" y="60" width="20" height="320" rx="2" fill="#8f592d" stroke="#4a2a11" stroke-width="2"/><rect x="180" y="80" width="240" height="16" fill="#dfa46e"/><rect x="180" y="160" width="240" height="16" fill="#dfa46e"/><rect x="180" y="240" width="240" height="16" fill="#dfa46e"/><rect x="180" y="320" width="240" height="16" fill="#dfa46e"/>',
    'planter': '<rect x="120" y="180" width="350" height="150" rx="4" fill="#c98a50" stroke="#48270b" stroke-width="3"/><rect x="105" y="170" width="30" height="170" fill="#9b612e" stroke="#48270b" stroke-width="2"/><rect x="455" y="170" width="30" height="170" fill="#9b612e" stroke="#48270b" stroke-width="2"/><circle cx="260" cy="125" r="20" fill="#38a169"/><circle cx="330" cy="120" r="22" fill="#2f855a"/>',
    'birdhouse': '<polygon points="210,180 300,90 390,180" fill="#dfa468" stroke="#4a2a11" stroke-width="3"/><polygon points="175,185 300,75 320,85 195,195" fill="#c3562b" stroke="#41180a" stroke-width="3"/><polygon points="425,185 300,75 280,85 405,195" fill="#a44622" stroke="#41180a" stroke-width="3"/><circle cx="300" cy="230" r="30" fill="#1a0f07" stroke="#5a3111" stroke-width="4"/>',
    'tote': '<polygon points="130,280 180,130 220,130 230,280" fill="#995e2d" stroke="#48270b" stroke-width="2"/><polygon points="430,280 380,130 420,130 470,280" fill="#995e2d" stroke="#48270b" stroke-width="2"/><rect x="195" y="130" width="210" height="22" rx="10" fill="#dfb37e" stroke="#48270b" stroke-width="3"/><polygon points="120,290 480,290 460,210 140,210" fill="#c98a52" stroke="#48270b" stroke-width="3"/>',
    'board': '<polygon points="120,240 210,150 480,150 390,240" fill="#d49b5c" stroke="#48270b" stroke-width="3"/><rect x="120" y="240" width="270" height="45" rx="4" fill="#a46835" stroke="#48270b" stroke-width="3"/>',
    'rack': '<rect x="160" y="90" width="280" height="280" rx="4" fill="#deb083" stroke="#48270b" stroke-width="3"/><line x1="160" y1="90" x2="440" y2="370" stroke="#7e4a1c" stroke-width="14"/><line x1="160" y1="370" x2="440" y2="90" stroke="#7e4a1c" stroke-width="14"/>',
    'shed': '<rect x="130" y="160" width="340" height="210" fill="#c98a52" stroke="#48270b" stroke-width="3"/><polygon points="100,160 300,70 500,160" fill="#8b3a24" stroke="#381005" stroke-width="3"/>'
  };

  const art = icons[archetype] || icons['table'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450"><rect width="600" height="450" fill="#f4eee6"/><ellipse cx="300" cy="385" rx="220" ry="30" fill="rgba(0,0,0,0.12)"/>${art}<text x="300" y="420" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="18" fill="#4d321d">${title}</text></svg>`;
  return encodeSvg(svg);
}
