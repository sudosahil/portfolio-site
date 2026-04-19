"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useSpring, useMotionValueEvent, useReducedMotion, motion } from "framer-motion";
import Link from "next/link";
import { CopyBeat } from "./CopyBeat";
import { BeatIndicator } from "./BeatIndicator";
import { ScrollHint } from "./ScrollHint";

function getActiveBeat(v: number): number {
  if (v < 0.2) return 1;
  if (v < 0.4) return 2;
  if (v < 0.6) return 3;
  if (v < 0.8) return 4;
  return 5;
}

export function ScrollyHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeBeat, setActiveBeat] = useState(1);
  const rafRef = useRef<number>(0);

  const { scrollYProgress: rawProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth the raw scroll value for fluid beat transitions
  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 80,
    damping: 22,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setActiveBeat(getActiveBeat(v));
    });
  });

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  if (shouldReduceMotion) {
    return <ReducedMotionFallback />;
  }

  return (
    <>
      <div
        ref={sectionRef}
        style={{ height: "2400vh", position: "relative" }}
        onWheel={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            background: "#0e0e12",
            isolation: "isolate",
            willChange: "transform",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            touchAction: "pan-y",
          }}
        >
          {/* Note: CursorObject was removed as PageDecorations now handles standard global graphics */}

          {/* Beat 1 — Intro: visible on load, exits at 20% */}
          <CopyBeat beatNum={1} activeBeat={activeBeat} position="center">
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "#8b8fff",
                textTransform: "uppercase",
                marginBottom: 20,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              web developer · mumbai, india
            </p>
            <h1
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(42px, 6vw, 64px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f2f2f8",
                marginBottom: 20,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              Your business deserves
              <br className="hidden md:block" />a better website.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.5vw, 26px)",
                color: "#8888a8",
                marginBottom: 24,
              }}
            >
              Most don&apos;t have one yet.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                color: "#8888a8",
                opacity: 0.6,
              }}
            >
              scroll to see what&apos;s possible →
            </p>
          </CopyBeat>

          {/* Beat 2 — Google Problem (20–40%) */}
          <CopyBeat beatNum={2} activeBeat={activeBeat} position="left">
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#8b8fff",
                marginBottom: 20,
              }}
            >
              // the reality
            </p>
            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 5vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f2f2f8",
                marginBottom: 20,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              Your customers Google
              <br className="hidden md:block" />
              you before they
              <br className="hidden md:block" />
              call you.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#8888a8",
                lineHeight: 1.7,
              }}
            >
              What they find in those first 3 seconds
              <br className="hidden md:block" />
              decides whether they stay or leave.
            </p>
          </CopyBeat>

          {/* Beat 3 — Cost of Waiting (40–60%) */}
          <CopyBeat beatNum={3} activeBeat={activeBeat} position="left">
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#8b8fff",
                marginBottom: 20,
              }}
            >
              // the cost of waiting
            </p>
            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 5vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f2f2f8",
                marginBottom: 20,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              Every day without
              <br className="hidden md:block" />a proper website
              <br className="hidden md:block" />is a missed customer.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#8888a8",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              They found your competitor instead.
              <br className="hidden md:block" />
              Not because they&apos;re better —
              <br className="hidden md:block" />
              because they showed up first.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "↳ 75% of users judge credibility by website design alone",
                "↳ most buying decisions happen before first contact",
              ].map((point) => (
                <p
                  key={point}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 13,
                    color: "#8b8fff",
                    lineHeight: 1.5,
                  }}
                >
                  {point}
                </p>
              ))}
            </div>
          </CopyBeat>

          {/* Beat 4 — Solution (60–80%) */}
          <CopyBeat beatNum={4} activeBeat={activeBeat} position="right">
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#8b8fff",
                marginBottom: 20,
              }}
            >
              // what changes
            </p>
            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 5vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f2f2f8",
                marginBottom: 20,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              A website that works
              <br className="hidden md:block" />
              as hard as you do.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#8888a8",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Fast. Credible. Built to convert
              <br className="hidden md:block" />
              visitors into customers.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "↳ ranked on Google",
                "↳ loads in under 2 seconds",
                "↳ looks right on every device",
              ].map((point) => (
                <p
                  key={point}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 13,
                    color: "#8b8fff",
                  }}
                >
                  {point}
                </p>
              ))}
            </div>
          </CopyBeat>

          {/* Beat 5 — CTA (80–100%) */}
          <CopyBeat beatNum={5} activeBeat={activeBeat} position="center">
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "#8b8fff",
                marginBottom: 20,
              }}
            >
              // ready when you are
            </p>
            <h2
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(36px, 5vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f2f2f8",
                marginBottom: 32,
                willChange: "opacity",
                transform: "translateZ(0)",
              }}
            >
              Let&apos;s build something
              <br className="hidden md:block" />
              your customers
              <br className="hidden md:block" />
              actually notice.
            </h2>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 20,
                pointerEvents: "auto",
              }}
            >
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "12px 24px",
                    backgroundColor: "#ede8df",
                    color: "#0e0e12",
                    fontSize: 14,
                    fontWeight: 500,
                    borderRadius: 8,
                    textDecoration: "none",
                    transition: "box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 24px rgba(237,232,223,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  start a project →
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href="/work"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "12px 24px",
                    border: "1px solid rgba(237,232,223,0.15)",
                    color: "#ede8df",
                    fontSize: 14,
                    borderRadius: 8,
                    textDecoration: "none",
                  }}
                >
                  see my work
                </Link>
              </motion.div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                color: "#8888a8",
                opacity: 0.6,
              }}
            >
              Based in Mumbai · sahil22undale@gmail.com
            </p>
          </CopyBeat>
        </div>
      </div>

      <BeatIndicator scrollYProgress={scrollYProgress} />
      <ScrollHint scrollYProgress={scrollYProgress} />
    </>
  );
}

function ReducedMotionFallback() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "0 24px",
        backgroundColor: "#0e0e12",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 11,
          color: "#8b8fff",
          letterSpacing: "0.1em",
          marginBottom: 20,
        }}
      >
        // ready when you are
      </p>
      <h1
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 600,
          fontSize: "clamp(36px, 5vw, 52px)",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "#f2f2f8",
          marginBottom: 32,
        }}
      >
        Let&apos;s build something
        <br className="hidden md:block" />
        your customers actually notice.
      </h1>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/contact"
          style={{
            padding: "12px 24px",
            backgroundColor: "#ede8df",
            color: "#0e0e12",
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          start a project →
        </Link>
        <Link
          href="/work"
          style={{
            padding: "12px 24px",
            border: "1px solid rgba(237,232,223,0.15)",
            color: "#ede8df",
            fontSize: 14,
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          see my work
        </Link>
      </div>
    </div>
  );
}
