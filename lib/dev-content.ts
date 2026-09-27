/**
 * Content for the recruiter-facing /dev track (Home · Résumé · Projects · Contact).
 * Kept separate from lib/content.ts so the business site's copy is untouched.
 *
 * TODO: add Mini Raft's GitHub URL, and PMIS's repo + stack if public.
 */
import type { StackKey } from "./dev-stack";

export const devProfile = {
  name: "Sahil Undale",
  title: "Software Engineer",
  location: "Mumbai, IN",
  oneLiner: "Software engineering student at K J Somaiya, building backend systems and full-stack web apps.",
  email: "sahil22undale@gmail.com",
  linkedin: "https://linkedin.com/in/sahil-undale",
  linkedinHandle: "linkedin.com/in/sahil-undale",
  github: "https://github.com/sudosahil",
  githubHandle: "github.com/sudosahil",
  resume: "/resume.pdf",
};

export const devNav = [
  { href: "/dev", label: "Home" },
  { href: "/dev/resume", label: "Résumé" },
  { href: "/dev/projects", label: "Projects" },
  { href: "/dev/contact", label: "Contact" },
];

export const devSocials = [
  { href: devProfile.github, label: "GitHub" },
  { href: devProfile.linkedin, label: "LinkedIn" },
  { href: `mailto:${devProfile.email}`, label: "Email" },
];

/** Tech stack by category — rendered with logos. */
export const devStack: { label: string; items: StackKey[] }[] = [
  { label: "Languages", items: ["java", "typescript", "javascript", "python"] },
  { label: "Frontend", items: ["react", "nextjs", "tailwind", "framer", "flutter"] },
  { label: "Backend & data", items: ["nodejs", "express", "fastapi", "postgresql", "mysql", "prisma"] },
  { label: "Tooling", items: ["docker", "git", "vercel", "n8n"] },
];

export interface DevProject {
  name: string;
  kind: string;
  year: string;
  status?: string;
  description: string;
  stack: StackKey[];
  /** stack items without a logo */
  extraTags?: string[];
  github?: string;
  live?: string;
}

export const devProjects: DevProject[] = [
  {
    name: "Mini Raft",
    kind: "Distributed systems",
    year: "2026",
    status: "In progress",
    description:
      "A replicated key-value store in Java built on the Raft consensus algorithm — leader election and log replication, so a cluster of nodes agrees on one log even when some of them fail.",
    stack: ["java"],
    // github: "https://github.com/sudosahil/…",
  },
  {
    name: "NAKSH",
    kind: "Research system",
    year: "2026",
    description:
      "Safety-aware pedestrian routing for Indian cities. Every street edge gets a time-of-day safety cost and a modified A* finds the route — 12.7 ms on average across a 137,686-edge Greater Mumbai graph. Reached the Smart India Hackathon 2026 final round.",
    stack: ["python", "fastapi", "postgresql", "flutter"],
    extraTags: ["osmnx", "PostGIS"],
    github: "https://github.com/sudosahil/hackathon",
  },
  {
    name: "PMIS",
    kind: "Enterprise SaaS",
    year: "2026",
    description:
      "A centralised project-monitoring platform for capital allocation, multi-tier milestone deadlines and role-based access control across distributed teams.",
    stack: [],
    extraTags: ["RBAC", "Dashboards"],
    live: "https://pmis-gamma.vercel.app",
  },
];
