import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";
import { LineDivider } from "@/components/LineDivider";
import { SectionLabel } from "@/components/SectionLabel";
import { ResumeBlock } from "@/components/ResumeBlock";
import { Skills } from "@/components/Skills";
import { experiences } from "@/lib/content";

export default function ResumePage() {
  return (
    <div className="px-5 md:px-8 pb-16 md:pb-24">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10">
        <div className="flex items-start justify-between gap-6">
          <Reveal>
            <SectionLabel>Résumé</SectionLabel>
          </Reveal>
          <Link
            href="/resume.pdf"
            target="_blank"
            data-cursor="download"
            className="shrink-0 font-mono text-[12px] uppercase tracking-[0.14em] border border-line px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
          >
            Download PDF ↓
          </Link>
        </div>
        <h1 className="display mt-5 text-[14vw] md:text-[11vw] leading-[0.84] tracking-tighter2">
          <RevealLines lines={["The full", "picture."]} />
        </h1>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <SectionLabel>Experience</SectionLabel>
        <LineDivider className="mt-6" />
        <div>
          {experiences.map((exp) => (
            <Reveal key={exp.role + exp.company}>
              <ResumeBlock
                role={exp.role}
                company={exp.company}
                dateRange={exp.dateRange}
                bullets={exp.bullets}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <SectionLabel>Skills</SectionLabel>
        <div className="mt-6">
          <Skills />
        </div>
      </section>
    </div>
  );
}
