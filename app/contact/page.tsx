"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Send,
  Clock,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    role: "Pemerintah Daerah / Kementerian",
    phone: "",
    email: "",
    module: "Pol-Intelligence & Quick Count",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#01F2D1]/40 selection:text-black">
      <Navbar />

      <main className="flex-grow pt-28 md:pt-36">
        {/* Hero Banner Kontak — Finorio Style */}
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
              <span className="text-slate-900">Contact</span>
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ded5f8] bg-white/90 px-3.5 py-1.5 text-xs text-slate-700 shadow-xs mb-6">
              <span className="rounded-full bg-[#c1f1eb] text-slate-950 px-2.5 py-0.5 text-[11px] font-semibold">
                Hubungi Kami
              </span>
              <span className="text-slate-600 font-normal">
                Konsultasi &amp; Kemitraan Riset
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.08] mb-6">
              Konsultasi Strategis Bersama <br className="hidden sm:block" />
              Tim Riset InsightPoll
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal tracking-[0.16px] leading-[1.65] max-w-[760px] mx-auto mb-4">
              Jadwalkan presentasi personal dengan analis senior kami untuk melihat kapabilitas live dashboard, simulasi data wilayah, atau diskusikan kebutuhan riset kustom Anda.
            </p>
          </div>
        </section>

        {/* Section Detail Kontak & Formulir */}
        <section className="py-20 md:py-28 bg-[#fafcff] relative overflow-hidden">
          <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Contact Information */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.04em] text-slate-900 leading-[1.2] mb-6">
                    Siap Membawa Riset ke Level Berikutnya?
                  </h2>
                  <div className="w-16 h-1 bg-[#00d2b5] mb-6 rounded-full" />
                  <p className="text-base text-slate-600 font-normal tracking-[0.16px] leading-[1.7] mb-10">
                    Tim kami siap merespons kebutuhan survei elektoral, evaluasi kebijakan publik (IKM), monitoring sentimen AI, hingga penerbitan publikasi karya ilmiah.
                  </p>

                  {/* Direct Info List */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#ded5f8] shadow-xs">
                      <div className="w-11 h-11 rounded-xl bg-[#c1f1eb]/50 flex items-center justify-center shrink-0 text-slate-800">
                        <Mail className="w-5 h-5 text-[#009b86]" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Email Eksekutif</div>
                        <div className="text-sm sm:text-base font-semibold text-slate-900">
                          intelligence@insightpoll.id
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#ded5f8] shadow-xs">
                      <div className="w-11 h-11 rounded-xl bg-[#c1f1eb]/50 flex items-center justify-center shrink-0 text-slate-800">
                        <Phone className="w-5 h-5 text-[#009b86]" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Hotline &amp; WhatsApp</div>
                        <div className="text-sm sm:text-base font-semibold text-slate-900 font-mono">
                          +62 811-8899-2024 / +62 21-5290-7800
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#ded5f8] shadow-xs">
                      <div className="w-11 h-11 rounded-xl bg-[#c1f1eb]/50 flex items-center justify-center shrink-0 text-slate-800">
                        <MapPin className="w-5 h-5 text-[#009b86]" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Headquarters</div>
                        <div className="text-sm sm:text-base font-semibold text-slate-900">
                          SCBD Sudirman &amp; IKN Nusantara Intelligence Center
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">Jakarta Selatan, DKI Jakarta 12190</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 flex items-center gap-3 text-xs text-emerald-800 font-medium">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Respon cepat dalam waktu maksimal 2 jam kerja (Senin - Jumat, 08:00 - 18:00 WIB).</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-[#ded5f8] bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  {submitted ? (
                    <div className="py-12 text-center flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#c1f1eb] flex items-center justify-center text-teal-800 mb-4 animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-normal tracking-tight text-slate-950">Permintaan Konsultasi Terkirim!</h3>
                      <p className="mt-2 text-slate-600 max-w-md text-sm sm:text-base font-normal">
                        Terima kasih atas kepercayaan Anda. Tim konsultan strategis InsightPoll.id akan menghubungi nomor/email Anda dalam 2 jam kerja.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-xs text-slate-500 hover:text-slate-900 underline font-medium"
                      >
                        Kirim formulir lain
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="text-xl font-normal tracking-[-0.02em] text-slate-900">
                          Formulir Permintaan Konsultasi / Demo
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Lengkapi detail singkat di bawah agar kami dapat menyiapkan simulasi data yang relevan.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                            Nama Lengkap *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Contoh: Budi Santoso"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#00d2b5] focus:bg-white focus:ring-2 focus:ring-[#00d2b5]/20"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                            Instansi / Perusahaan *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Contoh: Bappeda Prov. Jabar"
                            value={formData.org}
                            onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#00d2b5] focus:bg-white focus:ring-2 focus:ring-[#00d2b5]/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                            WhatsApp / Nomor HP *
                          </label>
                          <input
                            required
                            type="tel"
                            placeholder="Contoh: 0812-3456-7890"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#00d2b5] focus:bg-white focus:ring-2 focus:ring-[#00d2b5]/20 font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                            Email Resmi *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="nama@instansi.go.id / .com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#00d2b5] focus:bg-white focus:ring-2 focus:ring-[#00d2b5]/20"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                            Tipe Lembaga
                          </label>
                          <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#00d2b5] focus:bg-white focus:ring-2 focus:ring-[#00d2b5]/20"
                          >
                            <option>Pemerintah Daerah / Kementerian</option>
                            <option>Tim Sukses / Kandidat Pilkada</option>
                            <option>BUMN / Swasta Korporasi</option>
                            <option>Universitas / Lembaga Riset</option>
                            <option>Media Massa / Jurnalis</option>
                            <option>Lainnya</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                            Layanan yang Dibutuhkan
                          </label>
                          <select
                            value={formData.module}
                            onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#00d2b5] focus:bg-white focus:ring-2 focus:ring-[#00d2b5]/20"
                          >
                            <option>Survey Kebijakan Publik (IKM)</option>
                            <option>Riset Elektoral &amp; Konsultasi Politik</option>
                            <option>Infrastruktur Riset &amp; Olah Data Digital</option>
                            <option>Penyediaan Enumerator Lapangan Profesional</option>
                            <option>Penerbitan Buku &amp; Karya Tulis Ilmiah</option>
                            <option>Custom Enterprise / Semua Modul</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Catatan Tambahan / Lingkup Wilayah
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Jelaskan kebutuhan survei, target responden, atau cakupan wilayah..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#00d2b5] focus:bg-white focus:ring-2 focus:ring-[#00d2b5]/20 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 rounded-full bg-[#00d2b5] py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#00be9f] hover:shadow-lg active:scale-[0.99] cursor-pointer"
                      >
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Kirim Permintaan Konsultasi</span>
                      </button>

                      <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 pt-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Kerahasiaan data instansi dan identitas Anda dijamin 100% aman (NDA Ready).</span>
                      </div>
                    </form>
                  )}
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
