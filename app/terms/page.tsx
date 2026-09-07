import type { Metadata } from "next";
import { Header, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Qaracle AI.",
};

/**
 * Terms of service — /terms — Page stub. Content to be built in the next phase.
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
