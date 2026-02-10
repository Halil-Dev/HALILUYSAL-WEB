import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-start pt-4 md:pt-8 pb-2 px-4 overflow-hidden">
      
      {/* Arka plan ışık efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-2 md:mt-4">
        
        {/* Üst Rozet */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Türkiye Genelinde Dijital Hizmet
        </div>
        
        {/* Başlık */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Dijital Dünyada <br />
          <span className="text-emerald-500 tracking-tighter">Fark Yaratan</span> Çözümler
        </h1>
        
        {/* Açıklama */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          Modern, hızlı ve SEO uyumlu sistemler tasarlıyoruz. İşletmenizi dijital dünyada en iyi şekilde temsil ediyoruz.
        </p>

        {/* BUTONLAR: Kesin Tıklanabilir Yapı */}
        <div className="w-full flex justify-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 bg-transparent p-1">

            {/* 1. Hemen Mesaj At */}
            <a 
              href="https://wa.me/905444100368"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[240px] flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 py-4 rounded-xl transition-all font-semibold group cursor-pointer"
            >
              <MessageCircle size={18} className="text-emerald-500" /> 
              <span className="uppercase text-sm">Hemen Mesaj At</span>
            </a>
            
            {/* 2. Hemen Ara */}
            <a 
              href="tel:+905444100368"
              className="w-[240px] flex items-center justify-center gap-2 bg-[#0a0a0a] text-white border border-white/10 hover:border-emerald-500/50 py-4 rounded-xl transition-all font-semibold cursor-pointer"
            >
              <Phone size={18} className="text-emerald-500" /> 
              <span className="uppercase text-sm">Hemen Ara</span>
            </a>

            {/* 3. Ücretsiz Teklif Al */}
            <a 
              href="/contact" 
              className="w-[240px] group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <span className="uppercase text-sm">Ücretsiz Teklif Al</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;