import type { Metadata } from "next";
import Link from "next/link";
import { LandingPreloader } from "@/components/LandingPreloader";
import { LandingClock } from "@/components/LandingClock";
import "./landing.css";

export const metadata: Metadata = {
  title: "Sahil Undale — Software Engineer & Web Developer",
  description:
    "Sahil Undale, Mumbai. Studio: websites and web apps for businesses. Dev: résumé, projects and contact for recruiters.",
};

const halves = [
  {
    href: "/studio",
    num: "01",
    audience: "For businesses",
    title: "Studio",
    sub: "Need a website? See my work and services.",
    className: "landing-studio",
    label: "Studio — websites and web apps for businesses",
  },
  {
    href: "/dev",
    num: "02",
    audience: "For recruiters",
    title: "Dev",
    sub: "View my résumé, projects and contact details.",
    className: "landing-dev",
    label: "Dev — résumé, projects and contact for recruiters",
  },
];

export default function Landing() {
  return (
    <div className="landing-root flex min-h-[100svh] flex-col bg-[#0a0a0a] text-white">
      <LandingPreloader />

      <header className="flex items-center justify-between gap-6 border-b border-white/[0.14] px-5 py-6 md:h-[132px] md:px-8 md:py-0">
        <h1 className="display text-[15vw] leading-[0.9] md:text-[88px]">
          Sahil Undale<span className="text-[#3d7bff]">.</span>
        </h1>
        <div className="hidden text-right font-mono text-[12px] uppercase tracking-[0.16em] md:block">
          <div className="flex items-center justify-end gap-2.5">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#105df1]" />
            Mumbai · <span className="text-[#8f8f8f]"><LandingClock /></span>
          </div>
          <a href="mailto:sahil22undale@gmail.com" className="mt-2.5 block text-[#8f8f8f] transition-colors hover:text-white">
            sahil22undale@gmail.com
          </a>
        </div>
      </header>

      <nav aria-label="Choose a site" className="flex flex-1 flex-col md:flex-row">
        {halves.map((h) => (
          <Link
            key={h.href}
            href={h.href}
            aria-label={h.label}
            className={`landing-half ${h.className} flex min-h-[40svh] flex-1 flex-col justify-between px-5 pb-7 pt-7 md:min-h-0 md:px-8 md:pb-10 md:pt-12`}
          >
            <p className="text-[24px] font-bold leading-none tracking-tight md:text-[34px]">{h.audience}</p>
            <div>
              <div className="display text-[26vw] leading-[0.86] md:text-[min(13.6vw,196px)]">
                {h.title}
                <span className="landing-accent">.</span>
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 md:mt-7">
                <span className="landing-sub text-[17px] tracking-tight md:text-[22px]">{h.sub}</span>
                <span aria-hidden className="landing-arrow shrink-0 font-mono text-[13px] uppercase tracking-[0.2em]">
                  Enter →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
