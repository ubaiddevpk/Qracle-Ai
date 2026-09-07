import Link from "next/link";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Container, SectionWrapper, Logo } from "@/components/ui";

/**
 * Footer — Site-wide footer with navigation links and social links.
 * Scaffold only — will be styled fully in the page-build phase.
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-subtle bg-background-secondary">
      <Container>
        <SectionWrapper size="md">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand column */}
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="inline-flex items-center group" id="footer-logo" aria-label={SITE.name}>
                <Logo
                  variant="horizontal"
                  size="md"
                  className="transition-transform duration-200 group-hover:scale-105"
                />
              </Link>
              <p className="mt-3 text-sm text-content-secondary leading-relaxed">
                {SITE.description}
              </p>
            </div>

            {/* Company links */}
            <div>
              <h3 className="text-sm font-semibold text-content-primary mb-4">Company</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-content-secondary hover:text-content-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h3 className="text-sm font-semibold text-content-primary mb-4">Services</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-content-secondary hover:text-content-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h3 className="text-sm font-semibold text-content-primary mb-4">Legal</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-content-secondary hover:text-content-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>

        {/* Bottom bar */}
        <div className="section-divider" aria-hidden="true" />
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-content-tertiary">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={SOCIAL_LINKS.twitter}
              className="text-xs text-content-tertiary hover:text-content-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-twitter"
            >
              Twitter
            </Link>
            <Link
              href={SOCIAL_LINKS.linkedin}
              className="text-xs text-content-tertiary hover:text-content-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
            >
              LinkedIn
            </Link>
            <Link
              href={SOCIAL_LINKS.github}
              className="text-xs text-content-tertiary hover:text-content-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github"
            >
              GitHub
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
