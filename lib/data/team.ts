export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Leadership" | "Engineering" | "Design & Product";
  bio: string;
  image?: string;
  isSpotlight?: boolean;
  spotlightQuote?: string;
  isComingSoon?: boolean;
  socials?: {
    linkedin?: string;
    github?: string;
    email?: string;
    twitter?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  // ─── Executive Spotlight ──────────────────────────────────────────────────
  {
    id: "azmat-khan",
    name: "Azmat Khan",
    role: "Chief Executive Officer & Founder",
    department: "Leadership",
    isSpotlight: true,
    spotlightQuote:
      "At QracleAI, we aren't just building software; we are architecting the intelligence layer for tomorrow's enterprises. By uniting the strategic foresight of our London headquarters with the raw, high-performance engineering power of our teams in Pakistan, we've created a resilient, global engine for innovation.",
    image: "/team/azmat-khan.png",
    bio: "Visionary technology executive steering global strategy, cross-border AI operations, and enterprise architecture.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "azmat@qracleai.com",
    },
  },

  // ─── Leadership ───────────────────────────────────────────────────────────
  {
    id: "zunaira-rehman",
    name: "Zunaira Rehman",
    role: "Chief Operating Officer",
    department: "Leadership",
    image: "/team/zunaira-rehman.png",
    bio: "Ensuring global operational alignment, governance frameworks, and driving international enterprise delivery.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "zunaira@qracleai.com",
    },
  },
  {
    id: "leadership-coming-soon",
    name: "Coming Soon",
    role: "Executive Leadership",
    department: "Leadership",
    isComingSoon: true,
    bio: "New executive leadership addition joining our London and global headquarters soon.",
  },

  // ─── Engineering ──────────────────────────────────────────────────────────
  {
    id: "muhammad-jalal",
    name: "Muhammad Jalal",
    role: "Full-Stack Web Developer",
    department: "Engineering",
    bio: "Engineering enterprise-grade full-stack systems, secure microservices, and reactive modern user interfaces.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "jalal@qracleai.com",
    },
  },
  {
    id: "obaid-ullah",
    name: "Obaid Ullah",
    role: "Full-Stack Web Developer",
    department: "Engineering",
    bio: "Building robust, high-performance web platforms, real-time frontend architectures, and modern cloud integrations.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "obaid@qracleai.com",
    },
  },
  {
    id: "eng-coming-soon-1",
    name: "Coming Soon",
    role: "Head of Engineering",
    department: "Engineering",
    isComingSoon: true,
    bio: "Deep-tech engineering leadership profile to be announced soon.",
  },
  {
    id: "eng-coming-soon-2",
    name: "Coming Soon",
    role: "Cloud & DevOps Architect",
    department: "Engineering",
    isComingSoon: true,
    bio: "Cloud infrastructure and DevOps architect profile to be announced soon.",
  },
  {
    id: "eng-coming-soon-3",
    name: "Coming Soon",
    role: "AI & Deep-Tech Engineer",
    department: "Engineering",
    isComingSoon: true,
    bio: "Enterprise intelligence and machine learning engineer profile to be announced soon.",
  },

  // ─── Design & Product ─────────────────────────────────────────────────────
  {
    id: "design-coming-soon-1",
    name: "Coming Soon",
    role: "UI/UX & Product Designer",
    department: "Design & Product",
    isComingSoon: true,
    bio: "Product designer crafting next-generation enterprise interfaces and UX workflows.",
  },
  {
    id: "design-coming-soon-2",
    name: "Coming Soon",
    role: "Technical Product Manager",
    department: "Design & Product",
    isComingSoon: true,
    bio: "Product manager steering enterprise roadmap execution and agile innovation.",
  },
];
