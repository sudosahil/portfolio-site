import type { Metadata } from "next";
import { Reveal, RevealLines } from "@/components/Reveal";
import { LineDivider } from "@/components/LineDivider";
import { SectionLabel } from "@/components/SectionLabel";
import { Education } from "@/components/Education";
import { DevResumeBlock } from "@/components/dev/DevResumeBlock";
import { StackLogo } from "@/components/dev/StackLogo";
import { experiences } from "@/lib/content";
import { devProfile, devStack } from "@/lib/dev-content";
import { stackLogos } from "@/lib/dev-stack";

export const metadata: Metadata = { title: "Résumé" };

export default function DevResume() {
  return (
    <div className="px-5 md:px-8 pb-16 md:pb-24">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10">
        <div className="flex items-start justify-between gap-6">
          <Reveal>
            <SectionLabel>Résumé</SectionLabel>
          </Reveal>
          <a
            href={devProfile.resume}
            target="_blank"
            data-cursor="download"
            className="shrink-0 font-mono text-[12px] uppercase tracking-[0.14em] border border-line px-5 py-3 hover:bg-white hover:text-ink transition-colors"
          >
            Download PDF ↓
          </a>
        </div>
        <h1 className="display mt-5 text-[14vw] md:text-[11vw] leading-none tracking-tighter2">
          <RevealLines lines={["The full"]} />
          <span className="text-blue">
            <RevealLines lines={["picture."]} delay={0.14} />
          </span>
        </h1>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <SectionLabel>Experience</SectionLabel>
        <LineDivider className="mt-6" />
        <div>
          {experiences.map((exp) => (
            <Reveal key={exp.role + exp.company}>
              <DevResumeBlock role={exp.role} company={exp.company} dateRange={exp.dateRange} bullets={exp.bullets} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <Education />
      </section>

      {/* Tech stack with logos */}
      <section>
        <SectionLabel>Tech stack</SectionLabel>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
          {devStack.map((group) => (
            <div key={group.label} className="border-t border-line pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-grey mb-4">{group.label}</p>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {group.items.map((id) => (
                  <li
                    key={id}
                    className="flex items-center gap-3 border border-line px-4 py-3 transition-colors hover:border-blue hover:text-blue"
                  >
                    <StackLogo id={id} size={20} />
                    <span className="text-[15px] font-medium tracking-tight">{stackLogos[id].name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
