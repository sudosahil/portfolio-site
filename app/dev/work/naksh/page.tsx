import type { Metadata } from "next";
import Link from "next/link";
import { DevReveal } from "@/components/dev/DevReveal";
import { DevSectionLabel } from "@/components/dev/DevSectionLabel";
import { naksh } from "@/lib/dev-content";

export const metadata: Metadata = {
  title: "NAKSH — case study",
  description: naksh.tagline,
};

export default function NakshCaseStudy() {
  const meta = [
    { k: "Year", v: naksh.year },
    { k: "Context", v: naksh.context },
    { k: "Role", v: naksh.role },
  ];

  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-16">
      {/* header */}
      <section className="pt-24 md:pt-[176px]">
        <DevReveal on="mount">
          <Link href="/dev/work" className="dev-mono text-[var(--dev-t3)] hover:text-[var(--dev-t1)]">
            ← Work / 01
          </Link>
        </DevReveal>
        <DevReveal on="mount" delay={0.12}>
          <h1 className="mt-12 text-[88px] font-light leading-[0.85] tracking-[-0.07em] md:text-[200px]">NAKSH</h1>
        </DevReveal>
        <DevReveal on="mount" delay={0.26}>
          <p className="mt-9 max-w-[620px] text-[20px] leading-[1.45] text-[var(--dev-t2)] md:text-[24px]">{naksh.tagline}</p>
        </DevReveal>
        <DevReveal
          on="mount"
          delay={0.4}
          className="mt-16 grid grid-cols-2 border-y border-[var(--dev-line)] md:mt-24 md:grid-cols-4"
        >
          {meta.map((m, i) => (
            <div key={m.k} className={`py-7 pr-6 ${i > 0 ? "md:pl-6" : ""} border-[var(--dev-line)] md:border-r`}>
              <p className="dev-mono m-0 text-[10px] text-[var(--dev-t3)]">{m.k}</p>
              <p className="mt-3 text-[17px]">{m.v}</p>
            </div>
          ))}
          <div className="py-7 md:pl-6">
            <p className="dev-mono m-0 text-[10px] text-[var(--dev-t3)]">Repository</p>
            <a href={naksh.repo} target="_blank" rel="noopener noreferrer" className="dev-underline mt-3 inline-block text-[17px]">
              {naksh.repoLabel} ↗
            </a>
          </div>
        </DevReveal>
      </section>

      {/* problem */}
      <DevReveal as="section" className="grid grid-cols-1 gap-8 pt-24 md:grid-cols-12 md:gap-6 md:pt-40">
        <DevSectionLabel className="md:col-span-3">01 — Problem</DevSectionLabel>
        <p className="m-0 text-[26px] leading-[1.3] tracking-[-0.025em] md:col-span-8 md:col-start-5 md:text-[36px]">
          {naksh.problem[0]} <span className="text-[var(--dev-t3)]">{naksh.problem[1]}</span>
        </p>
      </DevReveal>

      {/* architecture */}
      <section className="pt-24 md:pt-40">
        <DevReveal className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-6">
          <DevSectionLabel className="md:col-span-3">02 — Architecture</DevSectionLabel>
          <p className="m-0 text-[18px] leading-[1.6] text-[var(--dev-t2)] md:col-span-7 md:col-start-5 md:text-[19px]">{naksh.architectureIntro}</p>
        </DevReveal>
        <DevReveal className="dev-dots relative rounded-[20px] border border-[var(--dev-line)] bg-[var(--dev-card)] px-5 py-8 md:px-8 md:py-12">
          <div aria-hidden className="dev-wire absolute bottom-10 left-1/2 top-10 hidden w-px md:bottom-auto md:left-[120px] md:right-[120px] md:top-1/2 md:block md:h-px md:w-auto" />
          <ol className="relative m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 md:grid-cols-6 md:gap-5">
            {naksh.pipeline.map((n, i) => (
              <li
                key={n.title}
                className="dev-node flex min-h-[150px] flex-col justify-between rounded-xl border border-[var(--dev-line-2)] bg-[#0c0c0f] p-5 md:h-[184px]"
              >
                <div className="dev-mono flex justify-between text-[10px] text-[var(--dev-t3)]">
                  <span>0{i + 1}</span>
                  <span className="text-[var(--dev-a)]">{n.tag}</span>
                </div>
                <div>
                  <p className="m-0 text-[18px] font-normal tracking-[-0.01em]">{n.title}</p>
                  <p className="mt-2 font-[family-name:var(--font-martian)] text-[10px] leading-[1.6] text-[var(--dev-t2)]">{n.sub}</p>
                </div>
              </li>
            ))}
          </ol>
        </DevReveal>
      </section>

      {/* ownership */}
      <DevReveal as="section" className="grid grid-cols-1 gap-8 pt-24 md:grid-cols-12 md:gap-6 md:pt-40">
        <DevSectionLabel className="md:col-span-3">03 — What I owned</DevSectionLabel>
        <ol className="m-0 list-none border-t border-[var(--dev-line)] p-0 md:col-span-8 md:col-start-5">
          {naksh.owned.map((o, i) => (
            <li key={o.title} className="grid grid-cols-[48px_1fr] border-b border-[var(--dev-line)] py-7 md:grid-cols-[56px_1fr]">
              <span className="font-[family-name:var(--font-martian)] text-[11px] text-[var(--dev-a)]">{String.fromCharCode(65 + i)}</span>
              <div>
                <p className="m-0 text-[22px]">{o.title}</p>
                <p className="mt-2 text-[16px] text-[var(--dev-t2)]">{o.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </DevReveal>

      {/* outcome */}
      <section className="pt-24 md:pt-40">
        <DevReveal>
          <DevSectionLabel className="mb-12">04 — Outcome</DevSectionLabel>
        </DevReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {naksh.outcome.map((m, i) => (
            <DevReveal key={m.label} delay={i * 0.08} className="dev-card rounded-[14px] border border-[var(--dev-line)] bg-[var(--dev-card)] p-8">
              <div className={`text-[48px] tracking-[-0.05em] md:text-[56px] ${m.accent ? "text-[var(--dev-a)]" : ""}`}>
                {m.value}
                {m.unit && <span className="text-[22px]">{m.unit}</span>}
              </div>
              <p className="dev-mono mt-5 text-[10px] text-[var(--dev-t3)]">{m.label}</p>
            </DevReveal>
          ))}
        </div>
      </section>

      {/* next */}
      <section className="pb-24 pt-24 md:pb-[120px] md:pt-40">
        <DevReveal>
          <Link href="/dev/work" className="dev-next flex items-center justify-between border-y border-[var(--dev-line)] py-10 md:py-12">
            <span className="dev-mono text-[var(--dev-t3)]">Back to</span>
            <span className="text-[44px] tracking-[-0.05em] md:text-[72px]">All work</span>
            <span aria-hidden className="dev-arrow text-[32px] text-[var(--dev-t3)] md:text-[40px]">→</span>
          </Link>
        </DevReveal>
      </section>
    </div>
  );
}
