import type {Metadata} from "next";
import {AboutHero} from "@/components/about/about-hero";
import {AboutPrinciples} from "@/components/about/about-principles";
import {AboutNarrative} from "@/components/about/about-narrative";
import {AboutTimeline} from "@/components/about/about-timeline";
import {AboutFaqCorporate} from "@/components/about/about-faq-corporate";
import {AboutTeam} from "@/components/about/about-team";
import {AboutExcellence} from "@/components/about/about-excellence";


export const metadata: Metadata = {
    title: "Om oss",
    description:
        "Nordform — familjeägt byggföretag med rötter i svensk trä- och betongtradition, ISO-certifierade processer och långsiktiga partnerskap.",
};

export default function AboutPage() {
    return (
        <main className="flex-1">
            <AboutHero />
            <AboutPrinciples />
            <AboutNarrative />
            <AboutTimeline />
            <AboutFaqCorporate />
            <AboutTeam />
            <AboutExcellence />
        </main>
    );
}
