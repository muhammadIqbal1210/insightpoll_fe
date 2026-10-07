import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function InsightsSection() {
  const mainFeature = {
    title: "InsightPoll Rilis Peta Elektoral Spasial 38 Provinsi Menjelang Pilkada Serentak",
    desc: "Integrasi machine learning IndoBERT dan geofencing multi-tier memetakan pergeseran swing voters di 545 daerah pemilihan secara presisi.",
    date: "28 September 2026",
    tags: ["Rilis Riset", "Pol-Intelligence"],
    imageBg: "from-[#0a233a] via-[#113a52] to-[#0d5959]",
    badgeText: "Studi Utama",
  };

  const subFeatures = [
    {
      title: "Evaluasi Indeks Kepuasan Masyarakat (IKM) Sektor Kesehatan & Pendidikan Daerah",
      desc: "Laporan analitik lintas 120 kabupaten/kota menunjukkan kepuasan layanan digital meningkat 24.6% dibandingkan survei konvensional.",
      date: "26 September 2026",
      tags: ["Policy Insight", "IKM Daerah"],
      imageBg: "from-[#103048] to-[#1c6463]",
    },
    {
      title: "Pemanfaatan Big Data NLP & Sentimen Publik untuk Mitigasi Isu Strategis",
      desc: "Bagaimana kementerian dan pemda mendeteksi narasi krisis sosial sebelum berkembang menjadi polarisasi di media massa.",
      date: "24 September 2026",
      tags: ["Opini Ahli", "AI Analytics"],
      imageBg: "from-[#0c3848] to-[#197063]",
    },
  ];

  const sideArticles = [
    {
      title: "Membedah Validitas CAPI vs Online Panel: Standar Metodologi Riset 2026",
      tags: ["Metodologi", "Survei CAPI"],
      date: "22 September 2026",
      thumbnailBg: "from-teal-800 to-slate-900",
    },
    {
      title: "Proyeksi Pertumbuhan Kelas Menengah dan Tren Konsumsi Rumah Tangga Nasional",
      tags: ["Market Analytics", "Konsumen"],
      date: "19 September 2026",
      thumbnailBg: "from-emerald-800 to-slate-900",
    },
    {
      title: "Hyperlocal GIS: Mengapa Pemetaan Spasial Menjadi Kunci Kemenangan Elektoral",
      tags: ["Spatial GIS", "Geopolitik"],
      date: "17 September 2026",
      thumbnailBg: "from-cyan-900 to-slate-900",
    },
    {
      title: "Deteksi Manipulasi Opini dan Klaster Buzzer Melalui Graf Jaringan Media Sosial",
      tags: ["Social Intelligence"],
      date: "14 September 2026",
      thumbnailBg: "from-slate-800 to-teal-950",
    },
    {
      title: "Membangun Kebijakan Berbasis Bukti (Evidence-Based Policy) di Era AI",
      tags: ["Kebijakan Publik"],
      date: "10 September 2026",
      thumbnailBg: "from-teal-900 to-slate-900",
    },
    {
      title: "Panduan Teknis Quick Count dan Exit Poll Berstandar Presisi Tinggi",
      tags: ["Quick Count", "Statistik"],
      date: "06 September 2026",
      thumbnailBg: "from-sky-900 to-slate-900",
    },
  ];

  return (
    <section id="insight" className="py-20 md:py-28 bg-[#fafcff] relative overflow-hidden border-b border-[#ded5f8]/70">
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

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
            Informasi &amp; Opini Riset Terbaru
          </h2>
          <div className="w-16 h-1 bg-[#00d2b5] mx-auto my-3 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.6]">
            Ikuti temuan riset, analisis elektoral, dan rilis kebijakan strategis dari tim analis data serta konsultan InsightPoll.
          </p>
        </div>

        {/* 2 Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Span 7): 1 Big Main Card + 2 Horizontal Cards underneath */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Big Feature Hero Card */}
            <div className="group relative rounded-3xl overflow-hidden border border-[#ded5f8] shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-950 flex flex-col justify-end min-h-[380px] sm:min-h-[420px]">
              {/* Image Graphic / Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-tr ${mainFeature.imageBg} opacity-90 group-hover:scale-105 transition-transform duration-700`} />
              
              {/* Subtle Tech Pattern Overlay */}
              <div className="absolute inset-0 bg-grid-light opacity-10 pointer-events-none" />

              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00d2b5]/20 blur-3xl pointer-events-none" />

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 sm:p-8 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex flex-col justify-end text-white">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {mainFeature.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#00d2b5] text-slate-950 px-3 py-1 text-xs font-semibold shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-slate-300 font-mono ml-2 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#00d2b5]" />
                    {mainFeature.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white leading-snug mb-2 group-hover:text-[#00d2b5] transition-colors">
                  {mainFeature.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-2 mb-4">
                  {mainFeature.desc}
                </p>

                <div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00d2b5] hover:text-[#56fde6] transition-colors group/link"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 2 Sub Feature Cards Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {subFeatures.map((sub, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl overflow-hidden border border-[#ded5f8] bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Thumbnail Banner */}
                  <div className={`relative h-44 bg-gradient-to-br ${sub.imageBg} p-5 flex flex-col justify-end overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid-light opacity-10 pointer-events-none" />
                    <div className="relative z-10 flex flex-wrap gap-1.5">
                      {sub.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-full bg-[#00d2b5] text-slate-950 px-2.5 py-0.5 text-[11px] font-semibold shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-mono mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-[#00d2b5]" />
                        {sub.date}
                      </div>

                      <h4 className="text-base font-semibold text-slate-900 group-hover:text-[#00d2b5] transition-colors leading-snug mb-2 line-clamp-2">
                        {sub.title}
                      </h4>

                      <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3 mb-4">
                        {sub.desc}
                      </p>
                    </div>

                    <div>
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d2b5] hover:text-teal-700 transition-colors group/link"
                      >
                        <span>Selengkapnya</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Span 5): "Informasi Terkini" List + "Lihat semua berita" Button */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#ded5f8] bg-white p-6 sm:p-7 shadow-sm">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <h3 className="text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Informasi Terkini</span>
                  <span className="w-2 h-2 rounded-full bg-[#00d2b5] animate-pulse" />
                </h3>
                <span className="text-xs text-slate-500 font-mono">Insight Series</span>
              </div>

              {/* List of articles */}
              <div className="divide-y divide-slate-100">
                {sideArticles.map((art, aIdx) => (
                  <div
                    key={aIdx}
                    className="group py-4 first:pt-0 last:pb-4 flex gap-4 items-start cursor-pointer hover:bg-slate-50/70 p-2.5 rounded-2xl transition-all"
                  >
                    {/* Thumbnail box */}
                    <div className={`w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-gradient-to-br ${art.thumbnailBg} shrink-0 overflow-hidden relative flex items-center justify-center border border-slate-100`}>
                      <div className="absolute inset-0 bg-grid-light opacity-20 pointer-events-none" />
                      <Sparkles className="w-5 h-5 text-[#00d2b5]/70" />
                    </div>

                    {/* Article Details */}
                    <div className="flex flex-col justify-between flex-grow min-w-0">
                      <div className="flex flex-wrap gap-1.5 mb-1.5">
                        {art.tags.map((t, tI) => (
                          <span
                            key={tI}
                            className="rounded-full bg-[#c1f1eb] text-slate-900 px-2 py-0.5 text-[10px] font-semibold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <h5 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-[#00d2b5] transition-colors leading-snug line-clamp-2">
                        {art.title}
                      </h5>

                      <div className="text-[11px] text-slate-400 font-mono mt-1.5 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#00d2b5]" />
                        {art.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button matching Sucofindo layout */}
            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 hover:bg-[#00d2b5] hover:text-slate-950 text-white px-7 py-3 text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Lihat semua berita</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
