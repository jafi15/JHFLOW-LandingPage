import { C } from "../theme";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: `.5px solid ${C.border}`,
        padding: "28px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: C.textTer,
          letterSpacing: ".04em",
        }}
      >
        JHFLOW
      </div>
      <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
        {["Impressum", "Datenschutz", "AGB"].map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontSize: "12px",
              color: C.textTer,
              textDecoration: "none",
              transition: "color .15s",
            }}
            onMouseEnter={(e) => (e.target.style.color = C.textSec)}
            onMouseLeave={(e) => (e.target.style.color = C.textTer)}
          >
            {l}
          </a>
        ))}
      </div>
      <div style={{ fontSize: "12px", color: C.textDis }}>
        © 2025 JHFLOW. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
