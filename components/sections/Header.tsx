"use client";

/**
 * Header — Site-wide navigation header with interactive Services Mega Menu.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Network,
  Cloud,
  Code2,
  Cpu,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Container, Logo } from "@/components/ui";

const SERVICES_ITEMS = [
  {
    title: "Cybersecurity",
    description:
      "Advanced threat protection, zero-trust defense, SIEM/SOC operations, and rigorous security auditing.",
    icon: ShieldCheck,
    href: "/services/cybersecurity",
    badge: "Zero-Trust",
  },
  {
    title: "Networking",
    description:
      "High-throughput network infrastructure, software-defined networking, and multi-cloud interconnects.",
    icon: Network,
    href: "/services/networking",
    badge: "High-Speed",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud architectures, multi-cloud migration strategies, and enterprise DevOps automation.",
    icon: Cloud,
    href: "/services/cloud",
    badge: "Scalable",
  },
  {
    title: "Web & App Development",
    description:
      "Custom enterprise web platforms, mobile applications, and high-performance bespoke software.",
    icon: Code2,
    href: "/services/web-development",
    badge: "Full-Stack",
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize legacy systems, automate critical workflows, and scale your operational velocity.",
    icon: Cpu,
    href: "/services/digital-transformation",
    badge: "Modernize",
  },
  {
    title: "AI Solutions Landing Page",
    description:
      "Quantum-inspired intelligence, predictive neural engines, and autonomous enterprise AI agents.",
    icon: Sparkles,
    href: "/services/ai-solutions",
    badge: "Featured",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeAll = () => {
    setMegaOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        scrolled || megaOpen
          ? "border-b border-white/[0.08] bg-[#0B0E14] shadow-lg shadow-black/60"
          : "border-b border-white/[0.06] bg-[#0B0E14]"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group py-1"
            id="header-logo"
            aria-label={SITE.name}
            onClick={closeAll}
          >
            <Logo
              variant="horizontal"
              size="md"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation (desktop) */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.href}
                    className="relative py-2"
                    onMouseEnter={() => setMegaOpen(true)}
                  >
                    <button
                      type="button"
                      onClick={() => setMegaOpen((v) => !v)}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer ${
                        megaOpen
                          ? "text-cyan-400"
                          : "text-content-secondary hover:text-content-primary"
                      }`}
                      aria-expanded={megaOpen}
                      id="nav-services-dropdown"
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          megaOpen ? "rotate-180 text-cyan-400" : "text-slate-400"
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setMegaOpen(false)}
                  className={`text-sm font-medium transition-colors py-2 relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-content-secondary hover:text-content-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/portal/login"
              className="hidden sm:inline-flex text-sm font-medium text-content-secondary hover:text-content-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-white/[0.04]"
              id="header-portal-login"
            >
              Portal
            </Link>
            <Link
              href="/quote"
              className="btn-primary text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30"
              id="header-cta-quote"
            >
              Get a Quote
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-content-secondary hover:text-content-primary rounded-lg focus:outline-none hover:bg-white/[0.05] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* ─── Desktop Services Mega Menu Dialog ────────────────────────────── */}
      <div
        className={`hidden lg:block absolute inset-x-0 top-full bg-[#0B0E14] border-b border-white/[0.1] shadow-2xl shadow-black/90 transition-all duration-200 origin-top ${
          megaOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setMegaOpen(true)}
      >
        <Container>
          <div className="py-8 grid grid-cols-12 gap-8 items-stretch">
            {/* Services Grid (8 Columns) */}
            <div className="col-span-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  Our Enterprise Capabilities
                </span>
                <Link
                  href="/services"
                  onClick={() => setMegaOpen(false)}
                  className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-medium"
                >
                  Explore all solutions <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {SERVICES_ITEMS.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={() => setMegaOpen(false)}
                      className="group relative flex items-start gap-3.5 p-3.5 rounded-xl border border-white/[0.08] bg-[#121622] hover:bg-[#181E2E] hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
                    >
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 group-hover:scale-105 transition-all shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors truncate">
                            {service.title}
                          </span>
                          {service.badge && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.08] group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors shrink-0">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Featured Solution Card (4 Columns) */}
            <div className="col-span-4 flex flex-col">
              <div className="relative flex-1 rounded-2xl border border-white/[0.08] bg-[#121622] p-6 flex flex-col justify-between overflow-hidden shadow-sm">
                {/* Ambient glow accent */}
                <div
                  className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[11px] font-medium text-cyan-300 mb-4 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#22D3EE]" />
                    Quantum Intelligence
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                    AI Solutions in Your Hand
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Harness enterprise-grade quantum and AI architectures designed to accelerate digital transformation with absolute operational precision.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <Link
                    href="/services"
                    onClick={() => setMegaOpen(false)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors group"
                  >
                    View more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/quote"
                    onClick={() => setMegaOpen(false)}
                    className="text-xs font-semibold text-white px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 transition-all shadow-sm"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Mega Menu Bottom Bar */}
        <div className="border-t border-white/[0.08] bg-[#07090E]">
          <Container>
            <div className="py-3 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Looking to join our engineering and research team?</span>
              </div>
              <Link
                href="/careers"
                onClick={() => setMegaOpen(false)}
                className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
              >
                Look into Open Positions →
              </Link>
            </div>
          </Container>
        </div>
      </div>

      {/* ─── Mobile Menu Drawer ───────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0B0E14] max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Container>
            <div className="py-5 space-y-3">
              {/* Home */}
              <Link
                href="/"
                onClick={closeAll}
                className="block px-3 py-2 text-base font-medium text-content-secondary hover:text-content-primary hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={closeAll}
                className="block px-3 py-2 text-base font-medium text-content-secondary hover:text-content-primary hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                About
              </Link>

              {/* Services Accordion */}
              <div className="border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02]">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-3 text-base font-medium text-white hover:bg-white/[0.04] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    Services
                  </span>
                  <span className="p-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                    {mobileServicesOpen ? (
                      <ChevronUp className="h-4 w-4 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400" />
                    )}
                  </span>
                </button>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-white/[0.06]">
                    {SERVICES_ITEMS.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={closeAll}
                          className="flex items-center gap-3 p-2 rounded-lg text-sm text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04] transition-colors"
                        >
                          <Icon className="h-4 w-4 text-cyan-400 shrink-0" />
                          <span className="font-medium">{service.title}</span>
                        </Link>
                      );
                    })}
                    <div className="pt-2">
                      <Link
                        href="/services"
                        onClick={closeAll}
                        className="block text-center py-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {NAV_LINKS.filter(
                (l) => l.label !== "Home" && l.label !== "About" && l.label !== "Services"
              ).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="block px-3 py-2 text-base font-medium text-content-secondary hover:text-content-primary hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-col gap-2.5">
                <Link
                  href="/portal/login"
                  onClick={closeAll}
                  className="w-full text-center py-2.5 text-sm font-medium text-content-secondary hover:text-content-primary bg-white/[0.04] rounded-lg border border-white/[0.06]"
                >
                  Client Portal
                </Link>
                <Link
                  href="/quote"
                  onClick={closeAll}
                  className="btn-primary text-sm text-center py-2.5"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

