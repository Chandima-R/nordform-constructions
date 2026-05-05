"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
    text: string;
    className?: string;
    scrub?: number;
};

export function ScrollBlurParagraph({
                                        text,
                                        className = "",
                                        scrub = 1.15,
                                    }: Props) {
    const el = useRef<HTMLParagraphElement>(null);

    useGSAP(
        () => {
            if (!el.current) return;
            gsap.fromTo(
                el.current,
                { filter: "blur(14px)", opacity: 0.12, y: 36 },
                {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el.current,
                        start: "top 88%",
                        end: "top 42%",
                        scrub,
                    },
                },
            );
        },
        { scope: el, dependencies: [scrub] },
    );

    return (
        <p ref={el} className={`will-change-[filter,opacity,transform] ${className}`}>
            {text}
        </p>
    );
}
