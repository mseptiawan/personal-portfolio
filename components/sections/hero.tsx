import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "../layout/container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Background Elements - Disesuaikan untuk Mode Gelap */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-zinc-800/10 blur-3xl" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-zinc-800/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Location Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-zinc-400 backdrop-blur-sm">
            <MapPin className="size-3.5 sm:size-4" aria-hidden="true" />
            Palembang, Sumatera Selatan, Indonesia
          </div>

          {/* Name */}
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            M. Septiawan
          </h1>
          
          {/* Role */}
          <h2 className="mt-5 text-lg font-bold tracking-tight text-zinc-300 sm:text-2xl md:text-3xl">
            Backend/Full-Stack Web Developer
          </h2>

          {/* Deskripsi Mobile (Ringkas) */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 block sm:hidden">
            Lulusan Sistem Informasi yang fokus membangun aplikasi web end-to-end.
          </p>

          {/* Deskripsi Desktop (Lengkap) */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 hidden sm:block sm:text-lg">
            Lulusan Sistem Informasi yang berfokus pada pengembangan web.
            Berpengalaman membangun sistem end-to-end menggunakan Laravel,
            Node.js, React, dan Next.js.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            {/* Primary Button - Putih di Dark Mode */}
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-zinc-100 px-6 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
            >
              <a href="#projects">
                Lihat Proyek
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </a>
            </Button>
            
            {/* Secondary Button - Outline */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-zinc-800 bg-transparent px-6 text-sm font-semibold text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              <a href="mailto:mseptiawan017@gmail.com">
                <Mail className="mr-2 size-4" aria-hidden="true" />
                Hubungi Saya
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}