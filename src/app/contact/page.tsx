import type {Metadata} from "next";
import {ContactHero} from "@/components/contact/contact-hero";
import {ContactLocations} from "@/components/contact/contact-locations";
import {ContactForm} from "@/components/contact/contact-form";
import {ContactWorkflow} from "@/components/contact/contact-workflow";
import {ContactFaq} from "@/components/contact/contact-faq";

export const metadata: Metadata = {
    title: "Kontakt",
    description:
        "Kontakta Nordform — Stockholm och Göteborg. Boka möte, begär underlag eller diskutera ert nästa byggprogram.",
};

export default function ContactPage() {
    return (
        <main className="flex-1">
            <ContactHero />
            <ContactLocations />
            <section className="mx-auto max-w-[1800px] px-5 py-16 md:px-10 md:py-24 lg:px-14">
                <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-gold">
                            Direktlinjer
                        </p>
                        <h2 className="mt-4 font-display text-4xl tracking-[0.08em] text-ink md:text-5xl">
                            SNABB KONTAKT
                        </h2>
                        <div className="mt-10 space-y-8 border-t border-stone-200 pt-10">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-muted">
                                    Affär & nya uppdrag
                                </p>
                                <p className="mt-2 font-serif text-2xl italic text-ink">affar@nordform.se</p>
                                <p className="mt-1 text-sm text-stone-warm">Svar inom 48 timmar vardagar.</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-muted">
                                    Pågående produktion
                                </p>
                                <p className="mt-2 font-serif text-2xl italic text-ink">produktion@nordform.se</p>
                                <p className="mt-1 text-sm text-stone-warm">
                                    Ange projektnummer — jour vid akuta arbetsmiljöfrågor.
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-muted">
                                    Press & media
                                </p>
                                <p className="mt-2 font-serif text-2xl italic text-ink">press@nordform.se</p>
                            </div>
                        </div>
                        <p className="mt-12 max-w-md text-sm leading-relaxed text-stone-warm">
                            För inbjudan till anbudsprövning eller kvalificering som ramavtalsleverantör —
                            bifoga er upphandlingsprofil så återkommer vår CFO med rätt kontaktväg.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>
            <ContactWorkflow />
            <ContactFaq />
        </main>
    );
}
