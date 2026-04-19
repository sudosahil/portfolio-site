"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateSection } from "@/components/AnimateSection";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectRow } from "@/components/ProjectCard";
import { ScrollyHero } from "@/components/ScrollyHero";

const projects = [
  { name: "Personal Portfolio", type: "Web Studio", year: "2025" },
  { name: "Client E-commerce Store", type: "E-commerce", year: "2025" },
  { name: "Local Business Site", type: "Business", year: "2024" },
];

export default function WhatIDoPage() {
  return (
    <div>
      <ScrollyHero />

      {/* ─── Work Preview ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimateSection>
          <SectionLabel>// selected work</SectionLabel>
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-text-primary mt-1 mb-8">
            Things I&apos;ve shipped.
          </h2>
        </AnimateSection>
        <AnimateSection delay={0.08}>
          <div>
            {projects.map((p, i) => (
              <ProjectRow
                key={p.name}
                index={i + 1}
                name={p.name}
                type={p.type}
                year={p.year}
                href="/"
              />
            ))}
          </div>
        </AnimateSection>
        <AnimateSection delay={0.15}>
          <div className="mt-8">
            <Link
              href="/"
              className="text-[14px] text-accent hover:text-text-primary transition-colors"
            >
              see what I do & view all work →
            </Link>
          </div>
        </AnimateSection>
      </section>

      {/* ─── Contact CTA Strip ─── */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <AnimateSection className="max-w-lg">
            <h2 className="font-serif italic text-[28px] md:text-[32px] text-warm leading-[1.3]">
              Let&apos;s build something your customers actually notice.
            </h2>
            <p className="font-mono text-[11px] text-text-secondary mt-3">
              sahil22undale@gmail.com · mumbai, india
            </p>
          </AnimateSection>
          <AnimateSection delay={0.1} className="flex flex-col gap-3 w-full md:w-auto">
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link
                href="https://wa.me/917559292204"
                target="_blank"
                className="flex items-center justify-center px-6 py-3 bg-warm text-bg text-[14px] font-medium rounded-lg w-full md:w-auto"
              >
                WhatsApp me →
              </Link>
            </motion.div>
            <motion.div whileTap={{ scale: 0.97 }}>
              <Link
                href="mailto:sahil22undale@gmail.com"
                className="flex items-center justify-center px-6 py-3 border border-[rgba(255,255,255,0.12)] text-text-secondary text-[14px] rounded-lg hover:text-text-primary transition-colors w-full md:w-auto"
              >
                send an email
              </Link>
            </motion.div>
          </AnimateSection>
        </div>
      </section>
    </div>
  );
}
