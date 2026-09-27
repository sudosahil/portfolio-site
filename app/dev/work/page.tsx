import type { Metadata } from "next";
import Link from "next/link";
import { DevReveal } from "@/components/dev/DevReveal";
import { DevSectionLabel } from "@/components/dev/DevSectionLabel";
import { devProjects, type DevProject } from "@/lib/dev-content";

export const metadata: Metadata = { title: "Work" };

function CardBody({ p, i }: { p: DevProject; i: number }) {
  return (
    <>
      <span aria-hidden className="dev-corner absolute -left-px -top-px h-7 w-7 rounded-tl-2xl border-l border-t border-[var(--dev-a)]" />
      <div className="flex items-start justify-between">
        <span className="dev-mono text-[var(--dev-t3)]">
          0{i + 1} — {p.kind} · {p.year}
        </span>
        <span aria-hidden className="dev-arrow flex h-10 w-10 items-center justify-center rounded-full border border-[var(--dev-line-2)] text-[15px] text-[var(--dev-t2)]">
          ↗
        </span>
      </div>
      <h2 className="m-0 mt-auto pt-16 text-[40px] font-light leading-none tracking-[-0.045em] md:text-[52px]">{p.name}</h2>
      <p className="mt-3.5 text-[17px] text-[var(--dev-t2)]">{p.line}</p>
      <div className="mt-9 flex flex-col gap-6 border-t border-[var(--dev-line)] pt-6 sm:flex-row sm:items-end sm:justify-between">
        {p.metric ? (
          <div>
            <div className="text-[32px] tracking-[-0.03em] text-[var(--dev-a)]">{p.metric}</div>
            <div className="dev-mono mt-2 text-[10px] text-[var(--dev-t3)]">{p.metricLabel}</div>
          </div>
        ) : (
          <span />
        )}
        <ul className="m-0 flex max-w-[260px] list-none flex-wrap gap-1.5 p-0 sm:justify-end">
          {p.stack.map((t) => (
            <li key={t} className="rounded-full border border-[var(--dev-line-2)] px-2.5 py-[5px] font-[family-name:var(--font-martian)] text-[10px] text-[var(--dev-t2)]">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function DevWork() {
  const cls =
    "dev-card relative flex min-h-[400px] flex-col overflow-hidden rounded-2xl border border-[var(--dev-line)] bg-[var(--dev-card)] p-7 md:h-[440px] md:p-9";
  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-16">
      <section className="pb-16 pt-28 md:pb-[120px] md:pt-[200px]">
        <DevReveal on="mount">
          <DevSectionLabel>03 — Work</DevSectionLabel>
        </DevReveal>
        <DevReveal on="mount" delay={0.12}>
          <h1 className="mt-10 text-[64px] font-light leading-[0.9] tracking-[-0.06em] md:text-[120px]">Selected work</h1>
        </DevReveal>
        <DevReveal on="mount" delay={0.26}>
          <p className="mt-8 max-w-[460px] text-[19px] leading-[1.6] text-[var(--dev-t2)]">Four systems, from research to production.</p>
        </DevReveal>
      </section>

      <section className="grid grid-cols-1 gap-4 pb-24 md:grid-cols-2 md:pb-[120px]">
        {devProjects.map((p, i) => (
          <DevReveal key={p.slug} delay={(i % 2) * 0.1}>
            {p.external ? (
              <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
                <CardBody p={p} i={i} />
              </a>
            ) : (
              <Link href={p.href} className={cls}>
                <CardBody p={p} i={i} />
              </Link>
            )}
          </DevReveal>
        ))}
      </section>
    </div>
  );
}
