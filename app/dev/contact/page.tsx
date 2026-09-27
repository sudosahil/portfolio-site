import type { Metadata } from "next";
import { Reveal, RevealLines } from "@/components/Reveal";
import { LineDivider } from "@/components/LineDivider";
import { SectionLabel } from "@/components/SectionLabel";
import { devProfile } from "@/lib/dev-content";

export const metadata: Metadata = { title: "Contact" };

const channels = [
  { label: "Email", value: devProfile.email, sub: "The fastest way to reach me.", href: `mailto:${devProfile.email}`, external: false },
  { label: "LinkedIn", value: devProfile.linkedinHandle, sub: "Profile and professional history.", href: devProfile.linkedin, external: true },
  { label: "GitHub", value: devProfile.githubHandle, sub: "Code and repositories.", href: devProfile.github, external: true },
  { label: "Résumé", value: "Download PDF", sub: "One page, up to date.", href: devProfile.resume, external: true },
];

export default function DevContact() {
  return (
    <div className="px-5 md:px-8 pb-16 md:pb-24">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
        </Reveal>
        <h1 className="display mt-5 text-[15vw] md:text-[12vw] leading-none tracking-tighter2">
          <RevealLines lines={["Get in"]} />
          <span className="text-blue">
            <RevealLines lines={["touch."]} delay={0.14} />
          </span>
        </h1>
      </section>

      {/* Channels */}
      <section>
        <LineDivider />
        {channels.map((c) => (
          <Reveal key={c.label}>
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              data-cursor="open"
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline py-7 border-b border-line"
            >
              <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.16em] text-grey">{c.label}</span>
              <span className="md:col-span-6 text-[24px] md:text-[34px] font-medium tracking-tight break-words group-hover:text-blue transition-colors">
                {c.value}
              </span>
              <span className="md:col-span-3 md:text-right text-[14px] text-grey-dark">{c.sub}</span>
            </a>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
