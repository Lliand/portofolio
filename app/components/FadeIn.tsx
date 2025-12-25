"use client";
import {motion} from "framer-motion";

export default function FadeIn({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    return (
        <motion.div 
            initial={{opacity: 0, y: 80}} // Start: Invisible and slightly down
            animate={{opacity: 1, y: 0}} // End: Fully visible and in place
            transition={{duration: 0.7, delay: delay, ease: "easeOut"}} // Animation duration and delay, smoothness
        >
            {children}
        </motion.div>
    );
}