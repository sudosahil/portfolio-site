"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateSection } from "@/components/AnimateSection";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";

const contactCards = [
  {
    label: "fastest response",
    value: "+91 75592 92204",
    subtext: "Usually reply within a few hours.",
    buttonLabel: "open whatsapp →",
    buttonHref: "https://wa.me/917559292204",
    variant: "warm" as const,
  },
  {
    label: "for formal enquiries",
    value: "sahil22undale@gmail.com",
    subtext: "Detailed briefs, proposals, invoices.",
    buttonLabel: "send email →",
    buttonHref: "mailto:sahil22undale@gmail.com",
    variant: "ghost" as const,
  },
  {
    label: "let's connect",
    value: "linkedin.com/in/sahil-undale",
    subtext: "For collabs and professional intros.",
    buttonLabel: "view profile →",
    buttonHref: "https://linkedin.com/in/sahil-undale",
    variant: "ghost" as const,
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Header */}
      <AnimateSection>
        <SectionLabel>// contact</SectionLabel>
        <h1 className="font-serif italic text-[36px] md:text-[40px] text-warm mt-3 mb-4 leading-[1.2]">
          Let&apos;s build something worth noticing.
        </h1>
        <p className="text-[15px] text-text-secondary leading-[1.75] max-w-lg">
          Available for web projects, freelance work, and collabs. Based in
          Mumbai. Usually responds within 24 hours.
        </p>
      </AnimateSection>

      {/* Contact cards */}
      <AnimateSection delay={0.1} className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="bg-surface rounded-xl border border-[rgba(255,255,255,0.07)] p-6 flex flex-col"
            >
              <p className="font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase mb-3">
                {card.label}
              </p>
              <p className="text-[14px] font-medium text-text-primary mb-1.5 break-all">
                {card.value}
              </p>
              <p className="text-[13px] text-text-secondary leading-[1.6] mb-5 flex-1">
                {card.subtext}
              </p>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Link
                  href={card.buttonHref}
                  target="_blank"
                  className={`block w-full text-center py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
                    card.variant === "warm"
                      ? "bg-warm text-bg"
                      : "border border-[rgba(255,255,255,0.12)] text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {card.buttonLabel}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </AnimateSection>

      {/* Full contact form */}
      <AnimateSection delay={0.15} className="mt-12">
        <ContactForm />
      </AnimateSection>
    </div>
  );
}
