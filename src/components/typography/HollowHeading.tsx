import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import { motion, useScroll, useTransform } from "framer-motion"; 

export default function HollowHeading() {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    return (
        <motion.div className="flex flex-col z-20 transition duration-1000" style={{y: y1}}>
            <p className="text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest text-transparent uppercase self-start hollow-text">work</p>
            <p className="text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start">Work</p>
            <p className="text-[10rem] leading-none text-[#fefffa] font-anton tracking-widest text-transparent uppercase self-start hollow-text">work</p>            
        </motion.div>
    );
}