"use client";

import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import "@fontsource/sacramento";

import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col relative mt-60 overflow-x-hidden overflow-y-hidden cursor-default select-none">
        <motion.h1
          style={{ x: x1 }} // Apply the transform value properly
          className="text-[14.9rem] font-anton leading-none tracking-wide text-transparent uppercase self-start hollow-text"
        >
          re
          <span className="text-[#fefffa]">Software</span>
          SoftwareSoftware
        </motion.h1>
        <motion.h1
          style={{ x: x2 }}
          className="text-[14.9rem] font-anton leading-none tracking-wide text-transparent uppercase self-end hollow-text"
        >
          Developer
          <span className="text-[#fefffa]">Developer</span>
          Develo
        </motion.h1>
      </div>

      <motion.div
        style={{ opacity }}
        className={`w-1/3 absolute right-[6rem] z-10 top-0 flex justify-center`}
      >
        <img src="/myimg1.png" alt="Yogit Nainani" className="" />
      </motion.div>

      <div className="w-3/4 flex flex-row self-center">
        <div className="flex flex-col gap-1 w-1/2 py-4">
          <p className="font-sourceSans text-[#fefffa] text-xl font-medium">
            Hello! I'm Yogit Nainani, an enthusiastic and detail-oriented
            full-stack developer hailing from Indore, Madhya Pradesh.I'm
            involved in crafting immersive web and mobile applications with a
            passion for design and open-source contributions.
          </p>
          <p className="font-sourceSans text-[#fefffa] text-xl font-medium underline"><Link href={"/about"}>Read more about me.</Link></p> 
        </div>
      </div>
    </div>
  );
}
