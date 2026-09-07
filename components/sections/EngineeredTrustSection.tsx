"use client";

import { CheckCircle2 } from "lucide-react";
import { Container, SectionWrapper } from "@/components/ui";
import { FadeIn, SlideUp, AnimatedCounter } from "@/components/motion";

const trustPoints = [
  "99.9% Service Level Agreement Guarantee",
  "Zero-Trust High-Security Architecture",
  "24/7 Dedicated Support & Monitoring",
  "Tailored ROI-Driven Implementation",
];

const stats = [
  { value: 50, suffix: "+", label: "ENTERPRISE CLIENTS" },
  { value: 99.9, suffix: "%", label: "UPTIME SLA", decimals: 1 },
  { customValue: "24/7", label: "SUPPORT" },
  { value: 5, suffix: "+", label: "YEARS EXCELLENCE" },
];

export function EngineeredTrustSection() {
  return (
    <SectionWrapper id="about" size="lg" className="relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Checklist */}
          <div className="lg:col-span-6">
            <FadeIn>
              <SlideUp>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight mb-6">
                  Engineered for Trust,{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block sm:inline">
                    Built for Scale
                  </span>
                </h2>
              </SlideUp>

              <SlideUp delay={0.1}>
                <div className="space-y-4 pt-2">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3.5">
                      <div className="h-5 w-5 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-300 font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </SlideUp>
            </FadeIn>
          </div>

          {/* Right Column: Unified Stats Card */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.15}>
              <div className="rounded-2xl bg-[#0F1219] border border-white/[0.08] p-6 sm:p-8 shadow-xl shadow-black/40">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-white/[0.08]">
                  {stats.map((stat, idx) => (
                    <div
                      key={stat.label}
                      className={`text-center ${idx > 0 ? "sm:px-4" : "sm:pr-4"} ${
                        idx === 0 ? "sm:pl-0" : ""
                      }`}
                    >
                      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1.5">
                        {stat.customValue ? (
                          <span>{stat.customValue}</span>
                        ) : (
                          <AnimatedCounter
                            to={stat.value ?? 0}
                            suffix={stat.suffix}
                            decimals={stat.decimals ?? 0}
                            duration={2}
                          />
                        )}
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 uppercase leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
