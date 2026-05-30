"use client";

import Link from "next/link";
import { Marquee } from "./Marquee";

const socials = [
  { href: "https://wa.me/917559292204", label: "WhatsApp" },
  { href: "https://linkedin.com/in/sahil-undale", label: "LinkedIn" },
  { href: "mailto:sahil22undale@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper relative overflow-hidden">
      {/* Giant CTA */}
      <div className="px-5 md:px-8 pt-20 md:pt-28 pb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40 mb-6">
          [ Got a project? ]
        </p>
        <Link
          href="/contact"
          className="group block"
          data-cursor="let's talk"
        >
          <span className="display block text-[15vw] leading-[0.85] text-paper transition-colors duration-300 group-hover:text-red">
            Let&apos;s talk
            <span className="text-red group-hover:text-paper transition-colors duration-300">
              .
            </span>
          </span>
        </Link>
      </div>

      {/* Scrolling availability marquee */}
      <div className="border-y border-line-light py-3">
        <Marquee duration={22}>
          <span className="display text-[28px] px-6 text-paper/80">
            Mumbai, India
          </span>
          <span className="display text-[28px] px-6 text-red">✺</span>
        </Marquee>
      </div>

      {/* Bottom row */}
      <div className="px-5 md:px-8 py-8 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-paper/50 mb-2">
            sahil22undale@gmail.com
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-paper/50">
            +91 75592 92204
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
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

        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/30">
          © {new Date().getFullYear()} — Built by Sahil
        </p>
      </div>
    </footer>
  );
}
