"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [hoverX, setHoverX] = useState(0);
  const [hoverY, setHoverY] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleHover = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - (rect.left*1.4);
    const y = e.clientY - (rect.top*1.4);
    setHoverX(x);
    setHoverY(y);
  };

  return (
    <div className="w-full flex flex-col items-center fixed z-40">
      <div className="w-11/12 pt-8 flex flex-row justify-between items-center z-30">
        <h3 className="text-3xl text-[#fefffa] tracking-widest font-sourceSans uppercase">
          yogeyyy
        </h3>
        <div
          className="h-10 w-10 border-2 border-[#fefffa] text-[#fefffa] text-2xl flex justify-center items-center"
          onClick={handleToggle}
        >
          <RxHamburgerMenu
            className={`absolute ${toggle ? "opacity-0" : "opacity-1"} ${
              toggle ? "rotate-0" : "rotate-[360deg]"
            } transition duration-500`}
          />
          <RxCross1
            className={`absolute ${toggle ? "opacity-1" : "opacity-0"} ${
              toggle ? "rotate-0" : "rotate-[360deg]"
            } transition duration-500`}
          />
        </div>
      </div>

      {toggle && (
        <motion.div className="bg-[#0C0C0F] opacity-[99%] w-full min-h-screen absolute z-20 transition duration-1000 flex justify-center items-center">
          <ul className="">
            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                data-text="Home"
                href={"/"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Home</motion.h1>
                Home
              </Link>
            </motion.li>
            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                data-text="About"
                href={"/about"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link "
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">About</motion.h1>
                About
              </Link>
            </motion.li>
            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                data-text="Experience"
                href={"/experience"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Experience</motion.h1>
                Experience
              </Link>
            </motion.li>
            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                data-text="Projects"
                href={"/projects"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Projects</motion.h1>
                Projects
              </Link>
            </motion.li>
            <motion.li onMouseMove={handleHover} className="mb-4">
              <Link
                data-text="Contact"
                href={"/contact"}
                className="text-8xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start transition duration-500 nav-link"
              >
                <motion.h1 style={{ x: hoverX, y: hoverY }} className="hollow-bg absolute">Contact</motion.h1>
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
