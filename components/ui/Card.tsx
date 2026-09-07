import { cn } from "@/lib/utils";

/**
 * Card — Glass-morphic card surface with optional accent border and hover glow.
 *
 * @example
 * <Card variant="glass" className="p-6">
 *   <h3>Feature Title</h3>
 * </Card>
 *
 * <Card variant="accent" hover>
 *   <ServiceContent />
 * </Card>
 */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /**
   * - "glass"    → Subtle frosted glass (bg-white/4, border-white/8)
   * - "accent"   → Cyan-tinted border on glass
   * - "solid"    → Opaque dark surface card
   * - "gradient" → Subtle gradient background
   */
  variant?: "glass" | "accent" | "solid" | "gradient";
  /** Adds scale + glow on hover (CSS only, use HoverGlow for Framer Motion) */
  hover?: boolean;
  as?: React.ElementType;
  id?: string;
  onClick?: () => void;
}

const variantClasses: Record<string, string> = {
  glass: "bg-white/[0.04] backdrop-blur-sm border border-white/[0.08]",
  accent: "bg-white/[0.04] backdrop-blur-sm border border-cyan-400/20",
  solid: "bg-surface-secondary border border-surface-default",
  gradient: "bg-gradient-glass backdrop-blur-sm border border-white/[0.06]",
};

export function Card({
  children,
  className,
  variant = "glass",
  hover = false,
  as: Tag = "div",
  id,
  onClick,
}: CardProps) {
  return (
    <Tag
      id={id}
      onClick={onClick}
      className={cn(
        "rounded-xl",
        variantClasses[variant],
        hover && [
          "transition-all duration-300",
          "hover:border-cyan-400/40 hover:shadow-glow-cyan",
          "hover:-translate-y-1",
          onClick && "cursor-pointer",
        ],
        className
      )}
    >
      {children}
    </Tag>
  );
}

// ─── Card Sub-components ──────────────────────────────────────────────────────

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-6 pb-6 pt-0 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
}
