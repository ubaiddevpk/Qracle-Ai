"use client";

import { useState } from "react";
import { Quote, User } from "lucide-react";
import { Container, SectionWrapper } from "@/components/ui";
import { FadeIn, SlideUp } from "@/components/motion";

const testimonials = [
  {
    quote:
      "QaracleAI transformed our legacy systems into a modern, scalable architecture. Their commitment to security and understanding of enterprise needs is unparalleled.",
    author: "David Jenkins",
    role: "CTO, Fortune Logistics",
  },
  {
    quote:
      "Deploying Qaracle's predictive models reduced our operational latency by over 40%. The team's deep engineering rigor made integration seamless.",
    author: "Elena Rostova",
    role: "VP of Engineering, Apex Financial",
  },
  {
    quote:
      "From architecture discovery to zero-trust production deployment, QaracleAI demonstrated true quantum precision at every milestone.",
    author: "Marcus Sterling",
    role: "Chief Digital Officer, OmniHealth Systems",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  return (
    <SectionWrapper id="testimonials" size="lg" className="relative">
      <Container>
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Client{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
            </SlideUp>
          </FadeIn>
        </div>

        {/* Testimonial Card */}
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto rounded-2xl bg-[#0F1219] border border-white/[0.08] p-8 sm:p-12 text-center relative shadow-xl">
            {/* Cyan Quote Mark */}
            <div className="flex justify-center mb-6">
              <Quote className="h-9 w-9 text-cyan-400 opacity-90 rotate-180" />
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-xl text-slate-100 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Attribution */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
                <User className="w-5 h-5" />
              </div>
              <p className="text-base font-semibold text-white">{current.author}</p>
              <p className="text-sm text-slate-400 mt-0.5">{current.role}</p>
            </div>
          </div>
        </FadeIn>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-6 bg-cyan-400 shadow-[0_0_8px_#22D3EE]"
                  : "w-2 bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
