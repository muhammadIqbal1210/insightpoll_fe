import {
  Cpu,
  Database,
  Lock,
  Zap,
  Globe2,
  Server,
  ShieldCheck,
  LineChart,
} from "lucide-react";

export default function FeaturesHighlight() {
  const highlights = [
    {
      icon: Zap,
      title: "Sub-Second Latency (<3s)",
      desc: "Kueri analitik dan pemrosesan ratusan ribu baris data survei selesai dalam hitungan detik dengan dukungan agregasi ClickHouse & Redis.",
      badge: "Performance",
    },
    {
      icon: Cpu,
      title: "IndoBERT NLP & Machine Learning",
      desc: "Model deep learning terlatih untuk tata bahasa Indonesia, slang, hingga istilah daerah untuk klasifikasi sentimen dengan akurasi di atas 95%.",
      badge: "AI Engine",
    },
    {
      icon: Globe2,
      title: "Geospatial PostGIS Engine",
      desc: "Pemetaan spasial tingkat tinggi yang menghubungkan poligon batas wilayah administratif dengan dataset sensus nasional dan lokasi responden.",
      badge: "Spatial GIS",
    },
    {
      icon: Lock,
      title: "Government-Grade Security",
      desc: "Enkripsi data end-to-end (AES-256), autentikasi JWT terproteksi, Role-Based Access Control (RBAC), serta pencatatan audit log forensik.",
      badge: "Security",
    },
    {
      icon: Server,
      title: "Skalabilitas Jutaan Responden",
      desc: "Arsitektur cloud terdistribusi yang mampu menampung lebih dari 1.000.000 data responden dan 10.000.000 rekaman percakapan sosial.",
      badge: "Scalability",
    },
    {
      icon: LineChart,
      title: "Predictive Forecasting (Prophet & ARIMA)",
      desc: "Simulasi tren elektabilitas dan kepuasan publik ke masa depan dengan interval kepercayaan statistik margin-of-error terukur.",
      badge: "Predictive Analytics",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-[#fafcff] border-y border-[#ded5f8]/70 relative overflow-hidden">
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
        <div className="text-center max-w-[800px] mx-auto mb-16">
          {/* Finorio Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
            <span className="rounded-full bg-[#c1f1eb] text-[#000000] px-2.5 py-0.5 text-[11px] font-semibold">
              Architecture
            </span>
            <span className="text-slate-600 font-normal">
              Fondasi Teknologi Berstandar Enterprise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
            Fondasi Teknologi Tangguh Berstandar Enterprise
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.4em]">
            Didesain khusus untuk memenuhi kebutuhan instansi pemerintah dan tim strategis dengan keandalan 99.9% uptime dan kepatuhan privasi data ketat.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-[#ded5f8]/90 bg-white p-7 transition-all duration-300 hover:border-[#00d2b5] hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 border border-[#ded5f8]/50">
                      <Icon className="w-5 h-5 text-slate-900" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-700 bg-[#c1f1eb]/40 px-2.5 py-0.5 rounded-full border border-[#ded5f8]/60">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-slate-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
