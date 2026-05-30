import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** seconds for one full loop */
  duration?: number;
  direction?: "left" | "right";
  className?: string;
  /** how many copies to render (must tile to >= 2x viewport) */
  repeat?: number;
}

/**
 * Büro-style infinite horizontal marquee.
 * Renders two identical tracks so the loop is seamless; pauses on hover.
 */
export function Marquee({
  children,
  duration = 26,
  direction = "left",
  className = "",
  repeat = 4,
}: MarqueeProps) {
  const items = Array.from({ length: repeat });
  return (
    <div className={`marquee relative w-full overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${direction === "left" ? "-left" : "-right"}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {items.map((_, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            {children}
          </span>
        ))}
      </div>
    </div>
  );
}
