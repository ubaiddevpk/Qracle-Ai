"use client";

import { ArrowRight } from "lucide-react";
import { Container, SectionWrapper, Button } from "@/components/ui";
import { FadeIn, SlideUp } from "@/components/motion";

interface CTASectionProps {
  headlinePrefix?: string;
  headlineHighlight?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  id?: string;
}

export function CTASection({
  headlinePrefix = "Ready to",
  headlineHighlight = "Transform Your Business?",
  body = "Partner with QaracleAI to leverage cutting-edge technology and drive your enterprise forward with confidence.",
  primaryLabel = "Book a Consultation",
  primaryHref = "/quote",
  secondaryLabel = "Get a Quote",
  secondaryHref = "/quote",
  id = "cta-section",
}: CTASectionProps) {
  return (
    <SectionWrapper size="lg" id={id} className="relative overflow-hidden">
      <Container>
        <FadeIn>
          <div className="relative rounded-3xl bg-gradient-to-b from-[#121622] via-[#0D1018] to-[#0A0D14] border border-white/[0.08] p-10 sm:p-16 text-center overflow-hidden shadow-2xl">
            {/* Ambient cyan glow inside card */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <SlideUp>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                  {headlinePrefix}{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block sm:inline">
                    {headlineHighlight}
                  </span>
                </h2>
              </SlideUp>

              <SlideUp delay={0.1}>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  {body}
                </p>
              </SlideUp>

              <SlideUp delay={0.2}>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    href={primaryHref}
                    id={`${id}-primary-btn`}
                    className="shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 text-sm font-semibold px-7"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    {primaryLabel}
                  </Button>

                  {secondaryLabel ? (
                    <Button
                      variant="secondary"
                      size="lg"
                      href={secondaryHref}
                      id={`${id}-secondary-btn`}
                      className="bg-white/[0.06] hover:bg-white/[0.1] border-white/[0.1] text-white text-sm font-semibold px-7"
                    >
                      {secondaryLabel}
                    </Button>
                  ) : null}
                </div>
              </SlideUp>
            </div>
          </div>
        </FadeIn>
      </Container>
    </SectionWrapper>
  );
}
