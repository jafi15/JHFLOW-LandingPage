# Implementation Plan: Hero Brand DNA — TigerFlow

> **Status:** Entwurf v2 — warte auf Freigabe  
> **Erstellt:** 2026-05-14  
> **Aktualisiert:** 2026-05-14 (Anpassungen: Font-Scope, Copy, Flow-Linien)  
> **Scope:** Hero-Section, Typografie (nur Hero-Elemente), GridBg (Brand DNA)  
> **Ausführung:** ERST nach expliziter Freigabe

---

## 1. Betroffene Dateien

| Datei | Änderungstyp |
|---|---|
| `src/index.css` | Google Font Import erweitern + neue `@keyframes flowDrift` |
| `src/components/Hero.jsx` | Copy (Subline, Microcopy, Typed Words), fontFamily/weight/spacing auf 2 Elemente |
| `src/components/GridBg.jsx` | Tiger-Streifen-SVG-Pattern + 2 Flow-Linien (neue Div-Elemente) |

**Nicht angefasst:** `App.jsx`, `theme.js`, `DashboardMockup.jsx`, alle anderen Sections, alle Hooks, alle bestehenden Animationen, alle anderen Überschriften außerhalb des Hero

---

## 2. Font-Änderungen

### 2a. Google Font Import (`src/index.css`, Zeile 1)

**Aktuell:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
```

**Neu (beide Fonts in einem Request):**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Space+Grotesk:wght@500;600;700&display=swap');
```

> Nur ein HTTP-Request statt zwei. Space Grotesk Weights 500/600/700 — ausreichend für Headlines.

---

### 2b. Anwendung: NUR Hero H1 und Typing-Div (Hero.jsx)

**⚠ Keine globale CSS-Regel. Keine `h1, h2, h3`-Selektor-Änderung.**

Space Grotesk wird **ausschließlich via `fontFamily` Inline-Style** auf genau zwei Elemente in `Hero.jsx` angewendet:

- Das `<h1>`-Element (statische Zeile "Wir bauen")
- Das `<div>` mit dem animierten Typing-Text

Alle anderen Überschriften im Projekt bleiben unverändert in Inter.

**Anpassungen in `Hero.jsx` durch Font-Wechsel:**

| Property | Aktueller Wert | Neuer Wert | Grund |
|---|---|---|---|
| `fontFamily` (h1 + typed div) | *(nicht gesetzt → Inter aus body)* | `"'Space Grotesk','Inter',-apple-system,sans-serif"` | Font gezielt auf Hero-Headlines beschränken |
| `fontWeight` (h1 + typed div) | `500` | `600` | Space Grotesk 500 wirkt leichter als Inter 500; 600 liefert den gewünschten kräftigen Eindruck |
| `letterSpacing` (h1 + typed div) | `"-.035em"` | `"-.02em"` | Space Grotesk hat von Haus aus engere Geometrie; weniger negatives Tracking hält die Lesbarkeit |

Alle drei Properties werden als Ergänzung in die bestehenden `style`-Objekte eingetragen — kein Umbau der Elemente nötig.

---

## 3. Hero Copy

### 3a. Headline — Statische Zeile (Hero.jsx, Zeile 90)

**Bleibt unverändert:**
```
Wir bauen
```

Die Zeile "Wir bauen" ist der grammatikalische Einstieg. Die Typing-Wörter setzen den Satz fort: *"Wir bauen / Systeme, die jagen."* — das funktioniert als vollständige Aussage.

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
  "Systeme, die jagen.",
  "Systeme, die qualifizieren.",
  "Systeme, die skalieren.",
  "Systeme, die schneller verkaufen.",
];
```

> **Wichtig:** Das letzte Wort (`"Systeme, die schneller verkaufen."`) bleibt permanent auf dem Bildschirm, weil der `useTyped`-Hook bei `wi === words.length - 1` stoppt und `done` auf `true` setzt. Der Cursor blinkt bis dahin und verschwindet. Die stärkste Aussage bleibt stehen. Der Haken (useTyped) wird **nicht verändert**.

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

Das `<br />` zwischen den Zeilen bleibt bestehen. `maxWidth: "420px"` passt zur neuen Länge (geprüft: ~400px bei 17px/Inter 300).

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

**Aktuell (hardcoded alter Wert aus altem Brand):**
```jsx
background: "#1E1E28"
```

**Neu:**
```jsx
background: C.borderEm
```

`C.borderEm` (`#2A2A2A`) ist der korrekte neutrale Wert aus der TigerFlow-Palette.

---

## 4. Brand DNA — Visuelle Änderungen

### 4a. Tiger-Streifen-Pattern (`GridBg.jsx`)

**Methode:** Zweites SVG-Pattern direkt in der bestehenden `<svg>`-Struktur von GridBg — keine neue Komponente.

**Was wird hinzugefügt:** Ein `<pattern id="tigerStripes">` mit diagonalen Streifen + ein `<rect>` der dieses Pattern mit derselben Maske (`url(#gmask)`) rendert wie das bestehende Grid.

**Visuelles Ergebnis:**
- Diagonale Streifen bei 52°-Winkel (leicht steiler als 45° für Tiger-Optik)
- Streifenbreite: 12px, Abstand: 68px (breite, ruhige Streifen → kein Zebra-Look)
- Farbe: `rgba(255,122,0,0.022)` — kaum wahrnehmbar, bei direktem Hinsehen subtil sichtbar
- Dieselbe radiale Mask wie Grid → Streifen faden zu Rändern aus
- Kein JS, keine Animation — rein dekorativ, kein Performance-Einfluss

**SVG-Addition innerhalb `<defs>` (nach dem bestehenden `<mask>`-Block):**
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

**Neues `<rect>` direkt nach dem Grid-Rect (vor schließendem `</svg>`):**
```svg
<rect width="100%" height="100%" fill="url(#tigerStripes)" mask="url(#gmask)" />
```

> Schichtung von unten nach oben: Grid → **Streifen** → Glow → Vignette. Alles maskengesteuert, kein neues Stacking-Context-Problem.

---

### 4b. Flow-Linien — Animierte Datenstrahlen (`GridBg.jsx`)

**Methode:** **2** absolut positionierte `<div>`-Elemente nach dem bestehenden Bottom-Vignette-Div. Neue CSS-Keyframe-Animation `@keyframes flowDrift` in `index.css`.

**Design-Ziel:** Sehr subtile, langsam fließende horizontale Linien — Datenstrom-Ästhetik, kein Cyber-Look.

**Neue Keyframe-Animation (in `src/index.css`, nach dem `@keyframes floatB`-Block):**
```css
@keyframes flowDrift {
  0%   { transform: translateX(-140px); opacity: 0; }
  12%  { opacity: 1; }
  88%  { opacity: 1; }
  100% { transform: translateX(100vw); opacity: 0; }
}
```

> Langsamer Einblende-Übergang (12% statt 10%) für sanfteres Erscheinen. Die Linie blendet behutsam ein und aus — kein harter Blitz.

**2 Flow-Line-Divs (nach dem Vignette-Div in GridBg.jsx):**

```jsx
{/* Flow Lines — subtle data stream, premium SaaS */}
{[
  { top: "32%", width: "100px", dur: "7.5s", delay: "0s",   opacity: 0.12 },
  { top: "61%", width: "75px",  dur: "9.2s", delay: "3.1s", opacity: 0.09 },
].map((line, i) => (
  <div
    key={i}
    style={{
      position: "absolute",
      top: line.top,
      left: 0,
      height: "1px",
      width: line.width,
      borderRadius: "1px",
      background: `linear-gradient(to right, transparent, rgba(255,122,0,${line.opacity}), transparent)`,
      animation: `flowDrift ${line.dur} ease-in-out ${line.delay} infinite`,
      pointerEvents: "none",
    }}
  />
))}
```

**Unterschied zu v1 des Plans:**

| Eigenschaft | Version 1 (verworfen) | Version 2 (aktuell) |
|---|---|---|
| Anzahl Linien | 3 | **2** |
| Opacity Linie 1 | 0.22 | **0.12** |
| Opacity Linie 2 | 0.15 | **0.09** |
| Geschwindigkeit | 3.9–5.8s | **7.5–9.2s** |
| Linienhöhe | 1.5px | **1px** |

> Bewusst gewählte Werte: Die Linien sollen spürbar sein, nicht gesehen werden. Bei kurzen Blicken kaum wahrnehmbar — bei längerem Betrachten entfalten sie Tiefe.

---

## 5. Zusammenfassung aller Änderungen

| # | Datei | Beschreibung |
|---|---|---|
| 1 | `src/index.css` | Google Font @import: Space Grotesk hinzufügen |
| 2 | `src/index.css` | Neue `@keyframes flowDrift` (nach floatB-Block) |
| 3 | `src/components/Hero.jsx` | `TYPED_WORDS`: 4 neue "Wir bauen …"-Phrasen |
| 4 | `src/components/Hero.jsx` | `services`-Array: neue Reihenfolge & Namen |
| 5 | `src/components/Hero.jsx` | h1: `fontFamily` Space Grotesk, `fontWeight 500→600`, `letterSpacing -.035→-.02em` |
| 6 | `src/components/Hero.jsx` | typed div: `fontFamily` Space Grotesk, `fontWeight 500→600`, `letterSpacing -.035→-.02em` |
| 7 | `src/components/Hero.jsx` | Subline Text ersetzen (TigerBot-Mention) |
| 8 | `src/components/Hero.jsx` | Label `"Bereiche"` → `"TigerFlow Ecosystem"` |
| 9 | `src/components/Hero.jsx` | Separator-Dot: `"#1E1E28"` → `C.borderEm` |
| 10 | `src/components/GridBg.jsx` | Tiger-Streifen-Pattern in SVG `<defs>` einfügen |
| 11 | `src/components/GridBg.jsx` | `<rect fill="url(#tigerStripes)" mask="..."/>` nach Grid-Rect |
| 12 | `src/components/GridBg.jsx` | 2 Flow-Line-Divs mit `flowDrift`-Animation |

**Summe: 12 Änderungen in 3 Dateien.**  
Kein neues Component. Kein Hook-Eingriff. Keine Layout-Änderung. Keine anderen Sections berührt.

---

## 6. Risiken

| Risiko | Wahrscheinlichkeit | Maßnahme |
|---|---|---|
| **Space Grotesk lädt nicht** (offline, Firewall) | Niedrig | Inter greift als Fallback — kein Layout-Break, da Fallback in `fontFamily`-String gesetzt |
| **`fontWeight: 600` wirkt zu fett** bei kleinen Screens | Niedrig–Mittel | `clamp` skaliert Schriftgröße automatisch; falls nötig, nur im Hero-Bereich in der Mobile-Media-Query auf 500 zurückfallen |
| **"Systeme, die schneller verkaufen."** (34 Zeichen) bricht bei ~40px auf 2 Zeilen | Niedrig | `minHeight: "1.06em"` hält die Typing-Zeile offen; flex + baseline-Alignment ist vorhanden. Mobile-Test empfohlen (`clamp` greift ab 768px) |
| **flowDrift läuft trotz reduced-motion** | Sehr niedrig | `index.css` hat bereits `@media(prefers-reduced-motion:reduce){ animation-duration: .01ms !important }` — Flow-Linien werden automatisch deaktiviert |
| **Tiger-Streifen zu sichtbar** auf hellen Displays | Sehr niedrig | Opacity `0.022` ist äußerst zurückhaltend. Bei Bedarf auf `0.015` reduzieren |
| **SVG `patternTransform="rotate(52)"`** — Kompatibilität | Sehr niedrig | SVG2-Standard, alle modernen Browser unterstützen `patternTransform` |

---

## 7. Umsetzungsschritte (Reihenfolge)

```
Schritt 1 — src/index.css
  1a. Google Font @import: Space Grotesk hinzufügen (Zeile 1)
  1b. @keyframes flowDrift einfügen (nach floatB-Block, ca. Zeile 48)

Schritt 2 — src/components/Hero.jsx
  2a. TYPED_WORDS ersetzen (4 neue "Wir bauen …"-Phrasen)
  2b. services-Array aktualisieren (Reihenfolge + Namen)
  2c. h1-Style: fontFamily + fontWeight 500→600 + letterSpacing -.035→-.02em
  2d. typed div-Style: fontFamily + fontWeight 500→600 + letterSpacing -.035→-.02em
  2e. Subline Text ersetzen
  2f. Label "Bereiche" → "TigerFlow Ecosystem"
  2g. Separator-Dot background: "#1E1E28" → C.borderEm

Schritt 3 — src/components/GridBg.jsx
  3a. Tiger-Streifen-Pattern in SVG <defs> einfügen (nach <mask>-Block)
  3b. <rect fill="url(#tigerStripes)" mask="url(#gmask)"/> nach Grid-Rect einfügen
  3c. 2 Flow-Line-Divs nach Vignette-Div einfügen
```

---

## 8. Browser-Checkliste nach Umsetzung

### Typografie
- [ ] Hero h1 rendert in Space Grotesk (erkennbar: eckigere Geometrie, kantiges "a"/"s" vs. Inter)
- [ ] Hero Typing-Zeile rendert in Space Grotesk (identischer Font wie h1)
- [ ] **Alle anderen Überschriften (h2 in Services, Process, Results etc.) bleiben in Inter — unverändert**
- [ ] Fallback Inter greift, wenn Google Fonts deaktiviert (DevTools → offline testen)
- [ ] Mobile (375px): Headline kein Overflow, "Systeme, die schneller verkaufen." einzeilig oder sauber umgebrochen

### Copy
- [ ] Typing-Animation startet mit "Systeme, die jagen."
- [ ] Zyklus: "Systeme, die jagen." → "Systeme, die qualifizieren." → "Systeme, die skalieren." → "Systeme, die schneller verkaufen."
- [ ] "Systeme, die schneller verkaufen." bleibt permanent, Cursor verschwindet
- [ ] Subline nennt TigerBot und Voice Agents
- [ ] Label zeigt "TigerFlow Ecosystem" (nicht mehr "Bereiche")
- [ ] Services-Chips zeigen: TigerBot · Voice Agents · CRM · Automation · Lead Engine · Webdesign

### Brand DNA
- [ ] Subtile diagonale Streifen im Hero-Hintergrund bei direktem Hinsehen erkennbar
- [ ] Streifen faden zu Rändern aus (Mask wirkt korrekt)
- [ ] Flow-Linien erscheinen intermittierend und fließen langsam von links nach rechts
- [ ] Nur 2 Flow-Linien sichtbar (nicht 3)
- [ ] Flow-Linien wirken ruhig/premium — kein Flackern, kein Cyber-Effekt
- [ ] Alle Animationen verschwinden bei `prefers-reduced-motion: reduce`
- [ ] Dashboard-Mockup und Mouse-Parallax funktionieren unverändert
- [ ] Orange Ambient Glow weiterhin vorhanden

### Regressionscheck (bestehende Features)
- [ ] Alle anderen Sections optisch unverändert (keine Font-Änderung außerhalb Hero)
- [ ] CTA-Button Hover-Effekt intakt
- [ ] Navbar Blur-Effekt beim Scrollen intakt
- [ ] StickyNav erscheint nach Scroll
- [ ] ComparisonSlider funktioniert
- [ ] DiagnosisForm öffnet sich
- [ ] AutomationCalculator funktioniert
- [ ] ExitIntent erscheint bei Maus-Leave (obere Bildschirmkante)

---

*Dieser Plan (v2) wartet auf deine Freigabe. Nach OK wird Schritt für Schritt umgesetzt.*
