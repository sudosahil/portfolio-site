import type { Metadata } from "next";
import { DevReveal, DevGrowLine } from "@/components/dev/DevReveal";
import { DevSectionLabel } from "@/components/dev/DevSectionLabel";
import { devEducation, devFacts } from "@/lib/dev-content";

export const metadata: Metadata = { title: "About" };

export default function DevAbout() {
  return (
    <div>
      <section className="border-b border-[var(--dev-line)]">
        <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 md:px-16 md:pb-40 md:pt-[200px]">
          <DevReveal on="mount">
            <DevSectionLabel>01 — About</DevSectionLabel>
          </DevReveal>
          <DevReveal on="mount" delay={0.12}>
            <h1 className="mt-10 max-w-[1080px] text-[40px] font-light leading-[1.08] tracking-[-0.045em] md:text-[72px] md:leading-[1.04]">
              I care about how software is put together —{" "}
              <span className="text-[var(--dev-t3)]">data models, boundaries, trade-offs.</span>
            </h1>
          </DevReveal>
        </div>
      </section>

      <section className="border-b border-[var(--dev-line)]">
        <DevReveal className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-5 py-20 md:grid-cols-12 md:gap-6 md:px-16 md:py-[120px]">
          <p className="m-0 text-[18px] leading-[1.7] text-[var(--dev-t2)] md:col-span-5 md:text-[19px]">
            I&apos;ve shipped business systems for government and private clients, and evaluated AI models
            hands-on. I do my best work where the backend meets real, messy data.
          </p>
          <dl className="m-0 border-t border-[var(--dev-line)] md:col-span-6 md:col-start-7">
            {devFacts.map((f) => (
              <div key={f.k} className="grid grid-cols-[120px_1fr] border-b border-[var(--dev-line)] py-[22px] md:grid-cols-[160px_1fr]">
                <dt className="dev-mono text-[var(--dev-t3)]">{f.k}</dt>
                <dd className="m-0 text-[17px]">{f.v}</dd>
              </div>
            ))}
          </dl>
        </DevReveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-16 md:py-[120px]">
        <DevReveal>
          <DevSectionLabel className="mb-16 md:mb-[88px]">Education</DevSectionLabel>
        </DevReveal>
        <div className="relative">
          <div aria-hidden className="absolute bottom-0 left-[5px] top-0 w-px bg-[var(--dev-line)] md:bottom-auto md:left-0 md:right-0 md:top-[5px] md:h-px md:w-auto" />
          <DevGrowLine className="absolute left-0 right-0 top-[5px] hidden h-px bg-gradient-to-r from-[var(--dev-line-2)] to-[var(--dev-a)] md:block" />
          <ol className="relative m-0 grid list-none grid-cols-1 gap-14 p-0 md:grid-cols-3 md:gap-6">
            {devEducation.map((e, i) => (
              <DevReveal as="li" key={e.title} delay={i * 0.12} className="relative pl-8 md:pl-0">
                <span
                  aria-hidden
                  className={`absolute left-0 block h-[11px] w-[11px] rounded-full md:static ${
                    e.current ? "dev-pulse bg-[var(--dev-a)]" : "box-border border border-[var(--dev-t3)] bg-[var(--dev-bg)]"
                  }`}
                />
                <p className={`dev-mono m-0 normal-case md:mt-8 ${e.current ? "text-[var(--dev-a)]" : "text-[var(--dev-t3)]"}`}>{e.year}</p>
                <p className="mt-3.5 text-[22px] tracking-[-0.02em]">{e.title}</p>
                <p className="mt-2 text-[15px] text-[var(--dev-t2)]">{e.school}</p>
              </DevReveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
