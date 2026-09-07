import type { Metadata } from "next";
import {
  Header,
  Footer,
  ArtificialIntelligenceSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Artificial Intelligence Solutions — Intelligence, Engineered | Qracle AI",
  description:
    "Transform your business operations with applied, mission-critical AI solutions. We build robust, scalable architectures that enable data-driven enterprises.",
};

export default function AISolutionsPage() {
  return (
    <>
      <Header />
      <main id="ai-solutions-main" className="relative overflow-hidden">
        <ArtificialIntelligenceSection />
      </main>
      <Footer />
    </>
  );
}
