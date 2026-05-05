"use client";

import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {motion} from "framer-motion";
import {ScrollLinesReveal} from "@/components/motion/scroll-lines-reveal";
import {ScrollBlurParagraph} from "@/components/motion/scroll-blur-paragraph";


gsap.registerPlugin(ScrollTrigger, useGSAP);

export const FeaturedStrip = ()=> {
    const imageWrap = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!imageWrap.current) return;
            gsap.fromTo(
                imageWrap.current,
                { clipPath: "inset(12% 10% 12% 10% round 2px)" },
                {
                    clipPath: "inset(0% 0% 0% 0% round 0px)",
                    duration: 1.25,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: imageWrap.current,
                        start: "top 75%",
                        end: "top 25%",
                        scrub: 1,
                    },
                },
            );
        },
        { scope: imageWrap },
    );

    return (
        <section className="bg-ink text-ivory">
            <div className="mx-auto grid max-w-[1800px] lg:grid-cols-[1fr_1.02fr]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9 }}
                    className="relative aspect-[4/3] min-h-[300px] w-full lg:aspect-auto lg:min-h-[min(78vh,760px)]"
                >
                    <div ref={imageWrap} className="absolute inset-0 will-change-[clip-path]">
                        <Image
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
                            alt="Stomme och kran vid nyproduktion"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" />
                </motion.div>
                <div className="flex flex-col justify-center gap-8 px-5 py-16 md:gap-10 md:px-10 md:py-24 lg:px-14 lg:py-28">
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Utvalt projekt
                    </p>
                    <ScrollLinesReveal
                        lines={["HAMNKVARTERET", "GÖTEBORG"]}
                        className="font-display text-5xl leading-[0.95] tracking-[0.05em] text-ivory md:text-7xl lg:text-8xl"
                    />
                    <ScrollBlurParagraph
                        text="Bostäder, lokaler och promenadstråk vid vattnet. Nordisk fasad i trä och tegel, energiklass A och flexibla planlösningar för framtida bruk."
                        className="max-w-lg font-serif text-lg leading-relaxed text-ivory/72 md:text-xl"
                        scrub={1.25}
                    />
                    <Link
                        href="/projects"
                        className="group inline-flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gold-bright transition hover:text-ivory"
                    >
                        <span className="h-px w-12 bg-gold transition-all group-hover:w-16" />
                        Se alla projekt
                    </Link>
                </div>
            </div>
        </section>
    );
}
