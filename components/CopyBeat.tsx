"use client";

import { ReactNode, CSSProperties } from "react";

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

  const alignItems: CSSProperties["alignItems"] =
    position === "center" ? "center" : position === "left" ? "flex-start" : "flex-end";
  const textAlign: CSSProperties["textAlign"] =
    position === "center" ? "center" : position === "left" ? "left" : "right";
  const paddingLeft = position === "left" ? "10%" : "0";
  const paddingRight = position === "right" ? "10%" : "0";

  const translateY = isActive ? 0 : beatNum < activeBeat ? -24 : 24;

  return (
    <div
      style={{
        opacity: isActive ? 1 : 0,
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.6s cubic-bezier(0.25,0.1,0.25,1), transform 0.6s cubic-bezier(0.25,0.1,0.25,1)",
        position: "absolute",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        alignItems,
        justifyContent: "center",
        paddingLeft,
        paddingRight,
        textAlign,
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
