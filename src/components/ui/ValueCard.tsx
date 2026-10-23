import { cn } from "@/lib/cn";
import { Heading } from "@/components/ui/Heading";

export function ValueCard({
  index,
  title,
  description,
  className,
}: {
  index: number;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "flex flex-col rounded-card border border-line bg-surface p-8 transition-colors hover:border-forest",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-10 place-items-center rounded-card bg-brand font-display text-sm font-bold text-ink"
      >
        {String(index).padStart(2, "0")}
      </span>

      <Heading as="h3" className="mt-5">
        {title}
      </Heading>

      <p className="mt-2 text-base leading-relaxed text-muted">{description}</p>
    </li>
  );
}
