"use client";

import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {motion, useScroll, useTransform} from "framer-motion";

gsap.registerPlugin(useGSAP);

export const HeroSection = () => {
    const container = useRef<HTMLElement>(null);
    const mediaWrap = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"],
    });
    const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
            tl.from(".hero-line", {
                yPercent: 100,
                opacity: 0,
                duration: 1.05,
                stagger: 0.12,
                skewY: 2,
            })
                .from(
                    ".hero-sub",
                    { y: 28, opacity: 0, duration: 0.8 },
                    "-=0.55",
                )
                .from(
                    ".hero-cta",
                    { y: 20, opacity: 0, duration: 0.55 },
                    "-=0.45",
                )
                .from(
                    ".hero-media",
                    { scale: 1.08, opacity: 0, duration: 1.15 },
                    "-=1",
                );
        },
        { scope: container },
    );

    return (
        <section
            ref={container}
            className="relative grid min-h-[calc(100vh-72px)] gap-0 bg-ivory lg:min-h-[calc(100vh-88px)] lg:grid-cols-[1fr_1.05fr]"
        >
            <div className="relative z-10 flex flex-col justify-end gap-8 px-5 py-14 md:px-10 md:py-20 lg:px-14 lg:pb-28">
                <div className="absolute left-5 top-10 h-24 w-px bg-gradient-to-b from-ember via-gold to-transparent md:left-10 lg:left-14" />
                <h1 className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.92] tracking-[0.02em] text-ink">
          <span className="block overflow-hidden">
            <span className="hero-line block">BYGGER</span>
          </span>
                    <span className="block overflow-hidden">
            <span className="hero-line block bg-gradient-to-r from-ember via-gold-bright to-ember-bright bg-clip-text text-transparent [background-size:200%_auto]">
              FRAMTID
            </span>
          </span>
                </h1>
                <p className="hero-sub max-w-xl text-lg leading-relaxed text-stone-warm md:text-xl">
                    Vi levererar bostäder, kommersiella ytor och infrastruktur i hela
                    Sverige — med nordisk enkelhet, säkerhet på plats och respekt för
                    material och miljö.
                </p>
                <div className="hero-cta flex flex-wrap gap-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center bg-graphite px-9 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-ivory ring-1 ring-ember/35 transition hover:bg-ember hover:text-ivory hover:ring-ember"
                    >
                        Våra projekt
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center border border-graphite/20 bg-transparent px-9 py-4 text-[10px] font-bold uppercase tracking-[0.28em] text-ink transition hover:border-ember hover:text-ember"
                    >
                        Kontakta oss
                    </Link>
                </div>
            </div>
            <div
                ref={mediaWrap}
                className="hero-media relative min-h-[44vh] w-full overflow-hidden lg:min-h-0"
            >
                <motion.div
                    style={{ y: mediaY }}
                    className="absolute inset-x-0 top-[-9%] h-[118%] w-full"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
                        alt="Byggarbetsplats med stål och betong"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                    />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent lg:bg-gradient-to-l" />
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.95, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-8 right-6 max-w-[220px] border border-gold/35 bg-ink/80 px-4 py-3 text-[10px] font-bold uppercase leading-relaxed tracking-[0.28em] text-gold-bright backdrop-blur-md md:bottom-14 md:right-10 md:max-w-[260px] md:text-[11px]"
                >
                    Certifierad enligt ISO 45001 · Stockholm
                </motion.div>
            </div>
        </section>
    );
}
