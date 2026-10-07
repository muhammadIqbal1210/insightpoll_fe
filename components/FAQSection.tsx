"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Bagaimana cara kerja verifikasi geofencing GPS pada survei offline enumerator?",
      a: "Aplikasi enumerator InsightPoll secara otomatis mengunci titik koordinat latitude/longitude saat wawancara dimulai dan selesai. Jika surveyor berada di luar radius target TPS atau wilayah sampel yang ditentukan (geofence), sistem akan memberi peringatan anomali dan menandai data untuk diaudit oleh tim verifikator guna mencegah pemalsuan data kuesioner.",
    },
    {
      q: "Apakah data survei dan analitik politik kami terjamin kerahasiaannya?",
      a: "Sangat terjamin. InsightPoll menerapkan standar enkripsi AES-256 pada database PostGIS dan ClickHouse kami, serta proteksi transfer data TLS 1.3. Kami juga menyediakan Role-Based Access Control (RBAC) ketat sehingga data riset tim Anda diisolasi secara khusus dan tidak dapat diakses oleh pihak ketiga atau klien lain.",
    },
    {
      q: "Seberapa cepat sistem Quick Count dan Exit Poll dapat menyajikan data ke dashboard pimpinan?",
      a: "Sistem Quick Count kami dirancang dengan arsitektur sub-detik (latensi <3 detik). Saat saksi atau enumerator di TPS mengirimkan foto formulir C1 dan angka rekapitulasi, data langsung diagregasi secara real-time dan divisualisasikan dalam grafik persentase suara, estimasi margin of error, serta sebaran peta geografis.",
    },
    {
      q: "Apakah InsightPoll dapat diintegrasikan dengan data sensus BPS dan DPT KPU?",
      a: "Ya. Spatial Data Engine InsightPoll telah dilengkapi layer data sekunder Indonesia, mencakup batas poligon administratif 38 provinsi, data demografi BPS (pendapatan, usia, mata pencaharian), hingga data TPS dan Daftar Pemilih Tetap (DPT) KPU untuk korelasi elektoral yang presisi.",
    },
    {
      q: "Bagaimana AI IndoBERT menangani bahasa gaul, sarkasme, atau bahasa daerah di media sosial?",
      a: "Model AI kami dibangun di atas arsitektur transformer IndoBERT dan IndoRoBERTa yang telah dilatih secara khusus dengan korpus teks Indonesia, mencakup istilah tren media sosial, singkatan percakapan, bahasa gaul, dan dialek lokal. Akurasi pengenalan sentimen dan deteksi emosi mencapai lebih dari 95%.",
    },
    {
      q: "Apakah instansi pemerintah atau BUMN dapat memilih skema on-premise deployment?",
      a: "Bisa. Khusus untuk paket Enterprise, kami mendukung instalasi on-premise di pusat data internal instansi, integrasi dengan Active Directory/SSO pemerintah, serta konfigurasi server private cloud mandiri yang memenuhi standar audit keamanan informasi BSSN.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden">
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

      <div className="relative z-10 max-w-[960px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {/* Finorio Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
            <span className="rounded-full bg-[#c1f1eb] text-[#000000] px-2.5 py-0.5 text-[11px] font-semibold">
              FAQ
            </span>
            <span className="text-slate-600 font-normal">
              Pertanyaan yang Sering Diajukan
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
            Jawaban untuk Pertanyaan Teknis &amp; Metodologis
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.4em]">
            Pelajari lebih lanjut bagaimana metodologi riset dan teknologi platform kami bekerja.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#00d2b5] bg-[#fbfbfe] shadow-xs"
                    : "border-[#ded5f8]/80 bg-white hover:border-[#00d2b5]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-medium text-slate-900 text-base sm:text-lg"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#00d2b5] text-white" : "bg-slate-50 text-slate-500 border border-[#ded5f8]/60"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-[#ded5f8]/40 mt-1 animate-in fade-in duration-200 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
