"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-[#e5e5e5] z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/sineratics_logo.png" 
              alt="Sineratics" 
              width={180} 
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Inicio
            </Link>
            <Link href="/servicios" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Servicios
            </Link>
            <Link href="/portfolio" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Portfolio
            </Link>
            <Link href="/sobre-nosotros" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Sobre Nosotros
            </Link>
            <Link 
              href="/contacto" 
              className="bg-black text-white px-6 py-2 text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 w-6"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-full bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-[#e5e5e5] pt-4">
            <Link href="/" className="block text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/servicios" className="block text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
            <Link href="/portfolio" className="block text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/sobre-nosotros" className="block text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              Sobre Nosotros
            </Link>
            <Link 
              href="/contacto" 
              className="block bg-black text-white px-6 py-2 text-sm font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}



