import Image from "next/image";
import AddSuggestion from "./components/addMovie";
import HeroSection from "./components/hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AddSuggestion />
    </div>
  );
}
