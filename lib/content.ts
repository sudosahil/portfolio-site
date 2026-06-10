import type { CaseProject } from "@/components/CaseCard";

export const caseProjects: CaseProject[] = [
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
    name: "Bombay Gaming Co.",
    tagline: "Book. Play. Repeat.",
    description:
      "A full-stack booking platform for a gaming café in Ghatkopar, Mumbai — players pick a station and time slot and pay online through Razorpay to lock in a confirmed booking. A React front end backed by a Node/Express API.",
    liveUrl: "https://bombaygamingcompany.vercel.app/",
    category: "Web App",
    industry: "Entertainment",
    year: "2025",
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
  {
    name: "Siddhi Coaching Classes",
    tagline: "Success begins here.",
    description:
      "A full coaching-institute site for Siddhi's Coaching Classes in Chembur, Mumbai — covering SSC/CBSE/ICSE school batches, HSC Science & Commerce, and entrance prep (NEET, JEE, MH-CET, CA Foundation). It surfaces live batch schedules with seat availability, faculty, and results, plus an admin dashboard to manage courses, gallery, and toppers behind a login.",
    liveUrl: "https://siddhiscoachingclasses.com/",
    category: "Web App",
    industry: "Education",
    year: "2025",
  },
];

export const services = [
  {
    num: "01",
    title: "Business Websites",
    desc: "Clean, fast sites that make your business look legit from the first second — built to rank on Google and turn visitors into customers.",
    detail:
      "Clean, fast sites that make your business look legit from the first second — built to rank on Google and turn visitors into customers.",
    includes: [
      "Up to 5 pages (Home, About, Services, Gallery, Contact)",
      "Mobile-first design",
      "On-page SEO setup",
      "Contact form with WhatsApp integration",
      "Google Maps embed",
      "Delivered in 2 weeks",
    ],
  },
  {
    num: "02",
    title: "Landing Pages",
    desc: "One page, one goal. For ad campaigns, launches, and lead capture — engineered to convert.",
    detail:
      "One page, one goal. For ad campaigns, product launches, and lead capture — built to load fast and convert visitors into enquiries.",
    includes: [
      "Single-page design optimised for conversions",
      "Headline, benefits, CTA, and lead form",
      "Connected to WhatsApp or email",
      "90+ Lighthouse score",
      "Delivered in 5–7 days",
    ],
  },
  {
    num: "03",
    title: "E-commerce Stores",
    desc: "Ready-to-sell stores with product pages, cart, and payment integration. Your business online, properly.",
    detail:
      "Ready-to-sell stores with product pages, cart, and payment integration. Your catalogue online, properly.",
    includes: [
      "Product listing pages",
      "Cart and checkout flow",
      "Razorpay / Stripe payment integration",
      "Order confirmation emails",
      "Mobile-optimised throughout",
    ],
  },
  {
    num: "04",
    title: "Care & Hosting",
    desc: "Monthly hosting, updates, and peace of mind. Your site stays live, fast, and yours.",
    detail:
      "Monthly hosting, updates, and peace of mind. Your site stays live, fast, and maintained — without you having to think about it.",
    includes: [
      "Managed hosting on fast servers",
      "Monthly content updates (text, images, offers)",
      "Security monitoring",
      "Priority support via WhatsApp",
    ],
  },
];

export const stats = [
  { value: 6, suffix: "", label: "Projects shipped" },
  { value: 2, suffix: " wk", label: "Avg. build time" },
  { value: 95, suffix: "", label: "Lighthouse score" },
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
