"use client";

import { X, ArrowRight, Phone, Mail, Linkedin, MessageSquare, Users } from "lucide-react";
import { useEffect } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 overflow-y-auto pointer-events-auto">
        {/* Dark Overlay - Click to close */}
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-40 pointer-events-auto"
          onClick={onClose}
        />

        {/* Modal Container - Higher z-index to stay above overlay */}
        <div className="relative z-50 w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 pointer-events-auto">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-zinc-100 transition-all z-[60] text-zinc-400 hover:text-black"
            aria-label="Zamknij"
          >
            <X size={24} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 h-full">
            {/* Left Column: Direct Contact Card (Mirroring ContactForm.tsx Left) */}
            <div className="bg-zinc-50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-100 flex flex-col justify-center space-y-10">
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-black text-center md:text-left">
                  Wolisz kontakt bezpośredni?
                </h3>
                
                <div className="flex items-center gap-6 justify-center md:justify-start">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-zinc-300 border border-zinc-100 shadow-sm overflow-hidden relative ring-4 ring-zinc-100/50">
                    <Users size={32} strokeWidth={1.5} />
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold uppercase tracking-tighter text-zinc-400 text-center px-1 bg-zinc-50/90 leading-tight">
                      [Expert Photo]
                    </div>
                  </div>
                  <div>
                    <p className="font-display font-bold text-black text-xl leading-tight">Marcin Pieńkowski</p>
                    <p className="text-sm font-medium text-zinc-400">Ekspert ds. Cyfryzacji Uczelni</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="tel:+48502227174" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-300 transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-black group-hover:bg-zinc-100 transition-all">
                    <Phone size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-body font-bold text-zinc-700 text-sm italic">+48 502 227 174</span>
                </a>

                <a 
                  href="mailto:hello@thinkbeyond.cloud" 
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-300 transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-black group-hover:bg-zinc-100 transition-all">
                    <Mail size={18} strokeWidth={2.5} />
                  </div>
                  <span className="font-body font-bold text-zinc-700 text-sm">hello@thinkbeyond.cloud</span>
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/company/think-beyond-ux/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-zinc-200 bg-white font-bold text-sm text-zinc-600 hover:bg-zinc-50 transition-all shadow-sm active:scale-95"
                >
                  <Linkedin size={18} strokeWidth={2.5} />
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border border-zinc-200 bg-white font-bold text-sm text-zinc-600 hover:bg-zinc-50 transition-all shadow-sm active:scale-95"
                >
                  <MessageSquare size={18} strokeWidth={2.5} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form (Mirroring ContactForm.tsx Right) */}
            <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4 leading-tight">
                    Umów darmową konsultację
                  </h2>
                  <p className="font-body text-sm text-zinc-500 leading-relaxed">
                    Zostaw dane, a nasz ekspert skontaktuje się z Tobą, aby omówić cyfrową transformację Twojej uczelni.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">Imię</label>
                    <input 
                      type="text" 
                      placeholder="Twoje imię"
                      required
                      className="w-full h-12 px-5 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm bg-zinc-50/50"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">Uczelniany E-mail</label>
                    <input 
                      type="email" 
                      placeholder="adres@uczelnia.pl"
                      required
                      className="w-full h-12 px-5 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm bg-zinc-50/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 ml-1">O czym chcesz porozmawiać?</label>
                    <textarea 
                      rows={3}
                      required
                      className="w-full p-5 rounded-xl border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all font-body text-sm resize-none bg-zinc-50/50"
                      placeholder="Krótki opis wyzwania Twojej uczelni..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 py-1">
                    <div className="flex items-center h-5">
                      <input
                        id="modal-gdpr-optimized"
                        name="gdpr"
                        type="checkbox"
                        required
                        className="w-4 h-4 border-zinc-300 rounded text-black focus:ring-black cursor-pointer"
                      />
                    </div>
                    <label htmlFor="modal-gdpr-optimized" className="text-[10px] text-zinc-500 leading-normal cursor-pointer select-none">
                      Akceptuję <a href="/polityka-prywatnosci" className="underline hover:text-black transition-colors">politykę prywatności</a> i zgadzam się na przetwarzanie danych.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-black text-white rounded-full font-bold shadow-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group/btn"
                  >
                    <span className="relative">Umów darmową konsultację</span>
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
