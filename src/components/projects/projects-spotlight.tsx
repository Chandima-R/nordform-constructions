"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

export const ProjectsSpotlight = () => {
    return (
        <section className="border-y border-stone-200 bg-cream-dark/35 py-20 md:py-28">
            <div className="mx-auto grid max-w-[1800px] gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-14">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="img-premium relative aspect-[16/11] min-h-[280px] overflow-hidden border border-stone-200 shadow-[0_40px_90px_-50px_rgba(14,14,12,0.45)]"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop"
                        alt="Hamnprojekt i skymning"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </motion.div>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                        Case spotlight
                    </p>
                    <h2 className="mt-4 font-display text-5xl tracking-[0.08em] text-ink md:text-6xl">
                        HAMNKVARTERET
                    </h2>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.28em] text-stone-muted">
                        Göteborg · Totalentreprenad · 48 månader
                    </p>
                    <div className="mt-8 space-y-5 text-base leading-relaxed text-stone-warm md:text-lg">
                        <p>
                            Ett sjönära kvarter där bostäder, handel och promenadstråk delar
                            samma strukturella grid. Vi koordinerade 14 underentreprenörer,
                            nattetapper för stommar och en logistiklösning som minimerade
                            störning mot befintlig hamndrift.
                        </p>
                        <p>
                            Resultatet: energiklass A, flexibla bottenplan anpassade för
                            framtida servicefunktioner och en fasadstrategi i trä/tegel som
                            klarade salt och vind utan att tumma på arkitektens proportioner.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-4">
            <span className="border border-stone-200 bg-ivory px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ink">
              142 000 m² BTA
            </span>
                        <span className="border border-stone-200 bg-ivory px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ink">
              Partnering
            </span>
                        <span className="border border-stone-200 bg-ivory px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ink">
              LEED Gold mål
            </span>
                    </div>
                    <Link
                        href="/contact"
                        className="mt-10 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-gold transition hover:text-ink"
                    >
                        <span className="h-px w-12 bg-gold" />
                        Begär case-presentation
                    </Link>
                </div>
            </div>
        </section>
    );
}
