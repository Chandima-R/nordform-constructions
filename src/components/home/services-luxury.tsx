"use client";

import {useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {motion} from "framer-motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
    {
        n: "01",
        title: "Projektledning",
        body: "Helhetsansvar från idé till nycklar — tydliga beslutsvägar och ekonomisk transparens.",
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    },
    {
        n: "02",
        title: "Produktion",
        body: "Stommar, stomkomplettering och logistik i nordiskt klimat med rigorös kvalitetsplan.",
        image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e66837?q=80&w=1600&auto=format&fit=crop",
    },
    {
        n: "03",
        title: "Partnering",
        body: "Tidiga involveringsmodeller där beställare, arkitekt och entreprenör delar mål och risk.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    },
];

export const ServicesLuxury = () => {
    const section = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from(".svc-card", {
                y: 56,
                opacity: 0,
                rotateX: 6,
                duration: 0.95,
                stagger: 0.18,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section.current,
                    start: "top 72%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: section },
    );

    return (
        <section
            ref={section}
            className="border-y border-stone-200 bg-cream-dark/50 px-5 py-24 md:px-10 md:py-32 lg:px-14"
        >
            <div className="mx-auto max-w-[1800px]">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Kapabiliteter
                        </p>
                        <h2 className="mt-4 font-display text-5xl tracking-[0.06em] text-ink md:text-7xl lg:text-8xl">
                            EXPERTIS
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-stone-warm md:text-right md:text-base">
                        Nordform samordnar tekniska discipliner under en samlad ledning — för
                        att skynda på beslut utan att tumma på säkerhet eller finish.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 perspective-[1200px] lg:mt-24 lg:grid-cols-3 lg:gap-10">
                    {services.map((s) => (
                        <motion.article
                            key={s.n}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                            className="svc-card group relative flex flex-col overflow-hidden border border-stone-200/90 bg-ivory shadow-[0_24px_60px_-28px_rgba(14,14,12,0.18)]"
                        >
                            <div className="relative aspect-[16/11] w-full overflow-hidden">
                                <Image
                                    src={s.image}
                                    alt=""
                                    fill
                                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-80 transition group-hover:opacity-95" />
                                <span className="absolute left-5 top-5 font-display text-5xl text-gold-bright/90 md:text-6xl">
                  {s.n}
                </span>
                            </div>
                            <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                                <h3 className="font-display text-3xl tracking-[0.08em] text-ink md:text-4xl">
                                    {s.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-stone-warm md:text-base">{s.body}</p>
                                <span className="mt-auto inline-flex pt-4 text-[10px] font-bold uppercase tracking-[0.35em] text-gold transition group-hover:text-ink">
                  Utforska →
                </span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
