import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type LogoWordmarkTone = "default" | "inverted";

/** Intrinsic size of the lockup in public/OneHeart.png (wordmark + tagline). */
const LOGO_WIDTH = 3400;
const LOGO_HEIGHT = 1250;

export function Logo({
  tone = "default",
  eager = false,
  className,
}: {
  tone?: LogoWordmarkTone;
  /** Set on the header logo so it is not lazy-loaded above the fold. */
  eager?: boolean;
  className?: string;
}) {
  return (
    <Image
      src="/OneHeart.png"
      alt={site.brand}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      sizes="120px"
      className={cn(
        "block h-10 w-auto md:h-11",
        // The lockup is drawn for light backgrounds — flatten it to a white
        // silhouette so it stays legible on the forest-deep footer.
        tone === "inverted" && "brightness-0 invert",
        className,
      )}
    />
  );
}
