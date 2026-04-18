"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateSection } from "@/components/AnimateSection";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    name: "Personal Portfolio Website",
    type: "Web Studio",
    year: "2025",
    description:
      "A personal portfolio site focused on local Indian businesses. Designed to communicate speed and quality. Built to rank on Google and convert local business owners.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "#",
  },
  {
    name: "Client E-commerce Store",
    type: "E-commerce",
    year: "2025",
    description:
      "A full Shopify build for a D2C brand. Included product page optimization, conversion-focused layout, and daily performance tracking. Helped identify high-performing SKUs for ad spend.",
    techStack: ["Shopify", "Liquid", "JavaScript", "Analytics"],
  },
  {
    name: "Local Business Landing Page",
    type: "Landing Page",
    year: "2024",
    description:
      "A high-converting single-page site for a Mumbai-based service business. Focused on mobile experience, WhatsApp CTAs, and Google ranking for local search terms.",
    techStack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
  },
  {
    name: "AI Model Evaluation Dashboard",
    type: "Research Tool",
    year: "2025",
    description:
      "Internal tool built during research internship at NGC. Tracked AI model performance metrics from structured prompt evaluations. Enabled the team to compare models side by side.",
    techStack: ["Python", "React", "SQLite", "Charts.js"],
  },
  {
    name: "Government Client System",
    type: "Business System",
    year: "2025",
    description:
      "End-to-end full-stack system for a government-sector client at Atraya Technologies. Built with role-based access control, formal requirement specs, and full SDLC from analysis to deployment.",
    techStack: ["Node.js", "React", "PostgreSQL", "REST API"],
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <AnimateSection>
        <SectionLabel>// work</SectionLabel>
        <h1 className="text-[42px] md:text-[52px] font-semibold tracking-[-0.03em] text-text-primary mt-2 mb-3">
          Things I&apos;ve shipped.
        </h1>
        <p className="text-[15px] text-text-secondary">
          A few projects worth talking about.
        </p>
      </AnimateSection>

      {/* Projects */}
      <div className="mt-12">
        {projects.map((p, i) => (
          <AnimateSection key={p.name} delay={Math.min(i * 0.06, 0.3)}>
            <ProjectCard
              index={i + 1}
              name={p.name}
              type={p.type}
              year={p.year}
              description={p.description}
              techStack={p.techStack}
              liveUrl={p.liveUrl}
              flip={i % 2 !== 0}
            />
          </AnimateSection>
        ))}
      </div>

      {/* Bottom CTA */}
      <AnimateSection delay={0.1}>
        <div className="mt-20 text-center">
          <p className="text-[16px] text-text-secondary mb-5">Got a project in mind?</p>
          <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-warm text-bg text-[14px] font-medium rounded-lg"
            >
              start a project →
            </Link>
          </motion.div>
        </div>
      </AnimateSection>
    </div>
  );
}
