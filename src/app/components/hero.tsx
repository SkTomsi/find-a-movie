import Image from "next/image";
import MovieOverlay from "./movie-overlay";

export default function HeroSection() {
  return (
    <section className="relative ">
      <div className="bg-gradient-to-b from-bright-purple to-purple flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-no-repeat z-[3] bg-[url('/glitter-hi-res.jpg')] bg-bottom bg-cover mix-blend-overlay opacity-40"></div>
        <div className="absolute inset-0 bg-no-repeat z-[2] bg-[url('/gradient.webp')] bg-bottom bg-cover  scale-[100%]"></div>
        <div className="overflow-y-hidden max-h-screen relative">
          <Image
            src={"/tv.png"}
            height={850}
            width={850}
            alt="tv-image"
            className="mix-blend-luminosity"
          />
          <div className="absolute -left-[15%] -top-[7%] md:top-9 md:left-[1%] z-[4] ">
            <MovieOverlay />
          </div>
        </div>
      </div>
    </section>
  );
}
