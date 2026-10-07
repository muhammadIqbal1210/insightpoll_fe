"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const [billingAnnual, setBillingAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      badge: "Lembaga Survei & Peneliti",
      desc: "Ideal untuk tim survei lapangan dan lembaga akademik yang membutuhkan pengumpulan data valid & cepat.",
      priceMonthly: "Rp 4.500.000",
      priceAnnual: "Rp 3.600.000",
      period: "/bulan",
      highlighted: false,
      features: [
        "Hingga 5 Proyek Survei Aktif",
        "10.000 Responden per Bulan",
        "Manajemen Enumerator & GPS Tagging",
        "Mode Survei Lapangan Offline",
        "Dashboard Statistik Real-time",
        "Ekspor Excel, CSV & Ringkasan PDF",
        "Standar Email Support",
      ],
      cta: "Mulai Paket Starter",
    },
    {
      name: "Professional",
      badge: "Paling Populer · Tim Pemenangan & Korporasi",
      desc: "Solusi terlengkap mencakup Pol-Intelligence, AI Sentiment Analysis, dan Visualisasi Peta Spasial GIS.",
      priceMonthly: "Rp 12.500.000",
      priceAnnual: "Rp 9.900.000",
      period: "/bulan",
      highlighted: true,
      features: [
        "Proyek Survei Tanpa Batas",
        "50.000 Responden Terverifikasi",
        "Pol-Intelligence & Swing Voter Detection",
        "Sistem Quick Count & Exit Poll Real-time",
        "Spatial Data Engine (GIS Heatmap Provinsi/Kab)",
        "Social Media Monitoring (IndoBERT NLP AI)",
        "Evaluasi Kebijakan Publik (IKM Scorecard)",
        "Dukungan WhatsApp Eksekutif 24/7",
      ],
      cta: "Pilih Paket Professional",
    },
    {
      name: "Enterprise",
      badge: "Kementerian, Pemda & BUMN",
      desc: "Dukungan skala penuh dengan dedicated infrastructure, integrasi data khusus (BPS/KPU), dan SLA 99.9%.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      period: "",
      highlighted: false,
      features: [
        "Responden & Volume Data Tanpa Batas",
        "Multi-Tenant & White-Label Client Portal",
        "Dedicated Server / On-Premise Deployment",
        "Custom PostGIS GIS Spatial Layers",
        "Predictive Modeling & Custom ML Pipelines",
        "Executive PDF & PowerPoint Presentation Deck",
        "SLA 99.9% & Dedicated Research Specialist",
        "Pelatihan Operator & Pendampingan Lapangan",
      ],
      cta: "Hubungi Tim Enterprise",
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#fafcff] relative border-b border-[#ded5f8]/70 overflow-hidden">
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

      <div className="relative z-10 max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          {/* Finorio Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
            <span className="rounded-full bg-[#c1f1eb] text-[#000000] px-2.5 py-0.5 text-[11px] font-semibold">
              Pricing
            </span>
            <span className="text-slate-600 font-normal">
              Pilihan Investasi Transparan &amp; Terukur
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
            Pilihan Paket Fleksibel Sesuai Kebutuhan Riset
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.4em]">
            Dapatkan akurasi data maksimal dengan paket berlangganan bulanan maupun tahunan. Seluruh paket mencakup sistem geofencing anti-fraud.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white/90 border border-[#ded5f8] shadow-xs backdrop-blur-sm">
            <button
              onClick={() => setBillingAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                !billingAnnual ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Penagihan Bulanan
            </button>
            <button
              onClick={() => setBillingAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                billingAnnual ? "bg-slate-950 text-white" : "text-slate-600 hover:text-slate-950"
              }`}
            >
              <span>Tahunan</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c1f1eb] text-black font-semibold">
                HEMAT 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                p.highlighted
                  ? "border-2 border-[#00d2b5] bg-white shadow-xl shadow-[#00d2b5]/10 relative lg:-translate-y-2"
                  : "border border-[#ded5f8]/90 bg-white shadow-xs hover:border-[#00d2b5]"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-950 text-[#00d2b5] px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-[#00d2b5]/40 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00d2b5]" />
                  <span>Rekomendasi Utama</span>
                </div>
              )}

              <div>
                <div className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wide">
                  {p.badge}
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-slate-950 mt-1">{p.name}</h3>
                <p className="text-sm text-slate-600 mt-2 min-h-[40px] leading-relaxed font-normal">
                  {p.desc}
                </p>

                {/* Price Display */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-normal font-mono text-slate-950 tracking-tight">
                    {billingAnnual ? p.priceAnnual : p.priceMonthly}
                  </span>
                  {p.period && (
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      {p.period}
                    </span>
                  )}
                </div>
                {billingAnnual && p.period && (
                  <div className="text-[11px] text-teal-700 font-medium mt-1">
                    *Ditagih tahunan (diskon hemat 20% aktif)
                  </div>
                )}

                {/* Features List */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <div className="text-xs font-semibold text-slate-800 uppercase tracking-wide">
                    Kemampuan &amp; Fitur:
                  </div>
                  {p.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <div className="rounded-full bg-[#c1f1eb]/40 p-0.5 text-teal-800 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-10 pt-4">
                <Link
                  href="#contact"
                  className={`w-full py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                    p.highlighted
                      ? "bg-[#00d2b5] text-white shadow-xs hover:bg-[#00be9f] hover:scale-[1.01]"
                      : "border border-[#ded5f8] bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
