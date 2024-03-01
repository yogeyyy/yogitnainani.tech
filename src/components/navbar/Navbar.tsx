"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
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
          <RxHamburgerMenu className={`absolute ${toggle ? "opacity-0" : "opacity-1"} ${toggle ? "rotate-0" : "rotate-[360deg]"} transition duration-500`}/>
          <RxCross1 className={`absolute ${toggle ? "opacity-1" : "opacity-0"} ${toggle ? "rotate-0" : "rotate-[360deg]"} transition duration-500`} />
        </div>
      </div>

      // special div
      {toggle && <div className="bg-[#0C0C0F] opacity-95 w-full min-h-screen absolute z-20 transition duration-1000"></div>}
    </div>
  );
}
