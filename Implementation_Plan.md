# Implementation Plan: JHFLOW → TigerFlow Rebranding

> **Status:** Entwurf — warte auf Freigabe  
> **Erstellt:** 2026-05-14  
> **Ausführung:** ERST nach expliziter Freigabe starten

---

## 1. Projektanalyse

### Technischer Stack
| Eigenschaft | Wert |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling-Ansatz | CSS-in-JS (inline styles + CSS-String in JSX) |
| Keine externe Style-Bibliothek | kein Tailwind, kein CSS Modules, keine Theme-Tokens-Datei |
| Komponenten | Alle in einer einzigen Datei: `src/App.jsx` |
| CSS-Reset & Keyframes | Im `GLOBAL_CSS`-String innerhalb `App.jsx` |
| Externe Schriften | Google Fonts (`Inter`) via `@import` in `GLOBAL_CSS` |

### Kritische Erkenntnis
Das gesamte Design lebt in **einer Datei**: `src/App.jsx`.  
Es gibt kein separates Theme-File, keine CSS-Variablen, keine Token-Datei.  
Alle Farbwerte sind entweder im `C`-Objekt (Zeile 3–8) oder als **hartcodierte RGBA-Strings** im JSX-Markup verstreut.  
Das bedeutet: Rebranding erfordert präzises, zeilenweises Arbeiten an `src/App.jsx`.

---

## 2. Betroffene Dateien

| Datei | Änderungstyp | Priorität |
|---|---|---|
| `src/App.jsx` | Farben (C-Objekt + RGBA-Strings), Brand-Texte, TigerBot, Copyright | **Hauptarbeit** |
| `index.html` | Title, Meta Description, Favicon-Link | Hoch |
| `public/favicon.svg` | Vollständig ersetzen (Vite-Default → TigerFlow Orange) | Hoch |
| `package.json` | `name: "jhflow-landing"` → `"tigerflow-landing"` | Niedrig (intern) |

**Nicht anfassen:**
- `vite.config.js` — keine Brand-Referenzen
- `src/App.css` / `src/index.css` — leer
- `src/main.jsx` — nur Mount-Code
- `eslint.config.js` — kein Brand-Bezug
- `.gitignore`, `README.md` — optional, kein visueller Einfluss

---

## 3. Rebranding-Strategie

### Prinzip: Chirurgische Präzision
- **Nur ersetzen, was sichtbar ist oder Brand-relevant** ist
- Kein Refactoring, keine Strukturänderung
- Alle Animationen, Hooks, Breakpoints, Layouts bleiben unangetastet
- Keine neuen Komponenten, keine neuen Sections

### Drei Ebenen der Änderung
1. **Farbpalette** — `C`-Objekt + alle hartcodierten RGBA-Werte im Code
2. **Texte** — alle "JHFLOW"-Vorkommnisse + Copyright-Jahr + TigerBot-Naming
3. **Favicon** — neue SVG mit Orange-Palette

---

## 4. Farbpalette

### Mapping: Alt → Neu

| Token | Alte Farbe (Blau) | Neue Farbe (Tiger) | Hex-Wert | Bedeutung |
|---|---|---|---|---|
| `pageBg` | `#0B0B0F` | `#070707` | ![](https://via.placeholder.com/12/070707/070707) | Tiefstes Schwarz |
| `surface` | `#111117` | `#111111` | | Surface-Ebene 1 |
| `elevated` | `#18181F` | `#181818` | | Surface-Ebene 2 |
| `border` | `#1E1E28` | `#1C1C1C` | | Subtile Trennlinie |
| `borderEm` | `#2A2A35` | `#2A2A2A` | | Betonte Trennlinie |
| `textPri` | `#F0F0F2` | `#F8F5EF` | | Warm White (Primärtext) |
| `textSec` | `#7A7A8A` | `#A3A3A3` | | Gedämpfter Text |
| `textTer` | `#4A4A5A` | `#6B6B6B` | | Tertiärer Text |
| `textDis` | `#2A2A38` | `#333333` | | Disabled / unsichtbar |
| `accent` | `#4F7EFF` | `#FF7A00` | | **Tiger Orange** — Hauptakzent |
| `accentHov` | `#3D6CEE` | `#E85D04` | | Deep Tiger Orange (Hover) |
| `accentLt` | `#6B9FFF` | `#FFB000` | | Amber Glow (helles Highlight) |
| `accentTint` | `#0D1838` | `#1A0A00` | | Sehr dunkler Orange-Tint (Hintergrund) |
| `accentMid` | `#1A2848` | `#2D1200` | | Mittlerer Orange-Tint (Border) |

### Hardcodierte RGBA-Werte (nicht im C-Objekt)

Diese Werte erscheinen als Strings direkt im Code und müssen manuell gesucht und ersetzt werden:

| Alter Wert | Neuer Wert | Vorkommen |
|---|---|---|
| `rgba(79,126,255,0.045)` | `rgba(255,122,0,0.04)` | GLOBAL_CSS — Grid-SVG-Linie |
| `rgba(79,126,255,0.065)` | `rgba(255,122,0,0.065)` | GridBg — Ambient Glow |
| `rgba(79,126,255,0.14)` | `rgba(255,122,0,0.18)` | GLOBAL_CSS — CTA Button Glow-Ring |
| `rgba(79,126,255,0.18)` | `rgba(255,122,0,0.16)` | DashboardMockup — Status-Chip Border |
| `rgba(79,126,255,0.18)` | `rgba(255,122,0,0.12)` | DashboardMockup — Icon-Hintergrund |
| `rgba(79,126,255,0.09)` | `rgba(255,122,0,0.08)` | DashboardMockup — Tabellenzeile Icon |
| `rgba(79,126,255,0.2)` | `rgba(255,122,0,0.18)` | DashboardMockup — Mini-Balken-Chart |
| `rgba(79,126,255,0.025)` | `rgba(255,122,0,0.025)` | DashboardMockup — Highlighted Row |
| `rgba(79,126,255,0.28)` | `rgba(255,122,0,0.28)` | DashboardMockup — Chip Border betont |
| `#4F7EFF` | `#FF7A00` | GLOBAL_CSS — `.card-hover:hover` Border |

> **Hinweis:** Ein Grep nach `79,126,255` im Projekt findet alle Stellen zuverlässig.

### Farbpalette — Visuelle Referenz

```
Background   #070707  ████████  Tiefes Schwarz
Surface      #111111  ████████  Dunkle Oberfläche
Surface Soft #181818  ████████  Erhöhte Oberfläche
Tiger Orange #FF7A00  ████████  Primärfarbe / CTA / Akzent
Deep Orange  #E85D04  ████████  Hover-Zustand
Amber Glow   #FFB000  ████████  Highlights / Badges
Warm White   #F8F5EF  ████████  Primärtext
Muted        #A3A3A3  ████████  Sekundärtext
Border       #1C1C1C  ████████  Subtile Linien
```

---

## 5. Textänderungen: JHFLOW → TigerFlow

### Vollständige Übersicht aller JHFLOW-Vorkommnisse

| Zeile | Datei | Aktueller Text | Neuer Text |
|---|---|---|---|
| `<title>` | `index.html` | `JHFLOW · AI Systems & Webdesign` | `TigerFlow · AI Systems & Automation` |
| `<meta description>` | `index.html` | `…Wir bauen AI-Chatbots… für Ihr Wachstum.` | `TigerFlow baut AI-Systeme, die verkaufen. Voice Agents, Chatbots, CRM & Automation — schnell, präzise, skalierbar.` |
| Zeile 236 | `App.jsx` | `JHFLOW` (Navbar Logo-Text) | `TigerFlow` |
| Zeile 258 | `App.jsx` | `JHFLOW · AI Systems & Webdesign` (Hero Badge) | `TigerFlow · AI Systems & Automation` |
| Zeile 485 | `App.jsx` | `JHFLOW` (Footer Markenname) | `TigerFlow` |
| Zeile 492 | `App.jsx` | `© 2025 JHFLOW. Alle Rechte vorbehalten.` | `© 2026 TigerFlow. Alle Rechte vorbehalten.` |
| Zeile 1 | `package.json` | `"name": "jhflow-landing"` | `"name": "tigerflow-landing"` |

### Subtexte / Slogan-Anpassungen

| Bereich | Aktuell | Vorschlag |
|---|---|---|
| Hero Subtext (Zeile 270) | `Automatisierung, die verkauft. Systeme, die arbeiten — auch wenn Sie es nicht tun.` | **Beibehalten** — passt perfekt zu TigerFlow |
| Hero Badge Subtext | `JHFLOW · AI Systems & Webdesign` | `TigerFlow · AI Systems & Automation` |
| Services Headline (Zeile 343) | `Sechs Systeme. Ein Ziel: Wachstum.` | **Beibehalten** — stark und neutral |
| CTA Headline (Zeile 456) | `Bereit, wenn Sie es sind.` | **Beibehalten** |

---

## 6. TigerBot Naming

### Aktuelle Situation
Im Code gibt es noch keinen expliziten Bot-Namen. Der Chatbot-Service ist generisch als "AI Chatbots" bezeichnet.

### Ziel-Zustand
`TigerBot` als Produktname für den AI-Chatbot-Service einführen — subtil und premium, kein Marketing-Schrei.

### Konkrete Änderungen in `App.jsx` (Services-Array, ca. Zeile 332)

| Feld | Aktuell | Neu |
|---|---|---|
| `title` | `"AI Chatbots"` | `"AI Chatbots"` *(bleibt)* |
| `sub` | `"24/7 Qualifizierung"` | `"TigerBot — 24/7"` |
| `body` | `"Intelligente Chatbots, die qualifizieren, antworten und buchen — ohne menschliche Intervention bei Standardanfragen."` | `"TigerBot qualifiziert, antwortet und bucht — rund um die Uhr, ohne menschliche Intervention bei Standardanfragen."` |

### TYPED_WORDS (Hero Typing-Animation, Zeile 51)
```js
// Aktuell:
["AI-Chatbots.", "Voice Agents.", "CRM-Systeme.", "Workflows.", "Webdesign."]

// Neu (keine Reihenfolgeänderung, nur TigerBot-Referenz):
["AI-Chatbots.", "Voice Agents.", "CRM-Systeme.", "Workflows.", "Webdesign."]
```
> **Empfehlung:** `TYPED_WORDS` unverändert lassen — die Worte sind Service-Kategorien, kein Brand-Name. TigerBot wird nur im Service-Card referenziert.

---

## 7. Design-Elemente: Tiger-Identität

### Was geändert wird
1. **Grid-Linienfarbe** im `GridBg`-SVG: Blau → Orange (sehr subtil, fast unsichtbar wie bisher)
2. **Ambient Glow** im Hero: Blau-Glow → Orange-Glow (gleiche Stärke `0.065` Opacity)
3. **Dashboard Mockup Farben**: Alle blauen Akzente → Orange-Varianten
4. **Card Hover Border**: `#4F7EFF` → `#FF7A00`
5. **CTA Button Glow Ring**: Blau → Orange

### Was NICHT geändert wird
- Keine Tiger-Illustrations, keine Paw-Icons, keine Stripe-Muster (zu riskant für Premium-Look)
- Kein neues Hero-Element
- Keine Typografie-Änderung (Inter bleibt)
- Keine Layout-Änderungen

### Dashboard Mockup: Farb-Update
Der "Voice Agent aktiv"-Chip (grüner Dot) und die Balken-Chart bleiben unverändert — die Grün-Töne (`#4ADE80`) sind Statusindikatoren, kein Brand-Element.

---

## 8. Favicon: Ersatz-Plan

### Aktuell
`public/favicon.svg` — Vite-Default-Bolt in Lila/Violett

### Neu: TigerFlow-Favicon
Ein neues SVG-Favicon wird erstellt mit:
- **Form:** Stilisierter "T"-Flow — ein diagonaler Pfeil oder Blitzform in Orange
- **Farbe:** `#FF7A00` (Tiger Orange) auf transparentem Hintergrund
- **Größe:** 48×48 Viewport (wie das bestehende)
- **Stil:** Monochromes Icon, kein Text, keine komplexe Illustration

Der `<link rel="icon">` in `index.html` zeigt bereits auf `/vite.svg` — muss auf `/favicon.svg` umgestellt werden, wenn das neue Favicon als `favicon.svg` gespeichert wird (oder alternativ `/favicon.ico` hinzufügen).

---

## 9. Risiken & Sperrzonen

### Risiken

| Risiko | Beschreibung | Maßnahme |
|---|---|---|
| **Verstreute RGBA-Werte** | Ca. 10 RGBA-Werte sind nicht im `C`-Objekt — können übersehen werden | Grep nach `79,126,255` vor und nach Änderung |
| **Orange auf Dunklem = schlechter Kontrast** | Orange (#FF7A00) auf #111111 hat ca. 4.2:1 Kontrastverhältnis — an der WCAG AA-Grenze | Nur für dekorative Elemente verwenden; Primärtext bleibt warm-weiß |
| **Amber (#FFB000) zu grell** | `accentLt: "#FFB000"` könnte auf dunkel zu hell wirken | Nur für kleine Highlight-Elemente (Monospace-Zahlen, Badge-Text), nie für Fließtext |
| **CSS-String-Injection** | `GLOBAL_CSS` wird via `<style>` injiziert — SSR-Probleme möglich | Kein neues Problem, bestehend — nicht ändern |
| **SVG IDs im GridBg** | `id="grid"`, `id="gfade"`, `id="gmask"` — interne SVG-Referenzen | Nicht umbenennen |

### Sperrzonen — NICHT ANFASSEN

```
✗ Alle useEffect-Hooks (useTyped, useReveal, useMouseParallax)
✗ AnimationKeyframes (blink, fadeUp, spin, floatA, floatB)
✗ Alle Media Queries in GLOBAL_CSS
✗ Grid-Layout-Klassen (.grid-3, .grid-2, .stats-grid)
✗ Section-Reihenfolge (Hero → Problem → Services → Process → Results → CTA → Footer)
✗ Scroll-Behavior und IntersectionObserver-Logik
✗ DashboardMockup-Struktur und 3D-Perspektiv-Transforms
✗ Grüne Statusindikatoren (#4ADE80) — kein Brand-Element
✗ Navbar-Scroll-Blur-Logik
✗ CTA-Formular-Logik (handleSubmit, Status-States)
✗ Alle `aria-hidden` Attribute und Barrierefreiheits-Attribute
```

---

## 10. Schritt-für-Schritt-Ausführungsplan

> Jeder Schritt ist einzeln, kontrolliert und reversibel.  
> Nach jedem Schritt: kurzer visueller Check im Browser empfohlen.

---

### Schritt 1 — `index.html` aktualisieren
**Datei:** `index.html`

- [ ] `<title>` ändern: `JHFLOW · AI Systems & Webdesign` → `TigerFlow · AI Systems & Automation`
- [ ] `<meta name="description">` aktualisieren
- [ ] `<link rel="icon" href="/vite.svg">` → `<link rel="icon" href="/favicon.svg">`

---

### Schritt 2 — Farbpalette `C`-Objekt ersetzen
**Datei:** `src/App.jsx`, Zeilen 3–8

Altes `C`-Objekt vollständig durch neues ersetzen:
```js
const C = {
  pageBg:"#070707", surface:"#111111", elevated:"#181818",
  border:"#1C1C1C", borderEm:"#2A2A2A",
  textPri:"#F8F5EF", textSec:"#A3A3A3", textTer:"#6B6B6B", textDis:"#333333",
  accent:"#FF7A00", accentHov:"#E85D04", accentLt:"#FFB000",
  accentTint:"#1A0A00", accentMid:"#2D1200",
};
```

---

### Schritt 3 — GLOBAL_CSS: RGBA-Werte ersetzen
**Datei:** `src/App.jsx`, Zeilen 10–48 (GLOBAL_CSS-String)

- [ ] `.card-hover:hover { border-color:#4F7EFF!important ... }` → `border-color:#FF7A00!important`
- [ ] `.cta-btn:hover { ... box-shadow:0 0 0 4px rgba(79,126,255,.14) }` → `rgba(255,122,0,.18)`
- [ ] SVG Grid-Stroke `rgba(79,126,255,0.045)` → `rgba(255,122,0,0.04)`

---

### Schritt 4 — GridBg Komponente: Ambient Glow
**Datei:** `src/App.jsx`, ca. Zeile 139 (GridBg-Komponente)

- [ ] `rgba(79,126,255,0.065)` → `rgba(255,122,0,0.065)` im radial-gradient des Glow-Divs

---

### Schritt 5 — DashboardMockup: Alle blauen Werte
**Datei:** `src/App.jsx`, Zeilen 147–229 (DashboardMockup-Komponente)

- [ ] `rgba(79,126,255,0.025)` → `rgba(255,122,0,0.025)` (Highlight-Row)
- [ ] `rgba(79,126,255,0.09)` → `rgba(255,122,0,0.08)` (Row-Icon Hintergrund)
- [ ] `rgba(79,126,255,0.18)` → `rgba(255,122,0,0.14)` (Toggle-Pill highlighted)
- [ ] `rgba(79,126,255,0.18)` → `rgba(255,122,0,0.16)` (Float-Card Border — Layer 1)
- [ ] `rgba(79,126,255,0.18)` → `rgba(255,122,0,0.12)` (Icon-Hintergrund im Card — Layer 1)
- [ ] `rgba(79,126,255,0.2)` → `rgba(255,122,0,0.18)` (Balken-Chart nicht-aktive Bars)
- [ ] `rgba(79,126,255,0.28)` → `rgba(255,122,0,0.28)` (Status-Chip Border — Layer 2)
- [ ] `rgba(11,20,46,0.92)` → `rgba(18,8,0,0.92)` (Status-Chip Hintergrund — Layer 2)

---

### Schritt 6 — Brand-Texte ersetzen
**Datei:** `src/App.jsx`

- [ ] Zeile 236: `JHFLOW` → `TigerFlow` (Navbar)
- [ ] Zeile 258: `JHFLOW · AI Systems & Webdesign` → `TigerFlow · AI Systems & Automation` (Hero Badge)
- [ ] Zeile 485: `JHFLOW` → `TigerFlow` (Footer)
- [ ] Zeile 492: `© 2025 JHFLOW` → `© 2026 TigerFlow`

---

### Schritt 7 — TigerBot Naming
**Datei:** `src/App.jsx`, ca. Zeile 332 (services-Array in Services-Komponente)

- [ ] `sub: "24/7 Qualifizierung"` → `sub: "TigerBot — 24/7"`
- [ ] `body` des Chatbot-Cards: "Intelligente Chatbots…" → "TigerBot qualifiziert…"

---

### Schritt 8 — Neues Favicon erstellen
**Datei:** `public/favicon.svg` (ersetzen)

Ein neues SVG-Favicon in Tiger-Orange wird erstellt.  
Design: Stilisiertes "T>" — ein Buchstabe T mit einem Pfeil/Flow-Element in `#FF7A00`.

---

### Schritt 9 — package.json (optional)
**Datei:** `package.json`

- [ ] `"name": "jhflow-landing"` → `"name": "tigerflow-landing"`

> Ändert nur den internen npm-Namen, kein Einfluss auf das Produkt.

---

## 11. Checkliste — Browser-Kontrolle nach Umsetzung

### Farben
- [ ] Hero-Section: Glow-Hintergrund ist orange, nicht blau
- [ ] Grid-Linien: Sehr subtil orange erkennbar (nicht blau)
- [ ] Dashboard-Mockup: Alle Akzente sind in Orange-Tönen
- [ ] CTA-Button: Orange, Hover = Deep Orange, Glow-Ring = Orange
- [ ] Card-Hover: Border leuchtet orange auf
- [ ] Alle Eyebrow-Labels: Orange-Text, Orange-Strich
- [ ] Footer-Links Hover: Kein Blau mehr sichtbar
- [ ] Hero-Badge: Hintergrund ist dunkler Orange-Tint, nicht Blau-Tint

### Texte
- [ ] Navbar-Logo: "TigerFlow"
- [ ] Hero-Badge: "TigerFlow · AI Systems & Automation"
- [ ] Browser-Tab: "TigerFlow · AI Systems & Automation"
- [ ] Footer: "TigerFlow" + "© 2026"
- [ ] AI Chatbot-Card: Erwähnt "TigerBot"
- [ ] Keine einzige sichtbare "JHFLOW"-Referenz mehr

### Favicon
- [ ] Browser-Tab zeigt neues Orange-Favicon (kein lila Vite-Bolt mehr)

### Animationen & Funktionen (Regressionscheck)
- [ ] Typing-Animation im Hero funktioniert
- [ ] Mouse-Parallax auf dem Dashboard-Mockup funktioniert
- [ ] Scroll-Reveal-Animationen (fadeUp) in allen Sections
- [ ] Navbar wird bei Scroll glasartig
- [ ] Dashboard-Mockup-Cards floaten (floatA/floatB Animationen)
- [ ] CTA-Formular: Absenden zeigt Spinner, dann Erfolgs-State
- [ ] Mobile (<768px): Layout korrekt, kein Überlauf

### Mobile Ansicht (DevTools 375px)
- [ ] Hero-Text lesbar, kein Überlauf
- [ ] Dashboard-Mockup korrekt ausgeblendet (<900px)
- [ ] Stats-Grid: 2-spaltig bei 768px, 1-spaltig bei 480px
- [ ] Farben korrekt (kein Blau-Schimmer)

---

## Zusammenfassung

| Dimension | Umfang |
|---|---|
| Betroffene Dateien | 4 (App.jsx, index.html, favicon.svg, package.json) |
| Hauptarbeit | src/App.jsx — ca. 25–30 gezielte Änderungen |
| Neue Komponenten | 0 |
| Entfernte Komponenten | 0 |
| Geschätzter Aufwand | ~45–60 Minuten (präzise Ausführung) |
| Regressions-Risiko | Niedrig — nur Werte, keine Struktur |

---

*Dieser Plan wartet auf deine Freigabe. Nach OK kann die Ausführung Schritt für Schritt erfolgen.*
