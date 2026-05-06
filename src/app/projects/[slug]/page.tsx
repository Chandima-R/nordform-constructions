import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {getProjectBySlug, getProjectSlugs} from "@/lib/projects-data";
import {ProjectPageClient} from "@/components/project-details/project-page-client";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const p = getProjectBySlug(slug);
    if (!p) return { title: "Projekt" };
    return {
        title: p.title,
        description: `${p.excerpt} ${p.city} · ${p.year} · Nordform.`,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    return (
        <main className="flex-1">
            <div className="border-b border-stone-200 bg-ivory py-5">
                <div className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-4 px-5 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-muted md:px-10 lg:px-14">
                    <Link href="/projects" className="text-ember transition hover:text-ink">
                        ← Projekt
                    </Link>
                    <span className="text-ink">{project.title}</span>
                    <Link href="/contact" className="text-gold transition hover:text-ember">
                        Boka genomgång →
                    </Link>
                </div>
            </div>
            <ProjectPageClient project={project} />
        </main>
    );
}
