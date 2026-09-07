import type { Metadata } from "next";
import {
  Header,
  Footer,
  WebDevelopmentSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Web & Mobile App Development — Software Built for Growth | Qracle AI",
  description:
    "Engineer scalable, high-performance web and mobile applications designed to optimize enterprise workflows, secure data pipelines, and drive tangible business outcomes.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <main id="web-dev-main" className="relative overflow-hidden">
        <WebDevelopmentSection />
      </main>
      <Footer />
    </>
  );
}
