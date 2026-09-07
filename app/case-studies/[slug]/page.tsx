import type { Metadata } from "next";
import { Header, Footer } from "@/components/sections";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Case Study — ${params.slug}`,
    description: `In-depth look at a Qaracle AI success story.`,
  };
}

/**
 * Case study detail page — /case-studies/[slug]
 * Content to be built in the next phase.
 */
export default function CaseStudyDetailPage({ params }: Props) {
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
