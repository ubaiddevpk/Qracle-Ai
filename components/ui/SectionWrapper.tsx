import { cn } from "@/lib/utils";

/**
 * SectionWrapper — Consistent vertical spacing between page sections.
 *
 * Every section on every page must use SectionWrapper to ensure identical
 * vertical rhythm throughout the site. The padding-y scale is defined in
 * /lib/theme.ts and mirrored in tailwind.config.ts spacing tokens.
 *
 * @example
 * <SectionWrapper id="services">
 *   <Container>
 *     <ServiceGrid />
 *   </Container>
 * </SectionWrapper>
 *
 * @example Larger hero variant
 * <SectionWrapper size="xl" id="hero">
 *   <HeroContent />
 * </SectionWrapper>
 */

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * - "sm"  → py-12   (48px)  — compact sections (e.g., logos, dividers)
   * - "md"  → py-20   (80px)  — standard sections (default)
   * - "lg"  → py-28   (112px) — feature sections
   * - "xl"  → py-36   (144px) — hero, major sections
   * - "none"→ no padding (manual control)
   */
  size?: "sm" | "md" | "lg" | "xl" | "none";
  as?: React.ElementType;
}

const sizeClasses: Record<string, string> = {
  sm: "py-12",
  md: "py-20",
  lg: "py-28",
  xl: "py-36",
  none: "",
};

export function SectionWrapper({
  children,
  className,
  id,
  size = "md",
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn("relative w-full", sizeClasses[size], className)}
    >
      {children}
    </Tag>
  );
}
