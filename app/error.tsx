"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RotateCcw, Home, AlertTriangle, ShieldX } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-28 md:pt-36 pb-20 relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#fed7aa]/30 to-[#fecdd3]/40">
        {/* Vertical Column Lines (Finorio style) */}
        <div className="absolute inset-0 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none -z-0">
          <div className="grid grid-cols-6 h-full w-full">
            <div className="border-r border-rose-200/40 h-full" />
            <div className="border-r border-rose-200/40 h-full" />
            <div className="border-r border-rose-200/40 h-full" />
            <div className="border-r border-rose-200/40 h-full" />
            <div className="border-r border-rose-200/40 h-full" />
            <div className="h-full" />
          </div>
        </div>

        <div className="relative z-10 max-w-[720px] mx-auto px-5 sm:px-8 text-center">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/95 px-4 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
            <span className="rounded-full bg-rose-500 text-white px-2.5 py-0.5 text-[11px] font-mono font-bold">
              ERR_500
            </span>
            <span className="text-slate-700 font-medium">
              Internal Server Error
            </span>
          </div>

          {/* Large Number Graphic */}
          <div className="relative my-2 select-none">
            <span className="text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-950 via-slate-900 to-rose-950/20 leading-none">
              500
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-mono uppercase tracking-widest text-rose-800 bg-white/90 px-4 py-1 rounded-full border border-rose-200 shadow-xs backdrop-blur-xs">
                Terjadi Kendala Sistem
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 font-normal tracking-[0.16px] leading-[1.65] max-w-lg mx-auto mb-8 mt-4">
            Terjadi gangguan teknis yang tidak terduga pada server saat memproses data Anda. Tim teknis kami telah mencatat insiden ini.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 text-sm font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Coba Muat Ulang</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 hover:bg-white text-slate-700 px-8 py-3.5 text-sm font-medium transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <Home className="w-4 h-4 text-slate-600" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
