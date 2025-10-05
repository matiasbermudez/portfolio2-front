import { HeroSection } from "./components/heroSection";
import { ToolsSection } from "./components/toolsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
       <HeroSection/>
       <ToolsSection/>
    </div>
  );
}
