import { Badge } from "@/components/ui/badge";
import Container from "../layout/container";

const skillGroups = [
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "Express.js", "REST API"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Laravel Sail"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-background py-20 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:text-left">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Teknologi yang Saya Gunakan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-2xl">
            Tools dan teknologi yang saya gunakan sehari-hari untuk membangun aplikasi web end-to-end, dari antarmuka hingga API dan database.
          </p>
        </div>

        {/* Grid Groups */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-sm"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="h-auto rounded-md border-none bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}