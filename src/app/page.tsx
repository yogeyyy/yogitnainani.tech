"use client";

import HeroSection from "@/components/herosection/Herosection";
import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import Work from "./projects/page";
import Experience from "./experience/page";
import Link from "next/link";
import Heading from "@/components/typography/Heading";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <main className={`w-full flex flex-col justify-between fadeIn`}>
      <HeroSection />
      <Work />
      <Experience />
      <div className="flex flex-col gap-10 justify-center items-center my-10">
        <p className="text-2xl text-[#fefffa] uppercase font-sourceSans tracking-[0.5rem]">Wanna work together ?</p>
        <Link href={"/connect"} className="flex hover:underline underline-offset-8 decoration-[#fefffa] transition duration-1000">
          <Heading text="Let's Connect!" />{" "}
          <FiArrowRight className="text-9xl text-[#fefffa]" />
        </Link>
      </div>
    </main>
  );
}
