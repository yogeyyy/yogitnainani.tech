import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import { motion, useScroll, useTransform } from "framer-motion"; 

export default function HollowHeading({ text }) {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <motion.div className="flex flex-col z-20 hollow-heading" style={{y: y1}}>
            <p className="opacity-20 text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest text-transparent uppercase self-start hollow-text">{text}</p>
            <p className="text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start">{text}</p>
            <p className="opacity-20 text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest text-transparent uppercase self-start hollow-text">{text}</p>            
        </motion.div>
    );
}
