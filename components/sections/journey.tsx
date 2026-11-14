"use client";

import Container from "../layout/container";

const experiences = [
  {
    date: "Januari 2026 — Juli 2026",
    title: "Web Developer | Academic Project",
    company: "PT Zafa Mulia Mandiri",
    desc: "Membangun sistem HRIS berbasis web (16 modul) dari nol hingga siap produksi. Merancang arsitektur database, membangun REST API, dan mengimplementasikan logika bisnis menggunakan Express dan MongoDB.",
    tech: ["Express", "MongoDB", "Redis", "Tailwind"],
    type: "Experience",
  },
  {
    date: "April 2025 — Juni 2025",
    title: "Web Developer | Kerja Praktik",
    company: "Changhong - Palembang Branch",
    desc: "Merancang prototipe sistem perhitungan insentif promotor berbasis web sebagai pengganti proses manual Excel. Mengimplementasikan autentikasi, CRUD, dan perhitungan otomatis menggunakan Laravel.",
    tech: ["Laravel", "MySQL"],
    type: "Experience",
  },
  {
    date: "Agustus 2025",
    title: "Juara 1 UI/UX Competition",
    company: "Rafatech UIN Raden Fatah",
    desc: "Bertanggung jawab pada perancangan user flow dan low-fidelity wireframe dalam tim, serta mempresentasikan solusi desain di depan juri. Berhasil membawa tim meraih juara 1 UI/UX tingkat nasional dan menjadi finalis kategori Web Development",
    tech: ["Figma"],
    type: "Achievement",
  },
];

export default function Journey() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-background">
      <Container>
        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Experience & Achievements.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Rekam jejak, pelajaran, dan pencapaian yang membentuk cara saya
            membangun produk digital.
          </p>
        </div>

        {/* LIST EXPERIENCE */}
        <div className="flex flex-col border-t border-border">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 sm:py-10 border-b border-border transition-colors hover:bg-accent/40 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
            >
              {/* Kolom Kiri: Tanggal & Tipe */}
              <div className="md:w-1/4 shrink-0 flex flex-col gap-1.5">
                <span className="text-sm font-medium text-foreground">
                  {item.date}
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  {item.type}
                </span>
              </div>

              {/* Kolom Kanan: Konten */}
              <div className="md:w-3/4 flex flex-col gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.company}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  {item.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-[11px] font-medium border border-border bg-muted text-muted-foreground rounded-md transition-colors group-hover:border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
