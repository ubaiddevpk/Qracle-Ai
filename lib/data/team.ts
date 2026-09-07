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
];
