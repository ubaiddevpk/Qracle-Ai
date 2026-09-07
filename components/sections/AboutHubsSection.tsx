"use client";

import Image from "next/image";
import { Building2, ShieldCheck, Server } from "lucide-react";
import { Container } from "@/components/ui";
import { FadeIn, SlideUp } from "@/components/motion";

export function AboutHubsSection() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="space-y-6">
          {/* Top Row: UK Headquarters & UK Registered Company */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Card 1: UK Headquarters (7 columns on lg) */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1} className="h-full">
                <div className="relative h-full min-h-[280px] rounded-2xl border border-white/[0.08] bg-[#0E131F] p-8 sm:p-10 flex flex-col justify-end overflow-hidden shadow-xl group hover:border-cyan-500/35 transition-all duration-300">
                  {/* Background architectural skyscraper facade */}
                  <div className="absolute inset-0 -z-0">
                    <Image
                      src="/uk-hq.svg"
                      alt="UK Headquarters Architecture"
                      fill
                      className="object-cover opacity-35 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/80 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 shadow-sm shadow-cyan-950/40">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      UK Headquarters
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                      Our strategic nerve center for client engagement, governance, and architecture design. Ensuring seamless communication and uncompromising quality standards.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Card 2: UK Registered Company (5 columns on lg) */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2} className="h-full">
                <div className="relative h-full min-h-[280px] rounded-2xl border border-white/[0.08] bg-[#0E131F] p-8 sm:p-10 flex flex-col justify-end overflow-hidden shadow-xl group hover:border-cyan-500/35 transition-all duration-300">
                  {/* Subtle decorative shield watermark on top-right */}
                  <ShieldCheck
                    className="absolute top-4 right-4 h-36 w-36 text-white/[0.03] stroke-[1] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-cyan-400/[0.05]"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 shadow-sm shadow-cyan-950/40">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      UK Registered Company
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Operating under strict UK legal and compliance frameworks, guaranteeing intellectual property protection and enterprise-grade security for all our partners.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bottom Row: Pakistan Engineering Hub (Full width) */}
          <FadeIn delay={0.3}>
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0E131F] p-8 sm:p-10 overflow-hidden shadow-xl group hover:border-cyan-500/35 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Text Column */}
                <div className="lg:col-span-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 shadow-sm shadow-cyan-950/40">
                    <Server className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Pakistan Engineering Hub
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    Where vision meets execution. Our dedicated engineering facility houses elite talent specializing in complex AI integration, robust backend systems, and agile delivery.
                  </p>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#131A28] border border-cyan-500/30 text-cyan-300 shadow-sm">
                      Fully Dedicated
                    </span>
                    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#131A28] border border-cyan-500/30 text-cyan-300 shadow-sm">
                      Deep Tech Talent
                    </span>
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-950/20 group/img">
                    <Image
                      src="/engineering-hub.png"
                      alt="Pakistan Engineering Hub Operations"
                      width={640}
                      height={360}
                      className="w-full h-auto max-h-[320px] object-cover transition-transform duration-500 group-hover/img:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
