"use client";
import { motion, useScroll, useTransform} from "framer-motion";
import WorkCard from "@/components/cards/WorkCard";
import HollowHeading from "@/components/typography/HollowHeading";

const projects = [
  {
    imgSrc: "Period.jpg",
    imgAlt: "Period Flutter App",
    repoURL: "https://github.com/GSC-IIIT-Kota",
    name: "Period",
    description:
      "The Period App is a mobile application designed to address menstrual hygiene and sanitation challenges faced by women and girls globally.",
    topics: "https://skillicons.dev/icons?i=dart,flutter,materialui,firebase",
  },
  {
    imgSrc: "Poc.png",
    imgAlt: "Bhavna's Piece of Cake",
    repoURL: "https://github.com/yogeyyy/Bhavnas-Piece-Of-Cake",
    name: "Bhavna's Piece of Cake",
    description:
      "A user-friendly e-commerce bakery website facilitating seamless ordering and menu browsing for delightful treats.",
    topics: "https://skillicons.dev/icons?i=react,nodejs,express,mongodb",
  },
  {
    imgSrc: "docSpot.png",
    imgAlt: "DocSpot",
    repoURL: "https://github.com/yogeyyy/DocSpot",
    name: "DocSpot",
    description:
      "The Online Doctor Appointment System is a web-based platform that allows users to easily schedule appointments with doctors in their vicinity.",
    topics: "https://skillicons.dev/icons?i=react,nodejs,express,mongodb",
  },
];

export default function Work() {

  // const { scrollYProgress } = useScroll();
  // const y1 = useTransform(scrollYProgress, [0, 1], [0,0]);
  // const x1 = useTransform(scrollYProgress, [0, 1], [0,0]);

  return (
    <div className="w-full flex mt-20 justify-center">
      <div className="w-3/4 flex flex-col">
        <div className="w-full flex justify-start">
          <HollowHeading text="Work" />
        </div>
        <div className="w-full relative grid gap-10 grid-cols-2 grid-rows-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              // className="work-card"
              // style={{x: x1, y: y1}}
            >
              <WorkCard
                imgSrc={project.imgSrc}
                imgAlt={project.imgAlt}
                repoURL={project.repoURL}
                name={project.name}
                description={project.description}
                topics={project.topics}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
