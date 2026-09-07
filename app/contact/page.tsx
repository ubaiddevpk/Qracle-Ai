import type { Metadata } from "next";
import { Header, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Qaracle AI team.",
};

/**
 * Contact page — /contact — Page stub. Content to be built in the next phase.
 */
export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Page sections go here */}
      </main>
      <Footer />
    </>
  );
}
