"use client";

import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

interface MarqueeProps {
  children: ReactNode;
  /** seconds for one full loop of a single group */
  duration?: number;
  direction?: "left" | "right";
  className?: string;
  /** how many copies of children make up one group (must tile to >= viewport) */
  repeat?: number;
}

/** Keep an offset wrapped into the half-open range (-w, 0] for a seamless loop. */
function wrap(v: number, w: number) {
  if (w <= 0) return v;
  let r = v % w;
  if (r > 0) r -= w;
  return r;
}

/**
 * Büro-style infinite horizontal marquee.
 * Auto-scrolls when idle and is draggable / swipeable on desktop and mobile.
 * Two identical groups are rendered so the loop is seamless; while the user
 * drags, the auto-scroll pauses and resumes on release.
 */
export function Marquee({
  children,
  duration = 26,
  direction = "left",
  className = "",
  repeat = 4,
}: MarqueeProps) {
  const x = useMotionValue(0);
  const groupRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const dragging = useRef(false);
  const start = useRef({ pointer: 0, x: 0 });
  const reduceMotion = useRef(false);
  const [grabbing, setGrabbing] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (groupRef.current) widthRef.current = groupRef.current.offsetWidth;
    };
    measure();
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (dragging.current || reduceMotion.current) return;
    const w = widthRef.current;
    if (w === 0) return;
    const step = (w / duration) * (delta / 1000);
    const dir = direction === "left" ? -1 : 1;
    x.set(wrap(x.get() + dir * step, w));
  });

  const items = Array.from({ length: repeat });
  const group = (ref?: React.Ref<HTMLDivElement>) => (
    <div ref={ref} className="flex shrink-0">
      {items.map((_, i) => (
        <span key={i} className="inline-flex items-center shrink-0">
          {children}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${
        grabbing ? "cursor-grabbing" : "cursor-grab"
      } ${className}`}
      style={{ touchAction: "pan-y" }}
      onPointerDown={(e) => {
        dragging.current = true;
        setGrabbing(true);
        start.current = { pointer: e.clientX, x: x.get() };
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        const dx = e.clientX - start.current.pointer;
        x.set(wrap(start.current.x + dx, widthRef.current));
      }}
      onPointerUp={(e) => {
        dragging.current = false;
        setGrabbing(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => {
        dragging.current = false;
        setGrabbing(false);
      }}
    >
      <motion.div className="flex w-max" style={{ x }}>
        {group(groupRef)}
        {group()}
      </motion.div>
    </div>
  );
}
