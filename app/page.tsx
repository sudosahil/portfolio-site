import type { Metadata } from "next";
import Link from "next/link";
import "./landing.css";

export const metadata: Metadata = {
  title: "Sahil Undale — Software Engineer & Web Developer",
  description:
    "Sahil Undale, Mumbai. Studio: websites and web apps for businesses. Dev: résumé, projects and contact for recruiters.",
};

const doors = [
  {
    href: "/studio",
    num: "01",
    audience: "For businesses",
    title: "Studio",
    sub: "Websites & web apps for your business.",
    className: "landing-studio",
    label: "Studio — websites and web apps for businesses",
  },
  {
    href: "/dev",
    num: "02",
    audience: "For recruiters",
    title: "Dev",
    sub: "Résumé, projects & contact.",
    className: "landing-dev",
    label: "Dev — résumé, projects and contact for recruiters",
  },
];

export default function Landing() {
  return (
    <div className="landing-root flex min-h-[100svh] flex-col bg-[#0a0a0a] px-5 pb-5 text-white md:px-8 md:pb-8">
      <header className="flex h-16 items-center justify-between md:h-[72px]">
        <span className="display text-[19px] leading-none">
          SU<sup className="text-[9px]">©</sup>
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8f8f8f]">sahilundale.in</span>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center py-10">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[#8f8f8f] md:text-[13px]">
          [ Software engineer · Web developer · Mumbai ]
        </p>
        <h1 className="display mt-5 text-center text-[22vw] leading-[0.86] md:mt-6 md:whitespace-nowrap md:text-[min(17.5vw,262px)]">
          Sahil Undale<span className="text-[#3d7bff]">.</span>
        </h1>
        <p className="mt-5 text-[18px] tracking-tight text-[#b3b3b3] md:mt-6 md:text-[22px]">Pick where you want to go.</p>

        <nav aria-label="Choose a site" className="mt-10 grid w-full grid-cols-1 gap-3 md:mt-12 md:grid-cols-2 md:gap-4">
          {doors.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              aria-label={d.label}
              className={`landing-card ${d.className} flex h-[200px] flex-col justify-between p-6 md:h-[260px] md:px-8 md:py-7`}
            >
              <div className="flex justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                  {d.num} — {d.audience}
                </span>
                <span aria-hidden className="landing-arrow text-[24px] leading-none">
                  ↗
                </span>
              </div>
              <div>
                <div className="display text-[72px] md:text-[104px]">
                  {d.title}
                  <span className="landing-accent">.</span>
                </div>
                <div className="landing-sub mt-3 text-[16px] md:text-[18px]">{d.sub}</div>
              </div>
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
