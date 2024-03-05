"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

interface WorkCardProps {
  imgSrc: string;
  imgAlt: string;
  repoURL: string;
  name: string;
  description: string;
  topics: string;
}

const WorkCard = ({
  imgSrc,
  imgAlt,
  repoURL,
  name,
  description,
  topics,
}: WorkCardProps) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <div
      className="relative w-full border border-[#727C57] flex rounded-sm z-20"
      onMouseEnter={handleHover}
    >
      <div className="w-3/5">
        <img src={imgSrc} alt={imgAlt} className="rounded-sm" />
      </div>
      <div className="w-2/5 p-4 flex flex-col justify-between">
        <div className="">
          <h5 className="text-2xl font-bold font-sourceSans text-[#fefffa]">
            {name}
          </h5>
          <p className="font-sourceSans text-[#fefffa] text-lg font-medium">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-sourceSans text-[#fefffa] text-xl font-medium">
            Topics:{" "}
          </p>
          <img src={topics} alt="topics" />
        </div>
      </div>

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

export default WorkCard;
