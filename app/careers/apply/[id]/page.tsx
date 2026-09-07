import type { Metadata } from "next";
import { Header, Footer } from "@/components/sections";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Apply — Position #${params.id}`,
    description: `Submit your application to join the Qaracle AI team.`,
  };
}

/**
 * Career application page — /careers/apply/[id]
 * Content to be built in the next phase.
 */
export default function CareerApplyPage({ params }: Props) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-[60vh]">
        <h1 className="text-4xl font-bold capitalize text-content-primary">
          Position #{params.id}
        </h1>
      </main>
      <Footer />
    </>
  );
}
