import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { ValueCard } from "@/components/ui/ValueCard";

export function Values() {
  return (
    <Section
      id="values"
      labelledBy="values-heading"
      className="bg-surface-muted"
    >
      <Container>
        <Eyebrow>{site.values.label}</Eyebrow>
        <Heading id="values-heading" className="mt-6 max-w-2xl text-balance">
          {site.values.heading}
        </Heading>

        {/* Wrapping flex keeps the odd seventh card centred instead of orphaned. */}
        <ul className="mt-12 flex flex-wrap justify-center gap-6">
          {site.values.items.map((value, index) => (
            <ValueCard
              key={value.title}
              index={index + 1}
              title={value.title}
              description={value.description}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
