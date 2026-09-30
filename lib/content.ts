import type { CaseProject } from "@/components/CaseCard";

export const caseProjects: CaseProject[] = [
  {
    name: "PMIS",
    tagline: "Projects, procurement, payments — one system.",
    description:
      "Centralized project monitoring platform built to orchestrate capital allocation, multi-tier milestone deadlines, and role-based access control across distributed teams.",
    liveUrl: "https://pmis-gamma.vercel.app",
    category: "Enterprise SaaS",
    industry: "Internal Tooling",
    year: "2026",
    tags: ["Enterprise SaaS", "Internal Tooling", "Full Stack"],
  },
  {
    name: "With Love & Regards",
    tagline: "Flowers & gifting, engineered to convert.",
    description:
      "Custom high-converting storefront with optimized catalog architecture, streamlined checkout flows, and automated payment pipelines engineered to scale sales volume.",
    liveUrl: "https://test.onlineflowersandcakes.com",
    category: "E-Commerce",
    industry: "Custom Checkout",
    year: "2026",
    tags: ["E-Commerce", "Custom Checkout", "Brand Platform"],
  },
  {
    name: "Bombay Gaming Co.",
    tagline: "Book. Play. Repeat.",
    description:
      "Full-stack station reservation engine. Integrated custom slot-locking logic and Razorpay checkout, turning manual WhatsApp booking chaos into an automated revenue pipeline.",
    liveUrl: "https://bombaygamingcompany.vercel.app/",
    category: "Web Application",
    industry: "Fintech Integration",
    year: "2025",
    tags: ["Web Application", "Booking System", "Fintech Integration"],
  },
  {
    name: "Siddhi Coaching Classes",
    tagline: "Success begins here.",
    description:
      "Complete academic portal featuring dynamic batch enrollment tracking, topper result showcases, and an authenticated administrative dashboard for real-time curriculum management.",
    liveUrl: "https://siddhiscoachingclasses.com/",
    category: "Educational Portal",
    industry: "CMS",
    year: "2025",
    tags: ["Educational Portal", "CMS", "Full Stack"],
  },
  {
    name: "Samrat Driving School",
    tagline: "Learn to drive.",
    description:
      "A marketing site for a driving school running since 2000 in Chhatrapati Sambhajinagar. It lays out the 15-day, 120 km car-training course, walks visitors through how it works, and routes every enquiry straight to WhatsApp — backed by a wall of 4.8-star Google reviews.",
    liveUrl: "https://samrat-driving-school-zc3d.vercel.app/",
    category: "Business",
    industry: "Education",
    year: "2024",
  },
  {
    name: "Earthen Routes",
    tagline: "Food that heals.",
    description:
      "The home for a volunteer-run community farm at TATA ACTREC that grows organic food for children in cancer care. It tells the story, shows the work — kitchen gardens, land projects, and workshops — and gives visitors clear ways to volunteer or donate.",
    liveUrl: "https://earthenroutes.in/",
    category: "Non-profit",
    industry: "Community",
    year: "2024",
  },
  {
    name: "TheoremLabs",
    tagline: "Innovation studio.",
    description:
      "A corporate site for a technology and innovation studio. Dark, motion-led, and confident, it frames the studio's work and capabilities for prospective partners and clients.",
    liveUrl: "https://theoremlabs-xi.vercel.app/",
    category: "Corporate",
    industry: "Technology",
    year: "2025",
  },
];

/** The 4 flagship builds — commercial and enterprise scope, shown on the homepage. */
export const flagshipProjects = caseProjects.filter((p) => p.tags);

export const services = [
  {
    num: "01",
    title: "Custom Web Applications",
    desc: "Scalable, database-backed web platforms built with Next.js, Node, and PostgreSQL.",
    detail:
      "Scalable, database-backed web platforms built with Next.js, Node, and PostgreSQL — architected for growing businesses, not templated for small ones.",
    includes: [
      "Custom data models and relational schema design",
      "Full-stack build — React/Next.js front end, Node/Express API",
      "Role-based access control and authenticated dashboards",
      "PostgreSQL or MySQL, properly indexed and normalized",
      "Deployed on production infrastructure, not a page builder",
    ],
  },
  {
    num: "02",
    title: "E-Commerce & Transaction Pipelines",
    desc: "Full store architecture, frictionless checkout, and custom payment integrations (Razorpay/Stripe).",
    detail:
      "Full store architecture, frictionless checkout, and custom payment integrations — built to move inventory and close sales, not just look like a shop.",
    includes: [
      "Custom catalog and checkout architecture",
      "Razorpay / Stripe integration with server-side price validation",
      "Cart, coupon, and abandoned-checkout recovery logic",
      "Order management and automated confirmation emails",
      "Built for conversion, not just for browsing",
    ],
  },
  {
    num: "03",
    title: "Enterprise Tooling & Dashboards",
    desc: "Internal operations systems, PMIS dashboards, and administrative portals.",
    detail:
      "Internal operations systems, PMIS-style dashboards, and administrative portals that replace spreadsheets and WhatsApp chaos with a real workflow engine.",
    includes: [
      "Multi-role approval chains and audit trails",
      "Milestone tracking, budgets, and progress reporting",
      "Admin panels built for non-technical operators",
      "Structured around how your team actually works",
      "Scoped to real operational requirements, not templates",
    ],
  },
  {
    num: "04",
    title: "Managed Cloud & Infrastructure",
    desc: "Production deployment on Vercel/AWS, automated backups, and 99.9% uptime maintenance.",
    detail:
      "Production deployment on Vercel or AWS, automated backups, and 99.9% uptime maintenance — your system stays live, fast, and yours.",
    includes: [
      "Production deployment on Vercel or AWS",
      "Automated backups and environment management",
      "Uptime monitoring and performance audits",
      "Direct engineer support — no ticket queue",
      "Priority response via WhatsApp",
    ],
  },
];

export const stats = [
  { value: caseProjects.length, suffix: "+", label: "Production Systems Shipped" },
  { value: 95, suffix: "+", label: "Lighthouse Performance Score" },
  { value: 2, suffix: " Wk", label: "Average Production Sprint" },
  { value: 100, suffix: "%", label: "Direct Engineer Delivery (No Outsourcing)" },
];

/** Business-capability chips for the homepage value marquee. */
export const capabilities = [
  "Custom Web Applications",
  "Razorpay & Stripe Pipelines",
  "Enterprise Dashboards",
  "High-Conversion Architecture",
  "Automated Workflows",
  "Zero Agency Overhead",
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
