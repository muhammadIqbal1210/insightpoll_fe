import {
  Layers,
  Compass,
  Laptop,
  Compass as CompassIcon,
  DraftingCompass,
} from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      title: "Multi-Mode Survey",
      desc: "Penggabungan presisi lapangan CAPI (Android + GPS audio), kejelasan CATI (Telepon), dan kecepatan Verified Digital Panel.",
      icon: <Layers className="w-8 h-8 stroke-[2.2]" />,
    },
    {
      title: "Hyperlocal GIS Engine",
      desc: "Pemetaan spasial isu publik dan elektoral hingga skala mikro (kecamatan, dapil, kelurahan, dan desil ekonomi masyarakat).",
      icon: <Compass className="w-8 h-8 stroke-[2.2]" />,
    },
    {
      title: "Real-time Live SaaS",
      desc: "Akses pemantauan tren sentimen, pergerakan isu, dan hasil survei secara langsung tanpa perlu menunggu tebalnya laporan PDF.",
      icon: <Laptop className="w-8 h-8 stroke-[2.2]" />,
    },
    {
      title: "Actionable Advice",
      desc: "Data diterjemahkan menjadi rekomendasi taktis berbasis simulasi skenario keputusan bagi para eksekutif dan pimpinan.",
      icon: <DraftingCompass className="w-8 h-8 stroke-[2.2]" />,
    },
  ];

  return (
    <section id="solution" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#ebf9f7] via-[#f4fcfa] to-[#ffffff] border-b border-[#c1f1eb]/50">
      {/* Background Vertical Column Lines (Harmonious with Hero) */}
      <div className="absolute inset-0 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none -z-0">
        <div className="grid grid-cols-6 h-full w-full">
          <div className="border-r border-[#c1f1eb]/30 h-full" />
          <div className="border-r border-[#c1f1eb]/30 h-full" />
          <div className="border-r border-[#c1f1eb]/30 h-full" />
          <div className="border-r border-[#c1f1eb]/30 h-full" />
          <div className="border-r border-[#c1f1eb]/30 h-full" />
          <div className="h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-[-0.04em] text-slate-900 leading-[1.12]">
            Solution
          </h2>
          <div className="w-16 h-1 bg-[#00d2b5] mx-auto my-3 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-gradient-to-b from-[#e3f9f4]/80 to-[#daf5ee]/60 hover:from-[#d5f5ec] hover:to-[#c8efe5] border border-[#a6ebd9]/60 p-8 flex flex-col items-center text-center transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,210,181,0.06)] hover:shadow-[0_12px_28px_-6px_rgba(0,210,181,0.18)] hover:-translate-y-1.5"
            >
              {/* Circular Icon */}
              <div className="mb-6 flex justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-white/80 group-hover:bg-white flex items-center justify-center text-[#00bda3] shadow-xs transition-all duration-300 border border-[#bbf2e4]/70">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#16273b] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-[1.65] text-[#334b5c] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
