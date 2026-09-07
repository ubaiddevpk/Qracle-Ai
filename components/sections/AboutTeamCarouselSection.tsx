"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Users,
  Mail,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Clock,
} from "lucide-react";
import { Container, LinkedinIcon, GithubIcon } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { TEAM_MEMBERS } from "@/lib/data/team";

export function AboutTeamCarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden border-t border-white/[0.06]">
      <Container>
        {/* ─── Header & Controls ───────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-4">
                <Users className="h-3.5 w-3.5 text-cyan-400" />
                <span>Leadership &amp; Global Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                The People Behind QracleAi
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                Bridging executive vision in London with elite engineering talent in Pakistan.
              </p>
            </FadeIn>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Carousel arrow controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/30 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyan-500/10 transition-all"
                aria-label="Scroll team carousel left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/30 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cyan-500/10 transition-all"
                aria-label="Scroll team carousel right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* View All Team → navigates to /about/team */}
            <Link
              href="/about/team"
              id="view-all-team-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-sm font-semibold transition-all shadow-sm"
            >
              <span>View All Team</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* ─── Carousel ────────────────────────────────────────────────────── */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-2xl border border-white/[0.08] bg-[#0E131F] p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-[#121826] transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Avatar & Department Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  {member.isComingSoon ? (
                    <div className="relative w-14 h-14 rounded-full border-2 border-dashed border-cyan-500/30 group-hover:border-cyan-400/60 bg-cyan-950/20 flex items-center justify-center shrink-0 shadow-inner">
                      <Sparkles className="h-6 w-6 text-cyan-400/70 group-hover:scale-110 transition-transform" />
                    </div>
                  ) : (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors bg-[#141A29] flex items-center justify-center shrink-0 shadow-md">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <User className="h-7 w-7 text-cyan-400/70" />
                      )}
                    </div>
                  )}
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08] group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                    {member.department}
                  </span>
                </div>

                {/* Member Details */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mb-2.5">
                  {member.role}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Socials / Coming Soon indicator */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                {member.isComingSoon ? (
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Clock className="h-3 w-3 text-cyan-400/60" />
                    <span>Revealing soon</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {member.socials?.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {member.socials?.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                )}

                <Link
                  href="/about/team"
                  className="text-[11px] font-medium text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors ml-auto"
                >
                  View profile <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
