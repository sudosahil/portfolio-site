import type { Metadata } from "next";
import { DevReveal, DevGrowLine } from "@/components/dev/DevReveal";
import { DevSectionLabel } from "@/components/dev/DevSectionLabel";
import { devProfile, devRoles, devSkills } from "@/lib/dev-content";

export const metadata: Metadata = { title: "Experience" };

export default function DevExperience() {
  return (
    <div>
      <section className="border-b border-[var(--dev-line)]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 pb-20 pt-28 md:flex-row md:items-end md:justify-between md:px-16 md:pb-[120px] md:pt-[200px]">
          <div>
            <DevReveal on="mount">
              <DevSectionLabel>02 — Experience</DevSectionLabel>
            </DevReveal>
            <DevReveal on="mount" delay={0.12}>
              <h1 className="mt-10 text-[64px] font-light leading-[0.9] tracking-[-0.06em] md:text-[120px]">Experience</h1>
            </DevReveal>
          </div>
          <DevReveal on="mount" delay={0.26}>
            <a
              href={devProfile.resume}
              className="dev-btn dev-mono inline-flex h-12 items-center gap-3 rounded-full bg-[var(--dev-a)] px-6 font-normal text-[var(--dev-bg)]"
            >
              Résumé PDF <span>↓</span>
            </a>
          </DevReveal>
        </div>
      </section>

      {/* timeline */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-16 md:py-[120px]">
        <div className="relative">
          <div aria-hidden className="absolute bottom-3 left-[5px] top-3 w-px bg-[var(--dev-line)] md:left-[303px]" />
          <DevGrowLine
            axis="y"
            className="absolute bottom-3 left-[5px] top-3 w-px bg-gradient-to-b from-[var(--dev-a)] to-[var(--dev-line-2)] md:left-[303px]"
          />
          <ol className="m-0 flex list-none flex-col gap-16 p-0 md:gap-[104px]">
            {devRoles.map((r) => (
              <DevReveal
                as="li"
                key={r.role + r.company}
                className="relative grid grid-cols-1 pl-8 md:grid-cols-[280px_48px_minmax(0,680px)] md:pl-0"
              >
                <div className="dev-mono pt-1 leading-[1.9] text-[var(--dev-t3)]">
                  <div>{r.dates}</div>
                  <div>{r.place}</div>
                </div>
                <div className="absolute left-0 top-2 md:static md:flex md:justify-center md:pt-2">
                  <span
                    aria-hidden
                    className={`block h-[11px] w-[11px] rounded-full ${
                      r.current ? "dev-pulse bg-[var(--dev-a)]" : "box-border border border-[var(--dev-t3)] bg-[var(--dev-bg)]"
                    }`}
                  />
                </div>
                <div className="mt-4 md:mt-0 md:pl-10">
                  <h2 className="m-0 text-[26px] font-light leading-[1.1] tracking-[-0.03em] md:text-[32px]">{r.role}</h2>
                  <p className="mt-2.5 text-[17px] text-[var(--dev-t2)]">{r.company}</p>
                  <ul className="mt-7 flex list-none flex-col gap-3 p-0">
                    {r.bullets.map((b) => (
                      <li key={b} className="grid grid-cols-[28px_1fr] text-[16px] leading-[1.6] text-[var(--dev-t2)]">
                        <span aria-hidden className="font-[family-name:var(--font-martian)] text-[11px] leading-[2.3] text-[var(--dev-a)]">
                          →
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </DevReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* stack */}
      <section className="border-t border-[var(--dev-line)]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-16 md:py-[120px]">
          <DevReveal className="mb-14 flex items-baseline justify-between">
            <h2 className="m-0 text-[40px] font-light tracking-[-0.045em] md:text-[56px]">Stack</h2>
            <DevSectionLabel>By category</DevSectionLabel>
          </DevReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devSkills.map((s, i) => (
              <DevReveal
                key={s.cat}
                delay={(i % 3) * 0.08}
                className="dev-card flex min-h-[200px] flex-col justify-between rounded-[14px] border border-[var(--dev-line)] bg-[var(--dev-card)] p-8"
              >
                <div className="dev-mono flex justify-between text-[var(--dev-t3)]">
                  <span>{s.cat}</span>
                  <span>{String(s.items.length).padStart(2, "0")}</span>
                </div>
                <ul className="mt-10 flex list-none flex-wrap gap-2 p-0">
                  {s.items.map((t) => (
                    <li key={t} className="rounded-full border border-[var(--dev-line-2)] px-3 py-[7px] text-[14px]">
                      {t}
                    </li>
                  ))}
                </ul>
              </DevReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
