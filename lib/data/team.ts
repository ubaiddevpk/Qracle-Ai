export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Leadership" | "Engineering" | "Design & Product" | "Client Success & Operations";
  bio: string;
  image?: string;
  isSpotlight?: boolean;
  spotlightQuote?: string;
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
    bio: "Ensuring global operational alignment, governance frameworks, and driving international client delivery.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "zunaira@qracleai.com",
    },
  },
  {
    id: "bilal-siddiqui",
    name: "Bilal Siddiqui",
    role: "Chief Financial Officer",
    department: "Leadership",
    bio: "Driving strategic capital allocation, enterprise risk governance, and multinational fiscal resilience.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "bilal@qracleai.com",
    },
  },
  {
    id: "ayesha-malik",
    name: "Ayesha Malik",
    role: "Chief Strategy Officer",
    department: "Leadership",
    bio: "Shaping frontier AI strategic roadmaps and identifying next-generation market transformation vectors.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "ayesha@qracleai.com",
    },
  },

  // ─── Engineering ──────────────────────────────────────────────────────────
  {
    id: "tariq-mahmood",
    name: "Tariq Mahmood",
    role: "Head of Engineering",
    department: "Engineering",
    bio: "Architecting scalable enterprise AI solutions, distributed cloud engines, and leading deep-tech delivery.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "tariq@qracleai.com",
    },
  },
  {
    id: "obaid-ullah",
    name: "Obaid Ullah",
    role: "Full-Stack Web Developer",
    department: "Engineering",
    bio: "Building robust, high-performance web platforms, real-time frontend architectures, and AI integrations.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "obaid@qracleai.com",
    },
  },
  {
    id: "muhammad-jalal",
    name: "Muhammad Jalal",
    role: "Full-Stack Web Developer",
    department: "Engineering",
    bio: "Engineering enterprise-grade full-stack systems, secure microservices, and reactive user interfaces.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "jalal@qracleai.com",
    },
  },
  {
    id: "fatima-noor",
    name: "Fatima Noor",
    role: "Cloud & DevOps Engineer",
    department: "Engineering",
    bio: "Designing secure and scalable multi-cloud architectures for complex high-availability infrastructure.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "fatima@qracleai.com",
    },
  },
  {
    id: "hassan-ahmed",
    name: "Hassan Ahmed",
    role: "DevOps Lead",
    department: "Engineering",
    bio: "Streamlining continuous integration, infrastructure as code, and zero-trust deployment pipelines.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "hassan@qracleai.com",
    },
  },

  // ─── Design & Product ─────────────────────────────────────────────────────
  {
    id: "aisha-khan",
    name: "Aisha Khan",
    role: "UI/UX Designer",
    department: "Design & Product",
    bio: "Crafting intuitive and engaging user interfaces tailored for high-complexity enterprise workflows.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "aisha@qracleai.com",
    },
  },
  {
    id: "usman-tariq",
    name: "Usman Tariq",
    role: "Product Manager",
    department: "Design & Product",
    bio: "Bridging technical execution with strategic enterprise roadmap prioritization and agile delivery.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "usman@qracleai.com",
    },
  },

  // ─── Client Success & Operations ──────────────────────────────────────────
  {
    id: "danial-ahmed",
    name: "Danial Ahmed",
    role: "Business Development Manager",
    department: "Client Success & Operations",
    bio: "Cultivating strategic partnerships and expanding our global enterprise client delivery footprint.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "danial@qracleai.com",
    },
  },
  {
    id: "zainab-malik",
    name: "Zainab Malik",
    role: "Project Delivery Manager",
    department: "Client Success & Operations",
    bio: "Ensuring flawless sprint execution, transparent governance, and milestone delivery for key enterprise accounts.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "zainab@qracleai.com",
    },
  },
];
