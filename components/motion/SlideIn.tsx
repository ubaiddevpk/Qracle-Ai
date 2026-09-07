"use client";

/**
 * SlideIn — Slides content in from left or right.
 * Useful for side-by-side section layouts.
 *
 * @example
 * <SlideIn direction="left" delay={0.2}>
 *   <FeatureBlock />
 * </SlideIn>
 */

import { motion, type HTMLMotionProps } from "framer-motion";
import { animation } from "@/lib/theme";

interface SlideInProps extends HTMLMotionProps<"div"> {
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = animation.duration.slow,
  distance = 40,
  className,
  ...props
}: SlideInProps) {
  const initialX = direction === "left" ? -distance : distance;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
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
