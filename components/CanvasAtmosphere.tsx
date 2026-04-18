"use client";

import { useEffect, useRef } from "react";

export function CanvasAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const seedRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const fit = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    fit();

    const observer = new ResizeObserver(fit);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    if (prefersReduced) {
      ctx.fillStyle = "#0e0e12";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return () => observer.disconnect();
    }

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = "#0e0e12";
      ctx.fillRect(0, 0, w, h);

      seedRef.current += 0.5;
      const seed = seedRef.current;

      for (let x = 0; x < w; x += 2) {
        for (let y = 0; y < h; y += 2) {
          const r = Math.floor(
            ((Math.sin(x * 0.3 + seed) * Math.cos(y * 0.3 + seed) + 1) / 2) *
              255
          );
          ctx.fillStyle = `rgba(${r},${r},${r},0.03)`;
          ctx.fillRect(x, y, 2, 2);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
