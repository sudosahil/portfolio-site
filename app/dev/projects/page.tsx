import type { Metadata } from "next";
import { Reveal, RevealLines } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { LineDivider } from "@/components/LineDivider";
import { StackChip } from "@/components/dev/StackLogo";
import { devProjects } from "@/lib/dev-content";

export const metadata: Metadata = { title: "Projects" };

export default function DevProjects() {
  return (
    <div className="px-5 md:px-8 pb-16 md:pb-24">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
        </Reveal>
        <h1 className="display mt-5 text-[14vw] md:text-[11vw] leading-none tracking-tighter2">
          <RevealLines lines={["Things I've"]} />
          <span className="text-blue">
            <RevealLines lines={["built."]} delay={0.14} />
          </span>
        </h1>
      </section>

      {/* List */}
      <section>
        <LineDivider />
        {devProjects.map((p, i) => (
          <Reveal key={p.name}>
            <article className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-10 md:py-14 border-b border-line">
              <div className="md:col-span-5">
                <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-blue">
                  0{i + 1} — {p.kind}
                </p>
                <h2 className="display text-[14vw] md:text-[6vw] leading-none mt-3">{p.name}</h2>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[12px] text-grey">{p.year}</span>
                  {p.status && <span className="inline-block bg-blue px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-white">{p.status}</span>}
                </div>
              </div>

              <div className="md:col-span-7 md:col-start-6 md:pt-8">
                <p className="text-[18px] md:text-[20px] leading-[1.5] tracking-tight max-w-2xl">{p.description}</p>

                {(p.stack.length > 0 || p.extraTags) && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((id) => (
                      <StackChip key={id} id={id} />
                    ))}
                    {p.extraTags?.map((t) => (
                      <span key={t} className="inline-block border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-white/80">{t}</span>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="code"
                      className="inline-flex items-center px-6 py-3 bg-white text-ink font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-blue hover:text-white transition-colors"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="view"
                      className="inline-flex items-center px-6 py-3 border border-line font-mono text-[12px] uppercase tracking-[0.14em] hover:border-white transition-colors"
                    >
                      Live site ↗
                    </a>
                  )}
                  {!p.github && !p.live && (
                    <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-grey">Repository coming soon</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
