"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, Check } from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px -50% 0px" }
    );

    const sections = ["problems", "solutions", "case-study", "about"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#problems", label: "Problem", id: "problems" },
    { href: "#solutions", label: "Rozwiązania", id: "solutions" },
    { href: "#case-study", label: "Case Study", id: "case-study" },
    { href: "#about", label: "O nas", id: "about" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-zinc-200 h-16 rounded-full shadow-2xl px-6 flex items-center justify-between pointer-events-auto">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 group">
          <GraduationCap size={28} className="text-black" />
          <span className="font-display text-lg font-bold tracking-tight text-black whitespace-nowrap hidden sm:block">Edu Cloud Partner</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${activeSection === link.id ? "text-black" : "text-text-muted hover:text-black"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="#contact"
            className="bg-black text-white px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-black/20 whitespace-nowrap flex items-center gap-2 group/btn"
          >
            Darmowa konsultacja
            <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center group-hover/btn:bg-white/30 transition-colors">
              <Check size={10} strokeWidth={3} className="text-white" />
            </div>
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-full text-black hover:bg-zinc-100 transition-colors"
          >
            {isMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-24 left-6 right-6 bg-white/95 backdrop-blur-md border border-zinc-200 rounded-[32px] shadow-2xl overflow-hidden transition-all duration-300 pointer-events-auto ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={closeMenu}
              className={`px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all ${activeSection === link.id ? "bg-black text-white" : "text-text-muted hover:bg-zinc-50 hover:text-black"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
