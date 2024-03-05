"use client";
import HeroSection from "@/components/herosection/Herosection";
import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import Work from "./work/page";

export default function Home() {

  return (
    <main className={`w-full flex flex-col justify-between fadeIn`}>
      <HeroSection />
      {/* <Work /> */}
    </main>
  );
}
