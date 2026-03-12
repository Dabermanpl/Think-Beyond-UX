import Link from "next/link";
import { Linkedin, Twitter, Cloud } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center">
                <Cloud size={18} className="text-zinc-400" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">Edu Cloud Partner</span>
            </div>
            <p className="font-body text-sm text-zinc-400 leading-relaxed max-w-[240px]">
              Autoryzowany Partner Salesforce specjalizujący się w transformacji cyfrowej uczelni wyższych.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              ☁ Edu Cloud Partner
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <Linkedin size={14} className="text-zinc-400" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors">
                <Twitter size={14} className="text-zinc-400" />
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
              {["O nas", "Case Studies", "Blog", "Kariera"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-body text-sm text-zinc-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-6">
            <h4 className="font-body text-sm font-bold uppercase tracking-wider">Prawo</h4>
            <ul className="space-y-3">
              {["Polityka Prywatności", "Regulamin", "RODO / GDPR"].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-body text-sm text-zinc-400 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:row items-center justify-between gap-6">
          <p className="font-body text-xs text-zinc-500">
            © 2026 Edu Cloud Partner. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="font-body text-xs text-zinc-500 hover:text-white transition-colors">Polityka prywatności</Link>
            <Link href="#" className="font-body text-xs text-zinc-500 hover:text-white transition-colors">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
