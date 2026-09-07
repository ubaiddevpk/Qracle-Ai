import type { Metadata } from "next";
import { Header, Footer, TeamSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "The People Behind QracleAi — Leadership & Engineering Team",
  description:
    "Meet our cross-border team of executive leaders, software architects, and deep-tech engineers in London and Pakistan.",
};

export default function AboutTeamPage() {
  return (
    <>
      <Header />
      <main id="about-team-main" className="pt-20 relative overflow-hidden">
        {/* Ambient background glows */}
        <div
          className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute top-2/3 left-0 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
