/**
 * Content for the recruiter-facing /dev track.
 * Kept separate from lib/content.ts so the business site's copy is untouched.
 *
 * TODO before publishing /dev:
 *  - naksh.role: your role within the 6-person team
 *  - PMIS: stack, what you owned, an outcome metric
 *  - Bombay Gaming Co.: stack (only tags that are confirmed are listed)
 *  - Confirm the "07 systems shipped" figure and the skills list
 */

export const devProfile = {
  name: "Sahil Undale",
  title: "Software Engineer",
  location: "Mumbai, IN",
  coords: "19.07°N 72.87°E",
  oneLiner: "I build full-stack systems, backends and applied-AI tools.",
  email: "sahil22undale@gmail.com",
  linkedin: "https://linkedin.com/in/sahil-undale",
  linkedinHandle: "in/sahil-undale",
  github: "https://github.com/sudosahil",
  githubHandle: "sudosahil",
  resume: "/resume.pdf",
};

export const devNav = [
  { href: "/dev", label: "Index" },
  { href: "/dev/about", label: "About" },
  { href: "/dev/experience", label: "Experience" },
  { href: "/dev/work", label: "Work" },
  { href: "/dev/contact", label: "Contact" },
];

export const devTerminal = [
  ["role", "software developer"],
  ["at", "atraya technologies"],
  ["studying", "b.tech ece · kjsce · '28"],
  ["focus", "systems · backend · ai"],
];

export const devMetrics = [
  { value: "07", unit: "", label: "Production systems shipped", accent: false },
  { value: "12.7", unit: " ms", label: "Mean route time · 137,686-edge graph", accent: true },
  { value: "04", unit: "", label: "Roles across dev, research & ops", accent: false },
];

export const devFacts = [
  { k: "Now", v: "Software Developer, Atraya Technologies" },
  { k: "Building", v: "LUME — multi-tenant lead management" },
  { k: "Interests", v: "System architecture, software design, applied AI" },
  { k: "Languages", v: "English, Hindi" },
];

export const devEducation = [
  { year: "2021", title: "Class X", school: "Vibgyor High, Balewadi, Pune", current: false },
  { year: "2024", title: "Class XII — PCM, CS", school: "St. Arnold's Central School, Pune", current: false },
  { year: "2024 — 2028", title: "B.Tech, Electronics & Computer Engineering", school: "KJ Somaiya College of Engineering, Mumbai", current: true },
];

export const devRoles = [
  {
    current: true,
    dates: "May 2025 — Present",
    place: "Remote",
    role: "Software Developer",
    company: "Atraya Technologies",
    bullets: [
      "End-to-end business systems for government and private-sector clients.",
      "Role-based access and approval workflows, built from formal specifications through deployment.",
    ],
  },
  {
    current: true,
    dates: "Jun 2025 — Present",
    place: "Mumbai",
    role: "Events & Operations",
    company: "BloomBox — E-Cell, KJSCE",
    bullets: ["Planning and on-ground execution of entrepreneurship events and speaker sessions."],
  },
  {
    current: false,
    dates: "May — Jul 2025",
    place: "Pune",
    role: "Performance Marketing Intern",
    company: "RevBoosters",
    bullets: [
      "Shopify back-end operations and daily data-integrity checks across brand clients.",
      "Sales-pattern analysis to inform discount strategy.",
    ],
  },
  {
    current: false,
    dates: "Jan — Apr 2025",
    place: "Mumbai",
    role: "Research Analyst Intern",
    company: "Next Gen Community",
    bullets: ["Hands-on evaluation of AI models; prompt design to probe performance and limits."],
  },
];

export const devSkills = [
  { cat: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { cat: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion", "Flutter"] },
  { cat: "Backend", items: ["Node.js", "Express", "FastAPI", "REST", "Razorpay"] },
  { cat: "Data", items: ["PostgreSQL", "PostGIS", "MySQL", "Prisma", "Neon"] },
  { cat: "Infra", items: ["Vercel", "AWS", "Docker", "n8n", "Git"] },
  { cat: "AI & analysis", items: ["LLM evaluation", "Prompt design", "Gemini API", "osmnx"] },
];

export interface DevProject {
  slug: string;
  name: string;
  kind: string;
  year: string;
  line: string;
  metric?: string;
  metricLabel?: string;
  stack: string[];
  /** internal case-study route, or an external link */
  href: string;
  external: boolean;
}

export const devProjects: DevProject[] = [
  {
    slug: "naksh",
    name: "NAKSH",
    kind: "Research system",
    year: "2026",
    line: "Safety-aware pedestrian routing.",
    metric: "12.7 ms",
    metricLabel: "Mean route · 137,686 edges",
    stack: ["Python", "FastAPI", "PostGIS", "Flutter"],
    href: "/dev/work/naksh",
    external: false,
  },
  {
    slug: "pmis",
    name: "PMIS",
    kind: "Enterprise SaaS",
    year: "2026",
    line: "Project monitoring for distributed teams.",
    // TODO: metric + metricLabel, confirmed stack
    stack: ["RBAC"],
    href: "https://pmis-gamma.vercel.app",
    external: true,
  },
  {
    slug: "bombay-gaming",
    name: "Bombay Gaming Co.",
    kind: "Web application",
    year: "2025",
    line: "Reservation engine with payments.",
    metric: "Slot-locked",
    metricLabel: "No station sold twice",
    stack: ["Razorpay", "Vercel"],
    href: "https://bombaygamingcompany.vercel.app/",
    external: true,
  },
  {
    slug: "lead-pipeline",
    name: "Lead pipeline",
    kind: "Automation",
    year: "2026",
    line: "Sourcing, audit and outreach engine.",
    metric: "3-key dedupe",
    metricLabel: "Domain · phone · place_id",
    stack: ["n8n", "Neon", "Gemini"],
    href: "https://github.com/sudosahil",
    external: true,
  },
];

export const naksh = {
  tagline: "Safety-aware pedestrian routing for Indian cities.",
  year: "2026",
  context: "Smart India Hackathon 2026 — final round",
  role: "Team of 6", // TODO: add your role, e.g. "Routing & data lead · team of 6"
  repo: "https://github.com/sudosahil/hackathon",
  repoLabel: "sudosahil/hackathon",
  problem: [
    "Shortest-path routing ignores how safe a street is —",
    "and most Indian cities publish little of the data needed to score one.",
  ],
  architectureIntro:
    "Each street edge gets a safety cost — length scaled by risk penalties, less safety bonuses — that shifts with time of day. A modified A* minimises it over a graph held in memory.",
  pipeline: [
    { tag: "ingest", title: "Open data", sub: "OSM streets · Overture venues · Govt. police data" },
    { tag: "build", title: "Walk graph", sub: "osmnx · 50,493 nodes" },
    { tag: "score", title: "Cost model", sub: "risk × length − bonuses, by hour" },
    { tag: "route", title: "Modified A*", sub: "graph held in memory" },
    { tag: "serve", title: "API", sub: "FastAPI · PostGIS" },
    { tag: "client", title: "Mobile app", sub: "Flutter · Android" },
  ],
  owned: [
    { title: "Data audit", body: "Tested every candidate source; cut the ones that couldn't vary route to route." },
    { title: "Cost model & routing", body: "Per-edge safety cost and a time-of-day vitality prior fitted on real opening hours." },
    { title: "Evaluation", body: "Divergence, layer ablation and face-validity checks across three wards." },
  ],
  outcome: [
    { value: "12.7", unit: " ms", label: "Mean route time", accent: true },
    { value: "36.1", unit: " ms", label: "p99 route time", accent: false },
    { value: "137,686", unit: "", label: "Edges · Greater Mumbai", accent: false },
    { value: "85.8", unit: " %", label: "Routes diverge from shortest", accent: false },
  ],
};
