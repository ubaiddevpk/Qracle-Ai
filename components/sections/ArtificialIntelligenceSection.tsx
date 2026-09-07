"use client";

import Link from "next/link";
import {
  Bot,
  TrendingUp,
  Eye,
  Sliders,
  FileText,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Activity,
  Cpu,
  Search,
  Send,
  Sparkles,
  Server,
  Globe2,
  Lock,
} from "lucide-react";
import { Container, Button } from "@/components/ui";
import {
  FadeIn,
  AnimatedCounter,
} from "@/components/motion";

// ─── Core Capabilities Data ──────────────────────────────────────────────────

const CAPABILITIES = [
  {
    id: "chatbots",
    icon: Bot,
    title: "AI Chatbots & Automation",
    description:
      "Deploy intelligent conversational agents that understand context, execute workflows, and integrate seamlessly across your tech stack.",
  },
  {
    id: "predictive-analytics",
    icon: TrendingUp,
    title: "Predictive Analytics",
    description:
      "Forecast trends, anticipate disruptions, and optimize decision-making with custom-trained machine learning models.",
  },
  {
    id: "computer-vision",
    icon: Eye,
    title: "Computer Vision",
    description:
      "Implement visual inspection systems, automated quality control, and facial recognition with industrial-grade accuracy.",
  },
  {
    id: "custom-llm",
    icon: Sliders,
    title: "Custom LLM Integration",
    description:
      "Fine-tune and deploy proprietary large language models tailored to your industry, secured within your own infrastructure.",
  },
  {
    id: "nlp",
    icon: FileText,
    title: "Natural Language Processing",
    description:
      "Extract actionable insights from unstructured text data, automate document processing, and sentiment analysis.",
  },
  {
    id: "process-automation",
    icon: Zap,
    title: "Intelligent Process Automation",
    description:
      "Combine AI and RPA to automate complex, multi-step business workflows without manual intervention.",
  },
];

// ─── Deployment Methodology Data ─────────────────────────────────────────────

const METHODOLOGY_STEPS = [
  {
    step: "01",
    icon: Search,
    title: "Discover",
    description:
      "Audit data assets, determine feasibility, and define specific business objectives.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Model",
    description:
      "Architect, train, and benchmark custom AI models for maximum efficiency and precision.",
  },
  {
    step: "03",
    icon: Send,
    title: "Deploy",
    description:
      "Seamless integration into your existing infrastructure with containerized pipelines.",
  },
  {
    step: "04",
    icon: Activity,
    title: "Monitor",
    description:
      "Continuous performance tracking, drift detection, and automated model retraining.",
  },
];

export function ArtificialIntelligenceSection() {
  const [activeTab, setActiveTab] = useState<"telemetry" | "logs">("telemetry");

  return (
    <div className="relative overflow-hidden bg-[#0B0E14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-[40%] right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none -z-10"
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
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Pill Badge */}
            <FadeIn delay={0.05}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-300 tracking-wider uppercase mb-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ARTIFICIAL INTELLIGENCE</span>
              </div>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn delay={0.15}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Intelligence,{" "}
                <span className="block sm:inline bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Engineered
                </span>
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.25}>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
                Transform your business operations with applied, mission-critical AI solutions.
                We build robust, scalable architectures that empower data-driven enterprises.
              </p>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={0.35}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="#capabilities"
                  className="rounded-xl px-7 py-3.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B0E14] font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35 hover:brightness-105 transition-all text-sm sm:text-base"
                >
                  Explore Solutions
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="/quote"
                  className="rounded-xl px-7 py-3.5 bg-white/[0.04] border border-white/[0.12] hover:border-cyan-500/40 text-white font-semibold hover:bg-cyan-500/10 transition-all text-sm sm:text-base"
                >
                  Request Architecture
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 2. CORE CAPABILITIES SECTION                                           */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section id="capabilities" className="py-20 md:py-28 relative border-t border-white/[0.06]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Core Capabilities
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Advanced machine intelligence architectures designed for high-scale enterprise operations.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.id} delay={0.05 * (idx + 1)} className="h-full">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0E131F]/90 p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-[#121826] transition-all duration-300 group shadow-xl relative overflow-hidden">
                    {/* Top hover accent glow */}
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 transition-all duration-300 shadow-sm">
                        <Icon className="h-6 w-6 stroke-[1.8]" />
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center gap-1 text-xs font-semibold text-cyan-400/80 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all">
                      <span>Enterprise ready</span>
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
      {/* 3. "AI IN ACTION" INTERACTIVE DASHBOARD SHOWCASE                       */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative bg-[#090C12] border-t border-white/[0.06]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Feature highlights */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-2">
                  <Activity className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Real-Time Telemetry</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  AI in Action
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-2">
                  See how our enterprise AI models power real-time analytics, predictive intelligence,
                  and operational efficiency across complex global networks.
                </p>

                {/* Feature Bullets */}
                <div className="space-y-3.5 pt-4">
                  {[
                    "Real-time inference at microsecond latencies",
                    "Predictive neural modeling & continuous retraining",
                    "Automated multi-variant anomaly detection",
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm font-medium text-slate-300">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button
                    variant="ghost"
                    size="md"
                    href="/quote"
                    className="rounded-xl border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 text-sm"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Request Live Platform Demo
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Dashboard Mockup */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                <div className="relative">
                  {/* Ambient Glow */}
                  <div
                    className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-transparent rounded-3xl blur-2xl -z-10 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Browser / Application Window */}
                  <div className="rounded-2xl border border-cyan-500/30 bg-[#0A0E17]/95 shadow-2xl shadow-cyan-950/40 overflow-hidden backdrop-blur-md">
                    {/* Window Titlebar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#080B12] border-b border-white/[0.08]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-red-600/40" />
                        <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-yellow-600/40" />
                        <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-green-600/40" />
                      </div>
                      <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span>qaracle-ai-platform.enterprise.cloud</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                        LIVE
                      </div>
                    </div>

                    {/* Window Body */}
                    <div className="p-6 space-y-6">
                      {/* Top Metric Cards Row */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        <div className="rounded-xl bg-[#0F1422] border border-white/[0.06] p-3 sm:p-4 text-center">
                          <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            Inference /s
                          </p>
                          <p className="text-lg sm:text-2xl font-extrabold text-cyan-300 font-mono">
                            7,894
                          </p>
                          <span className="text-[10px] text-emerald-400 font-medium">↑ +14.2%</span>
                        </div>
                        <div className="rounded-xl bg-[#0F1422] border border-white/[0.06] p-3 sm:p-4 text-center">
                          <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            Model Uptime
                          </p>
                          <p className="text-lg sm:text-2xl font-extrabold text-white font-mono">
                            99.98%
                          </p>
                          <span className="text-[10px] text-cyan-400 font-medium">Zero-Downtime</span>
                        </div>
                        <div className="rounded-xl bg-[#0F1422] border border-white/[0.06] p-3 sm:p-4 text-center">
                          <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            Avg Latency
                          </p>
                          <p className="text-lg sm:text-2xl font-extrabold text-cyan-400 font-mono">
                            12.4ms
                          </p>
                          <span className="text-[10px] text-emerald-400 font-medium">Sub-20ms SLA</span>
                        </div>
                      </div>

                      {/* Middle Visual: Global Map + Cluster Analytics */}
                      <div className="rounded-xl bg-[#0D121F] border border-white/[0.06] p-4 relative overflow-hidden">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                          <div className="flex items-center gap-2">
                            <Globe2 className="h-4 w-4 text-cyan-400" />
                            <span className="text-xs font-semibold text-white">Global Neural Cluster Routing</span>
                          </div>
                          <span className="text-[11px] font-mono text-slate-400">42 Nodes Active</span>
                        </div>

                        {/* Simulated Telemetry Vector Graph */}
                        <div className="relative h-36 w-full flex items-center justify-center overflow-hidden rounded-lg bg-[#080C14]">
                          {/* Grid lines */}
                          <div
                            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"
                            aria-hidden="true"
                          />

                          {/* SVG Wave Chart */}
                          <svg
                            className="w-full h-full text-cyan-400"
                            viewBox="0 0 500 120"
                            fill="none"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0,80 Q60,20 120,60 T240,40 T360,70 T500,30 L500,120 L0,120 Z"
                              fill="url(#cyanGrad)"
                            />
                            <path
                              d="M0,80 Q60,20 120,60 T240,40 T360,70 T500,30"
                              stroke="#22D3EE"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <circle cx="120" cy="60" r="4" fill="#22D3EE" className="animate-ping" />
                            <circle cx="240" cy="40" r="4" fill="#22D3EE" />
                            <circle cx="360" cy="70" r="4" fill="#38BDF8" />
                            <circle cx="500" cy="30" r="4" fill="#22D3EE" />
                          </svg>

                          {/* Floating cluster tags */}
                          <div className="absolute top-2 left-4 text-[10px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded">
                            LON-HQ: 1.8 ms
                          </div>
                          <div className="absolute bottom-2 right-4 text-[10px] font-mono text-blue-300 bg-blue-950/70 border border-blue-500/30 px-2 py-0.5 rounded">
                            LHE-ENG: 2.1 ms
                          </div>
                        </div>
                      </div>

                      {/* Bottom Activity Log */}
                      <div className="rounded-xl bg-[#090D16] border border-white/[0.04] p-3 space-y-1.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-slate-400">
                          <span className="text-cyan-400">[19:22:04]</span>
                          <span className="truncate max-w-[280px] sm:max-w-md">
                            Checkpoint loaded: <span className="text-white font-semibold">Qaracle-Engine-v4</span>
                          </span>
                          <span className="text-emerald-400 font-semibold">OPTIMAL</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-400">
                          <span className="text-cyan-400">[19:22:01]</span>
                          <span className="truncate max-w-[280px] sm:max-w-md">
                            Computer Vision stream: 60 FPS verified
                          </span>
                          <span className="text-cyan-300">ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 4. DEPLOYMENT METHODOLOGY SECTION                                      */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative border-t border-white/[0.06]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Deployment Methodology
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                A rigorous, end-to-end framework for deploying AI into enterprise environments.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.step} delay={0.08 * (idx + 1)} className="h-full">
                  <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0E131F] p-7 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-[#121826] transition-all duration-300 group shadow-lg relative">
                    <div>
                      {/* Step Number & Icon Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-sm">
                          <Icon className="h-6 w-6 stroke-[1.8]" />
                        </div>
                        <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-cyan-400/80 transition-colors">
                          {item.step}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      <span>Phase {item.step}</span>
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
      {/* 5. METRICS / STATS SECTION                                             */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#080B11] border-y border-white/[0.06] relative">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeIn delay={0.05}>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight">
                  <AnimatedCounter from={0} to={60} suffix="%" duration={1.5} />
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  FASTER DECISION-MAKING
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-300 font-mono tracking-tight">
                  <AnimatedCounter from={0} to={35} suffix="%" duration={1.5} />
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  COST REDUCTION
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-tight">
                  24/7
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  AUTOMATED OPERATIONS
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-cyan-400 font-mono tracking-tight">
                  <AnimatedCounter from={0} to={90} suffix="%" duration={1.5} />
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
                  MODEL ACCURACY
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 6. RESPONSIBLE AI CALLOUT BANNER                                       */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 relative">
        <Container>
          <FadeIn>
            <div className="relative rounded-3xl bg-gradient-to-r from-[#0E1626] via-[#0A101C] to-[#0D1524] border border-cyan-500/25 p-8 sm:p-12 shadow-2xl overflow-hidden">
              {/* Subtle background glow */}
              <div
                className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 relative z-10">
                {/* Shield Icon */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-lg shadow-cyan-950/50">
                  <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12 stroke-[1.6]" />
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Responsible AI
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                    We adhere to ethical AI governance frameworks prioritizing data privacy, algorithmic transparency,
                    and bias reduction. All models include human-in-the-loop validation for critical decision pathways.
                  </p>

                  {/* Ethical Guarantees */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-semibold text-cyan-300">
                    <span className="flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                      <Lock className="h-3 w-3 text-cyan-400" /> AI Ethics Framework
                    </span>
                    <span className="flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                      <ShieldCheck className="h-3 w-3 text-cyan-400" /> Data Privacy Compliance
                    </span>
                    <span className="flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                      <Sparkles className="h-3 w-3 text-cyan-400" /> Bias Mitigation Protocol
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 7. FEATURED DEPLOYMENT (CASE STUDY)                                    */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative bg-[#090C12] border-t border-white/[0.06]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Featured Deployment
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-white/[0.08] bg-[#0E131F] p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Case details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                    CASE STUDY
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Global Logistics AI Optimization
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Implemented a predictive routing engine and demand forecasting model that reduced
                    supply chain bottlenecks and optimized fleet operations across 40+ countries.
                  </p>

                  {/* Highlight Stat Box */}
                  <div className="p-5 rounded-2xl bg-[#090D16] border border-cyan-500/25 space-y-1">
                    <p className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">
                      +$12.4M
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      Annual savings in fuel and operational overhead
                    </p>
                  </div>

                  <div>
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Interactive Fleet & Telemetry Mockup */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl bg-[#080B12] border border-white/[0.08] p-6 shadow-xl overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                        <Server className="h-4 w-4 text-cyan-400" />
                        <span>fleet-routing-ai.sim</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                        4,812 ROUTES OPTIMIZED
                      </span>
                    </div>

                    {/* Telemetry Vector Chart */}
                    <div className="h-48 rounded-xl bg-[#0D121F] border border-white/[0.04] p-4 flex flex-col justify-between relative overflow-hidden">
                      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <span className="text-slate-500">Fleet Efficiency</span>
                          <p className="text-base font-bold text-white">+38.4%</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Idle Time Reduced</span>
                          <p className="text-base font-bold text-cyan-400">-52.1%</p>
                        </div>
                      </div>

                      {/* Animated wave bars */}
                      <div className="flex items-end gap-1.5 h-20 pt-4">
                        {[45, 60, 30, 75, 90, 65, 80, 50, 95, 85, 70, 100, 60, 85, 92].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-blue-600/40 to-cyan-400 rounded-t-sm transition-all hover:brightness-125"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Status: Continuous Dynamic Re-Routing</span>
                      <span className="text-cyan-400">LATENCY: 8ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────────────── */}
      {/* 8. BOTTOM CTA SECTION                                                  */}
      {/* ────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative">
        <Container>
          <FadeIn>
            <div className="relative rounded-3xl bg-gradient-to-b from-[#121622] via-[#0D1018] to-[#0A0D14] border border-white/[0.08] p-10 sm:p-16 text-center overflow-hidden shadow-2xl">
              {/* Ambient glow inside card */}
              <div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-2xl mx-auto space-y-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  Ready to Deploy AI in Your Business?
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  Consult with our AI architects to evaluate your data readiness, define high-impact use cases,
                  and design your enterprise deployment plan.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href="/quote"
                    className="rounded-xl px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0B0E14] font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 text-sm sm:text-base"
                  >
                    Schedule Architecture Review
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    href="/services"
                    className="rounded-xl px-8 py-3.5 bg-white/[0.04] border border-white/[0.12] hover:border-cyan-500/40 text-white font-semibold hover:bg-cyan-500/10 text-sm sm:text-base"
                  >
                    Explore All Services
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
