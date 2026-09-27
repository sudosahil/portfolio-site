import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { LineDivider } from "@/components/LineDivider";
import { devNav, devProfile, devSocials } from "@/lib/dev-content";

export default function DevHome() {
  const pages = devNav.slice(1);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        <Reveal>
          <SectionLabel>
            {devProfile.title} · {devProfile.location}
          </SectionLabel>
        </Reveal>

        <h1 className="display mt-5 text-[22vw] md:text-[15vw] leading-none tracking-tighter2">
          <RevealLines lines={["Sahil"]} />
          <span className="text-blue">
            <RevealLines lines={["Undale."]} delay={0.14} />
          </span>
        </h1>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <p className="text-[20px] md:text-[26px] leading-[1.35] tracking-tight max-w-2xl">{devProfile.oneLiner}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={devProfile.resume}
                target="_blank"
                data-cursor="download"
                className="inline-flex items-center px-6 py-3 bg-white text-ink font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-blue hover:text-white transition-colors"
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
                  className="inline-flex items-center px-6 py-3 border border-line font-mono text-[12px] uppercase tracking-[0.14em] hover:border-white transition-colors"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Page index ── */}
      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <SectionLabel>Index</SectionLabel>
        <LineDivider className="mt-6" />
        <ul>
          {pages.map((p, i) => (
            <li key={p.href} className="border-b border-line">
              <Link href={p.href} data-cursor="go" className="group flex items-baseline gap-4 md:gap-8 py-4 md:py-5">
                <span className="font-mono text-[12px] text-grey w-8 shrink-0">0{i + 1}</span>
                <span className="display text-[12vw] md:text-[6vw] leading-none transition-colors duration-200 group-hover:text-blue">
                  {p.label}
                </span>
                <span className="ml-auto self-center font-mono text-[12px] text-grey transition-transform duration-300 group-hover:translate-x-2 group-hover:text-blue">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
