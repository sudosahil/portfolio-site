"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-i-do", label: "What I Do" },
  { href: "/my-projects", label: "My Projects" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://wa.me/917559292204", label: "WhatsApp" },
  { href: "https://linkedin.com/in/sahil-undale", label: "LinkedIn" },
  { href: "mailto:sahil22undale@gmail.com", label: "Email" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  // Mumbai (IST) clock — Büro shows a live local time in the bar.
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[120] mix-blend-difference">
        <div className="flex items-center justify-between px-5 md:px-8 h-16">
          <Link
            href="/"
            className="font-display uppercase text-[19px] leading-none tracking-tight text-paper"
            data-cursor="home"
          >
            Sahil Undale<sup className="text-[9px] align-super">©</sup>
          </Link>

          <div className="hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper">
            <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
            <span>Mumbai &amp; Pune</span>
            <span className="opacity-50 tabular-nums">{time} IST</span>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-[12px] uppercase tracking-[0.18em] text-paper flex items-center gap-2"
            aria-label="Toggle menu"
            data-cursor={open ? "close" : "menu"}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="flex flex-col gap-[3px] w-4">
              <motion.span
                className="block h-[1.5px] bg-paper"
                animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block h-[1.5px] bg-paper"
                animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[110] bg-ink text-paper overflow-y-auto overscroll-contain"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="min-h-full flex flex-col justify-center max-w-6xl w-full mx-auto px-5 md:px-8 pt-24 pb-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40 mb-6">
                [ Index ]
              </p>
              <ul className="border-t border-line-light">
                {navLinks.map((link, i) => {
                  const activeLink = pathname === link.href;
                  return (
                    <li key={link.href} className="border-b border-line-light">
                      <Link
                        href={link.href}
                        className="group flex items-baseline gap-4 md:gap-8 py-3 md:py-4"
                        data-cursor="go"
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 + i * 0.05 }}
                          className="font-mono text-[12px] text-paper/40 w-8 shrink-0"
                        >
                          0{i + 1}
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.25 + i * 0.05,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className={`display text-[10vw] md:text-[6vw] leading-[0.95] transition-colors duration-200 ${
                            activeLink
                              ? "text-red"
                              : "text-paper group-hover:text-red"
                          }`}
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] uppercase tracking-[0.12em] text-paper/60 hover:text-red transition-colors"
                    data-cursor="open"
                  >
                    ↗ {s.label}
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
