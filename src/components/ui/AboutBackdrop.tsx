import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const BOOK = (
  <>
    <path d="M12 7.5C10 6 7 5.2 4 5.2V19c3 0 6 .8 8 2.3 2-1.5 5-2.3 8-2.3V5.2c-3 0-6 .8-8 2.3z" />
    <path d="M12 7.5V21.3" />
  </>
);

const MUG = (
  <>
    <path d="M5 8h11v7a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 15z" />
    <path d="M16 10h1.6a2.75 2.75 0 0 1 0 5.5H16" />
    <path d="M4 21.5h13" />
  </>
);

const LEAF = (
  <>
    <path d="M20.5 3.5C10 4 3.5 9.5 3.5 20.5c11 0 16.5-6.5 17-17z" />
    <path d="M20.5 3.5 4 20" />
  </>
);

const BAG = (
  <>
    <path d="M5.5 8h13l-1 12.5h-11z" />
    <path d="M9 8V6.2a3 3 0 0 1 6 0V8" />
  </>
);

const BOWL = (
  <>
    <path d="M3.5 11.5h17a8.5 8.5 0 0 1-17 0z" />
    <path d="M2.5 11.5h19" />
  </>
);

/**
 * Scattered motifs standing in for what the group actually trades in — food,
 * lifestyle, publishing. Positions stay outside the centred copy column (the
 * text spans roughly 24%–78% of the section), so nothing sits behind a line of
 * type; the layer is desktop-only because the margins don't exist below lg.
 */
const motifs: Array<{ art: ReactNode; className: string }> = [
  { art: BOOK, className: "left-[2%] top-[8%] size-16 -rotate-12 opacity-[0.09]" },
  { art: LEAF, className: "right-[3%] top-[6%] size-14 rotate-12 opacity-[0.08]" },
  { art: MUG, className: "right-[7%] top-[40%] size-18 -rotate-6 opacity-[0.07]" },
  { art: BAG, className: "left-[4%] top-[46%] size-15 rotate-8 opacity-[0.08]" },
  { art: BOWL, className: "right-[13%] top-[74%] size-17 rotate-6 opacity-[0.07]" },
  { art: BOOK, className: "left-[11%] top-[72%] size-10 rotate-16 opacity-[0.06]" },
  { art: LEAF, className: "left-[14%] top-[26%] size-9 -rotate-20 opacity-[0.06]" },
];

export function AboutBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <span className="absolute inset-0 bg-linear-to-br from-accent/20 via-transparent to-accent/10" />

      <div className="absolute inset-0 hidden lg:block">
        {motifs.map((motif, index) => (
          <svg
            key={index}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("absolute text-forest", motif.className)}
          >
            {motif.art}
          </svg>
        ))}
      </div>
    </div>
  );
}
