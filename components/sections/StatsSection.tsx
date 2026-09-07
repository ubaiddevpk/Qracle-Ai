import { Container, SectionWrapper } from "@/components/ui";
import { StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/motion";

/**
 * StatsSection — Reusable grid of animated metric statistics.
 * Counts animate up when the section scrolls into view.
 *
 * @example
 * <StatsSection stats={[
 *   { value: 2500, suffix: "+", label: "Enterprise Clients" },
 *   { value: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 },
 * ]} />
 */

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  decimals?: number;
}

interface StatsSectionProps {
  stats: Stat[];
  headline?: string;
  id?: string;
  className?: string;
}

const defaultStats: Stat[] = [
  { value: 2500, suffix: "+", label: "Enterprise Clients", description: "Globally trusted" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", description: "Guaranteed reliability", decimals: 1 },
  { value: 150, suffix: "M+", label: "API Calls / Day", description: "At peak throughput" },
  { value: 4.9, suffix: "/5", label: "Customer Rating", description: "Average satisfaction", decimals: 1 },
];

export function StatsSection({
  stats = defaultStats,
  headline,
  id = "stats-section",
  className,
}: StatsSectionProps) {
  return (
    <SectionWrapper size="md" id={id} className={className}>
      <Container>
        {headline && (
          <h2 className="text-center text-2xl font-semibold text-content-secondary mb-12">
            {headline}
          </h2>
        )}

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StaggerItem key={i} variant="fadeUp">
              <div className="text-center">
                <div className="text-4xl font-extrabold tracking-tight gradient-text sm:text-5xl">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals ?? 0}
                    duration={2}
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-content-primary">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="mt-1 text-xs text-content-tertiary">
                    {stat.description}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
