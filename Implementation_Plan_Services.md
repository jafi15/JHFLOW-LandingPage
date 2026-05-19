# Implementation Plan: Services Section Redesign (TigerBot Focus)

## Zielsetzung
Die aktuelle "Leistungen"-Sektion (3x2 Grid) wird durch ein asymmetrisches, interaktives System-Hub-Design ersetzt. Der Fokus liegt vollständig auf dem Hauptprodukt **TigerBot**, umgeben von Satelliten-Modulen (CRM, Voice Agents, etc.). Das Design vermittelt den Eindruck einer luxuriösen, digitalen High-End-Infrastruktur.

## Phase 1: Struktur & Layout-Anpassung
- [ ] **Grid entfernen:** Das bestehende symmetrische 3x2-Grid in `Services.jsx` entfernen.
- [ ] **Neues asymmetrisches Layout:** Einen zentralen Container für das "Hauptsystem" (TigerBot) und ein umliegendes Layout für die "Satelliten-Systeme" (Webdesign, Voice Agents, CRM, Workflows, Lead-Systeme) aufbauen.
- [ ] **Mobile First Struktur:** Sicherstellen, dass auf mobilen Geräten der TigerBot als Erstes erscheint, gefolgt von den Modulen und der Stats-Bar am Ende (gestapelt).

## Phase 2: Zentrale TigerBot-Karte
- [ ] **HTML/CSS Struktur:** Große, prominente Karte in der Mitte (oder asymmetrisch links/rechts) erstellen.
- [ ] **Inhalte einfügen:**
  - Badge oben: "HAUPTSYSTEM"
  - Titel: "TigerBot"
  - Untertitel: "Ihr digitaler Mitarbeiter."
  - Status: "24/7 aktiv" (mit leuchtendem Indikator)
  - Features-Liste (Checkmarks/Punkte):
    - beantwortet Anfragen
    - qualifiziert Leads
    - bucht Termine
    - lernt & optimiert
- [ ] **Live-Statusbar (unten in der Karte):** Grüner Indikator mit Text "TigerBot aktiv".
- [ ] **Visuelles Design (Premium & Futuristisch):**
  - Dunkler Glassmorphism-Look (halbtransparenter Hintergrund, weicher Blur).
  - Starker Orange-Glow (Schatten / Rand).
  - Sichtbarer "Tiger" innerhalb der Karte (Auge/Streifen) – realisiert durch elegante, abstrakte CSS-Muster oder SVG/Bildeinbindung (Premium Look, nicht cartoonhaft).

## Phase 3: Dynamische Modul-Karten
- [ ] **Redesign der restlichen Karten:** Die verbleibenden 5 Leistungen als schwebende Satelliten-Karten gestalten.
- [ ] **Glow & Tiefe:** Den Karten einen tiefen Schatten und einen subtilen Rahmen-Glow geben.
- [ ] **Hover-Effekte:** 
  - Sanftes Anheben (`transform: translateY(-5px)`).
  - Glow beim Hovern verstärken.
  - Leichte Reaktion der Verbindungslinien triggern.

## Phase 4: Leuchtende Verbindungslinien (3D & Energie-Flow)
- [ ] **Verbindungen:** SVG-basierte Linien zwischen der TigerBot-Karte und den Satelliten-Karten ziehen.
- [ ] **Design der Linien:** 3D-Wirkung, leuchtend (Orange/Accent Glow), Tiefe, Optik von Energiebahnen.
- [ ] **Animationen:** Kleine, leuchtende Datenpunkte, die sich langsam entlang der Linien bewegen (Flow-Effekt). Das System soll sich lebendig anfühlen.

## Phase 5: 3D Plattform- & Hintergrund-Effekte
- [ ] **3D Plattformen (Boden-Layer):** Unter den Elementen (insbesondere TigerBot, Voice Agent, CRM, Lead-Systeme) leuchtende 3D-Bühnen/Ringe einfügen, um starke räumliche Tiefe und Energie-Layer zu simulieren.
- [ ] **Hintergrund der Sektion:**
  - Subtile, dunkle Flow-Texturen.
  - Orange Energie-Spuren und sanfte Bewegung im Hintergrund.
  - Look: Luxuriöse Tech-Infrastruktur (WICHTIG: Kein Gaming/Cyberpunk oder Neon-Chaos).

## Phase 6: Ergebnis-Bar (Stats)
- [ ] **Neue Stats-Bar:** Am unteren Rand der Sektion eine horizontale Bar mit Glow-Border anlegen.
- [ ] **KPI-Karten einfügen:**
  - +237% qualifizierte Leads
  - 78% mehr gebuchte Termine
  - 24/7 automatisch im Einsatz
  - 100% skalierbar & messbar
- [ ] **Hinweistext:** Kleiner Text unterhalb/neben der Bar: "* illustrative Demo-Kennzahlen".

## Phase 7: Feinschliff, Technik & Performance
- [ ] **Design-System:** Farben (`C`-Objekt) und existierende Schriftarten strikt beibehalten.
- [ ] **Sicherheit:** Keine anderen Sektionen verändern, keine unnötigen Refactors.
- [ ] **Performance:** Moderne CSS-Animationen (`transform`, `opacity` für Repaint-Vermeidung) nutzen, keine laggy Effekte.
- [ ] **Build Check:** Nach Fertigstellung `npm run build` ausführen, Änderungen zusammenfassen.

---
**Nächster Schritt:** Bitte prüfen. Wenn der Plan passt, starte ich mit der Umsetzung.
