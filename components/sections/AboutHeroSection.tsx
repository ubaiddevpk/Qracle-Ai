"use client";

import { Globe } from "lucide-react";
import { Container } from "@/components/ui";
import { FadeIn, SlideUp } from "@/components/motion";

export function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background ambient radial glow matching Figma */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-b from-cyan-500/18 via-blue-600/12 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <FadeIn delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141822]/90 border border-cyan-500/25 text-xs text-cyan-300 mb-6 shadow-sm shadow-cyan-950/40 backdrop-blur-sm">
              <Globe className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-medium tracking-wide">Global AI Solutions</span>
            </div>
          </FadeIn>

          {/* Headline */}
          <SlideUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Engineering Trust<br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Across Borders.
              </span>
            </h1>
          </SlideUp>

          {/* Description */}
          <SlideUp delay={0.2}>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We are a UK-registered enterprise AI and IT solutions provider. Our mission is to deliver secure, scalable, and visionary intelligence that bridges geographical divides, merging strategic engagement in London with elite engineering hubs globally.
            </p>
          </SlideUp>
        </div>
      </Container>
    </section>
  );
}
