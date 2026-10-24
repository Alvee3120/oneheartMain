"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Only the home page opens with a full-bleed hero, so only there can the
  // header sit transparently over dark imagery. Elsewhere it needs its own
  // surface or the light-on-dark logo and nav would vanish.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-header border-b transition-colors duration-200",
        overHero
          ? "border-transparent bg-transparent"
          : "border-line bg-surface/95 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${site.brand} — ${site.tagline}`}
          className="rounded-pill"
        >
          <Logo eager tone={overHero ? "inverted" : "default"} />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "inline-flex min-h-11 items-center border-b-2 border-transparent text-sm font-medium transition-colors hover:border-brand",
                    overHero
                      ? "text-surface/85 hover:text-surface focus-visible:outline-surface"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu links={site.nav} tone={overHero ? "inverted" : "default"} />
      </Container>
    </header>
  );
}
