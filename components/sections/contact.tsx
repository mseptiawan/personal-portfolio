"use client";

import Container from "../layout/container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-background border-t border-border"
    >
      {/* Dekorasi background halus - Monokrom */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-muted/50 blur-3xl opacity-60" />
      </div>

      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
          {/* Headline */}
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-tight">
            Mari Bangun Solusi Digital
            <br className="hidden sm:block" />{" "}
            <span className="text-foreground/70">yang Lebih Baik.</span>
          </h2>

          {/* Deskripsi */}
          <p className="mb-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Saya saat ini sedang mencari peluang sebagai{" "}
            <span className="font-semibold text-foreground">
              Backend Developer
            </span>
            ,{" "}
            <span className="font-semibold text-foreground">
              Full-Stack Developer
            </span>
            , atau peran terkait lainnya. Saya tertarik untuk membangun
            arsitektur sistem yang andal, mengembangkan REST API, dan
            menerjemahkan kebutuhan bisnis menjadi kode yang efisien dan
            terukur.
          </p>

          {/* CTA - Hitam Solid */}
          <a
            href="mailto:mseptiawan017@gmail.com"
            className="inline-flex items-center rounded-xl bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5"
          >
            Mari Bicara
          </a>
        </div>
      </Container>
    </section>
  );
}