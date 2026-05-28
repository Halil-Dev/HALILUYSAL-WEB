"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Bölümü */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden border border-white/10 group-hover:rotate-6 transition-transform">
            <Image
              src="/me.jpg"
              alt="Halil Uysal"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-tighter leading-none mb-1.5">
              Halil Uysal
            </span>
            <span className="text-[10px] text-primary font-semibold tracking-[0.15em] uppercase leading-none">
              Yazılım Mühendisi
            </span>
          </div>
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors relative pb-0.5",
                pathname === link.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary"
                  : "text-gray-400 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-black px-6 py-2.5 rounded-full font-bold hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="text-white p-1"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobil Menü İçeriği */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-b border-gray-800 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg transition-colors",
                pathname === link.href ? "text-primary font-semibold" : "text-gray-300 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-black text-center py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
          >
            Teklif Al
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;