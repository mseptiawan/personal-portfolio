import { CalendarDays, Check, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "../layout/container";

const projectsData = [
  {
    title: "Sistem Inventaris Toko XYZ",
    date: "Jul 2026 - Sep 2026",
    description:
      "Sistem inventaris berbasis web untuk manajemen stok, transaksi, dan POS.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Alpine.js"],
    highlights: [
      "RBAC untuk 6 role",
      "Stok opname otomatis",
      "Cetak invoice",
    ],
    link: "https://github.com/mseptiawan/inventaris",
  },
  {
    title: "HRIS Zafa Tour",
    date: "Feb 2026 - Jun 2026",
    description:
      "Sistem Informasi Kepegawaian dengan 16 modul untuk PT Zafa Mulia Mandiri.",
    stack: ["Node.js", "Express.js", "MongoDB", "Redis", "EJS", "Tailwind CSS"],
    highlights: [
      "Alur persetujuan bertingkat",
      "RBAC untuk 6 role",
      "Redis session dan deployment Docker",
    ],
    link: "https://github.com/mseptiawan/website-zafa-tour",
  },
  {
    title: "Sistem Insentif PT Changhong",
    date: "Jan 2025 - Feb 2025",
    description:
      "Sistem otomatisasi perhitungan insentif promotor sebagai pengganti proses Excel.",
    stack: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Upload data massal via Excel",
      "Perhitungan insentif otomatis",
      "Ranking promotor",
    ],
    link: "https://github.com/mseptiawan/insentif-changhong",
  },
  {
    title: "Reservasi Meja Kafe",
    date: "Jul 2026",
    description: "Sistem reservasi meja kafe berbasis web.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Docker"],
    highlights: [
      "Verifikasi pembayaran",
      "Manajemen meja",
      "Dashboard admin",
    ],
    link: "https://github.com/mseptiawan/reservasi-meja-kafe",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-muted/30 py-20 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <Badge variant="secondary" className="mb-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Portofolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyek Terpilih
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Kumpulan aplikasi web yang saya bangun dengan fokus pada penyelesaian masalah nyata, efisiensi proses, dan implementasi teknis yang andal.
          </p>
        </div>

        {/* Grid Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/40 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md"
            >
              <CardHeader className="p-6 pb-4">
                <div className="mb-3 flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 rounded-full border-none bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {project.date}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground/80">
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col p-6 pt-0">
                {/* Tech Stack */}
                <div className="mt-2">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <Badge
                        key={technology}
                        variant="secondary"
                        className="rounded-md border-none bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6 border-t border-border/40 pt-5 flex-1">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                    Sorotan Fitur
                  </h4>
                  <ul className="space-y-2.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-foreground/10">
                          <Check
                            className="size-3 text-foreground"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tombol Link GitHub */}
                <div className="mt-6 pt-4 border-t border-border/40">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-foreground/70 transition-colors"
                  >
                    Lihat Repositori
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}