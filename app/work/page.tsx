import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";
import { LineDivider } from "@/components/LineDivider";
import { SectionLabel } from "@/components/SectionLabel";
import { Tag } from "@/components/Tag";

const projects = [
  {
    name: "Government Client System",
    type: "Business System",
    year: "2025",
    description:
      "End-to-end full-stack system for a government-sector client at Atraya Technologies. Role-based access control, formal requirement specs, and full SDLC from analysis to deployment.",
    techStack: ["Node.js", "React", "PostgreSQL", "REST API"],
  },
  {
    name: "AI Model Evaluation Dashboard",
    type: "Research Tool",
    year: "2025",
    description:
      "Internal tool built during a research internship at NGC. Tracked AI model performance from structured prompt evaluations and let the team compare models side by side.",
    techStack: ["Python", "React", "SQLite", "Charts.js"],
  },
  {
    name: "Client E-commerce Store",
    type: "E-commerce",
    year: "2025",
    description:
      "A full Shopify build for a D2C brand — product-page optimization, conversion-focused layout, and daily performance tracking to find high-performing SKUs for ad spend.",
    techStack: ["Shopify", "Liquid", "JavaScript", "Analytics"],
  },
  {
    name: "Local Business Landing Page",
    type: "Landing Page",
    year: "2024",
    description:
      "A high-converting single-page site for a Mumbai service business. Mobile-first, WhatsApp CTAs, and Google ranking for local search terms.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
  },
];

export default function WorkPage() {
  return (
    <div className="px-5 md:px-8 pb-16 md:pb-24">
      <section className="pt-28 md:pt-36 pb-12">
        <Reveal>
          <SectionLabel>Work</SectionLabel>
        </Reveal>
        <h1 className="display mt-5 text-[14vw] md:text-[11vw] leading-[0.84] tracking-tighter2">
          <RevealLines lines={["The wider", "résumé."]} />
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-8 text-[18px] md:text-[22px] leading-[1.4] tracking-tight max-w-xl text-grey-dark">
            Beyond client sites — systems, tools, and stores worth talking about.
          </p>
        </Reveal>
      </section>

      <LineDivider />
      <div>
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <article className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-10 border-b border-line">
              <div className="md:col-span-1 font-mono text-[12px] text-grey">
                0{i + 1}
              </div>
              <div className="md:col-span-5">
                <h2 className="display text-[8vw] md:text-[3.4vw] leading-[0.95] group-hover:text-red transition-colors">
                  {p.name}
                </h2>
                <div className="flex items-center gap-3 mt-3">
                  <Tag variant="ink">{p.type}</Tag>
                  <span className="font-mono text-[12px] text-grey">{p.year}</span>
                </div>
              </div>
              <div className="md:col-span-6">
                <p className="text-[16px] leading-[1.7] text-grey-dark max-w-lg">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.techStack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14">
          <Link
            href="/contact"
            data-cursor="let's go"
            className="inline-flex items-center px-7 py-4 bg-ink text-paper font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-red transition-colors"
          >
            Got a project in mind? →
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
