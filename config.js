// ============================================================
// config.js — Configuración del Generador de Esquelas
// Modifique este archivo para agregar paletas, fuentes y listones
// ============================================================

// ─────────────────────────────────────────────────────────────
// PALETAS DE COLOR
// Cada paleta define colores para todos los elementos de la esquela
// ─────────────────────────────────────────────────────────────
var PALETTES = [
  {
    id: 'gris-sobrio', name: 'Gris Sobrio',
    bg: '#f4f4f2', bgAlt: '#e6e6e2',
    text: '#1c1c1a', textMuted: '#5a5a55',
    nameColor: '#0a0a08', subtitleColor: '#2c2c28',
    decorationColor: '#888880', borderColor: '#4a4a44',
    companyColor: '#7a7a72', accentColor: '#3a3a35',
    gradientStart: '#e8e8e4', gradientEnd: '#c0c0b8',
    photoShadowColor: 'rgba(0,0,0,0.25)',
  },
  {
    id: 'marfil-clasico', name: 'Marfil Clásico',
    bg: '#faf7f0', bgAlt: '#f0ebe0',
    text: '#2a2218', textMuted: '#6a5f4a',
    nameColor: '#1a1408', subtitleColor: '#4a3c28',
    decorationColor: '#c0a880', borderColor: '#8b7355',
    companyColor: '#a08060', accentColor: '#8b7355',
    gradientStart: '#f0ebe0', gradientEnd: '#d8c9a8',
    photoShadowColor: 'rgba(139,115,85,0.30)',
  },
  {
    id: 'negro-elegante', name: 'Negro Elegante',
    bg: '#ffffff', bgAlt: '#f0f0ee',
    text: '#0a0a0a', textMuted: '#404040',
    nameColor: '#000000', subtitleColor: '#1a1a1a',
    decorationColor: '#303030', borderColor: '#0a0a0a',
    companyColor: '#505050', accentColor: '#1a1a1a',
    gradientStart: '#eeeeee', gradientEnd: '#c0c0c0',
    photoShadowColor: 'rgba(0,0,0,0.35)',
  },
  {
    id: 'azul-noche', name: 'Azul Noche',
    bg: '#f0f4f8', bgAlt: '#dce8f0',
    text: '#1a2a38', textMuted: '#4a6070',
    nameColor: '#0a1a28', subtitleColor: '#1a3a50',
    decorationColor: '#4a7090', borderColor: '#2a4a60',
    companyColor: '#5a7888', accentColor: '#2a4a60',
    gradientStart: '#dce8f0', gradientEnd: '#a8c0d0',
    photoShadowColor: 'rgba(26,42,56,0.30)',
  },
  {
    id: 'dorado-calido', name: 'Dorado Cálido',
    bg: '#fdf9f0', bgAlt: '#f5ede0',
    text: '#2c1a00', textMuted: '#7a5c2a',
    nameColor: '#1a0e00', subtitleColor: '#3c2800',
    decorationColor: '#d4a84a', borderColor: '#b88030',
    companyColor: '#9a6c20', accentColor: '#c8942a',
    gradientStart: '#f5ede0', gradientEnd: '#e8d0a0',
    photoShadowColor: 'rgba(184,128,48,0.30)',
  },
  {
    id: 'rosa-suave', name: 'Rosa Suave',
    bg: '#fef6f8', bgAlt: '#f8e8ec',
    text: '#2a1018', textMuted: '#7a4858',
    nameColor: '#1a0810', subtitleColor: '#3c1828',
    decorationColor: '#d4a0a8', borderColor: '#b87888',
    companyColor: '#9a6070', accentColor: '#c07888',
    gradientStart: '#f8e8ec', gradientEnd: '#e8c0c8',
    photoShadowColor: 'rgba(184,120,136,0.28)',
  },
  {
    id: 'verde-salvia', name: 'Verde Salvia',
    bg: '#f4f7f4', bgAlt: '#e4ecdc',
    text: '#182818', textMuted: '#4a6450',
    nameColor: '#0c1a0e', subtitleColor: '#284830',
    decorationColor: '#789068', borderColor: '#507858',
    companyColor: '#607a60', accentColor: '#587860',
    gradientStart: '#e4ecdc', gradientEnd: '#c0d0b8',
    photoShadowColor: 'rgba(80,120,88,0.28)',
  },
  {
    id: 'marron-tierra', name: 'Marrón Tierra',
    bg: '#f8f4ee', bgAlt: '#eee4d4',
    text: '#2a1808', textMuted: '#7a5840',
    nameColor: '#180c00', subtitleColor: '#3c2010',
    decorationColor: '#b87848', borderColor: '#8a5830',
    companyColor: '#9a6838', accentColor: '#8a5830',
    gradientStart: '#eee4d4', gradientEnd: '#cca87a',
    photoShadowColor: 'rgba(138,88,48,0.30)',
  },
  {
    id: 'lavanda-serena', name: 'Lavanda Serena',
    bg: '#f6f4fc', bgAlt: '#ece4f4',
    text: '#201828', textMuted: '#605878',
    nameColor: '#100c18', subtitleColor: '#302040',
    decorationColor: '#a898c0', borderColor: '#7868a0',
    companyColor: '#887890', accentColor: '#8878a8',
    gradientStart: '#ece4f4', gradientEnd: '#ccc0e4',
    photoShadowColor: 'rgba(120,104,160,0.28)',
  },
  {
    id: 'azul-hielo', name: 'Azul Hielo',
    bg: '#f4f8fc', bgAlt: '#e0ecf4',
    text: '#1a2a38', textMuted: '#4a6070',
    nameColor: '#0e1a28', subtitleColor: '#203040',
    decorationColor: '#88b0c8', borderColor: '#6090b0',
    companyColor: '#7898a8', accentColor: '#6898b8',
    gradientStart: '#e0ecf4', gradientEnd: '#b8d0e0',
    photoShadowColor: 'rgba(96,144,176,0.28)',
  },
  {
    id: 'teja-calida', name: 'Teja Cálida',
    bg: '#fdf6f0', bgAlt: '#f5e4d4',
    text: '#2c1400', textMuted: '#7a4820',
    nameColor: '#1a0c00', subtitleColor: '#3c1c00',
    decorationColor: '#d47840', borderColor: '#b05828',
    companyColor: '#9a5828', accentColor: '#c06030',
    gradientStart: '#f5e4d4', gradientEnd: '#e0b888',
    photoShadowColor: 'rgba(176,88,40,0.28)',
  },
  {
    id: 'borgona-profundo', name: 'Borgoña Profundo',
    bg: '#fdf5f5', bgAlt: '#f0dede',
    text: '#2a0808', textMuted: '#7a3838',
    nameColor: '#180000', subtitleColor: '#3c0808',
    decorationColor: '#c04040', borderColor: '#8a1818',
    companyColor: '#a03030', accentColor: '#8a1818',
    gradientStart: '#f0dede', gradientEnd: '#d0a0a0',
    photoShadowColor: 'rgba(138,24,24,0.28)',
  },
  {
    id: 'sepia-vintage', name: 'Sepia Vintage',
    bg: '#faf6ec', bgAlt: '#f0e8d0',
    text: '#2c2010', textMuted: '#7a6040',
    nameColor: '#1a1000', subtitleColor: '#3c2810',
    decorationColor: '#c0985a', borderColor: '#a07840',
    companyColor: '#907030', accentColor: '#a07840',
    gradientStart: '#f0e8d0', gradientEnd: '#d8c090',
    photoShadowColor: 'rgba(160,120,64,0.30)',
  },
  {
    id: 'azul-grisaceo', name: 'Azul Grisáceo',
    bg: '#f4f4f8', bgAlt: '#e4e4ec',
    text: '#1a1a28', textMuted: '#505068',
    nameColor: '#0c0c18', subtitleColor: '#282840',
    decorationColor: '#8888a8', borderColor: '#505878',
    companyColor: '#686880', accentColor: '#606888',
    gradientStart: '#e4e4ec', gradientEnd: '#b8b8d0',
    photoShadowColor: 'rgba(80,88,120,0.28)',
  },
  {
    id: 'nude-calido', name: 'Nude Cálido',
    bg: '#fdf8f4', bgAlt: '#f4ece4',
    text: '#281e14', textMuted: '#786050',
    nameColor: '#180e08', subtitleColor: '#382818',
    decorationColor: '#c0a888', borderColor: '#8a6850',
    companyColor: '#907060', accentColor: '#9a7860',
    gradientStart: '#f4ece4', gradientEnd: '#d8c4a8',
    photoShadowColor: 'rgba(138,104,80,0.28)',
  },
  {
    id: 'gris-carbon', name: 'Gris Carbón',
    bg: '#f2f2f0', bgAlt: '#e0e0dc',
    text: '#1a1a18', textMuted: '#484840',
    nameColor: '#080808', subtitleColor: '#202018',
    decorationColor: '#606058', borderColor: '#303028',
    companyColor: '#585850', accentColor: '#2a2a28',
    gradientStart: '#e0e0dc', gradientEnd: '#b0b0a8',
    photoShadowColor: 'rgba(0,0,0,0.30)',
  },
  {
    id: 'malva-delicado', name: 'Malva Delicado',
    bg: '#faf4f8', bgAlt: '#f0e4ec',
    text: '#280a20', textMuted: '#784868',
    nameColor: '#180010', subtitleColor: '#380818',
    decorationColor: '#c080a0', borderColor: '#8a5070',
    companyColor: '#907080', accentColor: '#a06080',
    gradientStart: '#f0e4ec', gradientEnd: '#d8b0c8',
    photoShadowColor: 'rgba(138,80,112,0.28)',
  },
  {
    id: 'menta-suave', name: 'Menta Suave',
    bg: '#f2f8f6', bgAlt: '#dceee8',
    text: '#102018', textMuted: '#406048',
    nameColor: '#081810', subtitleColor: '#203020',
    decorationColor: '#70a880', borderColor: '#407858',
    companyColor: '#608070', accentColor: '#508060',
    gradientStart: '#dceee8', gradientEnd: '#a8d0b8',
    photoShadowColor: 'rgba(64,120,88,0.28)',
  },
  {
    id: 'crema-oscura', name: 'Crema Oscura',
    bg: '#f8f5e8', bgAlt: '#ede8d0',
    text: '#2a2410', textMuted: '#706840',
    nameColor: '#181400', subtitleColor: '#3a3420',
    decorationColor: '#b0a860', borderColor: '#806c30',
    companyColor: '#9a8840', accentColor: '#8a8050',
    gradientStart: '#ede8d0', gradientEnd: '#c8c098',
    photoShadowColor: 'rgba(128,108,48,0.30)',
  },
  {
    id: 'azul-marino-suave', name: 'Azul Marino Suave',
    bg: '#f0f4fa', bgAlt: '#d8e4f0',
    text: '#0a1828', textMuted: '#304860',
    nameColor: '#040c18', subtitleColor: '#102038',
    decorationColor: '#386890', borderColor: '#184870',
    companyColor: '#406080', accentColor: '#183050',
    gradientStart: '#d8e4f0', gradientEnd: '#9ab8d0',
    photoShadowColor: 'rgba(24,72,112,0.30)',
  },
  {
    id: 'rosa-viejo', name: 'Rosa Viejo',
    bg: '#faf4f0', bgAlt: '#f0e4dc',
    text: '#2c1c14', textMuted: '#7a5848',
    nameColor: '#1a100a', subtitleColor: '#3c2418',
    decorationColor: '#d09878', borderColor: '#a86848',
    companyColor: '#9a7058', accentColor: '#b87858',
    gradientStart: '#f0e4dc', gradientEnd: '#d8b898',
    photoShadowColor: 'rgba(168,104,72,0.28)',
  },
  {
    id: 'oliva-suave', name: 'Oliva Suave',
    bg: '#f6f8f0', bgAlt: '#e8ecd8',
    text: '#202010', textMuted: '#585840',
    nameColor: '#101000', subtitleColor: '#303018',
    decorationColor: '#909860', borderColor: '#686828',
    companyColor: '#787850', accentColor: '#707040',
    gradientStart: '#e8ecd8', gradientEnd: '#c0c898',
    photoShadowColor: 'rgba(104,104,40,0.28)',
  },
  {
    id: 'bronce-antiguo', name: 'Bronce Antiguo',
    bg: '#f8f4ec', bgAlt: '#f0e8d0',
    text: '#281800', textMuted: '#786030',
    nameColor: '#180c00', subtitleColor: '#382800',
    decorationColor: '#c8a040', borderColor: '#987828',
    companyColor: '#907030', accentColor: '#a07820',
    gradientStart: '#f0e8d0', gradientEnd: '#d0b060',
    photoShadowColor: 'rgba(152,120,40,0.30)',
  },
  {
    id: 'pizarra-azul', name: 'Pizarra Azul',
    bg: '#f0f3f7', bgAlt: '#e0e8f0',
    text: '#182030', textMuted: '#485868',
    nameColor: '#0c1420', subtitleColor: '#243040',
    decorationColor: '#607888', borderColor: '#384858',
    companyColor: '#5a6872', accentColor: '#3a4858',
    gradientStart: '#e0e8f0', gradientEnd: '#b0c0d0',
    photoShadowColor: 'rgba(56,72,88,0.28)',
  },
  {
    id: 'platino-suave', name: 'Platino Suave',
    bg: '#fafafa', bgAlt: '#f0f0ee',
    text: '#181818', textMuted: '#585858',
    nameColor: '#080808', subtitleColor: '#202020',
    decorationColor: '#a0a0a0', borderColor: '#686868',
    companyColor: '#909090', accentColor: '#787878',
    gradientStart: '#f0f0ee', gradientEnd: '#d8d8d4',
    photoShadowColor: 'rgba(0,0,0,0.20)',
  },
];

// ─────────────────────────────────────────────────────────────
// EMPAREJAMIENTOS TIPOGRÁFICOS
// Cada objeto define fuentes de Google Fonts para cada rol de texto
// googleFonts: array de strings para construir el URL de Google Fonts
// Roles: nameFont, dateFont, subtitleFont, subtitleBodyFont, phraseFont, companyFont
// ─────────────────────────────────────────────────────────────
var FONT_PAIRINGS = [
  {
    id: 'pairing-01', name: 'Elegancia Clásica',
    googleFonts: ['Playfair+Display:ital,wght@0,400;0,700;1,400', 'EB+Garamond:ital,wght@0,400;0,500;1,400;1,500', 'Great+Vibes'],
    nameFont:        { family: '"Playfair Display", serif', weight: 700, style: 'normal', letterSpacing: '0.04em', textTransform: 'none' },
    dateFont:        { family: '"EB Garamond", serif', weight: 400, style: 'italic', letterSpacing: '0.12em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Playfair Display", serif', weight: 400, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"EB Garamond", serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Great Vibes", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"EB Garamond", serif', weight: 400, style: 'italic', letterSpacing: '0.1em', textTransform: 'none' },
  },
  {
    id: 'pairing-02', name: 'Cormorant Refinado',
    googleFonts: ['Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400', 'Raleway:ital,wght@0,300;0,400;0,500;1,300', 'Allura'],
    nameFont:        { family: '"Cormorant Garamond", serif', weight: 600, style: 'normal', letterSpacing: '0.06em', textTransform: 'none' },
    dateFont:        { family: '"Raleway", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Raleway", sans-serif', weight: 500, style: 'normal', letterSpacing: '0.22em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Cormorant Garamond", serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Allura", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Raleway", sans-serif', weight: 300, style: 'italic', letterSpacing: '0.15em', textTransform: 'none' },
  },
  {
    id: 'pairing-03', name: 'Cinzel Imperial',
    googleFonts: ['Cinzel:wght@400;700;900', 'Spectral:ital,wght@0,300;0,400;1,300;1,400', 'Parisienne'],
    nameFont:        { family: '"Cinzel", serif', weight: 700, style: 'normal', letterSpacing: '0.08em', textTransform: 'uppercase' },
    dateFont:        { family: '"Spectral", serif', weight: 300, style: 'italic', letterSpacing: '0.08em', textTransform: 'none' },
    subtitleFont:    { family: '"Cinzel", serif', weight: 400, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Spectral", serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Parisienne", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Spectral", serif', weight: 300, style: 'italic', letterSpacing: '0.08em', textTransform: 'none' },
  },
  {
    id: 'pairing-04', name: 'Montserrat Sereno',
    googleFonts: ['Montserrat:ital,wght@0,300;0,400;0,600;1,300', 'Lora:ital,wght@0,400;0,500;1,400', 'Sacramento'],
    nameFont:        { family: '"Montserrat", sans-serif', weight: 600, style: 'normal', letterSpacing: '0.1em', textTransform: 'uppercase' },
    dateFont:        { family: '"Lora", serif', weight: 400, style: 'italic', letterSpacing: '0.05em', textTransform: 'none' },
    subtitleFont:    { family: '"Montserrat", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.25em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Lora", serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Sacramento", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Montserrat", sans-serif', weight: 300, style: 'italic', letterSpacing: '0.15em', textTransform: 'none' },
  },
  {
    id: 'pairing-05', name: 'Baskerville Formal',
    googleFonts: ['Libre+Baskerville:ital,wght@0,400;0,700;1,400', 'Karla:ital,wght@0,300;0,400;1,300', 'Pinyon+Script'],
    nameFont:        { family: '"Libre Baskerville", serif', weight: 700, style: 'normal', letterSpacing: '0.04em', textTransform: 'none' },
    dateFont:        { family: '"Karla", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Libre Baskerville", serif', weight: 400, style: 'normal', letterSpacing: '0.15em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Karla", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.03em', textTransform: 'none' },
    phraseFont:      { family: '"Pinyon Script", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Karla", sans-serif', weight: 300, style: 'italic', letterSpacing: '0.12em', textTransform: 'none' },
  },
  {
    id: 'pairing-06', name: 'Merriweather Sereno',
    googleFonts: ['Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400', 'Source+Sans+3:ital,wght@0,300;0,400;1,300', 'Italianno'],
    nameFont:        { family: '"Merriweather", serif', weight: 700, style: 'normal', letterSpacing: '0.03em', textTransform: 'none' },
    dateFont:        { family: '"Source Sans 3", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Merriweather", serif', weight: 300, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Source Sans 3", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Italianno", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Source Sans 3", sans-serif', weight: 300, style: 'italic', letterSpacing: '0.1em', textTransform: 'none' },
  },
  {
    id: 'pairing-07', name: 'Josefin Sans Moderno',
    googleFonts: ['Josefin+Sans:ital,wght@0,100;0,300;0,400;0,600;1,100;1,300', 'Crimson+Text:ital,wght@0,400;0,600;1,400', 'Petit+Formal+Script'],
    nameFont:        { family: '"Josefin Sans", sans-serif', weight: 600, style: 'normal', letterSpacing: '0.12em', textTransform: 'uppercase' },
    dateFont:        { family: '"Josefin Sans", sans-serif', weight: 100, style: 'normal', letterSpacing: '0.25em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Josefin Sans", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.28em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Crimson Text", serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Petit Formal Script", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Josefin Sans", sans-serif', weight: 100, style: 'italic', letterSpacing: '0.18em', textTransform: 'none' },
  },
  {
    id: 'pairing-08', name: 'Cardo Eterno',
    googleFonts: ['Cardo:ital,wght@0,400;0,700;1,400', 'Jost:ital,wght@0,100;0,300;0,400;1,100', 'Tangerine:wght@400;700'],
    nameFont:        { family: '"Cardo", serif', weight: 700, style: 'normal', letterSpacing: '0.05em', textTransform: 'none' },
    dateFont:        { family: '"Jost", sans-serif', weight: 100, style: 'normal', letterSpacing: '0.25em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Jost", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.22em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Cardo", serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Tangerine", cursive', weight: 700, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Jost", sans-serif', weight: 100, style: 'italic', letterSpacing: '0.15em', textTransform: 'none' },
  },
  {
    id: 'pairing-09', name: 'Forum Mediterráneo',
    googleFonts: ['Forum', 'Mulish:ital,wght@0,200;0,300;0,400;1,200;1,300', 'Dancing+Script:wght@400;700'],
    nameFont:        { family: '"Forum", serif', weight: 400, style: 'normal', letterSpacing: '0.06em', textTransform: 'none' },
    dateFont:        { family: '"Mulish", sans-serif', weight: 200, style: 'normal', letterSpacing: '0.22em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Forum", serif', weight: 400, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Mulish", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Dancing Script", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Mulish", sans-serif', weight: 200, style: 'italic', letterSpacing: '0.12em', textTransform: 'none' },
  },
  {
    id: 'pairing-10', name: 'PT Clásico',
    googleFonts: ['PT+Serif:ital,wght@0,400;0,700;1,400', 'PT+Sans:ital,wght@0,400;0,700;1,400', 'Alex+Brush'],
    nameFont:        { family: '"PT Serif", serif', weight: 700, style: 'normal', letterSpacing: '0.04em', textTransform: 'none' },
    dateFont:        { family: '"PT Sans", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.15em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"PT Sans", sans-serif', weight: 700, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"PT Serif", serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Alex Brush", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"PT Serif", serif', weight: 400, style: 'italic', letterSpacing: '0.08em', textTransform: 'none' },
  },
  {
    id: 'pairing-11', name: 'Gilda Grandioso',
    googleFonts: ['Gilda+Display', 'Open+Sans:ital,wght@0,300;0,400;1,300', 'Herr+Von+Muellerhoff'],
    nameFont:        { family: '"Gilda Display", serif', weight: 400, style: 'normal', letterSpacing: '0.06em', textTransform: 'none' },
    dateFont:        { family: '"Open Sans", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Gilda Display", serif', weight: 400, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Open Sans", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Herr Von Muellerhoff", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Open Sans", sans-serif', weight: 300, style: 'italic', letterSpacing: '0.1em', textTransform: 'none' },
  },
  {
    id: 'pairing-12', name: 'Sorts Mill Histórico',
    googleFonts: ['Sorts+Mill+Goudy:ital@0;1', 'Fira+Sans:ital,wght@0,300;0,400;1,300', 'Rochester'],
    nameFont:        { family: '"Sorts Mill Goudy", serif', weight: 400, style: 'normal', letterSpacing: '0.05em', textTransform: 'none' },
    dateFont:        { family: '"Fira Sans", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Sorts Mill Goudy", serif', weight: 400, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Fira Sans", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Rochester", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Sorts Mill Goudy", serif', weight: 400, style: 'italic', letterSpacing: '0.08em', textTransform: 'none' },
  },
  {
    id: 'pairing-13', name: 'Cabin Contemporáneo',
    googleFonts: ['Cabin:ital,wght@0,400;0,600;0,700;1,400', 'Spectral:ital,wght@0,300;0,400;1,300', 'Euphoria+Script'],
    nameFont:        { family: '"Cabin", sans-serif', weight: 700, style: 'normal', letterSpacing: '0.06em', textTransform: 'none' },
    dateFont:        { family: '"Spectral", serif', weight: 300, style: 'italic', letterSpacing: '0.1em', textTransform: 'none' },
    subtitleFont:    { family: '"Cabin", sans-serif', weight: 600, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Spectral", serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Euphoria Script", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Cabin", sans-serif', weight: 400, style: 'italic', letterSpacing: '0.12em', textTransform: 'none' },
  },
  {
    id: 'pairing-14', name: 'Arvo Robusto',
    googleFonts: ['Arvo:ital,wght@0,400;0,700;1,400', 'Nunito:ital,wght@0,200;0,300;0,400;1,200', 'Clicker+Script'],
    nameFont:        { family: '"Arvo", serif', weight: 700, style: 'normal', letterSpacing: '0.04em', textTransform: 'none' },
    dateFont:        { family: '"Nunito", sans-serif', weight: 200, style: 'normal', letterSpacing: '0.22em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Arvo", serif', weight: 400, style: 'normal', letterSpacing: '0.15em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Nunito", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Clicker Script", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Nunito", sans-serif', weight: 200, style: 'italic', letterSpacing: '0.12em', textTransform: 'none' },
  },
  {
    id: 'pairing-15', name: 'Philosopher Clásico',
    googleFonts: ['Philosopher:ital,wght@0,400;0,700;1,400', 'Hind:wght@300;400;500', 'Lovers+Quarrel'],
    nameFont:        { family: '"Philosopher", serif', weight: 700, style: 'normal', letterSpacing: '0.05em', textTransform: 'none' },
    dateFont:        { family: '"Hind", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Philosopher", serif', weight: 400, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Hind", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Lovers Quarrel", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Philosopher", serif', weight: 400, style: 'italic', letterSpacing: '0.08em', textTransform: 'none' },
  },
  {
    id: 'pairing-16', name: 'Italiana Delicada',
    googleFonts: ['Italiana', 'Poppins:ital,wght@0,300;0,400;1,300', 'Mr+De+Haviland'],
    nameFont:        { family: '"Italiana", serif', weight: 400, style: 'normal', letterSpacing: '0.08em', textTransform: 'none' },
    dateFont:        { family: '"Poppins", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.22em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Italiana", serif', weight: 400, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Poppins", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Mr De Haviland", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Poppins", sans-serif', weight: 300, style: 'italic', letterSpacing: '0.12em', textTransform: 'none' },
  },
  {
    id: 'pairing-17', name: 'Rufina Intemporal',
    googleFonts: ['Rufina:wght@400;700', 'Assistant:wght@200;300;400', 'Ruthie'],
    nameFont:        { family: '"Rufina", serif', weight: 700, style: 'normal', letterSpacing: '0.05em', textTransform: 'none' },
    dateFont:        { family: '"Assistant", sans-serif', weight: 200, style: 'normal', letterSpacing: '0.25em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Rufina", serif', weight: 400, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Assistant", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Ruthie", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Assistant", sans-serif', weight: 200, style: 'normal', letterSpacing: '0.15em', textTransform: 'none' },
  },
  {
    id: 'pairing-18', name: 'IM Fell Gótico',
    googleFonts: ['IM+Fell+English:ital@0;1', 'Karla:ital,wght@0,300;0,400;1,300', 'Zeyada'],
    nameFont:        { family: '"IM Fell English", serif', weight: 400, style: 'normal', letterSpacing: '0.04em', textTransform: 'none' },
    dateFont:        { family: '"Karla", sans-serif', weight: 300, style: 'italic', letterSpacing: '0.15em', textTransform: 'none' },
    subtitleFont:    { family: '"IM Fell English", serif', weight: 400, style: 'normal', letterSpacing: '0.12em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Karla", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Zeyada", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"IM Fell English", serif', weight: 400, style: 'italic', letterSpacing: '0.08em', textTransform: 'none' },
  },
  {
    id: 'pairing-19', name: 'Noto Universal',
    googleFonts: ['Noto+Serif:ital,wght@0,400;0,700;1,400', 'Noto+Sans:ital,wght@0,300;0,400;1,300', 'Marck+Script'],
    nameFont:        { family: '"Noto Serif", serif', weight: 700, style: 'normal', letterSpacing: '0.04em', textTransform: 'none' },
    dateFont:        { family: '"Noto Sans", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Noto Serif", serif', weight: 400, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Noto Sans", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Marck Script", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Noto Serif", serif', weight: 400, style: 'italic', letterSpacing: '0.08em', textTransform: 'none' },
  },
  {
    id: 'pairing-20', name: 'Zilla Moderna',
    googleFonts: ['Zilla+Slab:ital,wght@0,300;0,400;0,600;1,300', 'Fira+Sans:ital,wght@0,300;0,400;1,300', 'Kaushan+Script'],
    nameFont:        { family: '"Zilla Slab", serif', weight: 600, style: 'normal', letterSpacing: '0.04em', textTransform: 'none' },
    dateFont:        { family: '"Fira Sans", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Zilla Slab", serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Fira Sans", sans-serif', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Kaushan Script", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Zilla Slab", serif', weight: 300, style: 'italic', letterSpacing: '0.1em', textTransform: 'none' },
  },
  {
    id: 'pairing-21', name: 'Neuton Ancestral',
    googleFonts: ['Neuton:ital,wght@0,200;0,300;0,400;0,700;1,400', 'Nunito+Sans:ital,wght@0,200;0,300;0,400;1,200', 'Niconne'],
    nameFont:        { family: '"Neuton", serif', weight: 700, style: 'normal', letterSpacing: '0.05em', textTransform: 'none' },
    dateFont:        { family: '"Nunito Sans", sans-serif', weight: 200, style: 'normal', letterSpacing: '0.22em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Neuton", serif', weight: 300, style: 'normal', letterSpacing: '0.2em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Nunito Sans", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Niconne", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Neuton", serif', weight: 200, style: 'italic', letterSpacing: '0.1em', textTransform: 'none' },
  },
  {
    id: 'pairing-22', name: 'Gentium Antiguo',
    googleFonts: ['Gentium+Book+Plus:ital,wght@0,400;0,700;1,400', 'Mulish:ital,wght@0,200;0,300;0,400;1,200', 'Pinyon+Script'],
    nameFont:        { family: '"Gentium Book Plus", serif', weight: 700, style: 'normal', letterSpacing: '0.04em', textTransform: 'none' },
    dateFont:        { family: '"Mulish", sans-serif', weight: 200, style: 'normal', letterSpacing: '0.22em', textTransform: 'uppercase' },
    subtitleFont:    { family: '"Gentium Book Plus", serif', weight: 400, style: 'normal', letterSpacing: '0.18em', textTransform: 'uppercase' },
    subtitleBodyFont:{ family: '"Mulish", sans-serif', weight: 300, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    phraseFont:      { family: '"Pinyon Script", cursive', weight: 400, style: 'normal', letterSpacing: '0.02em', textTransform: 'none' },
    companyFont:     { family: '"Mulish", sans-serif', weight: 200, style: 'italic', letterSpacing: '0.15em', textTransform: 'none' },
  },
];

// ─────────────────────────────────────────────────────────────
// GRADIENTES DE FOTO (PHOTO_GRADIENTS)
// Se aplican sobre la imagen de la persona fallecida en el canvas.
// Cada objeto tiene:
//   id, name
//   draw(ctx, x, y, w, h, c1, c2, c3)
//     ctx   = CanvasRenderingContext2D
//     x,y   = origen de la foto dentro del canvas (en px canvas)
//     w,h   = dimensiones de la foto (en px canvas)
//     c1,c2,c3 = colores rgba ya con la opacidad correcta
// ─────────────────────────────────────────────────────────────
var PHOTO_GRADIENTS = [
  {
    id: 'pg-none', name: 'Sin gradiente',
    draw: function() {},
  },
  {
    id: 'pg-bottom-fade', name: 'Desvanecimiento Inferior',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y + h * 0.45, x, y + h);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(1, c1);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-top-fade', name: 'Desvanecimiento Superior',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y, x, y + h * 0.55);
      g.addColorStop(0, c1);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-vignette', name: 'Viñeta Exterior',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var cx = x + w / 2, cy = y + h / 2;
      var r = Math.max(w, h) * 0.65;
      var g = ctx.createRadialGradient(cx, cy, r * 0.35, cx, cy, r);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(1, c1);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-bottom-solid-fade', name: 'Banda Inferior Sólida',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y + h * 0.6, x, y + h);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(0.4, c1);
      g.addColorStop(1,   c1);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-top-bottom', name: 'Franjas Superior e Inferior',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y, x, y + h);
      g.addColorStop(0,   c1);
      g.addColorStop(0.28,'rgba(0,0,0,0)');
      g.addColorStop(0.72,'rgba(0,0,0,0)');
      g.addColorStop(1,   c2);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-diagonal-tl', name: 'Diagonal Superior Izquierda',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y, x + w, y + h);
      g.addColorStop(0,   c1);
      g.addColorStop(0.45,'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-diagonal-br', name: 'Diagonal Inferior Derecha',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x + w, y + h, x, y);
      g.addColorStop(0,   c2);
      g.addColorStop(0.45,'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-left-fade', name: 'Desvanecimiento Izquierdo',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y, x + w * 0.55, y);
      g.addColorStop(0, c1);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-right-fade', name: 'Desvanecimiento Derecho',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x + w, y, x + w * 0.45, y);
      g.addColorStop(0, c2);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-warm-wash', name: 'Baño Cálido',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      ctx.fillStyle = c3;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-center-clear', name: 'Centro Despejado',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var cx = x + w / 2, cy = y + h / 2;
      var rx = w * 0.42, ry = h * 0.38;
      var r = Math.max(rx, ry);
      var g = ctx.createRadialGradient(cx, cy, r * 0.2, cx, cy, r);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(0.6, 'rgba(0,0,0,0)');
      g.addColorStop(1,   c1);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-sepia-tint', name: 'Tinte Sepia',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y, x, y + h);
      g.addColorStop(0, c1);
      g.addColorStop(0.5, c3);
      g.addColorStop(1,  c2);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-radial-top', name: 'Radial Superior',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createRadialGradient(x + w / 2, y, 0, x + w / 2, y, h * 0.85);
      g.addColorStop(0,   c1);
      g.addColorStop(0.5, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-dual-corners', name: 'Esquinas Opuestas',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g1 = ctx.createRadialGradient(x, y, 0, x, y, w * 0.7);
      g1.addColorStop(0, c1); g1.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g1; ctx.fillRect(x, y, w, h);
      var g2 = ctx.createRadialGradient(x + w, y + h, 0, x + w, y + h, w * 0.7);
      g2.addColorStop(0, c2); g2.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g2; ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-horizontal-center', name: 'Banda Central Horizontal',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y, x, y + h);
      g.addColorStop(0,    'rgba(0,0,0,0)');
      g.addColorStop(0.35, c3);
      g.addColorStop(0.65, c3);
      g.addColorStop(1,    'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-full-overlay-light', name: 'Veladura Suave',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      ctx.fillStyle = c1;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-left-right-tinted', name: 'Lateral Bicolor',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y, x + w, y);
      g.addColorStop(0,    c1);
      g.addColorStop(0.3,  'rgba(0,0,0,0)');
      g.addColorStop(0.7,  'rgba(0,0,0,0)');
      g.addColorStop(1,    c2);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-bottom-dark-heavy', name: 'Oscurecido Inferior Fuerte',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y + h * 0.3, x, y + h);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(1, c2);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
  {
    id: 'pg-three-tone', name: 'Triple Tono',
    draw: function(ctx, x, y, w, h, c1, c2, c3) {
      var g = ctx.createLinearGradient(x, y, x, y + h);
      g.addColorStop(0,    c1);
      g.addColorStop(0.33, 'rgba(0,0,0,0)');
      g.addColorStop(0.5,  c3);
      g.addColorStop(0.67, 'rgba(0,0,0,0)');
      g.addColorStop(1,    c2);
      ctx.fillStyle = g;
      ctx.fillRect(x, y, w, h);
    },
  },
];

// ─────────────────────────────────────────────────────────────
// GRADIENTES DE FONDO (BG_OVERLAYS)
// Cada función recibe (c1, c2, c3) con alpha ya aplicado
// y retorna un CSS gradient string que se aplica sobre la imagen de fondo.
// ─────────────────────────────────────────────────────────────
var BG_OVERLAYS = [
  function(c1,c2,c3){ return 'linear-gradient(to bottom, '+c1+' 0%, '+c2+' 100%)'; },
  function(c1,c2,c3){ return 'linear-gradient(to top, '+c1+' 0%, transparent 60%)'; },
  function(c1,c2,c3){ return 'linear-gradient(135deg, '+c1+' 0%, '+c2+' 50%, transparent 100%)'; },
  function(c1,c2,c3){ return 'linear-gradient(45deg, '+c2+' 0%, transparent 55%, '+c1+' 100%)'; },
  function(c1,c2,c3){ return 'radial-gradient(ellipse at center, transparent 20%, '+c1+' 80%)'; },
  function(c1,c2,c3){ return 'radial-gradient(ellipse at 0% 0%, '+c1+' 0%, transparent 70%)'; },
  function(c1,c2,c3){ return 'radial-gradient(ellipse at 100% 100%, '+c2+' 0%, transparent 65%)'; },
  function(c1,c2,c3){ return 'linear-gradient(to bottom, '+c1+' 0%, transparent 35%, transparent 65%, '+c2+' 100%)'; },
  function(c1,c2,c3){ return 'linear-gradient(to right, '+c1+' 0%, transparent 50%)'; },
  function(c1,c2,c3){ return 'linear-gradient(to left, '+c1+' 0%, transparent 50%)'; },
  function(c1,c2,c3){ return 'linear-gradient(160deg, '+c1+' 0%, '+c3+' 50%, '+c2+' 100%)'; },
  function(c1,c2,c3){ return 'radial-gradient(ellipse at 50% 40%, '+c1+' 0%, '+c2+' 60%, transparent 100%)'; },
  function(c1,c2,c3){ return 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, '+c1+' 100%)'; },
  function(c1,c2,c3){ return 'conic-gradient(from 45deg, '+c1+', '+c2+', transparent, '+c1+')'; },
  function(c1,c2,c3){ return 'linear-gradient(to bottom right, '+c1+' 0%, transparent 40%), linear-gradient(to top left, '+c2+' 0%, transparent 40%)'; },
  function(c1,c2,c3){ return 'linear-gradient(to bottom, '+c1+' 0%, '+c3+' 25%, transparent 55%)'; },
  function(c1,c2,c3){ return 'linear-gradient(to top, '+c2+' 0%, '+c3+' 25%, transparent 55%)'; },
  function(c1,c2,c3){ return 'linear-gradient(to bottom left, '+c1+' 0%, transparent 35%), linear-gradient(to top right, '+c2+' 0%, transparent 35%)'; },
  function(c1,c2,c3){ return 'radial-gradient(ellipse 120% 60% at 50% 0%, '+c1+' 0%, transparent 100%)'; },
  function(c1,c2,c3){ return 'linear-gradient(180deg, '+c1+' 0%, '+c3+' 40%, '+c2+' 100%)'; },
];
// Agregue aquí los nombres de archivo de sus imágenes de listones
// Los archivos deben estar en la carpeta "listones/" junto al HTML
// ─────────────────────────────────────────────────────────────
var LISTON_FILES = [
  'listones/liston1.png',
  'listones/liston2.png',
  'listones/liston3.png'
];

// ─────────────────────────────────────────────────────────────
// ESTILOS DE DECORACIÓN
// Cada objeto define un tema de decoraciones SVG
// ─────────────────────────────────────────────────────────────
var DECORATION_STYLES = [
  { id: 'none', name: 'Sin Decoraciones', hasCorners: false, hasDividers: false, hasBorder: false },
  {
    id: 'minimal-lines',
    name: 'Líneas Mínimas',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="200" height="10" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="5" x2="200" y2="5" stroke="${color}" stroke-width="0.8"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'double-line',
    name: 'Doble Línea',
    hasCorners: false, hasDividers: true, hasBorder: true,
    dividerSVG: (color) => `<svg width="240" height="14" viewBox="0 0 240 14" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="4" x2="240" y2="4" stroke="${color}" stroke-width="0.7"/><line x1="0" y1="10" x2="240" y2="10" stroke="${color}" stroke-width="0.7"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="${w-16}" height="${h-16}" stroke="${color}" stroke-width="0.8"/><rect x="12" y="12" width="${w-24}" height="${h-24}" stroke="${color}" stroke-width="0.5"/></svg>`,
    cornerSVG: null,
  },
  {
    id: 'ornamental-divider',
    name: 'Divisor Ornamental',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="280" height="20" viewBox="0 0 280 20" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="10" x2="120" y2="10" stroke="${color}" stroke-width="0.8"/><rect x="128" y="7" width="6" height="6" transform="rotate(45 131 10)" fill="${color}"/><line x1="142" y1="10" x2="280" y2="10" stroke="${color}" stroke-width="0.8"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'corner-ornaments',
    name: 'Esquinas Ornamentales',
    hasCorners: true, hasDividers: false, hasBorder: false,
    cornerSVG: (color) => `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5 L5 20 M5 5 L20 5" stroke="${color}" stroke-width="1.2" stroke-linecap="round"/><path d="M5 5 L5 14 M5 5 L14 5" stroke="${color}" stroke-width="0.6" stroke-linecap="round"/></svg>`,
    dividerSVG: null,
    borderSVG: null,
  },
  {
    id: 'victorian-border',
    name: 'Marco Victoriano',
    hasCorners: true, hasDividers: true, hasBorder: true,
    cornerSVG: (color) => `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6 L6 24 M6 6 L24 6" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/><path d="M6 6 L6 16 M6 6 L16 6" stroke="${color}" stroke-width="0.7" stroke-linecap="round"/><circle cx="6" cy="6" r="2" fill="${color}"/></svg>`,
    dividerSVG: (color) => `<svg width="300" height="20" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="10" x2="120" y2="10" stroke="${color}" stroke-width="0.8"/><path d="M130 10 Q140 4 150 10 Q160 16 170 10" stroke="${color}" stroke-width="0.8" fill="none"/><line x1="180" y1="10" x2="300" y2="10" stroke="${color}" stroke-width="0.8"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="${w-20}" height="${h-20}" stroke="${color}" stroke-width="0.8"/></svg>`,
  },
  {
    id: 'art-deco',
    name: 'Art Déco',
    hasCorners: true, hasDividers: true, hasBorder: true,
    cornerSVG: (color) => `<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5 L5 22 L12 22" stroke="${color}" stroke-width="1.2"/><path d="M5 5 L22 5 L22 12" stroke="${color}" stroke-width="1.2"/><path d="M5 5 L5 16 L10 16" stroke="${color}" stroke-width="0.5"/><path d="M5 5 L16 5 L16 10" stroke="${color}" stroke-width="0.5"/></svg>`,
    dividerSVG: (color) => `<svg width="280" height="16" viewBox="0 0 280 16" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="8" x2="100" y2="8" stroke="${color}" stroke-width="1"/><rect x="108" y="5" width="6" height="6" fill="${color}"/><line x1="120" y1="8" x2="160" y2="8" stroke="${color}" stroke-width="1"/><rect x="166" y="5" width="6" height="6" fill="${color}"/><line x1="174" y1="8" x2="280" y2="8" stroke="${color}" stroke-width="1"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="${w-12}" height="${h-12}" stroke="${color}" stroke-width="1.2"/><rect x="10" y="10" width="${w-20}" height="${h-20}" stroke="${color}" stroke-width="0.4"/></svg>`,
  },
  {
    id: 'floral-divider',
    name: 'Divisor Floral',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="280" height="24" viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="12" x2="100" y2="12" stroke="${color}" stroke-width="0.7"/><circle cx="115" cy="12" r="3" fill="${color}"/><circle cx="125" cy="8" r="2" fill="${color}" opacity="0.6"/><circle cx="125" cy="16" r="2" fill="${color}" opacity="0.6"/><circle cx="135" cy="12" r="1.5" fill="${color}" opacity="0.4"/><circle cx="145" cy="8" r="2" fill="${color}" opacity="0.6"/><circle cx="145" cy="16" r="2" fill="${color}" opacity="0.6"/><circle cx="155" cy="12" r="1.5" fill="${color}" opacity="0.4"/><circle cx="165" cy="8" r="2" fill="${color}" opacity="0.6"/><circle cx="165" cy="16" r="2" fill="${color}" opacity="0.6"/><line x1="180" y1="12" x2="280" y2="12" stroke="${color}" stroke-width="0.7"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'simple-border',
    name: 'Marco Simple',
    hasCorners: false, hasDividers: false, hasBorder: true,
    dividerSVG: null,
    cornerSVG: null,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="${w-16}" height="${h-16}" stroke="${color}" stroke-width="1"/></svg>`,
  },
  {
    id: 'cross-divider',
    name: 'Cruz Litúrgica',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="280" height="28" viewBox="0 0 280 28" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="14" x2="120" y2="14" stroke="${color}" stroke-width="0.8"/><path d="M136 6 L136 22 M130 12 L142 12" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/><line x1="150" y1="14" x2="280" y2="14" stroke="${color}" stroke-width="0.8"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },

  // ── 20 nuevas decoraciones ─────────────────────────────────────────────

  {
    id: 'triple-line',
    name: 'Triple Línea',
    hasCorners: false, hasDividers: true, hasBorder: true,
    dividerSVG: (color) => `<svg width="260" height="14" viewBox="0 0 260 14" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="2"  x2="260" y2="2"  stroke="${color}" stroke-width="1.2"/><line x1="0" y1="7"  x2="260" y2="7"  stroke="${color}" stroke-width="0.4"/><line x1="0" y1="12" x2="260" y2="12" stroke="${color}" stroke-width="1.2"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="${w-10}" height="${h-10}" stroke="${color}" stroke-width="1.2"/><rect x="9" y="9" width="${w-18}" height="${h-18}" stroke="${color}" stroke-width="0.4"/><rect x="13" y="13" width="${w-26}" height="${h-26}" stroke="${color}" stroke-width="1.2"/></svg>`,
    cornerSVG: null,
  },
  {
    id: 'wave-divider',
    name: 'Ola Continua',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="300" height="18" viewBox="0 0 300 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 9 Q12 3 24 9 Q36 15 48 9 Q60 3 72 9 Q84 15 96 9 Q108 3 120 9 Q132 15 144 9 Q156 3 168 9 Q180 15 192 9 Q204 3 216 9 Q228 15 240 9 Q252 3 264 9 Q276 15 288 9 Q294 6 300 9" stroke="${color}" stroke-width="0.9" fill="none"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'dot-dash',
    name: 'Punto y Raya',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="280" height="8" viewBox="0 0 280 8" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="4" x2="280" y2="4" stroke="${color}" stroke-width="0.8" stroke-dasharray="1 5 8 5"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'diamond-chain',
    name: 'Cadena de Rombos',
    hasCorners: true, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="280" height="18" viewBox="0 0 280 18" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="9" x2="88" y2="9" stroke="${color}" stroke-width="0.7"/><rect x="92" y="4" width="10" height="10" transform="rotate(45 97 9)" stroke="${color}" stroke-width="0.8" fill="none"/><line x1="104" y1="9" x2="112" y2="9" stroke="${color}" stroke-width="0.7"/><rect x="116" y="4" width="10" height="10" transform="rotate(45 121 9)" fill="${color}"/><line x1="128" y1="9" x2="136" y2="9" stroke="${color}" stroke-width="0.7"/><rect x="140" y="4" width="10" height="10" transform="rotate(45 145 9)" stroke="${color}" stroke-width="0.8" fill="none"/><line x1="152" y1="9" x2="160" y2="9" stroke="${color}" stroke-width="0.7"/><rect x="164" y="4" width="10" height="10" transform="rotate(45 169 9)" fill="${color}"/><line x1="176" y1="9" x2="184" y2="9" stroke="${color}" stroke-width="0.7"/><rect x="188" y="4" width="10" height="10" transform="rotate(45 193 9)" stroke="${color}" stroke-width="0.8" fill="none"/><line x1="200" y1="9" x2="280" y2="9" stroke="${color}" stroke-width="0.7"/></svg>`,
    cornerSVG: (color) => `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="12" height="12" transform="rotate(45 12 12)" stroke="${color}" stroke-width="1.2" fill="none"/><path d="M6 6 L6 22 M6 6 L22 6" stroke="${color}" stroke-width="0.5"/></svg>`,
    borderSVG: null,
  },
  {
    id: 'rose-window',
    name: 'Rosetón',
    hasCorners: true, hasDividers: true, hasBorder: true,
    cornerSVG: (color) => `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5 L5 25 M5 5 L25 5" stroke="${color}" stroke-width="1.4" stroke-linecap="round"/><circle cx="5" cy="5" r="3.5" fill="${color}"/><circle cx="5" cy="5" r="6" stroke="${color}" stroke-width="0.5" fill="none"/></svg>`,
    dividerSVG: (color) => `<svg width="300" height="22" viewBox="0 0 300 22" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="11" x2="122" y2="11" stroke="${color}" stroke-width="0.7"/><circle cx="138" cy="11" r="7" stroke="${color}" stroke-width="0.8" fill="none"/><circle cx="138" cy="11" r="3" fill="${color}"/><line x1="150" y1="8" x2="150" y2="14" stroke="${color}" stroke-width="0.6"/><line x1="126" y1="8" x2="126" y2="14" stroke="${color}" stroke-width="0.6"/><line x1="154" y1="11" x2="300" y2="11" stroke="${color}" stroke-width="0.7"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="${w-16}" height="${h-16}" stroke="${color}" stroke-width="1"/></svg>`,
  },
  {
    id: 'greek-key',
    name: 'Clave Griega',
    hasCorners: true, hasDividers: true, hasBorder: false,
    cornerSVG: (color) => `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5 L20 5 L20 10 L10 10 L10 20 L5 20 Z" stroke="${color}" stroke-width="1" fill="none" stroke-linejoin="round"/></svg>`,
    dividerSVG: (color) => `<svg width="280" height="16" viewBox="0 0 280 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14 L0 8 L6 8 L6 2 L12 2 L12 8 L18 8 L18 14" stroke="${color}" stroke-width="0.9" fill="none" stroke-linejoin="round"/><line x1="20" y1="14" x2="120" y2="14" stroke="${color}" stroke-width="0.9"/><rect x="126" y="10" width="8" height="8" transform="rotate(45 130 14)" fill="${color}"/><line x1="136" y1="14" x2="144" y2="14" stroke="${color}" stroke-width="0.9"/><rect x="150" y="10" width="8" height="8" transform="rotate(45 154 14)" fill="${color}"/><line x1="160" y1="14" x2="260" y2="14" stroke="${color}" stroke-width="0.9"/><path d="M262 14 L262 8 L268 8 L268 2 L274 2 L274 8 L280 8 L280 14" stroke="${color}" stroke-width="0.9" fill="none" stroke-linejoin="round"/></svg>`,
    borderSVG: null,
  },
  {
    id: 'laurel-branch',
    name: 'Rama de Laurel',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="300" height="24" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="12" x2="90" y2="12" stroke="${color}" stroke-width="0.7"/><path d="M100 12 Q104 6 110 8 Q106 12 100 12 Z" fill="${color}" opacity="0.7"/><path d="M108 12 Q112 6 118 8 Q114 12 108 12 Z" fill="${color}" opacity="0.8"/><path d="M116 12 Q120 6 126 8 Q122 12 116 12 Z" fill="${color}"/><circle cx="140" cy="12" r="2.5" fill="${color}"/><circle cx="148" cy="9" r="1.5" fill="${color}" opacity="0.6"/><circle cx="148" cy="15" r="1.5" fill="${color}" opacity="0.6"/><path d="M160 12 Q164 6 170 8 Q166 12 160 12 Z" fill="${color}" transform="scale(-1,1) translate(-320,0)"/><path d="M168 12 Q172 6 178 8 Q174 12 168 12 Z" fill="${color}" opacity="0.8" transform="scale(-1,1) translate(-320,0)"/><path d="M176 12 Q180 6 186 8 Q182 12 176 12 Z" fill="${color}" opacity="0.7" transform="scale(-1,1) translate(-320,0)"/><line x1="192" y1="12" x2="300" y2="12" stroke="${color}" stroke-width="0.7"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'zigzag-border',
    name: 'Zigzag',
    hasCorners: false, hasDividers: true, hasBorder: true,
    dividerSVG: (color) => `<svg width="280" height="12" viewBox="0 0 280 12" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="0,10 10,2 20,10 30,2 40,10 50,2 60,10 70,2 80,10 90,2 100,10 110,2 120,10 130,2 140,10 150,2 160,10 170,2 180,10 190,2 200,10 210,2 220,10 230,2 240,10 250,2 260,10 270,2 280,10" stroke="${color}" stroke-width="0.8" fill="none"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="${w-18}" height="${h-18}" stroke="${color}" stroke-width="0.9"/></svg>`,
    cornerSVG: null,
  },
  {
    id: 'scallop-edge',
    name: 'Borde Festoneado',
    hasCorners: false, hasDividers: true, hasBorder: true,
    dividerSVG: (color) => `<svg width="300" height="16" viewBox="0 0 300 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8 A6 6 0 0 1 12 8 A6 6 0 0 1 24 8 A6 6 0 0 1 36 8 A6 6 0 0 1 48 8 A6 6 0 0 1 60 8 A6 6 0 0 1 72 8 A6 6 0 0 1 84 8 A6 6 0 0 1 96 8 A6 6 0 0 1 108 8 A6 6 0 0 1 120 8 A6 6 0 0 1 132 8 A6 6 0 0 1 144 8 A6 6 0 0 1 156 8 A6 6 0 0 1 168 8 A6 6 0 0 1 180 8 A6 6 0 0 1 192 8 A6 6 0 0 1 204 8 A6 6 0 0 1 216 8 A6 6 0 0 1 228 8 A6 6 0 0 1 240 8 A6 6 0 0 1 252 8 A6 6 0 0 1 264 8 A6 6 0 0 1 276 8 A6 6 0 0 1 288 8 A6 6 0 0 1 300 8" stroke="${color}" stroke-width="0.8" fill="none"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="${w-20}" height="${h-20}" stroke="${color}" stroke-width="0.8" rx="2"/></svg>`,
    cornerSVG: null,
  },
  {
    id: 'stars-divider',
    name: 'Estrellas',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="280" height="20" viewBox="0 0 280 20" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="10" x2="110" y2="10" stroke="${color}" stroke-width="0.7"/><path d="M124 3 L126 9 L132 9 L127 13 L129 19 L124 15 L119 19 L121 13 L116 9 L122 9 Z" fill="${color}" opacity="0.8"/><path d="M140 5 L141.5 9 L146 9 L142.5 12 L144 16 L140 13.5 L136 16 L137.5 12 L134 9 L138.5 9 Z" fill="${color}" opacity="0.5"/><path d="M156 3 L158 9 L164 9 L159 13 L161 19 L156 15 L151 19 L153 13 L148 9 L154 9 Z" fill="${color}" opacity="0.8"/><line x1="168" y1="10" x2="280" y2="10" stroke="${color}" stroke-width="0.7"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'feather-corner',
    name: 'Esquinas Pluma',
    hasCorners: true, hasDividers: false, hasBorder: false,
    cornerSVG: (color) => `<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6 Q18 6 22 18" stroke="${color}" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M6 6 Q6 18 18 22" stroke="${color}" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M6 6 Q14 10 14 20" stroke="${color}" stroke-width="0.6" fill="none" stroke-linecap="round"/><path d="M6 6 Q10 14 20 14" stroke="${color}" stroke-width="0.6" fill="none" stroke-linecap="round"/><circle cx="6" cy="6" r="2" fill="${color}"/></svg>`,
    dividerSVG: null,
    borderSVG: null,
  },
  {
    id: 'double-wave',
    name: 'Doble Ola',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="300" height="20" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6 Q10 2 20 6 Q30 10 40 6 Q50 2 60 6 Q70 10 80 6 Q90 2 100 6 Q110 10 120 6 Q130 2 140 6 Q150 10 160 6 Q170 2 180 6 Q190 10 200 6 Q210 2 220 6 Q230 10 240 6 Q250 2 260 6 Q270 10 280 6 Q290 2 300 6" stroke="${color}" stroke-width="0.7" fill="none"/><path d="M0 14 Q10 10 20 14 Q30 18 40 14 Q50 10 60 14 Q70 18 80 14 Q90 10 100 14 Q110 18 120 14 Q130 10 140 14 Q150 18 160 14 Q170 10 180 14 Q190 18 200 14 Q210 10 220 14 Q230 18 240 14 Q250 10 260 14 Q270 18 280 14 Q290 10 300 14" stroke="${color}" stroke-width="0.7" fill="none"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'bracket-corners',
    name: 'Corchetes',
    hasCorners: true, hasDividers: true, hasBorder: false,
    cornerSVG: (color) => `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 18 L5 5 L18 5" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="square"/></svg>`,
    dividerSVG: (color) => `<svg width="260" height="10" viewBox="0 0 260 10" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="5" x2="260" y2="5" stroke="${color}" stroke-width="0.6" stroke-dasharray="3 3"/></svg>`,
    borderSVG: null,
  },
  {
    id: 'gothic-arch',
    name: 'Arco Gótico',
    hasCorners: true, hasDividers: true, hasBorder: true,
    cornerSVG: (color) => `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 30 Q6 6 20 6 L6 6 Z" stroke="${color}" stroke-width="1" fill="none"/><path d="M6 6 L26 6" stroke="${color}" stroke-width="1" stroke-linecap="round"/><path d="M6 6 L6 26" stroke="${color}" stroke-width="1" stroke-linecap="round"/><path d="M10 10 L22 10" stroke="${color}" stroke-width="0.5"/><path d="M10 10 L10 22" stroke="${color}" stroke-width="0.5"/></svg>`,
    dividerSVG: (color) => `<svg width="280" height="18" viewBox="0 0 280 18" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="9" x2="100" y2="9" stroke="${color}" stroke-width="0.8"/><path d="M108 16 Q114 2 120 16" stroke="${color}" stroke-width="0.8" fill="none"/><path d="M120 16 Q126 2 132 16" stroke="${color}" stroke-width="0.8" fill="none"/><line x1="140" y1="9" x2="280" y2="9" stroke="${color}" stroke-width="0.8"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="7" width="${w-14}" height="${h-14}" stroke="${color}" stroke-width="1" rx="0"/></svg>`,
  },
  {
    id: 'pearl-strand',
    name: 'Hilo de Perlas',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="280" height="14" viewBox="0 0 280 14" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="7" x2="280" y2="7" stroke="${color}" stroke-width="0.5"/><circle cx="20" cy="7" r="2.5" fill="${color}"/><circle cx="36" cy="7" r="2.5" fill="${color}"/><circle cx="52" cy="7" r="2.5" fill="${color}"/><circle cx="68" cy="7" r="2.5" fill="${color}"/><circle cx="84" cy="7" r="2.5" fill="${color}"/><circle cx="100" cy="7" r="3.5" fill="${color}"/><circle cx="116" cy="7" r="2.5" fill="${color}"/><circle cx="132" cy="7" r="4" fill="${color}"/><circle cx="148" cy="7" r="2.5" fill="${color}"/><circle cx="164" cy="7" r="3.5" fill="${color}"/><circle cx="180" cy="7" r="2.5" fill="${color}"/><circle cx="196" cy="7" r="2.5" fill="${color}"/><circle cx="212" cy="7" r="2.5" fill="${color}"/><circle cx="228" cy="7" r="2.5" fill="${color}"/><circle cx="244" cy="7" r="2.5" fill="${color}"/><circle cx="260" cy="7" r="2.5" fill="${color}"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'sunburst-corner',
    name: 'Esquinas Radiantes',
    hasCorners: true, hasDividers: false, hasBorder: false,
    cornerSVG: (color) => `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6 L22 6" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/><path d="M6 6 L6 22" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/><path d="M6 6 L18 18" stroke="${color}" stroke-width="0.7" stroke-linecap="round"/><path d="M6 6 L22 12" stroke="${color}" stroke-width="0.7" stroke-linecap="round"/><path d="M6 6 L12 22" stroke="${color}" stroke-width="0.7" stroke-linecap="round"/><circle cx="6" cy="6" r="2.5" fill="${color}"/></svg>`,
    dividerSVG: null,
    borderSVG: null,
  },
  {
    id: 'baroque-full',
    name: 'Barroco Completo',
    hasCorners: true, hasDividers: true, hasBorder: true,
    cornerSVG: (color) => `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5 L5 28 M5 5 L28 5" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/><path d="M5 5 L5 18 M5 5 L18 5" stroke="${color}" stroke-width="0.6" stroke-linecap="round"/><circle cx="5" cy="5" r="3" fill="${color}"/><path d="M12 5 Q12 12 5 12" stroke="${color}" stroke-width="0.5" fill="none"/></svg>`,
    dividerSVG: (color) => `<svg width="300" height="24" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="12" x2="100" y2="12" stroke="${color}" stroke-width="0.8"/><path d="M106 12 Q110 6 114 12 Q118 18 122 12 Q126 6 130 12" stroke="${color}" stroke-width="0.8" fill="none"/><line x1="132" y1="12" x2="168" y2="12" stroke="${color}" stroke-width="0.8"/><path d="M170 12 Q174 6 178 12 Q182 18 186 12 Q190 6 194 12" stroke="${color}" stroke-width="0.8" fill="none"/><line x1="196" y1="12" x2="300" y2="12" stroke="${color}" stroke-width="0.8"/></svg>`,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="${w-12}" height="${h-12}" stroke="${color}" stroke-width="1.3"/><rect x="11" y="11" width="${w-22}" height="${h-22}" stroke="${color}" stroke-width="0.5"/></svg>`,
  },
  {
    id: 'leaf-corners',
    name: 'Hojas en Esquinas',
    hasCorners: true, hasDividers: false, hasBorder: true,
    cornerSVG: (color) => `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6 Q22 6 22 22 Q6 22 6 6 Z" stroke="${color}" stroke-width="1" fill="none"/><path d="M6 6 L22 22" stroke="${color}" stroke-width="0.5"/></svg>`,
    dividerSVG: null,
    borderSVG: (color, w, h) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="${w-16}" height="${h-16}" stroke="${color}" stroke-width="0.9"/></svg>`,
  },
  {
    id: 'minimalist-cross',
    name: 'Cruz Minimalista',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="280" height="12" viewBox="0 0 280 12" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="6" x2="127" y2="6" stroke="${color}" stroke-width="0.6"/><line x1="134" y1="0" x2="134" y2="12" stroke="${color}" stroke-width="1.4" stroke-linecap="round"/><line x1="128" y1="6" x2="140" y2="6" stroke="${color}" stroke-width="0.8" stroke-linecap="round"/><line x1="142" y1="6" x2="280" y2="6" stroke="${color}" stroke-width="0.6"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
  {
    id: 'elegant-corners-only',
    name: 'Esquinas Elegantes',
    hasCorners: true, hasDividers: false, hasBorder: false,
    cornerSVG: (color) => `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 22 L5 5 L22 5" stroke="${color}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 18 L9 9 L18 9" stroke="${color}" stroke-width="0.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    dividerSVG: null,
    borderSVG: null,
  },
  {
    id: 'ribbon-divider',
    name: 'Cinta Ondulada',
    hasCorners: false, hasDividers: true, hasBorder: false,
    dividerSVG: (color) => `<svg width="300" height="14" viewBox="0 0 300 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4 L20 4 Q25 4 25 7 Q25 10 30 10 L50 10 Q55 10 55 7 Q55 4 60 4 L80 4 Q85 4 85 7 Q85 10 90 10 L110 10 Q115 10 115 7 Q115 4 120 4 L140 4 Q145 4 145 7 Q145 10 150 10 L170 10 Q175 10 175 7 Q175 4 180 4 L200 4 Q205 4 205 7 Q205 10 210 10 L230 10 Q235 10 235 7 Q235 4 240 4 L260 4 Q265 4 265 7 Q265 10 270 10 L290 10 L300 10" stroke="${color}" stroke-width="0.8" fill="none"/></svg>`,
    borderSVG: null,
    cornerSVG: null,
  },
];
