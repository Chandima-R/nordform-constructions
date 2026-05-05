"use client";

import Link from "next/link";
import {motion} from "framer-motion";

const metrics = [
    { v: "120+", l: "Specialister i produktion" },
    { v: "18", l: "År genomsnittlig kundrelation" },
    { v: "99%", l: "Återkommande ramavtal" },
];

export const AboutExcellence = () => {
    return (
        <section className="bg-gradient-to-b from-cream-dark/40 to-ivory py-24 md:py-32">
            <div className="mx-auto grid max-w-[1800px] gap-14 px-5 md:grid-cols-2 md:items-center md:gap-20 md:px-10 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Excellens i siffror
                    </p>
                    <h2 className="mt-4 font-serif text-4xl italic leading-tight text-ink md:text-5xl">
                        “Vi mäter inte framgång enbart i volym — utan i hur ofta vi förtroendet
                        återvinns.”
                    </h2>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-stone-muted">
                        — Henrik Nord, Koncernchef
                    </p>
                </motion.div>
                <div className="grid gap-6">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={m.l}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="flex items-baseline justify-between border-b border-stone-200 py-5"
                        >
                            <p className="font-display text-5xl text-ink md:text-6xl">{m.v}</p>
                            <p className="max-w-[14rem] text-right text-xs font-bold uppercase leading-relaxed tracking-[0.22em] text-stone-muted">
                                {m.l}
                            </p>
                        </motion.div>
                    ))}
                    <Link
                        href="/contact"
                        className="mt-4 inline-flex w-fit items-center gap-3 border border-ink/15 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.32em] text-ink transition hover:border-gold hover:text-gold"
                    >
                        <span className="h-px w-10 bg-gold" />
                        Boka introduktion
                    </Link>
                </div>
            </div>
        </section>
    );
}
