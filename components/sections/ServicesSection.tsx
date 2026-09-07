"use client";

import Link from "next/link";
import {
  Network,
  Cloud,
  ShieldCheck,
  Code2,
  Cpu,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Container, SectionWrapper } from "@/components/ui";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/motion";

const services = [
  {
    title: "Networking",
    description:
      "Robust and secure network infrastructure designed for optimal performance and reliability across your enterprise.",
    icon: Network,
    href: "/services/networking",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud architectures and migration strategies that modernize your business operations and agility.",
    icon: Cloud,
    href: "/services/cloud",
  },
  {
    title: "Cybersecurity",
    description:
      "Advanced threat protection, security auditing, and compliance frameworks ensuring complete peace of mind.",
    icon: ShieldCheck,
    href: "/services/cybersecurity",
  },
  {
    title: "Web & App Development",
    description:
      "Custom enterprise web and mobile applications engineered for high performance, scalability, and UX.",
    icon: Code2,
    href: "/services/web-development",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize legacy systems and streamline workflows through strategic technological integration.",
    icon: Cpu,
    href: "/services/digital-transformation",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent automation and predictive analytics tailored to unlock data-driven efficiency and innovation.",
    icon: Sparkles,
    href: "/services/ai-solutions",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" size="lg" className="relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <SlideUp>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white mb-4">
                Comprehensive IT &{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h2>
            </SlideUp>
            <SlideUp delay={0.1}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                Tailored technology services designed to accelerate your digital journey and drive sustainable growth.
              </p>
            </SlideUp>
          </FadeIn>
        </div>

        {/* 6 Services Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title} variant="fadeUp">
                <Link
                  href={service.href}
                  className="group block h-full rounded-2xl bg-[#0F1219]/90 border border-white/[0.08] hover:border-cyan-400/40 p-7 lg:p-8 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    {/* Cyan Circular Icon Badge */}
                    <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-[#0B0E14] mb-6 shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Link with arrow */}
                  <div className="mt-6 pt-2 flex items-center gap-1.5 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
