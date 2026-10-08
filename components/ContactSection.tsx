"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#e5fcf8] border-t border-[#ded5f8]/70 relative overflow-hidden">
      {/* Background Vertical Column Lines (Finorio style) */}
      <div className="absolute inset-0 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none -z-0">
        <div className="grid grid-cols-6 h-full w-full">
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="border-r border-[#e5ddfc]/35 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <div className="rounded-3xl bg-slate-950 p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00d2b5]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Pill Badge */}
            <span className="rounded-full bg-[#00d2b5] text-slate-950 px-3.5 py-1 text-xs font-semibold mb-5 inline-flex items-center gap-1.5 shadow-xs">
              <span>Konsultasi &amp; Kemitraan Strategis</span>
            </span>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.03em] leading-[1.15] mb-5 text-white">
              Siap Membawa Riset &amp; Pengambilan Keputusan ke Level Berikutnya?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-9 font-normal">
              Diskusikan rancangan metodologi, survei opini publik, simulasi live dashboard wilayah, atau publikasi strategis Anda langsung bersama analis senior InsightPoll.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#00d2b5] hover:bg-[#00be9f] text-slate-950 px-8 py-3.5 text-sm font-semibold transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2"
              >
                <span>Hubungi Kami / Minta Demo</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/layanan"
                className="rounded-full border border-slate-700 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-medium transition-all cursor-pointer"
              >
                Lihat Semua Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
