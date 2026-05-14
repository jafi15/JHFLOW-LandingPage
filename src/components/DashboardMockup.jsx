import { C } from "../theme";

export function DashboardMockup({ mx = 0, my = 0 }) {
  return (
    <div
      className="mockup-wrap"
      style={{
        position: "absolute",
        right: "-20px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "480px",
        height: "340px",
        perspective: "1400px",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {/* Layer 0 — back panel, most depth */}
      <div
        style={{
          position: "absolute",
          inset: "24px 0 0 60px",
          borderRadius: "14px",
          background: "rgba(12,12,18,0.55)",
          border: ".5px solid rgba(255,255,255,0.045)",
          transform: `perspective(1400px) rotateY(-14deg) rotateX(5deg) translate3d(${
            mx * 1.2
          }px,${my * 0.9}px,0px)`,
          transition: "transform .14s linear",
          boxShadow:
            "0 48px 96px rgba(0,0,0,.75),0 1px 0 rgba(255,255,255,.04) inset",
          overflow: "hidden",
          willChange: "transform",
        }}
      >
        {/* Window chrome */}
        <div
          style={{
            height: "34px",
            borderBottom: ".5px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            padding: "0 14px",
            gap: "6px",
            background: "rgba(0,0,0,.2)",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
              }}
            />
          ))}
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(255,255,255,0.04)",
              marginLeft: "12px",
              borderRadius: "1px",
            }}
          />
        </div>
        {/* Table rows */}
        {[
          { w: 78, g: true },
          { w: 55, g: false },
          { w: 72, g: true },
          { w: 45, g: false },
          { w: 63, g: false },
        ].map(({ w, g }, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "9px 14px",
              borderBottom: ".5px solid rgba(255,255,255,.025)",
              background: g ? "rgba(255,122,0,0.025)" : "transparent",
            }}
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "6px",
                background: "rgba(255,122,0,0.08)",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  height: "6px",
                  borderRadius: "3px",
                  background: "rgba(255,255,255,0.07)",
                  width: `${w}%`,
                  marginBottom: "5px",
                }}
              />
              <div
                style={{
                  height: "4px",
                  borderRadius: "3px",
                  background: "rgba(255,255,255,0.03)",
                  width: `${w * 0.55}%`,
                }}
              />
            </div>
            <div
              style={{
                width: "38px",
                height: "18px",
                borderRadius: "100px",
                background: g
                  ? "rgba(255,122,0,0.14)"
                  : "rgba(255,255,255,0.04)",
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>

      {/* Layer 1 — mid floating card */}
      <div
        style={{
          position: "absolute",
          left: "-10px",
          top: "48px",
          width: "190px",
          borderRadius: "12px",
          background: "rgba(15,10,5,0.90)",
          border: ".5px solid rgba(255,122,0,0.18)",
          padding: "18px 20px",
          transform: `perspective(1400px) rotateY(-9deg) rotateX(3.5deg) translate3d(${
            mx * 5
          }px,${my * 3.5}px,28px)`,
          transition: "transform .14s linear",
          boxShadow:
            "0 24px 52px rgba(0,0,0,.65),0 1px 0 rgba(255,255,255,.06) inset",
          animation: "floatA 6.5s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <div
          style={{
            fontSize: "10px",
            color: C.textTer,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            marginBottom: "10px",
            fontFamily: "'Courier New',monospace",
          }}
        >
          Leads heute
        </div>
        <div
          style={{
            fontSize: "30px",
            fontWeight: 500,
            color: C.textPri,
            letterSpacing: "-.03em",
            lineHeight: 1,
          }}
        >
          +47
        </div>
        <div
          style={{
            fontSize: "11px",
            color: "#4ADE80",
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span>↑ 23%</span>
          <span style={{ color: C.textTer }}>vs. gestern</span>
        </div>
        <div
          style={{
            marginTop: "14px",
            height: "34px",
            display: "flex",
            alignItems: "flex-end",
            gap: "3px",
          }}
        >
          {[38, 52, 34, 68, 48, 82, 60].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: "2px 2px 0 0",
                background: i === 5 ? C.accent : "rgba(255,122,0,0.18)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Layer 2 — front status chip, closest to viewer */}
      <div
        style={{
          position: "absolute",
          right: "30px",
          bottom: "44px",
          borderRadius: "10px",
          background: "rgba(18,8,0,0.92)",
          border: ".5px solid rgba(255,122,0,0.28)",
          padding: "11px 15px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          transform: `perspective(1400px) rotateY(-6deg) rotateX(2deg) translate3d(${
            mx * 9
          }px,${my * 6}px,56px)`,
          transition: "transform .14s linear",
          boxShadow:
            "0 14px 36px rgba(0,0,0,.6),0 1px 0 rgba(255,255,255,.07) inset",
          animation: "floatB 7.5s ease-in-out infinite",
          minWidth: "195px",
          willChange: "transform",
        }}
      >
        <div
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "rgba(255,122,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            flexShrink: 0,
            color: C.accentLt,
          }}
        >
          ✓
        </div>
        <div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: C.textPri,
              marginBottom: "2px",
            }}
          >
            Voice Agent aktiv
          </div>
          <div style={{ fontSize: "10px", color: C.textTer }}>
            3 Anrufe laufen gerade
          </div>
        </div>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#4ADE80",
            flexShrink: 0,
            boxShadow: "0 0 6px rgba(74,222,128,0.55)",
          }}
        />
      </div>
    </div>
  );
}
