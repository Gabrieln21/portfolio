"use client";

import { ArrowUpRight, CheckCircle2, AlertTriangle, Hourglass } from "lucide-react";

type Props = {
  name: string;
  summary: string;
  href: string;
  tech: string[];
  status?: "live" | "degraded" | "down";
  latencyMs?: number;
};

export default function ProjectCard({ name, summary, href, tech, status, latencyMs }: Props) {
  const chip =
    status === "live" ? (
      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
        <CheckCircle2 className="w-3 h-3" /> live
      </span>
    ) : status === "down" ? (
      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-rose-500/20 text-rose-300">
        <AlertTriangle className="w-3 h-3" /> down
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-zinc-500/20 text-zinc-300">
        <Hourglass className="w-3 h-3" /> checking
      </span>
    );

  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">{name}</h3>
        {chip}
      </div>

      <p className="mt-2 text-sm text-zinc-300">{summary}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-zinc-200 border border-white/10">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a href={href} target="_blank" className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200">
          Live <ArrowUpRight className="w-4 h-4" />
        </a>
        {typeof latencyMs === "number" && (
          <span className="text-xs text-zinc-400">{latencyMs}ms</span>
        )}
      </div>
    </div>
  );
}
