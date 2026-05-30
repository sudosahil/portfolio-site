import { SectionLabel } from "./SectionLabel";
import { LineDivider } from "./LineDivider";
import { Reveal } from "./Reveal";
import { education } from "@/lib/content";

export function Education() {
  return (
    <div>
      <SectionLabel>Education</SectionLabel>
      <LineDivider className="mt-6" />
      <div>
        {education.map((item) => (
          <Reveal key={item.degree}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline py-6 border-b border-line">
              <p className="md:col-span-7 text-[20px] md:text-[24px] font-medium tracking-tight leading-snug">
                {item.degree}
              </p>
              <p className="md:col-span-4 text-[15px] text-grey-dark">
                {item.institution}
              </p>
              <span className="md:col-span-1 md:text-right font-mono text-[12px] text-grey whitespace-nowrap">
                {item.year}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
