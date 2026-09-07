"use client";

/**
 * HoverGlow — Wraps any element and adds a scale + glow effect on hover.
 * The glow color tracks the Quantum Precision cyan-to-blue accent.
 *
 * @example
 * <HoverGlow glowColor="cyan">
 *   <Card />
 * </HoverGlow>
 */

import { motion, type HTMLMotionProps } from "framer-motion";
import { shadows } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface HoverGlowProps extends HTMLMotionProps<"div"> {
  /** Color of the glow effect */
  glowColor?: "cyan" | "blue" | "primary" | "none";
  /** Scale amount on hover */
  scale?: number;
  /** Whether to lift the element (translateY) */
  lift?: boolean;
  /** Amount to lift in pixels */
  liftAmount?: number;
}

const glowShadows: Record<string, string> = {
  cyan: shadows.glowCyan,
  blue: shadows.glowBlue,
  primary: shadows.glowPrimary,
  none: "none",
};

export function HoverGlow({
  children,
  glowColor = "cyan",
  scale = 1.02,
  lift = true,
  liftAmount = 4,
  className,
  style,
  ...props
}: HoverGlowProps) {
  return (
    <motion.div
      whileHover={{
        scale,
        y: lift ? -liftAmount : 0,
        boxShadow: glowShadows[glowColor],
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.2,
        ease: [0.0, 0.0, 0.2, 1],
      }}
      style={{ willChange: "transform, box-shadow", ...style }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
