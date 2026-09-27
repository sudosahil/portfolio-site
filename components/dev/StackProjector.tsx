"use client";

import { useRef, type CSSProperties } from "react";
import { StackLogo } from "@/components/dev/StackLogo";
import { stackLogos, type StackKey } from "@/lib/dev-stack";

const CARD_W = 208; // px — keep in sync with the hovered width in dev.css
const EDGE = 12; // min gap between the card and the viewport edge

/**
 * Tech-stack icons. On hover/focus the square itself stretches into a
 * rectangular card: the logo enlarges on the left and the name appears on the right.
 */
export function StackProjector({ ids }: { ids: StackKey[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {ids.map((id) => (
        <StackItem key={id} id={id} />
      ))}
    </ul>
  );
}

function StackItem({ id }: { id: StackKey }) {
  const ref = useRef<HTMLLIElement>(null);

  // Grow rightwards from the square; near the right edge of the screen, grow leftwards instead.
  const place = () => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    const dx = Math.min(0, vw - EDGE - CARD_W - r.left);
    el.style.setProperty("--dx", `${Math.round(dx)}px`);
  };

  const name = stackLogos[id].name;

  return (
    <li ref={ref} className="dev-proj" onMouseEnter={place} onFocus={place} style={{ "--dx": "0px" } as CSSProperties}>
      {/* the box is absolutely positioned over this 44px slot, so growing it never shifts the row */}
      <span tabIndex={0} aria-label={name} className="dev-proj-box">
        <span className="dev-proj-logo">
          <StackLogo id={id} size={36} />
        </span>
        <span className="dev-proj-name font-mono text-[12px] uppercase tracking-[0.14em]">{name}</span>
      </span>
    </li>
  );
}
