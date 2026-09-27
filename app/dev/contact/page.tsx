import type { Metadata } from "next";
import { DevReveal } from "@/components/dev/DevReveal";
import { DevSectionLabel } from "@/components/dev/DevSectionLabel";
import { CopyEmail } from "@/components/dev/CopyEmail";
import { devProfile } from "@/lib/dev-content";

export const metadata: Metadata = { title: "Contact" };

export default function DevContact() {
  const cards = [
    { label: "LinkedIn", value: devProfile.linkedinHandle, href: devProfile.linkedin, icon: "↗", external: true },
    { label: "GitHub", value: devProfile.githubHandle, href: devProfile.github, icon: "↗", external: true },
    { label: "Résumé", value: "sahil-undale.pdf", href: devProfile.resume, icon: "↓", external: false },
  ];

  return (
    <div className="mx-auto flex min-h-[calc(100svh-72px-120px)] max-w-[1440px] flex-col px-5 pb-24 pt-28 md:px-16 md:pb-[120px] md:pt-[200px]">
      <DevReveal on="mount">
        <DevSectionLabel>04 — Contact</DevSectionLabel>
      </DevReveal>
      <DevReveal on="mount" delay={0.12} className="mt-12">
        <h1 className="sr-only">Contact</h1>
        <CopyEmail email={devProfile.email} />
      </DevReveal>
      <DevReveal on="mount" delay={0.26}>
        <p className="mt-7 text-[19px] text-[var(--dev-t2)]">Email is the fastest way to reach me.</p>
      </DevReveal>

      <DevReveal on="mount" delay={0.4} className="mt-20 grid grid-cols-1 gap-4 md:mt-auto md:grid-cols-3 md:pt-24">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="dev-card flex h-[160px] flex-col justify-between rounded-[14px] border border-[var(--dev-line)] bg-[var(--dev-card)] p-7 md:h-[180px]"
          >
            <div className="dev-mono flex justify-between text-[var(--dev-t3)]">
              <span>{c.label}</span>
              <span aria-hidden className={`dev-arrow ${c.icon === "↓" ? "text-[var(--dev-a)]" : ""}`}>
                {c.icon}
              </span>
            </div>
            <span className="text-[26px] tracking-[-0.02em]">{c.value}</span>
          </a>
        ))}
      </DevReveal>
    </div>
  );
}
