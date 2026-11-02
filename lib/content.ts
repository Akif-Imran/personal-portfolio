/**
 * Single source of truth for every piece of copy on the site.
 * Edit this file to update the portfolio — components only render it.
 */

export const profile = {
  name: "Akif Imran",
  firstName: "Akif",
  role: "Senior Full-Stack Engineer",
  focus: "React · Next.js · Node.js · Real-time systems",
  location: "Rawalpindi, Pakistan",
  timeZone: "Asia/Karachi",
  timeZoneLabel: "PKT · UTC+5",
  email: "akifimran.dev@gmail.com",
  resume: "/Akif_Imran_CV.pdf",
  availability: "Freelancing now · open to senior React & full-stack roles",
  description:
    "Senior full-stack engineer specialising in React, Next.js and Node.js — building fast, resilient products on real-time and high-volume data, from IoT telemetry and live GPS fleets to trade intelligence across billions of customs records.",
} as const;

export type SocialLink = { label: string; href: string; handle: string };

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "in/akif-imran",
    href: "https://www.linkedin.com/in/akif-imran-254324229/",
  },
  {
    label: "LeetCode",
    handle: "u/akif_imran_dev",
    href: "https://leetcode.com/u/akif_imran_dev/",
  },
  // Add GitHub here when ready, e.g.
  // { label: "GitHub", handle: "@username", href: "https://github.com/username" },
];

export const regions = [
  "Singapore",
  "Malaysia",
  "United States",
  "Canada",
  "Mexico",
] as const;

export type Impact = {
  metric: string;
  label: string;
  detail: string;
  context: string;
};

export const impact: Impact[] = [
  {
    metric: "Billions",
    label: "of customs records ingested, enriched & structured",
    detail:
      "High-concurrency ingestion pipelines turning multi-jurisdictional customs records and shipping manifests into searchable trade intelligence.",
    context: "Importscan · Vertex AI",
  },
  {
    metric: "Multi-TB",
    label: "of trade data, searchable at low latency",
    detail:
      "Search and filtering workflows over a multi-terabyte dataset of global import/export manifests — cutting complex query response times for enterprise users.",
    context: "Vertex AI · Singapore",
  },
  {
    metric: "8%",
    label: "reduction in operating costs",
    detail:
      "A real-time tracking system — live GPS positions, job management and role-based access — across web and mobile.",
    context: "M2M Smart Fleet",
  },
  {
    metric: "LTS",
    label: "legacy microservices, modernised safely",
    detail:
      "Upgraded ageing Node.js microservices to the latest LTS release with the full test suite intact.",
    context: "Node.js · Testing",
  },
];

export type ArtKind = "trade" | "fleet" | "booking" | "compliance";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  summary: string;
  highlights: string[];
  tags: string[];
  role: string;
  org: string;
  location: string;
  period: string;
  href?: string;
  art: ArtKind;
};

export const featuredProjects: Project[] = [
  {
    slug: "importscan",
    name: "Importscan",
    tagline: "Global trade intelligence & supply-chain visibility",
    category: "B2B data platform",
    summary:
      "A B2B platform that ingests, enriches and structures billions of multi-jurisdictional customs records and shipping manifests — powering competitive intelligence, vendor vetting and regulatory compliance for enterprise customers.",
    highlights: [
      "High-concurrency, high-throughput ingestion pipelines",
      "Low-latency search & filtering across a multi-terabyte manifest dataset",
      "Faster complex queries for enterprise analysts",
    ],
    tags: ["Data ingestion", "Search & filtering", "Data enrichment", "Enterprise"],
    role: "Senior Full-Stack Developer",
    org: "Vertex AI Pte. Ltd.",
    location: "Singapore",
    period: "2025 — 2026",
    art: "trade",
  },
  {
    slug: "m2m-smart-fleet",
    name: "M2M Smart Fleet",
    tagline: "Real-time fleet tracking & job management",
    category: "Web & mobile · IoT",
    summary:
      "Web and mobile apps for live GPS fleet tracking and job management with user roles — the real-time tracking system behind an 8% reduction in operating costs.",
    highlights: [
      "Live forklift and vehicle positions on Google Maps from GPS data",
      "Real-time updates streamed to React and React Native clients",
      "Job management with role-based access for operators and managers",
    ],
    tags: ["React", "React Native", "Socket.IO", "Google Maps"],
    role: "Full-Stack Developer",
    org: "M2M Networks",
    location: "Kuala Lumpur, Malaysia",
    period: "2024",
    art: "fleet",
  },
  {
    slug: "ourmaids",
    name: "OurMaids",
    tagline: "Booking platform for home cleaning services",
    category: "Web & mobile · Marketplace",
    summary:
      "A cleaning-service booking product delivered end-to-end — a Next.js web app, Android and iOS apps, and the Node.js backend that powers them both.",
    highlights: [
      "Sole ownership across web, mobile and API",
      "Next.js web experience for browsing and booking services",
      "Android & iOS apps sharing one Node.js backend",
    ],
    tags: ["Next.js", "React", "Node.js", "iOS & Android"],
    role: "Full-Stack Engineer · Freelance",
    org: "OurMaids",
    location: "Delaware, United States",
    period: "2024 — 2025",
    href: "https://www.ourmaids.com",
    art: "booking",
  },
  {
    slug: "ebasel",
    name: "eBasel",
    tagline: "Digital tracking for transboundary waste",
    category: "Regulatory systems",
    summary:
      "Digitised the tracking of waste moving across borders by implementing the UN/CEFACT e-Basel data standards — automating multi-jurisdictional workflows behind secure, high-throughput cross-border APIs.",
    highlights: [
      "Implemented UN/CEFACT e-Basel data standards",
      "Automated workflows spanning multiple jurisdictions",
      "Secure, regulatory-compliant cross-border APIs",
    ],
    tags: ["UN/CEFACT", "REST APIs", "Compliance", "High-throughput"],
    role: "Backend Software Engineer",
    org: "eBasel",
    location: "Kuala Lumpur, Malaysia",
    period: "2024 — 2025",
    art: "compliance",
  },
];

export type MinorProject = {
  name: string;
  summary: string;
  location: string;
  period: string;
  href?: string;
};

export const moreProjects: MinorProject[] = [
  {
    name: "AYI Services",
    summary:
      "Personal maid & nanny services — web and mobile apps built for a startup.",
    location: "Toronto, Canada",
    period: "2023 — 2025",
    href: "https://www.ayiservices.com",
  },
  {
    name: "M2M Smart Machine",
    summary:
      "Real-time IoT reporting for production lines, with user-level and role management.",
    location: "Kuala Lumpur, Malaysia",
    period: "2022 — 2023",
  },
  {
    name: "M2M Sales & Lead Tracking",
    summary: "Lead tracking and project management for company sales reps.",
    location: "Kuala Lumpur, Malaysia",
    period: "2023",
  },
  {
    name: "Warehouse Management System",
    summary:
      "Stock tracking, order processing and rack mapping to streamline warehouse operations.",
    location: "Kuala Lumpur, Malaysia",
    period: "2022",
  },
];

export type Role = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: "Vertex AI Pte. Ltd.",
    role: "Senior Full-Stack Developer",
    location: "Singapore",
    period: "Jan 2025 — Apr 2026",
    summary:
      "Engineered low-latency search and filtering workflows across a multi-terabyte dataset of global import/export manifests, reducing complex query response times for enterprise users.",
    points: [
      "Built on Importscan — a trade-intelligence platform structuring billions of customs records",
      "High-concurrency ingestion pipelines for multi-jurisdictional data",
    ],
    tags: ["Search", "Data pipelines", "Enterprise B2B"],
  },
  {
    company: "Independent",
    role: "Full-Stack Engineer",
    location: "Rawalpindi, Pakistan · Remote",
    period: "Sept 2023 — Present",
    summary:
      "Delivering web and mobile products end-to-end for clients across the United States, Mexico and Canada through Upwork and Fiverr.",
    points: [
      "OurMaids — Next.js web app, Android & iOS apps and a Node.js backend",
      "AYI Services — web and mobile apps for a Toronto-based startup",
    ],
    tags: ["Next.js", "Node.js", "Mobile"],
  },
  {
    company: "M2M Networks",
    role: "Full-Stack Developer",
    location: "Kuala Lumpur, Malaysia",
    period: "Sept 2022 — Mar 2024",
    summary:
      "Built the web and mobile surfaces of an IoT platform — real-time monitoring, fleet tracking and warehouse operations.",
    points: [
      "Shipped React Native apps for Android & iOS and a React.js web app for real-time IoT device monitoring",
      "Integrated Socket.IO for live data, with custom hooks to streamline state and event management",
      "Worked with Google Maps and GPS data to track forklifts for M2M Smart Fleet",
      "Contributed to M2M WMS — warehouse stock tracking and management",
    ],
    tags: ["React", "React Native", "Socket.IO", "IoT"],
  },
];

export type CoreSkill = { name: string; note: string };

export const coreStack: CoreSkill[] = [
  {
    name: "React",
    note: "Component architecture, custom hooks and Redux — on the web and in React Native.",
  },
  {
    name: "Next.js",
    note: "Production web apps shipped end-to-end, from first commit to paying customers.",
  },
  {
    name: "TypeScript",
    note: "Typed, maintainable codebases across interfaces, services and tooling.",
  },
  {
    name: "Node.js",
    note: "Express and Socket.IO services — and legacy microservices brought up to LTS.",
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "React Native",
      "Angular",
      "Vite",
      "Webpack",
      "Tailwind CSS",
      "Shadcn UI",
      "Mantine UI",
      "Sass",
      "HTML5 & CSS3",
    ],
  },
  {
    title: "Real-time & data viz",
    items: ["Socket.IO", "D3.js", "Charting", "Google Maps & GPS"],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "C# · ASP.NET Core",
      "EF Core",
      "Python",
      "FastAPI",
      "GraphQL",
      "REST APIs",
      "System integration",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MSSQL Server",
      "MongoDB",
      "Firebase Firestore",
      "Database design",
    ],
  },
  {
    title: "Cloud & Microsoft",
    items: [
      "AWS",
      "Azure",
      "Microsoft 365",
      "SharePoint",
      "Power Apps",
      "Power Automate",
    ],
  },
  {
    title: "Testing",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Mocha",
      "Chai",
      "Unit · integration · e2e",
    ],
  },
  {
    title: "Foundations",
    items: ["Data structures", "Design patterns", "OOP", "Git & GitHub"],
  },
];

export type Principle = { title: string; body: string };

export const principles: Principle[] = [
  {
    title: "Real-time by default",
    body: "From IoT telemetry to live GPS fleets, I design interfaces and services around data that changes every second — and stays calm under load.",
  },
  {
    title: "Performance is product",
    body: "Search across multi-terabyte datasets taught me that milliseconds are a feature users feel, not a metric to chase later.",
  },
  {
    title: "Tests are the contract",
    body: "Jest, React Testing Library and Cypress make change safe — it's how legacy services reach a new LTS without breaking their promises.",
  },
  {
    title: "Standards over shortcuts",
    body: "Regulated, cross-border systems like e-Basel reward precise data contracts and boring, well-understood APIs.",
  },
];

export type Credential = {
  kind: string;
  title: string;
  detail: string;
  period?: string;
};

export const credentials: Credential[] = [
  {
    kind: "Education",
    title: "BS Computer Science",
    detail: "PMAS Arid Agriculture University (BIIT), Rawalpindi · CGPA 3.92",
    period: "2019 — 2023",
  },
  {
    kind: "Course",
    title: "AWS Certified Developer – Associate",
    detail: "DVA-C02",
  },
];

export const nav = [
  { id: "work", label: "Work", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "expertise", label: "Expertise", index: "04" },
  { id: "about", label: "About", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
] as const;
