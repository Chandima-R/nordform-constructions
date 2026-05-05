"use client";

import type {ComponentProps} from "react";
import {useRef, useState} from "react";
import {motion} from "framer-motion";

type Props = ComponentProps<typeof motion.a> & {
    strength?: number;
};

export const MagneticButton = ({
                                   children,
                                   className = "",
                                   strength = 0.22,
                                   ...rest
                               }: Props)=> {
    const ref = useRef<HTMLAnchorElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        setPos({ x, y });
    }

    function handleLeave() {
        setPos({ x: 0, y: 0 });
    }

    return (
        <motion.a
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.4 }}
            className={className}
            {...rest}
        >
            {children}
        </motion.a>
    );
}
