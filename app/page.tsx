import type { Metadata } from "next";
import {
  Header,
  Footer,
  HeroSection,
  ServicesSection,
  TrustBar,
  EngineeredTrustSection,
  FeaturedCaseStudySection,
  TestimonialsSection,
  CTASection,
  ComplianceBar,
} from "@/components/sections";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <TrustBar />
        <EngineeredTrustSection />
        <FeaturedCaseStudySection />
        <TestimonialsSection />
        <CTASection />
        <ComplianceBar />
      </main>
      <Footer />
    </>
  );
}
