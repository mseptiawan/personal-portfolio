import { Badge } from "@/components/ui/badge";
import Container from "../layout/container";
import {
  Code2,
  Database,
  Layout,
  Settings,
  Braces,
  Workflow,
  Bot,
} from "lucide-react";
import {
  SiGo,
  SiApachekafka,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiGithubactions,
  SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const skillGroups = [
  {
    title: "Backend",
    icon: <Code2 className="size-5 mb-3 text-primary" />,
    skills: [
      { name: "Golang", icon: <SiGo /> },
      { name: "REST API", icon: <Braces /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Swagger", icon: <Workflow /> },
    ],
  },
  {
    title: "Frontend",
    icon: <Layout className="size-5 mb-3 text-primary" />,
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML/CSS", icon: <SiHtml5 /> },
      { name: "TanStack Query", icon: <Layout /> },
      { name: "Zustand", icon: <Layout /> },
    ],
  },
  {
    title: "Database",
    icon: <Database className="size-5 mb-3 text-primary" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Settings className="size-5 mb-3 text-primary" />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Docker Compose", icon: <SiDocker /> },
      { name: "CI/CD", icon: <SiGithubactions /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Agentic AI", icon: <Bot /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-background py-20 sm:py-24 relative">
      {/* Background Effect Halus */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />

      <Container>
        {/* Section Header */}
        <div className="mb-14 max-w-2xl relative z-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Teknologi yang Saya Gunakan
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground block sm:hidden">
            Teknologi andalan saya untuk membangun aplikasi web end-to-end.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground hidden sm:block">
            Tools dan teknologi yang saya gunakan sehari-hari untuk membangun
            aplikasi end-to-end — dari antarmuka, API, database, hingga
            deployment.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 relative z-10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-accent/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {group.icon}
                <h3 className="mb-6 text-lg font-bold tracking-tight text-foreground">
                  {group.title}
                </h3>
              </div>

              <div className="relative z-10 flex flex-wrap gap-4 items-center">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/icon relative flex items-center justify-center p-3 rounded-xl border border-border bg-muted text-3xl text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:bg-background hover:text-primary"
                  >
                    {skill.icon}

                    {/* Tooltip */}
                    <span className="absolute -top-10 scale-0 opacity-0 transition-all duration-200 group-hover/icon:scale-100 group-hover/icon:opacity-100 rounded-md bg-foreground px-2.5 py-1 text-xs font-semibold text-background whitespace-nowrap z-50 pointer-events-none">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
