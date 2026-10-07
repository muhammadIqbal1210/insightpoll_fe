import {
  ClipboardList,
  Vote,
  FileCheck2,
  TrendingUp,
  Share2,
  Map,
  LayoutDashboard,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function ModulesGrid() {
  const modules = [
    {
      id: "modul-1",
      number: "01",
      title: "Survey Management System",
      tag: "Online & Offline Data Collection",
      desc: "Manajemen siklus survei terpadu dari penyusunan kuisioner dinamis hingga validasi enumerator lapangan berbasis koordinat GPS dan geofencing anti-fraud.",
      features: [
        "Question builder beragam (likert, rating, open-ended)",
        "Mode survei offline tanpa koneksi internet",
        "Geofencing & GPS tagging anti-duplikasi responden",
        "Export dataset instan ke SPSS, Excel, dan CSV",
      ],
      output: "Valid Dataset, Verification Audit, & Response Dashboard",
      icon: ClipboardList,
      featured: false,
    },
    {
      id: "pol-intelligence",
      number: "02",
      title: "Pol-Intelligence Engine",
      tag: "Electoral & Political Dynamics",
      desc: "Sistem analitik politik canggih untuk memetakan peta elektabilitas, mendeteksi kantong swing voters, serta simulasi Quick Count dan Exit Poll dengan akurasi teruji.",
      features: [
        "Tracking kandidat & tren elektabilitas berkala",
        "Identifikasi & segmentasi undecided voters",
        "Sistem Quick Count TPS berkecepatan tinggi",
        "Exit poll pasca pencoblosan & analisis migrasi suara",
      ],
      output: "Peta Elektabilitas, Proyeksi Kursi, & Rekomendasi Pemenangan",
      icon: Vote,
      featured: true,
    },
    {
      id: "modul-3",
      number: "03",
      title: "Policy Insight Advisory",
      tag: "Public Perception & Governance",
      desc: "Evaluasi dampak kebijakan pemerintah dan indeks kepuasan masyarakat (IKM) berstandar nasional untuk membantu perumusan program kerja kementerian dan pemda.",
      features: [
        "Pengukuran Indeks Kepuasan Masyarakat (IKM)",
        "Evaluasi efektivitas program bantuan & infrastruktur",
        "Analisis sentimen terhadap regulasi daerah",
        "Early warning potensi resistensi & gejolak sosial",
      ],
      output: "Policy Brief, IKM Scorecard, & Social Risk Assessment",
      icon: FileCheck2,
      featured: false,
    },
    {
      id: "modul-4",
      number: "04",
      title: "Market Analytics Suite",
      tag: "Consumer & Brand Intelligence",
      desc: "Solusi riset komprehensif bagi korporasi dan brand untuk memahami tren pasar, loyalitas pelanggan, Net Promoter Score (NPS), dan pengujian produk baru.",
      features: [
        "Brand Health Tracking (Awareness, Usage, Loyalty)",
        "Customer Experience & Net Promoter Score (NPS)",
        "Product test, concept test, & kemasan",
        "Pengujian efektivitas materi kampanye iklan",
      ],
      output: "Brand Score, Customer Insights Deck, & NPS Matrix",
      icon: TrendingUp,
      featured: false,
    },
    {
      id: "modul-5",
      number: "05",
      title: "Social Media Intelligence",
      tag: "AI IndoBERT NLP Engine",
      desc: "Mesin perayap percakapan publik multi-kanal yang memanfaatkan model transformer NLP berbahasa Indonesia untuk mendeteksi sentimen dan narasi krisis secara dini.",
      features: [
        "Monitoring multi-platform (X, TikTok, IG, Portal Berita)",
        "NLP IndoBERT Sentiment & Emotion Classifier",
        "Topic modeling & klaster isu percakapan viral",
        "Deteksi buzzer, bot, & influencer tracking",
      ],
      output: "Sentiment Score, Viral Issue Alerts, & Media Breakdown",
      icon: Share2,
      featured: false,
    },
    {
      id: "spatial-gis",
      number: "06",
      title: "Spatial Data Engine (GIS)",
      tag: "Geographic Information System",
      desc: "Integrasi data spasial hingga level kecamatan dan desa dengan layer data sekunder BPS dan KPU untuk visualisasi sebaran demografi dan preferensi pemilih.",
      features: [
        "Peta interaktif 38 provinsi hingga kelurahan",
        "Layer overlay data sensus BPS & data pemilih KPU",
        "Heatmap spasial elektabilitas & kepuasan publik",
        "Analisis korelasi spasial berbasis PostGIS",
      ],
      output: "Thematic Heatmap Map, Regional Spatial Reports",
      icon: Map,
      featured: true,
    },
    {
      id: "modul-7",
      number: "07",
      title: "Executive Dashboard & Automated Reporting",
      tag: "Strategic Decision Cockpit",
      desc: "Pusat kendali visual eksekutif dengan otomatisasi laporan siap saji berformat PDF briefing dan presentasi PowerPoint untuk jajaran pengambil keputusan.",
      features: [
        "KPI Dashboard terpadu untuk kepala daerah & pimpinan",
        "One-click PDF & PowerPoint presentation generator",
        "Notifikasi alert kritis via WhatsApp & Email eksekutif",
        "Role-Based Access Control (RBAC) & Audit Trail",
      ],
      output: "Board-Ready Executive Deck & Instant WhatsApp Alerts",
      icon: LayoutDashboard,
      featured: false,
    },
  ];

  return (
    <section id="modul" className="py-24 md:py-32 bg-white relative overflow-hidden">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-[700px]">
            {/* Finorio Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
              <span className="rounded-full bg-[#c1f1eb] text-[#000000] px-2.5 py-0.5 text-[11px] font-semibold">
                Modules
              </span>
              <span className="text-slate-600 font-normal">
                7 Modul Terintegrasi PRD
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
              Ekosistem Intelligence Lengkap dalam Satu Platform.
            </h2>
            <p className="mt-4 text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.4em]">
              Tak perlu lagi memisahkan software survei lapangan, visualisasi GIS, dan analisis media sosial. Seluruh modul InsightPoll saling terhubung secara mulus.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#00d2b5] text-white px-8 py-3 text-sm font-medium hover:bg-[#00be9f] transition-all self-start md:self-auto shadow-xs"
          >
            <span>Konsultasikan Kebutuhan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                id={m.id}
                className={`group relative rounded-3xl border p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                  m.featured
                    ? "border-[#00d2b5] bg-gradient-to-b from-white to-[#c1f1eb]/20 shadow-md shadow-[#c1f1eb]/30"
                    : "border-[#ded5f8]/90 bg-white hover:border-[#00d2b5] hover:shadow-lg shadow-xs"
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        m.featured
                          ? "bg-slate-950 text-[#00d2b5]"
                          : "bg-slate-50 text-slate-800 group-hover:bg-[#c1f1eb] group-hover:text-slate-950"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      MODUL #{m.number}
                    </span>
                  </div>

                  {/* Badges & Titles */}
                  <div className="inline-block text-[11px] font-mono font-medium uppercase tracking-wider text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-full mb-3 border border-[#ded5f8]/60">
                    {m.tag}
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {m.desc}
                  </p>

                  {/* Bullet Features */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-semibold text-slate-800 uppercase tracking-wide">
                      Fitur Kunci:
                    </div>
                    {m.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#00d2b5] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Output Pill */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Output Utama
                  </div>
                  <div className="text-xs font-medium text-slate-800 bg-[#fbfbfe] p-2.5 rounded-xl border border-[#ded5f8]/70">
                    {m.output}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
