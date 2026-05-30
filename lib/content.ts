import type { CaseProject } from "@/components/CaseCard";

export const caseProjects: CaseProject[] = [
  {
    name: "Samrat Driving School",
    tagline: "Learn to drive.",
    liveUrl: "https://samrat-driving-school-zc3d.vercel.app/",
    category: "Business",
    industry: "Education",
    year: "2024",
  },
  {
    name: "Bombay Gaming Co.",
    tagline: "Book. Play. Repeat.",
    liveUrl: "https://bombaygamingcompany.vercel.app/",
    category: "Web App",
    industry: "Entertainment",
    year: "2025",
  },
  {
    name: "Earthen Routes",
    tagline: "Food that heals.",
    liveUrl: "https://earthenroutes.in/",
    category: "Non-profit",
    industry: "Community",
    year: "2024",
  },
  {
    name: "TheoremLabs",
    tagline: "Innovation studio.",
    liveUrl: "https://theoremlabs-xi.vercel.app/",
    category: "Corporate",
    industry: "Technology",
    year: "2025",
  },
];

export const services = [
  {
    num: "01",
    title: "Business Websites",
    desc: "Clean, fast sites that make your business look legit from the first second — built to rank on Google and turn visitors into customers.",
  },
  {
    num: "02",
    title: "Landing Pages",
    desc: "One page, one goal. For ad campaigns, launches, and lead capture — engineered to convert.",
  },
  {
    num: "03",
    title: "E-commerce Stores",
    desc: "Ready-to-sell stores with product pages, cart, and payment integration. Your business online, properly.",
  },
  {
    num: "04",
    title: "Care & Hosting",
    desc: "Monthly hosting, updates, and peace of mind. Your site stays live, fast, and yours.",
  },
];

export const stats = [
  { value: 5, suffix: "", label: "Projects shipped" },
  { value: 2, suffix: " wk", label: "Avg. build time" },
  { value: 100, suffix: "", label: "Lighthouse score" },
];

export const skills = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
  "Shopify",
  "Vercel",
];

export const experiences = [
  {
    role: "Software Developer",
    company: "Atraya Technologies",
    dateRange: "May 2025 — Present",
    bullets: [
      "End-to-end development of business systems for government and private-sector clients",
      "Backend, frontend, and database development from formal client requirements",
      "Translated business needs into scalable workflows with role-based access",
      "Full SDLC — requirement analysis to deployment",
    ],
  },
  {
    role: "Performance Marketing Intern",
    company: "RevBoosters",
    dateRange: "May 2025 — Jul 2025",
    bullets: [
      "Managed Shopify backend for multiple brand clients",
      "Daily sanity checks on website and sales data",
      "Analysed sales patterns for discount strategy",
      "Identified high-performing products for ad ideation",
    ],
  },
  {
    role: "Research Analyst Intern",
    company: "Next Gen Community (NGC)",
    dateRange: "Jan 2025 — Apr 2025",
    bullets: [
      "Researched and evaluated AI models hands-on",
      "Designed prompts to assess model performance",
      "Authored structured reports on model behaviour",
    ],
  },
  {
    role: "Operations Member",
    company: "BloomBox · KJSCE",
    dateRange: "Jun 2025 — Present",
    bullets: [
      "Planning and execution of entrepreneurship events",
      "Coordinated speaker sessions, logistics, and execution",
      "Managed formal outreach with industry professionals",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech Electronics & Computer Engineering",
    institution: "KJ Somaiya College of Engineering, Mumbai",
    year: "2024 — 2028",
  },
  {
    degree: "Class XII (PCM, CS)",
    institution: "St. Arnolds Central School, Pune",
    year: "2024",
  },
  {
    degree: "Class X",
    institution: "Vibgyor High, Balewadi, Pune",
    year: "2021",
  },
];
