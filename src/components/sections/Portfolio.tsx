import { isExternalUrl } from "@/lib/links";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function Portfolio() {
  const { label, heading, companies, future } = site.portfolio;

  return (
    <Section
      id="portfolio"
      labelledBy="portfolio-heading"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <span className="absolute -left-40 -top-32 size-[30rem] rounded-pill bg-accent/30 blur-3xl" />
        <span className="absolute -bottom-40 -right-32 size-[32rem] rounded-pill bg-accent/20 blur-3xl" />
        <span className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,var(--color-ink)_1px,transparent_0)] [background-size:26px_26px]" />
        <svg
          viewBox="0 0 386.122 300"
          className="absolute -right-24 -top-16 hidden w-[26rem] fill-forest opacity-10 lg:block"
        >
          <path d="M359.569 88.748 C347.04 19.082 248.433 -19.648 183.589 49.618 C116.479 -12.366 20.303 32.199 23.436 101.636 C34.216 38.404 116.757 10.633 167.082 65.211 C194.301 94.054 171.721 94.185 203.193 64.617 C281.69 -10.355 450.671 107.036 186.162 273.188 C162.417 262.042 135.294 246.161 113.278 232.441 C132.514 250.459 161.873 270.896 187.777 286.817 C199.607 280.067 377.666 188.904 359.569 88.748 Z" />
        </svg>
      </div>

      <Container>
        <Eyebrow>{label}</Eyebrow>
        <Heading
          id="portfolio-heading"
          className="mt-6 max-w-2xl text-balance"
        >
          {heading}
        </Heading>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:pb-8">
          {companies.map((company) => {
            const external = isExternalUrl(company.url);
            // The accent surface is light, so the bar inverts to ink and the body
            // copy darkens: brand lime on it is 1:1, text-muted only 4.09:1.
            const accent = Boolean(company.highlight);

            return (
              <li
                key={company.name}
                className={cn(
                  "group relative flex flex-col rounded-card border p-8 transition-colors focus-within:ring-2 focus-within:ring-forest focus-within:ring-offset-2",
                  accent
                    ? "border-transparent bg-accent hover:border-forest lg:translate-y-8"
                    : "border-line bg-surface hover:border-forest hover:bg-surface-muted",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-1 w-10 rounded-pill transition-all group-hover:w-16",
                    accent ? "bg-ink" : "bg-brand",
                  )}
                />

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                  {company.category}
                </p>

                <Heading as="h3" className="mt-3">
                  {company.name}
                </Heading>

                <p
                  className={cn(
                    "mt-3 flex-1 text-base leading-relaxed",
                    accent ? "text-ink/75" : "text-muted",
                  )}
                >
                  {company.description}
                </p>

                <a
                  href={company.url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-semibold text-forest after:absolute after:inset-0 after:rounded-card"
                >
                  Visit {company.name}
                  {external ? (
                    <span className="sr-only"> (opens in a new tab)</span>
                  ) : null}
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 rounded-card border border-dashed border-line bg-surface-muted p-8">
          <Heading as="h3">{future.title}</Heading>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
            {future.description}
          </p>
        </div>
      </Container>
    </Section>
  );
}
