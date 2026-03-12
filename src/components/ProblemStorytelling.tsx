import { FileText, Users, Monitor } from "lucide-react";

export function ProblemStorytelling() {
  const painPoints = [
    {
      title: "Papierologia i kolejki",
      description: "Tysiące papierowych wniosków, które gubią się w obiegu i zmuszają studentów do stania w kolejkach do dziekanatu.",
      icon: <FileText className="text-primary" size={24} />,
    },
    {
      title: "Chaos komunikacyjny",
      description: "Informacje rozproszone po wielu systemach, Excelach i mailach. Brak jednego źródła prawdy o kandydacie.",
      icon: <Users className="text-primary" size={24} />,
    },
    {
      title: "Ograniczona samoobsługa",
      description: "Student musi przyjść osobiście, by załatwić prostą sprawę. Brak nowoczesnych narzędzi mobilnych.",
      icon: <Monitor className="text-primary" size={24} />,
    },
  ];

  return (
    <section id="problems" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-tight font-medium">
            Dlaczego tradycyjne podejście do obsługi studenta już nie wystarcza?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="p-8 bg-white border border-border-muted rounded-card space-y-6 hover:shadow-xl hover:border-black transition-all group"
            >
              <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:scale-110 transition-all [&_svg]:group-hover:text-white [&_svg]:text-black">
                {point.icon}
              </div>
              <div className="space-y-3">
                <h4 className="font-body font-bold text-xl text-text-primary">{point.title}</h4>
                <p className="font-body text-text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
