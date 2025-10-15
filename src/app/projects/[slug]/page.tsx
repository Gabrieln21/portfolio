import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find(x => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold">{p.name}</h1>
        <p className="mt-3 text-zinc-300">{p.summary}</p>
        <div className="mt-8">
          <ProjectCard name={p.name} summary={p.summary} href={p.liveUrl} tech={p.tech} />
        </div>
      </div>
    </div>
  );
}
