import { C } from "../theme";
import { useReveal } from "../hooks";
import { Eyebrow } from "./Eyebrow";

export function Process() {
  const { ref, visible } = useReveal(0.08);
  const steps = [
    {
      n: "01",
      title: "Analyse & Strategie",
      body: "Wir verstehen Ihr Geschäft, Ihre Ziele und wo der größte Hebel liegt. Kein generisches Paket — sondern ein konkreter Plan.",
    },
    {
      n: "02",
      title: "Aufbau & Integration",
      body: "Die Systeme werden gebaut, konfiguriert und in Ihre bestehenden Prozesse integriert. Transparent, termingerecht, dokumentiert.",
    },
    {
      n: "03",
      title: "Launch & Optimierung",
      body: "Go-live mit Monitoring. Nach dem Start wird gemessen, was funktioniert — und kontinuierlich verbessert.",
    },
  ];

  const fadeUp = (v, d = 0) => ({
    opacity: v ? 1 : 0,
    transform: v ? "translateY(0)" : "translateY(18px)",
    transition: `opacity .58s ease ${d}ms,transform .58s ease ${d}ms`,
  });

  return (
    <section
      id="prozess"
      ref={ref}
      className="sec"
      style={{
        padding: "96px 48px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={fadeUp(visible)}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="grid-2"
        >
          <div>
            <Eyebrow>Prozess</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 500,
                letterSpacing: "-.025em",
                color: C.textPri,
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Wie wir
              <br />
              zusammenarbeiten
            </h2>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 300,
                color: C.textSec,
                lineHeight: 1.75,
                maxWidth: "380px",
              }}
            >
              Von der ersten Analyse bis zum laufenden System arbeiten wir
              strukturiert, direkt und ohne Overhead.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map(({ n, title, body }, i) => (
              <div
                key={n}
                className={i < steps.length - 1 ? "step-line" : ""}
                style={{
                  position: "relative",
                  display: "flex",
                  gap: "20px",
                  paddingBottom: i < steps.length - 1 ? "32px" : "0",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: C.surface,
                    border: `.5px solid ${C.borderEm}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Courier New',monospace",
                    fontSize: "10px",
                    color: C.accentLt,
                    letterSpacing: ".06em",
                    zIndex: 1,
                    boxShadow:
                      "0 2px 10px rgba(0,0,0,.45),0 1px 0 rgba(255,255,255,.04) inset",
                  }}
                >
                  {n}
                </div>
                <div style={{ paddingTop: "8px" }}>
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: C.textPri,
                      marginBottom: "6px",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: "13px", color: C.textSec, lineHeight: 1.65 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
