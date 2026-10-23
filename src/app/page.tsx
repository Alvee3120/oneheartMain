import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { VisionMission } from "@/components/sections/VisionMission";

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="flex-1">
      <Hero />
      <About />
      <VisionMission />
      <Portfolio />
    </main>
  );
}
