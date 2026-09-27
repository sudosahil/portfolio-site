"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface DevRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "mount" plays on page load (hero); "view" plays when scrolled into view */
  on?: "mount" | "view";
  as?: "div" | "section" | "article" | "p" | "li";
}

const EASE = [0.16, 1, 0.3, 1] as const;

/** Rise + un-blur entrance used across the /dev track. */
export function DevReveal({ children, className, delay = 0, on = "view", as = "div" }: DevRevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const hidden = reduce ? { opacity: 1 } : { opacity: 0, y: 28, filter: "blur(8px)" };
  const shown = { opacity: 1, y: 0, filter: "blur(0px)" };
  const transition = { duration: 1.1, delay, ease: EASE };

  if (on === "mount") {
    return (
      <Tag className={className} initial={hidden} animate={shown} transition={transition}>
        {children}
      </Tag>
    );
  }
  return (
    <Tag
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </Tag>
  );
}

/** A 1px rule that draws itself along its axis when scrolled into view. */
export function DevGrowLine({ className, axis = "x" }: { className?: string; axis?: "x" | "y" }) {
  const reduce = useReducedMotion();
  const from = axis === "x" ? { scaleX: reduce ? 1 : 0 } : { scaleY: reduce ? 1 : 0 };
  const to = axis === "x" ? { scaleX: 1 } : { scaleY: 1 };
  return (
    <motion.div
      aria-hidden
      className={className}
      style={{ transformOrigin: axis === "x" ? "left" : "top" }}
      initial={from}
      whileInView={to}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.6, ease: EASE }}
    />
  );
}
