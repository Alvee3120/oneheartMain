import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  /** id of the heading that names this section — required for the accessibility contract. */
  labelledBy: string;
} & ComponentPropsWithoutRef<"section">;

export function Section({
  labelledBy,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={cn("py-section md:py-section-lg", className)}
      {...props}
    >
      {children}
    </section>
  );
}
