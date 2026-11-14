import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "../layout/container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Location Badge */}
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <MapPin className="size-3.5 sm:size-4" aria-hidden="true" />
            Palembang, Sumatera Selatan, Indonesia
          </div>
          {/* Name */}
          <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            M. Septiawan
          </h1>

          {/* Role */}
          <h2 className="mt-5 text-lg font-bold tracking-tight text-muted-foreground sm:text-2xl md:text-3xl">
            Full-Stack Web Developer
          </h2>

          {/* Deskripsi Mobile (Ringkas) */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground block sm:hidden">
            Lulusan Sistem Informasi yang fokus membangun aplikasi web
            end-to-end.
          </p>

          {/* Deskripsi Desktop (Lengkap) */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground hidden sm:block sm:text-lg">
            Lulusan Sistem Informasi yang berfokus pada pengembangan web.
            Berpengalaman membangun sistem end-to-end menggunakan Golang, dan
            Next.js, serta mengimplementasikan arsitektur database dan REST API
            yang efisien.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            {/* Primary Button - Indigo */}
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
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
              className="h-12 rounded-xl border-border bg-transparent px-6 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
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
