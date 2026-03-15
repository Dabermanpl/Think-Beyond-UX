import { ArrowRight, UserPlus, LayoutDashboard, FileSignature, ThumbsUp, ClockArrowDown, Image as ImageIcon, MousePointer2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full">
              <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                Education Cloud · Higher Education
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-5xl leading-[1.15] font-bold tracking-tight text-text-primary">
              Koniec z papierologią. Zbuduj jeden spójny system dla dziekanatu i studentów.
            </h1>
            
            <p className="font-body text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
              Zbuduj cyfrowy uniwersytet, który przyciąga kandydatów, eliminuje papierowe procesy i skraca czas odpowiedzi.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                { text: "Koniec z ręcznym przepisywaniem danych z rekrutacji", icon: <UserPlus size={18} strokeWidth={2.5} color="black" /> },
                { text: "Obsługa studenta 360 w jednym widoku", icon: <LayoutDashboard size={18} strokeWidth={2.5} color="black" /> },
                { text: "E-podpis i obieg dokumentów", icon: <FileSignature size={18} strokeWidth={2.5} color="black" /> }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-600 font-medium text-sm">
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact" 
              className="bg-black text-white px-8 py-4 rounded-pill font-bold shadow-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group"
            >
              Darmowa konsultacja
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="relative group z-10">
          {/* Main Visual Placeholder */}
          <div className="relative aspect-[4/3] bg-zinc-50 rounded-[32px] border-2 border-zinc-100 p-2 shadow-2xl transition-transform group-hover:scale-[1.02] duration-500">
            <div className="w-full h-full bg-white rounded-[24px] border border-zinc-100 flex flex-col overflow-hidden">
               <div className="h-10 border-b border-zinc-100 bg-zinc-50/50 flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-200" />
                  <div className="w-2 h-2 rounded-full bg-zinc-200" />
                  <div className="w-2 h-2 rounded-full bg-zinc-200" />
               </div>
               <div className="flex-1 flex flex-col items-center justify-center gap-4 text-zinc-300">
                  <ImageIcon size={64} strokeWidth={1} />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">Portal Studencki OS</span>
               </div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl border border-zinc-100 shadow-xl flex items-center gap-4 animate-bounce-subtle">
            <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-black">
              <ClockArrowDown size={20} strokeWidth={2.5} />
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Efektywność</div>
              <div className="text-sm font-bold text-black">Znaczna redukcja czasu obsługi</div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl border border-zinc-100 shadow-xl flex items-center gap-4 animate-bounce-subtle-delayed">
             <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center">
                <ThumbsUp size={20} strokeWidth={2.5} className="text-black" />
             </div>
             <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Satysfakcja</div>
              <div className="text-sm font-bold text-black">Wzrost satysfakcji kandydatów</div>
            </div>
          </div>

          {/* Figma-style Collaborative Elements */}
          {/* Avatar 1: Agata W. */}
          <div className="absolute top-1/4 -left-12 flex flex-col items-start animate-float pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center relative z-10 transition-transform hover:scale-110">
              <span className="text-[10px] font-bold text-zinc-500">AW</span>
            </div>
            <div className="bg-white border border-zinc-100 p-3 rounded-2xl rounded-tl-none shadow-xl max-w-[180px] -mt-2 ml-4">
              <p className="text-[11px] text-zinc-600 leading-snug">
                "Zrozumienie procesów biznesowych."
              </p>
              <div className="mt-1 text-[8px] font-bold text-zinc-400 uppercase tracking-tight">Agata W. | SWPS</div>
            </div>
          </div>

          {/* Avatar 2: Kamila D. */}
          <div className="absolute top-1/2 -right-16 flex flex-col items-end animate-float-delayed pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-zinc-100 border-2 border-white shadow-lg overflow-hidden flex items-center justify-center relative z-10 transition-transform hover:scale-110">
              <span className="text-[10px] font-bold text-zinc-500">KD</span>
            </div>
            <div className="bg-white border border-zinc-100 p-3 rounded-2xl rounded-tr-none shadow-xl max-w-[180px] -mt-2 mr-4">
              <p className="text-[11px] text-zinc-600 leading-snug">
                "Szybkie wdrożenie, pełne wsparcie."
              </p>
              <div className="mt-1 text-[8px] font-bold text-zinc-400 uppercase tracking-tight">Kamila D. | Dział HR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
