import { Reveal, RevealLines } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CaseCard } from "@/components/CaseCard";
import { caseProjects } from "@/lib/content";

const extraProjects = [
  {
    name: "Personal Portfolio",
    tagline: "You're on it.",
    liveUrl: "https://sahilundale.in",
    category: "Portfolio",
    industry: "Personal",
    year: "2025",
  },
];

const allProjects = [...caseProjects, ...extraProjects];

export default function MyProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-12">
        <Reveal>
          <SectionLabel>My Projects</SectionLabel>
        </Reveal>
        <h1 className="display mt-5 text-[14vw] md:text-[11vw] leading-[0.84] tracking-tighter2">
          <RevealLines lines={["Built and", "shipped."]} />
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-8 text-[18px] md:text-[22px] leading-[1.4] tracking-tight max-w-xl text-grey-dark">
            Five projects. Different industries, different goals — all built to
            do a job. Click any to open the live site.
          </p>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {allProjects.map((p, i) => (
            <CaseCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* How I work */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <SectionLabel>How I work</SectionLabel>
        <h2 className="display text-[10vw] md:text-[5.5vw] leading-[0.9] mt-3 mb-10">
          Every project starts
          <br />
          with a conversation.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <p className="text-[18px] md:text-[22px] leading-[1.4] tracking-tight">
              I don&apos;t send proposals to people I haven&apos;t spoken to.
              Before any design or development starts, we talk — about your
              business, your customers, and what you actually need the site to
              do.
            </p>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.65] text-grey-dark max-w-xl">
              That conversation shapes everything: the structure, the content,
              the timeline, and the budget. Nothing gets assumed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* For business owners */}
      <section className="bg-ink text-paper px-5 md:px-8 py-16 md:py-24">
        <SectionLabel dark>For business owners</SectionLabel>
        <h2 className="display text-[11vw] md:text-[5vw] leading-[0.9] mt-4">
          Your turn
          <br />
          to <span className="text-red">show up.</span>
        </h2>
        <ul className="mt-8 space-y-3">
          {[
            "Based in Mumbai & Pune, building for businesses across India",
            "Fast turnaround — most sites done in 2 weeks",
            "You talk to me directly. Not an account manager.",
          ].map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 font-mono text-[13px] uppercase tracking-[0.06em] text-paper/70"
            >
              <span className="text-red">↳</span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Ready to start */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <SectionLabel>Ready to start?</SectionLabel>
        <h2 className="display text-[10vw] md:text-[5.5vw] leading-[0.9] mt-3 mb-10">
          Your business
          <br />
          deserves to be found.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <p className="text-[18px] md:text-[22px] leading-[1.4] tracking-tight">
              If you are a business owner in Mumbai or Pune looking for a website
              that actually brings in customers — not just something that exists
              — let&apos;s talk.
            </p>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.65] text-grey-dark max-w-xl">
              WhatsApp is the fastest way to reach me.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://wa.me/917559292204"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="let's talk"
                className="inline-flex items-center px-6 py-3 bg-ink text-paper font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-red transition-colors"
              >
                WhatsApp me →
              </a>
              <a
                href="mailto:sahil22undale@gmail.com"
                data-cursor="open"
                className="inline-flex items-center px-6 py-3 border border-line font-mono text-[12px] uppercase tracking-[0.14em] hover:border-ink transition-colors"
              >
                Or send an email →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
