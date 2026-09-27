"use client";

import Link from "next/link";
import { Marquee } from "../Marquee";
import { devProfile, devSocials } from "@/lib/dev-content";

/** /dev footer — same structure as the business footer, in black / white / blue. */
export function DevFooter() {
  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-line">
      {/* Giant link */}
      <div className="px-5 md:px-8 pt-20 md:pt-28 pb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-6">[ Get in touch ]</p>
        <Link href="/dev/contact" className="group block" data-cursor="contact">
          <span className="display block text-[15vw] leading-[0.85] text-white transition-colors duration-300 group-hover:text-blue">
            Contact
            <span className="text-blue group-hover:text-white transition-colors duration-300">.</span>
          </span>
        </Link>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${devProfile.email}`}
            data-cursor="send"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-ink font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-blue hover:text-white transition-colors"
          >
            Email me →
          </a>
          <a
            href={devProfile.resume}
            target="_blank"
            data-cursor="download"
            className="inline-flex items-center gap-3 px-6 py-3 border border-line-light font-mono text-[12px] uppercase tracking-[0.14em] hover:border-white transition-colors"
          >
            Résumé ↓
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-y border-line-light py-3">
        <Marquee duration={22}>
          <span className="display text-[28px] px-6 text-white/80">Software Engineer</span>
          <span className="display text-[28px] px-6 text-blue">✺</span>
        </Marquee>
      </div>

      {/* Bottom row */}
      <div className="px-5 md:px-8 py-8 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/50 mb-2">{devProfile.email}</p>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/50">{devProfile.location}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {devSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/60 hover:text-blue transition-colors"
              data-cursor="open"
            >
              ↗ {s.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/30">
          © {new Date().getFullYear()} — {devProfile.name}
        </p>
      </div>
    </footer>
  );
}
