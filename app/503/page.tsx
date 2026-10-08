import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, Clock, ShieldCheck, Home, RefreshCw } from "lucide-react";

export const metadata = {
  title: "503 — Layanan Sedang Pemeliharaan | InsightPoll.id",
  description: "Sistem InsightPoll.id sedang dalam proses pemeliharaan terjadwal.",
};

export default function ServiceUnavailablePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-28 md:pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#fed7aa]/35 to-[#fef08a]/30">
        {/* Vertical Column Lines */}
        <div className="absolute inset-0 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none -z-0">
          <div className="grid grid-cols-6 h-full w-full">
            <div className="border-r border-amber-200/50 h-full" />
            <div className="border-r border-amber-200/50 h-full" />
            <div className="border-r border-amber-200/50 h-full" />
            <div className="border-r border-amber-200/50 h-full" />
            <div className="border-r border-amber-200/50 h-full" />
            <div className="h-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-[720px] mx-auto px-5 sm:px-8 text-center">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/95 px-4 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
            <span className="rounded-full bg-amber-400 text-amber-950 px-2.5 py-0.5 text-[11px] font-mono font-bold">
              STATUS_503
            </span>
            <span className="text-slate-700 font-medium">
              Maintenance In Progress
            </span>
          </div>

          {/* Large Number Graphic */}
          <div className="relative my-2 select-none">
            <span className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-950 via-slate-800 to-amber-950/20 leading-none">
              503
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-mono uppercase tracking-widest text-amber-900 bg-white/90 px-4 py-1 rounded-full border border-amber-300 shadow-xs backdrop-blur-xs">
                Pemeliharaan Terjadwal
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 font-normal tracking-[0.16px] leading-[1.65] max-w-lg mx-auto mb-4 mt-4">
            Kami sedang melakukan peningkatan performa infrastruktur server dan data engine AI secara berkala demi menjamin keandalan analitik 99.9% uptime.
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-mono mb-8">
            <Clock className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Estimasi sistem normal kembali: 15 – 30 Menit</span>
          </div>

          {/* Quick Nav Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 text-sm font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Home className="w-4 h-4 stroke-[2.2]" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
