import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Button — Design system button component.
 * Supports primary (gradient), ghost, secondary, and danger variants.
 *
 * @example
 * <Button variant="primary" size="lg">Get Started</Button>
 * <Button variant="ghost" size="sm" href="/services">Learn More</Button>
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "secondary" | "danger" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** If provided, renders as Next.js Link */
  href?: string;
  /** Shows a loading spinner and disables interaction */
  loading?: boolean;
  /** Icon to show on the left */
  leftIcon?: React.ReactNode;
  /** Icon to show on the right */
  rightIcon?: React.ReactNode;
  /** Stretch to full container width */
  fullWidth?: boolean;
  asChild?: boolean;
}

const variantClasses: Record<string, string> = {
  primary: [
    "bg-gradient-to-r from-cyan-400 to-blue-600",
    "text-white font-semibold",
    "shadow-md hover:shadow-glow-cyan",
    "hover:from-cyan-300 hover:to-blue-500",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none",
    "active:scale-[0.98]",
  ].join(" "),

  ghost: [
    "border border-cyan-400/30 text-content-primary font-semibold",
    "hover:border-cyan-400 hover:bg-cyan-400/10",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "active:scale-[0.98]",
  ].join(" "),

  secondary: [
    "bg-surface-default text-content-primary font-semibold",
    "border border-surface-elevated",
    "hover:bg-surface-elevated hover:border-cyan-400/30",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "active:scale-[0.98]",
  ].join(" "),

  danger: [
    "bg-red-600 text-white font-semibold",
    "hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "active:scale-[0.98]",
  ].join(" "),

  link: [
    "text-cyan-400 font-medium underline-offset-4",
    "hover:underline hover:text-cyan-300",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "p-0 h-auto",
  ].join(" "),
};

const sizeClasses: Record<string, string> = {
  xs: "h-7 px-3 text-xs rounded-full",
  sm: "h-9 px-4 text-sm rounded-full",
  md: "h-11 px-6 text-sm rounded-full",
  lg: "h-12 px-7 text-base rounded-full",
  xl: "h-14 px-9 text-base rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const combinedClasses = cn(
      // Base
      "inline-flex items-center justify-center gap-2",
      "transition-all duration-200",
      "select-none focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
      // Variant
      variantClasses[variant],
      // Size (skip for "link" variant)
      variant !== "link" && sizeClasses[size],
      // Width
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {loading ? (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses} id={props.id}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
