import { MessageCircle, User } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-text-primary">
              Najlepsze projekty zaczynają się od dokładnej analizy potrzeb.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-bg-page border border-border-muted flex items-center justify-center text-[#CCCCCC]">
                <User size={32} />
              </div>
              <div>
                <p className="font-body font-bold text-text-primary">Tomasz Kowalski</p>
                <p className="text-sm text-text-muted italic">Ekspert ds. transformacji cyfrowej</p>
              </div>
            </div>

            <button className="flex items-center gap-3 px-6 py-3 border border-black text-black rounded-pill font-semibold hover:bg-zinc-50 transition-colors group">
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              Napisz na Messengerze
            </button>
          </div>
        </div>

        <div className="bg-zinc-50 p-8 md:p-12 rounded-card border border-border-muted shadow-sm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted">Imię</label>
                <input 
                  type="text" 
                  placeholder="Twoje imię"
                  className="w-full h-12 px-4 rounded-lg border border-border-muted focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted">Uczelniany E-mail</label>
                <input 
                  type="email" 
                  placeholder="adres@uczelnia.pl"
                  className="w-full h-12 px-4 rounded-lg border border-border-muted focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted">O czym chcesz porozmawiać?</label>
              <textarea 
                rows={4}
                className="w-full p-4 rounded-lg border border-border-muted focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm resize-none bg-white"
                placeholder="Krótki opis Twojego wyzwania..."
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
              <label htmlFor="gdpr" className="text-xs text-zinc-500 leading-relaxed cursor-pointer select-none">
                Akceptuję politykę prywatności i wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania.
              </label>
            </div>

            <button className="w-full py-4 bg-black text-white rounded-pill font-bold shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all active:scale-[0.98]">
              Wyślij zapytanie
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
