"use client";

import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {ScrollLinesReveal} from "@/components/motion/scroll-lines-reveal";

export const AboutHero = () => {
    const wrap = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: wrap,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

    return (
        <section ref={wrap} className="relative min-h-[88vh] w-full overflow-hidden bg-ink">
            <motion.div style={{ y, scale }} className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop"
                    alt=""
                    fill
                    className="object-cover opacity-55"
                    sizes="100vw"
                    priority
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
            <div className="relative mx-auto flex min-h-[88vh] max-w-[1800px] flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40 lg:px-14">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold"
                >
                    Om Nordform
                </motion.p>
                <div className="mt-6 max-w-5xl text-ivory">
                    <ScrollLinesReveal
                        lines={["ARKITEKTUR", "MED ANSVAR"]}
                        className="font-display text-6xl leading-[0.92] tracking-[0.04em] md:text-8xl lg:text-9xl"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 max-w-2xl font-serif text-lg italic leading-relaxed text-ivory/75 md:text-xl"
                >
                    Familjeägt byggföretag med nordisk enkelhet, teknisk spets och en
                    kultur där varje medarbetare bär kvalitetskedjan — från förstudie till
                    inflyttning.
                </motion.p>
            </div>
        </section>
    );
}
