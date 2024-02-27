"use client";
import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import { useState } from "react";
import { BsEnvelope } from "react-icons/bs";

export default function Home() {

  const [showContactMe, setShowContactMe] = useState(false);

  const handleHover = () => {
    setShowContactMe(!showContactMe);
  };

  return (
    <main className={`flex flex-col justify-between fadeIn`}>
      <div className="w-full flex flex-col items-center relative mt-40  overflow-x-hidden overflow-y-hidden cursor-default select-none">
        <h1 className="text-[15rem] font-anton text-white leading-none tracking-wide text-[#fefffa]">
          <span className="hollow-text">YOGIT</span>YOGIT
          <span className="hollow-text">YOGITYOGIT</span>
        </h1>
        <h1 className="text-[15rem] font-anton text-white leading-none tracking-wide text-[#fefffa]">
          <span className="hollow-text">AINANI</span>NAINANI
          <span className="hollow-text">NAINANINAI</span>
        </h1>
      </div>

      <div className={`w-1/3 absolute right-[6rem] top-0 flex justify-center`}>
        <img src="/myimg1.png" alt="Yogit Nainani" className="" />
      </div>

      <div className="w-3/5 flex justify-center font-source-sans-pro">
        Full-stack Developer, with Coffee in one hand,
        and confidence in other.
      </div>

      <div className="fixed bottom-8 left-8 p-4 rounded-full bg-[#727C57] flex flex-row items-center justify-center gap-2 transition-all duration-300 ease-in-out" onMouseOver={handleHover} onMouseOut={handleHover}>
        <a href="mailto:your@email.com" className="text-white flex items-center">
          <BsEnvelope className="mr-2" />
          {showContactMe && <span>Contact me</span>}
        </a>
      </div>
    </main>
  );
}
