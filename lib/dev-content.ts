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
  oneLiner: "Software developer building backend systems and full-stack web apps.",
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
  /** architecture diagram shown under the description */
  image?: { src: string; alt: string; width: number; height: number };
}

export const devProjects: DevProject[] = [
  {
    name: "NAKSH",
    kind: "Routing system · SIH 2026 final",
    year: "2026",
    description:
      "A safety-aware pedestrian routing app that finds the safest walking route, not just the fastest. A modified safety-weighted Dijkstra on PostGIS and pgRouting runs over 455,251 OpenStreetMap segments, scoring lighting, footpaths, activity, assistance and connectivity, with a p50 route time of 18.2 ms. Crowdsourced safety reports are processed asynchronously with Redis and Celery under k-anonymity. Reached the Smart India Hackathon 2026 final round.",
    stack: ["python", "fastapi", "postgresql", "redis", "flutter"],
    extraTags: ["PostGIS", "pgRouting", "Celery"],
    github: "https://github.com/sudosahil/hackathon",
  },
  {
    name: "AI Lead Pipeline",
    kind: "AI automation",
    year: "2026",
    description:
      "A daily automated pipeline that sources local businesses in Mumbai and Pune, has Gemini audit each lead's website and draft a personalised pitch, then sends throttled email and WhatsApp outreach. It runs in n8n, self-hosted on Docker, with a Neon PostgreSQL backend, deduplication on domain, phone and place ID, daily send caps with randomised delays, and a custom dashboard that tracks every lead.",
    stack: ["n8n", "gemini", "postgresql", "docker"],
    extraTags: ["Neon"],
    image: {
      src: "/projects/ai-lead-pipeline.png",
      alt: "AI lead generation pipeline: lead sourcing, deduplication, Gemini website audit, Gemini pitch writer and email/WhatsApp outreach in n8n, backed by Neon PostgreSQL and a freelancer dashboard",
      width: 2200,
      height: 1060,
    },
  },
  {
    name: "ExamMitra",
    kind: "AI automation",
    year: "2026",
    description:
      "Upload a question paper, get an answer key back. The workflow starts the moment a paper lands in a Google Drive folder, extracts the questions with OCR, generates a structured answer key with AI and files it in the matching answer-key folder, with no manual steps.",
    stack: ["googledrive"],
    extraTags: ["OCR", "LLM"],
    image: {
      src: "/projects/exammitra.png",
      alt: "ExamMitra workflow: Google Drive question papers folder, auto-trigger, OCR, AI answer key, Google Drive answer keys folder",
      width: 2200,
      height: 660,
    },
  },
  {
    name: "PMIS",
    kind: "Government platform · Atraya Technologies",
    year: "2025–2026",
    description:
      "A Program Management Information System for the Zaheerabad Industrial Area, a government project by NICDC, bringing its day-to-day project work into one platform. Co-developed in a two-developer team at Atraya Technologies, owning core modules from requirements through implementation.",
    stack: [],
    extraTags: ["RBAC", "Dashboards"],
    live: "https://pmis-gamma.vercel.app",
  },
  {
    name: "Payments Ledger",
    kind: "Backend systems",
    year: "2026",
    status: "In progress",
    description:
      "A layered payments service on a double-entry ledger, where every transfer writes debit and credit entries that sum to zero. Idempotency keys mean a retried request never double-charges, and ACID transactions with row locking keep balances exact under concurrency. Tests are planned with JUnit 5, Testcontainers and a 1,000-request k6 load test.",
    stack: ["java", "springboot", "postgresql", "docker"],
    extraTags: ["Flyway"],
  },
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
];
