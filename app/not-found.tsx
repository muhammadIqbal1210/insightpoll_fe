import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, Search, Compass, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "404 — Halaman Tidak Ditemukan | InsightPoll.id",
  description: "Maaf, halaman yang Anda tuju tidak ditemukan atau telah dipindahkan.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-28 md:pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#c1f1eb] to-[#c4dffa]">
        {/* Vertical Column Lines (Finorio style) */}
        <div className="absolute inset-0 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none -z-0">
          <div className="grid grid-cols-6 h-full w-full">
            <div className="border-r border-[#e5ddfc]/60 h-full" />
            <div className="border-r border-[#e5ddfc]/60 h-full" />
            <div className="border-r border-[#e5ddfc]/60 h-full" />
            <div className="border-r border-[#e5ddfc]/60 h-full" />
            <div className="border-r border-[#e5ddfc]/60 h-full" />
            <div className="h-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-[720px] mx-auto px-5 sm:px-8 text-center">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/95 px-4 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
            <span className="rounded-full bg-rose-100 text-rose-700 px-2.5 py-0.5 text-[11px] font-mono font-bold">
              ERR_404
            </span>
            <span className="text-slate-600 font-normal">
              Resource Not Found
            </span>
          </div>

          {/* Large Number Graphic */}
          <div className="relative my-2 select-none">
            <span className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950/20 leading-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-mono uppercase tracking-widest text-slate-800/80 bg-white/80 px-4 py-1 rounded-full border border-slate-200/60 shadow-xs backdrop-blur-xs">
                Halaman Tidak Ditemukan
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 font-normal tracking-[0.16px] leading-[1.65] max-w-lg mx-auto mb-8 mt-4">
            Tautan yang Anda akses mungkin salah ketik, telah dihapus, atau memerlukan hak akses resmi untuk ditampilkan.
          </p>

          {/* Quick Nav Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#00d2b5] hover:bg-[#00be9f] text-slate-950 px-8 py-3.5 text-sm font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Home className="w-4 h-4 stroke-[2.2]" />
              <span>Kembali ke Beranda</span>
            </Link>
            <Link
              href="/insight"
              className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 hover:bg-white text-slate-700 px-8 py-3.5 text-sm font-medium transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <Compass className="w-4 h-4 text-slate-600" />
              <span>Jelajahi Berita &amp; Riset</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
