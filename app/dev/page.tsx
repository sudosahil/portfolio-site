import Link from "next/link";
import { RevealLines } from "@/components/Reveal";
import { DevReveal } from "@/components/dev/DevReveal";
import { DevSectionLabel } from "@/components/dev/DevSectionLabel";
import { devMetrics, devProfile, devProjects, devTerminal } from "@/lib/dev-content";

export default function DevIndex() {
  const selected = devProjects.slice(0, 3);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[var(--dev-line)] md:h-[calc(100svh-72px)] md:min-h-[760px]">
        <div aria-hidden className="dev-grid-bg absolute inset-0" />
        <div aria-hidden className="dev-scan absolute inset-x-0 top-0 h-px" />

        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col px-5 pb-16 pt-24 md:px-16 md:pb-0 md:pt-[18vh]">
          <DevReveal on="mount">
            <p className="dev-mono m-0 flex items-center gap-3 text-[var(--dev-t2)]">
              <span className="dev-dot-glow h-1.5 w-1.5 rounded-full bg-[var(--dev-a)]" />
              {devProfile.title} — {devProfile.location}
            </p>
          </DevReveal>

          <h1 className="mt-7 text-[80px] font-light leading-[0.9] tracking-[-0.065em] md:mt-9 md:text-[clamp(120px,12.2vw,176px)] md:leading-[0.88]">
            <RevealLines lines={["Sahil", "Undale"]} delay={0.1} className="dev-hero-name" />
          </h1>

          <DevReveal on="mount" delay={0.26}>
            <p className="mt-8 max-w-[460px] text-[18px] leading-[1.5] text-[var(--dev-t2)] md:mt-11 md:text-[21px]">
              {devProfile.oneLiner}
            </p>
          </DevReveal>

          <DevReveal on="mount" delay={0.4} className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:gap-3 md:mt-11">
            <a
              href={devProfile.resume}
              className="dev-btn dev-mono flex h-12 items-center justify-center gap-3 rounded-full bg-[var(--dev-a)] px-6 font-normal text-[var(--dev-bg)]"
            >
              Résumé <span>↓</span>
            </a>
            <Link
              href="/dev/work"
              className="dev-btn dev-mono flex h-12 items-center justify-center gap-3 rounded-full border border-[var(--dev-line-2)] px-6"
            >
              View work <span>→</span>
            </Link>
          </DevReveal>

          {/* terminal card */}
          <DevReveal
            on="mount"
            delay={0.6}
            className="mt-14 w-full max-w-[380px] overflow-hidden rounded-xl border border-[var(--dev-line-2)] bg-[rgba(12,12,15,0.8)] backdrop-blur-md md:absolute md:bottom-24 md:right-16 md:mt-0"
          >
            <div className="flex h-9 items-center gap-1.5 border-b border-[var(--dev-line)] px-3.5">
              <span className="h-2 w-2 rounded-full bg-[var(--dev-line-2)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--dev-line-2)]" />
              <span className="h-2 w-2 rounded-full bg-[var(--dev-line-2)]" />
              <span className="dev-mono ml-auto normal-case tracking-normal text-[var(--dev-t3)]">~/dev</span>
            </div>
            <div className="px-[18px] py-4 font-[family-name:var(--font-martian)] text-[11px] font-light leading-[1.9] text-[var(--dev-t2)]">
              <div className="text-[var(--dev-t1)]">
                <span className="text-[var(--dev-a)]">$</span> whoami --verbose
              </div>
              <dl className="mt-1.5 grid grid-cols-[96px_1fr]">
                {devTerminal.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="text-[var(--dev-t3)]">{k}</dt>
                    <dd className="m-0">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </DevReveal>

          <div aria-hidden className="dev-mono absolute bottom-10 left-16 hidden items-center gap-3.5 text-[10px] text-[var(--dev-t3)] md:flex">
            <span className="relative h-10 w-px overflow-hidden bg-[var(--dev-line)]">
              <span className="dev-drop absolute inset-0 bg-[var(--dev-a)]" />
            </span>
            Scroll
          </div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <DevReveal as="section" className="border-b border-[var(--dev-line)]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-3">
          {devMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-5 py-10 md:p-16 ${i < devMetrics.length - 1 ? "border-b border-[var(--dev-line)] md:border-b-0 md:border-r" : ""}`}
            >
              <div className={`text-[56px] leading-none tracking-[-0.05em] md:text-[72px] ${m.accent ? "text-[var(--dev-a)]" : ""}`}>
                {m.value}
                {m.unit && <span className="text-[26px] tracking-[-0.02em] md:text-[32px]">{m.unit}</span>}
              </div>
              <p className="dev-mono mt-[18px] text-[var(--dev-t3)]">{m.label}</p>
            </div>
          ))}
        </div>
      </DevReveal>

      {/* ── Selected work ── */}
      <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-20 md:px-16 md:pt-[120px]">
        <DevReveal className="mb-12 flex items-baseline justify-between">
          <DevSectionLabel>Selected work</DevSectionLabel>
          <Link href="/dev/work" className="dev-mono text-[var(--dev-t2)] hover:text-[var(--dev-t1)]">
            All work →
          </Link>
        </DevReveal>
        <DevReveal className="border-t border-[var(--dev-line)]">
          {selected.map((p, i) => {
            const inner = (
              <>
                <span className="dev-mono hidden text-[var(--dev-t3)] md:block">0{i + 1}</span>
                <span className="dev-name text-[26px] tracking-[-0.03em] md:text-[36px]">{p.name}</span>
                <span className="hidden text-[16px] text-[var(--dev-t2)] md:block">{p.line}</span>
                <span className="dev-mono hidden text-[var(--dev-t3)] md:block">{p.year}</span>
                <span className="dev-arrow text-[20px] text-[var(--dev-t3)]">→</span>
              </>
            );
            const cls =
              "dev-row grid min-h-[88px] grid-cols-[1fr_auto] items-center border-b border-[var(--dev-line)] px-2 md:h-[112px] md:grid-cols-[80px_1fr_1fr_80px_40px]";
            return p.external ? (
              <a key={p.slug} href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={p.slug} href={p.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </DevReveal>
      </section>
    </div>
  );
}
