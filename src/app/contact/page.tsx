import { Phone, Mail, Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Contact – Gabriel Fernandez" };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="mt-3 text-zinc-300">
          Reach me anytime through any of the channels below.
        </p>

        <div className="mt-8 space-y-3">
          <a href="tel:+16504250600" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>(650) 425-0600</span>
          </a>

          <a href="mailto:fernandezgabriel0@gmail.com" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
            <Mail className="w-4 h-4 text-indigo-300" />
            <span>fernandezgabriel0@gmail.com</span>
          </a>

          <a target="_blank" rel="noreferrer" href="https://github.com/Gabrieln21" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
            <Github className="w-4 h-4 text-zinc-300" />
            <span>github.com/Gabrieln21</span>
          </a>

          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-fernandez-54962020b/" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
            <Linkedin className="w-4 h-4 text-sky-300" />
            <span>linkedin.com/in/gabriel-fernandez-54962020b/</span>
          </a>
        </div>

        <div className="mt-10">
          <a href="/Gabriel-Fernandez-Resume.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/15 transition">
            <Download className="w-4 h-4" /> Download Résumé
          </a>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
