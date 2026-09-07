import type { Metadata } from "next";
import { Header, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a custom quote for Qaracle AI services.",
};

/**
 * Quote page — /quote — Page stub. Content to be built in the next phase.
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
