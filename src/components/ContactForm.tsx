import { ArrowRight, Phone, Mail, Linkedin, MessageSquare, Users } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-primary">
            Porozmawiajmy o potrzebach Twojej uczelni
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Direct Contact Card (Optimized for Gutenberg Diagram) */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="bg-white p-10 rounded-[40px] border border-zinc-100 shadow-2xl shadow-zinc-200/50 space-y-10">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  Wolisz kontakt bezpośredni?
                </h3>
                
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 border border-zinc-200 overflow-hidden ring-4 ring-zinc-50 relative">
                    <Users size={32} strokeWidth={1.5} />
                    {/* Placeholder Text */}
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold uppercase tracking-tighter text-zinc-400 text-center px-2 leading-tight bg-zinc-100/80">
                      [Expert Photo - Grayscale]
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-display text-xl font-bold text-black">Marcin Pieńkowski</p>
                    <p className="text-sm font-medium text-text-muted">Ekspert ds. Cyfryzacji Uczelni</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+48502227174" 
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-black group-hover:bg-white group-hover:shadow-md transition-all">
                    <Phone size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-body font-bold text-zinc-700">+48 502 227 174</span>
                </a>

                <a 
                  href="mailto:hello@thinkbeyond.cloud" 
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-black group-hover:bg-white group-hover:shadow-md transition-all">
                    <Mail size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-body font-bold text-zinc-700">hello@thinkbeyond.cloud</span>
                </a>
              </div>

              <div className="pt-6 border-t border-zinc-100 flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/company/think-beyond-ux/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-zinc-200 font-bold text-sm text-zinc-600 hover:bg-zinc-50 transition-all active:scale-95"
                >
                  <Linkedin size={16} strokeWidth={2.5} />
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-zinc-200 font-bold text-sm text-zinc-600 hover:bg-zinc-50 transition-all active:scale-95"
                >
                  <MessageSquare size={16} strokeWidth={2.5} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="px-10 flex items-center gap-4 text-text-muted">
              <div className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center grayscale opacity-50">
                <img 
                  src="https://thinkbeyond.cloud/wp-content/uploads/2023/11/LOGO_TB.svg" 
                  alt="Think Beyond" 
                  className="w-5 h-5 invert brightness-0"
                />
              </div>
              <p className="text-[11px] font-medium leading-relaxed">
                Należymy do oficjalnej sieci partnerów Salesforce. Gwarantujemy najwyższe standardy implementacji.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-zinc-50 p-8 md:p-12 rounded-[40px] border border-zinc-200 shadow-sm transition-all hover:shadow-xl hover:shadow-black/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted ml-1">Imię</label>
                  <input 
                    type="text" 
                    placeholder="Twoje imię"
                    required
                    className="w-full h-14 px-6 rounded-2xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted ml-1">Uczelniany E-mail</label>
                  <input 
                    type="email" 
                    placeholder="adres@uczelnia.pl"
                    required
                    className="w-full h-14 px-6 rounded-2xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted ml-1">O czym chcesz porozmawiać?</label>
                <textarea 
                  rows={5}
                  required
                  className="w-full p-6 rounded-2xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm resize-none bg-white"
                  placeholder="Krótki opis wyzwania Twojej uczelni..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3 py-2">
                <div className="flex items-center h-5">
                  <input
                    id="gdpr"
                    name="gdpr"
                    type="checkbox"
                    required
                    className="w-4 h-4 border-zinc-300 rounded text-black focus:ring-black cursor-pointer"
                  />
                </div>
                <label htmlFor="gdpr" className="text-[11px] text-zinc-500 leading-relaxed cursor-pointer select-none">
                  Akceptuję politykę prywatności i zgadzam się na przetwarzanie danych.
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-black text-white rounded-full font-bold shadow-xl hover:bg-zinc-800 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3 group"
              >
                <span className="relative">Wyślij zapytanie</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
