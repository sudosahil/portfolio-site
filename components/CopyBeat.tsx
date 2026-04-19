"use client";

import { ReactNode } from "react";

type Position = "center" | "left" | "right";

interface CopyBeatProps {
  beatNum: number;
  activeBeat: number;
  position: Position;
  children: ReactNode;
}

export function CopyBeat({ beatNum, activeBeat, position, children }: CopyBeatProps) {
  const isActive = beatNum === activeBeat;
  const isAdjacent = Math.abs(beatNum - activeBeat) === 1;

  if (!isActive && !isAdjacent) return null;
  let positionClasses = "items-center text-center px-6";
  if (position === "left") {
    positionClasses = "items-center text-center px-6 md:items-start md:text-left md:pl-[10%] md:pr-0";
  } else if (position === "right") {
    positionClasses = "items-center text-center px-6 md:items-end md:text-right md:pr-[10%] md:pl-0";
  } else {
    positionClasses = "items-center text-center px-6 md:px-0";
  }

  const translateY = isActive ? 0 : beatNum < activeBeat ? -24 : 24;

  return (
    <div
      className={`absolute inset-0 z-10 pointer-events-none flex flex-col justify-center ${positionClasses}`}
      style={{
        opacity: isActive ? 1 : 0,
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.6s cubic-bezier(0.25,0.1,0.25,1), transform 0.6s cubic-bezier(0.25,0.1,0.25,1)",
        willChange: "opacity, transform",
        backfaceVisibility: "hidden",
      }}
    >
      <div style={{ maxWidth: position === "center" ? 700 : 560 }}>
        {children}
      </div>
    </div>
  );
}
