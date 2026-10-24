import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { ValueCard } from "@/components/ui/ValueCard";

/**
 * Six grid rows at lg. The middle column holds three cards of two rows each;
 * the outer columns hold two cards of three rows each, so every column covers
 * all six rows and the three columns end up exactly the same height.
 */
const columnPlacement = [
  "lg:col-start-1 lg:row-start-1 lg:row-span-3",
  "lg:col-start-1 lg:row-start-4 lg:row-span-3",
  "lg:col-start-2 lg:row-start-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-3 lg:row-span-2",
  "lg:col-start-2 lg:row-start-5 lg:row-span-2",
  "lg:col-start-3 lg:row-start-1 lg:row-span-3",
  "lg:col-start-3 lg:row-start-4 lg:row-span-3",
];

export function Values() {
  return (
    <Section
      id="values"
      labelledBy="values-heading"
      className="relative isolate bg-surface-muted"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,var(--color-ink)_1px,transparent_0)] [background-size:26px_26px]"
      />

      <Container>
        <Eyebrow>{site.values.label}</Eyebrow>
        <Heading id="values-heading" className="mt-6 max-w-2xl text-balance">
          {site.values.heading}
        </Heading>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-6">
          {site.values.items.map((value, index) => (
            <ValueCard
              key={value.title}
              index={index + 1}
              title={value.title}
              description={value.description}
              image={value.image}
              tone={value.highlight ? "highlight" : "default"}
              className={columnPlacement[index]}
            />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
