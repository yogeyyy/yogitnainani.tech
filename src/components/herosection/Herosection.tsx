import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import "@fontsource/sacramento";

import { useScroll, useTransform, motion } from "framer-motion";
import HollowHeading from "../typography/HollowHeading";

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

      <div className="w-3/4 flex flex-row self-center gap-2">
        <div className="flex flex-col gap-2 w-1/2 py-20">
          <h3 className="font-sourceSans text-[#fefffa] text-xl font-medium">
            Hello! I'm Yogit Nainani, an enthusiastic and detail-oriented
            full-stack developer hailing from Indore, Madhya Pradesh. I am
            currently in 3rd year pursuing my Bachelor's degree in Technology at
            the prestigious Indian Institute of Information Technology, Kota.
          </h3>
          <h3 className="font-sourceSans text-[#fefffa] text-xl font-medium">
            Fueled by a passion for innovation and a drive for excellence, I
            thrive on the challenges of crafting immersive mobile and web
            applications. Beyond my professional endeavors, I am deeply
            committed to contributing to the open-source community, using my
            skills to make a meaningful impact. I find solace and joy in brewing
            coffee for myself and friends; it's a getaway from all my problems
            and a wonderful way for me to foster lasting connections.{" "}
          </h3>
          <h3 className="font-sourceSans text-[#fefffa] text-xl font-medium">
            Currently, I hold the esteemed position of President at IIITians
            Network, the largest community of IIITians, where I lead a dedicated
            team in managing the community and maintaining our social media
            platforms. Additionally, I spearhead the development of the IIITians
            Network official website, ensuring it reflects our mission and
            values while providing a seamless user experience for our members.
          </h3>
        </div>
        <div className="flex justify-end items-end w-1/2 z-20">
          <HollowHeading text={"About"}/>
        </div>
      </div>
    </div>
  );
}
