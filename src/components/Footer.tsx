import Link from "next/link";
import { Linkedin, Cloud, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="https://thinkbeyond.cloud/" className="flex items-center gap-4 decoration-transparent no-underline">
              <img 
                src="/Think-Beyond-UX/logo.svg" 
                alt="Think Beyond" 
                className="h-10 md:h-12 w-auto invert brightness-200"
              />
            </a>
            <p className="font-body text-sm text-zinc-400 leading-relaxed max-w-[280px]">
              Eksperci od Salesforce dla uczelni wyższych. Cyfrowa transformacja rekrutacji i obsługi studenta.
            </p>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500 rounded-full" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Salesforce Certified Partner</span>
            </div>
            <div className="flex gap-3">
              <Link 
                href="https://www.linkedin.com/company/think-beyond-ux/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-all hover:scale-105"
              >
                <Linkedin size={18} className="text-zinc-400" />
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h4 className="font-body text-sm font-bold uppercase tracking-wider">Rozwiązania</h4>
            <ul className="space-y-3">
              {["Platforma Rekrutacyjna", "Centrum Spraw Studenckich", "E-podpis", "Call Center"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-body text-sm text-zinc-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="font-body text-sm font-bold uppercase tracking-wider">Firma</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://thinkbeyond.cloud/" className="font-body text-sm text-zinc-400 hover:text-white transition-colors">Strona Główna</a>
              </li>
              {["O nas", "Case Studies", "Blog", "Kontakt"].map((item) => (
                <li key={item}>
                  <Link href={item === "Kontakt" ? "#contact" : "#"} className="font-body text-sm text-zinc-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Optimized for B2B) */}
          <div className="space-y-6">
            <h4 className="font-body text-sm font-bold uppercase tracking-wider text-white">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+48502227174" className="flex items-center gap-3 font-body text-sm text-zinc-400 hover:text-white transition-colors group">
                  <Phone size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                  +48 502 227 174
                </a>
              </li>
              <li>
                <a href="mailto:hello@thinkbeyond.cloud" className="flex items-center gap-3 font-body text-sm text-zinc-400 hover:text-white transition-colors group">
                  <Mail size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                  hello@thinkbeyond.cloud
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-[10px] text-zinc-600">
            © 2026 Think Beyond. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="font-body text-[10px] text-zinc-500 hover:text-white transition-colors">Polityka prywatności</Link>
            <Link href="#" className="font-body text-[10px] text-zinc-500 hover:text-white transition-colors">Polityka plików Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
