/**
 * Site-wide constants — navigation routes, company info, social links.
 * Import from here instead of hardcoding strings in components.
 */

export const SITE = {
  name: "Qaracle AI",
  tagline: "Quantum Precision Intelligence",
  description:
    "Enterprise AI solutions built on quantum-inspired precision for the businesses of tomorrow.",
  url: "https://qracleai.com",
  email: "hello@qracleai.com",
  phone: "+1 (555) 000-0000",
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "All Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Get a Quote", href: "/quote" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
} as const;

// ─── Route Map (all 18 pages) ─────────────────────────────────────────────────

export const ROUTES = {
  home: "/",
  about: "/about",
  team: "/team",
  services: "/services",
  artificialIntelligence: "/services/artificial-intelligence",
  cybersecurity: "/services/cybersecurity",
  serviceDetail: (slug: string) => `/services/${slug}`,
  caseStudies: "/case-studies",
  caseStudyDetail: (slug: string) => `/case-studies/${slug}`,
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  careers: "/careers",
  careerApply: (id: string) => `/careers/apply/${id}`,
  quote: "/quote",
  contact: "/contact",
  portalLogin: "/portal/login",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const;

// ─── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/qracleai",
  linkedin: "https://linkedin.com/company/qracleai",
  github: "https://github.com/qracleai",
} as const;
