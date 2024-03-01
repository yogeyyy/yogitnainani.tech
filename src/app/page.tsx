"use client";
import HeroSection from "@/components/herosection/Herosection";
import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { RiMessage2Line } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HollowHeading from "@/components/typography/HollowHeading";
import Work from "./work/page";

export default function Home() {
  const [contactClick, setContactClick] = useState(false);

  const handleContactClick = () => {
    setContactClick(!contactClick);
  };

  return (
    <main className={`w-full flex flex-col justify-between fadeIn`}>
      <HeroSection />
      <Work />
    </main>
  );
}
