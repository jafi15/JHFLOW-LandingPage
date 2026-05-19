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
          <pattern
            id="tigerStripes"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(52)"
          >
            <rect x="0" y="0" width="12" height="80" fill="rgba(255,122,0,0.022)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gmask)" />
        <rect width="100%" height="100%" fill="url(#tigerStripes)" mask="url(#gmask)" />
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
      {/* Flow Lines — subtle data stream */}
      {[
        { top: "32%", width: "100px", dur: "7.5s", delay: "0s",   opacity: 0.12 },
        { top: "61%", width: "75px",  dur: "9.2s", delay: "3.1s", opacity: 0.09 },
      ].map((line, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: line.top,
            left: 0,
            height: "1px",
            width: line.width,
            borderRadius: "1px",
            background: `linear-gradient(to right, transparent, rgba(255,122,0,${line.opacity}), transparent)`,
            animation: `flowDrift ${line.dur} ease-in-out ${line.delay} infinite`,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
