"use client";

import {motion} from "framer-motion";
import React from 'react'

export const PageTransition = ({ children }: { children: React.ReactNode })=> {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 32,
                rotateX: 3,
                filter: "blur(12px)",
                clipPath: "inset(0 0 8% 0)",
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
                clipPath: "inset(0 0 0% 0)",
            }}
            transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
            }}
            style={{ perspective: "1200px", transformOrigin: "50% 0%" }}
        >
            {children}
        </motion.div>
    );
}
