import { Users } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200 rounded-full">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                  O nas · Nasza misja
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-primary">
                Poznaj ekspertów, którzy rozumieją Twój biznes
              </h2>
              
              <p className="font-body text-base md:text-lg text-text-muted leading-relaxed">
                Jesteśmy butikową firmą doradczą założoną przez byłych architektów z Wielkiej Czwórki (PwC). 
                Odrzucamy korporacyjny żargon. Wierzymy w partnerskie relacje, dlatego rozmawiasz bezpośrednio 
                z ekspertami, którzy projektują cyfrowe rozwiązania dla Twojej uczelni, a nie z armią handlowców.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://thinkbeyond.cloud/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-zinc-800 hover:scale-[1.02] shadow-xl hover:shadow-black/20"
              >
                <img 
                  src="https://thinkbeyond.cloud/wp-content/uploads/2023/11/LOGO_TB.svg" 
                  alt="Think Beyond" 
                  className="w-8 h-8 invert brightness-0"
                />
                <span>Sprawdź w czym mozemy Ci pomóc</span>
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative group">
            <div className="relative aspect-[4/5] bg-white rounded-[40px] border border-zinc-200 shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
              {/* Subtle Grayscale Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-black rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-black rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-6 text-zinc-200">
                <div className="w-24 h-24 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center">
                  <Users size={48} strokeWidth={2.5} color="black" />
                </div>
                <div className="text-center space-y-1">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Team Photo Placeholder</div>
                  <div className="text-xs text-zinc-300 italic">Friendly Founders & Team</div>
                </div>
              </div>

              {/* Minimalist Floating Label */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-black">Fundacja Partnerstwa</div>
                  <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">Relacje {" > "} Handlowcy</div>
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                  <Users size={16} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
