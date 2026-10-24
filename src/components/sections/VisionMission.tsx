import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

function VisionIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6 stroke-forest"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-6 stroke-forest"
      fill="none"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" className="fill-forest" />
    </svg>
  );
}

export function VisionMission() {
  const cards = [
    { ...site.visionMission.vision, icon: <VisionIcon /> },
    { ...site.visionMission.mission, icon: <MissionIcon /> },
  ];

  return (
    <Section
      id="vision-mission"
      labelledBy="vision-mission-heading"
      className="relative isolate overflow-hidden bg-forest"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <span className="absolute -left-40 -top-32 size-[30rem] rounded-pill bg-brand/10 blur-3xl" />
        <span className="absolute -bottom-40 -right-32 size-[32rem] rounded-pill bg-brand/5 blur-3xl" />
        <span className="absolute inset-0 opacity-5 [background-image:radial-gradient(circle_at_1px_1px,var(--color-surface)_1px,transparent_0)] [background-size:26px_26px]" />
        <svg
          viewBox="0 0 386.122 300"
          className="absolute -right-24 -top-16 hidden w-[26rem] fill-surface opacity-[0.04] lg:block"
        >
          <path d="M359.569 88.748 C347.04 19.082 248.433 -19.648 183.589 49.618 C116.479 -12.366 20.303 32.199 23.436 101.636 C34.216 38.404 116.757 10.633 167.082 65.211 C194.301 94.054 171.721 94.185 203.193 64.617 C281.69 -10.355 450.671 107.036 186.162 273.188 C162.417 262.042 135.294 246.161 113.278 232.441 C132.514 250.459 161.873 270.896 187.777 286.817 C199.607 280.067 377.666 188.904 359.569 88.748 Z" />
        </svg>

        {/* Focus reticle — the point where vision and mission converge. */}
        <svg
          viewBox="0 0 420 420"
          fill="none"
          className="absolute -bottom-48 -right-40 hidden size-[36rem] stroke-surface opacity-10 lg:block"
        >
          <circle cx="210" cy="210" r="70" strokeWidth="1.25" />
          <circle cx="210" cy="210" r="120" strokeWidth="1.25" />
          <circle cx="210" cy="210" r="170" strokeWidth="1.25" />
          <path
            d="M210 16v30M210 374v30M16 210h30M374 210h30"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <circle cx="210" cy="210" r="3.5" strokeWidth="0" className="fill-surface" />
        </svg>
      </div>

      <Container>
        <Heading
          id="vision-mission-heading"
          tone="inverted"
          className="max-w-2xl text-balance"
        >
          {site.visionMission.heading}
        </Heading>

        <div className="mt-12 grid gap-6 md:mt-14 md:gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative isolate overflow-hidden rounded-card border border-surface/15 bg-forest-deep p-8 md:p-10"
            >
              <Image
                src="/OneHeartFavicon.png"
                alt=""
                width={1609}
                height={1250}
                sizes="160px"
                className="pointer-events-none absolute bottom-8 right-8 -z-10 w-32 opacity-15 brightness-0 invert md:bottom-10 md:right-10 md:w-40"
              />

              <span className="grid size-12 place-items-center rounded-card bg-brand">
                {card.icon}
              </span>

              <Heading as="h3" tone="inverted" className="mt-6">
                {card.title}
              </Heading>

              <p className="mt-3 text-base leading-relaxed text-surface/80">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
