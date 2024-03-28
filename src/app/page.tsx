import Link from "next/link";
import AddSuggestion from "./components/addMovie";
import HeroSection from "./components/hero";
import { GithubIcon, TwitterIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="bg-transparent py-2 z-50 flex right-8 top-5 fixed">
        <div className="flex gap-5 text-white group hover:bg-white/10 p-2 rounded-md transition-all duration-500">
          <p className="hidden group-hover:block group-hover:animate-tooltip_show ">
            SkTomsi
          </p>
          <div className="flex gap-2">
            <Link href={"https://github.com/SkTomsi"} target="_blank">
              <GithubIcon />
            </Link>
            <Link href={"https://twitter.com/SkTomsi"} target="_blank">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
      <HeroSection />
      <AddSuggestion />
    </div>
  );
}
