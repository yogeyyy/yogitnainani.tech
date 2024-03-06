"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { CiTimer } from "react-icons/ci";

interface ExperienceCardProps {
  imgSrc: string;
  imgAlt: string;
  repoURL: string;
  name: string;
  description: string;
  topics: string;
}

const ExperienceCard = ({
  imgSrc,
  imgAlt,
  repoURL,
  name,
  description,
  topics,
}: ExperienceCardProps) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div
      className="relative w-full border border-[#727C57] flex flex-col rounded-sm z-20"
      onMouseEnter={handleHover}
    >
        <CiTimer />
      

      {isHover && (
        <div className="absolute w-full h-full bg-[#727C57] opacity-90 transition duration-500" onMouseLeave={handleHover}>
          <p className="font-sourceSans text-[#fefffa] text-xl font-bold underline absolute bottom-4 left-4">
            <a href={repoURL} className="flex flex-row items-center gap-2" target="_blank"><span>View Project</span><FiArrowRight /></a>
          </p>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
