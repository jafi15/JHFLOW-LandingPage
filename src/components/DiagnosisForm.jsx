import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, BrainCircuit, Activity, Target, ArrowRight } from "lucide-react";
import { C } from "../theme";
import { Eyebrow } from "./Eyebrow";

export function DiagnosisForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    industry: "",
    teamSize: "",
    mainPain: "",
    email: ""
  });

  const steps = [
    {
      title: "Branche",
      icon: <Target size={18} />,
      options: ["E-Commerce", "B2B Vertrieb", "Immobilien", "Handwerk", "Sonstiges"]
    },
    {
      title: "Teamgröße",
      icon: <Activity size={18} />,
      options: ["1-5", "6-15", "16-50", "51+"]
    },
    {
      title: "Größter Hebel",
      icon: <BrainCircuit size={18} />,
      options: ["Lead-Qualifizierung", "Kunden-Support", "CRM & Datenpflege", "Interne Workflows"]
    }
  ];

  const handleNext = (val) => {
    const fields = ["industry", "teamSize", "mainPain"];
    setData({ ...data, [fields[step]]: val });
    if (step < steps.length - 1) setStep(step + 1);
    else setStep(3); // Go to final email step
  };

  return (
    <section className="sec" style={{ padding: "96px 48px", background: C.surface, borderTop: `.5px solid ${C.border}`, borderBottom: `.5px solid ${C.border}` }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <Eyebrow>Automation Health Check</Eyebrow>
        <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 500, color: C.textPri, marginBottom: "56px" }}>
          Wie viel Potenzial<br />steckt in Ihrem Business?
        </h2>

        <div style={{ background: C.pageBg, border: `.5px solid ${C.borderEm}`, borderRadius: "24px", padding: "48px", position: "relative", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ position: "absolute", top: "24px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px" }}>
            {[0, 1, 2, 3].map((s) => (
              <div key={s} style={{ width: "40px", height: "4px", borderRadius: "2px", background: s <= step ? C.accent : C.borderEm, transition: "background .3s" }} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step < 3 ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                style={{ width: "100%" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", color: C.accent, marginBottom: "16px" }}>
                  {steps[step].icon}
                  <span style={{ fontWeight: 600, fontSize: "14px" }}>SCHRITT {step + 1}</span>
                </div>
                <h3 style={{ fontSize: "24px", color: C.textPri, marginBottom: "32px" }}>{steps[step].title}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="grid-2">
                  {steps[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleNext(opt)}
                      style={{
                        background: C.surface,
                        border: `.5px solid ${C.border}`,
                        color: C.textPri,
                        padding: "16px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "all .2s",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                      className="card-hover"
                    >
                      {opt}
                      <ChevronRight size={16} opacity={0.3} />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="final"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center" }}
              >
                <div style={{ width: "64px", height: "64px", background: "rgba(74,222,128,0.1)", color: "#4ADE80", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: "24px", color: C.textPri, marginBottom: "12px" }}>Analyse abgeschlossen</h3>
                <p style={{ color: C.textSec, marginBottom: "32px" }}>Wohin dürfen wir Ihren persönlichen Automation-Report senden?</p>
                <form 
                  onSubmit={(e) => { e.preventDefault(); setStep(4); }}
                  style={{ display: "flex", gap: "12px", maxWidth: "440px", margin: "0 auto" }} 
                  className="form-stack"
                >
                  <input
                    type="email"
                    required
                    placeholder="E-Mail Adresse"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    style={{ flex: 1, background: C.surface, border: `.5px solid ${C.borderEm}`, borderRadius: "10px", padding: "14px 18px", color: C.textPri, outline: "none" }}
                  />
                  <button className="cta-btn" style={{ background: C.accent, color: "#fff", border: "none", borderRadius: "100px", padding: "14px 24px", fontWeight: 500, display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                    Report erhalten <ArrowRight size={16} />
                  </button>
                </form>
              </motion.div>
            )}

            {step === 4 && (
               <motion.div
               key="done"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               style={{ textAlign: "center" }}
             >
               <h3 style={{ fontSize: "24px", color: C.textPri, marginBottom: "12px" }}>Vielen Dank!</h3>
               <p style={{ color: C.textSec }}>Ihr Report wird generiert und in Kürze an <strong>{data.email}</strong> gesendet.</p>
             </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
