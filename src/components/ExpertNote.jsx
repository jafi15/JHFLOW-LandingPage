import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { C } from "../theme";

export function ExpertNote() {
  return (
    <section className="sec" style={{ padding: "120px 48px", background: C.pageBg, position: "relative", overflow: "hidden" }}>
      {/* Decorative Orbs */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(255,122,0,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,122,0,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ color: C.accent, marginBottom: "32px", display: "flex", justifyContent: "center" }}>
          <Quote size={40} fill="currentColor" fillOpacity={0.1} />
        </div>

        <blockquote style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "28px", fontWeight: 300, lineHeight: 1.5, color: C.textPri, fontStyle: "italic", letterSpacing: "-0.01em" }}>
            "In einer Welt, in der Zeit die wertvollste Ressource ist, sollte kein Unternehmen wertvolle Stunden mit Aufgaben verschwenden, die eine KI in Sekunden erledigen kann. Unsere Mission ist es, die Komplexität der KI zu entschlüsseln und sie für den Mittelstand greifbar und profitabel zu machen."
          </p>
        </blockquote>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent} 0%, ${C.accentHov} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: "20px", boxShadow: "0 8px 24px rgba(255,122,0,0.3)" }}>
            TF
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: C.textPri, fontWeight: 600, fontSize: "16px" }}>Jan-Hendrik Flow</div>
            <div style={{ color: C.textTer, fontSize: "12px", textTransform: "uppercase", letterSpacing: ".1em", marginTop: "4px" }}>Founder & AI Architect</div>
          </div>
          
          {/* Simulated Signature */}
          <motion.div 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ marginTop: "12px" }}
          >
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M10 30C25 25 45 10 55 15C65 20 50 35 70 30C90 25 110 15 115 20" 
                stroke={C.accent} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
