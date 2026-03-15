"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      { 
        threshold: 0.1, 
        rootMargin: "-10% 0px -40% 0px" 
      }
    );

    const sections = ["hero", "problems", "solutions", "case-study", "about", "contact"];
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

  // Logic: 
  // Desktop (>= 768px): Always visible.
  // Mobile (< 768px): Hide when at top (Hero) or before trigger (assumed top).
  const isCtaVisible = !isMobile || (activeSection !== "" && activeSection !== "hero");

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-zinc-200 h-auto py-[12px] rounded-full shadow-2xl px-10 flex items-center justify-between pointer-events-auto">
        <div className="flex-none flex justify-start">
          <a 
            href="https://thinkbeyond.cloud/" 
            className="flex items-center transition-transform hover:scale-105 active:scale-95 group decoration-transparent no-underline"
          >
            <img 
              src="/Think-Beyond-UX/logo.svg" 
              alt="Think Beyond" 
              className="h-9 w-auto transition-transform group-hover:scale-105 duration-300"
            />
          </a>
        </div>

        <div className="flex-1 flex items-center justify-end gap-10">
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${activeSection === link.id ? "text-black" : "text-text-muted hover:text-black"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="opacity-100 translate-x-0 pointer-events-auto transition-all duration-500 ease-in-out">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-xl hover:shadow-black/20 whitespace-nowrap flex items-center justify-center gap-2 group/btn text-sm"
              >
                Darmowa konsultacja
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-full text-black hover:bg-zinc-100 transition-colors"
            >
              {isMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
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
    <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
);
}
