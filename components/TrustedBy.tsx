import { Building2, Landmark, GraduationCap, Vote, Briefcase, BarChart2 } from "lucide-react";

export default function TrustedBy() {
  const clients = [
    {
      icon: Landmark,
      label: "Kementerian RI",
      sub: "Kementerian & Lembaga Negara",
    },
    {
      icon: Building2,
      label: "BUMN Indonesia",
      sub: "Holding & Korporasi Publik",
    },
    {
      icon: Landmark,
      label: "Pemerintah Daerah",
      sub: "Pemprov, Pemkab & Bappeda",
    },
    {
      icon: Vote,
      label: "Konsultan Politik",
      sub: "Tim Pemenangan Nasional & Daerah",
    },
    {
      icon: GraduationCap,
      label: "Universitas & Riset",
      sub: "Pusat Studi Kebijakan Publik",
    },
    {
      icon: Briefcase,
      label: "Lembaga Survei",
      sub: "Riset Opini & Market Insight",
    },
  ];

  return (
    <section className="py-14 border-y border-[#ded5f8]/70 bg-white/70 relative">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
            Dipercaya & Dirancang untuk Pengambil Keputusan Strategis Indonesia
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-[#ded5f8]/80 bg-white/90 shadow-xs transition-all duration-200 hover:border-[#00d2b5] hover:shadow-md hover:-translate-y-0.5 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-[#c1f1eb] group-hover:text-slate-900 transition-colors mb-2.5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 tracking-tight">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 font-normal">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
