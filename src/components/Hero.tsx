"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { PHONE_URL, WHATSAPP_URL } from "@/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-[55vh] flex flex-col items-center justify-start pt-6 md:pt-10 pb-4 px-4 overflow-hidden">
      {/* Arka plan ışık efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[130px] -z-10" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-2 md:mt-4">
        {/* Üst Rozet */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Türkiye Genelinde Dijital Hizmet
        </motion.div>

        {/* Başlık */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Dijital Dünyada <br />
          <span className="text-emerald-500 tracking-tighter">Fark Yaratan</span> Çözümler
        </motion.h1>

        {/* Açıklama */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Modern, hızlı ve SEO uyumlu sistemler tasarlıyoruz. İşletmenizi dijital dünyada en iyi
          şekilde temsil ediyoruz.
        </motion.p>

        {/* Butonlar */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="w-full flex justify-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Hemen Mesaj At */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="w-[240px] flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10 hover:border-emerald-500/40 py-4 rounded-xl transition-all font-semibold"
            >
              <MessageCircle size={18} className="text-emerald-500" />
              <span className="uppercase text-sm">Hemen Mesaj At</span>
            </a>

            {/* Hemen Ara */}
            <a
              href={PHONE_URL}
              id="hero-call-btn"
              className="w-[240px] flex items-center justify-center gap-2 bg-[#0a0a0a] text-white border border-white/10 hover:border-emerald-500/50 py-4 rounded-xl transition-all font-semibold"
            >
              <Phone size={18} className="text-emerald-500" />
              <span className="uppercase text-sm">Hemen Ara</span>
            </a>

            {/* Ücretsiz Teklif Al */}
            <a
              href="/contact"
              id="hero-quote-btn"
              className="w-[240px] group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
            >
              <span className="uppercase text-sm">Ücretsiz Teklif Al</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;