"use client";

import { AnimateSection } from "@/components/AnimateSection";
import { SectionLabel } from "@/components/SectionLabel";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* ─── Intro ─── */}
      <section className="flex flex-col md:flex-row gap-16 items-start mb-24">
        {/* Left */}
        <div className="flex-1">
          <AnimateSection>
            <SectionLabel>// about</SectionLabel>
            <h1 className="text-[42px] md:text-[52px] font-semibold tracking-[-0.03em] text-text-primary mt-2 mb-6 leading-[1.1]">
              About me.
            </h1>
            <p className="text-[15px] text-text-secondary leading-[1.75] mb-8">
              I&apos;m Sahil, a web developer from Mumbai. I build websites for
              businesses that want to look credible and grow online.
            </p>
          </AnimateSection>
        </div>

        {/* Right — photo placeholder */}
        <AnimateSection delay={0.15} className="w-full md:w-[280px] shrink-0">
          <div className="bg-surface2 rounded-xl border border-[rgba(255,255,255,0.07)] aspect-[3/4] flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-[rgba(139,143,255,0.15)] border border-[rgba(139,143,255,0.3)] flex items-center justify-center">
              <span className="font-mono text-[18px] text-accent font-medium">SU</span>
            </div>
            <div className="text-center">
              <p className="text-[15px] font-medium text-text-primary">Sahil Undale</p>
              <p className="font-mono text-[11px] text-text-secondary mt-0.5">
                Web Developer · Mumbai
              </p>
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* ─── Currently ─── */}
      <AnimateSection className="mb-24">
        <SectionLabel>// currently</SectionLabel>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: "📍", label: "Location", value: "Mumbai, India" },
            { icon: "🏗️", label: "Building", value: "Web projects" },
            { icon: "✅", label: "Available", value: "For new projects" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 p-5 bg-surface rounded-xl border border-[rgba(255,255,255,0.07)]"
            >
              <span className="text-[20px]">{item.icon}</span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-[15px] text-text-primary">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateSection>

      {/* ─── Skills ─── */}
      <AnimateSection className="mb-24">
        <SectionLabel>// skills</SectionLabel>
        <div className="mt-5">
          <Skills />
        </div>
      </AnimateSection>

      {/* ─── Education ─── */}
      <AnimateSection>
        <Education />
      </AnimateSection>
    </div>
  );
}
