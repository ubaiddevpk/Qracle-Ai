"use client";

import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Activity, Cpu } from "lucide-react";
import { Container, SectionWrapper, Button } from "@/components/ui";
import { FadeIn, SlideUp } from "@/components/motion";

export function FeaturedCaseStudySection() {
  return (
    <SectionWrapper id="case-studies" size="lg" className="relative">
      <Container>
        {/* Section Header with View All Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <FadeIn>
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Featured{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Case Study
                </span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                See how we delivered real-world impact for enterprise clients.
              </p>
            </SlideUp>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Unified Case Study Card */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl bg-[#0F1219] border border-white/[0.08] hover:border-cyan-400/30 transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            {/* Left Column: Rich Dashboard Visualization */}
            <div className="lg:col-span-7 bg-[#090C12] p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
              {/* Subtle top dashboard bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-medium text-slate-300 tracking-wide">
                    QARACLE LOGISTICS INTELLIGENCE
                  </span>
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* KPI Mini-Tiles */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-[#141822] rounded-lg p-2.5 border border-white/[0.06]">
                  <p className="text-[10px] text-slate-400 font-medium">Route Efficiency</p>
                  <p className="text-base sm:text-lg font-bold text-white flex items-center gap-1">
                    +42.8%
                    <TrendingUp className="h-3 w-3 text-emerald-400" />
                  </p>
                </div>
                <div className="bg-[#141822] rounded-lg p-2.5 border border-white/[0.06]">
                  <p className="text-[10px] text-slate-400 font-medium">Avg Latency</p>
                  <p className="text-base sm:text-lg font-bold text-cyan-400 flex items-center gap-1">
                    8.2ms
                    <Activity className="h-3 w-3 text-cyan-400" />
                  </p>
                </div>
                <div className="bg-[#141822] rounded-lg p-2.5 border border-white/[0.06]">
                  <p className="text-[10px] text-slate-400 font-medium">Active Nodes</p>
                  <p className="text-base sm:text-lg font-bold text-slate-200 flex items-center gap-1">
                    1,420
                    <Cpu className="h-3 w-3 text-blue-400" />
                  </p>
                </div>
              </div>

              {/* World Route Map Graphic */}
              <div className="relative rounded-xl bg-[#0B0E16] border border-white/[0.06] p-4 my-auto overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Globe className="h-3.5 w-3.5 text-cyan-400" /> Global Dispatch Network
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">99.98% On-Time</span>
                </div>

                {/* SVG Visual Map & Route Connections */}
                <svg
                  viewBox="0 0 500 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <defs>
                    <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
                    </linearGradient>
                    <radialGradient id="glowPoint" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#22D3EE" stopOpacity="1" />
                      <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="20" y1="40" x2="480" y2="40" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="20" y1="90" x2="480" y2="90" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />
                  <line x1="20" y1="140" x2="480" y2="140" stroke="#1E293B" strokeWidth="0.8" strokeDasharray="3 3" />

                  {/* Route Arcs */}
                  <path
                    d="M 60 120 Q 150 40 240 70 T 420 60"
                    stroke="url(#routeGrad)"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M 120 135 Q 260 110 380 120"
                    stroke="url(#routeGrad)"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    fill="none"
                    opacity="0.7"
                  />
                  <path
                    d="M 240 70 Q 320 120 440 100"
                    stroke="url(#routeGrad)"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Nodes with pulsing aura */}
                  <circle cx="60" cy="120" r="10" fill="url(#glowPoint)" />
                  <circle cx="60" cy="120" r="4" fill="#22D3EE" />

                  <circle cx="240" cy="70" r="12" fill="url(#glowPoint)" />
                  <circle cx="240" cy="70" r="5" fill="#22D3EE" />

                  <circle cx="420" cy="60" r="10" fill="url(#glowPoint)" />
                  <circle cx="420" cy="60" r="4" fill="#60A5FA" />

                  <circle cx="120" cy="135" r="3.5" fill="#38BDF8" />
                  <circle cx="380" cy="120" r="4" fill="#38BDF8" />
                  <circle cx="440" cy="100" r="3.5" fill="#2563EB" />
                </svg>

                {/* Bottom miniature telemetry charts */}
                <div className="grid grid-cols-4 gap-2 pt-3 mt-2 border-t border-white/[0.04] text-[11px] text-slate-400">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">Throughput</span>
                    <span className="text-slate-200 font-mono font-medium">84.2k/hr</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">Variance</span>
                    <span className="text-emerald-400 font-mono font-medium">-24.1%</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">Autonomous</span>
                    <span className="text-cyan-400 font-mono font-medium">96.8%</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">SLA Target</span>
                    <span className="text-slate-200 font-mono font-medium">PASS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Case Study Details & Action */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase w-fit mb-4">
                LOGISTICS & SUPPLY CHAIN
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                Global Logistics AI Optimization
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                Reduced route planning overhead by 42% and improved delivery time predictability through edge AI models and automated dispatch systems.
              </p>

              {/* CTA Button */}
              <div>
                <Button
                  variant="primary"
                  size="md"
                  href="/case-studies/global-logistics-ai"
                  className="shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 text-sm font-semibold px-6"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  View Case Study
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </SectionWrapper>
  );
}
