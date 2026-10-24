import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function ClosingBanner() {
  const [first, second, third] = site.slogans;

  return (
    <section aria-labelledby="closing-heading" className="bg-forest">
      <Container className="space-y-3 py-section text-center md:space-y-5 md:py-section-lg">
        <p className="font-fancy text-5xl font-light leading-none text-surface/70 md:text-7xl">
          {first}
        </p>
        <p className="font-fancy text-5xl font-light leading-none text-surface/70 md:text-7xl">
          {second}
        </p>
        {/* Carries the section's accessible name, so it is the heading element. */}
        <h2
          id="closing-heading"
          className="font-fancy text-5xl font-light leading-none text-brand-light md:text-7xl"
        >
          {third}
        </h2>
      </Container>
    </section>
  );
}
