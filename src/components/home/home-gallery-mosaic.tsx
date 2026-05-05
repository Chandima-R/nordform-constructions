"use client";

import Image from "next/image";
import {motion} from "framer-motion";

const tiles = [
    {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
        alt: "Ritning och modell",
        className: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[420px]",
    },
    {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
        alt: "Stålstomme",
        className: "min-h-[220px]",
    },
    {
        src: "https://images.unsplash.com/photo-1487958449943-e242128a9378?q=80&w=1400&auto=format&fit=crop",
        alt: "Kontorsmiljö",
        className: "min-h-[220px]",
    },
    {
        src: "https://images.unsplash.com/photo-1518005020951-ecc495e515d5?q=80&w=1400&auto=format&fit=crop",
        alt: "Fasad i kvällsljus",
        className: "md:col-span-2 min-h-[200px]",
    },
];

export const HomeGalleryMosaic = ()=> {
    return (
        <section className="bg-ink py-24 text-ivory md:py-32 lg:py-40">
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Ateljé & produktion
                        </p>
                        <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl lg:text-7xl">
                            YTOR MED TYNDLIG
                            <br />
                            KARAKTÄR
                        </h2>
                    </div>
                    <p className="max-w-md font-serif text-lg italic leading-relaxed text-ivory/65 md:text-xl">
                        Ett urval av ögonblick från plats — där skala, ljus och material möter
                        hantverkarnas precision.
                    </p>
                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
                    {tiles.map((t, i) => (
                        <motion.div
                            key={t.src}
                            initial={{ opacity: 0, y: 28, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-8%" }}
                            transition={{
                                duration: 0.65,
                                delay: i * 0.06,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`img-premium group relative overflow-hidden border border-white/10 ${t.className}`}
                        >
                            <Image
                                src={t.src}
                                alt={t.alt}
                                fill
                                className="object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.06]"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-ink/25 opacity-60 transition group-hover:opacity-35" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
