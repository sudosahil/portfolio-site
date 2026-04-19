"use client";

import { motion } from "framer-motion";

interface CursorObjectProps {
  activeBeat: number;
}

function DotGrid() {
  const dots = [];
  for (let row = 0; row < 14; row++) {
    for (let col = 0; col < 20; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={col * 12}
          cy={row * 12}
          r="1"
          fill="rgba(139,143,255,0.06)"
        />
      );
    }
  }
  return <g>{dots}</g>;
}

function CursorSVG() {
  return (
    <div style={{ position: "relative" }}>
      <svg
        width="360"
        height="280"
        viewBox="0 0 360 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <DotGrid />
        <rect
          x="40" y="40" width="280" height="190" rx="12"
          stroke="rgba(139,143,255,0.15)" strokeWidth="1" fill="none"
        />
        <circle cx="60" cy="58" r="4" fill="rgba(255,255,255,0.08)" />
        <circle cx="76" cy="58" r="4" fill="rgba(255,255,255,0.08)" />
        <circle cx="92" cy="58" r="4" fill="rgba(255,255,255,0.08)" />
        <line x1="40" y1="70" x2="320" y2="70" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <g
          transform="translate(288, 200)"
          style={{ filter: "drop-shadow(0 4px 12px rgba(139,143,255,0.3))" }}
        >
          <path
            d="M0 0 L0 22 L5.5 16.5 L9.5 24 L12 23 L8 15.5 L15.5 15.5 Z"
            fill="#ede8df"
            fillOpacity="0.7"
          />
        </g>
      </svg>

      {/* Code labels — opacity pulse only, no y movement */}
      <motion.span
        animate={{ opacity: [0.25, 0.1, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: 32, left: 32,
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, color: "rgba(139,143,255,1)",
          pointerEvents: "none", whiteSpace: "nowrap",
        }}
      >
        {"<web />"}
      </motion.span>
      <motion.span
        animate={{ opacity: [0.25, 0.1, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: 32, right: 40,
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, color: "rgba(139,143,255,1)",
          pointerEvents: "none", whiteSpace: "nowrap",
        }}
      >
        {"design()"}
      </motion.span>
      <motion.span
        animate={{ opacity: [0.25, 0.1, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: 40, left: 32,
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11, color: "rgba(139,143,255,1)",
          pointerEvents: "none", whiteSpace: "nowrap",
        }}
      >
        {"{ build }"}
      </motion.span>
    </div>
  );
}

// Right-side cursor configs (beats 1, 2, 3, 5)
// beat 5 uses bottom:10% → converted to top: calc(90% - 280px)
const RIGHT_CONFIG: Record<number, { right: string; top: string; opacity: number; scale: number }> = {
  1: { right: "8%",  top: "calc(50% - 140px)", opacity: 0.5,  scale: 1    },
  2: { right: "6%",  top: "calc(45% - 140px)", opacity: 0.35, scale: 0.95 },
  3: { right: "7%",  top: "calc(48% - 140px)", opacity: 0.3,  scale: 0.9  },
  5: { right: "5%",  top: "calc(90% - 280px)", opacity: 0.2,  scale: 0.85 },
};

export function CursorObject({ activeBeat }: CursorObjectProps) {
  const rightCfg = RIGHT_CONFIG[activeBeat] ?? RIGHT_CONFIG[1];
  const rightVisible = [1, 2, 3, 5].includes(activeBeat);

  return (
    <>
      {/* Right side: beats 1, 2, 3, 5 */}
      <div
        style={{
          position: "absolute",
          right: rightCfg.right,
          top: rightCfg.top,
          zIndex: 5,
          pointerEvents: "none",
          opacity: rightVisible ? rightCfg.opacity : 0,
          transform: `scale(${rightCfg.scale}) translateZ(0)`,
          transition: "opacity 0.6s ease",
          willChange: "opacity",
        }}
      >
        <CursorSVG />
      </div>

      {/* Left side: beat 4 only */}
      <div
        style={{
          position: "absolute",
          left: "6%",
          top: "calc(45% - 140px)",
          zIndex: 5,
          pointerEvents: "none",
          opacity: activeBeat === 4 ? 0.35 : 0,
          transform: "scale(0.95) translateZ(0)",
          transition: "opacity 0.6s ease",
          willChange: "opacity",
        }}
      >
        <CursorSVG />
      </div>
    </>
  );
}
