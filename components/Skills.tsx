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
      "E-commerce Operations",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
      {skillGroups.map((group) => (
        <div key={group.label} className="border-t border-line pt-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-grey mb-3">
            {group.label}
          </p>
          <ul className="space-y-1.5">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="text-[18px] md:text-[20px] font-medium tracking-tight"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
