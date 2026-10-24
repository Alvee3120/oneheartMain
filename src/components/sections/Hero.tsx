import Image from "next/image";
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
      className="relative isolate -mt-header flex min-h-dvh flex-col justify-center overflow-hidden bg-forest-deep"
    >
      <Image
        src="/hero.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/65" />

      <Container className="relative py-section md:py-section-lg">
        <div className="max-w-3xl">
          <Eyebrow tone="inverted">{site.hero.eyebrow}</Eyebrow>

          <h1
            id="hero-heading"
            className="mt-6 font-display text-display font-bold text-surface sm:text-5xl md:text-6xl"
          >
            {site.hero.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-surface/80 sm:text-lg">
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
      </Container>
    </section>
  );
}
