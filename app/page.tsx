"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateSection } from "@/components/AnimateSection";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectRow } from "@/components/ProjectCard";
import { HookForm } from "@/components/HookForm";
import { ScrollyHero } from "@/components/ScrollyHero";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number,number,number,number] },
  },
};


const services = [
  {
    num: "01",
    title: "Business Websites",
    desc: "Clean fast sites that make your business look legit from the first second. Built to rank on Google and convert visitors.",
  },
  {
    num: "02",
    title: "Landing Pages",
    desc: "One page. One goal. Whether you're running ads, launching something, or capturing leads — built to convert.",
  },
  {
    num: "03",
    title: "E-commerce Stores",
    desc: "Ready-to-sell stores with product pages, cart, payment integration. Your business online properly.",
  },
  {
    num: "04",
    title: "Maintenance & Hosting",
    desc: "Monthly hosting, updates, and peace of mind. Your site stays live and fast.",
  },
];

const projects = [
  { name: "Personal Portfolio", type: "Web Studio", year: "2025" },
  { name: "Client E-commerce Store", type: "E-commerce", year: "2025" },
  { name: "Local Business Site", type: "Business", year: "2024" },
];

export default function Home() {
  return (
    <div>
      <ScrollyHero />

      {/* ─── Hook ─── */}
      <section className="bg-surface mt-20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Left */}
            <div className="flex-1 md:w-[65%]">
              <AnimateSection>
                <SectionLabel>// for business owners</SectionLabel>
                <h2 className="font-serif italic text-[30px] md:text-[36px] text-warm leading-[1.25] mt-3 mb-5">
                  Does your business deserve a better web presence?
                </h2>
                <p className="text-[15px] text-text-secondary leading-[1.75] mb-8 max-w-lg">
                  Most local businesses are invisible online. Not because they&apos;re
                  not good — because their website doesn&apos;t show it. Let&apos;s change
                  that.
                </p>
              </AnimateSection>
              <AnimateSection delay={0.08}>
                <div className="space-y-3">
                  {[
                    "Based in Mumbai, building for Indian businesses",
                    "Fast turnaround — most sites done in 2 weeks",
                    "You talk to me directly. Not an account manager.",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#8b8fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="font-mono text-[11px] text-text-secondary">{t}</p>
                    </div>
                  ))}
                </div>
              </AnimateSection>
            </div>
            {/* Right — HookForm */}
            <AnimateSection delay={0.12} className="w-full md:w-[35%]">
              <HookForm />
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <AnimateSection>
          <SectionLabel>// what i do</SectionLabel>
          <h2 className="text-[32px] font-semibold tracking-[-0.02em] text-text-primary mt-1 mb-1">
            Here&apos;s what I build.
          </h2>
          <p className="text-[15px] text-text-secondary mb-10">
            Could do it for your brand too.
          </p>
        </AnimateSection>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 border border-[rgba(255,255,255,0.07)]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(28,28,36,1)", scale: 1.005 }}
              transition={{ duration: 0.15 }}
              className={`p-8 ${i % 2 === 0 ? "md:border-r" : ""} ${i < 2 ? "border-b" : ""} border-[rgba(255,255,255,0.07)]`}
            >
              <p className="font-mono text-[11px] text-text-secondary mb-4">{s.num}</p>
              <h3 className="text-[16px] font-medium text-text-primary mb-3">{s.title}</h3>
              <p className="text-[14px] text-text-secondary leading-[1.75]">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="text-[14px] text-accent hover:text-text-primary transition-colors"
          >
            Not sure what you need? Let&apos;s figure it out →
          </Link>
        </div>
      </section>

      {/* ─── Work Preview ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
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
                href="/work"
              />
            ))}
          </div>
        </AnimateSection>
        <AnimateSection delay={0.15}>
          <div className="mt-8">
            <Link
              href="/work"
              className="text-[14px] text-accent hover:text-text-primary transition-colors"
            >
              view all work →
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
