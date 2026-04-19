"use client";

import { useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface BeatIndicatorProps {
  scrollYProgress: MotionValue<number>;
}

const BREAKPOINTS = [0, 0.2, 0.4, 0.6, 0.8];

function getActiveBeat(v: number): number {
  for (let i = BREAKPOINTS.length - 1; i >= 0; i--) {
    if (v >= BREAKPOINTS[i]) return i;
  }
  return 0;
}

export function BeatIndicator({ scrollYProgress }: BeatIndicatorProps) {
  const [activeBeat, setActiveBeat] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveBeat(getActiveBeat(v));
  });

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        pointerEvents: "none",
      }}
    >
      {BREAKPOINTS.map((_, i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: activeBeat === i ? "#8b8fff" : "rgba(255,255,255,0.15)",
            transition: "background-color 0.2s ease",
          }}
        />
      ))}
    </div>
  );
}
