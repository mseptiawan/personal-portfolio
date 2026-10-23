"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menus = [
  { name: "Tech", href: "#tech" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Deteksi scroll untuk mengubah tampilan navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Kunci scroll body saat mobile menu terbuka */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="text-sm font-bold tracking-wide text-foreground transition-colors hover:text-foreground/80"
        >
          M Septiawan
          <span className="text-foreground">.</span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-1 md:flex">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
            >
              {menu.name}
              {/* Garis bawah animasi (Hitam/Netral) */}
              <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-foreground scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* CTA DESKTOP (Hitam Solid) */}
        <a
          href="mailto:mseptiawan017@gmail.com"
          className="hidden md:inline-flex items-center rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90 hover:-translate-y-0.5"
        >
          Hire Me
        </a>

        {/* TOMBOL MOBILE */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-muted"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {menu.name}
            </a>
          ))}
          <a
            href="mailto:mseptiawan017@gmail.com"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}