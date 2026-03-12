import { Share2, Smartphone, ShieldCheck, Headphones } from "lucide-react";

export function Solution() {
  const solutions = [
    {
      title: "Platforma rekrutacyjna",
      description: "Zdalny proces od A do Z. Kandydat przesyła dokumenty online, a system automatycznie weryfikuje ich poprawność. Koniec z kolejkami.",
      icon: <Share2 size={24} />,
    },
    {
      title: "Centrum Spraw Studenckich 360°",
      description: "Jeden widok na wszystkie interakcje studenta. Szybka obsługa wniosków, pism i zaświadczeń w jednym zintegrowanym systemie.",
      icon: <Smartphone size={24} />,
    },
    {
      title: "E-podpis & Cyfrowe procesy",
      description: "Pełna automatyzacja wydawania decyzji i zaświadczeń. Bezpieczny e-podpis eliminuje potrzebę papierowego obiegu dokumentów.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Dedykowane Call Center",
      description: "Błyskawiczna odpowiedź na pytania kandydatów dzięki integracji z Genesys Cloud. Student zawsze wie, na jakim etapie jest jego sprawa.",
      icon: <Headphones size={24} />,
    },
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-primary">
            Wydajność i nowoczesność dostępna od dziś
          </h2>
          <p className="font-body text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Nasze rozwiązania łączą potęgę Salesforce z najlepszymi praktykami w UX, aby stworzyć uniwersytet jutra.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col gap-6 p-8 bg-white border border-border-muted rounded-card hover:border-black transition-all"
            >
              <div className="text-black">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h4 className="font-body font-bold text-lg text-text-primary leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
