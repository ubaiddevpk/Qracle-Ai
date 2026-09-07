import type { Metadata } from "next";
import {
  Header,
  Footer,
  AboutHeroSection,
  AboutHubsSection,
  AboutPrinciplesSection,
  AboutTeamCarouselSection,
  CTASection,
} from "@/components/sections";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us — Engineering Trust Across Borders",
  description:
    "We are a UK-registered enterprise AI and IT solutions provider bridging strategic engagement in London with elite engineering hubs globally.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="about-main" className="relative overflow-hidden">
        {/* Background Subtle Ambient Glows */}
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* 1. Hero Section */}
        <AboutHeroSection />

        {/* 2. Global Delivery Hubs & Trust Architecture */}
        <AboutHubsSection />

        {/* 3. Core Cultural & Engineering Principles */}
        <AboutPrinciplesSection />

        {/* 4. Leadership & Team Interactive Carousel (with nested full directory) */}
        <AboutTeamCarouselSection />

        {/* 5. Ready to Transform Your Enterprise Call To Action */}
        <CTASection
          id="about-cta"
          headlinePrefix="Ready to"
          headlineHighlight="Transform Your Enterprise?"
          body="Leverage our hybrid delivery model for secure, scalable AI and IT solutions."
          primaryLabel="Book a Consultation"
          primaryHref="/quote"
          secondaryLabel=""
        />
      </main>
      <Footer />
    </>
  );
}
