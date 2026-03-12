export function SocialProof() {
  const logos = [
    { name: "Uni Logo 1 (SWPS)", id: 1 },
    { name: "Uni Logo 2", id: 2 },
    { name: "Uni Logo 3", id: 3 },
    { name: "Uni Logo 4", id: 4 },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-12">
          <h3 className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
            Zaufali nam liderzy edukacji
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {logos.map((logo) => (
              <div 
                key={logo.id}
                className="h-16 bg-bg-page border border-border-muted rounded-lg flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              >
                <span className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-wider">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-bg-page p-12 rounded-card border border-border-muted relative text-center space-y-6">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-2xl font-display italic shadow-xl">
            "
          </div>
          <blockquote className="font-display text-2xl md:text-3xl text-text-primary leading-snug italic">
            "Dzięki integracji Salesforce i Genesys Cloud, czas obsługi zgłoszeń rekrutacyjnych skrócił się o 40%, a satysfakcja kandydatów znacząco wzrosła."
          </blockquote>
          <cite className="block not-italic">
            <span className="font-body font-bold text-text-primary">Agata Wysocka</span>
            <span className="text-text-muted text-sm border-l border-border-muted ml-3 pl-3">Dyrektor ds. Cyfryzacji, Uniwersytet SWPS</span>
          </cite>
        </div>
      </div>
    </section>
  );
}
