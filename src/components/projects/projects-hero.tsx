"use client";

import Image from "next/image";
import {motion} from "framer-motion";

export const ProjectsHero = () => {
    return (
        <section className="relative min-h-[72vh] w-full overflow-hidden bg-ink md:min-h-[78vh]">
            <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
                alt=""
                fill
                className="object-cover opacity-45"
                sizes="100vw"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
            <div className="relative mx-auto flex min-h-[72vh] max-w-[1800px] flex-col justify-end px-5 pb-16 pt-32 md:min-h-[78vh] md:px-10 md:pb-24 md:pt-40 lg:px-14">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold"
                >
                    Referenser
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 max-w-5xl font-display text-6xl leading-[0.92] tracking-[0.04em] text-ivory md:text-8xl lg:text-9xl"
                >
                    VERK SOM
                    <br />
                    <span className="text-gold-bright">BÄR STADEN</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ivory/75 md:text-xl"
                >
                    Från stomme till inflyttning — bostäder, kontor, infrastruktur och
                    kulturbyggnader där vi haft totalentreprenad eller partnering.
                </motion.p>
            </div>
        </section>
    );
}
