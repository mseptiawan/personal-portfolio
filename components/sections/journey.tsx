"use client";

import Container from "../layout/container";

const experiences = [
  {
    date: "Jan 2026 — Jul 2026",
    title: "Web Developer | Academic Project",
    company: "PT Zafa Mulia Mandiri",
    desc: "Membangun sistem HRIS berbasis web (16 modul) dari nol hingga siap produksi. Merancang arsitektur database, membangun REST API, dan mengimplementasikan logika bisnis menggunakan Node.js dan MongoDB.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Tailwind"],
    type: "Experience",
  },
  {
    date: "Mar 2025 — Aug 2025",
    title: "Web Developer | Kerja Praktik",
    company: "Changhong - Palembang Branch",
    desc: "Mengembangkan sistem perhitungan insentif promotor berbasis web untuk menggantikan proses manual Excel. Mengimplementasikan autentikasi, CRUD, dan perhitungan otomatis menggunakan Laravel.",
    tech: ["Laravel", "MySQL", "Tailwind"],
    type: "Experience",
  },
  {
    date: "Aug 2025",
    title: "Juara 1 UI/UX Competition",
    company: "Rafatech UIN Raden Fatah",
    desc: "Meraih juara pertama dalam kompetisi UI/UX tingkat nasional. Juga menjadi finalis dalam kategori Web Development.",
    tech: ["Figma"],
    type: "Achievement",
  },
  {
    date: "Aug 2025",
    title: "Finalist — Web Development",
    company: "Software Development Competition",
    desc: "Terpilih sebagai finalis dalam kompetisi pengembangan web yang berfokus pada desain sistem, pemodelan proses bisnis, dan implementasi full-stack.",
    tech: ["Laravel", "Tailwind", "HTML", "CSS"],
    type: "Achievement",
  },
];

export default function Journey() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <Container>
        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Experience & Achievements.
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Perjalanan karir, pencapaian, dan kontribusi yang membentuk saya
            sebagai Web Developer.
          </p>
        </div>

        {/* LIST EXPERIENCE */}
        <div className="flex flex-col border-t border-zinc-800">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 sm:py-10 border-b border-zinc-800 transition-colors hover:bg-zinc-900/30 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
            >
              {/* Kolom Kiri: Tanggal & Tipe */}
              <div className="md:w-1/4 shrink-0 flex flex-col gap-1.5">
                <span className="text-sm font-medium text-zinc-200">
                  {item.date}
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500">
                  {item.type}
                </span>
              </div>

              {/* Kolom Kanan: Konten */}
              <div className="md:w-3/4 flex flex-col gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-0.5">
                    {item.company}
                  </p>
                </div>
                
                <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
                  {item.desc}
                </p>

                {/* Tech Stack (Warna Disesuaikan) */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-[11px] font-medium border border-zinc-800 bg-zinc-900 text-zinc-300 rounded-md"
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