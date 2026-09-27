import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { StackProjector } from "@/components/dev/StackProjector";
import { devNav, devProfile, devSocials, devStack } from "@/lib/dev-content";

export default function DevHome() {
  const pages = devNav.slice(1);
  const stack = devStack.flatMap((g) => g.items);

  return (
    <section className="px-5 md:px-8 pt-24 md:pt-[max(88px,11svh)] pb-12 md:pb-8 md:min-h-[100svh] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 md:items-start">
      {/* ── Left: name ── */}
      <div className="md:col-span-6">
        <Reveal>
          <SectionLabel>
            {devProfile.title} · {devProfile.location}
          </SectionLabel>
        </Reveal>
        <h1 className="display mt-4 text-[22vw] md:text-[min(13vw,27svh)] leading-[0.92] tracking-[-0.01em]">
          <RevealLines lines={["Sahil"]} />
          <span className="text-blue">
            <RevealLines lines={["Undale."]} delay={0.14} />
          </span>
        </h1>
      </div>

      {/* ── Right: profile, links, pages, stack ── */}
      <div className="md:col-span-5 md:col-start-8 flex flex-col gap-10 md:gap-[min(2.5rem,4.5svh)] md:pt-8">
        <Reveal delay={0.15}>
          <p className="text-[20px] md:text-[22px] leading-[1.35] tracking-tight">{devProfile.oneLiner}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={devProfile.resume}
              target="_blank"
              data-cursor="download"
              className="inline-flex items-center px-5 py-3 bg-white text-ink font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-blue hover:text-white transition-colors"
            >
              Résumé ↓
            </a>
            {devSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="inline-flex items-center px-5 py-3 border border-line font-mono text-[12px] uppercase tracking-[0.14em] hover:border-white transition-colors"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="border-t border-line">
            {pages.map((p, i) => (
              <li key={p.href} className="border-b border-line">
                <Link href={p.href} data-cursor="go" className="group flex items-baseline gap-4 py-2.5">
                  <span className="font-mono text-[12px] text-grey w-8 shrink-0">0{i + 1}</span>
                  <span className="display text-[12vw] md:text-[min(3.4vw,6.5svh)] leading-none transition-colors duration-200 group-hover:text-blue">
                    {p.label}
                  </span>
                  <span className="ml-auto self-center font-mono text-[12px] text-grey transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey mb-4">[ Tech stack ]</p>
          <StackProjector ids={stack} />
        </Reveal>
      </div>
    </section>
  );
}
