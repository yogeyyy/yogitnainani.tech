"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { CiTimer } from "react-icons/ci";

interface ExperienceCardProps {
  imgSrc: string;
  imgAlt: string;
  tenure: string;
  position: string;
  orgName: string;
  description: string;
}

const ExperienceCard = ({
  imgSrc,
  imgAlt,
  tenure,
  position,
  description,
  orgName,
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
      <div className="p-8">
        <div className="flex flex-col justify-end items-start gap-2 mt-4">
          <img src={imgSrc} alt={imgAlt} className="w-1/6"/>
          <h4 className="text-2xl text-[#727C57] tracking-widest">
            {tenure}
          </h4>
        </div>
        <div className="">
          <h2 className="text-5xl text-[#fefffa] mt-4 mb-2 font-bold">
            {position}
          </h2>
          <h4 className="text-3xl text-[#fefffa] mb-4 font-semibold">
            {orgName}
          </h4>
        </div>
      </div>

      {isHover && (
        <div
          className="absolute w-full h-full bg-[#727C57] opacity-95 transition duration-500 p-8"
          onMouseLeave={handleHover}
        >
          <p className="font-sourceSans text-[#fefffa] text-xl font-semibold">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
