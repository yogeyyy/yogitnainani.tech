import "@fontsource/anton";
import "@fontsource/source-sans-pro";
import { motion, useScroll, useTransform } from "framer-motion"; 

interface Props {
    text: string; // Define the type for 'text' as string
}

export default function Heading({ text }: Props) {
    // const { scrollYProgress } = useScroll();
    // const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div className="flex justify-center z-20 hollow-heading pb-20"> 
            <p className="text-9xl leading-none text-[#fefffa] font-anton tracking-widest uppercase self-start">{text}</p>
        </div>
    );
}
