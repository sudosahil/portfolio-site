import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { LineDivider } from "@/components/LineDivider";
import { Stat } from "@/components/Stat";
import { SectionLabel } from "@/components/SectionLabel";
import { CaseCard } from "@/components/CaseCard";
import { flagshipProjects, services, stats, capabilities } from "@/lib/content";

const sprintSteps = [
  {
    num: "01",
    title: "Architecture & Scope",
    range: "Days 1–3",
    desc: "Align on product requirements, data schemas, and design wireframes.",
  },
  {
    num: "02",
    title: "Engineering & Integration",
    range: "Days 4–12",
    desc: "Full-stack implementation, database wiring, API integrations, and responsive QA.",
  },
  {
    num: "03",
    title: "Launch & Handoff",
    range: "Days 13–14",
    desc: "Domain configuration, Lighthouse performance audits, live deployment, and client onboarding.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-10">
        <Reveal>
          <SectionLabel>Independent Web Studio · Mumbai &amp; Pune</SectionLabel>
        </Reveal>

        <h1 className="display mt-5 text-[10.5vw] md:text-[6vw] leading-none tracking-tighter2">
          <RevealLines lines={["High-performance web", "platforms and digital"]} />
          <span className="text-red">
            <RevealLines lines={["infrastructure for growing businesses."]} delay={0.18} />
          </span>
        </h1>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <p className="text-[20px] md:text-[26px] leading-[1.35] tracking-tight max-w-2xl">
              I design, engineer, and deploy custom{" "}
              <span className="font-serif-italic text-red">web applications</span>,
              e-commerce engines, and automated workflows. Direct engineering,
              zero agency bloat.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/studio/contact"
                data-cursor="let's go"
                className="inline-flex items-center px-6 py-3 bg-ink text-paper font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-red transition-colors"
              >
                Start a Project →
              </Link>
              <Link
                href="#work"
                data-cursor="view"
                className="inline-flex items-center px-6 py-3 border border-line font-mono text-[12px] uppercase tracking-[0.14em] hover:border-ink transition-colors"
              >
                View Selected Systems
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── VALUE MARQUEE ─────────────────────── */}
      <div className="border-y border-line py-4 bg-ink text-paper">
        <Marquee duration={30}>
          {capabilities.map((c) => (
            <span key={c} className="flex items-center">
              <span className="display text-[30px] md:text-[38px] px-6">{c}</span>
              <span className="text-red text-[24px]">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ───────────────────────── FEATURED WORK ──────────────────────── */}
      <section id="work" className="px-5 md:px-8 py-16 md:py-24 scroll-mt-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Featured Work</SectionLabel>
            <h2 className="display text-[10vw] md:text-[6vw] leading-none mt-3">
              Selected
              <br />
              systems.
            </h2>
          </div>
          <Link
            href="/studio/my-projects"
            data-cursor="all"
            className="hidden md:inline-flex shrink-0 font-mono text-[12px] uppercase tracking-[0.14em] border border-line px-5 py-3 hover:border-ink transition-colors"
          >
            View all ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {flagshipProjects.map((p, i) => (
            <CaseCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ────────────────── STUDIO PROFILE & METRICS ──────────────────── */}
      <section className="bg-ink text-paper px-5 md:px-8 py-16 md:py-24">
        <SectionLabel dark>Who&apos;s building this</SectionLabel>
        <LineDivider dark className="mt-6 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <Reveal>
            <p className="text-[22px] md:text-[28px] leading-[1.4] tracking-tight max-w-xl">
              I run an independent engineering studio based in Mumbai and
              Pune. I partner with founders and businesses to build
              production software that drives revenue — whether that&apos;s
              replacing manual booking chaos with automated payment flows or
              engineering custom internal tooling. You work directly with the
              engineer architecting your system from line one to live
              deployment.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:pt-2">
              {stats.map((s) => (
                <Stat
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── SERVICES & EXECUTION MODEL ───────────────── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <SectionLabel>What I Do</SectionLabel>
        <h2 className="display text-[10vw] md:text-[5.5vw] leading-none mt-3 mb-10">
          Built for business.
        </h2>
        <div className="border-t border-line">
          {services.map((s) => (
            <Reveal key={s.num}>
              <Link
                href="/studio/what-i-do"
                data-cursor="more"
                className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start py-7 border-b border-line"
              >
                <span className="font-mono text-[12px] text-grey md:col-span-1">
                  {s.num}
                </span>
                <h3 className="text-[26px] md:text-[34px] font-medium tracking-tight leading-[1.05] md:col-span-5 group-hover:text-red transition-colors">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-grey-dark md:col-span-5 md:col-start-7 max-w-md">
                  {s.desc}
                </p>
                <span className="hidden md:block md:col-span-1 text-right text-[20px] group-hover:text-red transition-colors">
                  ↗
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 3-step execution model */}
        <div className="mt-16 md:mt-20">
          <SectionLabel>The 2-Week Sprint</SectionLabel>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {sprintSteps.map((step) => (
              <Reveal key={step.num}>
                <div className="border-t border-line pt-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] text-red">
                      {step.num}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-grey">
                      {step.range}
                    </span>
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mt-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-grey-dark mt-3 max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
