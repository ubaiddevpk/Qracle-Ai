/**
 * Quantum Precision Design System — Single Source of Truth
 *
 * All color tokens, gradients, spacing, typography, shadows, and border-radius
 * values are defined here. Both tailwind.config.ts and inline styles should
 * reference these constants to ensure pixel-perfect consistency.
 */

// ─── Color Palette ────────────────────────────────────────────────────────────

export const colors = {
  // Backgrounds
  background: {
    primary: "#0B0E14",   // Midnight navy — main page background
    secondary: "#0F1219", // Slightly lighter for cards / sections
    tertiary: "#141820",  // Surface / elevated containers
    overlay: "#0B0E14CC", // 80% opacity for glass overlays
  },

  // Accent / Brand Gradient endpoints
  accent: {
    cyan: "#22D3EE",       // Gradient start (tailwind cyan-400)
    blue: "#2563EB",       // Gradient end   (tailwind blue-600)
    cyanDark: "#0891B2",   // Darker cyan for hover states
    blueDark: "#1D4ED8",   // Darker blue for hover states
    cyanLight: "#67E8F9",  // Lighter cyan for highlights
    blueLight: "#3B82F6",  // Lighter blue for subtle accents
  },

  // Neutrals / Text
  text: {
    primary: "#F1F5F9",    // Near-white — headings & primary text
    secondary: "#94A3B8",  // Muted — subtitles, descriptions
    tertiary: "#64748B",   // Very muted — captions, meta
    inverse: "#0B0E14",    // Dark text on light backgrounds
  },

  // Semantic
  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#22D3EE",
  },

  // Borders
  border: {
    subtle: "#1E2433",     // Very subtle borders
    default: "#252D3D",    // Standard borders
    accent: "#22D3EE33",   // Cyan-tinted border (20% opacity)
    glow: "#22D3EE66",     // Glow border (40% opacity)
  },
} as const;

// ─── Gradients ────────────────────────────────────────────────────────────────

export const gradients = {
  // Primary brand gradient (cyan → blue)
  primary: `linear-gradient(135deg, ${colors.accent.cyan} 0%, ${colors.accent.blue} 100%)`,
  primaryHover: `linear-gradient(135deg, ${colors.accent.cyanLight} 0%, ${colors.accent.blueLight} 100%)`,

  // Text gradient (applied with bg-clip-text)
  text: `linear-gradient(135deg, ${colors.accent.cyan} 0%, ${colors.accent.blue} 100%)`,

  // Background hero gradients
  heroRadial: `radial-gradient(ellipse at top, #1a2744 0%, ${colors.background.primary} 70%)`,
  sectionGlow: `radial-gradient(ellipse at center, #1e2d4422 0%, transparent 70%)`,

  // Glass / surface gradients
  glass: `linear-gradient(135deg, #ffffff0A 0%, #ffffff05 100%)`,
  cardBorder: `linear-gradient(135deg, ${colors.accent.cyan}33 0%, ${colors.accent.blue}33 100%)`,

  // Subtle section separators
  divider: `linear-gradient(90deg, transparent 0%, ${colors.border.default} 50%, transparent 100%)`,
} as const;

// ─── Tailwind CSS Class Strings (for convenience) ─────────────────────────────

export const tw = {
  gradientText: "bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent",
  gradientBg: "bg-gradient-to-br from-cyan-400 to-blue-600",
  gradientBgSubtle: "bg-gradient-to-br from-cyan-400/10 to-blue-600/10",
  glassCard: "bg-white/[0.04] backdrop-blur-sm border border-white/[0.08]",
  accentBorder: "border border-cyan-400/20",
  glowBorder: "border border-cyan-400/40",
} as const;

// ─── Typography Scale ──────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    sans: "Inter, system-ui, -apple-system, sans-serif",
    mono: "JetBrains Mono, Fira Code, monospace",
  },

  // Font sizes (rem)
  fontSize: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    base: "1rem",      // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
    "6xl": "3.75rem",  // 60px
    "7xl": "4.5rem",   // 72px
    "8xl": "6rem",     // 96px
  },

  // Line heights
  lineHeight: {
    tight: "1.1",
    snug: "1.25",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Font weights
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  // Letter spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

// ─── Spacing Scale ─────────────────────────────────────────────────────────────

export const spacing = {
  // Container
  containerMaxWidth: "1280px",
  containerPaddingX: {
    mobile: "1rem",     // 16px
    tablet: "1.5rem",   // 24px
    desktop: "2rem",    // 32px
  },

  // Section vertical padding
  sectionPaddingY: {
    sm: "3rem",    // 48px — small sections
    md: "5rem",    // 80px — standard sections
    lg: "7rem",    // 112px — large feature sections
    xl: "9rem",    // 144px — hero / major sections
  },

  // Component spacing
  gap: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
  },
} as const;

// ─── Border Radius ─────────────────────────────────────────────────────────────

export const borderRadius = {
  sm: "0.375rem",   // 6px  — badges, tags
  md: "0.5rem",     // 8px  — inputs, small buttons
  lg: "0.75rem",    // 12px — cards, panels
  xl: "1rem",       // 16px — larger cards
  "2xl": "1.5rem",  // 24px — feature cards
  "3xl": "2rem",    // 32px — hero cards
  full: "9999px",   // Pill — buttons, badges
} as const;

// ─── Shadow / Glow Tokens ─────────────────────────────────────────────────────

export const shadows = {
  // Soft glow effects
  glowCyan: "0 0 20px rgba(34, 211, 238, 0.3)",
  glowCyanStrong: "0 0 40px rgba(34, 211, 238, 0.5)",
  glowBlue: "0 0 20px rgba(37, 99, 235, 0.3)",
  glowBlueStrong: "0 0 40px rgba(37, 99, 235, 0.5)",
  glowPrimary: "0 0 30px rgba(34, 211, 238, 0.2), 0 0 60px rgba(37, 99, 235, 0.15)",

  // Card shadows
  cardSm: "0 2px 8px rgba(0, 0, 0, 0.4)",
  cardMd: "0 4px 20px rgba(0, 0, 0, 0.5)",
  cardLg: "0 8px 40px rgba(0, 0, 0, 0.6)",

  // Inner glow
  innerGlow: "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
} as const;

// Framer Motion cubic-bezier curves (mutable tuples required by Framer Motion Easing type)
export const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1];
export const EASE_IN: [number, number, number, number] = [0.4, 0.0, 1.0, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.4, 0.0, 0.2, 1];

export const animation = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },
  ease: {
    out: EASE_OUT,
    in: EASE_IN,
    inOut: EASE_IN_OUT,
    spring: { type: "spring" as const, stiffness: 300, damping: 30 },
    springGentle: { type: "spring" as const, stiffness: 150, damping: 25 },
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
};

// ─── Z-Index Scale ─────────────────────────────────────────────────────────────

export const zIndex = {
  base: 0,
  raised: 10,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
  tooltip: 600,
} as const;

// ─── Breakpoints (matching Tailwind defaults) ─────────────────────────────────

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
