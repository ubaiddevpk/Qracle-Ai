"use client";

/**
 * FloatingElement — Adds a gentle floating animation (y-axis oscillation).
 * For decorative elements, icons, and hero illustrations.
 *
 * @example
 * <FloatingElement amplitude={12} duration={5}>
 *   <Icon />
 * </FloatingElement>
 */

import { motion, type HTMLMotionProps } from "framer-motion";

interface FloatingElementProps extends HTMLMotionProps<"div"> {
  /** How many pixels to oscillate up/down */
  amplitude?: number;
  /** Duration of one full oscillation cycle (seconds) */
  duration?: number;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

export function FloatingElement({
  children,
  amplitude = 10,
  duration = 6,
  delay = 0,
  className,
  ...props
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
