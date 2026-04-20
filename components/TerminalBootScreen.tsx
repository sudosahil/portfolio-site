"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TerminalBootScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showEnter, setShowEnter] = useState(false);

  const fullText = "> hey im sahil, your friendly neighbourhood developer";

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowEnter(true), 400); // Show enter button shortly after typing finishes
      }
    }, 45); // Typing speed

    return () => clearInterval(typingInterval);
  }, [isVisible]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Prevent scrolling while boot screen is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="boot-screen"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.15,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[999] bg-[#000000] flex flex-col items-center justify-center p-6"
        >
          <div className="w-full max-w-2xl">
            {/* Terminal Text */}
            <h1 className="font-mono text-[#27c93f] text-base md:text-lg lg:text-xl font-medium tracking-tight mb-8 min-h-[30px]">
              {text}
              <span
                style={{ opacity: showCursor ? 1 : 0 }}
                className="inline-block w-2.5 h-5 bg-[#27c93f] ml-1 align-middle"
              />
            </h1>

            {/* Enter Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: showEnter ? 1 : 0, y: showEnter ? 0 : 10 }}
              transition={{ duration: 0.4 }}
              className="mt-12 text-center md:text-left"
            >
              <button
                onClick={() => setIsVisible(false)}
                disabled={!showEnter}
                className={`font-mono text-[13px] tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 ${
                  showEnter 
                    ? "border-[#27c93f] text-[#27c93f] hover:bg-[#27c93f] hover:text-black cursor-pointer" 
                    : "border-transparent text-transparent cursor-default"
                }`}
              >
                [ enter ]
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
