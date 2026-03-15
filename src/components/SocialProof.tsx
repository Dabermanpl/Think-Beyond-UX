"use client";

import { useState } from "react";
import { School, GraduationCap, Building2 } from "lucide-react";

export function SocialProof() {
  const [activeTab, setActiveTab] = useState(1);

  const clients = [
    {
      id: 1,
      name: "Uniwersytet SWPS",
      icon: School,
      description: "Uniwersytet SWPS jest jedną z największych prywatnych uczelni w Polsce, ze społecznością ponad 17.500 studentów. Posiada kampusy w największych polskich miastach.",
      quote: "Zrozumienie procesów biznesowych i celów organizacji sprawia, że Think Beyond staje się godnym zaufania partnerem w implementacji skomplikowanych rozwiązań Salesforce.",
      author: "Agata Wysocka",
      role: "UNIWERSYTET SWPS"
    },
    {
      id: 2,
      name: "Akademia Leona Koźmińskiego",
      icon: GraduationCap,
      description: "Akademia Leona Koźmińskiego to uczelnia niepubliczna w Warszawie. Uznana w rankingach za „najlepiej oceniany uniwersytet w Polsce”. Studiuje tu ponad 12.000 studentów.",
      quote: "Dzięki wdrożeniu rozwiązań chmurowych z Think Beyond, zoptymalizowaliśmy procesy w dziekanacie. To partner, który doskonale rozumie specyfikę edukacji wyższej.",
      author: "Jan Kowalski",
      role: "PROREKTOR DS. CYFRYZACJI"
    },
    {
      id: 3,
      name: "Collegium Da Vinci",
      icon: Building2,
      description: "Collegium Da Vinci w Poznaniu to jedna z najstarszych niepublicznych uczelni w Wielkopolsce. Od ponad 27 lat działa na rynku, współpracując z prawie 200 partnerami.",
      quote: "Zespół Think Beyond odrzucił korporacyjny żargon i zaprojektował dla nas architekturę, która drastycznie skróciła czas obsługi studentów.",
      author: "Anna Nowak",
      role: "KANCLERZ UCZELNI"
    }
  ];

  const activeClient = clients.find(c => c.id === activeTab) || clients[0];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-12">
          <h3 className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            Zaufali nam liderzy edukacji
          </h3>
          
          <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-row gap-4 md:gap-6 justify-start md:justify-center scrollbar-hide">
            {clients.map((client) => {
              const Icon = client.icon;
              return (
                <button
                  key={client.id}
                  onClick={() => setActiveTab(client.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 whitespace-nowrap ${
                    activeTab === client.id 
                      ? "bg-black border-black text-white shadow-xl shadow-black/10 scale-105" 
                      : "bg-white border-zinc-200 text-zinc-400 hover:border-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-display text-sm font-bold tracking-tight">
                    {client.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-50 border border-zinc-200 p-8 md:p-16 rounded-[40px] shadow-sm relative">
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Top Part: University Description */}
            <p className="font-body text-lg text-zinc-500 leading-relaxed">
              {activeClient.description}
            </p>

            {/* Divider */}
            {/* Bottom Part: Quote & Details (Only for SWPS / Client ID 1) */}
            {activeClient.id === 1 && (
              <div className="space-y-8">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="font-display text-2xl md:text-3xl text-black leading-tight italic">
                  "{activeClient.quote}"
                </blockquote>

                <div className="space-y-1">
                  <span className="font-display text-xl font-bold text-black block">
                    {activeClient.author}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block">
                    {activeClient.role}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
