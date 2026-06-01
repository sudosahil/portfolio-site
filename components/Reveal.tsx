"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Rise + fade entrance, Büro cadence. Plays on mount so the content is
 * always rendered into place — never left as an invisible/blank gap while
 * waiting for a scroll event.
 */
export function Reveal({ children, delay = 0, y = 34, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}

/** Line-by-line mask reveal — each line rises out of a clipped row on mount. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: RevealLinesProps) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
