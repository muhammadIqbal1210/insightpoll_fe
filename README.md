# 🌐 InsightPoll Frontend (`insightpoll_fe`)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker)](https://www.docker.com/)

**InsightPoll.id** adalah platform *intelligence analytics* & survei digital terdepan di Indonesia yang mengintegrasikan riset opini publik, *Pol-Intelligence* (intelijen politik & elektabilitas), evaluasi kebijakan publik (Indeks Kepuasan Masyarakat / IKM), riset pasar (*market analytics*), serta pemetaan wilayah berbasis **Spatial GIS & Artificial Intelligence**.

Repository ini memuat kode sumber antarmuka pengguna (**Frontend**) yang dibangun dengan arsitektur modern Next.js App Router.

---

## 🚀 Fitur Utama

- **Executive & Analytics Dashboard:** Visualisasi data hasil survei, tren elektabilitas, dan sentimen secara interaktif dan real-time.
- **Spatial GIS & Geolocation Intelligence:** Pemetaan sebaran responden dan wilayah suara/pasar menggunakan representasi spasial interaktif.
- **Layanan Riset & Pol-Intelligence:** Penjelasan produk survei digital, polling cepat (*quick count*), evaluasi kebijakan publik (IKM), dan riset pasar.
- **Portal Artikel & Insight:** Publikasi rilis hasil survei, analisis politik, dan laporan berkala.
- **Secure Secret Login Portal:** Akses khusus admin dan klien menggunakan token rahasia terenkripsi.
- **Desain Modern & Responsif:** Mengadopsi nuansa eksekutif dengan performa tinggi berbasis Tailwind CSS dan Next.js Server Components.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Standalone Output)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Lucide React Icons
- **Visualisasi & Animasi:** Recharts / Chart.js, Framer Motion
- **Containerization:** Docker & Docker Compose

---

## 📦 Panduan Instalasi Lokal

### 1. Prasyarat
- Node.js versi 20 atau 22 LTS
- Package manager `npm`

### 2. Kloning Repository & Install Dependensi
```bash
git clone https://github.com/muhammadIqbal1210/insightpoll_fe.git
cd insightpoll_fe
npm install
```

### 3. Konfigurasi Environment Variable
Salin contoh file `.env`:
```bash
cp .env.example .env.local
```
Sesuaikan variabel environment:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 4. Menjalankan Server Development
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

---

## 🐳 Menjalankan dengan Docker

Untuk menjalankan frontend secara terisolasi via Docker:

```bash
# Build dan jalankan container
docker compose up -d --build

# Menghentikan container
docker compose down
```

---

## 🔄 CI/CD & Deployment

Repository ini dilengkapi dengan **GitHub Actions Workflow** (`.github/workflows/ci-cd.yml`):
1. **CI:** Menjalankan pengecekan *linting* dan *production build test* pada setiap *push* atau *pull request* ke branch `production`.
2. **CD:** Melakukan automated deployment ke server VPS via SSH & Docker Compose secara otomatis ketika kode di-merge ke branch `production`.
