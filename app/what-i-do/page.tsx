import Link from "next/link";
import { Reveal, RevealLines } from "@/components/Reveal";
import { LineDivider } from "@/components/LineDivider";
import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";
import { services } from "@/lib/content";

const process = [
  {
    num: "01",
    title: "Talk",
    desc: "We figure out what your business actually needs. No jargon, no upsell — just a clear plan.",
  },
  {
    num: "02",
    title: "Design",
    desc: "I design something that looks credible and feels fast. You review, we refine, it gets sharp.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Hand-coded, performance-obsessed, SEO-ready. Most sites are live within two weeks.",
  },
  {
    num: "04",
    title: "Launch & care",
    desc: "We ship it, hook up analytics, and I stick around for updates, hosting, and peace of mind.",
  },
];

export default function WhatIDoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-12">
        <Reveal>
          <SectionLabel>What I Do</SectionLabel>
        </Reveal>
        <h1 className="display mt-5 text-[14vw] md:text-[11vw] leading-[0.84] tracking-tighter2">
          <RevealLines lines={["Websites that", "earn their"]} />
          <span className="text-red">
            <RevealLines lines={["keep."]} delay={0.16} />
          </span>
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-10 text-[20px] md:text-[26px] leading-[1.35] tracking-tight max-w-2xl">
            I work with brands big and small on a focused range of web services —
            from a single landing page to a full online store. Whatever it is, it
            ships fast and looks like you mean business.
          </p>
        </Reveal>
      </section>

      {/* Services table */}
      <section className="px-5 md:px-8 pb-8">
        <LineDivider />
        <div>
          {services.map((s) => (
            <Reveal key={s.num}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start py-8 border-b border-line">
                <span className="font-mono text-[12px] text-grey md:col-span-1">
                  {s.num}
                </span>
                <h3 className="display text-[9vw] md:text-[4vw] leading-[0.95] md:col-span-6">
                  {s.title}
                </h3>
                <div className="md:col-span-5">
                  <p className="text-[16px] leading-[1.65] text-grey-dark">
                    {s.detail}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-grey mt-6 mb-3">
                    Includes
                  </p>
                  <ul className="space-y-2">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-[1.5] text-grey-dark"
                      >
                        <span className="text-red">↳</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[18px] md:text-[20px] font-medium tracking-tight mt-6">
                    {s.price}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-ink text-paper py-4 border-y border-line">
        <Marquee duration={24}>
          <span className="display text-[40px] px-6">Fast</span>
          <span className="text-red text-[28px]">✦</span>
          <span className="display text-[40px] px-6">Credible</span>
          <span className="text-red text-[28px]">✦</span>
          <span className="display text-[40px] px-6">Built to convert</span>
          <span className="text-red text-[28px]">✦</span>
        </Marquee>
      </div>

      {/* Process */}
      <section className="px-5 md:px-8 py-16 md:py-24">
        <SectionLabel>How it works</SectionLabel>
        <h2 className="display text-[10vw] md:text-[5.5vw] leading-[0.9] mt-3 mb-12">
          Four steps,
          <br />
          zero drama.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {process.map((p) => (
            <Reveal key={p.num}>
              <div className="border-t border-line pt-5">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-red">{p.num}</span>
                  <h3 className="text-[26px] md:text-[32px] font-medium tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-[16px] leading-[1.65] text-grey-dark mt-3 max-w-md">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16">
            <Link
              href="/contact"
              data-cursor="let's go"
              className="inline-flex items-center px-7 py-4 bg-ink text-paper font-mono text-[12px] uppercase tracking-[0.14em] hover:bg-red transition-colors"
            >
              Not sure what you need? Let&apos;s figure it out →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
