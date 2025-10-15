"use client";

import { useEffect, useState } from "react";
import { projects as base } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { Sparkles, Globe, Activity } from "lucide-react";
import Link from "next/link";

type Status = { key: string; status: "live"|"degraded"|"down"; latencyMs: number|null; code: number };

export default function Home() {
  const [status, setStatus] = useState<Record<string, Status>>({});

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch("/api/status", { cache: "no-store" });
        const json = await r.json();
        const map: Record<string, Status> = {};
        for (const s of json.services || []) map[s.key] = s;
        if (mounted) setStatus(map);
      } catch {}
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(99,102,241,.35),transparent_40%),radial-gradient(circle_at_80%_0,rgba(236,72,153,.25),transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-center gap-2 text-sm text-zinc-300 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Crafting useful apps with <span className="text-indigo-400">taste</span> and{" "}
            <span className="text-pink-400">speed</span>.
          </h1>
          <p className="mt-6 text-zinc-300 max-w-2xl">
            A small suite of productionized projects tied together with clean architecture and sharp UX.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15 transition">
              <Activity className="w-4 h-4" /> View Projects
            </Link>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 hover:bg-indigo-600 transition">
              <Globe className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {base.map(p => (
            <ProjectCard
              key={p.slug}
              name={p.name}
              summary={p.summary}
              href={p.liveUrl}
              tech={p.tech}
              status={status[p.slug]?.status}
              latencyMs={status[p.slug]?.latencyMs ?? undefined}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
