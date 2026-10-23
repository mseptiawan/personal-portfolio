"use client";

import Image from "next/image";
import Container from "../layout/container";
import { Briefcase, Trophy } from "lucide-react";
import imgWinner from "@/public/images/certificate/winner-ui-ux.png";
import imgFinalist from "@/public/images/projects/marketplace-lokal.png";
import {
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFigma,
} from "react-icons/si";

/* =========================================================
   DATA
   ========================================================= */
const experiences = [
  {
    date: "Jan 2026 — Jul 2026",
    title: "Web Developer | Academic Project",
    company: "PT Zafa Mulia Mandiri",
    desc: "Membangun sistem HRIS berbasis web (16 modul) dari nol hingga siap produksi. Merancang arsitektur database, membangun REST API, dan mengimplementasikan logika bisnis menggunakan Node.js dan MongoDB.",
    image: "https://media.licdn.com/dms/image/v2/D560BAQGDZjqOV-FbMg/company-logo_200_200/company-logo_200_200/0/1724338915770?e=2147483647&v=beta&t=R2nlOve3jdJrPeBJUi8WbkEA29SmdgE91lB5to0KRVc",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Tailwind"],
    kind: "work",
  },
  {
    date: "Mar 2025 — Aug 2025",
    title: "Web Developer | Kerja Praktik",
    company: "Changhong - Palembang Branch",
    desc: "Mengembangkan sistem perhitungan insentif promotor berbasis web untuk menggantikan proses manual Excel. Mengimplementasikan autentikasi, CRUD, dan perhitungan otomatis menggunakan Laravel.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6TyChgfKNGGglYQUJnkTywOOpkPSDwRVCA&s",
    tech: ["Laravel", "MySQL", "Tailwind"],
    kind: "work",
  },
  {
    date: "Aug 2025",
    title: "Juara 1 UI/UX Competition",
    company: "Rafatech UIN Raden Fatah",
    desc: "Meraih juara pertama dalam kompetisi UI/UX tingkat nasional. Juga menjadi finalis dalam kategori Web Development.",
    image: imgWinner.src,
    tech: ["Figma"],
    kind: "award",
  },
  {
    date: "Aug 2025",
    title: "Finalist — Web Development",
    company: "Software Development Competition",
    desc: "Terpilih sebagai finalis dalam kompetisi pengembangan web yang berfokus pada desain sistem, pemodelan proses bisnis, dan implementasi full-stack.",
    image: imgFinalist.src,
    tech: ["Laravel", "Tailwind", "HTML", "CSS"],
    kind: "award",
  },
];

/* =========================================================
   ICON & COLOR MAP
   ========================================================= */
// Gunakan fungsi yang mengembalikan JSX agar aman dari error Next.js
const getTechIcon = (tech: string) => {
  switch (tech) {
    case "Laravel": return <SiLaravel className="w-3.5 h-3.5 text-red-600" />;
    case "MySQL": return <SiMysql className="w-3.5 h-3.5 text-blue-600" />;
    case "Node.js": return <SiNodedotjs className="w-3.5 h-3.5 text-emerald-600" />;
    case "Express": return <SiExpress className="w-3.5 h-3.5 text-gray-700" />;
    case "MongoDB": return <SiMongodb className="w-3.5 h-3.5 text-emerald-500" />;
    case "Redis": return <SiRedis className="w-3.5 h-3.5 text-red-500" />;
    case "Tailwind": return <SiTailwindcss className="w-3.5 h-3.5 text-sky-400" />;
    case "HTML": return <SiHtml5 className="w-3.5 h-3.5 text-orange-500" />;
    case "CSS": return <SiCss className="w-3.5 h-3.5 text-blue-500" />;
    case "Figma": return <SiFigma className="w-3.5 h-3.5 text-pink-500" />;
    default: return null;
  }
};

/* =========================================================
   BADGE TYPE
   ========================================================= */
const kindStyles = {
  work: {
    label: "Experience",
    icon: Briefcase,
    // Ganti biru menjadi monokrom (foreground/muted)
    classes: "text-foreground bg-muted border-border",
  },
  award: {
    label: "Achievement",
    icon: Trophy,
    // Warna amber dipertahankan karena ini untuk "penghargaan" (opsional, bisa diganti jadi monokrom jika mau)
    classes: "text-amber-600 bg-amber-50 border-amber-100",
  },
};

/* =========================================================
   MAIN COMPONENT
   ========================================================= */
export default function Journey() {
  return (
    <section id="experience" className="bg-muted/30 py-24">
      <Container>
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-4xl text-left">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-foreground bg-muted rounded-full border border-border">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Experience & Achievements.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Perjalanan karir, pencapaian, dan kontribusi yang membentuk saya
            sebagai Web Developer.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="mx-auto max-w-3xl relative">
          {/* Garis vertikal timeline (hanya desktop) */}
          <div className="hidden sm:block absolute left-[27px] top-4 bottom-4 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((item, index) => {
              const style = kindStyles[item.kind as keyof typeof kindStyles];
              const KindIcon = style.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                  {/* LOGO / ICON bulat di kiri (timeline node) */}
                  <div className="relative shrink-0 z-10">
                    <div className="w-14 h-14 rounded-2xl border border-border bg-background overflow-hidden flex items-center justify-center shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.company}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* CARD */}
                  <div className="flex-1 min-w-0 bg-background border border-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-md hover:-translate-y-0.5">
                    
                    {/* Baris atas: badge + tanggal */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${style.classes}`}
                      >
                        <KindIcon className="w-3 h-3" />
                        {style.label}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {item.date}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="font-bold text-lg text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70 font-medium mt-1">
                      {item.company}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-muted/50 border border-border rounded-lg text-xs font-medium text-foreground"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}