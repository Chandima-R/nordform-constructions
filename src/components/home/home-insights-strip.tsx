"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {InfiniteMarquee} from "@/components/motion/infinite-marquee";

const insights = [
    {
        title: "Partnering i stor skala",
        meta: "Whitepaper · 12 sidor",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Klimatdeklarationer 2026",
        meta: "Juridik & praktik",
        image:
            "https://images.unsplash.com/photo-1457433575995-8407028a9970?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Ljusdesign som varumärke",
        meta: "Insikt · Arkitektur",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    },
];

export const HomeInsightStrip = ()=> {
    return (
        <section className="bg-cream-dark/40 py-20 md:py-28">
            <InfiniteMarquee
                items={[
                    "INSIKTER",
                    "NORDFORM LAB",
                    "KUNSKAP",
                    "FORUM",
                    "RESEARCH",
                    "KVALITET",
                ]}
                className="mb-12 border-y border-stone-200 bg-ivory"
                textClassName="text-ink/40"
            />

            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Kunskapsbibliotek
                        </p>
                        <h2 className="mt-3 font-display text-4xl tracking-[0.08em] text-ink md:text-5xl lg:text-6xl">
                            DJUPDYKNINGAR
                        </h2>
                    </div>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-ink transition hover:text-gold"
                    >
                        <span className="h-px w-12 bg-gold transition-all group-hover:w-16" />
                        Beställ rådgivningsmaterial
                    </Link>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {insights.map((item, i) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col border border-stone-200 bg-ivory shadow-[0_24px_60px_-40px_rgba(14,14,12,0.28)]"
                        >
                            <Link href="/contact" className="relative aspect-[16/11] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt=""
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-ink/20 opacity-0 transition group-hover:opacity-100" />
                            </Link>
                            <div className="flex flex-1 flex-col gap-2 p-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                                    {item.meta}
                                </p>
                                <h3 className="font-display text-2xl tracking-[0.1em] text-ink md:text-3xl">
                                    {item.title}
                                </h3>
                                <p className="mt-auto pt-4 text-xs text-stone-muted">
                                    Begär utkast eller presentation för er styrelse.
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
