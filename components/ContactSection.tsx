"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Send, Clock, ShieldCheck } from "lucide-react";

export default function ContactSection() {
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
    <section id="contact" className="py-24 md:py-32 bg-[#fafcff] relative border-t border-[#ded5f8]/70 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.25] mb-6">
                Siap Membawa Riset ke Level Berikutnya?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal tracking-[0.16px] leading-[1.75] mb-10">
                Jadwalkan presentasi personal dengan analis senior kami untuk melihat kapabilitas live dashboard dan simulasi data wilayah Anda.
              </p>

              {/* Direct Info List */}
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#ded5f8] flex items-center justify-center shrink-0 text-slate-800 shadow-xs mt-0.5">
                    <Mail className="w-5 h-5 text-[#00d2b5]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Email Eksekutif</div>
                    <div className="text-base font-semibold text-slate-900 leading-relaxed">
                      intelligence@insightpoll.id
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#ded5f8] flex items-center justify-center shrink-0 text-slate-800 shadow-xs mt-0.5">
                    <Phone className="w-5 h-5 text-[#00d2b5]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Hotline &amp; WhatsApp Tim Strategis</div>
                    <div className="text-base font-semibold text-slate-900 font-mono leading-relaxed">
                      +62 811-8899-2024 / +62 21-5290-7800
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#ded5f8] flex items-center justify-center shrink-0 text-slate-800 shadow-xs mt-0.5">
                    <MapPin className="w-5 h-5 text-[#00d2b5]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-slate-500 font-medium tracking-wide uppercase">Headquarters</div>
                    <div className="text-base font-semibold text-slate-900 leading-relaxed">
                      SCBD Sudirman &amp; IKN Nusantara Intelligence Center
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-normal">Jakarta Selatan, DKI Jakarta 12190</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#ded5f8] bg-white p-6 sm:p-10 shadow-lg shadow-slate-900/5">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#c1f1eb] flex items-center justify-center text-teal-800 mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-slate-950">Permintaan Demo Terkirim!</h3>
                  <p className="mt-2 text-slate-600 max-w-md text-sm sm:text-base font-normal">
                    Terima kasih telah menghubungi InsightPoll. Senior Research Specialist kami akan segera menghubungi nomor WhatsApp <strong>{formData.phone}</strong> untuk konfirmasi jadwal presentasi live dashboard.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-[#ded5f8] px-6 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Andi Wijaya"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#ded5f8]/90 bg-[#fafcff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#00d2b5] focus:ring-2 focus:ring-[#c1f1eb]/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                        Institusi / Instansi / Lembaga *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Bappeda Prov. Jawa Barat"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#ded5f8]/90 bg-[#fafcff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#00d2b5] focus:ring-2 focus:ring-[#c1f1eb]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#ded5f8]/90 bg-[#fafcff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#00d2b5] focus:ring-2 focus:ring-[#c1f1eb]/40 transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                        Email Resmi Institusi *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="andi@instansi.go.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#ded5f8]/90 bg-[#fafcff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#00d2b5] focus:ring-2 focus:ring-[#c1f1eb]/40 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                        Kategori Organisasi
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#ded5f8]/90 bg-[#fafcff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#00d2b5] transition-all"
                      >
                        <option>Pemerintah Daerah / Kementerian</option>
                        <option>Tim Pemenangan Pemilu / Pilkada</option>
                        <option>Lembaga Survei &amp; Riset</option>
                        <option>Korporasi Publik / BUMN</option>
                        <option>Universitas / Pusat Studi</option>
                        <option>Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                        Fokus Solusi / Modul
                      </label>
                      <select
                        value={formData.module}
                        onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#ded5f8]/90 bg-[#fafcff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#00d2b5] transition-all"
                      >
                        <option>Pol-Intelligence &amp; Quick Count</option>
                        <option>Spatial Data Engine (GIS Heatmap)</option>
                        <option>Policy Insight &amp; IKM Daerah</option>
                        <option>Survey Management (Offline/Online)</option>
                        <option>Social Media AI Sentiment</option>
                        <option>Full Enterprise Suite (All-In-One)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                      Catatan Tambahan / Spesifikasi Wilayah Proyek
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Jelaskan kebutuhan target wilayah (cth: Pilkada Jawa Timur, Evaluasi IKM 12 Rumah Sakit Daerah, dsb)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#ded5f8]/90 bg-[#fafcff] text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#00d2b5] focus:ring-2 focus:ring-[#c1f1eb]/40 transition-all font-normal leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#00d2b5] text-white font-medium text-sm sm:text-base shadow-xs hover:bg-[#00be9f] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>Kirim Permohonan Presentasi &amp; Akses Demo</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-3">
                    <ShieldCheck className="w-4 h-4 text-teal-700" />
                    <span>Data Anda dilindungi kerahasiaannya dengan NDA Standar Industri.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
