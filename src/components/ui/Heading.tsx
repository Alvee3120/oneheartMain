import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = "h2" | "h3";
type HeadingTone = "default" | "inverted";

const styles: Record<HeadingLevel, string> = {
  h2: "text-h2 font-bold md:text-h2-lg",
  h3: "text-h3 font-semibold",
};

const tones: Record<HeadingTone, string> = {
  default: "text-ink",
  inverted: "text-surface",
};

export function Heading({
  as: Tag = "h2",
  tone = "default",
  id,
  className,
  children,
}: {
  as?: HeadingLevel;
  tone?: HeadingTone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={cn("font-display", tones[tone], styles[Tag], className)}
    >
      {children}
    </Tag>
  );
}
