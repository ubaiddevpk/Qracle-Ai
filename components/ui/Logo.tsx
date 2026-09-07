import React from "react";

interface LogoProps {
  /**
   * - "horizontal": Emblem + "QracleAI" side by side (recommended for navbar)
   * - "stacked": Emblem on top, "QracleAI" underneath (matches the square logo)
   * - "icon": Just the quantum Q emblem
   */
  variant?: "horizontal" | "stacked" | "icon";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({
  variant = "horizontal",
  className = "",
  size = "md",
}: LogoProps) {
  // Size presets
  const sizeClasses = {
    horizontal: {
      sm: "h-8 w-auto",
      md: "h-10 sm:h-11 w-auto",
      lg: "h-12 sm:h-14 w-auto",
      xl: "h-16 w-auto",
    },
    stacked: {
      sm: "h-12 w-auto",
      md: "h-16 w-auto",
      lg: "h-20 w-auto",
      xl: "h-24 w-auto",
    },
    icon: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-16 w-16",
    },
  };

  const selectedSize = sizeClasses[variant][size];

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${selectedSize} ${className} shrink-0`}
        aria-label="QracleAI Logo"
      >
        <defs>
          <linearGradient id="icon-ring-grad" x1="15%" y1="10%" x2="90%" y2="95%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="45%" stopColor="#22D3EE" />
            <stop offset="80%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <radialGradient id="icon-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#67E8F9" />
            <stop offset="70%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>
          <filter id="icon-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="46" cy="42" r="30" fill="#22D3EE" fillOpacity="0.16" />
        <circle
          cx="46"
          cy="42"
          r="30"
          stroke="url(#icon-ring-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#icon-glow)"
        />
        <g stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          <line x1="46" y1="42" x2="46" y2="20" />
          <line x1="46" y1="42" x2="28" y2="26" />
          <line x1="46" y1="42" x2="22" y2="42" />
          <line x1="46" y1="42" x2="29" y2="58" />
          <line x1="46" y1="42" x2="64" y2="26" />
          <line x1="46" y1="42" x2="63" y2="59" />
          <line x1="28" y1="26" x2="46" y2="20" opacity="0.45" />
          <line x1="46" y1="20" x2="64" y2="26" opacity="0.45" />
          <line x1="28" y1="26" x2="22" y2="42" opacity="0.45" />
          <line x1="22" y1="42" x2="29" y2="58" opacity="0.45" />
        </g>
        <path
          d="M 60 56 L 76 72"
          stroke="url(#icon-ring-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#icon-glow)"
        />
        <circle cx="76" cy="72" r="5" fill="#22D3EE" filter="url(#icon-glow)" />
        <circle cx="76" cy="72" r="2.5" fill="#FFFFFF" />
        <g fill="#22D3EE" filter="url(#icon-glow)">
          <circle cx="46" cy="20" r="3.2" />
          <circle cx="28" cy="26" r="2.8" />
          <circle cx="22" cy="42" r="3" />
          <circle cx="29" cy="58" r="2.8" />
          <circle cx="64" cy="26" r="3" />
          <circle cx="63" cy="59" r="3.4" />
        </g>
        <g fill="#FFFFFF">
          <circle cx="46" cy="20" r="1.3" />
          <circle cx="28" cy="26" r="1.1" />
          <circle cx="22" cy="42" r="1.2" />
          <circle cx="29" cy="58" r="1.1" />
          <circle cx="64" cy="26" r="1.2" />
          <circle cx="63" cy="59" r="1.4" />
        </g>
        <circle cx="46" cy="42" r="10" fill="url(#icon-core-glow)" filter="url(#icon-glow)" />
        <circle cx="46" cy="42" r="4.5" fill="#FFFFFF" />
      </svg>
    );
  }

  if (variant === "stacked") {
    return (
      <svg
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${selectedSize} ${className} shrink-0`}
        aria-label="QracleAI Logo"
      >
        <defs>
          <linearGradient id="stk-ring-grad" x1="15%" y1="10%" x2="90%" y2="95%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="45%" stopColor="#22D3EE" />
            <stop offset="80%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <radialGradient id="stk-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#67E8F9" />
            <stop offset="70%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="stk-text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
          <filter id="stk-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="40" r="30" fill="#22D3EE" fillOpacity="0.16" />
        <circle
          cx="50"
          cy="40"
          r="30"
          stroke="url(#stk-ring-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#stk-glow)"
        />
        <g stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          <line x1="50" y1="40" x2="50" y2="18" />
          <line x1="50" y1="40" x2="32" y2="24" />
          <line x1="50" y1="40" x2="26" y2="40" />
          <line x1="50" y1="40" x2="33" y2="56" />
          <line x1="50" y1="40" x2="68" y2="24" />
          <line x1="50" y1="40" x2="67" y2="57" />
          <line x1="32" y1="24" x2="50" y2="18" opacity="0.45" />
          <line x1="50" y1="18" x2="68" y2="24" opacity="0.45" />
          <line x1="32" y1="24" x2="26" y2="40" opacity="0.45" />
          <line x1="26" y1="40" x2="33" y2="56" opacity="0.45" />
        </g>
        <path
          d="M 64 54 L 80 70"
          stroke="url(#stk-ring-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#stk-glow)"
        />
        <circle cx="80" cy="70" r="5" fill="#22D3EE" filter="url(#stk-glow)" />
        <circle cx="80" cy="70" r="2.5" fill="#FFFFFF" />
        <g fill="#22D3EE" filter="url(#stk-glow)">
          <circle cx="50" cy="18" r="3.2" />
          <circle cx="32" cy="24" r="2.8" />
          <circle cx="26" cy="40" r="3" />
          <circle cx="33" cy="56" r="2.8" />
          <circle cx="68" cy="24" r="3" />
          <circle cx="67" cy="57" r="3.4" />
        </g>
        <g fill="#FFFFFF">
          <circle cx="50" cy="18" r="1.3" />
          <circle cx="32" cy="24" r="1.1" />
          <circle cx="26" cy="40" r="1.2" />
          <circle cx="33" cy="56" r="1.1" />
          <circle cx="68" cy="24" r="1.2" />
          <circle cx="67" cy="57" r="1.4" />
        </g>
        <circle cx="50" cy="40" r="10" fill="url(#stk-core-glow)" filter="url(#stk-glow)" />
        <circle cx="50" cy="40" r="4.5" fill="#FFFFFF" />
        <text
          x="50"
          y="102"
          textAnchor="middle"
          className="font-bold tracking-tight"
          fontSize="16.5"
          fill="url(#stk-text-grad)"
          filter="url(#stk-glow)"
        >
          Qracle<tspan fill="#FFFFFF">AI</tspan>
        </text>
      </svg>
    );
  }

  // Default: Horizontal Lockup (Emblem + Wordmark)
  return (
    <svg
      viewBox="0 0 220 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${selectedSize} ${className} shrink-0`}
      aria-label="QracleAI Logo"
    >
      <defs>
        <linearGradient id="hz-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="40%" stopColor="#22D3EE" />
          <stop offset="85%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="hz-ai-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <radialGradient id="hz-core-rad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#67E8F9" />
          <stop offset="80%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
        </radialGradient>
        <filter id="hz-glow" x="-20%" y="-20%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Emblem */}
      <g transform="translate(4, 2) scale(0.5)">
        <circle cx="46" cy="42" r="32" fill="#22D3EE" fillOpacity="0.18" />
        <circle
          cx="46"
          cy="42"
          r="30"
          stroke="url(#hz-ring-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#hz-glow)"
        />
        <g stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <line x1="46" y1="42" x2="46" y2="20" />
          <line x1="46" y1="42" x2="28" y2="26" />
          <line x1="46" y1="42" x2="22" y2="42" />
          <line x1="46" y1="42" x2="29" y2="58" />
          <line x1="46" y1="42" x2="64" y2="26" />
          <line x1="46" y1="42" x2="63" y2="59" />
          <line x1="28" y1="26" x2="46" y2="20" opacity="0.5" />
          <line x1="46" y1="20" x2="64" y2="26" opacity="0.5" />
          <line x1="28" y1="26" x2="22" y2="42" opacity="0.5" />
          <line x1="22" y1="42" x2="29" y2="58" opacity="0.5" />
        </g>
        <path
          d="M 60 56 L 76 72"
          stroke="url(#hz-ring-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#hz-glow)"
        />
        <circle cx="76" cy="72" r="5" fill="#22D3EE" filter="url(#hz-glow)" />
        <circle cx="76" cy="72" r="2.5" fill="#FFFFFF" />
        <g fill="#22D3EE" filter="url(#hz-glow)">
          <circle cx="46" cy="20" r="3.4" />
          <circle cx="28" cy="26" r="3" />
          <circle cx="22" cy="42" r="3.2" />
          <circle cx="29" cy="58" r="3" />
          <circle cx="64" cy="26" r="3.2" />
          <circle cx="63" cy="59" r="3.5" />
        </g>
        <g fill="#FFFFFF">
          <circle cx="46" cy="20" r="1.4" />
          <circle cx="28" cy="26" r="1.2" />
          <circle cx="22" cy="42" r="1.3" />
          <circle cx="29" cy="58" r="1.2" />
          <circle cx="64" cy="26" r="1.3" />
          <circle cx="63" cy="59" r="1.5" />
        </g>
        <circle cx="46" cy="42" r="10" fill="url(#hz-core-rad)" filter="url(#hz-glow)" />
        <circle cx="46" cy="42" r="4.5" fill="#FFFFFF" />
      </g>

      {/* Wordmark */}
      <g transform="translate(60, 0)">
        <text
          x="0"
          y="32"
          fontFamily="inherit"
          fontWeight="800"
          fontSize="24"
          letterSpacing="-0.03em"
          fill="#FFFFFF"
        >
          Qracle<tspan fill="url(#hz-ai-grad)">AI</tspan>
        </text>
        <text
          x="1"
          y="44"
          fontFamily="inherit"
          fontWeight="600"
          fontSize="7.5"
          letterSpacing="0.22em"
          fill="#38BDF8"
          opacity="0.9"
        >
          QUANTUM INTELLIGENCE
        </text>
      </g>
    </svg>
  );
}
