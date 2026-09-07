import type { Metadata } from "next";
import { Header, Footer } from "@/components/sections";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Blog — ${params.slug}`,
    description: `Read the latest insights from the Qaracle AI team.`,
  };
}

/**
 * Blog post detail page — /blog/[slug]
 * Content to be built in the next phase.
 */
export default function BlogPostPage({ params }: Props) {
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
