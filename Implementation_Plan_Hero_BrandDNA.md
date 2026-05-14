# Implementation Plan: Hero Brand DNA — TigerFlow

> **Status:** Entwurf — warte auf Freigabe  
> **Erstellt:** 2026-05-14  
> **Scope:** Hero-Section, Typografie (Headlines), GridBg (Brand DNA)  
> **Ausführung:** ERST nach expliziter Freigabe

---

## 1. Betroffene Dateien

| Datei | Änderungstyp |
|---|---|
| `src/index.css` | Google Font Import + neue Keyframe-Animation + headline CSS-Regel |
| `src/components/Hero.jsx` | Copy (Headline, Subline, Microcopy), Typed Words, font-weight/spacing |
| `src/components/GridBg.jsx` | Tiger-Streifen-SVG-Pattern + Flow-Linien (neue Div-Elemente) |

**Nicht angefasst:** `App.jsx`, `theme.js`, `DashboardMockup.jsx`, alle anderen Sections, alle Hooks, alle Animationen

---

## 2. Font-Änderungen

### Google Font Import (`src/index.css`, Zeile 1)

**Aktuell:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
```

**Neu (beide Fonts in einem Request):**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Space+Grotesk:wght@500;600;700&display=swap');
```

> Nur ein HTTP-Request statt zwei. Space Grotesk wird nur für Weights 500, 600, 700 geladen — ausreichend für Headlines.

### Headline-CSS-Regel (neu, `src/index.css`)

**Einfügen nach dem `body`-Block:**
```css
h1, h2, h3 {
  font-family: 'Space Grotesk', 'Inter', -apple-system, sans-serif;
}
```

Dieser eine Selektor deckt alle Headlines site-weit ab — keine per-Komponenten-Änderung nötig. Inter bleibt als Fallback.

### Anpassungen in `Hero.jsx` durch Font-Wechsel

Space Grotesk hat eine eigene optische Stärke — bei direktem Font-Swap müssen zwei Werte angepasst werden, damit die Headline weiterhin kräftig und kantig wirkt:

| Property | Aktueller Wert (Inter) | Neuer Wert (Space Grotesk) | Grund |
|---|---|---|---|
| `fontWeight` (h1 + typed div) | `500` | `600` | Space Grotesk 500 wirkt leichter als Inter 500; 600 gibt den gewünschten "kräftigen" Eindruck |
| `letterSpacing` (h1 + typed div) | `"-.035em"` | `"-.02em"` | Space Grotesk hat von Haus aus engere Geometrie; weniger negatives Tracking hält die Lesbarkeit |

Beide Werte betreffen die `style`-Props direkt am `<h1>` (Zeile 82–88) und dem `<div>` mit der Typing-Animation (Zeile 94–104).

---

## 3. Hero Copy

### 3a. Headline — Statische Zeile (Hero.jsx, Zeile 90)

**Aktuell:**
```
Wir bauen
```

**Neu:**
```
AI-Systeme,
```

Die Zeile dient als grammatikalischer Einstieg für den folgenden Typed-Teil ("AI-Systeme, die schneller verkaufen.").

---

### 3b. Typing-Animation — `TYPED_WORDS` (Hero.jsx, Zeilen 6–12)

**Aktuell:**
```js
const TYPED_WORDS = [
  "AI-Chatbots.",
  "Voice Agents.",
  "CRM-Systeme.",
  "Workflows.",
  "Webdesign.",
];
```

**Neu:**
```js
const TYPED_WORDS = [
  "die nie schlafen.",
  "die qualifizieren.",
  "die skalieren.",
  "die schneller verkaufen.",
];
```

> **Wichtig:** Das letzte Wort (`"die schneller verkaufen."`) bleibt permanent auf dem Bildschirm, weil der `useTyped`-Hook bei `wi === words.length - 1` stoppt und `done` auf `true` setzt. Der Cursor blinkt bis dahin und verschwindet dann. Das ist Absicht — die stärkste Aussage bleibt stehen.

---

### 3c. Subline (Hero.jsx, Zeilen 134–135)

**Aktuell:**
```
Automatisierung, die verkauft. Systeme, die arbeiten —
auch wenn Sie es nicht tun.
```

**Neu:**
```
TigerFlow automatisiert Leads, Anfragen und Prozesse —
mit TigerBot, Voice Agents und Systemen, die rund um die Uhr arbeiten.
```

Technische Anmerkung: Das `<br />` zwischen den Zeilen bleibt bestehen. `maxWidth: "420px"` passt zur neuen Länge (geprüft: ~400px bei 17px/Inter 300).

---

### 3d. Microcopy — Bereiche-Label (Hero.jsx, Zeile 178)

**Aktuell:**
```jsx
<span style={{ fontSize: "11px", color: C.textDis, ... }}>
  Bereiche
</span>
```

**Neu:**
```jsx
<span style={{ fontSize: "11px", color: C.textDis, ... }}>
  TigerFlow Ecosystem
</span>
```

---

### 3e. Services-Array — Reihenfolge und Namensgebung (Hero.jsx, Zeilen 17–24)

**Aktuell:**
```js
["Webdesign", "TigerBot", "Voice Agents", "CRM", "Automations", "Lead-Systeme"]
```

**Neu:**
```js
["TigerBot", "Voice Agents", "CRM", "Automation", "Lead Engine", "Webdesign"]
```

Änderungen:
- `TigerBot` an erste Stelle (Flagship-Produkt)
- `Automations` → `Automation` (singular, cleaner)
- `Lead-Systeme` → `Lead Engine` (stärkere Brand-Sprache)
- `Webdesign` an letzter Stelle (Ergänzungs-Service)

---

### 3f. Trenn-Punkt-Farbe (Hero.jsx, Zeile 191)

**Aktuell (hardcoded alter Wert):**
```jsx
background: "#1E1E28"
```

**Neu:**
```jsx
background: C.borderEm
```

Kleiner Fix: Der Separator-Dot referenziert noch einen hardcodierten Blau-Tint-Wert aus dem alten Brand. `C.borderEm` (`#2A2A2A`) ist der korrekte neutrale Wert.

---

## 4. Brand DNA — Visuelle Änderungen

### 4a. Tiger-Streifen-Pattern (`GridBg.jsx`)

**Methode:** Zweites SVG-Pattern direkt in der bestehenden `<svg>`-Struktur von GridBg.

**Was wird hinzugefügt:** Ein `<pattern id="tigerStripes">` mit diagonalen Linien + ein `<rect>` der dieses Pattern mit derselben Maske (`url(#gmask)`) rendert wie das Grid.

**Visuelles Ergebnis:**
- Diagonale Streifen bei 52°-Winkel (leicht steiler als 45° für Tiger-Optik)
- Streifenbreite: 12px, Abstand: 68px (breite Streifen → authentischer Tiger-Look)
- Farbe: `rgba(255,122,0,0.022)` — kaum wahrnehmbar, bei direktem Hinsehen sichtbar
- Dieselbe radiale Mask wie Grid → Streifen faden zu Rändern aus
- Kein JS, keine Animation — rein dekorativ

**SVG-Additions innerhalb `<defs>`:**
```svg
<pattern
  id="tigerStripes"
  width="80"
  height="80"
  patternUnits="userSpaceOnUse"
  patternTransform="rotate(52)"
>
  <rect x="0" y="0" width="12" height="80" fill="rgba(255,122,0,0.022)" />
</pattern>
```

**Neues `<rect>` direkt nach dem Grid-Rect:**
```svg
<rect width="100%" height="100%" fill="url(#tigerStripes)" mask="url(#gmask)" />
```

> Das Pattern liegt unter dem Glow und über dem Grid — Schichtung: Grid → Streifen → Glow → Vignette.

---

### 4b. Flow-Linien — Animierte Datenstrahlen (`GridBg.jsx`)

**Methode:** 3 absolut positionierte `<div>`-Elemente nach dem bestehenden Bottom-Vignette-Div. Neue CSS-Keyframe-Animation `@keyframes flowDrift` in `index.css`.

**Zweck:** Horizontale Datenstrom-Optik, die von links in Richtung Dashboard (rechts) fließt. Subtil, schnell, premium.

**Neue Keyframe-Animation (neu in `src/index.css`, nach dem `@keyframes floatB`-Block):**
```css
@keyframes flowDrift {
  0%   { transform: translateX(-100%); opacity: 0; }
  10%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { transform: translateX(100vw); opacity: 0; }
}
```

**3 Flow-Line-Divs (neue Elemente in GridBg.jsx, nach dem Vignette-Div):**

```jsx
{/* Flow Lines — Data stream toward dashboard */}
{[
  { top: "28%", width: "120px", dur: "4.2s", delay: "0s",   opacity: 0.22 },
  { top: "52%", width: "80px",  dur: "5.8s", delay: "1.4s", opacity: 0.15 },
  { top: "68%", width: "100px", dur: "3.9s", delay: "2.7s", opacity: 0.18 },
].map((line, i) => (
  <div
    key={i}
    style={{
      position: "absolute",
      top: line.top,
      left: 0,
      height: "1.5px",
      width: line.width,
      borderRadius: "1px",
      background: `linear-gradient(to right, transparent, rgba(255,122,0,${line.opacity}), transparent)`,
      animation: `flowDrift ${line.dur} ease-in-out ${line.delay} infinite`,
      pointerEvents: "none",
    }}
  />
))}
```

**Visuelles Ergebnis:**
- 3 schmale Linien in unterschiedlichen Höhen, die intermittierend durchs Bild fließen
- Ausgeblendet an Rändern (gradient fade), nur der mittlere Teil leuchtet kurz auf
- Versetzt durch `delay` — wirkt organisch, nicht maschinell
- Keine Interferenz mit Mouse-Parallax, da keine `willChange`-Optimierung nötig

---

## 5. Zusammenfassung aller Änderungen

| # | Datei | Zeile(n) | Beschreibung |
|---|---|---|---|
| 1 | `src/index.css` | 1 | Google Font: Space Grotesk hinzufügen |
| 2 | `src/index.css` | ~19 (nach body) | CSS-Regel `h1, h2, h3 { font-family: Space Grotesk... }` |
| 3 | `src/index.css` | ~48 (nach floatB) | Neue `@keyframes flowDrift` Animation |
| 4 | `src/components/Hero.jsx` | 6–12 | `TYPED_WORDS` — neue Phrasen, 4 statt 5 Wörter |
| 5 | `src/components/Hero.jsx` | 17–24 | `services`-Array — neue Reihenfolge & Namen |
| 6 | `src/components/Hero.jsx` | 82–88 | h1: `fontWeight 500→600`, `letterSpacing -.035→-.02em` |
| 7 | `src/components/Hero.jsx` | 90 | h1-Text: `"Wir bauen"` → `"AI-Systeme,"` |
| 8 | `src/components/Hero.jsx` | 94–104 | typed div: `fontWeight 500→600`, `letterSpacing -.035→-.02em` |
| 9 | `src/components/Hero.jsx` | 134–135 | Subline Text ersetzen (TigerBot-Mention) |
| 10 | `src/components/Hero.jsx` | 178 | Label `"Bereiche"` → `"TigerFlow Ecosystem"` |
| 11 | `src/components/Hero.jsx` | 191 | Separator-Dot: `"#1E1E28"` → `C.borderEm` |
| 12 | `src/components/GridBg.jsx` | in `<defs>` | Tiger-Streifen-Pattern (`id="tigerStripes"`) hinzufügen |
| 13 | `src/components/GridBg.jsx` | nach Grid-Rect | `<rect fill="url(#tigerStripes)" mask="..."/>` hinzufügen |
| 14 | `src/components/GridBg.jsx` | nach Vignette-Div | 3 Flow-Line-Divs mit `flowDrift`-Animation |

**Summe: 14 Änderungen in 3 Dateien.** Keine Änderungen an Komponenten-Struktur, Hooks, Layouts, oder anderen Sections.

---

## 6. Risiken

| Risiko | Wahrscheinlichkeit | Maßnahme |
|---|---|---|
| **Space Grotesk lädt nicht** (offline, Firewall) | Niedrig | Inter greift als Fallback — kein Layout-Break |
| **`fontWeight: 600` wirkt zu fett** bei kleinen Screen-Größen | Mittel | Per `clamp` skaliert die Schriftgröße bereits — 600 sollte auf allen Größen gut aussehen. Ggf. in Mobile-Media-Query auf 500 zurückfallen |
| **`TYPED_WORDS` Länge** — "die schneller verkaufen." (28 Zeichen) könnte bei ~40px Schriftgröße umbrechen | Niedrig | `minHeight: "1.06em"` hält die Zeile offen; einzeiliges Typing ist durch `flex` + `baseline`-Alignment gesichert. Mobile: `clamp(32px,9vw,48px)` — Test empfohlen |
| **flowDrift läuft auf `prefers-reduced-motion`** | Niedrig | `index.css` hat bereits `@media(prefers-reduced-motion:reduce){ animation-duration: .01ms !important }` — Flow-Linien werden automatisch deaktiviert |
| **Tiger-Streifen zu sichtbar** bei bestimmten Bildschirmhelligkeit | Niedrig | Opacity `0.022` ist sehr zurückhaltend. Falls in helleren Umgebungen zu stark: auf `0.015` reduzieren |
| **`h1, h2, h3` CSS-Regel** ändert Font site-weit | Mittel | Space Grotesk ist als Headline-Font designed und kompatibel mit allen Abschnitten. Visuell kein Risiko — aber alle Section-Überschriften h2 nehmen die neue Schrift an. Das ist im Sinne eines kohärenten Rebrandings erwünscht, sollte aber im Browser vollständig geprüft werden. |
| **SVG `patternTransform="rotate(52)"`** — Browser-Kompatibilität | Sehr niedrig | SVG2 Standard, alle modernen Browser unterstützen `patternTransform` |

---

## 7. Umsetzungsschritte (Reihenfolge)

```
Schritt 1 — src/index.css
  1a. Google Font @import: Space Grotesk hinzufügen
  1b. h1/h2/h3 Font-Regel einfügen (nach body-Block)
  1c. @keyframes flowDrift einfügen (nach floatB-Block)

Schritt 2 — src/components/Hero.jsx
  2a. TYPED_WORDS ersetzen (4 neue Phrasen)
  2b. services-Array aktualisieren (Reihenfolge + Namen)
  2c. h1 fontWeight + letterSpacing anpassen
  2d. h1-Text "Wir bauen" → "AI-Systeme,"
  2e. typed div fontWeight + letterSpacing anpassen
  2f. Subline Text ersetzen
  2g. Label "Bereiche" → "TigerFlow Ecosystem"
  2h. Separator-Dot background: "#1E1E28" → C.borderEm

Schritt 3 — src/components/GridBg.jsx
  3a. Tiger-Streifen-Pattern in SVG <defs> einfügen
  3b. <rect fill="url(#tigerStripes)"> nach Grid-Rect einfügen
  3c. 3 Flow-Line-Divs nach Vignette-Div einfügen
```

---

## 8. Browser-Checkliste nach Umsetzung

### Typografie
- [ ] Hero h1 rendert in Space Grotesk (erkennbar: eckigere Geometrie, kantiges "G"/"S" im Vergleich zu Inter)
- [ ] Section-Überschriften h2 (Leistungen, Prozess, Ergebnisse etc.) ebenfalls in Space Grotesk
- [ ] Fallback Inter greift, wenn Google Fonts deaktiviert (DevTools → Netzwerk → offline)
- [ ] Mobile (375px): Headline bricht korrekt um, kein Overflow

### Copy
- [ ] Typing-Animation startet mit "die nie schlafen."
- [ ] Zyklus: "die nie schlafen." → "die qualifizieren." → "die skalieren." → "die schneller verkaufen."
- [ ] "die schneller verkaufen." bleibt permanent, Cursor verschwindet
- [ ] Subline nennt TigerBot und Voice Agents
- [ ] Label zeigt "TigerFlow Ecosystem" (nicht mehr "Bereiche")
- [ ] Services-Chips zeigen: TigerBot · Voice Agents · CRM · Automation · Lead Engine · Webdesign

### Brand DNA
- [ ] Sehr subtile diagonale Streifen im Hero-Hintergrund sichtbar (bei dunklem Display / bei näherem Hinsehen)
- [ ] Flow-Linien erscheinen intermittierend und fließen von links nach rechts
- [ ] Alle Flow-Linien verschwinden bei `prefers-reduced-motion: reduce`
- [ ] Dashboard-Mockup und Mouse-Parallax funktionieren unverändert
- [ ] Orange Ambient Glow weiterhin vorhanden
- [ ] Kein visueller Clash zwischen Streifen, Grid-Linien und Flow-Elementen

### Regressionscheck (bestehende Features)
- [ ] Alle anderen Sections optisch unverändert (außer Space Grotesk auf h2)
- [ ] CTA-Button Hover-Effekt intakt
- [ ] Navbar Blur-Effekt beim Scrollen intakt
- [ ] StickyNav erscheint nach Scroll
- [ ] ComparisonSlider funktioniert
- [ ] DiagnosisForm öffnet sich
- [ ] AutomationCalculator funktioniert
- [ ] ExitIntent erscheint bei Maus-Leave (obere Bildschirmkante)

---

*Dieser Plan wartet auf deine Freigabe. Nach OK wird Schritt für Schritt umgesetzt.*
