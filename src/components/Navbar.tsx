import Link from "next/link";
import { MessageSquare } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-page/80 backdrop-blur-md border-b border-border-muted h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="font-body font-bold text-xl tracking-tight text-text-primary">
          Edu Cloud Partner
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#problems" className="text-sm font-medium text-text-muted hover:text-black transition-colors">
            Problem
          </Link>
          <Link href="#solutions" className="text-sm font-medium text-text-muted hover:text-black transition-colors">
            Rozwiązania
          </Link>
          <Link href="#case-study" className="text-sm font-medium text-text-muted hover:text-black transition-colors">
            Case Study
          </Link>
          <Link href="#about" className="text-sm font-medium text-text-muted hover:text-black transition-colors">
            O nas
          </Link>
        </div>

        <Link 
          href="#contact" 
          className="bg-black text-white px-6 py-2.5 rounded-pill text-sm font-semibold hover:bg-zinc-800 transition-colors"
        >
          Darmowa konsultacja
        </Link>
      </div>
    </nav>
  );
}
