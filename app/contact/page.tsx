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

const notes = [
  {
    num: "01",
    text: "I work with small and medium businesses across Mumbai and Pune — restaurants, service providers, clinics, schools, studios, and startups. If that sounds like you, we will get along fine.",
  },
  {
    num: "02",
    text: "Most projects are completed within two weeks of receiving all content from the client. The faster you send me what I need, the faster your site goes live.",
  },
  {
    num: "03",
    text: "Pricing starts at Rs. 15,000 for a business website and Rs. 8,000 for a landing page. If your budget is lower, tell me — I would rather have an honest conversation than waste both our time.",
  },
  {
    num: "04",
    text: "I do not take on projects I cannot deliver well. If something is outside my scope, I will tell you upfront.",
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
            Available for web projects, freelance work, and long-term retainers.
            Based in Mumbai &amp; Pune — usually replies within a few hours on
            WhatsApp.
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

      {/* Before you write */}
      <section className="mb-16">
        <SectionLabel>Before you write</SectionLabel>
        <h2 className="display text-[10vw] md:text-[5.5vw] leading-[0.9] mt-3 mb-10">
          A few things worth
          <br />
          knowing first.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {notes.map((n) => (
            <Reveal key={n.num}>
              <div className="border-t border-line pt-5">
                <span className="font-mono text-[12px] text-red">{n.num}</span>
                <p className="text-[16px] leading-[1.65] text-grey-dark mt-3 max-w-md">
                  {n.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
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
