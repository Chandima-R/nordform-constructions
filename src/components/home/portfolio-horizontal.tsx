"use client";

import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";

const slides = [
    {
        title: "Sjöstadsvillorna",
        meta: "Stockholm · 2024",
        href: "/projects",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop",
    },
    {
        title: "Campus Syd",
        meta: "Lund · 2023",
        href: "/projects",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
    },
    {
        title: "Hamnterminal",
        meta: "Göteborg · 2025",
        href: "/projects",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop",
    },
    {
        title: "Norra kontorshub",
        meta: "Uppsala · 2022",
        href: "/projects",
        image:
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",
    },
    {
        title: "Campus Syd",
        meta: "Lund · 2023",
        href: "/projects",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",
    },
    {
        title: "Hamnterminal",
        meta: "Göteborg · 2025",
        href: "/projects",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop",
    },
    {
        title: "Norra kontorshub",
        meta: "Uppsala · 2022",
        href: "/projects",
        image:
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop",
    },
];

export const PortfolioHorizontal = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-63%"]);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            className="relative h-[420vh] bg-ivory"
        >
            <div className="sticky top-0 flex h-screen flex-col overflow-hidden pb-10 pt-20 md:pt-24">
                <div className="mx-auto w-full max-w-[1800px] px-5 md:px-10 lg:px-14">
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Utvalda verk
                    </p>

                    <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[0.05em] text-ink md:text-7xl lg:text-8xl">
                        PORTFÖLJ I RÖRELSE
                    </h2>

                    <p className="mt-6 max-w-xl text-sm text-stone-warm md:text-base">
                        Svep horisontellt genom utvalda leveranser — varje yta är resultatet
                        av gemensamma workshops med arkitekt och beställare.
                    </p>

                    <div className="mt-8 h-[2px] w-full overflow-hidden bg-ink/10">
                        <motion.div
                            style={{ width: progressWidth }}
                            className="h-full bg-gold"
                        />
                    </div>
                </div>

                <div className="mt-10 flex-1 md:mt-14">
                    <motion.div
                        style={{ x }}
                        className="flex h-full w-max items-center gap-5 px-5 md:gap-8 md:px-10 lg:px-14"
                    >
                        {slides.map((s, i) => {
                            const isLast = i === slides.length - 1;

                            return (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.35 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: i * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="w-[88vw] shrink-0 md:w-[58vw] lg:w-[48vw] xl:w-[42vw]"
                                >
                                    {isLast ? (
                                        <div className="flex h-full flex-col justify-between border border-stone-200 bg-ink p-8 md:p-12 shadow-[0_28px_70px_-34px_rgba(14,14,12,0.45)]">

                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                                                    Utforska mer
                                                </p>

                                                <h3 className="mt-4 font-display text-4xl leading-[1] tracking-[0.06em] text-ivory md:text-5xl">
                                                    Fler projekt
                                                </h3>

                                                <p className="mt-6 max-w-md text-sm text-ivory/70 md:text-base">
                                                    Upptäck hela vårt arkiv av projekt — från bostäder till
                                                    kommersiella miljöer, alla formade genom noggrant samarbete
                                                    och detaljfokus.
                                                </p>
                                            </div>

                                            <div className="mt-10">
                                                <Link
                                                    href="/projects"
                                                    className="group inline-flex items-center gap-3 border border-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
                                                >
                                                    Visa alla projekt
                                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={s.href}
                                            className="group relative flex aspect-[16/11] w-full overflow-hidden border border-stone-200 bg-ink shadow-[0_28px_70px_-34px_rgba(14,14,12,0.45)]"
                                        >
                                            <Image
                                                src={s.image}
                                                alt={s.title}
                                                fill
                                                className="object-cover opacity-90 transition duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                                                sizes="(max-width: 768px) 88vw, 58vw"
                                            />

                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />

                                            <div className="relative mt-auto flex w-full flex-col gap-1 p-6 md:p-9">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold">
                                                    {s.meta}
                                                </p>

                                                <p className="font-display text-3xl tracking-[0.08em] text-ivory md:text-4xl lg:text-5xl">
                                                    {s.title}
                                                </p>
                                            </div>
                                        </Link>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
