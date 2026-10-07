import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Send,
  Layers,
  Sparkles,
} from "lucide-react";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Layanan Tidak Ditemukan — InsightPoll.id" };
  }
  return {
    title: `${service.title} — Detail Layanan InsightPoll.id`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related other services
  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      <Navbar />

      <main className="flex-grow pt-28 md:pt-36">
        {/* Hero Detail Section */}
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

          <div className="relative z-10 max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/layanan" className="hover:text-black transition-colors">Layanan</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 truncate max-w-[200px] sm:max-w-none">{service.title}</span>
            </div>

            {/* Back link */}
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-black bg-white/80 border border-[#ded5f8] px-3.5 py-1.5 rounded-full mb-6 transition-all hover:bg-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Semua Layanan</span>
            </Link>

            {/* Main Header */}
            <div className="max-w-[880px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-5">
                <span className="rounded-full bg-[#c1f1eb] text-slate-950 px-2.5 py-0.5 text-[11px] font-semibold">
                  {service.category}
                </span>
                <span className="text-slate-600 font-normal">
                  Rincian &amp; Metodologi Layanan
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12] mb-6">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal tracking-[0.16px] leading-[1.65] max-w-[760px] mb-8">
                {service.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-[#00d2b5] hover:bg-[#00be9f] text-slate-950 px-8 py-3.5 text-sm font-semibold transition-all shadow-xs hover:shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  Ajukan Proposal / Demo
                </Link>
                <Link
                  href="#workflow"
                  className="rounded-full border border-[#ded5f8] bg-white/90 hover:bg-white text-slate-700 px-8 py-3.5 text-sm font-medium transition-all cursor-pointer"
                >
                  Pelajari Alur Kerja
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Details Grid */}
        <section className="py-20 md:py-28 bg-[#fafcff] relative">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column (Span 8): Fitur Unggulan, Alur Kerja, Deliverables */}
              <div className="lg:col-span-8 space-y-12">
                {/* Fitur & Metodologi Unggulan */}
                <div className="rounded-3xl border border-[#ded5f8] bg-white p-8 sm:p-10 shadow-sm">
                  <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">
                    Keunggulan &amp; Metodologi Utama
                  </h2>
                  <p className="text-sm text-slate-600 font-normal mb-8">
                    Standar pengerjaan berbasis bukti statistik teruji dan pengawasan berlapis tanpa kompromi.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#c1f1eb] text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-900" />
                        </div>
                        <span className="text-sm text-slate-800 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alur Kerja / Workflow */}
                <div id="workflow" className="rounded-3xl border border-[#ded5f8] bg-white p-8 sm:p-10 shadow-sm">
                  <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">
                    Tahapan &amp; Alur Pelaksanaan
                  </h2>
                  <p className="text-sm text-slate-600 font-normal mb-8">
                    Setiap fase dieksekusi secara terstruktur dengan pelaporan transparan kepada tim klien.
                  </p>

                  <div className="relative border-l-2 border-[#00d2b5]/40 ml-4 space-y-8 pl-6">
                    {service.workflow.map((item, idx) => (
                      <div key={idx} className="relative group">
                        {/* Dot indicator */}
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#00d2b5] group-hover:scale-125 transition-transform" />
                        <h3 className="text-base font-semibold text-slate-900 mb-1.5">
                          {item.step}
                        </h3>
                        <p className="text-sm text-slate-600 font-normal leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables / Output yang Diterima */}
                <div className="rounded-3xl border border-[#ded5f8] bg-white p-8 sm:p-10 shadow-sm">
                  <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">
                    Output &amp; Deliverables Resmi
                  </h2>
                  <p className="text-sm text-slate-600 font-normal mb-8">
                    Dokumen resmi dan aset data siap guna yang diserahkan kepada pengambil kebijakan.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-gradient-to-br from-[#ebf9f7] to-white border border-[#bbf2e4] flex items-start gap-3.5"
                      >
                        <Sparkles className="w-5 h-5 text-[#00d2b5] shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-900 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (Span 4): Target Audiens, Formulir Cepat & Layanan Terkait */}
              <div className="lg:col-span-4 space-y-8 sticky top-28">
                {/* Target Pengguna / Siapa yang Membutuhkan */}
                <div className="rounded-3xl border border-[#ded5f8] bg-white p-7 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                    Ditujukan Khusus Untuk:
                  </h3>
                  <ul className="space-y-3">
                    {service.targetAudience.map((target, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#00d2b5]" />
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Konsultasi Cepat Card */}
                <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#00d2b5]/20 blur-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00d2b5] font-semibold">
                      Dedicated Specialist
                    </span>
                    <h3 className="text-xl font-semibold mt-1 mb-3">
                      Diskusikan Kebutuhan {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      Konsultasikan kebutuhan wilayah, estimasi sampel, dan jadwal riset bersama analis senior kami.
                    </p>
                    <Link
                      href="/#contact"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#00d2b5] hover:bg-[#00be9f] text-slate-950 py-3 text-xs sm:text-sm font-semibold transition-all shadow-md"
                    >
                      <span>Minta Penawaran Resmi</span>
                      <Send className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Navigasi Layanan Terkait */}
                <div className="rounded-3xl border border-[#ded5f8] bg-white p-7 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
                    Layanan Terkait Lainnya
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((other) => (
                      <Link
                        key={other.slug}
                        href={`/layanan/${other.slug}`}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-[#ded5f8]"
                      >
                        <div className="min-w-0 pr-3">
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#00d2b5] truncate transition-colors">
                            {other.title}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            {other.category}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-black transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                    <Link
                      href="/layanan"
                      className="text-xs font-semibold text-[#00d2b5] hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Lihat 10 Layanan Lengkap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
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
