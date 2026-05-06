"use client";

import Image from "next/image";
import {motion} from "framer-motion";

const offices = [
    {
        city: "Stockholm",
        lines: ["Birger Jarlsgatan 22", "114 34 Stockholm", "HQ & styrelse"],
        image:
            "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1400&auto=format&fit=crop",
    },
    {
        city: "Göteborg",
        lines: ["Södra Hamngatan 59", "411 14 Göteborg", "Väst & infrastruktur"],
        image:
            "https://images.unsplash.com/photo-1565514020179-026f341d8f0c?q=80&w=1400&auto=format&fit=crop",
    },
];

export const ContactLocations = () => {
    return (
        <section className="border-y border-stone-200 bg-ivory py-20 md:py-28">
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                    Kontor
                </p>
                <h2 className="mt-4 font-display text-5xl tracking-[0.08em] text-ink md:text-6xl">
                    NÄRVARO I
                    <br />
                    TVÅ STÄDER
                </h2>
                <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {offices.map((o, i) => (
                        <motion.article
                            key={o.city}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            className="group grid gap-6 border border-stone-200 bg-cream-dark/25 md:grid-cols-[1.1fr_0.9fr]"
                        >
                            <div className="img-premium relative aspect-[16/11] min-h-[220px] overflow-hidden">
                                <Image
                                    src={o.image}
                                    alt={o.city}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-8 md:p-10">
                                <p className="font-display text-4xl tracking-[0.12em] text-ink">{o.city}</p>
                                {o.lines.map((line) => (
                                    <p
                                        key={line}
                                        className={`mt-3 text-sm text-stone-warm ${
                                            line === o.lines[2] ? "text-[10px] font-bold uppercase tracking-[0.28em] text-gold" : ""
                                        }`}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
