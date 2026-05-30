"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Büro-style follow cursor. A small dot that grows into a labelled disc
 * over elements carrying `data-cursor="..."`. Disabled on touch / coarse
 * pointers and when the user prefers reduced motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);
  const [down, setDown] = useState(false);
  const [dark, setDark] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 700, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setDark(!!el?.closest(".bg-ink, footer, [data-cursor-dark]"));
      const target = el?.closest<HTMLElement>("[data-cursor], a, button");
      if (target) {
        const l = target.getAttribute("data-cursor");
        setLabel(l ?? "");
        setActive(true);
      } else {
        setActive(false);
        setLabel("");
      }
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const labelled = active && label.length > 0;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: labelled ? 84 : active ? 44 : 12,
        height: labelled ? 84 : active ? 44 : 12,
        backgroundColor: labelled
          ? "#dc3429"
          : dark
            ? "rgba(244,242,234,0.95)"
            : "rgba(13,13,13,0.9)",
        scale: down ? 0.82 : 1,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
    >
      {labelled && (
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper">
          {label}
        </span>
      )}
    </motion.div>
  );
}
