"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateSection } from "@/components/AnimateSection";
import { SectionLabel } from "@/components/SectionLabel";
import { ResumeBlock } from "@/components/ResumeBlock";
import { Skills } from "@/components/Skills";

const experiences = [
  {
    role: "Software Developer",
    company: "Atraya Technologies",
    dateRange: "May 2025 – Present",
    bullets: [
      "End-to-end development of business systems for government and private-sector clients",
      "Backend, frontend, and database development from formal client requirements",
      "Translated business needs into scalable workflows with role-based access",
      "Full SDLC — requirement analysis to deployment",
    ],
  },
  {
    role: "Performance Marketing Intern",
    company: "RevBoosters",
    dateRange: "May 2025 – July 2025",
    bullets: [
      "Managed Shopify backend for multiple brand clients",
      "Daily sanity checks on website and sales data",
      "Analysed sales patterns for discount strategy",
      "Identified high-performing products for ad ideation",
    ],
  },
  {
    role: "Research Analyst Intern",
    company: "Next Gen Community (NGC)",
    dateRange: "Jan 2025 – Apr 2025",
    bullets: [
      "Researched and evaluated AI models hands-on",
      "Designed prompts to assess model performance",
      "Authored structured reports on model behaviour",
    ],
  },
  {
    role: "Operations Member",
    company: "BloomBox · KJSCE",
    dateRange: "Jun 2025 – Present",
    bullets: [
      "Planning and execution of entrepreneurship events",
      "Coordinated speaker sessions, logistics, and execution",
      "Managed formal outreach with industry professionals",
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 relative">
      {/* Sticky download button */}
      <div className="fixed top-4 right-4 z-40">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-4 py-2 border border-[rgba(237,232,223,0.15)] text-warm text-[13px] rounded-lg bg-bg/80 backdrop-blur-sm hover:bg-[rgba(237,232,223,0.05)] transition-colors"
          >
            download PDF ↓
          </Link>
        </motion.div>
      </div>

      {/* Header */}
      <AnimateSection>
        <SectionLabel>// resume</SectionLabel>
        <h1 className="text-[42px] md:text-[52px] font-semibold tracking-[-0.03em] text-text-primary mt-2 mb-3">
          The full picture.
        </h1>
        <p className="text-[15px] text-text-secondary">
          What I&apos;ve built, where I&apos;ve worked, what I know.
        </p>
      </AnimateSection>

      {/* Experience */}
      <AnimateSection delay={0.08} className="mt-16">
        <p className="font-mono text-[11px] tracking-[0.12em] text-text-secondary uppercase mb-6">
          experience
        </p>
        <div className="relative pl-4 space-y-5">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent" />
          {experiences.map((exp, i) => (
            <AnimateSection key={exp.role + exp.company} delay={Math.min(i * 0.06, 0.24)}>
              <ResumeBlock
                role={exp.role}
                company={exp.company}
                dateRange={exp.dateRange}
                bullets={exp.bullets}
              />
            </AnimateSection>
          ))}
        </div>
      </AnimateSection>

      {/* Skills */}
      <AnimateSection delay={0.1} className="mt-16">
        <p className="font-mono text-[11px] tracking-[0.12em] text-text-secondary uppercase mb-6">
          skills
        </p>
        <Skills />
      </AnimateSection>
    </div>
  );
}
