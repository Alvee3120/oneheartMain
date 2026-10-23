import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function Philosophy() {
  const [statement, ...supporting] = site.philosophy.paragraphs;

  return (
    <Section id="philosophy" labelledBy="philosophy-heading">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>{site.philosophy.label}</Eyebrow>
          <Heading id="philosophy-heading" className="mt-6 text-balance">
            {site.philosophy.heading}
          </Heading>
        </div>

        <div className="lg:col-span-7">
          <p className="font-display text-h3 font-semibold text-forest">
            {statement}
          </p>

          <div className="mt-6 space-y-6">
            {supporting.map((paragraph) => (
              <p
                key={paragraph}
                className="text-pretty text-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
