import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const u = req.nextUrl.searchParams.get("u");
  if (!u) return NextResponse.json({ ok: false, reason: "missing url" }, { status: 400 });

  try {
    // HEAD to the root of the target. Consider 2xx-3xx as "up".
    const res = await fetch(u, { method: "HEAD", redirect: "follow", cache: "no-store" });
    const ok = res.ok || (res.status >= 200 && res.status < 400);
    return NextResponse.json({ ok, status: res.status });
  } catch (e: any) {
    return NextResponse.json({ ok: false, reason: e?.message ?? "error" });
  }
}
