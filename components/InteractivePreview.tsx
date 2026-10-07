"use client";

import { useState } from "react";
import {
  BarChart3,
  Map,
  ShieldAlert,
  MessageSquare,
  TrendingUp,
  PieChart,
  Layers,
  Sparkles,
  Download,
  Share2,
  CheckCircle,
  AlertTriangle,
  FileSpreadsheet,
  FileText,
  SlidersHorizontal,
} from "lucide-react";

type TabKey = "pol" | "gis" | "policy" | "social";

export default function InteractivePreview() {
  const [activeTab, setActiveTab] = useState<TabKey>("pol");
  const [selectedRegion, setSelectedRegion] = useState("Jawa Barat");

  return (
    <section id="preview" className="py-24 md:py-32 bg-[#fafcff] relative border-b border-[#ded5f8]/70 overflow-hidden">
      {/* Background Vertical Column Lines (Finorio style) */}
      <div className="absolute inset-0 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none -z-0">
        <div className="grid grid-cols-6 h-full w-full">
          <div className="border-r border-[#e5ddfc]/40 h-full" />
          <div className="border-r border-[#e5ddfc]/40 h-full" />
          <div className="border-r border-[#e5ddfc]/40 h-full" />
          <div className="border-r border-[#e5ddfc]/40 h-full" />
          <div className="border-r border-[#e5ddfc]/40 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[840px] mx-auto mb-12 md:mb-16">
          {/* Finorio Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
            <span className="rounded-full bg-[#c1f1eb] text-[#000000] px-2.5 py-0.5 text-[11px] font-semibold">
              Live Demo
            </span>
            <span className="text-slate-600 font-normal">
              Interactive Executive Intelligence Simulator
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
            Eksplorasi Executive Dashboard &amp; Intelligence Engine
          </h2>
          <p className="mt-4 text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.4em] max-w-[660px]">
            Lihat bagaimana InsightPoll mengubah jutaan baris data lapangan, survei opini publik, dan spasial GIS menjadi keputusan taktis bernilai tinggi.
          </p>

          {/* Tab Controls */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl md:rounded-full bg-white/90 border border-[#ded5f8] shadow-xs backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("pol")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "pol"
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <BarChart3 className="w-4 h-4 text-[#00d2b5]" />
              <span>Pol-Intelligence</span>
            </button>
            <button
              onClick={() => setActiveTab("gis")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "gis"
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <Map className="w-4 h-4 text-[#00d2b5]" />
              <span>Spatial GIS Heatmap</span>
            </button>
            <button
              onClick={() => setActiveTab("policy")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "policy"
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-[#00d2b5]" />
              <span>Policy & IKM Advisory</span>
            </button>
            <button
              onClick={() => setActiveTab("social")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "social"
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <MessageSquare className="w-4 h-4 text-[#00d2b5]" />
              <span>Social Media & AI Sentiment</span>
            </button>
          </div>
        </div>

        {/* The Dashboard Frame */}
        <div className="rounded-3xl border border-[#ded5f8] bg-white p-4 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
          {/* Top Control Bar of Dashboard */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#01F2D1] animate-ping" />
              <div>
                <div className="text-base font-bold text-slate-950">
                  {activeTab === "pol" && "Electoral Intelligence & Quick Count Room"}
                  {activeTab === "gis" && "Geographic Spatial Intelligence (GIS) Engine"}
                  {activeTab === "policy" && "Indeks Kepuasan Masyarakat (IKM) & Policy Monitor"}
                  {activeTab === "social" && "IndoBERT Natural Language Sentiment Radar"}
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Proyeksi Wilayah: Seluruh Indonesia (38 Provinsi) · Sampling N=12,800
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500 hidden md:inline">Format Ekspor:</span>
              <button className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Excel (Raw)</span>
              </button>
              <button className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors">
                <FileText className="w-3.5 h-3.5 text-rose-600" />
                <span>Executive PDF</span>
              </button>
            </div>
          </div>

          {/* TAB 1: POL-INTELLIGENCE */}
          {activeTab === "pol" && (
            <div className="pt-6 space-y-6 animate-in fade-in duration-300">
              {/* Metric Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                  <div className="text-xs font-medium text-slate-500">Kandidat Terunggul</div>
                  <div className="text-2xl font-extrabold font-mono text-slate-900 mt-1">47.85%</div>
                  <div className="text-xs font-mono text-emerald-600 font-semibold mt-1">
                    ▲ +3.4% dari bulan lalu
                  </div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                  <div className="text-xs font-medium text-slate-500">Swing Voter Terdeteksi</div>
                  <div className="text-2xl font-extrabold font-mono text-amber-600 mt-1">16.30%</div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">1.25M Calon Pemilih</div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                  <div className="text-xs font-medium text-slate-500">TPS Masuk (Quick Count)</div>
                  <div className="text-2xl font-extrabold font-mono text-slate-900 mt-1">89.4%</div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">7,152 dari 8,000 TPS</div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                  <div className="text-xs font-medium text-slate-500">Tingkat Keyakinan (MoE)</div>
                  <div className="text-2xl font-extrabold font-mono text-slate-900 mt-1">± 1.85%</div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">Confidence Level 95%</div>
                </div>
              </div>

              {/* Candidates Comparison & Trend Chart Simulation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 rounded-2xl border border-slate-200 p-5 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-900">
                      Trend Elektabilitas 6 Bulan Terakhir
                    </span>
                    <span className="text-xs font-mono text-slate-500">Prophet AI Forecast</span>
                  </div>

                  {/* Visual Bar / Chart Lines */}
                  <div className="space-y-4 pt-2">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span>Paslon 01 (Koalisi Pembaharuan)</span>
                        <span className="font-mono text-slate-950 font-bold">47.8% (Tren Naik)</span>
                      </div>
                      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00d2b5] rounded-full transition-all duration-700" style={{ width: "47.8%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span>Paslon 02 (Koalisi Keberlanjutan)</span>
                        <span className="font-mono text-slate-950 font-bold">35.9% (Stabil)</span>
                      </div>
                      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-slate-800 rounded-full transition-all duration-700" style={{ width: "35.9%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span>Undecided / Swing Voters</span>
                        <span className="font-mono text-amber-600 font-bold">16.3% (Potensi Rebound)</span>
                      </div>
                      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full transition-all duration-700" style={{ width: "16.3%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                    <span>💡 <strong>Insight AI:</strong> Paslon 01 mendominasi kelompok usia 17-35 tahun (Gen Z & Milenial) dengan penetrasi 58.2%.</span>
                  </div>
                </div>

                {/* Candidate Exit Poll Breakdown */}
                <div className="lg:col-span-5 rounded-2xl border border-slate-200 p-5 bg-white">
                  <span className="text-sm font-bold text-slate-900 block mb-4">
                    Segmentasi Pemilih Mengambang (Swing)
                  </span>
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 flex justify-between items-center">
                      <div>
                        <div className="text-xs font-bold text-slate-900">Perkotaan (Urban)</div>
                        <div className="text-[11px] text-slate-500">Isu utama: Lapangan kerja & inflasi</div>
                      </div>
                      <span className="font-mono font-bold text-sm text-slate-900">42.5%</span>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 flex justify-between items-center">
                      <div>
                        <div className="text-xs font-bold text-slate-900">Pedesaan (Rural)</div>
                        <div className="text-[11px] text-slate-500">Isu utama: Pupuk subsidi & infrastruktur</div>
                      </div>
                      <span className="font-mono font-bold text-sm text-slate-900">38.2%</span>
                    </div>
                    <div className="p-3 rounded-xl border border-slate-100 bg-slate-50/70 flex justify-between items-center">
                      <div>
                        <div className="text-xs font-bold text-slate-900">Pemilih Pemula</div>
                        <div className="text-[11px] text-slate-500">Menunggu debat resmi & program beasiswa</div>
                      </div>
                      <span className="font-mono font-bold text-sm text-slate-900">19.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SPATIAL GIS */}
          {activeTab === "gis" && (
            <div className="pt-6 space-y-6 animate-in fade-in duration-300">
              {/* GIS Filter Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-slate-100/70 border border-slate-200">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-slate-700" />
                  <span className="text-xs font-bold text-slate-700">Filter Wilayah:</span>
                  {["Jawa Barat", "Jawa Timur", "Jawa Tengah", "Sumatera Utara", "Sulawesi Selatan"].map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                        selectedRegion === region
                          ? "bg-slate-950 text-white"
                          : "bg-white text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
                <div className="text-xs font-mono text-slate-500">PostGIS Layer: Poligon Kabupaten</div>
              </div>

              {/* Interactive Visual Map Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white relative min-h-[320px] flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-center z-10">
                    <div>
                      <span className="text-xs font-mono text-[#01F2D1] uppercase tracking-wider font-semibold">
                        GIS Heatmap Viewport: {selectedRegion}
                      </span>
                      <div className="text-sm font-bold mt-0.5">Pemetaan Konsentrasi Suara & Sentimen Spasial</div>
                    </div>
                    <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                      Geofence Radius: 500m
                    </span>
                  </div>

                  {/* SVG Heatmap Graphic */}
                  <div className="relative my-4 flex items-center justify-center">
                    <svg viewBox="0 0 500 180" className="w-full h-44" fill="none">
                      {/* Grid background */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.8" />
                        </pattern>
                      </defs>
                      <rect width="500" height="180" fill="url(#grid)" />

                      {/* District Polygons */}
                      <path d="M50 40 L160 30 L190 90 L110 110 Z" fill="#0284c7" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
                      <path d="M160 30 L290 45 L260 115 L190 90 Z" fill="#01F2D1" fillOpacity="0.5" stroke="#01F2D1" strokeWidth="2" />
                      <path d="M290 45 L410 40 L380 120 L260 115 Z" fill="#6366f1" fillOpacity="0.4" stroke="#818cf8" strokeWidth="1.5" />
                      <path d="M110 110 L220 100 L240 160 L130 150 Z" fill="#f59e0b" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="1.5" />
                      <path d="M220 100 L340 110 L320 165 L240 160 Z" fill="#01F2D1" fillOpacity="0.6" stroke="#01F2D1" strokeWidth="2" />

                      {/* Marker Points */}
                      <circle cx="215" cy="70" r="5" fill="#ffffff" stroke="#01F2D1" strokeWidth="2" />
                      <circle cx="280" cy="135" r="5" fill="#ffffff" stroke="#01F2D1" strokeWidth="2" />
                    </svg>

                    <div className="absolute top-10 left-1/3 bg-slate-900/90 border border-[#01F2D1] p-2.5 rounded-xl shadow-xl backdrop-blur-md text-left">
                      <div className="text-xs font-bold text-white">Kab. Bandung & Cimahi</div>
                      <div className="text-[11px] font-mono text-[#01F2D1]">Elektabilitas: 54.2% (Dominan)</div>
                      <div className="text-[10px] text-slate-300">Responden GPS Terverifikasi: 1,840</div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#01F2D1]" /> Stronghold (&gt;50%)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> Kompetitif (40-49%)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Swing Zone (&lt;40%)
                    </span>
                  </div>
                </div>

                {/* Spatial Analytics Summary */}
                <div className="lg:col-span-4 rounded-2xl border border-slate-200 p-5 bg-white flex flex-col justify-between">
                  <div>
                    <span className="text-sm font-bold text-slate-900 block mb-3">
                      Korelasi Spasial & Demografi BPS
                    </span>
                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-semibold text-slate-800">Tingkat Penetrasi Internet</div>
                        <div className="text-slate-500 text-[11px] mt-0.5">82.4% warga terpapar kampanye digital di medsos.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-semibold text-slate-800">Distribusi TPS Prioritas</div>
                        <div className="text-slate-500 text-[11px] mt-0.5">342 TPS berada di zona margin tipis (&lt;2%).</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="font-semibold text-slate-800">Kepadatan Pemilih Muda</div>
                        <div className="text-slate-500 text-[11px] mt-0.5">Konsentrasi terbesar di area universitas & sentra industri.</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono">
                    Updated via PostGIS Engine v3.4
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: POLICY & IKM */}
          {activeTab === "policy" && (
            <div className="pt-6 space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-emerald-50/50">
                  <div className="text-xs font-semibold text-emerald-800">Skor IKM Komposit</div>
                  <div className="text-3xl font-extrabold font-mono text-emerald-950 mt-1">84.62</div>
                  <div className="text-xs font-medium text-emerald-700 mt-1">Kategori: A (Sangat Baik)</div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="text-xs font-semibold text-slate-500">Jumlah Sampel Evaluasi</div>
                  <div className="text-3xl font-extrabold font-mono text-slate-900 mt-1">15,420</div>
                  <div className="text-xs text-slate-500 mt-1">Masyarakat & Pengguna Layanan</div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-rose-50/50">
                  <div className="text-xs font-semibold text-rose-800">Indeks Risiko Konflik Sosial</div>
                  <div className="text-3xl font-extrabold font-mono text-rose-950 mt-1">18.4%</div>
                  <div className="text-xs font-medium text-rose-700 mt-1">Status: Terkendali (Rendah)</div>
                </div>
              </div>

              {/* Policy Evaluation Metrics */}
              <div className="rounded-2xl border border-slate-200 p-5 bg-white">
                <span className="text-sm font-bold text-slate-900 block mb-4">
                  Evaluasi Kepuasan 5 Pilar Kebijakan Publik
                </span>
                <div className="space-y-4">
                  {[
                    { pilar: "Infrastruktur & Transportasi Jalan", skor: 88.5, status: "Sangat Puas" },
                    { pilar: "Pelayanan Kesehatan & BPJS", skor: 86.2, status: "Sangat Puas" },
                    { pilar: "Pendidikan & Bantuan Sekolah Gratis", skor: 82.0, status: "Puas" },
                    { pilar: "Kemudahan Izin Usaha & Investasi", skor: 78.4, status: "Cukup Puas" },
                    { pilar: "Pengendalian Harga Kebutuhan Pokok", skor: 69.8, status: "Perlu Intervensi" },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium text-slate-700">
                        <span>{item.pilar}</span>
                        <span className="font-mono font-bold">{item.skor}% ({item.status})</span>
                      </div>
                      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            item.skor >= 85
                              ? "bg-[#00d2b5]"
                              : item.skor >= 80
                              ? "bg-slate-800"
                              : item.skor >= 75
                              ? "bg-amber-500"
                              : "bg-rose-500"
                          }`}
                          style={{ width: `${item.skor}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SOCIAL MEDIA AI */}
          {activeTab === "social" && (
            <div className="pt-6 space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="text-xs font-medium text-slate-500">Total Percakapan Dipantau</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 mt-1">1,842,910</div>
                  <div className="text-xs text-slate-500 mt-1 font-mono">X (Twitter), TikTok, IG, Berita</div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-emerald-50/50">
                  <div className="text-xs font-medium text-emerald-800">Net Sentiment Score</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-950 mt-1">+64.2</div>
                  <div className="text-xs text-emerald-700 font-medium mt-1">Sentimen Publik Dominan Positif</div>
                </div>
                <div className="p-4 rounded-2xl border border-slate-200 bg-amber-50/50">
                  <div className="text-xs font-medium text-amber-800">Deteksi Isu Krisis</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-950 mt-1">2 Alert</div>
                  <div className="text-xs text-amber-800 font-medium mt-1">Early Warning System Aktif</div>
                </div>
              </div>

              {/* Sentiment NLP Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-6 rounded-2xl border border-slate-200 p-5 bg-white">
                  <span className="text-sm font-bold text-slate-900 block mb-4">
                    Distribusi Emosi & Sentimen (IndoBERT NLP)
                  </span>
                  <div className="flex h-6 rounded-full overflow-hidden mb-4">
                    <div className="bg-[#00d2b5]" style={{ width: "72%" }} title="Positif: 72%" />
                    <div className="bg-slate-400" style={{ width: "16%" }} title="Netral: 16%" />
                    <div className="bg-rose-500" style={{ width: "12%" }} title="Negatif: 12%" />
                  </div>
                  <div className="flex justify-between text-xs font-mono text-slate-600">
                    <span className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00d2b5]" /> Positif 72%
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Netral 16%
                    </span>
                    <span className="flex items-center gap-1.5 font-bold text-rose-600">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Negatif 12%
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-2xl border border-slate-200 p-5 bg-white">
                  <span className="text-sm font-bold text-slate-900 block mb-3">
                    Top Trending Keywords & Narasi
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { tag: "#PilkadaBersih", count: "482K mentions", tone: "pos" },
                      { tag: "Infrastruktur Digital", count: "310K mentions", tone: "pos" },
                      { tag: "Harga Pangan", count: "194K mentions", tone: "neg" },
                      { tag: "Debat Publik", count: "165K mentions", tone: "net" },
                      { tag: "Beasiswa Daerah", count: "128K mentions", tone: "pos" },
                    ].map((item, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium flex items-center gap-1.5 ${
                          item.tone === "pos"
                            ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                            : item.tone === "neg"
                            ? "bg-rose-50 text-rose-900 border-rose-200"
                            : "bg-slate-50 text-slate-800 border-slate-200"
                        }`}
                      >
                        <span className="font-bold">{item.tag}</span>
                        <span className="font-mono text-[10px] opacity-75">({item.count})</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
