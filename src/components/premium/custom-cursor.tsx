"use client";

import {useEffect} from "react";
import {animate, motion, useMotionValue, useSpring} from "framer-motion";

const SEL =
    'a, button, [role="button"], input, textarea, select, summary, [data-cursor-hover]';

function isInteractiveTarget(target: Element | null) {
    return Boolean(target?.closest(SEL));
}

export const CustomCursor = ()=> {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 400, damping: 32, mass: 0.35 });
    const springY = useSpring(y, { stiffness: 400, damping: 32, mass: 0.35 });
    const ring = useMotionValue(1);
    const ringSpring = useSpring(ring, { stiffness: 520, damping: 28 });

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        if (!mq.matches) return;

        document.documentElement.classList.add("has-custom-cursor");

        let active = false;

        const poll = () => {
            const over = active;
            const targetScale = over ? 1.35 : 1;
            animate(ring, targetScale, { type: "spring", stiffness: 420, damping: 26 });
        };

        const move = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
            const under = document.elementFromPoint(e.clientX, e.clientY);
            active = isInteractiveTarget(under);
            poll();
        };

        const down = () =>
            animate(ring, 0.9, { type: "spring", stiffness: 700, damping: 32 });
        const up = () => poll();

        window.addEventListener("mousemove", move, { passive: true });
        window.addEventListener("mousedown", down);
        window.addEventListener("mouseup", up);

        return () => {
            document.documentElement.classList.remove("has-custom-cursor");
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousedown", down);
            window.removeEventListener("mouseup", up);
        };
    }, [ring, x, y]);

    return (
        <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[10002] hidden mix-blend-difference lg:block"
            style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        >
            <div className="relative flex h-[52px] w-[52px] items-center justify-center">
                <motion.div
                    className="absolute inset-0 rounded-full border border-ivory/90"
                    style={{ scale: ringSpring }}
                />
                <div className="relative h-[6px] w-[6px] rounded-full bg-ivory shadow-[0_0_28px_rgba(255,255,255,0.75)]" />
            </div>
        </motion.div>
    );
}
