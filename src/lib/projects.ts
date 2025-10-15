export type Project = {
  slug: string;
  name: string;
  summary: string;
  liveUrl: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "memes",
    name: "Memes",
    summary: "Playful app with Postgres sessions and a clean Node backend.",
    liveUrl: "https://memes.3.143.5.23.nip.io",
    tech: ["Node", "Postgres", "Docker", "Caddy"],
  },
  {
    slug: "cleanup",
    name: "Cleanup Connect",
    summary: "Map-based cleanups with a smooth SPA and uploads.",
    liveUrl: "https://cleanup.3.143.5.23.nip.io",
    tech: ["Vite", "Leaflet", "Express", "Docker"],
  },
  {
    slug: "predictor",
    name: "CS Predictor",
    summary: "CS match predictions powered by Prisma/MySQL.",
    liveUrl: "https://predictor.3.143.5.23.nip.io",
    tech: ["Prisma", "MySQL", "Node", "Docker"],
  },
  {
    slug: "ai-art",
    name: "AI Art",
    summary: "Generative AI artwork with a custom gallery.",
    liveUrl: "https://ai.carvajal-art.com",
    tech: ["Next.js", "Image CDN", "Tailwind"],
  },
];
