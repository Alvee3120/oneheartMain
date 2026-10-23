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
      className="bg-forest"
    >
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
              className="rounded-card border border-surface/15 bg-forest-deep p-8 md:p-10"
            >
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
