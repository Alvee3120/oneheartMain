"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavLink } from "@/data/site";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type MobileMenuTone = "default" | "inverted";

const tones: Record<MobileMenuTone, string> = {
  default: "border-line text-ink hover:bg-surface-muted",
  inverted:
    "border-surface/40 text-surface hover:bg-surface/10 focus-visible:outline-surface",
};

export function MobileMenu({
  links,
  tone = "default",
}: {
  links: readonly NavLink[];
  tone?: MobileMenuTone;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-pill border transition-colors lg:hidden",
          tones[tone],
        )}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5 stroke-current"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open ? (
        <nav
          id={panelId}
          aria-label="Primary"
          className="absolute inset-x-0 top-header animate-menu-in border-b border-line bg-surface lg:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-card px-2 font-medium text-muted transition-colors hover:bg-surface-muted hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </>
  );
}
