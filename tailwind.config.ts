import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // ── Container ──────────────────────────────────────────────────────────
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px", // cap at 1280px
      },
    },

    extend: {
      // ── Colors ────────────────────────────────────────────────────────────
      colors: {
        // Brand backgrounds
        background: {
          primary: "#0B0E14",
          secondary: "#0F1219",
          tertiary: "#141820",
        },
        // Accent colors
        brand: {
          cyan: "#22D3EE",
          "cyan-dark": "#0891B2",
          "cyan-light": "#67E8F9",
          blue: "#2563EB",
          "blue-dark": "#1D4ED8",
          "blue-light": "#3B82F6",
        },
        // Surface / border colors
        surface: {
          subtle: "#1E2433",
          default: "#252D3D",
          elevated: "#2A3347",
        },
        // Text colors
        content: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          tertiary: "#64748B",
        },
      },

      // ── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },

      // ── Border Radius ─────────────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ── Spacing ───────────────────────────────────────────────────────────
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        section: "5rem",         // standard section padding-y
        "section-lg": "7rem",    // large section padding-y
        "section-xl": "9rem",    // xl section padding-y (hero)
      },

      // ── Box Shadows (glow effects) ────────────────────────────────────────
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.3)",
        "glow-cyan-strong": "0 0 40px rgba(34, 211, 238, 0.5)",
        "glow-blue": "0 0 20px rgba(37, 99, 235, 0.3)",
        "glow-blue-strong": "0 0 40px rgba(37, 99, 235, 0.5)",
        "glow-primary":
          "0 0 30px rgba(34, 211, 238, 0.2), 0 0 60px rgba(37, 99, 235, 0.15)",
        "card-sm": "0 2px 8px rgba(0, 0, 0, 0.4)",
        "card-md": "0 4px 20px rgba(0, 0, 0, 0.5)",
        "card-lg": "0 8px 40px rgba(0, 0, 0, 0.6)",
        "inner-glow": "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },

      // ── Background Gradients ──────────────────────────────────────────────
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)",
        "gradient-primary-hover":
          "linear-gradient(135deg, #67E8F9 0%, #3B82F6 100%)",
        "gradient-hero":
          "radial-gradient(ellipse at top, #1a2744 0%, #0B0E14 70%)",
        "gradient-section":
          "radial-gradient(ellipse at center, rgba(30,45,68,0.13) 0%, transparent 70%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        "gradient-card-border":
          "linear-gradient(135deg, rgba(34,211,238,0.2) 0%, rgba(37,99,235,0.2) 100%)",
        "gradient-divider":
          "linear-gradient(90deg, transparent 0%, #252D3D 50%, transparent 100%)",
        "gradient-text":
          "linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)",
      },

      // ── Animations ────────────────────────────────────────────────────────
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(34, 211, 238, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },

      // ── Backdrop Blur ─────────────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },

      // ── Z-Index ───────────────────────────────────────────────────────────
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        overlay: "300",
        modal: "400",
        toast: "500",
      },

      // ── Transition Duration ───────────────────────────────────────────────
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
