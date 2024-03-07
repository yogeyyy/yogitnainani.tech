"use client";

import ExperienceCard from "@/components/cards/ExperienceCard";
import Heading from "@/components/typography/Heading";
import { motion } from "framer-motion";

const experiences = [
  {
    imgSrc: "President.png",
    imgAlt: "President",
    tenure: "August 2023 - Present",
    position: "President",
    orgName: "IIITians Network",
    description: "As President of IIITians Network since August 2023, I've driven a significant increase in our follower count from 6.8k to 11.5k. Through strategic social media initiatives and engaging content, we've fostered inter-college connections and hosted successful contests, enhancing community interaction.",
  },
  {
    imgSrc: "webmaster.png",
    imgAlt: "Webmaster",
    tenure: "September 2023 - Present",
    position: "Webmaster",
    orgName: "IIIT Kota",
    description: "Serving as the Webmaster at IIIT Kota since September 2023, I've led a dedicated team of college developers in managing and updating our website. Our efforts have ensured a seamless flow of information and promoted a user-friendly online experience, contributing to the continual improvement of our online presence."
  },
  {
    imgSrc: "teamlead.png",
    imgAlt: "Design lead",
    tenure: "August 2023 - Present",
    position: "Design Lead",
    orgName: "Quills 'n' Stills",
    description: "In my role as Design Lead at Quills 'n' Stills since August 2023, I've overseen the release of the latest editions of our institute's official magazine. From mood boarding to theme setting and design decisions, I've monitored the entire process to ensure high-quality publications.",
  },
  {
    imgSrc: "coreteam.png",
    imgAlt: "Coreteam Member",
    tenure: "August 2022 - June 2023",
    position: "Core Team Member",
    orgName: "GDSC IIIT Kota",
    description: " As a Core Team Member of GDSC IIIT Kota from August 2022 to June 2023, I orchestrated 10+ events, including a successful self-conducted web development event. Also, organized events in collaboration with well known communities like HackTheLeague and AWS User group Jaipur.",
  },
];

export default function Experience() {
  return (
    <div className="w-full flex mt-20 py-8 justify-center">
      <div className="w-3/4 flex flex-col">
        <div className="w-full flex justify-center">
          <Heading text="Experience" />
        </div>
        <div className="w-full relative grid gap-10 grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              // className="work-card"
              // style={{x: x1, y: y1}}
            >
              <ExperienceCard
                imgSrc={experience.imgSrc}
                imgAlt={experience.imgAlt}
                tenure={experience.tenure}
                position={experience.position}
                orgName={experience.orgName}
                description={experience.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
