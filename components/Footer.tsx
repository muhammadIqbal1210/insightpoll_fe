import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="bg-white rounded-2xl p-2.5 inline-block mb-5 border border-white/20">
                <Image
                  src="/logo.webp"
                  alt="InsightPoll.id Logo"
                  width={160}
                  height={45}
                  className="object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
                InsightPoll.id adalah platform SaaS intelligence analytics terpadu di Indonesia yang mengintegrasikan survei digital, Pol-Intelligence, evaluasi kebijakan publik (IKM), market analytics, dan Geographic Information System (GIS) berbasis AI.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00d2b5]">
                <span className="w-2 h-2 rounded-full bg-[#00d2b5] animate-pulse" />
                Sistem Terpantau 99.9% Uptime
              </span>
            </div>
          </div>

          {/* Column 2: 7 Modules */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00d2b5] mb-4">
              7 Modul Utama
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#modul" className="hover:text-white transition-colors">
                  Survey Management (GPS)
                </Link>
              </li>
              <li>
                <Link href="#pol-intelligence" className="hover:text-white transition-colors">
                  Pol-Intelligence &amp; Exit Poll
                </Link>
              </li>
              <li>
                <Link href="#modul" className="hover:text-white transition-colors">
                  Policy Insight &amp; IKM Daerah
                </Link>
              </li>
              <li>
                <Link href="#modul" className="hover:text-white transition-colors">
                  Market Analytics &amp; NPS
                </Link>
              </li>
              <li>
                <Link href="#modul" className="hover:text-white transition-colors">
                  Social Media AI Sentiment
                </Link>
              </li>
              <li>
                <Link href="#spatial-gis" className="hover:text-white transition-colors">
                  Spatial Data Engine (GIS)
                </Link>
              </li>
              <li>
                <Link href="#modul" className="hover:text-white transition-colors">
                  Executive Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Sasaran Pemangku Kepentingan */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00d2b5] mb-4">
              Pengguna Utama
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Kementerian &amp; Lembaga
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Pemerintah Provinsi &amp; Bappeda
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Tim Sukses &amp; Konsultan Politik
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  BUMN &amp; Korporasi Publik
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Lembaga Riset &amp; Universitas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Navigasi & Legalitas */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00d2b5] mb-4">
              Pusat Dukungan
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Daftar Paket Harga
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ &amp; Metodologi
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Jadwalkan Live Demo
                </Link>
              </li>
              <li>
                <span className="text-slate-600 block">Kebijakan Privasi Data</span>
              </li>
              <li>
                <span className="text-slate-600 block">Syarat &amp; Ketentuan Layanan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} InsightPoll.id (PT Insight Nusantara Digital). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00d2b5]" />
              Enterprise Data Security
            </span>
            <span>Made for Strategic Leadership in Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
