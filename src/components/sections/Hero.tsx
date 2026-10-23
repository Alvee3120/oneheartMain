import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  const [primaryAction, secondaryAction] = site.hero.actions;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="border-b border-line bg-surface-muted"
    >
      <Container className="grid items-center gap-12 py-section md:py-section-lg lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>{site.hero.eyebrow}</Eyebrow>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-display font-bold text-ink sm:text-5xl md:text-6xl"
          >
            {site.hero.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.hero.supporting}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={primaryAction.href}>
              {primaryAction.label}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-4 stroke-current"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>

            <Button href={secondaryAction.href} variant="outline">
              {secondaryAction.label}
            </Button>
          </div>
        </div>

        {/* Decorative brand panel — replace with real imagery when assets are provided. */}
        <div aria-hidden="true" className="lg:col-span-5">
          <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center overflow-hidden rounded-card bg-forest">
            <span className="absolute -bottom-12 -right-12 size-44 rounded-pill bg-brand/20" />
            <span className="absolute left-7 top-7 size-10 rounded-xl bg-brand/25" />
            <svg viewBox="0 0 24 24" className="relative size-28 fill-brand lg:size-36">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
