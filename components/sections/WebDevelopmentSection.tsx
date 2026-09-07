"use client";

import Link from "next/link";
import {
  Code2,
  LayoutGrid,
  Network,
  ShieldCheck,
  Search,
  PenTool,
  Cpu,
  Rocket,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Container, Button } from "@/components/ui";
import { FadeIn, AnimatedCounter } from "@/components/motion";

// ─── Tech Stack Data ─────────────────────────────────────────────────────────

const TECH_STACK = [
  { name: "React / Next.js", icon: "⚛", category: "Frontend" },
  { name: "Node.js", icon: "⬢", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "TypeScript", icon: "TS", category: "Language" },
  { name: "AWS / Cloud Native", icon: "☁", category: "Infrastructure" },
];

// ─── Core Capabilities Data ──────────────────────────────────────────────────

const CAPABILITIES = [
  {
    id: "mern",
    icon: Code2,
    title: "Full-Stack (MERN)",
    description:
      "End-to-end application architecture utilizing MongoDB, Express, React, and Node.js for seamless, high-performance web experiences.",
  },
  {
    id: "ui-ux",
    icon: LayoutGrid,
    title: "UI/UX Design",
    description:
      "Data-driven interface design focusing on frictionless user journeys, intuitive navigation, and aligning aesthetics with corporate identity.",
  },
  {
    id: "api",
    icon: Network,
    title: "API Development",
    description:
      "Robust, secure, and scalable RESTful and GraphQL APIs designed to connect disparate systems and power complex data pipelines.",
  },
  {
    id: "qa",
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous automated and manual testing protocols ensuring zero-defect deployments, ironclad security, and optimal runtime stability.",
  },
];

// ─── Execution Methodology Data ──────────────────────────────────────────────

const METHODOLOGY_STEPS = [
  {
    step: "01",
    icon: Search,
    title: "DISCOVER",
    description:
      "Comprehensive requirements gathering, stakeholder alignment, system architecture planning, and rigorous technical feasibility analysis.",
    active: false,
  },
  {
    step: "02",
    icon: PenTool,
    title: "DESIGN",
    description:
      "Interactive prototyping, high-fidelity wireframing, and the development of cohesive UI/UX systems tailored for optimal user engagement.",
    active: false,
  },
  {
    step: "03",
    icon: Cpu,
    title: "DEVELOP",
    description:
      "Agile engineering sprints, robust component-driven frontend, scalable backend communication, and core business logic implementation.",
    active: true,
  },
  {
    step: "04",
    icon: Rocket,
    title: "DEPLOY",
    description:
      "Automated CI/CD pipeline execution, staging environment testing, secure staging environments, and seamless production release.",
    active: false,
  },
];

export function WebDevelopmentSection() {
  return (
    <div className="relative overflow-hidden bg-[#0B0E14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient radial gradients */}
      <div
        className="absolute top-0 left-1/4 w-[750px] h-[550px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-[45%] right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-[75%] left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                                        */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading, Subtitle & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Pill Badge */}
              <FadeIn delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-300 tracking-wide uppercase mb-1 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Web &amp; App Development</span>
                </div>
              </FadeIn>

              {/* Main Headline */}
              <FadeIn delay={0.15}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                  Software Built for{" "}
                  <span className="block mt-1 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Growth
                  </span>
                </h1>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn delay={0.25}>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-normal">
                  Engineer scalable, high-performance web and mobile applications designed to optimize enterprise workflows,
                  secure data pipelines, and drive tangible business outcomes. We deliver precision at every layer of the stack.
                </p>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn delay={0.35}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/quote"
                    className="rounded-xl px-7 py-3.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B0E14] font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:brightness-105 transition-all text-sm sm:text-base inline-flex items-center gap-2"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="lg"
                    href="#capabilities"
                    className="rounded-xl px-7 py-3.5 bg-white/[0.04] border border-white/[0.12] hover:border-cyan-500/40 text-white font-semibold hover:bg-cyan-500/10 transition-all text-sm sm:text-base"
                  >
                    Explore Capabilities
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Hero High-Tech Microchip Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn delay={0.2} className="w-full max-w-[480px]">
                <div className="relative rounded-3xl border border-cyan-500/25 bg-[#0B0F17] p-2 shadow-2xl shadow-cyan-950/40 overflow-hidden group hover:border-cyan-500/45 transition-all duration-500">
                  {/* Outer Glow */}
                  <div
                    className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* High-Resolution Chip Motherboard Image */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#070A0F]">
                    <img
                      src="/web-hero-chip.jpg"
                      alt="QracleAI Quantum Processor — Web & App Development"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay & Branding Text matching Figma */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 inset-x-4 text-center">
                      <p className="text-xs font-mono font-bold tracking-wider text-cyan-300 drop-shadow-md">
                        QracleAI | Web &amp; App Development
                      </p>
                      <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                        SECURE DATA TRANSMISSION
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 2. TECH STACK STRIP                                                    */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-6 bg-[#070A0F] border-y border-white/[0.06] relative">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
            {TECH_STACK.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-slate-300 font-mono text-xs sm:text-sm font-semibold hover:text-cyan-300 transition-colors group cursor-default"
              >
                <span className="text-base text-cyan-400 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 3. CORE CAPABILITIES (4-COLUMN CARDS)                                  */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="capabilities" className="py-20 md:py-28 relative">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Core Capabilities
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                We employ a robust, modern technology stack to deliver end-to-end solutions, ensuring every facet
                of your digital ecosystem is engineered for quantum precision and scalability.
              </p>
            </FadeIn>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <FadeIn key={cap.id} delay={0.08 * (idx + 1)} className="h-full">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0E131F] p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-[#121826] transition-all duration-300 group shadow-xl relative overflow-hidden">
                    {/* Top hover accent line */}
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shadow-sm">
                        <Icon className="h-6 w-6 stroke-[1.8]" />
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                        {cap.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      <span>Enterprise Ready</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 4. EXECUTION METHODOLOGY (4-PHASE TIMELINE)                            */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative bg-[#090C12] border-t border-white/[0.06]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
                Execution Methodology
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                A structured, battle-tested framework for delivering mission-critical digital products.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {METHODOLOGY_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.step} delay={0.08 * (idx + 1)}>
                  <div className="text-center space-y-4 group">
                    {/* Circle Node Container */}
                    <div className="relative mx-auto w-20 h-20 rounded-full bg-[#0E131F] border border-white/[0.1] flex items-center justify-center group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                      {/* Step Number Badge */}
                      <span
                        className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center shadow-md ${
                          item.active
                            ? "bg-cyan-500 text-[#0B0E14] ring-2 ring-cyan-400/40 animate-pulse"
                            : "bg-[#141A29] border border-white/[0.12] text-slate-300"
                        }`}
                      >
                        {item.step}
                      </span>

                      {/* Icon */}
                      <Icon className="h-8 w-8 text-slate-300 group-hover:text-cyan-400 transition-colors stroke-[1.7]" />
                    </div>

                    {/* Step Title & Description */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 5. METRICS / IMPACT BAR                                                */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#080B11] border-y border-white/[0.06] relative">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeIn delay={0.05}>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight">
                  <AnimatedCounter from={0} to={50} suffix="+" duration={1.5} />
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  APPLICATIONS DELIVERED
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-300 font-mono tracking-tight">
                  <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" duration={1.5} />
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  UPTIME POST-LAUNCH
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight">
                  2x
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  FASTER TIME-TO-MARKET
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-400 font-mono tracking-tight">
                  <AnimatedCounter from={0} to={100} suffix="%" duration={1.5} />
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  CODE REVIEW COVERAGE
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 6. FEATURED CASE STUDY WITH ACTUAL DASHBOARD IMAGE                      */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-t border-white/[0.06]">
        <Container>
          <FadeIn>
            <div className="rounded-3xl border border-white/[0.08] bg-[#0E131F] p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Column: Case Study Details */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider font-mono uppercase">
                    <span>★ FEATURED CASE STUDY</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Custom Dashboard for Logistics Enterprise
                  </h3>

                  {/* Quote Block */}
                  <div className="pl-4 border-l-2 border-cyan-500/50 py-1">
                    <p className="text-sm sm:text-base text-slate-300 italic font-medium">
                      &ldquo;Streamlined global operations with 40% efficiency gain.&rdquo;
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    Designed and architected a high-throughput telemetry analytics console featuring real-time node tracking,
                    threat intelligence, and multi-region fleet monitoring.
                  </p>

                  {/* View Case Study Button */}
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      size="md"
                      href="/case-studies"
                      className="rounded-xl px-5 py-2.5 bg-white/[0.03] border border-white/[0.1] text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/40 text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Right Column: Actual Saved High-Res Dashboard Image */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl border border-cyan-500/25 bg-[#080B12] p-2 shadow-2xl shadow-cyan-950/40 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-500">
                    <img
                      src="/dashboard-preview.png"
                      alt="Quantum Analytics Suite — Custom Dashboard for Logistics Enterprise"
                      className="w-full h-auto rounded-xl object-cover shadow-inner hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 7. READY TO SCALE? (BOTTOM CTA BANNER)                                 */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative">
        <Container>
          <FadeIn>
            <div className="relative rounded-3xl bg-gradient-to-b from-[#121622] via-[#0D1018] to-[#0A0D14] border border-white/[0.08] p-10 sm:p-16 text-center overflow-hidden shadow-2xl">
              {/* Ambient cyan glow inside card */}
              <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-2xl mx-auto space-y-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  Ready to Scale?
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  Schedule a technical consultation to discuss architecture, timeline, and resource allocation
                  for your next major software initiative.
                </p>

                <div className="pt-4 flex justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/quote"
                    className="rounded-xl px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B0E14] font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 text-sm sm:text-base inline-flex items-center gap-2"
                  >
                    <span>Request Project Consultation</span>
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
