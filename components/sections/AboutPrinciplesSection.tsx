"use client";

import {
  Target,
  ShieldCheck,
  Compass,
  Brain,
  HeartHandshake,
} from "lucide-react";
import { Container } from "@/components/ui";
import { FadeIn } from "@/components/motion";

const PRINCIPLES = [
  {
    title: "Client-First Quality",
    description:
      "We align our technical architecture with your business objectives, ensuring solutions that drive measurable value and impeccable reliability.",
    icon: Target,
  },
  {
    title: "Security by Design",
    description:
      "Security is not an afterthought; it is embedded into the fabric of our codebase, infrastructure, and operational protocols from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Ownership",
    description:
      "We take absolute accountability for our deliverables. When we build a system, we own its performance, scalability, and long-term viability.",
    icon: Compass,
  },
  {
    title: "Continuous Learning",
    description:
      "In a rapidly evolving AI landscape, stagnation is obsolescence. We aggressively pursue new methodologies and frontier technologies.",
    icon: Brain,
  },
  {
    title: "Respect",
    description:
      "Fostering a culture of mutual respect across borders, disciplines, and client relationships to build cohesive, high-performing teams.",
    icon: HeartHandshake,
  },
];

export function AboutPrinciplesSection() {
  const topRow = PRINCIPLES.slice(0, 3);
  const bottomRow = PRINCIPLES.slice(3, 5);

  return (
    <section className="py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-3">
              Core Principles
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              The foundational algorithms that drive our culture and client success.
            </p>
          </FadeIn>
        </div>

        {/* Principles Cards Layout */}
        <div className="space-y-6">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRow.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <FadeIn key={principle.title} delay={0.1 * (index + 1)}>
                  <div className="h-full p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0E131F] hover:border-cyan-500/35 hover:bg-[#121826] transition-all duration-300 shadow-md group">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bottomRow.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <FadeIn key={principle.title} delay={0.4 + 0.1 * index}>
                  <div className="h-full p-7 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0E131F] hover:border-cyan-500/35 hover:bg-[#121826] transition-all duration-300 shadow-md group">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
