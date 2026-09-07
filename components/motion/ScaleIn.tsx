"use client";

/**
 * ScaleIn — Scales content in from slightly smaller while fading in.
 * Great for modal entries, card reveals, and hero illustrations.
 *
 * @example
 * <ScaleIn delay={0.3} from={0.9}>
 *   <img src="/hero.png" />
 * </ScaleIn>
 */

import { motion, type HTMLMotionProps } from "framer-motion";
import { animation } from "@/lib/theme";

interface ScaleInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  /** Starting scale value (0–1) */
  from?: number;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = animation.duration.slow,
  from = 0.92,
  className,
  ...props
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: from }}
      animate={{ opacity: 1, scale: 1 }}
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
