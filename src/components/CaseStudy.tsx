import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CaseStudy() {
  const features = [
    { title: "Koniec z papierem", subtitle: "E-DOKUMENTY I E-PODPISY" },
    { title: "Samoobsługa studentów", subtitle: "WIĘKSZA AUTONOMIA" },
    { title: "Widok 360°", subtitle: "PEŁNA HISTORIA W JEDNYM MIEJSCU" },
    { title: "Nowoczesne Call Center", subtitle: "SZYBKIE ODPOWIEDZI" },
  ];

  return (
    <section id="case-study" className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto bg-white border border-zinc-100 rounded-[60px] p-8 md:p-16 lg:p-24 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12 space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-zinc-200 rounded-full">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                Case Study · Uniwersytet SWPS
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-black">
                Zobacz, jak SWPS uwolnił dziekanat od papierologii i kolejek.
              </h2>
              <p className="font-body text-xl text-zinc-500 leading-relaxed max-w-lg">
                Zastąpiliśmy ręczne procesy i tonę papieru jednym cyfrowym Centrum Spraw Studenckich
              </p>
            </div>

            <Link 
              href="#contact"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-base hover:bg-zinc-800 transition-all shadow-2xl hover:shadow-black/20 group"
            >
              Poznaj szczegóły
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-7/12 space-y-8">
            {/* Grid of 4 small cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-zinc-50/50 p-8 rounded-[24px] border border-zinc-100/50 space-y-4"
                >
                  <h4 className="font-body font-bold text-2xl text-black">
                    {feature.title}
                  </h4>
                  <p className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    {feature.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Live Status Banner */}
            <div className="bg-black rounded-[24px] p-8 flex items-center justify-between group overflow-hidden relative">
               {/* Subtle gradient background */}
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-black opacity-50" />
               
               <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 bg-[#1a1a1a] border border-zinc-800 rounded-2xl flex items-center justify-center text-white font-bold text-sm tracking-tighter">
                    SWPS
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-white font-bold text-lg">Uniwersytet SWPS</h5>
                    <p className="text-zinc-500 text-sm">Wdrożenie Education Cloud + Genesys Cloud</p>
                  </div>
               </div>

               <div className="relative z-10 flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
