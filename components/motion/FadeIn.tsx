"use client";

/**
 * FadeIn — Fades content in, optionally with a slight upward translation.
 * Uses animate so it always fires on mount after SSR hydration.
 *
 * @example
 * <FadeIn delay={0.2}>
 *   <h1>Hello</h1>
 * </FadeIn>
 */

import { motion, type HTMLMotionProps } from "framer-motion";
import { animation } from "@/lib/theme";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = animation.duration.slow,
  yOffset = 0,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: animation.ease.out,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
