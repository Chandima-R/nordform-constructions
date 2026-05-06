"use client";

import Image from "next/image";
import Link from "next/link";
import {useMemo, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {PROJECTS} from "@/lib/projects-data";

const categories = ["Alla", "Bostäder", "Kommersiellt", "Infrastruktur", "Kultur"] as const;

type Cat = (typeof categories)[number];

function gridClass(size: (typeof PROJECTS)[0]["size"]) {
    if (size === "hero") return "md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-[520px]";
    if (size === "wide") return "md:col-span-2 min-h-[260px]";
    if (size === "tall") return "md:row-span-2 min-h-[300px] md:min-h-[420px]";
    return "min-h-[260px]";
}

export const ProjectsArchive = () => {
    const [filter, setFilter] = useState<Cat>("Alla");

    const filtered = useMemo(() => {
        if (filter === "Alla") return PROJECTS;
        return PROJECTS.filter((p) => p.category === filter);
    }, [filter]);

    return (
        <section className="border-t border-stone-200 bg-ivory pb-24 pt-6 md:pb-32">
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <div className="flex flex-col gap-6 border-b border-stone-200 pb-10 md:flex-row md:items-end md:justify-between">
                    <p className="max-w-xl text-sm leading-relaxed text-stone-warm md:text-base">
                        Filtrera mellan domäner — varje projekt kan öppnas i en dedikerad
                        case-board med bilder, Q&amp;A och relaterade referenser.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setFilter(c)}
                                className={`border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] transition ${
                                    filter === c
                                        ? "border-ember bg-ember-soft text-ink"
                                        : "border-stone-200 text-stone-muted hover:border-ember/40 hover:text-ink"
                                }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p) => (
                            <motion.article
                                layout
                                key={p.slug}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative overflow-hidden border border-stone-200 bg-graphite shadow-[0_28px_70px_-40px_rgba(14,14,14,0.45)] ${gridClass(p.size)}`}
                            >
                                <Link
                                    href={`/projects/${p.slug}`}
                                    className="absolute inset-0 z-10"
                                    aria-label={`Öppna ${p.title}`}
                                    data-cursor-hover
                                />
                                <Image
                                    src={p.coverImage}
                                    alt={p.title}
                                    fill
                                    className="object-cover opacity-85 transition duration-[1.1s] group-hover:scale-[1.06] group-hover:opacity-100"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-graphite/40 to-transparent" />
                                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ember/25 opacity-0 transition group-hover:opacity-100" />
                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-gold">
                                        {p.category} · {p.year}
                                    </p>
                                    <h2 className="mt-2 font-display text-3xl tracking-[0.1em] text-ivory md:text-4xl lg:text-5xl">
                                        {p.title}
                                    </h2>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-ivory/55">
                                        {p.city}
                                    </p>
                                    <p className="mt-4 max-w-prose text-sm leading-relaxed text-ivory/70 opacity-0 transition duration-300 group-hover:opacity-100">
                                        {p.excerpt}{" "}
                                        <span className="font-semibold uppercase tracking-[0.18em] text-ember-bright">
                      Öppna case →
                    </span>
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
