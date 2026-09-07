"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Headphones,
  Network,
  Radar,
  Search,
  Compass,
  Sliders,
  Activity,
  Lock,
  ArrowRight,
  Check,
  FileText,
} from "lucide-react";
import { Container, Button } from "@/components/ui";
import { FadeIn, AnimatedCounter } from "@/components/motion";

export function CybersecuritySection() {
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
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading & CTA */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Pill Badge */}
              <FadeIn delay={0.05}>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Cybersecurity &amp; Infrastructure</span>
                </div>
              </FadeIn>

              {/* Main Headline */}
              <FadeIn delay={0.15}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                  Security by Design:{" "}
                  <span className="block mt-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                    Protecting Your Enterprise Digital Assets.
                  </span>
                </h1>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn delay={0.25}>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-normal">
                  Fortify your digital operations with military-grade encryption, proactive threat
                  hunting, and resilient infrastructure architectures designed for the AI era.
                </p>
              </FadeIn>

              {/* CTA Button */}
              <FadeIn delay={0.35}>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/quote"
                    className="rounded-xl px-7 py-3.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B0E14] font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:brightness-105 transition-all text-sm sm:text-base inline-flex items-center gap-2"
                  >
                    <span>Initiate Security Audit</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: High-Tech Security Emblem Card */}
            <div className="lg:col-span-5 flex justify-center">
              <FadeIn delay={0.2} className="w-full max-w-[440px]">
                <div className="relative rounded-3xl border border-white/[0.08] bg-[#0B0F17] p-8 sm:p-10 shadow-2xl overflow-hidden aspect-square flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300">
                  {/* Subtle Inner Glow */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 opacity-70 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top Right Status Badge */}
                  <div className="flex justify-end relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono font-medium text-slate-300 backdrop-blur-sm">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>System Secure</span>
                    </div>
                  </div>

                  {/* Center Emblem Visual */}
                  <div className="flex flex-col items-center justify-center my-auto relative z-10 py-4">
                    {/* Glowing Circular Shield / Quantum Circuit Node */}
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                      {/* Ambient Radial Aura */}
                      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />

                      {/* SVG Emblem matching Figma design */}
                      <svg
                        viewBox="0 0 160 160"
                        className="w-full h-full relative z-10 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Outer circular circuit track with gap */}
                        <circle
                          cx="75"
                          cy="75"
                          r="54"
                          stroke="#22D3EE"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray="260 40"
                        />

                        {/* Search / Magnifier Handle projecting to bottom right */}
                        <path
                          d="M112 112L138 138"
                          stroke="#22D3EE"
                          strokeWidth="10"
                          strokeLinecap="round"
                        />

                        {/* Inner Microchip Box */}
                        <rect
                          x="55"
                          y="55"
                          width="40"
                          height="40"
                          rx="6"
                          stroke="#38BDF8"
                          strokeWidth="3"
                          fill="#0D1524"
                        />

                        {/* Central 'Q' monogram inside chip */}
                        <text
                          x="75"
                          y="81"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="22"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          Q
                        </text>

                        {/* Circuit trace pins */}
                        <line x1="75" y1="36" x2="75" y2="55" stroke="#38BDF8" strokeWidth="2.5" />
                        <circle cx="75" cy="34" r="3.5" fill="#38BDF8" />

                        <line x1="75" y1="95" x2="75" y2="114" stroke="#38BDF8" strokeWidth="2.5" />
                        <circle cx="75" cy="116" r="3.5" fill="#38BDF8" />

                        <line x1="36" y1="75" x2="55" y2="75" stroke="#38BDF8" strokeWidth="2.5" />
                        <circle cx="34" cy="75" r="3.5" fill="#38BDF8" />

                        <line x1="95" y1="75" x2="114" y2="75" stroke="#38BDF8" strokeWidth="2.5" />
                        <circle cx="116" cy="75" r="3.5" fill="#38BDF8" />
                      </svg>
                    </div>

                    {/* Wordmark beneath emblem */}
                    <p className="mt-3 text-2xl font-black tracking-tight text-white flex items-center gap-1">
                      <span>Qracle</span>
                      <span className="text-cyan-400">AI</span>
                    </p>
                  </div>

                  {/* Bottom Left Status Badge */}
                  <div className="flex justify-start relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>Live Monitoring: Active</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 2. ENTERPRISE DEFENSE CAPABILITIES (BENTO GRID)                        */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-t border-white/[0.06]">
        <Container>
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
                Enterprise Defense Capabilities
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Comprehensive protection vectors engineered to anticipate, detect, and neutralize complex cyber threats.
              </p>
            </FadeIn>
          </div>

          {/* Asymmetric Bento Grid Layout */}
          <div className="space-y-6">
            {/* Top Row: Large Card (Left) + Stacked Cards (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Card 1: Managed Security Operations (7 cols on lg) */}
              <div className="lg:col-span-7">
                <FadeIn delay={0.1} className="h-full">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0E131F] p-8 sm:p-10 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group shadow-xl relative overflow-hidden">
                    {/* Top ambient highlight */}
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                        <Headphones className="h-6 w-6 stroke-[1.8]" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                        Managed Security Operations
                      </h3>

                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
                        24/7/365 continuous monitoring and rapid incident response orchestration powered by AI-driven threat intelligence.
                      </p>
                    </div>

                    {/* Bottom Features & Link */}
                    <div className="pt-8 mt-6 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                          <Check className="h-3.5 w-3.5 text-cyan-400" />
                          <span>SOC as a Service</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                          <Check className="h-3.5 w-3.5 text-cyan-400" />
                          <span>Threat Hunting</span>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all self-start sm:self-auto"
                      >
                        <span>Explore</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Stacked Cards Column (5 cols on lg) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                {/* Card 2: Compliance Audits */}
                <FadeIn delay={0.15} className="flex-1">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0E131F] p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group shadow-lg">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="h-5 w-5 stroke-[1.8]" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        Compliance Audits
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        Rigorous framework assessments ensuring adherence to SOC2, ISO 27001, and GDPR.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Card 3: Network Protection */}
                <FadeIn delay={0.2} className="flex-1">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0E131F] p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group shadow-lg">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Network className="h-5 w-5 stroke-[1.8]" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        Network Protection
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        Zero-trust architecture implementation and advanced firewall perimeter defense.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Bottom Row: Full-Width Card (Advanced Threat Detection) */}
            <FadeIn delay={0.25}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#0E131F] p-7 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 group shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    {/* Glowing radar/target icon with reddish-amber accent */}
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                      <Radar className="h-6 w-6 stroke-[1.8]" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                        Advanced Threat Detection
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                        Utilizing behavioral analytics and machine learning algorithms to identify anomalous activity before exfiltration occurs.
                      </p>
                    </div>
                  </div>

                  {/* Badges on right side */}
                  <div className="flex items-center gap-2 self-start md:self-auto shrink-0 font-mono text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
                      AI-Powered
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300">
                      Heuristics
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 3. DEPLOYMENT METHODOLOGY SECTION                                      */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative bg-[#090C12] border-t border-white/[0.06]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
                Deployment Methodology
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                A structured, four-phase approach to securing your infrastructure.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: Search,
                title: "Audit",
                description: "Comprehensive vulnerability scanning and infrastructure mapping.",
                active: false,
              },
              {
                step: "2",
                icon: Compass,
                title: "Strategy",
                description: "Designing a bespoke zero-trust architecture and remediation plan.",
                active: false,
              },
              {
                step: "3",
                icon: Sliders,
                title: "Implementation",
                description: "Deploying controls, firewalls, and encryption protocols seamlessly.",
                active: false,
              },
              {
                step: "4",
                icon: Activity,
                title: "Monitoring",
                description: "Continuous SOC oversight and automated threat response.",
                active: true,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.step} delay={0.08 * (idx + 1)}>
                  <div className="text-center space-y-4 group">
                    {/* Circle Node Container */}
                    <div className="relative mx-auto w-20 h-20 rounded-full bg-[#0E131F] border border-white/[0.1] flex items-center justify-center group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                      {/* Step Number Tag */}
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
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
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
      {/* 4. FEATURED CASE STUDY                                                 */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-t border-white/[0.06]">
        <Container>
          <FadeIn>
            <div className="rounded-3xl border border-white/[0.08] bg-[#0E131F] p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Column: Details */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider font-mono uppercase">
                    <FileText className="h-3.5 w-3.5" />
                    <span>FEATURED CASE STUDY</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    Securing Global Financial Data
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                    How QracleAI implemented a zero-trust architecture for a Tier-1 bank, mitigating
                    a sophisticated ransomware attempt within milliseconds.
                  </p>

                  {/* Impact Stats */}
                  <div className="flex items-center gap-8 pt-2">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                        0 ms
                      </div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        Downtime
                      </p>
                    </div>

                    <div className="h-10 w-px bg-white/[0.08]" />

                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                        <AnimatedCounter from={0} to={100} suffix="%" duration={1.5} />
                      </div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        Threats Neutralized
                      </p>
                    </div>
                  </div>

                  {/* Read Case Study Button */}
                  <div className="pt-2">
                    <Button
                      variant="ghost"
                      size="md"
                      href="/case-studies"
                      className="rounded-xl px-5 py-2.5 bg-white/[0.03] border border-white/[0.1] text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/40 text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Right Column: High-Tech Concentric Radar Lock Visual */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

                    {/* Concentric Radar Rings */}
                    <div className="absolute inset-0 rounded-full border border-cyan-500/15" />
                    <div className="absolute inset-6 rounded-full border border-cyan-500/25" />
                    <div className="absolute inset-12 rounded-full border border-cyan-500/35" />
                    <div className="absolute inset-20 rounded-full border border-cyan-500/45" />

                    {/* Central Vault Core */}
                    <div className="relative w-24 h-24 rounded-full bg-[#0B0F17] border-2 border-cyan-400/60 flex items-center justify-center shadow-2xl shadow-cyan-950/60 group-hover:scale-105 transition-transform duration-300">
                      <Lock className="h-10 w-10 text-cyan-300 stroke-[1.8] drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
