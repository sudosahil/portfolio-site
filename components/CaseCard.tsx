/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface CaseProject {
  name: string;
  tagline: string;
  description: string;
  liveUrl: string;
  category: string;
  industry: string;
  year: string;
}

// Capture at a 4:3 viewport so the screenshot matches the card frame exactly
// (aspect-[4/3]) and fills it without awkward cropping.
function screenshotUrl(siteUrl: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(
    siteUrl
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=960`;
}

// The live preview renders the real site at this desktop viewport, then scales
// it down to fill the card frame — so layouts look like a proper desktop shot.
const PREVIEW_WIDTH = 1280;
const PREVIEW_HEIGHT = 960; // 4:3, matches the card frame

// Loading six full sites at once chokes the page. This gate keeps at most two
// previews *loading* concurrently across all cards; the rest wait their turn
// (a hovered card jumps the queue). Slots free up as each preview finishes.
const MAX_LIVE_LOADS = 2;
let activeLoads = 0;
const waiters: Array<() => void> = [];

function requestLoadSlot(run: () => void, priority: boolean) {
  if (activeLoads < MAX_LIVE_LOADS) {
    activeLoads++;
    run();
  } else if (priority) {
    waiters.unshift(run);
  } else {
    waiters.push(run);
  }
}

function releaseLoadSlot() {
  const next = waiters.shift();
  if (next) {
    next(); // one finished, one starts — activeLoads unchanged
  } else {
    activeLoads = Math.max(0, activeLoads - 1);
  }
}

/**
 * Büro-style case-study card: a media thumbnail with the project title,
 * plus category + industry meta. On fine-pointer devices it preloads the real
 * site in a scaled, sandboxed iframe (throttled to two at a time) and reveals
 * it on hover, so the live preview appears without a wait. The static
 * screenshot stays underneath as a fast, always-there fallback.
 */
export function CaseCard({
  project,
  index,
}: {
  project: CaseProject;
  index: number;
}) {
  const [err, setErr] = useState(false);
  const [canPreview, setCanPreview] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [armed, setArmed] = useState(false); // iframe mounted + loading
  const [frameReady, setFrameReady] = useState(false);
  const [scale, setScale] = useState(PREVIEW_HEIGHT / PREVIEW_WIDTH);

  const frameRef = useRef<HTMLDivElement>(null);
  const requestedRef = useRef(false);
  const grantedRef = useRef(false);
  const releasedRef = useRef(false);
  const cbRef = useRef<(() => void) | null>(null);

  const release = useCallback(() => {
    if (!grantedRef.current || releasedRef.current) return;
    releasedRef.current = true;
    releaseLoadSlot();
  }, []);

  const arm = useCallback((priority: boolean) => {
    if (requestedRef.current) return;
    requestedRef.current = true;
    const run = () => {
      grantedRef.current = true;
      setArmed(true);
    };
    cbRef.current = run;
    requestLoadSlot(run, priority);
  }, []);

  // Only offer the live preview where hovering is meaningful (not touch).
  useEffect(() => {
    setCanPreview(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  // Queue the preload once the card nears the viewport.
  useEffect(() => {
    if (!canPreview) return;
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          arm(false);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [canPreview, arm]);

  // Safety: never hold a load slot forever if onLoad never fires.
  useEffect(() => {
    if (!armed) return;
    const t = setTimeout(release, 10000);
    return () => clearTimeout(t);
  }, [armed, release]);

  // On unmount: free a held slot, or drop the request if still queued.
  useEffect(() => {
    return () => {
      if (grantedRef.current) {
        release();
      } else if (cbRef.current) {
        const i = waiters.indexOf(cbRef.current);
        if (i !== -1) waiters.splice(i, 1);
      }
    };
  }, [release]);

  // Keep the iframe scaled so its 1280px desktop render fills the card width.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / PREVIEW_WIDTH);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const showPreview = canPreview && hovered;

  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      className="group block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => {
        if (!canPreview) return;
        setHovered(true);
        arm(true); // jump the queue for an intentful hover
      }}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={frameRef}
        className="relative w-full aspect-[4/3] overflow-hidden bg-paper2 border border-line"
      >
        {!err ? (
          <img
            src={screenshotUrl(project.liveUrl)}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            loading="lazy"
            onError={() => setErr(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="display text-[12vw] md:text-[6vw] text-line">
              {project.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Live site preview — sandboxed, scaled, faded in once loaded */}
        {armed && (
          <iframe
            src={project.liveUrl}
            title={`${project.name} live preview`}
            tabIndex={-1}
            aria-hidden
            scrolling="no"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer"
            onLoad={() => {
              setFrameReady(true);
              release();
            }}
            onError={release}
            style={{
              width: PREVIEW_WIDTH,
              height: PREVIEW_HEIGHT,
              transform: `scale(${scale})`,
            }}
            className={`absolute top-0 left-0 origin-top-left border-0 pointer-events-none transition-opacity duration-500 ${
              showPreview && frameReady ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* "Live" affordance while previewing */}
        <span
          className={`absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] bg-red text-paper px-2 py-1 transition-opacity duration-300 ${
            showPreview ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-paper animate-pulse" />
          {frameReady ? "Live" : "Loading"}
        </span>

        <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.12em] bg-ink text-paper px-2 py-1">
          {project.year}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <span className="text-[20px] md:text-[26px] font-medium tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
          {project.name}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-grey shrink-0">
          {project.category}
        </span>
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-grey/70 mt-1">
        {project.industry}
      </p>
      <p className="text-[14px] leading-[1.6] text-grey-dark mt-3 max-w-md">
        {project.description}
      </p>
    </motion.a>
  );
}
