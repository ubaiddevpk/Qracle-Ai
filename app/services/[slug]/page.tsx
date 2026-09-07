import type { Metadata } from "next";
import {
  Header,
  Footer,
  ArtificialIntelligenceSection,
  CybersecuritySection,
} from "@/components/sections";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (
    params.slug === "artificial-intelligence" ||
    params.slug === "ai-solutions"
  ) {
    return {
      title: "Artificial Intelligence Solutions — Intelligence, Engineered | Qracle AI",
      description:
        "Transform your business operations with applied, mission-critical AI solutions. We build robust, scalable architectures that enable data-driven enterprises.",
    };
  }

  if (params.slug === "cybersecurity") {
    return {
      title: "Cybersecurity & Infrastructure — Security by Design | Qracle AI",
      description:
        "Fortify your digital operations with military-grade encryption, proactive threat hunting, and resilient infrastructure architectures designed for the AI era.",
    };
  }

  return {
    title: `Service — ${params.slug.replace(/-/g, " ")} | Qracle AI`,
    description: `Detailed information about this Qaracle AI service.`,
  };
}

/**
 * Service detail page — /services/[slug]
 */
export default function ServiceDetailPage({ params }: Props) {
  if (
    params.slug === "artificial-intelligence" ||
    params.slug === "ai-solutions"
  ) {
    return (
      <>
        <Header />
        <main id="ai-service-main" className="relative overflow-hidden">
          <ArtificialIntelligenceSection />
        </main>
        <Footer />
      </>
    );
  }

  if (params.slug === "cybersecurity") {
    return (
      <>
        <Header />
        <main id="cybersecurity-main" className="relative overflow-hidden">
          <CybersecuritySection />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-[60vh]">
        <h1 className="text-4xl font-bold capitalize text-content-primary">
          {params.slug.replace(/-/g, " ")}
        </h1>
      </main>
      <Footer />
    </>
  );
}
