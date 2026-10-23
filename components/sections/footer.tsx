import Link from "next/link"; // 1. Perbaikan import Link
import { Mail } from "lucide-react"; // Mail masih ada
import Container from "../layout/container";

// 2. Membuat komponen SVG pengganti ikon brand yang dihapus
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mseptiawan",
    icon: <GithubIcon className="size-4" />, // 3. Gunakan komponen SVG baru
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mseptiawan/",
    icon: <LinkedinIcon className="size-4" />, // 4. Gunakan komponen SVG baru
  },
  {
    name: "Email",
    href: "mailto:mseptiawan017@gmail.com",
    icon: <Mail className="size-4" />,
  },
];

const navLinks = [
  { name: "Keahlian", href: "#tech" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Proyek", href: "#projects" },
  { name: "Kontak", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:py-12">
          
          {/* Kiri: Brand & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-foreground/80"
            >
              M. Septiawan
              <span className="text-foreground">.</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Backend/Full-Stack Web Developer
            </p>
            <p className="mt-2 text-xs text-muted-foreground/70">
              &copy; {currentYear} M. Septiawan. Hak cipta dilindungi.
            </p>
          </div>

          {/* Kanan: Navigasi & Sosial Media */}
          <div className="flex flex-col items-center gap-6 md:items-end">
            
            {/* Navigasi Cepat */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Ikon Sosial */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-muted hover:text-foreground"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}