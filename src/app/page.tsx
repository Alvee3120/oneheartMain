import { About } from "@/components/sections/About";
import { ClosingBanner } from "@/components/sections/ClosingBanner";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Portfolio } from "@/components/sections/Portfolio";
import { Values } from "@/components/sections/Values";
import { VisionMission } from "@/components/sections/VisionMission";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1">
      <Hero />
      <About />
      <VisionMission />
      <Portfolio />
      <Values />
      <Philosophy />
      <ClosingBanner />
    </main>
  );
}
