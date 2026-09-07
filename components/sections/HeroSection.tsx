"use client";

import Link from "next/link";
import { ArrowRight, Terminal, ShieldCheck, Zap } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { FadeIn, SlideUp, FloatingElement } from "@/components/motion";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glows matching Figma */}
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 left-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.05}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141820]/90 border border-white/10 text-xs text-slate-200 mb-6 shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22D3EE]" />
                <span className="font-medium">AI Solutions for Enterprise Growth</span>
              </div>
            </FadeIn>

            <SlideUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.12] mb-6">
                Empowering Enterprise<br className="hidden sm:inline" /> Excellence with{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  AI-Driven IT Solutions.
                </span>
              </h1>
            </SlideUp>

            <SlideUp delay={0.2}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
                QaracleAI combines world-class expertise to deliver tailored AI-driven and digital transformation solutions for forward-thinking enterprises.
              </p>
            </SlideUp>

            <SlideUp delay={0.3}>
              <div className="flex flex-wrap items-center gap-5">
                <Button
                  variant="primary"
                  size="lg"
                  href="/quote"
                  className="shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 text-sm font-semibold px-7"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Book a Consultation
                </Button>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group px-2 py-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </SlideUp>
          </div>

          {/* Right Visual Column — Interactive Terminal Preview Card */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.2}>
              {/* Card Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/25 to-blue-600/20 rounded-3xl blur-2xl -z-10 pointer-events-none" />

              <FloatingElement amplitude={6} duration={5}>
                <div className="relative rounded-2xl bg-[#0D111A]/95 border border-cyan-500/30 p-6 shadow-2xl backdrop-blur-md">
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        <Terminal className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs font-medium text-slate-300">
                        qaracle-core@v4.2
                      </span>
                    </div>
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                  </div>

                  {/* Terminal Console Output */}
                  <div className="font-mono text-[13px] space-y-2.5 leading-relaxed text-slate-300">
                    <p className="text-cyan-400 font-semibold flex items-center gap-2">
                      <span className="text-slate-500">&gt;</span>
                      <span>Initializing Enterprise AI Core...</span>
                    </p>
                    <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-cyan-400" /> Latency:
                      </span>
                      <span className="text-cyan-300 font-medium">12ms (Global Edge)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Security Protocol:
                      </span>
                      <span className="text-emerald-400 font-medium">Zero-Trust Active</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                      <span className="text-slate-400">Model Deployment:</span>
                      <span className="text-slate-200">Qaracle-LLM v4.2</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1 border-b border-white/[0.04]">
                      <span className="text-slate-400">High Availability:</span>
                      <span className="text-emerald-400">99.99% Cluster Sync</span>
                    </div>
                    <p className="text-slate-400 text-xs pt-1">
                      &gt; Neural pipelines mapped & operational.
                    </p>
                  </div>

                  {/* Status Indicator Bar */}
                  <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                      </span>
                      <span className="text-xs font-semibold text-slate-200">
                        Enterprise AI Active
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      OPTIMAL
                    </span>
                  </div>
                </div>
              </FloatingElement>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
