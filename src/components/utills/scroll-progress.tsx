"use client";

import {motion, useScroll, useSpring} from "framer-motion";

export const ScrollProgress = ()=> {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 28,
        mass: 0.35,
        restDelta: 0.0005,
    });

    return (
        <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-ember via-gold-bright to-ember-bright shadow-[0_0_26px_rgba(206,79,54,0.55)]"
            style={{ scaleX }}
        />
    );
}
