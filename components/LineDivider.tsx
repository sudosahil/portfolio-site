"use client";

import { motion } from "framer-motion";

interface LineDividerProps {
  className?: string;
  dark?: boolean;
}

/** Thin full-width rule that draws itself in on scroll (Büro line-divider). */
export function LineDivider({ className = "", dark = false }: LineDividerProps) {
  return (
    <motion.div
      className={`h-px w-full origin-left ${dark ? "bg-line-light" : "bg-line"} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
