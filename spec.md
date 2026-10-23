# Spesifikasi Proyek: Portofolio Web Developer

## 1. Peran & Persona (Target Audience)
AI Agent harus mengubah seluruh narasi dan identitas pada website dari sebelumnya "System Analyst / Business Analyst" menjadi **"Backend/Full-Stack Web Developer"**.
- **Nama:** M. Septiawan
- **Headline:** Backend/Full-Stack Web Developer | Laravel, React, Next.js
- **Lokasi:** Palembang, Sumatera Selatan, Indonesia
- **Fokus:** Menonjolkan kemampuan *coding*, pembuatan REST API, desain database, dan penyelesaian masalah teknis.

## 2. Aturan Redesign UI/UX (WAJIB)
- **Library UI:** Gunakan **shadcn/ui**. Jika project belum menggunakan React/Next.js, gunakan Tailwind CSS murni yang meniru gaya shadcn/ui (clean, minimalis, border tipis, aksesibilitas baik).
- **Hero Section:** **HAPUS GAMBAR/FOTO** profil. Fokus pada tipografi yang besar dan teks yang *impactful*.
- **Tema Warna:** Gunakan tema *dark mode* atau *light mode* yang bersih (background putih/abu-abu sangat terang, teks hitam, aksen warna biru/indigo).
- **Responsivitas:** Pastikan tampilan mobile-first dan rapi di semua ukuran layar.

## 3. Struktur Konten Website Baru

### A. Hero Section (Tanpa Gambar)
- **Teks Utama (H1):** "M. Septiawan"
- **Teks Sub-Headline (H2):** "Backend/Full-Stack Web Developer"
- **Paragraf Singkat:** "Lulusan Sistem Informasi yang berfokus pada pengembangan web. Berpengalaman membangun sistem end-to-end menggunakan Laravel, Node.js, React, dan Next.js."
- **Tombol CTA:** 
  - "Lihat Proyek" (scroll ke section project)
  - "Hubungi Saya" (link ke email/LinkedIn)

### B. About Me (Tentang Saya)
Ubah narasi dari "System Analyst" menjadi "Problem Solver & Developer".
- **Teks:** "Saya adalah Web Developer yang berfokus pada pembuatan aplikasi web yang efisien dan skalabel. Berpengalaman dalam merancang arsitektur database, membangun REST API, dan mengimplementasikan logika bisnis yang kompleks. Saya terbiasa bekerja dari tahap analisis kebutuhan hingga deployment, memastikan solusi teknologi yang tepat guna menyelesaikan masalah nyata."

### C. Tech Stack (Keahlian)
Tampilkan dalam bentuk grid/badge (shadcn Badge):
- **Backend:** Laravel, Node.js, Express.js, REST API
- **Frontend:** React.js, Next.js, Tailwind CSS, JavaScript, HTML/CSS
- **Database:** MySQL, PostgreSQL, MongoDB, Redis
- **Tools:** Git, GitHub, Docker, Postman, Laravel Sail

### D. Projects (Proyek Terpilih)
Gunakan komponen Card dari shadcn/ui untuk setiap proyek.

**1. Sistem Inventaris Toko XYZ (Jul 2026 - Sep 2026)**
- **Deskripsi:** Sistem inventaris berbasis web untuk manajemen stok, transaksi, dan POS.
- **Tech Stack:** Laravel, PHP, MySQL, Tailwind CSS, Alpine.js
- **Highlights:** Fitur RBAC untuk 6 role, stok opname otomatis, dan cetak invoice.

**2. HRIS Zafa Tour (Feb 2026 - Jun 2026)**
- **Deskripsi:** Sistem Informasi Kepegawaian (16 modul) untuk PT Zafa Mulia Mandiri.
- **Tech Stack:** Node.js, Express.js, MongoDB, Redis, EJS, Tailwind CSS
- **Highlights:** Alur persetujuan bertingkat, RBAC 6 role, Redis session, dan deployment Docker.

**3. Sistem Insentif PT Changhong (Jan 2025 - Feb 2025)**
- **Deskripsi:** Sistem otomatisasi perhitungan insentif promotor pengganti Excel.
- **Tech Stack:** Laravel, PHP, MySQL
- **Highlights:** Upload data massal via Excel, perhitungan insentif otomatis, dan ranking promotor.

**4. Reservasi Meja Kafe (Jul 2026)**
- **Deskripsi:** Sistem reservasi meja kafe berbasis web.
- **Tech Stack:** Laravel, PHP, MySQL, Tailwind CSS, Docker
- **Highlights:** Verifikasi pembayaran, manajemen meja, dan dashboard admin.

### E. Experience (Pengalaman Kerja)
- **Web Developer (Proyek Skripsi)** - PT. Zafa Mulia Mandiri (Jan 2026 - Jun 2026)
  *Membangun HRIS 16 modul, merancang database 20+ entitas, implementasi Node.js, MongoDB, dan Docker.*
- **Web Developer (Kerja Praktik)** - PT. Changhong Electric Indonesia (Mar 2025 - Agt 2025)
  *Mengembangkan sistem perhitungan insentif promotor, integrasi Excel, dan REST API menggunakan Laravel 12.*

### F. Education & Achievements
- **Pendidikan:** Universitas Multi Data Palembang (UMDP) - S.Kom, Sistem Informasi (2022 - 2026), IPK: 3.52/4.00
- **Pencapaian:** Juara 1 UI/UX Design Competition Rafatech 2025 (UIN Raden Fatah Palembang).

### G. Footer / Contact
- Email: mseptiawan017@gmail.com
- LinkedIn: linkedin.com/in/mseptiawan/
- GitHub: github.com/mseptiawan
- No. HP: +62-896-3090-9617

## 4. Instruksi Tambahan untuk AI
- **Hapus/Edit file** yang berkaitan dengan persona lama (System Analyst).
- **Buat komponen baru** jika diperlukan untuk Hero Section (tanpa gambar).
- Jika menggunakan React/Next.js, pastikan meng-import komponen dari `@/components/ui/...` (shadcn).
- Jika menggunakan template HTML murni/Laravel Blade, gunakan utility class Tailwind untuk membuat tampilan semirip mungkin dengan shadcn.