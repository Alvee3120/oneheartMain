import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-sm">
      <Container className="flex h-header items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${site.brand} — ${site.tagline}`}
          className="rounded-pill"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center border-b-2 border-transparent text-sm font-medium text-muted transition-colors hover:border-brand hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu links={site.nav} />
      </Container>
    </header>
  );
}
