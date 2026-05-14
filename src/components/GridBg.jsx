export function GridBg({ mx = 0, my = 0 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0L0 0 0 60"
              fill="none"
              stroke="rgba(255,122,0,0.04)"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="gfade" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="gmask">
            <rect width="100%" height="100%" fill="url(#gfade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gmask)" />
      </svg>
      {/* Mouse-reactive ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "14%",
          left: "50%",
          transform: `translate(calc(-50% + ${mx * 22}px),${my * 16}px)`,
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse,rgba(255,122,0,0.065) 0%,transparent 65%)",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />
      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 110%,rgba(0,0,0,.65) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
