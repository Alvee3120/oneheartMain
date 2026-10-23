import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" labelledBy="about-heading">
      <Container className="text-center">
        <Eyebrow>{site.about.label}</Eyebrow>
        <Heading id="about-heading" className="mx-auto mt-6 max-w-2xl text-balance">
          {site.about.heading}
        </Heading>
      </Container>

      <Container>
        <div className="mx-auto mt-10 max-w-3xl space-y-6 md:mt-12">
          {site.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "text-pretty text-lg leading-relaxed text-ink sm:text-xl"
                  : "text-pretty text-base leading-relaxed text-muted"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
