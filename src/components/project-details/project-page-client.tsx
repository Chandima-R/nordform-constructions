"use client";

import Image from "next/image";
import Link from "next/link";
import {useRef, useState} from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import type {ProjectDetail} from "@/lib/projects-data";
import {getRelatedProjects} from "@/lib/projects-data";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {InfiniteMarquee} from "@/components/motion/infinite-marquee";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const nav = [
    { id: "overview", label: "Översikt" },
    { id: "gallery", label: "Galleri" },
    { id: "specs", label: "Nyckeltal" },
    { id: "story", label: "Berättelse" },
    { id: "timeline", label: "Resa" },
    { id: "qa", label: "Q&A" },
];

export const ProjectPageClient = ({ project }: { project: ProjectDetail })=> {
    const related = getRelatedProjects(project.relatedSlugs);
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

    const galleryRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const tiles = galleryRef.current?.querySelectorAll(".gal-tile");
            if (!tiles?.length) return;
            gsap.from(tiles, {
                y: 80,
                opacity: 0,
                rotateX: 6,
                duration: 0.95,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: "top 78%",
                    toggleActions: "play none none reverse",
                },
            });
        },
        { scope: galleryRef, dependencies: [project.slug] },
    );

    return (
        <div className="bg-ivory text-ink">
            <section
                ref={heroRef}
                className="relative flex min-h-[110vh] items-end overflow-hidden bg-void"
            >
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover opacity-45"
                        sizes="100vw"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-void via-graphite/90 to-void/40" />
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(206,79,54,0.22),transparent_55%)]"
                />
                <div className="relative z-10 mx-auto w-full max-w-[1800px] px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-14">
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        {project.category} · {project.year} · {project.city}
                    </p>
                    <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.9] tracking-[0.04em] text-ivory md:text-8xl lg:text-[7.5rem]">
                        {project.headline}
                    </h1>
                    <p className="mt-8 max-w-3xl font-serif text-xl italic leading-relaxed text-ivory/75 md:text-2xl">
                        {project.subhead}
                    </p>
                    <div className="mt-12 flex flex-wrap gap-4">
            <span className="border border-ember/40 bg-ember-soft px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-ember-bright">
              {project.client}
            </span>
                        <span className="border border-gold/35 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-gold-bright">
              {project.architect}
            </span>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-ivory/45"
                >
                    <span>Scroll</span>
                    <span className="h-10 w-px bg-gradient-to-b from-ember-bright/80 to-transparent" />
                </motion.div>
            </section>

            <div className="sticky top-[72px] z-40 hidden border-b border-stone-200/80 bg-ivory/90 backdrop-blur-xl md:block md:top-[88px]">
                <div className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-center gap-6 px-5 py-3 md:px-10 lg:px-14">
                    {nav.map((n) => (
                        <a
                            key={n.id}
                            href={`#${n.id}`}
                            data-cursor-hover
                            className="text-[10px] font-bold uppercase tracking-[0.32em] text-stone-muted transition hover:text-ember"
                        >
                            {n.label}
                        </a>
                    ))}
                </div>
            </div>

            <InfiniteMarquee
                items={[
                    project.title.toUpperCase(),
                    project.city.toUpperCase(),
                    project.year,
                    project.category.toUpperCase(),
                    "NORDFORM",
                ]}
                className="!border-stone-600/50 !bg-graphite !text-ivory"
                trackClassName="animate-marquee-slow"
                textClassName="!text-ivory/80 md:!text-5xl tracking-[0.32em]"
            />

            <section id="overview" className="mx-auto max-w-[1800px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
                <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-ember">
                            Översikt
                        </p>
                        <h2 className="mt-4 font-display text-5xl tracking-[0.08em] md:text-6xl">
                            PROGRAM & ROLL
                        </h2>
                        <div className="mt-8 space-y-6 text-base leading-relaxed text-stone-warm md:text-lg">
                            {project.intros.map((p) => (
                                <p key={p.slice(0, 24)}>{p}</p>
                            ))}
                        </div>
                        <ul className="mt-10 space-y-3 border-t border-stone-200 pt-8">
                            {project.services.map((s) => (
                                <li
                                    key={s}
                                    className="flex items-start gap-3 text-sm text-stone-warm md:text-base"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="img-premium relative aspect-[4/5] overflow-hidden border border-stone-200 shadow-[0_40px_90px_-50px_rgba(20,21,26,0.55)]"
                    >
                        <Image
                            src={project.gallery[0]?.src ?? project.coverImage}
                            alt={project.gallery[0]?.alt ?? project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                        />
                    </motion.div>
                </div>
            </section>

            <section
                id="gallery"
                ref={galleryRef}
                className="border-y border-stone-200 bg-cream-dark/25 py-24 md:py-32"
            >
                <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                                Galleri
                            </p>
                            <h2 className="mt-3 font-display text-5xl tracking-[0.08em] md:text-6xl">
                                RUM & DETALJ
                            </h2>
                        </div>
                        <p className="max-w-md text-sm text-stone-warm md:text-base">
                            Klicka och scrolla — varje panel är en del av samma kvalitetslogg som
                            följer projektet genom inflytt och garantiperiod.
                        </p>
                    </div>
                    <div className="mt-14 grid gap-5 md:grid-cols-12">
                        {project.gallery.map((g, i) => (
                            <div
                                key={g.src + i}
                                className={`gal-tile img-premium group relative overflow-hidden border border-stone-200 bg-void perspective-[1200px] ${
                                    i === 0 ? "md:col-span-7 min-h-[320px] md:min-h-[420px]" : ""
                                } ${i === 1 ? "md:col-span-5 min-h-[280px] md:min-h-[420px]" : ""} ${
                                    i > 1 ? "md:col-span-6 min-h-[260px]" : ""
                                }`}
                            >
                                <Image
                                    src={g.src}
                                    alt={g.alt}
                                    fill
                                    className="object-cover transition duration-[1.1s] group-hover:scale-[1.05]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {g.caption ? (
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/90 to-transparent p-5 text-xs text-ivory/80 opacity-0 transition group-hover:opacity-100">
                                        {g.caption}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="specs" className="mx-auto max-w-[1800px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-ember">
                    Nyckeltal
                </p>
                <h2 className="mt-3 font-display text-5xl tracking-[0.08em] md:text-6xl">
                    MÄTBARA MÅL
                </h2>
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {project.metrics.map((m) => (
                        <motion.div
                            key={m.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                            className="border border-stone-200 bg-ivory p-6 shadow-[0_20px_60px_-45px_rgba(20,21,26,0.35)]"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-stone-muted">
                                {m.label}
                            </p>
                            <p className="mt-3 font-display text-4xl text-gradient-award md:text-5xl">
                                {m.value}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="story" className="bg-void py-24 text-ivory md:py-32">
                <div className="mx-auto grid max-w-[1800px] gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10 lg:px-14">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-l border-ember/50 pl-8"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Utmaning
                        </p>
                        <h3 className="mt-4 font-display text-4xl tracking-[0.1em] md:text-5xl">
                            {project.challengeTitle}
                        </h3>
                        <p className="mt-6 text-sm leading-relaxed text-ivory/70 md:text-base">
                            {project.challengeBody}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="border-l border-gold/40 pl-8"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-ember-bright">
                            Lösning
                        </p>
                        <h3 className="mt-4 font-display text-4xl tracking-[0.1em] md:text-5xl">
                            {project.solutionTitle}
                        </h3>
                        <p className="mt-6 text-sm leading-relaxed text-ivory/70 md:text-base">
                            {project.solutionBody}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section id="timeline" className="mx-auto max-w-[1800px] px-5 py-24 md:px-10 md:py-32 lg:px-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                    Leveransresa
                </p>
                <h2 className="mt-3 font-display text-5xl tracking-[0.08em] md:text-6xl">
                    FASER
                </h2>
                <div className="mt-12 space-y-8">
                    {project.timeline.map((t, i) => (
                        <motion.div
                            key={t.phase + i}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="grid gap-4 border-b border-stone-200 pb-8 md:grid-cols-[220px_1fr]"
                        >
                            <p className="font-display text-2xl tracking-[0.14em] text-ember md:text-3xl">
                                {t.phase}
                            </p>
                            <p className="text-sm leading-relaxed text-stone-warm md:text-base">
                                {t.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="qa" className="border-t border-stone-200 bg-cream-dark/30 py-24 md:py-32">
                <div className="mx-auto max-w-[900px] px-5 md:px-10">
                    <p className="text-center text-[10px] font-bold uppercase tracking-[0.45em] text-ember">
                        Frågor om projektet
                    </p>
                    <h2 className="mt-4 text-center font-display text-4xl tracking-[0.08em] md:text-5xl">
                        Q&A
                    </h2>
                    <div className="mt-12 space-y-3">
                        {project.faqs.map((f) => (
                            <Disclosure key={f.q} title={f.q} body={f.a} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-graphite py-24 text-ivory md:py-32">
                <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                                Relaterade verk
                            </p>
                            <h2 className="mt-3 font-display text-4xl tracking-[0.08em] md:text-5xl">
                                FORTSÄTT UTFORSKA
                            </h2>
                        </div>
                        <Link
                            href="/projects"
                            className="text-[10px] font-bold uppercase tracking-[0.35em] text-ember-bright transition hover:text-ivory"
                        >
                            ← Till alla projekt
                        </Link>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/projects/${r.slug}`}
                                className="group img-premium relative flex min-h-[280px] flex-col justify-end overflow-hidden border border-white/10 p-8"
                            >
                                <Image
                                    src={r.coverImage}
                                    alt={r.title}
                                    fill
                                    className="object-cover opacity-60 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-80"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                                <p className="relative text-[10px] font-bold uppercase tracking-[0.32em] text-gold">
                                    {r.category} · {r.year}
                                </p>
                                <p className="relative mt-2 font-display text-3xl tracking-[0.1em]">
                                    {r.title}
                                </p>
                                <p className="relative mt-1 text-xs uppercase tracking-[0.22em] text-ivory/55">
                                    {r.city}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function Disclosure({ title, body }: { title: string; body: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-stone-200 bg-ivory">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
            >
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ink md:text-base">
          {title}
        </span>
                <span className="font-display text-2xl text-ember">{open ? "−" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
                {open ? (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden border-t border-stone-200/80"
                    >
                        <p className="px-5 py-5 text-sm leading-relaxed text-stone-warm md:px-6 md:text-base">
                            {body}
                        </p>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}
