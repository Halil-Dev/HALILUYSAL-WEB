"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "Hakkımda" },
    { href: "/projects", label: "Projeler" },
    { href: "/services", label: "Hizmetler" },
    { href: "/contact", label: "İletişim" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Bölümü */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden border border-white/10 group-hover:rotate-6 transition-transform">
            <img 
              src="/me.jpg" 
              alt="Halil Uysal" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col">
            {/* mb-1.5 ile ünvanla arasına istediğin o küçük boşluğu ekledik */}
            <span className="text-xl font-bold text-white tracking-tighter leading-none mb-1.5">
              Halil Uysal
            </span>
            <span className="text-[10px] text-[#10b981] font-semibold tracking-[0.15em] uppercase leading-none">
              Yazılım Mühendisi
            </span>
          </div>
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-gray-400 hover:text-[#10b981] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-[#10b981] text-black px-6 py-2.5 rounded-full font-bold hover:bg-[#059669] transition-all transform hover:scale-105"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobil Menü İçeriği */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-b border-gray-800 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-300 hover:text-[#10b981]"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-[#10b981] text-black text-center py-3 rounded-xl font-bold"
          >
            Teklif Al
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;