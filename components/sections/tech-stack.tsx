import { Badge } from "@/components/ui/badge";
import Container from "../layout/container";
import { Code2, Database, Layout, Settings } from "lucide-react";

const skillGroups = [
  {
    title: "Backend",
    icon: <Code2 className="size-5 mb-3 text-zinc-400" />,
    skills: ["Laravel", "Node.js", "Express.js", "REST API"],
  },
  {
    title: "Frontend",
    icon: <Layout className="size-5 mb-3 text-zinc-400" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Database",
    icon: <Database className="size-5 mb-3 text-zinc-400" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & DevOps",
    icon: <Settings className="size-5 mb-3 text-zinc-400" />,
    skills: ["Git", "GitHub", "Docker", "Postman", "Laravel Sail"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-black py-20 sm:py-24 relative">
      {/* Background Effect Halus */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />

      <Container>
        {/* Section Header */}
        <div className="mb-14 max-w-2xl relative z-10">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 border-zinc-800 bg-zinc-900/50">
            Tech Stack
          </Badge>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Teknologi yang Saya Gunakan
          </h2>

          {/* Deskripsi Mobile (Ringkas) */}
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 block sm:hidden">
            Teknologi andalan saya untuk membangun aplikasi web end-to-end.
          </p>

          {/* Deskripsi Desktop (Lengkap) */}
          <p className="mt-4 text-base leading-relaxed text-zinc-400 hidden sm:block">
            Tools dan teknologi yang saya gunakan sehari-hari untuk membangun aplikasi web end-to-end, dari antarmuka hingga API dan database.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 relative z-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              {/* Hover Glow Effect (Sangat Halus) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {group.icon}
                <h3 className="mb-6 text-lg font-bold tracking-tight text-zinc-100">
                  {group.title}
                </h3>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-700 group-hover:bg-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}