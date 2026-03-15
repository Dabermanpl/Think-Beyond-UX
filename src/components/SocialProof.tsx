"use client";

import { useState } from "react";
import { School, GraduationCap, Building2, ChevronDown, Plus } from "lucide-react";

export function SocialProof() {
  const [activeTab, setActiveTab] = useState(1);

  const clients = [
    {
      id: 1,
      name: "Uniwersytet SWPS",
      icon: School,
      description: "Uniwersytet SWPS to lider nowoczesnej edukacji w Polsce, kształcący ponad 17 500 studentów w 5 miastach.",
      quote: "Zrozumienie procesów biznesowych i celów organizacji sprawia, że Think Beyond staje się godnym zaufania partnerem w implementacji skomplikowanych rozwiązań Salesforce.",
      author: "Agata Wysocka",
      role: "UNIWERSYTET SWPS"
    },
    {
      id: 2,
      name: "Akademia Leona Koźmińskiego",
      icon: GraduationCap,
      description: "Najwyżej oceniana uczelnia biznesowa w Europie Środkowo-Wschodniej według rankingu Financial Times.",
      quote: "Dzięki Think Beyond proces rekrutacji na studia MBA stał się w pełni cyfrowy i intuicyjny. Odciążyliśmy administrację i znacząco poprawiliśmy candidate experience naszych kandydatów.",
      author: "Dr Jan Kowalski (UX Placeholder)",
      role: "DYREKTOR DS. ROZWOJU I CYFRYZACJI"
    },
    {
      id: 3,
      name: "Collegium Da Vinci",
      icon: Building2,
      description: "Uczelnia ludzi ciekawych z Poznania, stawiająca na praktyczną współpracę z biznesem od ponad 25 lat.",
      quote: "Współpraca z Think Beyond to koniec ery Excela w naszym dziekanacie. Jeden spójny system Salesforce pozwolił nam na budowę prawdziwych relacji ze studentami przez cały cykl ich kształcenia.",
      author: "Anna Nowak (UX Placeholder)",
      role: "KANCLERZ UCZELNI"
    }
  ];

  const activeClient = clients.find(c => c.id === activeTab) || clients[0];

  return (
    <section className="py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-12">
          <h3 className="text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            Zaufali nam liderzy edukacji
          </h3>
          
          {/* Desktop Tabs */}
          <div className="hidden md:flex flex-row gap-6 justify-center scrollbar-hide">
            {clients.map((client) => {
              const Icon = client.icon;
              return (
                <button
                  key={client.id}
                  onClick={() => setActiveTab(client.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 whitespace-nowrap ${
                    activeTab === client.id 
                      ? "bg-black border-black text-white shadow-md shadow-black/5" 
                      : "bg-white border-zinc-200 text-zinc-400 hover:border-zinc-300 hover:text-zinc-600"
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

          {/* Mobile Accordion */}
          <div className="md:hidden space-y-4">
            {clients.map((client) => {
              const Icon = client.icon;
              const isActive = activeTab === client.id;
              return (
                <div key={client.id} className="space-y-0 overflow-hidden">
                  <button
                    onClick={() => setActiveTab(isActive ? 0 : client.id)}
                    className={`w-full flex items-center justify-between p-6 transition-all duration-300 border ${
                      isActive 
                        ? "bg-black border-black text-white rounded-t-2xl" 
                        : "bg-white border-zinc-200 text-zinc-600 rounded-2xl"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-zinc-800 text-white' : 'bg-zinc-50 text-black'}`}>
                        <Icon size={20} />
                      </div>
                      <span className="font-display font-bold text-base tracking-tight">{client.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       {isActive ? <Plus size={20} className="rotate-45 transition-transform" /> : <ChevronDown size={20} className="text-zinc-300" />}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 invisible"
                  }`}>
                    <div className="p-8 bg-zinc-50/50 rounded-b-2xl border-x border-b border-zinc-100 space-y-8">
                       <p className="font-body text-base text-zinc-600 leading-relaxed border-l-2 border-black/10 pl-4">
                        {client.description}
                      </p>
                      
                      <div className="space-y-6">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="font-display text-xl md:text-2xl text-black leading-tight italic">
                          "{client.quote}"
                        </blockquote>
                        <div className="space-y-1">
                          <span className="font-display text-lg font-bold block text-black">
                            {client.author}
                          </span>
                          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block">
                            {client.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Content Box */}
        <div className="hidden md:flex max-w-4xl mx-auto bg-zinc-50 border border-zinc-200 p-8 md:p-16 rounded-[40px] shadow-2xl shadow-zinc-200/50 relative min-h-[500px] md:min-h-[450px] flex-col justify-center">
          <div key={activeTab} className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Top Part: University Description */}
            <p className="font-body text-lg text-zinc-500 leading-relaxed">
              {activeClient.description}
            </p>

            {/* Bottom Part: Quote & Details */}
            <div className="space-y-8 pt-10 border-t border-zinc-200">
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
          </div>
        </div>
      </div>
    </section>
  );
}
