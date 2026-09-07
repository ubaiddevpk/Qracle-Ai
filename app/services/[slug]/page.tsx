import type { Metadata } from "next";
import {
  Header,
  Footer,
  ArtificialIntelligenceSection,
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
