import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { LineDivider } from "@/components/LineDivider";
import { Stat } from "@/components/Stat";
import { SectionLabel } from "@/components/SectionLabel";
import { CaseCard } from "@/components/CaseCard";
import { caseProjects, services, stats, skills } from "@/lib/content";

export default function Home() {
  return (
    <div>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-10">
        <Reveal>
          <SectionLabel>Web Developer — Mumbai &amp; Pune, India</SectionLabel>
        </Reveal>

        <h1 className="display mt-5 text-[15.5vw] md:text-[12vw] leading-[0.84] tracking-tighter2">
          <RevealLines lines={["I build", "websites that"]} />
          <span className="text-red">
            <RevealLines lines={["actually work."]} delay={0.18} />
          </span>
        </h1>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <p className="text-[20px] md:text-[26px] leading-[1.35] tracking-tight max-w-2xl">
              I&apos;m Sahil — a{" "}
              <span className="font-serif-italic text-red">🤟 web developer</span>{" "}
              based in Mumbai &amp; Pune. I build clean, fast websites for local
              businesses that want a proper online presence and more customers
              through the door.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                data-cursor="let's go"
                className="inline-flex items-center px-6 py-3 bg-ink text-paper font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-red transition-colors"
              >
                Start a project →
              </Link>
              <Link
                href="/my-projects"
                data-cursor="view"
                className="inline-flex items-center px-6 py-3 border border-line font-mono text-[12px] uppercase tracking-[0.14em] hover:border-ink transition-colors"
              >
                See the work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── SKILLS MARQUEE ─────────────────────── */}
      <div className="border-y border-line py-4 bg-ink text-paper">
        <Marquee duration={30}>
          {skills.map((s) => (
            <span key={s} className="flex items-center">
              <span className="display text-[34px] md:text-[44px] px-6">{s}</span>
              <span className="text-red text-[24px]">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ───────────────────────── SELECTED WORK ──────────────────────── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="display text-[10vw] md:text-[6vw] leading-[0.9] mt-3">
              Things I&apos;ve
              <br />
              shipped.
            </h2>
          </div>
          <Link
            href="/my-projects"
            data-cursor="all"
            className="hidden md:inline-flex shrink-0 font-mono text-[12px] uppercase tracking-[0.14em] border border-line px-5 py-3 hover:border-ink transition-colors"
          >
            View all ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {caseProjects.map((p, i) => (
            <CaseCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ─────────────────────────── STATS ────────────────────────────── */}
      <section className="bg-ink text-paper px-5 md:px-8 py-16 md:py-24">
        <SectionLabel dark>By the numbers</SectionLabel>
        <LineDivider dark className="mt-6 mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
        <p className="mt-14 max-w-3xl text-[22px] md:text-[32px] leading-[1.3] tracking-tight">
          Most local businesses are invisible online — not because they
          aren&apos;t good, but because their website doesn&apos;t show it.{" "}
          <span className="text-red">Let&apos;s fix that.</span>
        </p>
      </section>

      {/* ─────────────────────────── ABOUT ────────────────────────────── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <SectionLabel>Who&apos;s building this</SectionLabel>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <p className="text-[22px] md:text-[30px] leading-[1.35] tracking-tight">
              I&apos;m Sahil Undale, a web developer based in Mumbai &amp; Pune
              with a focus on building websites for small and medium businesses.
            </p>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.65] text-grey-dark max-w-xl">
              Most of my clients are business owners who know they need a website
              but do not know where to start — or who had one built before and
              were disappointed with the result. I work with them directly, from
              the first conversation to launch, to make sure that does not happen
              again.
            </p>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.65] text-grey-dark max-w-xl">
              My work is practical. Every site I build is fast, mobile-ready, and
              set up correctly for search engines from day one. No unnecessary
              complexity, no bloated page builders, no handing you off to someone
              else mid-project.
            </p>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.65] text-grey-dark max-w-xl">
              If you run a business in Mumbai or Pune and need a website that
              actually works for you — get in touch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────── SERVICES ─────────────────────────── */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <SectionLabel>What I Do</SectionLabel>
        <h2 className="display text-[10vw] md:text-[5.5vw] leading-[0.9] mt-3 mb-10">
          Built for business.
        </h2>
        <div className="border-t border-line">
          {services.map((s) => (
            <Reveal key={s.num}>
              <Link
                href="/what-i-do"
                data-cursor="more"
                className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start py-7 border-b border-line"
              >
                <span className="font-mono text-[12px] text-grey md:col-span-1">
                  {s.num}
                </span>
                <h3 className="text-[28px] md:text-[40px] font-medium tracking-tight leading-[1] md:col-span-5 group-hover:text-red transition-colors">
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
      </section>
    </div>
  );
}
