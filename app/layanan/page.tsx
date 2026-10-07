import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Layanan Riset & Intelijen Data Terpadu — InsightPoll.id",
  description:
    "Eksplorasi 10 layanan riset opini publik, intelijen elektoral, infrastruktur survei digital, konsultasi bisnis, hingga penerbitan karya ilmiah dari InsightPoll.id.",
};

const serviceIcons: { [key: string]: React.ReactNode } = {
  "survey-kebijakan-publik": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="8" width="28" height="34" rx="4" />
      <path d="M18 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <line x1="16" y1="15" x2="26" y2="15" />
      <line x1="16" y1="21" x2="24" y2="21" />
      <circle cx="28" cy="28" r="6" stroke="#00d2b5" strokeWidth="2.5" />
      <path d="M28 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="#00d2b5" />
      <path d="M24 33c0-2 2-3 4-3s4 1 4 3" stroke="#00d2b5" />
      <line x1="33" y1="33" x2="38" y2="38" stroke="#00d2b5" strokeWidth="2.5" />
    </svg>
  ),
  "riset-elektoral-konsultasi-politik": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="14" width="32" height="26" rx="4" />
      <path d="M24 6v8" stroke="#00d2b5" strokeWidth="2.5" />
      <path d="M24 6l6 3-6 3" stroke="#00d2b5" fill="#00d2b5" />
      <line x1="14" y1="32" x2="14" y2="28" strokeWidth="2.5" />
      <line x1="20" y1="32" x2="20" y2="24" strokeWidth="2.5" />
      <line x1="26" y1="32" x2="26" y2="20" stroke="#00d2b5" strokeWidth="3" />
      <line x1="32" y1="32" x2="32" y2="26" strokeWidth="2.5" />
    </svg>
  ),
  "infrastruktur-riset-olah-data-digital": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="32" height="14" rx="3" />
      <rect x="8" y="26" width="32" height="14" rx="3" />
      <circle cx="14" cy="15" r="1.5" fill="currentColor" />
      <circle cx="14" cy="33" r="1.5" fill="currentColor" />
      <circle cx="19" cy="15" r="1.5" fill="currentColor" />
      <circle cx="19" cy="33" r="1.5" fill="currentColor" />
      <path d="M25 17l4-5 4 3 5-6" stroke="#00d2b5" strokeWidth="2.5" />
    </svg>
  ),
  "enumerator-tenaga-lapangan-profesional": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="16" r="6" />
      <path d="M9 36v-3a7 7 0 0 1 14 0v3" />
      <rect x="27" y="16" width="14" height="18" rx="3" stroke="#00d2b5" strokeWidth="2.5" />
      <path d="M30 25l3 3 5-5" stroke="#00d2b5" strokeWidth="2.5" />
      <circle cx="34" cy="11" r="2" stroke="#00d2b5" strokeWidth="2" />
    </svg>
  ),
  "portal-berita-online": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="36" height="24" rx="3" />
      <path d="M18 36h12M24 32v6" />
      <rect x="10" y="12" width="16" height="6" rx="1" fill="#16273b" />
      <text x="11.5" y="16.5" fill="white" fontSize="4.5" fontWeight="bold">NEWS</text>
      <circle cx="33" cy="16" r="3" stroke="#00d2b5" strokeWidth="2" />
      <path d="M32 24l4 2.5-4 2.5z" fill="#00d2b5" stroke="#00d2b5" />
      <line x1="10" y1="23" x2="24" y2="23" />
      <line x1="10" y1="27" x2="22" y2="27" />
    </svg>
  ),
  "konsultasi-riset-strategi-bisnis": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="16" r="4" />
      <circle cx="34" cy="16" r="4" />
      <path d="M8 32v-2a6 6 0 0 1 8-4" />
      <path d="M40 32v-2a6 6 0 0 0-8-4" />
      <ellipse cx="24" cy="31" rx="12" ry="4" stroke="#00d2b5" strokeWidth="2.2" strokeDasharray="3 3" />
      <circle cx="24" cy="23" r="3" stroke="#00d2b5" strokeWidth="2" />
      <path d="M24 20v-7M21 16l3-3 3 3" stroke="#00d2b5" strokeWidth="2.5" />
    </svg>
  ),
  "penerbitan-buku-karya-tulis-strategis": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 16c8-3 16 0 16 4v16c-8-4-16-1-16-1z" />
      <path d="M40 16c-8-3-16 0-16 4v16c8-4 16-1 16-1z" />
      <line x1="12" y1="23" x2="20" y2="23" />
      <line x1="12" y1="28" x2="19" y2="28" />
      <line x1="28" y1="23" x2="36" y2="23" />
      <line x1="29" y1="28" x2="36" y2="28" />
      <circle cx="24" cy="12" r="5" stroke="#00d2b5" strokeWidth="2" />
      <line x1="24" y1="7" x2="24" y2="17" stroke="#00d2b5" strokeWidth="1.5" />
      <line x1="19" y1="12" x2="29" y2="12" stroke="#00d2b5" strokeWidth="1.5" />
    </svg>
  ),
  "penulisan-publikasi-artikel-opini-media-massa": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="14" width="32" height="24" rx="3" />
      <line x1="8" y1="21" x2="40" y2="21" />
      <rect x="13" y="26" width="10" height="8" rx="1.5" fill="#00d2b5" />
      <line x1="27" y1="27" x2="35" y2="27" />
      <line x1="27" y1="31" x2="35" y2="31" />
      <path d="M30 11a7 7 0 0 1 5-5" stroke="#00d2b5" strokeWidth="2.2" />
      <path d="M33 13a3 3 0 0 1 2-2" stroke="#00d2b5" strokeWidth="2.2" />
    </svg>
  ),
  "penulisan-penerbitan-artikel-opini-khusus": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="10" width="28" height="24" rx="4" />
      <path d="M18 34l-4 6v-6" />
      <line x1="17" y1="20" x2="29" y2="20" />
      <line x1="17" y1="25" x2="25" y2="25" />
      <text x="14" y="16" fill="#00d2b5" fontSize="8" fontWeight="bold">“</text>
      <path d="M35 12l4-4 2 2-4 4-2-2z" fill="#00d2b5" stroke="#00d2b5" />
    </svg>
  ),
  "jasa-penerbitan-pengelolaan-jurnal-ilmiah": (
    <svg className="w-12 h-12 text-[#16273b]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="8" width="24" height="32" rx="3" />
      <path d="M26 8v8l3-2 3 2v-8" fill="#00d2b5" stroke="#00d2b5" />
      <circle cx="18" cy="22" r="2" stroke="#00d2b5" strokeWidth="2" />
      <circle cx="26" cy="22" r="2" stroke="#00d2b5" strokeWidth="2" />
      <line x1="20" y1="22" x2="24" y2="22" stroke="#00d2b5" strokeWidth="2" />
      <circle cx="22" cy="29" r="2" stroke="#00d2b5" strokeWidth="2" />
      <line x1="18" y1="24" x2="22" y2="29" stroke="#00d2b5" strokeWidth="2" />
      <line x1="26" y1="24" x2="22" y2="29" stroke="#00d2b5" strokeWidth="2" />
    </svg>
  ),
};

export default function LayananIndexPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      <Navbar />

      <main className="flex-grow pt-28 md:pt-36">
        {/* Hero Banner Layanan */}
        <section className="relative pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#c1f1eb] to-[#c4dffa] border-b border-[#ded5f8]/70">
          {/* Vertical Column Lines */}
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

          <div className="relative z-10 max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 mb-6">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900">Layanan</span>
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
              <span className="rounded-full bg-[#c1f1eb] text-slate-950 px-2.5 py-0.5 text-[11px] font-semibold">
                Services Directory
              </span>
              <span className="text-slate-600 font-normal">
                10 Layanan Unggulan InsightPoll
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.08] mb-6">
              Solusi Terpadu Riset, Data, <br className="hidden sm:block" />
              dan Strategi Kebijakan
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal tracking-[0.16px] leading-[1.65] max-w-[760px] mx-auto mb-10">
              Jelajahi portofolio lengkap layanan kami yang dirancang untuk mendukung instansi pemerintah, kandidat politik, korporasi bisnis, serta institusi akademik dalam menghasilkan keputusan berbasis data presisi tinggi.
            </p>
          </div>
        </section>

        {/* 10 Services Grid (Halaman Awal Menampilkan 10 Layanan) */}
        <section className="py-20 md:py-28 bg-[#fafcff] relative overflow-hidden">
          <div className="max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-[760px] mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
                Daftar 10 Layanan Tersedia
              </h2>
              <div className="w-16 h-1 bg-[#00d2b5] mx-auto my-3.5 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.6]">
                Pilih layanan di bawah untuk melihat rincian metodologi, deliverables, alur kerja, dan studi implementasi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {servicesData.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/layanan/${service.slug}`}
                  className="group rounded-3xl bg-white p-7 border border-[#ded5f8] hover:border-[#00d2b5] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-6px_rgba(0,210,181,0.22)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Top Subtle Glow */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00d2b5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#c1f1eb] group-hover:text-slate-900 transition-colors">
                        0{index + 1}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400">
                        {service.category}
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#ebfbf7] border border-slate-100 group-hover:border-[#00d2b5]/40 flex items-center justify-center mb-5 transition-all duration-300">
                      {serviceIcons[service.slug]}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-black leading-snug mb-3">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3 mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* CTA link indicator */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#00d2b5] group-hover:text-teal-700 transition-colors">
                    <span>Lihat Rincian Layanan</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#e5fcf8] border-t border-[#ded5f8]/70">
          <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <div className="rounded-3xl bg-slate-950 p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00d2b5]/20 blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="rounded-full bg-[#00d2b5] text-slate-950 px-3.5 py-1 text-xs font-semibold mb-4 inline-block">
                  Konsultasi Kebutuhan Riset
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[-0.03em] leading-tight mb-4">
                  Butuh Kombinasi Beberapa Layanan atau Custom Enterprise?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-normal">
                  Diskusikan rancangan metodologi, lingkup wilayah, dan jadwal pelaksanaan langsung bersama tim metodologis &amp; analis senior InsightPoll.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/#contact"
                    className="rounded-full bg-[#00d2b5] hover:bg-[#00be9f] text-slate-950 px-8 py-3.5 text-sm font-semibold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    Jadwalkan Konsultasi Gratis
                  </Link>
                  <Link
                    href="/"
                    className="rounded-full border border-slate-700 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-medium transition-all cursor-pointer"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
