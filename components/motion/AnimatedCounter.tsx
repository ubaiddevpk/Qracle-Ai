"use client";

/**
 * AnimatedCounter — Counts a number up from 0 to a target value.
 * Used in StatsSection for metric displays.
 *
 * @example
 * <AnimatedCounter from={0} to={2500} suffix="+" duration={2} />
 */

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  /** String appended after the number, e.g. "+" or "%" */
  suffix?: string;
  /** String prepended before the number, e.g. "$" */
  prefix?: string;
  className?: string;
  /** Number of decimal places */
  decimals?: number;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent =
            prefix + value.toFixed(decimals) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, from, to, duration, suffix, prefix, decimals]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
}
