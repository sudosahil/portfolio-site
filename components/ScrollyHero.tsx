"use client";

import { useRef } from "react";
import { useScroll, useReducedMotion, motion } from "framer-motion";
import Link from "next/link";
import { CanvasAtmosphere } from "./CanvasAtmosphere";
import { CopyBeat } from "./CopyBeat";
import { CursorObject } from "./CursorObject";
import { BeatIndicator } from "./BeatIndicator";
import { ScrollHint } from "./ScrollHint";

export function ScrollyHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  if (shouldReduceMotion) {
    return <ReducedMotionFallback />;
  }

  return (
    <div ref={sectionRef} style={{ height: "600vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <CanvasAtmosphere />

        <CursorObject scrollYProgress={scrollYProgress} />

        {/* Beat 1 — Intro */}
        <CopyBeat
          scrollYProgress={scrollYProgress}
          enterAt={0}
          peakStart={0.03}
          peakEnd={0.15}
          exitAt={0.2}
          position="center"
        >
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.12em",
              color: "#8b8fff",
              textTransform: "uppercase",
              marginBottom: 20,
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
            }}
          >
            Your business deserves
            <br />a better website.
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

        {/* Beat 2 — Problem */}
        <CopyBeat
          scrollYProgress={scrollYProgress}
          enterAt={0.2}
          peakStart={0.25}
          peakEnd={0.4}
          exitAt={0.47}
          position="left"
        >
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
            }}
          >
            Your customers Google
            <br />
            you before they
            <br />
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
            <br />
            decides whether they stay or leave.
          </p>
        </CopyBeat>

        {/* Beat 3 — Solution */}
        <CopyBeat
          scrollYProgress={scrollYProgress}
          enterAt={0.47}
          peakStart={0.52}
          peakEnd={0.65}
          exitAt={0.72}
          position="right"
        >
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
            }}
          >
            A website that works
            <br />
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
            <br />
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

        {/* Beat 4 — CTA */}
        <CopyBeat
          scrollYProgress={scrollYProgress}
          enterAt={0.72}
          peakStart={0.77}
          peakEnd={1}
          exitAt={null}
          position="center"
        >
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
            }}
          >
            Let&apos;s build something
            <br />
            your customers
            <br />
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
                  transition: "border-color 0.2s ease",
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

        <BeatIndicator scrollYProgress={scrollYProgress} />
        <ScrollHint scrollYProgress={scrollYProgress} />
      </div>
    </div>
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
        <br />
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
