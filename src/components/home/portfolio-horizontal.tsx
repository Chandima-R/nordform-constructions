"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

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
];

export const PortfolioHorizontal = ()=> {
    return (
        <section className="bg-ivory pb-24 pt-20 md:pb-32 md:pt-28">
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                    Utvalda verk
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[0.05em] text-ink md:text-7xl lg:text-8xl">
                    PORTFÖLJ I RÖRELSE
                </h2>
                <p className="mt-6 max-w-xl text-sm text-stone-warm md:text-base">
                    Svep horisontellt genom utvalda leveranser — varje yta är resultatet av
                    gemensamma workshops med arkitekt och beställare.
                </p>
            </div>

            <div className="mt-12 md:mt-16">
                <div
                    className="flex gap-5 overflow-x-auto px-5 pb-4 pt-2 [scrollbar-width:none] md:gap-8 md:px-10 lg:px-14 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {slides.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
                            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                            className="min-w-[min(88vw,560px)] shrink-0 snap-center snap-always md:min-w-[min(52vw,640px)] lg:min-w-[min(44vw,720px)]"
                        >
                            <Link
                                href={s.href}
                                className="group relative flex aspect-[16/11] w-full overflow-hidden border border-stone-200 bg-ink shadow-[0_28px_70px_-34px_rgba(14,14,12,0.45)]"
                            >
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover opacity-88 transition duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                                    sizes="(max-width: 768px) 88vw, 52vw"
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
