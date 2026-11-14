"use client";

import Container from "../layout/container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-background border-t border-border"
    >
      {/* Dekorasi background halus */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-primary/10 blur-3xl opacity-60" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
          {/* Headline */}
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight">
            Mari Bangun Solusi Digital
            <br />
            <span className="text-primary">yang Lebih Baik.</span>
          </h2>
          {/* Deskripsi Mobile (Ringkas) */}
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground block sm:hidden">
            Saya sedang mencari peluang sebagai{" "}
            <span className="font-semibold text-foreground">Backend</span> atau{" "}
            <span className="font-semibold text-foreground">
              Full-Stack Developer
            </span>{" "}
            untuk membangun sistem yang andal.
          </p>

          {/* Deskripsi Desktop (Lengkap) */}
          <p className="mb-8 text-sm sm:text-base leading-relaxed text-muted-foreground block">
            Saya saat ini sedang mencari peluang sebagai{" "}
            <span className="font-semibold text-foreground">
              Full-Stack Developer
            </span>{" "}
            atau peran terkait lainnya. Saya tertarik untuk membangun arsitektur
            sistem yang andal, mengembangkan REST API, dan menerjemahkan
            kebutuhan bisnis menjadi kode yang efisien dan terukur.
          </p>

          {/* CTA - Indigo Solid */}
          <a
            href="mailto:mseptiawan017@gmail.com"
            className="inline-flex items-center rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:-translate-y-0.5"
          >
            Mari Bicara
          </a>
        </div>
      </Container>
    </section>
  );
}
