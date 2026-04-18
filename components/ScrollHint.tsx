"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface ScrollHintProps {
  scrollYProgress: MotionValue<number>;
}

export function ScrollHint({ scrollYProgress }: ScrollHintProps) {
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <motion.div
      style={{
        opacity,
        position: "fixed",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          color: "#8888a8",
          letterSpacing: "0.1em",
        }}
      >
        scroll
      </span>
      <div style={{ display: "flex", gap: 4 }}>
        {[0, 0.2, 0.4].map((delay) => (
          <motion.span
            key={delay}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
            style={{
              display: "block",
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: "#8b8fff",
              opacity: 0.4,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
