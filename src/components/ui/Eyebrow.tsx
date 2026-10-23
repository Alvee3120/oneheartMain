import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-pill bg-brand/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest",
        className,
      )}
    >
      <span aria-hidden="true" className="size-2 rounded-pill bg-brand" />
      {children}
    </p>
  );
}
