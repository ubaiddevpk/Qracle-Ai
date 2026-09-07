/**
 * /components/motion — Shared Framer Motion animation primitives
 *
 * Import all animation components from this barrel file so every page
 * uses the same set of primitives instead of writing custom animations.
 *
 * @example
 * import { FadeIn, SlideUp, StaggerContainer, StaggerItem, HoverGlow } from "@/components/motion";
 */

export { FadeIn } from "./FadeIn";
export { SlideUp } from "./SlideUp";
export { SlideIn } from "./SlideIn";
export { ScaleIn } from "./ScaleIn";
export { HoverGlow } from "./HoverGlow";
export { FloatingElement } from "./FloatingElement";
export { AnimatedCounter } from "./AnimatedCounter";
export { StaggerContainer, StaggerItem, useStagger } from "./StaggerContainer";
