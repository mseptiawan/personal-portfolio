import { CalendarDays, Check, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Container from "../layout/container";
import { cn } from "@/lib/utils";

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
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "HRIS Zafa Tour",
    date: "Feb 2026 - Jun 2026",
    description:
      "Sistem Informasi Kepegawaian dengan 16 modul untuk PT Zafa Mulia Mandiri.",
    stack: ["Node.js", "Express.js", "MongoDB", "Redis", "EJS"],
    highlights: [
      "Alur persetujuan bertingkat",
      "RBAC untuk 6 role",
      "Redis session & Docker",
    ],
    link: "https://github.com/mseptiawan/website-zafa-tour",
    className: "md:col-span-1 lg:col-span-1",
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
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Reservasi Meja Kafe",
    date: "Jul 2026",
    description: "Sistem reservasi meja kafe berbasis web dengan verifikasi pembayaran.",
    stack: ["Laravel", "PHP", "MySQL", "Docker"],
    highlights: [
      "Verifikasi pembayaran",
      "Manajemen meja",
      "Dashboard admin",
    ],
    link: "https://github.com/mseptiawan/reservasi-meja-kafe",
    className: "md:col-span-2 lg:col-span-2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-black">
      <Container>
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <Badge variant="outline" className="mb-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 border-zinc-800 bg-zinc-900/50">
            Portofolio
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proyek Terpilih
          </h2>
          
          {/* Deskripsi Mobile (Ringkas) */}
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 block sm:hidden">
            Kumpulan aplikasi web yang saya bangun dengan fokus pada penyelesaian masalah nyata.
          </p>

          {/* Deskripsi Desktop (Lengkap) */}
          <p className="mt-4 text-base leading-relaxed text-zinc-400 hidden sm:block">
            Kumpulan aplikasi web yang saya bangun dengan fokus pada penyelesaian masalah nyata, efisiensi proses, dan implementasi teknis yang andal.
          </p>
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {projectsData.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/50",
                project.className
              )}
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                      <CalendarDays className="size-3.5" />
                      {project.date}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Icon Panah di pojok kanan atas */}
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:bg-zinc-100 group-hover:text-black">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>

                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-zinc-800">
                        <Check className="size-2.5 text-zinc-100" strokeWidth={3} />
                      </span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack (di bagian bawah) */}
              <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}