"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "@/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-gray-800 bg-[#050505]/80 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Marka */}
        <div>
          <span className="text-xl font-bold text-white tracking-tighter">Halil Uysal</span>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-xs">
            Türkiye genelinde modern web tasarımı, otomasyon ve yazılım çözümleri sunuyorum.
          </p>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Sayfalar</h4>
          <ul className="space-y-3">
            {[
              { href: "/about", label: "Hakkımda" },
              { href: "/services", label: "Hizmetler" },
              { href: "/projects", label: "Projeler" },
              { href: "/contact", label: "İletişim" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">İletişim</h4>
          <ul className="space-y-3">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={PHONE_URL}
                className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm"
              >
                <Phone size={15} /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm"
              >
                <Mail size={15} /> {EMAIL}
              </a>
            </li>
          </ul>
          {/* Sosyal Medya */}
          <div className="flex gap-4 mt-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-gray-800 hover:border-primary text-gray-500 hover:text-primary transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-gray-800 hover:border-primary text-gray-500 hover:text-primary transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="E-Posta"
              className="p-2 rounded-lg border border-gray-800 hover:border-primary text-gray-500 hover:text-primary transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Alt çizgi */}
      <div className="border-t border-gray-800/50 py-5 text-center text-gray-600 text-xs">
        © {year} Halil Uysal — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
