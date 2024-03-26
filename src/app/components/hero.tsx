import Image from "next/image";
import MovieOverlay from "./movie-overlay";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-bright-purple to-purple flex justify-center overflow-hidden">
      <div className="absolute inset-0 bg-no-repeat z-20 bg-[url('/glitter.jpg')] bg-bottom bg-cover mix-blend-overlay opacity-40"></div>
      <div className="absolute inset-0 bg-no-repeat z-10 bg-[url('/gradient.png')] bg-bottom bg-cover scale-100"></div>
      {/* <div
      className="bg-purple-500 h-screen w-screen absolute"
      content=""
    ></div> */}
      <div className="bg-purple w-full z-40 absolute" content=""></div>
      <div className="relative overflow-y-hidden max-h-screen">
        <div className="absolute top-9 left-[100px]">
          <MovieOverlay />
        </div>
        <Image
          src={"/tv.png"}
          height={850}
          width={850}
          alt="tv-image"
          className=" mix-blend-luminosity"
        />
      </div>
    </section>
  );
}
