"use client";

import HeroSection from "@/components/herosection/Herosection";
import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import Work from "./projects/page";
import Experience from "./experience/page";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <main className={`w-full flex flex-col justify-between fadeIn`}>
      <HeroSection />
      <Work />
      <Experience />
      <div className="flex flex-col gap-10 justify-center items-center mt-28 mb-32">
        <p className="text-2xl text-[#727C57] uppercase font-sourceSans tracking-[0.5rem]">Wanna work together ?</p>
        <Link href={"/connect"} className="flex items-center hover:underline underline-offset-8 decoration-[#fefffa] transition duration-1000">
        <p className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start">Let's Connect</p>
          <FiArrowRight className="text-8xl text-[#fefffa]" />
        </Link>
      </div>
    </main>
  );
}
