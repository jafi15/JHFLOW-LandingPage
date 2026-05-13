import { C } from "../theme";
import { useReveal } from "../hooks";
import { Eyebrow } from "./Eyebrow";

export function Problem() {
  const { ref, visible } = useReveal(0.08);
  const items = [
    {
      n: "01",
      title: "Manuelle Prozesse bremsen Wachstum",
      body: "Leads bleiben liegen. Anfragen werden zu spät beantwortet. Vertrieb verbringt Zeit mit Aufgaben, die Systeme erledigen könnten.",
    },
    {
      n: "02",
      title: "Digitale Präsenz ohne Wirkung",
      body: "Eine Website, die nicht konvertiert, ist kein Asset — sie ist Kulisse. Ohne klare Struktur und Conversion-Logik verpufft jedes Budget.",
    },
    {
      n: "03",
      title: "Kein System hinter dem Vertrieb",
      body: "Ohne CRM, Automatisierung und qualifizierte Lead-Pipelines bleibt Umsatz dem Zufall überlassen. Das lässt sich ändern.",
    },
  ];

  const fadeUp = (v, d = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? "translateY(0)" : "translateY(18px)",
    transition: `opacity .58s ease ${d}ms,transform .58s ease ${d}ms`,
  });

  return (
    <section
      id="problem"
      ref={ref}
      className="sec"
      style={{
        padding: "96px 48px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={fadeUp(visible)}>
        <Eyebrow>Das Problem</Eyebrow>
        <h2
          style={{
            fontSize: "clamp(28px,4vw,44px)",
            fontWeight: 500,
            letterSpacing: "-.025em",
            color: C.textPri,
            lineHeight: 1.1,
            marginBottom: "56px",
            maxWidth: "560px",
          }}
        >
          Was die meisten
          <br />
          Unternehmen bremst
        </h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}
          className="grid-3"
        >
          {items.map(({ n, title, body }, i) => (
            <div
              key={n}
              className="card-hover"
              style={{
                background: C.surface,
                border: `.5px solid ${C.border}`,
                borderRadius: "12px",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
                transitionDelay: `${i * 60}ms`,
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
                    "linear-gradient(to right,transparent,rgba(255,255,255,0.06),transparent)",
                }}
              />
              <div
                style={{
                  fontFamily: "'Courier New',monospace",
                  fontSize: "11px",
                  color: C.accentLt,
                  marginBottom: "16px",
                  letterSpacing: ".06em",
                }}
              >
                {n}
              </div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: C.textPri,
                  lineHeight: 1.4,
                  marginBottom: "10px",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "13px", color: C.textSec, lineHeight: 1.7 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
