"use client";

/**
 * StaggerContainer — Wraps children so they animate in with staggered delays.
 * Pair with StaggerItem or any motion.* child that has variants.
 *
 * @example
 * <StaggerContainer staggerDelay={0.1}>
 *   <StaggerItem><Card /></StaggerItem>
 *   <StaggerItem><Card /></StaggerItem>
 * </StaggerContainer>
 */

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { animation } from "@/lib/theme";
import { createContext, useContext } from "react";

// ─── Context for passing stagger config to children ───────────────────────────
const StaggerContext = createContext({ staggerDelay: 0.1 });
export const useStagger = () => useContext(StaggerContext);

// ─── Container ────────────────────────────────────────────────────────────────
interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  /** Delay between each child's animation start (seconds) */
  staggerDelay?: number;
  /** Delay before first child animates */
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = animation.stagger.normal,
  delayChildren = 0,
  className,
  ...props
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <StaggerContext.Provider value={{ staggerDelay }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}

// ─── Item ──────────────────────────────────────────────────────────────────────

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  /** Optional per-item animation type */
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
}

const itemVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: animation.ease.out },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: animation.ease.out },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: animation.ease.out },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: animation.ease.out },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: animation.ease.out },
    },
  },
};

export function StaggerItem({
  children,
  variant = "fadeUp",
  className,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      variants={itemVariants[variant]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
