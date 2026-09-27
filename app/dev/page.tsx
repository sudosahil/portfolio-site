import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { StackLogo } from "@/components/dev/StackLogo";
import { devNav, devProfile, devSocials, devStack } from "@/lib/dev-content";
import { stackLogos } from "@/lib/dev-stack";

export default function DevHome() {
  const pages = devNav.slice(1);
  const stack = devStack.flatMap((g) => g.items);

  return (
    <section className="min-h-[100svh] px-5 md:px-8 pt-28 md:pt-24 pb-12 md:pb-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
      {/* ── Left: name ── */}
      <div className="md:col-span-6 flex flex-col justify-center">
        <Reveal>
          <SectionLabel>
            {devProfile.title} · {devProfile.location}
          </SectionLabel>
        </Reveal>
        <h1 className="display mt-5 text-[22vw] md:text-[14vw] leading-none tracking-tighter2">
          <RevealLines lines={["Sahil"]} />
          <span className="text-blue">
            <RevealLines lines={["Undale."]} delay={0.14} />
          </span>
        </h1>
      </div>

      {/* ── Right: profile, links, pages, stack ── */}
      <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center gap-10">
        <Reveal delay={0.15}>
          <p className="text-[20px] md:text-[24px] leading-[1.35] tracking-tight">{devProfile.oneLiner}</p>
          <div className="mt-6 flex flex-wrap gap-2">
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
                <Link href={p.href} data-cursor="go" className="group flex items-baseline gap-4 py-3">
                  <span className="font-mono text-[12px] text-grey w-8 shrink-0">0{i + 1}</span>
                  <span className="display text-[12vw] md:text-[3.6vw] leading-none transition-colors duration-200 group-hover:text-blue">
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
          <ul className="flex flex-wrap gap-2">
            {stack.map((id) => (
              <li key={id}>
                <span
                  title={stackLogos[id].name}
                  className="flex h-11 w-11 items-center justify-center border border-line text-white/80 transition-colors hover:border-blue hover:text-blue"
                >
                  <StackLogo id={id} size={20} />
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
