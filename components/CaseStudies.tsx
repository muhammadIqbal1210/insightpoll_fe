import { Award, CheckCircle, ArrowUpRight, TrendingUp, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";

export default function CaseStudies() {
  const cases = [
    {
      title: "Pemenangan Pilkada Serentak & Pemilu",
      client: "Konsultan Politik & Tim Strategis",
      challenge: "Kesulitan memetakan 18% swing voters dan mencegah kebocoran suara di TPS kantong lawan.",
      solution: "Penerapan Pol-Intelligence & GIS Heatmap untuk mikro-targeting kampanye darat dan early warning isu lokal.",
      result: "+12.4% Suara Terkonversi",
      metricDetail: "Akurasi Quick Count berselisih hanya 0.42% dari hasil rekapitulasi KPU resmi.",
      accent: "from-teal-500/10 to-transparent",
    },
    {
      title: "Evaluasi Pelayanan Publik & IKM Daerah",
      client: "Pemerintah Provinsi & Bappeda",
      challenge: "Laporan survei konvensional memerlukan 3 bulan untuk selesai dan tidak memiliki korelasi spasial per kecamatan.",
      solution: "Implementasi survei terintegrasi GPS dengan dashboard real-time IKM per unit kerja layanan.",
      result: "84.6 Skor IKM (Kategori A)",
      metricDetail: "Waktu pelaporan dipangkas dari 90 hari menjadi instan dalam hitungan detik.",
      accent: "from-sky-500/10 to-transparent",
    },
    {
      title: "Brand Health & Ekspansi Ritel Nasional",
      client: "Korporasi FMCG & Riset Agensi",
      challenge: "Sulit memahami loyalitas konsumen dan titik persebaran pasar di luar Pulau Jawa.",
      solution: "Spatial Data Engine yang menggabungkan data BPS pendapatan daerah dengan survei NPS brand.",
      result: "+28% Efisiensi Distribusi",
      metricDetail: "Mengidentifikasi 45 klaster konsumen potensial baru dengan akurasi terukur.",
      accent: "from-emerald-500/10 to-transparent",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-[#ded5f8]/70 relative overflow-hidden">
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
        {/* Section Header */}
        <div className="max-w-[760px] mb-16">
          {/* Finorio Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
            <span className="rounded-full bg-[#c1f1eb] text-[#000000] px-2.5 py-0.5 text-[11px] font-semibold">
              Impact
            </span>
            <span className="text-slate-600 font-normal">
              Dampak Nyata &amp; Studi Kasus
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
            Terbukti Membantu Pemenangan &amp; Perumusan Kebijakan Publik
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.4em]">
            Pengambil keputusan tidak boleh mengandalkan asumsi. Lihat bagaimana InsightPoll memberikan keunggulan kompetitif di lapangan.
          </p>
        </div>

        {/* Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="rounded-3xl border border-[#ded5f8]/90 bg-white p-7 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-[#00d2b5] hover:shadow-lg"
            >
              <div>
                <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wide">
                  {c.client}
                </span>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mt-1 mb-4">{c.title}</h3>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="p-3 rounded-xl bg-[#fafcff] border border-[#ded5f8]/60">
                    <strong className="text-slate-900 block mb-1">Tantangan Awal:</strong>
                    {c.challenge}
                  </div>
                  <div className="p-3 rounded-xl bg-[#fafcff] border border-[#ded5f8]/60">
                    <strong className="text-slate-900 block mb-1">Solusi InsightPoll:</strong>
                    {c.solution}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-slate-950 font-mono">{c.result}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{c.metricDetail}</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 border border-[#ded5f8]/70">
                  <ArrowUpRight className="w-4 h-4 text-[#00d2b5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
