import { cn } from "@/lib/utils";

/**
 * Badge — Small label chip for tags, status indicators, and category labels.
 *
 * @example
 * <Badge variant="accent">New</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge dot>Live</Badge>
 */

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "success" | "warning" | "danger" | "outline";
  size?: "sm" | "md";
  /** Show a colored dot before the text */
  dot?: boolean;
}

const variantClasses: Record<string, string> = {
  default: "bg-surface-default text-content-secondary border-surface-elevated",
  accent: "bg-cyan-400/10 text-cyan-400 border-cyan-400/30",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  danger: "bg-red-500/10 text-red-400 border-red-500/30",
  outline: "bg-transparent text-content-secondary border-surface-default",
};

const dotColors: Record<string, string> = {
  default: "bg-content-tertiary",
  accent: "bg-cyan-400",
  success: "bg-emerald-400",
  warning: "bg-amber-400",
  danger: "bg-red-400",
  outline: "bg-content-tertiary",
};

const sizeClasses: Record<string, string> = {
  sm: "text-xs px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
};

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
