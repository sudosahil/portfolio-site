import { Reveal, RevealLines } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CaseCard } from "@/components/CaseCard";
import { HookForm } from "@/components/HookForm";
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
            Live work, real businesses. Click any project to open the site.
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

      {/* Hook section */}
      <section className="bg-ink text-paper px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel dark>For business owners</SectionLabel>
            <h2 className="display text-[11vw] md:text-[5vw] leading-[0.9] mt-4">
              Your turn
              <br />
              to <span className="text-red">show up.</span>
            </h2>
            <ul className="mt-8 space-y-3">
              {[
                "Based in Mumbai & Pune, building for Indian businesses",
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
          </div>
          <HookForm />
        </div>
      </section>
    </div>
  );
}
