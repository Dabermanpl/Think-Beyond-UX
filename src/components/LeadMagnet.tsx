import { Download, Image as ImageIcon, ArrowRight, CheckCircle, FileX, Zap, MailX } from "lucide-react";

export function LeadMagnet() {
  return (
    <section id="case-study" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-2 border-black rounded-[32px] p-8 md:p-14 text-black overflow-hidden relative grid lg:grid-cols-2 gap-16 items-start">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          
          <div className="space-y-10 relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full">
                <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                  Case Study · Uniwersytet SWPS
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-text-primary">
                Zobacz, jak Uniwersytet SWPS przeszedł na cyfrową obsługę.
              </h2>
              
              <p className="font-body text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
                Transformacja pozwoliła uczelni zrezygnować z tradycyjnych metod opartych na papierze na rzecz technologii. Każdy wniosek, każde zaświadczenie, każda komunikacja — w pełni cyfrowa.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-pill font-bold shadow-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group">
                Pobierz Case Study
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="bg-white text-black border-2 border-zinc-200 px-8 py-4 rounded-pill font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 group">
                Poznaj szczegóły
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Cyfrowe procesy", value: "100%", icon: <CheckCircle size={20} className="text-black" /> },
                { label: "Formularzy papierowych", value: "0", icon: <FileX size={20} className="text-black" /> },
                { label: "Szybsza obsługa", value: "3×", icon: <Zap size={20} className="text-black" /> },
                { label: "Mniej zapytań e-mail", value: "68%", icon: <MailX size={20} className="text-black" /> },
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-4xl font-bold tracking-tight">{stat.value}</div>
                    {stat.icon}
                  </div>
                  <div className="font-body text-xs text-zinc-500 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Implementation Details */}
            <div className="bg-black text-white p-8 rounded-2xl flex items-center justify-between gap-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center font-bold text-lg">
                  SWPS
                </div>
                <div className="space-y-1">
                  <div className="font-bold">Uniwersytet SWPS</div>
                  <div className="text-xs text-zinc-400 max-w-[200px]">
                    Wdrożenie Salesforce Service Cloud + Experience Cloud
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest relative z-10">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                Live
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
