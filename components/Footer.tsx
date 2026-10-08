import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Globe,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d2b5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-slate-800/80">
          {/* Kolom 1: Profil Brand & Kontak Singkat (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="inline-block bg-white rounded-2xl p-2.5 mb-5 border border-white/20 hover:scale-[1.02] transition-transform shadow-xs">
                <Image
                  src="/logo.webp"
                  alt="InsightPoll.id Logo"
                  width={150}
                  height={42}
                  style={{ width: "auto", height: "auto" }}
                  className="object-contain"
                />
              </Link>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal max-w-sm mb-6">
                Platform intelligence analytics dan media publikasi riset terpadu di Indonesia yang mengintegrasikan survei digital berakurasi tinggi, evaluasi kebijakan publik (IKM), dan Spatial GIS berbasis AI.
              </p>

              {/* Info Kontak Cepat */}
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#00d2b5] shrink-0" />
                  <span className="font-mono text-slate-300">intelligence@insightpoll.id</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#00d2b5] shrink-0" />
                  <span className="font-mono text-slate-300">+62 811-8899-2024 / +62 21-5290-7800</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00d2b5] shrink-0 mt-0.5" />
                  <span className="text-slate-400">SCBD Sudirman &amp; IKN Nusantara Intelligence Center</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom 2: Navigasi Utama (Span 2) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00d2b5] mb-4">
              Navigasi
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-[#00d2b5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-[#00d2b5] transition-colors">
                  Layanan Riset
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-[#00d2b5] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/insight" className="hover:text-[#00d2b5] transition-colors flex items-center gap-1.5">
                  <span>Insight &amp; Berita</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-[#00d2b5]/20 text-[#00d2b5] text-[10px] font-mono">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00d2b5] transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#00d2b5] transition-colors">
                  Paket &amp; Harga
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: 10 Layanan Unggulan (Span 3) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00d2b5] mb-4">
              Layanan Pilihan
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/layanan/survey-kebijakan-publik" className="hover:text-[#00d2b5] transition-colors">
                  Survey Kebijakan Publik (IKM)
                </Link>
              </li>
              <li>
                <Link href="/layanan/riset-elektoral-konsultasi-politik" className="hover:text-[#00d2b5] transition-colors">
                  Riset Elektoral &amp; Pilkada
                </Link>
              </li>
              <li>
                <Link href="/layanan/infrastruktur-riset-olah-data-digital" className="hover:text-[#00d2b5] transition-colors">
                  Infrastruktur Riset &amp; Big Data
                </Link>
              </li>
              <li>
                <Link href="/layanan/enumerator-tenaga-lapangan-profesional" className="hover:text-[#00d2b5] transition-colors">
                  Enumerator Terverifikasi GPS
                </Link>
              </li>
              <li>
                <Link href="/layanan/jasa-penerbitan-pengelolaan-jurnal-ilmiah" className="hover:text-[#00d2b5] transition-colors">
                  Penerbitan &amp; Jurnal Ilmiah
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-[#00d2b5] hover:underline transition-colors font-medium text-xs inline-flex items-center gap-1">
                  <span>Lihat semua 10 layanan</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Pusat Bantuan & Legalitas (Span 3) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00d2b5] mb-4">
              Pusat Dukungan
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/tentang#leadership" className="hover:text-[#00d2b5] transition-colors">
                  Dewan Pimpinan &amp; Tokoh Riset
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#00d2b5] transition-colors">
                  FAQ &amp; Metodologi Riset
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00d2b5] transition-colors">
                  Jadwalkan Demo Platform
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00d2b5] transition-colors">
                  Kemitraan Lembaga &amp; Kampus
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-slate-500 block text-xs">
                  Standar Etika Riset Perhimpunan Survei Opini Publik Indonesia (PERSEPI)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Hak Cipta & Keamanan Data */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} <strong className="text-slate-400 font-medium">InsightPoll.id</strong> (PT Insight Nusantara Digital). All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#00d2b5]" />
              Enterprise Data Security &amp; NDA Ready
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400">Dibuat untuk Kepemimpinan Strategis di Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
