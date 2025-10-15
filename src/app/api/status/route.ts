import { NextResponse } from "next/server";

type Target = { key: string; url: string; method?: string };
const targets: Target[] = [
  { key: "memes",            url: "https://memes.3.143.5.23.nip.io/",           method: "HEAD" },
  { key: "cleanup-connect",  url: "https://cleanup.3.143.5.23.nip.io/api/health" },
  { key: "predictor",        url: "https://predictor.3.143.5.23.nip.io/" },
  // ai-art: fill in later when live
];

export const dynamic = "force-dynamic";

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  const results = await Promise.all(targets.map(async t => {
    const start = Date.now();
    try {
      const resp = await fetch(t.url, {
        method: t.method || "GET",
        cache: "no-store",
        signal: controller.signal,
      });
      const latency = Date.now() - start;
      const ok = resp.status >= 200 && resp.status < 400;
      return { key: t.key, status: ok ? "live" : "degraded", latencyMs: latency, code: resp.status };
    } catch {
      return { key: t.key, status: "down" as const, latencyMs: null, code: 0 };
    }
  }));

  clearTimeout(timeout);
  return NextResponse.json({ services: results });
}
