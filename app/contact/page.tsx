import { Reveal, RevealLines } from "@/components/Reveal";
import { LineDivider } from "@/components/LineDivider";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";

const channels = [
  {
    label: "Fastest response",
    value: "+91 75592 92204",
    sub: "WhatsApp — usually within a few hours.",
    href: "https://wa.me/917559292204",
  },
  {
    label: "Formal enquiries",
    value: "sahil22undale@gmail.com",
    sub: "Briefs, proposals, invoices.",
    href: "mailto:sahil22undale@gmail.com",
  },
  {
    label: "Let's connect",
    value: "linkedin.com/in/sahil-undale",
    sub: "Collabs and professional intros.",
    href: "https://linkedin.com/in/sahil-undale",
  },
];

export default function ContactPage() {
  return (
    <div className="px-5 md:px-8 pb-16 md:pb-24">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
        </Reveal>
        <h1 className="display mt-5 text-[15vw] md:text-[12vw] leading-[0.84] tracking-tighter2">
          <RevealLines lines={["Let's build"]} />
          <span className="text-red">
            <RevealLines lines={["something."]} delay={0.14} />
          </span>
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-8 text-[18px] md:text-[22px] leading-[1.4] tracking-tight max-w-xl text-grey-dark">
            Available for web projects, freelance work, and collabs. Based in
            Mumbai &amp; Pune — usually replies within 24 hours.
          </p>
        </Reveal>
      </section>

      {/* Channels */}
      <section className="mb-16">
        <LineDivider />
        {channels.map((c) => (
          <Reveal key={c.label}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="open"
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline py-7 border-b border-line"
            >
              <span className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.16em] text-grey">
                {c.label}
              </span>
              <span className="md:col-span-6 text-[24px] md:text-[34px] font-medium tracking-tight break-words group-hover:text-red transition-colors">
                {c.value}
              </span>
              <span className="md:col-span-3 md:text-right text-[14px] text-grey-dark">
                {c.sub}
              </span>
            </a>
          </Reveal>
        ))}
      </section>

      {/* Form */}
      <section>
        <SectionLabel>Or fill this out</SectionLabel>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
