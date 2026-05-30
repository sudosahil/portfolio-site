"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatProps {
  value: number;
  /** rendered after the number, e.g. "+" or "%" */
  suffix?: string;
  label: string;
  /** decimals & thousands separators preserved from a template like "7.318" */
  display?: string;
}

/** Big animated number counter (Büro counter-count). */
export function Stat({ value, suffix = "", label, display }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="display text-[64px] sm:text-[88px] leading-[0.85] tracking-tighter2">
        {display && inView ? display : n}
        {suffix}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-grey mt-3">
        {label}
      </p>
    </div>
  );
}
