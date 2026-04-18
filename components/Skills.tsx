import { Tag } from "./Tag";

const skillGroups = [
  {
    label: "development",
    skills: [
      "Full-Stack Development",
      "Backend Development",
      "Database Management",
      "Data Analysis",
    ],
  },
  {
    label: "ai & research",
    skills: ["AI Tools & Prompt Engineering", "Research & Analytical Skills"],
  },
  {
    label: "operations & marketing",
    skills: [
      "E-commerce Platform Operations",
      "Event Coordination",
      "Performance Marketing",
    ],
  },
  {
    label: "general",
    skills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Time Management",
    ],
  },
];

export function Skills() {
  return (
    <div className="space-y-6">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <p className="font-mono text-[10px] tracking-[0.12em] text-text-secondary uppercase mb-3">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Tag key={skill} variant="muted">
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
