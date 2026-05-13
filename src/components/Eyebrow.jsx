import { C } from "../theme";

export function Eyebrow({ children }) {
  return (
    <div
      style={{
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: C.accent,
        marginBottom: "14px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span style={{ width: "20px", height: ".5px", background: C.accent }} />
      {children}
    </div>
  );
}
