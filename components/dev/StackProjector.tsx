"use client";

import { useRef, type CSSProperties } from "react";
import { StackLogo } from "@/components/dev/StackLogo";
import { stackLogos, type StackKey } from "@/lib/dev-stack";

const CARD_W = 208; // px — keep in sync with .dev-proj-card width in dev.css
const PAD = 10; // how far the card reaches past the icon on the left/top
const EDGE = 12; // min gap between the card and the viewport edge

/**
 * Tech-stack icons. On hover/focus the icon box itself expands in place into a
 * card over its old position: the logo enlarges on the left, the name appears on the right.
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

  // The card grows rightwards from the icon; if that would run off screen, it grows leftwards instead.
  const place = () => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vw = document.documentElement.clientWidth;
    let dx = -PAD;
    if (r.left + dx + CARD_W > vw - EDGE) dx = vw - EDGE - CARD_W - r.left;
    el.style.setProperty("--dx", `${Math.round(dx)}px`);
  };

  const name = stackLogos[id].name;

  return (
    <li ref={ref} className="dev-proj" onMouseEnter={place} onFocus={place} style={{ "--dx": `-${PAD}px` } as CSSProperties}>
      <span
        tabIndex={0}
        aria-label={name}
        className="dev-proj-icon flex h-11 w-11 items-center justify-center border border-line text-white/80 outline-none"
      >
        <StackLogo id={id} size={20} />
      </span>
      <span role="tooltip" className="dev-proj-card">
        <span className="dev-proj-logo">
          <StackLogo id={id} size={36} />
        </span>
        <span className="dev-proj-name font-mono text-[12px] uppercase tracking-[0.14em]">{name}</span>
      </span>
    </li>
  );
}
