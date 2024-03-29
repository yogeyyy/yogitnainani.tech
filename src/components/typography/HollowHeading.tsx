import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import { motion, useScroll, useTransform } from "framer-motion"; 

interface Props {
    text: string; // Define the type for 'text' as string
}

export default function HollowHeading({ text }: Props) {
    // const { scrollYProgress } = useScroll();
    // const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div className="flex flex-col z-20 hollow-heading pb-8"> 
            <p className="opacity-20 text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest text-transparent uppercase self-start hollow-text">{text}</p>
            <p className="text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start">{text}</p>
            <p className="opacity-20 text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest text-transparent uppercase self-start hollow-text">{text}</p>            
        </div>
    );
}
