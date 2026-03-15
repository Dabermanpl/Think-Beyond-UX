import { Zap, Orbit, Fingerprint, Headphones } from "lucide-react";

export function Solution() {
  const solutions = [
    {
      title: "Platforma rekrutacyjna",
      description: "Zdalny proces od A do Z. Kandydat przesyła dokumenty online, a system automatycznie weryfikuje ich poprawność. Koniec z kolejkami.",
      icon: <Zap size={24} strokeWidth={2.5} color="black" />,
    },
    {
      title: "Centrum Spraw Studenckich 360°",
      description: "Jeden widok na wszystkie interakcje studenta. Szybka obsługa wniosków, pism i zaświadczeń w jednym zintegrowanym systemie.",
      icon: <Orbit size={24} strokeWidth={2.5} color="black" />,
    },
    {
      title: "E-podpis & Cyfrowe procesy",
      description: "Pełna automatyzacja wydawania decyzji i zaświadczeń. Bezpieczny e-podpis eliminuje potrzebę papierowego obiegu dokumentów.",
      icon: <Fingerprint size={24} strokeWidth={2.5} color="black" />,
    },
    {
      title: "Dedykowane Call Center",
      description: "Błyskawiczna odpowiedź na pytania kandydatów dzięki integracji z Genesys Cloud. Student zawsze wie, na jakim etapie jest jego sprawa.",
      icon: <Headphones size={24} strokeWidth={2.5} color="black" />,
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-8 leading-[1.15]">
            Zastąp chaos jednym, płynnie działającym ekosystemem.
          </h2>
          <p className="font-body text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Łączymy potęgę Salesforce z naszym doświadczeniem, aby odciążyć Twoją administrację i dać studentom komfort, jakiego oczekują.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col gap-6 p-8 bg-white border border-zinc-100 rounded-[32px] hover:shadow-2xl hover:shadow-zinc-200/50 hover:border-black transition-all group"
            >
              <div className="text-black">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h4 className="font-body font-bold text-lg text-text-primary leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
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
