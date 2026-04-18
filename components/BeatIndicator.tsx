"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface BeatIndicatorProps {
  scrollYProgress: MotionValue<number>;
}

const BEATS = [0, 1, 2, 3];
const BREAKPOINTS = [0, 0.2, 0.47, 0.72];

export function BeatIndicator({ scrollYProgress }: BeatIndicatorProps) {
  const activeBeatValue = useTransform(scrollYProgress, (v) => {
    let active = 0;
    for (let i = BREAKPOINTS.length - 1; i >= 0; i--) {
      if (v >= BREAKPOINTS[i]) {
        active = i;
        break;
      }
    }
    return active;
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
      {BEATS.map((beat) => (
        <BeatDot key={beat} beat={beat} activeBeatValue={activeBeatValue} />
      ))}
    </div>
  );
}

function BeatDot({
  beat,
  activeBeatValue,
}: {
  beat: number;
  activeBeatValue: MotionValue<number>;
}) {
  const scale = useTransform(activeBeatValue, (active) =>
    active === beat ? 1.3 : 1
  );
  const bg = useTransform(activeBeatValue, (active) =>
    active === beat ? "#8b8fff" : "rgba(255,255,255,0.15)"
  );

  return (
    <motion.div
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: bg,
        scale,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  );
}
