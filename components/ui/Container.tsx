import { cn } from "@/lib/utils";

/**
 * Container — Max-width wrapper with consistent horizontal padding.
 *
 * Every page must wrap its content inside Container to keep alignment
 * consistent across the entire site (max-width: 1280px).
 *
 * @example
 * <Container>
 *   <h1>Page content</h1>
 * </Container>
 *
 * @example With a different max-width
 * <Container size="narrow">
 *   <Article />
 * </Container>
 */

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * - "default" → 1280px (standard pages)
   * - "narrow"  → 768px  (blog posts, legal pages)
   * - "wide"    → 1440px (full-bleed sections)
   * - "full"    → 100%   (edge-to-edge with padding)
   */
  size?: "narrow" | "default" | "wide" | "full";
  as?: React.ElementType;
}

const sizeClasses: Record<string, string> = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-screen-2xl",
  full: "w-full",
};

export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
