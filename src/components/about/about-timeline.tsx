"use client";

import {motion} from "framer-motion";

const milestones = [
    { year: "1987", title: "Grunden", body: "Verksamheten startar som stomentreprenör i Mälardalen." },
    { year: "2001", title: "Expansion", body: "Totalentreprenader inom bostäder och kommersiellt — första partneringprojekt." },
    { year: "2014", title: "Nordisk plattform", body: "Etablering i Göteborg och Malmö med gemensamma kvalitetssystem." },
    { year: "2022", title: "Institutionellt", body: "Ramavtal med offentliga beställare och ökad infrastrukturportfölj." },
    { year: "2026", title: "Framtiden", body: "Klimatdeklarationer, modulära stommar och AI-stödd produktionsplanering." },
];

export const AboutTimeline = () => {
    return (
        <section className="bg-ink py-24 text-ivory md:py-32">
            <div className="mx-auto max-w-[1800px] px-5 md:px-10 lg:px-14">
                <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                    Historik
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-5xl tracking-[0.08em] md:text-6xl lg:text-7xl">
                    TRETTIO ÅR AV
                    <br />
                    <span className="text-gold-bright">KONTINUITET</span>
                </h2>
                <div className="mt-16 space-y-10 border-l border-gold/30 pl-8 md:mt-20 md:pl-12">
                    {milestones.map((m, i) => (
                        <motion.div
                            key={m.year}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-8%" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="relative"
                        >
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold bg-ink md:-left-[57px] md:h-6 md:w-6">
                <span className="h-2 w-2 rounded-full bg-gold" />
              </span>
                            <p className="font-display text-3xl text-gold-bright md:text-4xl">{m.year}</p>
                            <p className="mt-2 font-display text-2xl tracking-[0.1em] text-ivory md:text-3xl">
                                {m.title}
                            </p>
                            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory/65 md:text-base">
                                {m.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
