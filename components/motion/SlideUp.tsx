"use client";

/**
 * SlideUp — Slides content up from below while fading in.
 * A common hero / section-entry animation.
 *
 * @example
 * <SlideUp delay={0.1} distance={40}>
 *   <p>Content</p>
 * </SlideUp>
 */

import { motion, type HTMLMotionProps } from "framer-motion";
import { animation } from "@/lib/theme";

interface SlideUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  /** How many pixels to start below the final position */
  distance?: number;
}

export function SlideUp({
  children,
  delay = 0,
  duration = animation.duration.slow,
  distance = 32,
  className,
  ...props
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
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
