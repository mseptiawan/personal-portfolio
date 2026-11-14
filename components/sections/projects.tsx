"use client";

import { CalendarDays, Check, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Container from "../layout/container";
import { cn } from "@/lib/utils";

const projectsData = [
  {
    title: "HRIS Zafa Tour",
    date: "Februari 2026 - Juni 2026",
    description:
      "Sistem Informasi Kepegawaian dengan 16 modul untuk mendigitalisasi proses administrasi dan operasional PT Zafa Mulia Mandiri.",
    stack: ["Express.js", "MongoDB", "Redis", "Docker"],
    highlights: [
      "16 modul sistem terintegrasi",
      "RBAC untuk 6 role",
      "Alur persetujuan bertingkat",
      "BRD & SRS sekitar 180 halaman",
    ],
    link: "https://github.com/mseptiawan/website-zafa-tour",
    srsLink: "https://bit.ly/4A3epjj",
    className: "md:col-span-2",
  },
  {
    title: "Sistem Inventaris Toko XYZ",
    date: "Juli 2026 - September 2026",
    description:
      "Sistem inventaris berbasis web untuk manajemen stok, transaksi, dan Point of Sale.",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    highlights: ["RBAC untuk 6 role", "Stok opname otomatis", "Cetak invoice"],
    link: "https://github.com/mseptiawan/inventaris",
    className: "md:col-span-1",
  },
  {
    title: "Sistem Insentif PT Changhong",
    date: "April 2025 - Juni 2025",
    description:
      "Sistem otomatisasi perhitungan insentif promotor sebagai pengganti proses Excel manual.",
    stack: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Upload data massal via Excel",
      "Perhitungan insentif otomatis",
      "Ranking promotor",
    ],
    link: "https://github.com/mseptiawan/insentif-changhong",
    className: "md:col-span-1",
  },
  {
    title: "Website BJB Rental Mobil",
    date: "November 2025",
    description:
      "Website company profile dan katalog kendaraan dengan informasi armada, peta lokasi, dan pemesanan melalui WhatsApp.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Leaflet", "VPS"],
    highlights: [
      "Katalog kendaraan interaktif",
      "Integrasi peta Leaflet",
      "Pemesanan melalui WhatsApp",
      "Deployment dan pengelolaan VPS",
    ],
    link: "https://bjbrentalmobilpalembang.com",
    className: "md:col-span-1",
  },
  {
    title: "Reservasi Meja Kafe",
    date: "Juli 2026",
    description:
      "Sistem reservasi meja kafe berbasis web dengan fitur pengelolaan reservasi dan verifikasi pembayaran.",
    stack: ["Laravel", "PHP", "MySQL", "Docker"],
    highlights: ["Verifikasi pembayaran", "Manajemen meja", "Dashboard admin"],
    link: "https://github.com/mseptiawan/reservasi-meja-kafe",
    className: "md:col-span-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-background">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyek Terpilih
          </h2>

          {/* Deskripsi Mobile (Ringkas) */}
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground block sm:hidden">
            Kumpulan aplikasi web yang saya bangun dengan fokus pada
            penyelesaian masalah nyata.
          </p>

          {/* Deskripsi Desktop (Lengkap) */}
          <p className="mt-4 text-base leading-relaxed text-muted-foreground hidden sm:block">
            Kumpulan aplikasi web yang saya bangun dengan fokus pada
            penyelesaian masalah nyata, efisiensi proses, dan implementasi
            teknis yang andal.
          </p>
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {projectsData.map((project) => (
            <div
              key={project.title}
              role="link"
              tabIndex={0}
              onClick={() =>
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(project.link, "_blank", "noopener,noreferrer");
                }
              }}
              className={cn(
                "group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-accent/40",
                project.className,
              )}
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <CalendarDays className="size-3.5" />
                      {project.date}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  {/* Icon Panah */}
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>

                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check
                          className="size-2.5 text-primary"
                          strokeWidth={3}
                        />
                      </span>

                      {/* Jika highlight mengandung "BRD & SRS", render sebagai link */}
                      {highlight.includes("BRD & SRS") && project.srsLink ? (
                        <span>
                          <a
                            href={project.srsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="underline decoration-primary/50 underline-offset-2 hover:text-primary hover:decoration-primary transition-colors"
                          >
                            BRD & SRS
                          </a>{" "}
                          sekitar 180 halaman
                        </span>
                      ) : (
                        highlight
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30"
                  >
                    {tech}
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
