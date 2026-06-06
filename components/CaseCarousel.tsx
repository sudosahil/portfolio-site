"use client";

import { useRef } from "react";
import { CaseCard, type CaseProject } from "./CaseCard";

/**
 * Horizontal, swipeable carousel of case-study cards.
 * Shows 1 card on mobile, 2 on tablet, 3 on desktop, with arrow navigation.
 * Native scroll-snap keeps every project reachable — nothing is paginated away.
 */
export function CaseCarousel({ projects }: { projects: CaseProject[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByOne = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const gap = 32; // matches gap-8
    const cardWidth = card ? card.offsetWidth : track.clientWidth;
    track.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 pb-1"
      >
        {projects.map((p, i) => (
          <div
            key={p.name}
            data-card
            className="snap-start shrink-0 basis-full sm:basis-[calc((100%-2rem)/2)] lg:basis-[calc((100%-4rem)/3)]"
          >
            <CaseCard project={p} index={i} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-3 justify-end">
        <button
          type="button"
          onClick={() => scrollByOne(-1)}
          aria-label="Previous projects"
          data-cursor="prev"
          className="inline-flex h-12 w-12 items-center justify-center border border-line text-[18px] hover:border-ink hover:text-red transition-colors"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByOne(1)}
          aria-label="Next projects"
          data-cursor="next"
          className="inline-flex h-12 w-12 items-center justify-center border border-line text-[18px] hover:border-ink hover:text-red transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
}
