"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORD = "SAHIL UNDALE";

/**
 * Landing intro (black & white): a full-screen black panel with a giant repeating name
 * marquee that holds briefly, then wipes upward to reveal the page.
 */
export function LandingPreloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // lock scroll while the intro is on screen
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 1900);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="landing-preloader"
          className="fixed inset-0 z-[9999] flex flex-col justify-center overflow-hidden bg-black"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            document.body.style.overflow = "";
          }}
        >
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className="marquee-track -left whitespace-nowrap"
              style={{ ["--marquee-duration" as string]: "18s" }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="display px-6 text-[14vw] leading-none"
                  style={{
                    color: row === 1 ? "#ffffff" : "transparent",
                    WebkitTextStroke:
                      row === 1 ? "0" : "1px rgba(255,255,255,0.5)",
                  }}
                >
                  {WORD}
                </span>
              ))}
            </div>
          ))}

          <motion.span
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            software engineer · web developer · mumbai
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
