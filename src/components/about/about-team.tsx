"use client";

import Image from "next/image";
import {motion} from "framer-motion";

const people = [
    {
        name: "Henrik Nord",
        role: "Koncernchef",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Sara Viklund",
        role: "Operativ direktör",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Oskar Berg",
        role: "Affärsutveckling",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Maja Lindström",
        role: "Hållbarhet & kvalitet",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
];

export const AboutTeam = () => {
    return (
        <section className="border-y border-stone-200 bg-ivory py-24 md:py-32">
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Ledning & styrelse
                        </p>
                        <h2 className="mt-3 font-display text-5xl tracking-[0.08em] text-ink md:text-6xl">
                            MÄNNISKORNA
                            <br />
                            BAKOM VERKEN
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-stone-warm md:text-base">
                        Ett tvärfunktionellt ledarskap där ekonomi, juridik, produktion och
                        hållbarhet möts i samma rum — varje vecka, i varje projekt.
                    </p>
                </div>
                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-10">
                    {people.map((p, i) => (
                        <motion.article
                            key={p.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.55, delay: i * 0.06 }}
                            className="group text-center"
                        >
                            <div className="img-premium relative mx-auto aspect-[3/4] max-w-[280px] overflow-hidden border border-stone-200">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                    sizes="(max-width: 640px) 100vw, 25vw"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-ink/25 opacity-0 transition group-hover:opacity-100" />
                            </div>
                            <p className="mt-6 font-display text-2xl tracking-[0.12em] text-ink">{p.name}</p>
                            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                                {p.role}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
