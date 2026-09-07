"use client";
import {
  Mail,
  User,
  Quote,
  Users,
  ArrowRight,
} from "lucide-react";
import { Container, Button, LinkedinIcon, GithubIcon } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { TEAM_MEMBERS, TeamMember } from "@/lib/data/team";

export function TeamSection() {
  const spotlight = TEAM_MEMBERS.find((m) => m.isSpotlight) || TEAM_MEMBERS[0];

  const leadership = TEAM_MEMBERS.filter(
    (m) => m.department === "Leadership" && !m.isSpotlight
  );
  const engineering = TEAM_MEMBERS.filter((m) => m.department === "Engineering");
  const design = TEAM_MEMBERS.filter((m) => m.department === "Design & Product");
  const operations = TEAM_MEMBERS.filter(
    (m) => m.department === "Client Success & Operations"
  );

  return (
    <div className="py-16 md:py-24 space-y-20">
      <Container>
        {/* ─── Page Header ──────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              The People Behind{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                QracleAi
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Bridging visionary leadership in the UK with elite engineering talent in Pakistan. A hybrid culture built on technical excellence, transparency, and relentless innovation.
            </p>
          </FadeIn>
        </div>

        {/* ─── CEO Spotlight Card ─────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0F1422] via-[#0B0E14] to-[#0D121F] p-8 sm:p-12 overflow-hidden shadow-2xl group hover:border-cyan-500/35 transition-all duration-300 mb-20">
            {/* Ambient background glow */}
            <div
              className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-950/40 group-hover:border-cyan-500/30 transition-all">
                  {spotlight.image ? (
                    <img
                      src={spotlight.image}
                      alt={spotlight.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#141A29] flex items-center justify-center text-cyan-400">
                      <User className="h-24 w-24 stroke-1" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  CEO Spotlight
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {spotlight.name}
                  </h2>
                  <p className="text-base font-semibold text-cyan-400 mt-1">
                    {spotlight.role}
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-cyan-500/40 my-4">
                  <Quote className="absolute -top-1 -left-2 h-4 w-4 text-cyan-400/40" />
                  <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed">
                    &ldquo;{spotlight.spotlightQuote}&rdquo;
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-2">
                  {spotlight.socials?.linkedin && (
                    <a
                      href={spotlight.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/30 transition-all"
                      aria-label={`${spotlight.name} on LinkedIn`}
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  )}
                  {spotlight.socials?.github && (
                    <a
                      href={spotlight.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/30 transition-all"
                      aria-label={`${spotlight.name} on GitHub`}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                  {spotlight.socials?.email && (
                    <a
                      href={`mailto:${spotlight.socials.email}`}
                      className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/30 transition-all"
                      aria-label={`Email ${spotlight.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ─── Categorized Team Sections ─────────────────────────────────── */}
        <div className="space-y-16">
          {/* Leadership */}
          <TeamCategoryGroup
            title="Leadership"
            members={leadership}
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />

          {/* Engineering */}
          <TeamCategoryGroup
            title="Engineering"
            members={engineering}
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          />

          {/* Design & Product */}
          <TeamCategoryGroup
            title="Design & Product"
            members={design}
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl"
          />

          {/* Client Success & Operations */}
          <TeamCategoryGroup
            title="Client Success & Operations"
            members={operations}
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl"
          />
        </div>

        {/* ─── Bottom CTA Banner (Matching Figma Screenshot) ─────────────── */}
        <FadeIn delay={0.2}>
          <div className="relative mt-24 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0D1C2E] via-[#0B0E14] to-[#0A1424] p-10 sm:p-16 text-center overflow-hidden shadow-2xl shadow-cyan-950/20">
            {/* Ambient glow */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[260px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto shadow-md">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Build the Future With Us
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                We are always looking for visionary thinkers and elite engineers to join our global team. Explore open roles in London and Lahore.
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  href="/careers"
                  className="shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 text-sm font-semibold px-8"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  View Careers
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

// ─── Sub-Component for Category Sections ────────────────────────────────────

interface TeamCategoryGroupProps {
  title: string;
  members: TeamMember[];
  columns: string;
}

function TeamCategoryGroup({ title, members, columns }: TeamCategoryGroupProps) {
  if (!members || members.length === 0) return null;

  return (
    <div className="space-y-8">
      {/* Category Divider Title */}
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-bold text-slate-200 tracking-wide">
          {title}
        </h3>
        <div className="flex-1 h-[1px] bg-white/[0.08]" />
      </div>

      {/* Cards Grid */}
      <div className={`grid ${columns} gap-6`}>
        {members.map((member, index) => (
          <TeamCard key={member.id} member={member} delay={0.05 * (index + 1)} />
        ))}
      </div>
    </div>
  );
}

// ─── Sub-Component for Individual Member Card ───────────────────────────────

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export function TeamCard({ member, delay = 0 }: TeamCardProps) {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="h-full rounded-2xl border border-white/[0.08] bg-[#0E131F] p-6 flex flex-col items-center text-center group hover:border-cyan-500/40 hover:bg-[#121826] transition-all duration-300 shadow-lg relative overflow-hidden">
        {/* Top hover accent line */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Circular Avatar */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-500/25 group-hover:border-cyan-400 transition-all duration-300 mb-4 bg-[#141A29] flex items-center justify-center shrink-0 shadow-md">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <User className="h-9 w-9 text-cyan-400/60 group-hover:text-cyan-300 transition-colors" />
          )}
        </div>

        {/* Member Name */}
        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
          {member.name}
        </h4>

        {/* Member Role */}
        <p className="text-xs font-semibold text-cyan-400 mb-2.5">
          {member.role}
        </p>

        {/* Member Bio */}
        <p className="text-xs text-slate-400 leading-relaxed mb-5 flex-1 line-clamp-3">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06] w-full justify-center">
          {member.socials?.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
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
              className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
              aria-label={`${member.name} GitHub`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {member.socials?.email && (
            <a
              href={`mailto:${member.socials.email}`}
              className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 border border-white/[0.06] hover:border-cyan-500/30 transition-all"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

// ─── Inline-safe directory grid (no page header / spotlight / CTA) ───────────
// Use this when embedding the full team directory inside another section.

export function TeamDirectoryGrid() {
  const spotlight = TEAM_MEMBERS.find((m) => m.isSpotlight);
  const leadership = TEAM_MEMBERS.filter(
    (m) => m.department === "Leadership" && !m.isSpotlight
  );
  const allLeadership = spotlight ? [spotlight, ...leadership] : leadership;
  const engineering = TEAM_MEMBERS.filter((m) => m.department === "Engineering");
  const design = TEAM_MEMBERS.filter((m) => m.department === "Design & Product");
  const operations = TEAM_MEMBERS.filter(
    (m) => m.department === "Client Success & Operations"
  );

  return (
    <div className="space-y-14">
      <TeamCategoryGroup
        title="Leadership"
        members={allLeadership}
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      />
      <TeamCategoryGroup
        title="Engineering"
        members={engineering}
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      />
      <TeamCategoryGroup
        title="Design & Product"
        members={design}
        columns="grid-cols-1 sm:grid-cols-2 max-w-3xl"
      />
      <TeamCategoryGroup
        title="Client Success & Operations"
        members={operations}
        columns="grid-cols-1 sm:grid-cols-2 max-w-3xl"
      />
    </div>
  );
}
