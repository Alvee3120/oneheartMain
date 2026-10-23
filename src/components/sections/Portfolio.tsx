import { isExternalUrl } from "@/lib/links";
import { site } from "@/data/site";
import { ArrowRight } from "@/components/ui/ArrowRight";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function Portfolio() {
  const { label, heading, companies, future } = site.portfolio;

  return (
    <Section id="portfolio" labelledBy="portfolio-heading">
      <Container>
        <Eyebrow>{label}</Eyebrow>
        <Heading
          id="portfolio-heading"
          className="mt-6 max-w-2xl text-balance"
        >
          {heading}
        </Heading>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => {
            const external = isExternalUrl(company.url);

            return (
              <li
                key={company.name}
                className="group relative flex flex-col rounded-card border border-line bg-surface p-8 transition-colors hover:border-forest hover:bg-surface-muted focus-within:ring-2 focus-within:ring-forest focus-within:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  className="h-1 w-10 rounded-pill bg-brand transition-all group-hover:w-16"
                />

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                  {company.category}
                </p>

                <Heading as="h3" className="mt-3">
                  {company.name}
                </Heading>

                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
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
