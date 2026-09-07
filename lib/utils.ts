import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — Merge Tailwind CSS class names with conflict resolution.
 *
 * Combines clsx (conditional classes) with tailwind-merge (deduplication)
 * so that later classes always win when there are Tailwind conflicts.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-cyan-400", "px-6")
 * // → "py-2 bg-cyan-400 px-6"  (px-4 is overridden by px-6)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
