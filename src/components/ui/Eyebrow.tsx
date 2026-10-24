import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowTone = "default" | "inverted";

const tones: Record<EyebrowTone, string> = {
  default: "bg-brand/20 text-forest",
  inverted: "bg-surface/10 text-surface",
};

export function Eyebrow({
  tone = "default",
  children,
  className,
}: {
  tone?: EyebrowTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-pill px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
    >
      <span aria-hidden="true" className="size-2 rounded-pill bg-brand" />
      {children}
    </p>
  );
}
