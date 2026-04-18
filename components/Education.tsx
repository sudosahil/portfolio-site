import { SectionLabel } from "./SectionLabel";

const educationItems = [
  {
    degree: "B.Tech Electronics & Computer Engineering",
    institution: "KJ Somaiya College of Engineering, Mumbai",
    year: "2024 – 2028",
  },
  {
    degree: "Class XII (PCM, CS)",
    institution: "St. Arnolds Central School, Pune",
    year: "2024",
  },
  {
    degree: "Class X (PCM, CS)",
    institution: "Vibgyor High, Balewadi, Pune",
    year: "2021",
  },
];

export function Education() {
  return (
    <div>
      <SectionLabel>// education</SectionLabel>
      <div className="relative mt-4">
        {/* Accent timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent" />
        <div className="space-y-8 pl-6">
          {educationItems.map((item) => (
            <div key={item.degree} className="relative">
              {/* Accent dot */}
              <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-accent" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[15px] font-medium text-text-primary leading-snug">
                    {item.degree}
                  </p>
                  <p className="text-[14px] text-text-secondary mt-0.5">
                    {item.institution}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-text-secondary whitespace-nowrap mt-0.5">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
