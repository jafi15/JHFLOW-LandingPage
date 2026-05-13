import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ArrowRight, FileText, Check } from "lucide-react";
import { C } from "../theme";

export function ExitIntent() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setShow(true);
        setHasShown(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {show && (
        <div style={{ position: "fixed", inset: 0, zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "540px",
              background: C.surface,
              borderRadius: "24px",
              border: `.5px solid ${C.borderEm}`,
              padding: "48px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.8)",
              overflow: "hidden"
            }}
          >
            {/* Background Glow */}
            <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "300px", height: "300px", background: `radial-gradient(circle, ${C.accentTint} 0%, transparent 70%)`, pointerEvents: "none" }} />

            <button
              onClick={() => setShow(false)}
              style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", color: C.textTer, cursor: "pointer", padding: "8px" }}
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div style={{ width: "56px", height: "56px", background: C.accentTint, borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: C.accent, marginBottom: "28px" }}>
                  <Gift size={28} />
                </div>

                <h2 style={{ fontSize: "32px", fontWeight: 600, color: C.textPri, marginBottom: "16px", lineHeight: 1.1 }}>Warten Sie!</h2>
                <p style={{ color: C.textSec, fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}>
                  Bevor Sie gehen: Sichern Sie sich unseren exklusiven <strong>AI-Automation Guide 2025</strong> für den Mittelstand. Kostenlos als PDF.
                </p>

                <div style={{ background: "rgba(255,255,255,0.03)", border: `.5px solid ${C.borderEm}`, borderRadius: "12px", padding: "20px", display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
                  <div style={{ width: "40px", height: "40px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: C.textTer }}>
                    <FileText size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: C.textPri, fontSize: "14px", fontWeight: 500 }}>AI_Strategie_2025.pdf</div>
                    <div style={{ color: C.textTer, fontSize: "11px" }}>12 Seiten · 4.2 MB</div>
                  </div>
                </div>

                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  style={{ display: "flex", gap: "12px" }}
                  className="form-stack"
                >
                  <input
                    type="email"
                    required
                    placeholder="E-Mail Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ flex: 1, background: C.pageBg, border: `.5px solid ${C.borderEm}`, borderRadius: "10px", padding: "14px 18px", color: C.textPri, outline: "none" }}
                  />
                  <button className="cta-btn" style={{ background: C.accent, color: "#fff", border: "none", borderRadius: "100px", padding: "14px 24px", fontWeight: 500, display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                    Senden <ArrowRight size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ width: "64px", height: "64px", background: "rgba(74,222,128,0.1)", color: "#4ADE80", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Check size={32} />
                </div>
                <h2 style={{ fontSize: "28px", color: C.textPri, marginBottom: "12px" }}>Post ist unterwegs!</h2>
                <p style={{ color: C.textSec, marginBottom: "32px" }}>Wir haben den Guide an <strong>{email}</strong> gesendet. Viel Erfolg bei der Umsetzung!</p>
                <button onClick={() => setShow(false)} style={{ background: "none", border: `.5px solid ${C.borderEm}`, color: C.textPri, padding: "12px 32px", borderRadius: "100px", fontSize: "14px", cursor: "pointer" }}>
                  Schließen
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
