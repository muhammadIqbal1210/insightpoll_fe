import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Zap,
  Target,
  BrainCircuit,
  ShieldCheck,
  Compass,
  ArrowRight,
  ChevronRight,
  Users,
  Globe2,
  BookOpenCheck,
  BarChart3,
  Quote,
  User,
} from "lucide-react";

export const metadata = {
  title: "Tentang Kami — Visi, Misi, Core Values & Kepemimpinan InsightPoll.id",
  description:
    "Mengenal InsightPoll.id, lembaga riset dan media publikasi yang menjembatani data ilmiah dengan realitas publik berlandaskan nilai FAST (Fast, Actionable, Smart, Trusted).",
};

interface LeaderProfile {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  image?: string; // Jalur file foto (contoh: /leaders/arya.jpg)
  avatarBg: string;
  avatarText: string;
}

const leaders: LeaderProfile[] = [
  {
    name: "Dr. Arya Wicaksana, M.Si.",
    role: "Direktur Eksekutif & Founder",
    expertise: "Metodologi Riset Opini Publik & Analisis Kebijakan",
    bio: "Berpengalaman lebih dari 15 tahun memimpin survei elektoral nasional, pemodelan demografi pemilih, dan mendesain kerangka pengukuran Indeks Kepuasan Masyarakat (IKM).",
    avatarBg: "from-slate-800 via-slate-900 to-slate-950",
    avatarText: "AW",
  },
  {
    name: "Rendra Prasetya, M.Kom.",
    role: "Chief Technology & Data Officer",
    expertise: "Arsitektur Big Data, AI Sentiment & Spatial GIS",
    bio: "Pakar rekayasa platform data real-time, pengolahan geospasial berbasis satelit, serta integrasi pemrosesan bahasa alami (NLP) untuk monitoring media sosial berskala masif.",
    avatarBg: "from-slate-800 via-slate-900 to-slate-950",
    avatarText: "RP",
  },
  {
    name: "Dr. Nabila Safitri, M.A.",
    role: "Direktur Riset & Metodologi Ilmiah",
    expertise: "Statistika Terapan & Peer-Reviewed Publication",
    bio: "Akademisi dan konsultan riset yang memastikan seluruh instrumen survei berstandar ilmiah ketat, margin of error terukur presisi, dan terpublikasi di jurnal bereputasi.",
    avatarBg: "from-slate-800 via-slate-900 to-slate-950",
    avatarText: "NS",
  },
  {
    name: "Dimas Anggara, S.I.Kom., M.M.",
    role: "Direktur Media, Narasi & Publikasi",
    expertise: "Jurnalisme Data, Diseminasi Publik & Media Portal",
    bio: "Praktisi media senior yang berfokus membumikan angka-angka statistik menjadi narasi jurnalisme data yang mudah dipahami, independen, dan berdampak bagi publik.",
    avatarBg: "from-slate-800 via-slate-900 to-slate-950",
    avatarText: "DA",
  },
  {
    name: "Kartika Rahmayanti, M.P.A.",
    role: "Direktur Operasional Lapangan & Jaringan",
    expertise: "Manajemen Enumerator Lapangan & Quality Control",
    bio: "Mengorkestrasi jaringan ribuan surveyor terlatih di 38 provinsi dengan sistem verifikasi berlapis GPS, rekam audio acak, dan zero-tolerance validasi data palsu.",
    avatarBg: "from-slate-800 via-slate-900 to-slate-950",
    avatarText: "KR",
  },
];

const coreValues = [
  {
    letter: "F",
    keyword: "Fast",
    title: "Cepat & Responsif",
    desc: "Menghadirkan agregasi data, analisis situasi, dan laporan intelijen secara tepat waktu untuk merespons dinamika sosial-politik yang bergerak dalam hitungan menit.",
    icon: Zap,
    badgeBg: "bg-[#c1f1eb] text-slate-950",
    badgeLabel: "Fast Response",
  },
  {
    letter: "A",
    keyword: "Actionable",
    title: "Dapat Diterapkan",
    desc: "Setiap angka dan temuan diolah menjadi rekomendasi konkret yang dapat langsung dieksekusi menjadi kebijakan publik unggul atau strategi pemenangan nyata.",
    icon: Target,
    badgeBg: "bg-[#ded5f8] text-slate-950",
    badgeLabel: "Action-Driven",
  },
  {
    letter: "S",
    keyword: "Smart",
    title: "Cerdas & Ilmiah",
    desc: "Menggabungkan metodologi riset akademik berstandar global dengan kecanggihan AI sentiment analytics dan Geographic Information System (GIS).",
    icon: BrainCircuit,
    badgeBg: "bg-[#c4dffa] text-slate-950",
    badgeLabel: "Smart Analytics",
  },
  {
    letter: "T",
    keyword: "Trusted",
    title: "Kredibel & Terpercaya",
    desc: "Berkomitmen pada independensi, transparansi metodologi sampling, verifikasi bertingkat, serta integritas moral tanpa kompromi.",
    icon: ShieldCheck,
    badgeBg: "bg-[#bbf7d0] text-slate-950",
    badgeLabel: "Trusted Ethics",
  },
];

const missions = [
  {
    num: "01",
    title: "Menghadirkan Riset & Navigasi Data yang Presisi",
    desc: "Menjalankan survei opini publik, riset elektoral, dan kajian kepuasan dengan metodologi ilmiah yang ketat serta sampling representatif untuk menghasilkan navigasi arah yang akurat.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Membumikan Data Melalui Narasi & Media Publik",
    desc: "Menerjemahkan data statistik yang rumit menjadi visualisasi interaktif dan narasi jurnalisme yang edukatif, memikat, serta dapat dikonsumsi dengan mudah oleh masyarakat luas.",
    icon: Globe2,
  },
  {
    num: "03",
    title: "Menjadi Mesin Operasional Riset & Ekosistem Akademik",
    desc: "Menyediakan infrastruktur riset komprehensif mulai dari jaringan ribuan enumerator terverifikasi, verifikasi biometrik, hingga integrasi laboratorium data bagi universitas.",
    icon: Users,
  },
  {
    num: "04",
    title: "Memfasilitasi Ekosistem Publikasi Ilmiah & Literasi",
    desc: "Mendukung para peneliti, akademisi, dan analis dalam proses publikasi karya ilmiah bereputasi, penerbitan monograf, serta peningkatan literasi berbasis fakta bagi bangsa.",
    icon: BookOpenCheck,
  },
  {
    num: "05",
    title: "Mengembangkan Platform Digital yang Berkelanjutan",
    desc: "Membangun ekosistem SaaS data intelijen yang modern, aman, berskala enterprise, dan mudah diakses oleh pengambil keputusan di tingkat daerah maupun nasional.",
    icon: BarChart3,
  },
];

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      <Navbar />

      <main className="flex-grow pt-28 md:pt-36">
        {/* HERO SECTION */}
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
              <span className="text-slate-900">Tentang Kami</span>
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
              <span className="rounded-full bg-[#c1f1eb] text-slate-950 px-2.5 py-0.5 text-[11px] font-semibold">
                About InsightPoll
              </span>
              <span className="text-slate-600 font-normal">
                Profil Lembaga &amp; Nilai Dasar
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.08] mb-6">
              Menjembatani Data Ilmiah <br className="hidden sm:block" />
              dengan Realitas Publik
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 font-normal tracking-[0.16px] leading-[1.65] max-w-[760px] mx-auto mb-10">
              InsightPoll.id hadir sebagai katalis transformasi data di Indonesia—mengubah persepsi menjadi kepastian, dan mengubah angka statistik menjadi kebijakan strategis yang berdampak bagi kemajuan bangsa.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="#visi-misi"
                className="rounded-full bg-[#00d2b5] hover:bg-[#00be9f] text-white px-8 py-3 text-sm font-medium transition-all shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Visi &amp; Misi
              </Link>
              <Link
                href="#leadership"
                className="rounded-full border border-[#ded5f8] bg-white/90 hover:bg-white text-slate-700 px-8 py-3 text-sm font-medium transition-all shadow-xs hover:shadow-md cursor-pointer"
              >
                Dewan Pimpinan
              </Link>
            </div>
          </div>
        </section>

        {/* VISI & MISI SECTION */}
        <section id="visi-misi" className="py-20 md:py-28 bg-[#fafcff] relative overflow-hidden border-b border-slate-100">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Visi Card */}
              <div className="lg:col-span-5 rounded-3xl bg-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-[0_16px_36px_-8px_rgba(15,23,42,0.25)] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#00d2b5]/15 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00d2b5] text-xs font-mono font-medium tracking-wide mb-6">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Visi Lembaga</span>
                  </div>

                  <Quote className="w-10 h-10 text-[#00d2b5]/40 mb-4" />

                  <blockquote className="text-lg sm:text-xl font-normal leading-[1.6] text-slate-100 tracking-[-0.01em]">
                    &ldquo;Menjadi lembaga riset dan media publikasi terdepan yang menjembatani data ilmiah dengan realitas publik—memastikan setiap suara masyarakat terukur secara presisi, setiap kebijakan dan strategi berdasar fakta, serta setiap gagasan ilmiah terpublikasi secara luas dan mendidik.&rdquo;
                  </blockquote>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>INSIGHTPOLL MANIFESTO</span>
                  <span className="text-[#00d2b5] font-semibold">EST. INDONESIA</span>
                </div>
              </div>

              {/* Misi Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="mb-6">
                  <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
                    5 Pilar Misi Strategis
                  </h2>
                  <div className="w-16 h-1 bg-[#00d2b5] my-3.5 rounded-full" />
                  <p className="text-sm sm:text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.6]">
                    Komitmen berkelanjutan kami untuk mewujudkan ekosistem kebijakan berbasis data di Indonesia.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {missions.map((m) => (
                    <div
                      key={m.num}
                      className="group rounded-2xl bg-white p-5 sm:p-6 border border-[#ded5f8] hover:border-[#00d2b5] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-6px_rgba(0,210,181,0.15)] transition-all duration-300 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 font-mono font-medium text-xs flex items-center justify-center shrink-0 group-hover:bg-[#00d2b5] group-hover:text-white transition-colors">
                        {m.num}
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base font-normal text-slate-900 group-hover:text-slate-950 transition-colors">
                          {m.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-[1.6]">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES (FAST) SECTION */}
        <section className="py-20 md:py-28 bg-white relative overflow-hidden border-b border-slate-100">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-[760px] mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white px-3.5 py-1 text-xs text-slate-700 shadow-xs mb-3">
                <span className="font-semibold text-slate-900">Core Values</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
                Nilai Inti FAST
              </h2>
              <div className="w-16 h-1 bg-[#00d2b5] mx-auto my-3.5 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.6]">
                Empat prinsip fundamental yang menjadi kompas kerja seluruh analis, tim riset, dan teknologi InsightPoll.id.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.keyword}
                    className="group rounded-3xl bg-white p-7 border border-[#ded5f8] hover:border-[#00d2b5] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-6px_rgba(0,210,181,0.2)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white font-normal text-xl flex items-center justify-center shadow-xs">
                          {val.letter}
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${val.badgeBg}`}>
                          {val.badgeLabel}
                        </span>
                      </div>

                      <h3 className="text-xl font-normal tracking-[-0.02em] text-slate-900 mb-2">
                        {val.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-[1.6]">
                        {val.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Icon className="w-4 h-4 text-[#00d2b5]" />
                      <span>Standar Mutu Pelayanan</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5 LEADERSHIP PROFILES SECTION — Layout Modern Khusus Foto */}
        <section id="leadership" className="py-20 md:py-28 bg-[#fafcff] relative overflow-hidden">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-[760px] mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white px-3.5 py-1 text-xs text-slate-700 shadow-xs mb-3">
                <Users className="w-3.5 h-3.5 text-slate-700" />
                <span className="font-semibold text-slate-900">Leadership Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
                Dewan Pimpinan &amp; Tokoh Riset
              </h2>
              <div className="w-16 h-1 bg-[#00d2b5] mx-auto my-3.5 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.6]">
                Dipimpin oleh dewan direksi berpengalaman dalam metodologi riset ilmiah, arsitektur data geospasial, jurnalisme publikasi, dan tata kelola operasional lapangan nasional.
              </p>
            </div>

            {/* Layout Grid: 2 baris (Baris 1: 3 pimpinan, Baris 2: 2 pimpinan terpusat) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {leaders.map((leader, idx) => (
                <div
                  key={leader.name}
                  className={`group rounded-3xl bg-white border border-[#ded5f8] hover:border-[#00d2b5] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-8px_rgba(0,210,181,0.2)] hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden ${
                    idx === 3 ? "lg:col-start-1 lg:col-span-1" : idx === 4 ? "lg:col-start-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Container Foto Profil Portret (Rasio 4:5 / 1:1) */}
                  <div className="relative aspect-[4/3] sm:aspect-[4/3.5] w-full bg-slate-900 overflow-hidden">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* Placeholder visual elegan dengan inisial & siluet sebelum foto diunggah */
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex flex-col items-center justify-center relative p-6">
                        {/* Decorative background grid subtle */}
                        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                        <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 border-2 border-white/10 shadow-inner flex items-center justify-center group-hover:border-[#00d2b5]/50 group-hover:scale-110 transition-all duration-300">
                          <span className="text-2xl font-mono font-medium text-white tracking-wider">
                            {leader.avatarText}
                          </span>
                        </div>

                        <div className="relative z-10 mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-[11px] font-mono text-slate-300">
                          <User className="w-3 h-3 text-[#00d2b5]" />
                          <span>Foto Profil Pimpinan</span>
                        </div>
                      </div>
                    )}

                    {/* Gradient overlay di bagian bawah foto */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                    {/* Tag Role di atas foto */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-slate-900 shadow-xs">
                        {leader.role}
                      </span>
                    </div>
                  </div>

                  {/* Body Keterangan Profil */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg sm:text-xl font-normal tracking-[-0.02em] text-slate-900 leading-snug group-hover:text-slate-950">
                        {leader.name}
                      </h3>

                      <div className="mt-2.5 mb-4">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200/50">
                          {leader.expertise}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-[1.65]">
                        {leader.bio}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>InsightPoll Leadership</span>
                      <span className="font-medium text-slate-700">Verified Profile</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="pb-20 md:pb-28 bg-[#fafcff]">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-12 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#00d2b5]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
                <h3 className="text-2xl sm:text-3xl font-normal tracking-[-0.03em]">
                  Siap Berkolaborasi Berbasis Fakta &amp; Riset Terukur?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  Diskusikan kebutuhan survei opini publik, monitoring evaluasi kebijakan, atau publikasi ilmiah Anda bersama dewan riset InsightPoll.id.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto relative z-10">
                <Link
                  href="/layanan"
                  className="w-full sm:w-auto text-center px-8 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition"
                >
                  Lihat 10 Layanan
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#00d2b5] hover:bg-[#00be9f] px-8 py-3 text-sm font-medium text-white transition shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Hubungi Tim Riset</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
