import Image from "next/image";
import { cn } from "@/lib/cn";
import { Heading } from "@/components/ui/Heading";

type ValueCardTone = "default" | "highlight";

const tones: Record<
  ValueCardTone,
  { card: string; badge: string; body: string }
> = {
  default: {
    card: "border-line bg-surface hover:border-forest",
    badge: "bg-brand text-ink",
    body: "text-muted",
  },
  // The lime surface is light, so the badge inverts to ink and the body copy
  // darkens: brand lime on it is 1:1, and text-muted only reaches 4.09:1.
  highlight: {
    card: "border-transparent bg-accent hover:border-forest",
    badge: "bg-ink text-brand",
    body: "text-ink/75",
  },
};

export function ValueCard({
  index,
  title,
  description,
  image,
  tone = "default",
  className,
}: {
  index: number;
  title: string;
  description: string;
  image?: string;
  tone?: ValueCardTone;
  className?: string;
}) {
  const { card, badge, body } = tones[tone];

  return (
    <li
      className={cn(
        "flex flex-col overflow-hidden rounded-card border p-8 transition-colors",
        card,
        className,
      )}
    >
      {image ? (
        <div className="relative -mx-8 -mt-8 mb-6 aspect-[2/1]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]"
          />
        </div>
      ) : null}

      <span
        aria-hidden="true"
        className={cn(
          "grid size-10 place-items-center rounded-card font-display text-sm font-bold",
          badge,
        )}
      >
        {String(index).padStart(2, "0")}
      </span>

      <Heading as="h3" className="mt-5">
        {title}
      </Heading>

      <p className={cn("mt-2 text-base leading-relaxed", body)}>
        {description}
      </p>
    </li>
  );
}
