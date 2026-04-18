"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface CursorObjectProps {
  scrollYProgress: MotionValue<number>;
}

const COLS = 20;
const ROWS = 14;
const SPACING = 12;

function DotGrid() {
  const dots = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={col * SPACING}
          cy={row * SPACING}
          r="1"
          fill="rgba(139,143,255,0.06)"
        />
      );
    }
  }
  return <g transform="translate(0, 0)">{dots}</g>;
}

export function CursorObject({ scrollYProgress }: CursorObjectProps) {
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.47, 0.72, 1],
    [0.9, 0.4, 0.6, 0.3, 0.3]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.47, 0.72, 1],
    [0, 20, -10, 0, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.47, 0.72, 1],
    [0, -10, 10, 20, 20]
  );

  return (
    <motion.div
      style={{
        opacity,
        x,
        y,
        position: "absolute",
        left: "62%",
        top: "35%",
        zIndex: 5,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <svg
        width="360"
        height="280"
        viewBox="0 0 360 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Dot grid */}
        <DotGrid />

        {/* Browser frame */}
        <rect
          x="40"
          y="40"
          width="280"
          height="190"
          rx="12"
          stroke="rgba(139,143,255,0.15)"
          strokeWidth="1"
          fill="none"
        />

        {/* Top bar circles */}
        <circle cx="60" cy="58" r="4" fill="rgba(255,255,255,0.08)" />
        <circle cx="76" cy="58" r="4" fill="rgba(255,255,255,0.08)" />
        <circle cx="92" cy="58" r="4" fill="rgba(255,255,255,0.08)" />

        {/* Separator line below top bar */}
        <line
          x1="40"
          y1="70"
          x2="320"
          y2="70"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />

        {/* Cursor arrow — bottom right of frame */}
        <g
          transform="translate(288, 200)"
          filter="url(#cursorShadow)"
        >
          <path
            d="M0 0 L0 22 L5.5 16.5 L9.5 24 L12 23 L8 15.5 L15.5 15.5 Z"
            fill="#ede8df"
            fillOpacity="0.7"
          />
        </g>

        {/* Click ripples */}
        <motion.circle
          cx="294"
          cy="211"
          r="16"
          stroke="#8b8fff"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "294px 211px" }}
        />
        <motion.circle
          cx="294"
          cy="211"
          r="28"
          stroke="#8b8fff"
          strokeWidth="1"
          fill="none"
          opacity="0.1"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          style={{ transformOrigin: "294px 211px" }}
        />

        <defs>
          <filter id="cursorShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="6"
              floodColor="rgba(139,143,255,0.3)"
            />
          </filter>
        </defs>
      </svg>

      {/* Floating code labels — outside SVG so font renders correctly */}
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 32,
          left: 32,
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11,
          color: "rgba(139,143,255,0.25)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {"<web />"}
      </motion.span>

      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 32,
          right: 40,
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11,
          color: "rgba(139,143,255,0.25)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {"design()"}
      </motion.span>

      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: 40,
          left: 32,
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11,
          color: "rgba(139,143,255,0.25)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {"{ build }"}
      </motion.span>
    </motion.div>
  );
}
