"use client";

import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {motion} from "framer-motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
    {
        n: "01",
        title: "Program & risk",
        body: "Gemensam problematisering av mål, budget och beroenden. Tidig riskinventering och visualiserad beslutskedja.",
    },
    {
        n: "02",
        title: "Design för produktion",
        body: "Tekniska workshoppar där arkitektur möter leverans — toleranser, logistik och underhåll planeras parallellt.",
    },
    {
        n: "03",
        title: "Produktion med tempo",
        body: "Veckovisa lägesbilder, säkerhetsledning enligt ISO 45001 och transparent ekonomisk uppföljning.",
    },
    {
        n: "04",
        title: "Inflytt & drift",
        body: "Strukturerad överlämning, dokumentation för förvaltning och uppföljning mot uppsatta nyckeltal.",
    },
];

export const HomeProcess = ()=> {
    const root = useRef<HTMLElement>(null);
    const line = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!line.current || !root.current) return;
            gsap.fromTo(
                line.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    ease: "none",
                    transformOrigin: "top center",
                    scrollTrigger: {
                        trigger: root.current,
                        start: "top 72%",
                        end: "bottom 55%",
                        scrub: 0.65,
                    },
                },
            );
        },
        { scope: root },
    );

    return (
        <section
            ref={root}
            className="border-y border-stone-200 bg-gradient-to-b from-cream-dark/50 to-ivory py-24 md:py-32 lg:py-40"
        >
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Arbetssätt
                        </p>
                        <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] tracking-[0.06em] text-ink md:text-7xl lg:text-8xl">
                            FRÅN IDÉ TILL
                            <br />
                            <span className="text-gold">NYCKLAR</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-stone-warm md:text-base lg:text-right">
                        Vår process är designad för beslutsfattare som behöver förutsägbarhet:
                        tydliga interfaces mellan beställare, projektör och produktion — utan
                        att tappa arkitektonisk ambition.
                    </p>
                </div>

                <div className="relative mt-20 lg:mt-28">
                    <div
                        ref={line}
                        className="absolute left-[15px] top-0 hidden h-full w-px bg-gradient-to-b from-gold via-gold/40 to-transparent md:block lg:left-5"
                        aria-hidden
                    />
                    <div className="grid gap-14 md:gap-16 md:pl-14 lg:pl-20">
                        {steps.map((s, i) => (
                            <motion.article
                                key={s.n}
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-12%" }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.05,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="relative grid gap-6 border-t border-stone-200/90 pt-10 md:grid-cols-[120px_1fr] md:gap-12 md:pt-12"
                            >
                                <div className="flex items-start gap-4 md:block">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-ivory text-[10px] font-bold text-gold md:absolute md:-left-[4.5rem] md:top-12 md:h-10 md:w-10">
                    {s.n}
                  </span>
                                    <h3 className="font-display text-3xl tracking-[0.12em] text-ink md:text-4xl">
                                        {s.title}
                                    </h3>
                                </div>
                                <p className="max-w-2xl text-base leading-relaxed text-stone-warm md:text-lg">
                                    {s.body}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
