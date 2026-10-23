import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function ClosingBanner() {
  const [first, second, third] = site.slogans;

  return (
    <section aria-labelledby="closing-heading" className="bg-forest">
      <Container className="py-section text-center md:py-section-lg">
        <p className="font-display text-h2 font-bold text-surface/70 md:text-h2-lg">
          {first}
        </p>
        <p className="font-display text-h2 font-bold text-surface/70 md:text-h2-lg">
          {second}
        </p>
        {/* Carries the section's accessible name, so it is the heading element. */}
        <h2
          id="closing-heading"
          className="font-display text-h2 font-bold text-brand-light md:text-h2-lg"
        >
          {third}
        </h2>
      </Container>
    </section>
  );
}
