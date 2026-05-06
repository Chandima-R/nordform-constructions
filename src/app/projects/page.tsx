import type {Metadata} from "next";
import {ProjectsHero} from "@/components/projects/projects-hero";
import {ProjectsIntro} from "@/components/projects/projects-intro";
import {ProjectsSpotlight} from "@/components/projects/projects-spotlight";
import {ProjectsArchive} from "@/components/projects/projects-archive";
import {ProjectsClosing} from "@/components/projects/projects-closing";


export const metadata: Metadata = {
    title: "Projekt",
    description:
        "Utvalda byggnationer, renoveringar och infrastruktur — Nordform referenser inom bostäder, kommersiellt, infrastruktur och kultur.",
};

export default function ProjectsPage() {
    return (
        <main className="flex-1">
            <ProjectsHero />
            <ProjectsIntro />
            <ProjectsSpotlight />
            <ProjectsArchive />
            <ProjectsClosing />
        </main>
    );
}
