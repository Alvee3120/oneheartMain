import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-surface">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo tone="inverted" />
            <p className="mt-4 text-base leading-relaxed text-surface/75">
              {site.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm font-medium text-surface/75 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-surface/15 pt-6 text-sm text-surface/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.footer.copyrightYear} {site.footer.brand}.{" "}
            {site.footer.rightsNote}
          </p>

          <p>
            {site.footer.credit.label}{" "}
            <a
              href={site.footer.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-surface/80 underline decoration-surface/30 underline-offset-4 transition-colors hover:text-brand-light hover:decoration-brand-light"
            >
              {site.footer.credit.name}
              <span className="sr-only">
                {" "}
                — portfolio site, opens in a new tab
              </span>
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
