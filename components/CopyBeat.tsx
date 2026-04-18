"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import { ReactNode } from "react";

type Position = "center" | "left" | "right";

interface CopyBeatProps {
  scrollYProgress: MotionValue<number>;
  enterAt: number;
  peakStart: number;
  peakEnd: number;
  exitAt: number | null;
  position: Position;
  children: ReactNode;
}

export function CopyBeat({
  scrollYProgress,
  enterAt,
  peakStart,
  peakEnd,
  exitAt,
  position,
  children,
}: CopyBeatProps) {
  const exits = exitAt !== null;
  const keyframes = exits
    ? [enterAt, peakStart, peakEnd, exitAt as number]
    : [enterAt, peakStart, peakEnd, 1];

  const opacity = useTransform(
    scrollYProgress,
    keyframes,
    exits ? [0, 1, 1, 0] : [0, 1, 1, 1]
  );

  const y = useTransform(
    scrollYProgress,
    keyframes,
    exits ? [20, 0, 0, -20] : [20, 0, 0, 0]
  );

  const alignItems =
    position === "center"
      ? "center"
      : position === "left"
      ? "flex-start"
      : "flex-end";

  const textAlign: "center" | "left" | "right" =
    position === "center" ? "center" : position === "left" ? "left" : "right";

  const paddingLeft = position === "left" ? "10%" : position === "center" ? "0" : "0";
  const paddingRight = position === "right" ? "10%" : position === "center" ? "0" : "0";

  return (
    <motion.div
      style={{
        opacity,
        y,
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        alignItems,
        justifyContent: "center",
        paddingLeft,
        paddingRight,
        textAlign,
        paddingTop: "4rem",
      }}
    >
      <div style={{ maxWidth: position === "center" ? 700 : 560 }}>
        {children}
      </div>
    </motion.div>
  );
}
