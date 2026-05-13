import { C } from "../theme";
import { useReveal } from "../hooks";
import { Eyebrow } from "./Eyebrow";

export function Services() {
  const { ref, visible } = useReveal(0.06);
  const services = [
    {
      icon: "◈",
      title: "Webdesign",
      sub: "Premium-Websites",
      body: "Kein Template. Kein Baukasten. Individuelle Websites, die Vertrauen schaffen und Besucher in Anfragen verwandeln.",
    },
    {
      icon: "◉",
      title: "AI Chatbots",
      sub: "24/7 Qualifizierung",
      body: "Intelligente Chatbots, die qualifizieren, antworten und buchen — ohne menschliches Intervention bei Standardanfragen.",
    },
    {
      icon: "◎",
      title: "AI Voice Agents",
      sub: "Ausgehende Anrufe",
      body: "KI-gestützte Sprachagenten für Outbound-Vertrieb, Terminvereinbarung und Lead-Nachverfolgung. Skalierbar ab Tag eins.",
    },
    {
      icon: "▣",
      title: "CRM-Systeme",
      sub: "Zentralisierte Pipeline",
      body: "Aufbau und Implementierung von CRM-Systemen, die Leads erfassen, priorisieren und den Vertrieb strukturieren.",
    },
    {
      icon: "⬡",
      title: "Workflow Automations",
      sub: "Prozesse verbinden",
      body: "Automatisierte Workflows zwischen Tools, Teams und Systemen. Weniger manuelle Arbeit, mehr Konsistenz.",
    },
    {
      icon: "◆",
      title: "Lead-Systeme",
      sub: "Strukturierter Eingang",
      body: "Lead-Capturing, Scoring und Routing — abgestimmt auf Ihren Vertriebsprozess. Kein Lead geht mehr verloren.",
    },
  ];

  const fadeUp = (v, d = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? "translateY(0)" : "translateY(18px)",
    transition: `opacity .58s ease ${d}ms,transform .58s ease ${d}ms`,
  });

  return (
    <section
      id="leistungen"
      ref={ref}
      style={{
        background: C.surface,
        borderTop: `.5px solid ${C.border}`,
        borderBottom: `.5px solid ${C.border}`,
      }}
    >
      <div
        className="sec"
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 48px" }}
      >
        <div style={fadeUp(visible)}>
          <Eyebrow>Leistungen</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,44px)",
              fontWeight: 500,
              letterSpacing: "-.025em",
              color: C.textPri,
              lineHeight: 1.1,
              marginBottom: "56px",
              maxWidth: "520px",
            }}
          >
            Sechs Systeme.
            <br />
            Ein Ziel: Wachstum.
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" }}
            className="grid-3"
          >
            {services.map(({ icon, title, sub, body }, i) => (
              <div
                key={title}
                className="card-hover"
                style={{
                  background: C.pageBg,
                  border: `.5px solid ${C.border}`,
                  borderRadius: "12px",
                  padding: "28px",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "16px",
                    right: "16px",
                    height: ".5px",
                    background:
                      "linear-gradient(to right,transparent,rgba(255,255,255,0.05),transparent)",
                  }}
                />
                <div
                  style={{
                    fontSize: "20px",
                    color: C.accent,
                    marginBottom: "16px",
                    lineHeight: 1,
                  }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <h3 style={{ fontSize: "15px", fontWeight: 500, color: C.textPri }}>
                    {title}
                  </h3>
                  <span style={{ fontSize: "11px", color: C.textTer }}>{sub}</span>
                </div>
                <p style={{ fontSize: "13px", color: C.textSec, lineHeight: 1.7 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
