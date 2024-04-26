import { AiOutlineMail } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";


export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="w-full flex flex-col items-center z-40">
      <div className="w-3/4 flex flex-col self-center gap-2">
        <div className="w-full py-24 flex flex-row gap-20">
          <div className="w-1/3 flex flex-col">
            <h3 className="text-[#fefffa] font-sourceSans text-3xl font-bold">
              Contact Information
            </h3>
            <p className="text-lg text-[#727C57] py-4">
              Feel free to reach out to me anytime. I prefer to communicate and
              discuss any ideas over email.
            </p>
            <div className="flex flex-row items-center gap-2">
              <AiOutlineMail className="text-[#727C57]" />
              <p className="text-[#fefffa]"><a href="mailto:yogitnainani@gmail.com">yogitnainani@gmail.com</a></p>
            </div>
          </div>
          <div className="w-1/3 flex flex-col">
            <h3 className="text-[#fefffa] font-sourceSans text-3xl font-bold">
              Current Availability
            </h3>
            <p className="text-lg text-[#727C57] py-4">
              I usually dabble between multiple projects and opportunities but
              I'll be happy to discuss any new ideas. Let's get in touch.
            </p>
          </div>
          <div className="w-1/3 flex flex-col">
            <h3 className="text-[#fefffa] font-sourceSans text-3xl font-bold">
              Follow Me On
            </h3>
            <div className="py-4">
              <p className="text-[#fefffa]"><a href="https://www.linkedin.com/in/yogitnainani/" target="_blank">LinkedIn</a></p>
              <p className="text-[#fefffa]"><a href="https://github.com/yogeyyy" target="_blank">Github</a></p>
              <p className="text-[#fefffa]"><a href="https://www.instagram.com/yogitnainani/" target="_blank">Instagram</a></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-24">
          <div className="flex justify-center items-center gap-2">
            <FaRegCopyright className="text-[#727C57]"/>
            <p className="text-[#727C57]">Yogit Nainani {year} </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[#727C57]">Made with </p>
            <FaRegHeart className="text-[#727C57]"/>
            <p className="text-[#727C57]">in India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
