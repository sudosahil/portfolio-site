"use client";

import { useRef, type CSSProperties } from "react";
import { StackLogo } from "@/components/dev/StackLogo";
import { stackLogos, type StackKey } from "@/lib/dev-stack";

const CARD_W = 208; // px — keep in sync with .dev-proj-card width in dev.css
const EDGE = 12; // min gap between the card and the viewport edge

/**
 * Tech-stack icons. On hover/focus the icon lifts off and grows into a floating
 * card (enlarged logo + name), joined back to the icon by a projection beam.
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

  // Nudge the card sideways if it would run off the screen; the beam follows.
  const place = () => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const centre = r.left + r.width / 2;
    const vw = document.documentElement.clientWidth;
    let shift = 0;
    if (centre + CARD_W / 2 > vw - EDGE) shift = vw - EDGE - (centre + CARD_W / 2);
    if (centre - CARD_W / 2 < EDGE) shift = EDGE - (centre - CARD_W / 2);
    el.style.setProperty("--shift", `${Math.round(shift)}px`);
  };

  const name = stackLogos[id].name;

  return (
    <li ref={ref} className="dev-proj" onMouseEnter={place} onFocus={place} style={{ "--shift": "0px" } as CSSProperties}>
      <span
        tabIndex={0}
        aria-label={name}
        className="dev-proj-icon flex h-11 w-11 items-center justify-center border border-line text-white/80 outline-none"
      >
        <StackLogo id={id} size={20} />
      </span>
      <span aria-hidden className="dev-proj-beam" />
      <span role="tooltip" className="dev-proj-card">
        <span className="dev-proj-logo">
          <StackLogo id={id} size={36} />
        </span>
        <span className="dev-proj-name font-mono text-[12px] uppercase tracking-[0.14em]">{name}</span>
      </span>
    </li>
  );
}
