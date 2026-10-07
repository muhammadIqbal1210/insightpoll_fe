"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#c1f1eb] to-[#c4dffa]">
      {/* Background Vertical Column Lines (Finorio style) */}
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

      <div className="relative z-10 max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Finorio-exact Typography & Download Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left pt-6 lg:pt-0">
            {/* Finorio Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-7">
              <span className="rounded-full bg-[#c1f1eb] text-[#000000] px-2.5 py-0.5 text-[11px] font-semibold">
                Fast
              </span>
              <span className="text-slate-600 font-normal">
                Platform Cepat, Tepat dan Akurat
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.25rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.08] mb-6">
              Ubah Suara dan Data <br />
              menjadi Keputusan Strategis Berdampak
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.4em] max-w-[600px] mb-8">
              Transformasi suara menjadi keputusan strategis yang berdampak dengan platform analitik polling berbasis AI pertama di Indonesia dengan kualitas setingkat pemerintahan. Wawasan real-time, prediksi elektoral, dan analisis spasial untuk strategi yang efektif
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link href="#contact" className="rounded-full bg-[#00d2b5] text-white px-12 py-3 text-sm font-medium text-slate-700 cursor-pointer">
                Get Started
              </Link>
              <Link href="#services" className="rounded-full border border-[#ded5f8] bg-white/90 px-12 py-3 text-sm font-medium text-slate-700 cursor-pointer">
                Explore Solution
              </Link>
            </div>
          </div>

          {/* Right Column: Exact Hero Image hero-img.webp */}
          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-auto sm:max-w-auto lg:max-w-auto flex justify-center">
              <Image
                src="/hero.webp"
                alt="InsightPoll preview"
                width={1400}
                height={680}
                className="object-contain w-auto max-h-[580px] sm:max-h-[640px] lg:max-h-[700px] select-none pointer-events-none drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
