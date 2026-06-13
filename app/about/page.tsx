import { Reveal, RevealLines } from "@/components/Reveal";
import { LineDivider } from "@/components/LineDivider";
import { Marquee } from "@/components/Marquee";
import { SectionLabel } from "@/components/SectionLabel";
import { Education } from "@/components/Education";
import { skills } from "@/lib/content";

const currently = [
  { label: "Location", value: "Mumbai & Pune, India" },
  { label: "Role", value: "Director · TheoremLabs India" },
  { label: "Status", value: "Available for projects" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-5 md:px-8 pt-28 md:pt-36 pb-12">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>
        <h1 className="display mt-5 text-[14vw] md:text-[11vw] leading-[0.84] tracking-tighter2">
          <RevealLines lines={["Hi, I'm", "Sahil."]} />
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
            <p className="text-[20px] md:text-[26px] leading-[1.4] tracking-tight">
              A web developer from Mumbai &amp; Pune. I build websites for
              businesses that
              want to look credible and grow online — and I genuinely care about
              the people behind them. Outside of code I&apos;m running events,
              poking at AI tools, and chasing the next thing to build.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Skills marquee */}
      <div className="bg-ink text-paper py-4 border-y border-line">
        <Marquee duration={28}>
          {skills.map((s) => (
            <span key={s} className="flex items-center">
              <span className="display text-[36px] px-6">{s}</span>
              <span className="text-red text-[24px]">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Currently */}
      <section className="px-5 md:px-8 py-16 md:py-20">
        <SectionLabel>Currently</SectionLabel>
        <LineDivider className="mt-6 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currently.map((c) => (
            <Reveal key={c.label}>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-grey mb-2">
                  {c.label}
                </p>
                <p className="text-[22px] md:text-[26px] font-medium tracking-tight">
                  {c.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <Education />
      </section>
    </div>
  );
}
