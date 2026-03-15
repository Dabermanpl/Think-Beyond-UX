import { Users, CheckCircle2 } from "lucide-react";

export function AboutUs() {
  const features = [
    "Współpraca partnerska, a nie tylko jednorazowe wdrożenie",
    "Zrozumienie procesów specyficznych dla edukacji wyższej",
    "Bezpośredni kontakt z architektami Salesforce"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-primary">
                Poznaj ekspertów, którzy rozumieją Twój biznes
              </h2>
              
              <p className="font-body text-base md:text-lg text-text-muted leading-relaxed">
                Jesteśmy butikową firmą doradczą założoną przez byłych architektów z Wielkiej Czwórki. 
                Odrzucamy korporacyjny żargon. Wierzymy w partnerskie relacje, dlatego rozmawiasz bezpośrednio 
                z inżynierami, którzy projektują cyfrowe rozwiązania dla Twojej uczelni, a nie z armią handlowców.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-black shrink-0 mt-0.5" />
                  <span className="font-body text-zinc-700 font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="relative group">
            <div className="relative aspect-square bg-white rounded-[40px] border border-zinc-200 shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
              {/* Subtle Grayscale Background Pattern */}
              <div className="absolute inset-0 bg-zinc-100 opacity-50" />
              
              <div className="relative z-10 flex flex-col items-center gap-6 text-zinc-400">
                <div className="w-24 h-24 bg-zinc-50 border border-zinc-200 rounded-full flex items-center justify-center shadow-inner">
                  <Users size={48} strokeWidth={1.5} className="text-zinc-600" />
                </div>
                <div className="text-center space-y-1">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                    [Friendly Founders/Team Photo Placeholder - Grayscale]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
