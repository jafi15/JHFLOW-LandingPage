import { motion } from "framer-motion";
import { C } from "../theme";

export function ExpertNote() {
  return (
    <section
      className="sec"
      style={{ padding: "120px 48px", background: C.pageBg, position: "relative", overflow: "hidden" }}
    >
      {/* Background energy lines */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.045 }}
        preserveAspectRatio="none"
      >
        <line x1="0" y1="30%" x2="100%" y2="25%"  stroke={C.accent} strokeWidth="1"/>
        <line x1="0" y1="50%" x2="100%" y2="44%"  stroke={C.accent} strokeWidth="0.6"/>
        <line x1="0" y1="70%" x2="100%" y2="66%"  stroke={C.accent} strokeWidth="0.8"/>
        <line x1="0" y1="85%" x2="100%" y2="80%"  stroke={C.accent} strokeWidth="0.5"/>
      </svg>

      {/* Ambient glow left */}
      <div style={{
        position: "absolute", top: "10%", left: "-8%",
        width: "420px", height: "420px",
        background: "radial-gradient(circle, rgba(255,122,0,0.09) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />
      {/* Ambient glow right */}
      <div style={{
        position: "absolute", bottom: "5%", right: "-6%",
        width: "360px", height: "360px",
        background: "radial-gradient(circle, rgba(255,122,0,0.07) 0%, transparent 68%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            background: "linear-gradient(145deg, rgba(14,8,2,0.97) 0%, rgba(8,4,1,0.98) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,122,0,0.18)",
            borderBottom: `2px solid ${C.accent}`,
            borderRadius: "20px",
            padding: "56px 64px 48px",
            boxShadow: `0 0 0 1px rgba(255,122,0,0.06), 0 24px 80px rgba(0,0,0,0.75), 0 0 60px rgba(255,122,0,0.07)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Inner bottom orange gradient */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
            background: "linear-gradient(to top, rgba(255,122,0,0.07), transparent)",
            pointerEvents: "none",
          }} />

          {/* Large decorative quote mark */}
          <div style={{
            position: "absolute", top: "20px", left: "44px",
            fontSize: "160px", lineHeight: 1, fontWeight: 700,
            color: C.accent, opacity: 0.06, fontFamily: "Georgia, serif",
            pointerEvents: "none", userSelect: "none",
          }}>
            "
          </div>

          {/* Quote text */}
          <blockquote style={{ margin: 0, marginBottom: "44px", position: "relative" }}>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              style={{
                fontSize: "clamp(20px, 2.4vw, 27px)",
                fontWeight: 300,
                lineHeight: 1.65,
                color: C.textPri,
                fontStyle: "italic",
                letterSpacing: "-0.01em",
                textAlign: "center",
              }}
            >
              "Unternehmen, die heute{" "}
              <span style={{ color: C.accent, fontStyle: "normal", fontWeight: 500 }}>
                keine KI nutzen
              </span>
              , sind morgen die{" "}
              <span style={{ color: C.accent, fontStyle: "normal", fontWeight: 500 }}>
                Beute
              </span>{" "}
              derer, die es tun."
            </motion.p>
          </blockquote>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{
              height: "1px",
              background: `linear-gradient(to right, transparent, ${C.accent}55, transparent)`,
              marginBottom: "36px",
              transformOrigin: "center",
            }}
          />

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}
          >
            {/* Avatar */}
            <div style={{
              width: "52px", height: "52px", borderRadius: "50%", flexShrink: 0,
              background: `linear-gradient(135deg, ${C.accent} 0%, ${C.accentHov} 100%)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: "16px",
              boxShadow: `0 0 0 3px rgba(255,122,0,0.15), 0 8px 24px rgba(255,122,0,0.28)`,
            }}>
              JH
            </div>

            <div>
              <div style={{ color: C.textPri, fontWeight: 600, fontSize: "16px", letterSpacing: "-0.01em" }}>
                Jafar Hamzeh
              </div>
              <div style={{ color: C.textTer, fontSize: "12px", textTransform: "uppercase", letterSpacing: ".1em", marginTop: "3px" }}>
                Founder & CEO · TigerFlow
              </div>
            </div>

            {/* Signature SVG */}
            <motion.svg
              width="100" height="36" viewBox="0 0 100 36" fill="none"
              style={{ marginLeft: "8px", opacity: 0.7 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.path
                d="M4 28 C12 20, 20 8, 30 12 C38 15, 32 28, 42 24 C52 20, 58 10, 68 14 C76 17, 72 26, 82 22 C88 20, 94 16, 97 18"
                stroke={C.accent}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.6, ease: "easeInOut", delay: 0.6 } },
                }}
              />
            </motion.svg>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
