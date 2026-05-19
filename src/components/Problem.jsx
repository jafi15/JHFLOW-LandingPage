import { C } from "../theme";
import { useReveal } from "../hooks";
import { Eyebrow } from "./Eyebrow";

const CARD_DNA = [
  {
    extraClass: "tiger-card-speed",
    bg: "linear-gradient(145deg,#161616 0%,#111111 100%)",
    hairline: "linear-gradient(to right,transparent,rgba(255,122,0,0.18),transparent)",
    numRight: "-45px",
    numBottom: "-55px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
    numAnim: "numFloat 5s ease-in-out infinite",
    lines: [
      { top: "36%", opacity: 0.22, dur: "3.8s", delay: "0s",   angle: "4deg" },
      { top: "66%", opacity: 0.14, dur: "5.3s", delay: "2.1s", angle: "4deg" },
    ],
  },
  {
    extraClass: "tiger-card-flow",
    bg: C.surface,
    hairline: "linear-gradient(to right,transparent,rgba(255,176,0,0.13),transparent)",
    numRight: "-30px",
    numBottom: "-35px",
    boxShadow: "0 1px 8px rgba(0,0,0,0.18)",
    numAnim: "numFloat 8s ease-in-out 2s infinite",
    lines: [
      { top: "42%", opacity: 0.18, dur: "6.5s", delay: "0s",   angle: "0deg" },
      { top: "68%", opacity: 0.11, dur: "9.2s", delay: "3.4s", angle: "0deg" },
    ],
  },
  {
    extraClass: "tiger-card-system",
    bg: "linear-gradient(185deg,#141414 0%,#111111 100%)",
    hairline: "linear-gradient(to right,transparent,rgba(255,255,255,0.09),transparent)",
    numRight: "-55px",
    numBottom: "-60px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.38)",
    numAnim: "numFloat 13s ease-in-out 4s infinite",
    lines: [
      { top: "30%", opacity: 0.13, dur: "10s",  delay: "1.5s", angle: "0deg" },
      { top: "68%", opacity: 0.09, dur: "14s",  delay: "6s",   angle: "0deg" },
    ],
  },
];

export function Problem() {
  const { ref, visible } = useReveal(0.08);
  const items = [
    {
      n: "01",
      title: "Manuelle Prozesse kosten Zeit",
      body: "Leads bleiben liegen. Anfragen werden zu spät beantwortet. Vertrieb verbringt Zeit mit Aufgaben, die Systeme erledigen könnten.",
    },
    {
      n: "02",
      title: "Sichtbarkeit ohne System",
      body: "Eine Website, die nicht konvertiert, ist kein Asset — sie ist Kulisse. Ohne klare Struktur und Conversion-Logik verpufft jedes Budget.",
    },
    {
      n: "03",
      title: "Vertrieb ohne Struktur",
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
      style={{ padding: "96px 48px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={fadeUp(visible)}>
        <Eyebrow>Wachstums-Blocker</Eyebrow>
        <h2
          style={{
            fontSize: "clamp(28px,4vw,44px)",
            fontWeight: 500,
            letterSpacing: "-.025em",
            color: C.textPri,
            lineHeight: 1.1,
            marginBottom: "28px",
            maxWidth: "560px",
          }}
        >
          Was Ihr Wachstum aufhält
        </h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}
          className="grid-3"
        >
          {items.map(({ n, title, body }, i) => {
            const dna = CARD_DNA[i];
            return (
              <div
                key={n}
                className={`card-hover tiger-card ${dna.extraClass}`}
                style={{
                  background: dna.bg,
                  border: `.5px solid ${C.border}`,
                  borderRadius: "12px",
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                  transitionDelay: `${i * 60}ms`,
                  boxShadow: dna.boxShadow,
                }}
              >
                {/* Top accent hairline */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "16px",
                    right: "16px",
                    height: ".5px",
                    background: dna.hairline,
                    zIndex: 2,
                  }}
                />

                {/* Permanent data stream lines */}
                {dna.lines.map((line, li) => (
                  <div
                    key={li}
                    style={{
                      position: "absolute",
                      top: line.top,
                      left: 0,
                      height: "1px",
                      width: "65px",
                      borderRadius: "1px",
                      transform: `rotate(${line.angle})`,
                      background: `linear-gradient(to right,transparent,rgba(255,122,0,${line.opacity}),transparent)`,
                      animation: `cardStream ${line.dur} ease-in-out ${line.delay} infinite`,
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  />
                ))}

                {/* Large background number — design object, energy trace */}
                <div
                  style={{
                    position: "absolute",
                    right: dna.numRight,
                    bottom: dna.numBottom,
                    fontSize: "340px",
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk','Inter',sans-serif",
                    color: C.accent,
                    opacity: 0.07,
                    lineHeight: 1,
                    letterSpacing: "-.04em",
                    filter: "blur(5px)",
                    textShadow: "0 0 80px rgba(255,122,0,0.4)",
                    userSelect: "none",
                    pointerEvents: "none",
                    animation: dna.numAnim,
                    zIndex: 0,
                  }}
                >
                  {n}
                </div>

                {/* Foreground content */}
                <div style={{ position: "relative", zIndex: 2 }}>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
