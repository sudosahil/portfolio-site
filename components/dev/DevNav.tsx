"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { devNav, devProfile } from "@/lib/dev-content";

function isActive(pathname: string, href: string) {
  return href === "/dev" ? pathname === "/dev" : pathname.startsWith(href);
}

export function DevNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--dev-line)] bg-[rgba(7,7,8,0.72)] backdrop-blur-md">
        <div className="dev-mono mx-auto grid h-[60px] max-w-[1440px] grid-cols-[1fr_auto] items-center px-5 text-[var(--dev-t2)] md:h-[72px] md:grid-cols-[1fr_auto_1fr] md:px-16">
          <Link href="/dev" className="flex items-center gap-3 text-[var(--dev-t1)]">
            <span className="flex h-[22px] w-[22px] items-center justify-center border border-[var(--dev-t1)] text-[9px]">
              SU
            </span>
            <span>{devProfile.name}</span>
          </Link>

          <nav aria-label="Profile" className="hidden gap-1.5 rounded-full border border-[var(--dev-line)] p-[5px] md:flex">
            {devNav.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-[9px] transition-colors ${
                    active ? "text-[var(--dev-t1)]" : "text-[var(--dev-t2)] hover:text-[var(--dev-t1)]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="dev-nav-pill"
                      className="absolute inset-0 rounded-full bg-[#141417] shadow-[inset_0_0_0_1px_var(--dev-line-2)]"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  {active && <span className="dev-dot-glow relative h-[5px] w-[5px] rounded-full bg-[var(--dev-a)]" />}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center justify-end gap-7 md:flex">
            <span className="text-[var(--dev-t3)]">{devProfile.coords}</span>
            <a href={devProfile.resume} className="flex items-center gap-2 text-[var(--dev-t1)]">
              Résumé <span className="text-[var(--dev-a)]">↓</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 justify-self-end rounded-full border border-[var(--dev-line-2)] md:hidden"
          >
            <motion.span className="h-px w-3.5 bg-[var(--dev-t1)]" animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} />
            <motion.span className="h-px w-3.5 bg-[var(--dev-t1)]" animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--dev-bg)] px-5 pt-[96px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="border-t border-[var(--dev-line)]">
              {devNav.map((l, i) => (
                <motion.li
                  key={l.href}
                  className="border-b border-[var(--dev-line)]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={l.href} className="flex items-baseline gap-4 py-5">
                    <span className="dev-mono text-[var(--dev-t3)]">0{i + 1}</span>
                    <span className={`text-[34px] tracking-[-0.04em] ${isActive(pathname, l.href) ? "text-[var(--dev-a)]" : ""}`}>
                      {l.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a href={devProfile.resume} className="dev-mono mt-8 flex h-12 items-center justify-center rounded-full bg-[var(--dev-a)] text-[var(--dev-bg)]">
              Résumé ↓
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
