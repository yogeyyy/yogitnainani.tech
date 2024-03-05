"use client";
import HollowHeading from "@/components/typography/HollowHeading";

export default function Work() {
  return (
    <div className="w-full flex mt-40 justify-center">
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
          <HollowHeading text={"About"} />
        </div>
      </div>
    </div>
  );
}
