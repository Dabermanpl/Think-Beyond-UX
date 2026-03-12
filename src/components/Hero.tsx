import { ArrowRight, CheckCircle2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full">
              <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                Edu Cloud Partner · Higher Education
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight text-text-primary">
              Nowoczesna rekrutacja i obsługa studenta.
            </h1>
            
            <p className="font-body text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
              Zbuduj cyfrowy uniwersytet, który przyciąga kandydatów, eliminuje papierowe procesy i skraca czas odpowiedzi.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Pełna automatyzacja procesu rekrutacji",
                "Obsługa studenta 360 w jednym widoku",
                "E-podpis i obieg dokumentów"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-600 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-black" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact" 
              className="bg-black text-white px-8 py-4 rounded-pill font-bold shadow-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group"
            >
              Porozmawiajmy o transformacji
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#case-study" 
              className="bg-white text-black border-2 border-zinc-200 px-8 py-4 rounded-pill font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-3"
            >
              Zobacz Case Study
            </Link>
          </div>
        </div>

        <div className="relative group">
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
            <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center">
              <div className="w-5 h-5 bg-black rounded flex items-center justify-center text-[10px] text-white">✓</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Status</div>
              <div className="text-sm font-bold text-black">Aplikacja Przyjęta</div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-black text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-subtle-delayed">
             <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
             </div>
             <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Analiza AI</div>
              <div className="text-sm font-bold">Weryfikacja profilu...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
