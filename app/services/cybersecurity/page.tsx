import type { Metadata } from "next";
import {
  Header,
  Footer,
  CybersecuritySection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Cybersecurity & Infrastructure — Security by Design | Qracle AI",
  description:
    "Fortify your digital operations with military-grade encryption, proactive threat hunting, and resilient infrastructure architectures designed for the AI era.",
};

export default function CybersecurityPage() {
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
