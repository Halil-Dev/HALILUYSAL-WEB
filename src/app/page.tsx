import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* 1. Bölüm: Hero */}
      <Hero />

      {/* 2. Bölüm: Yönlendirme Kartları */}
      <section className="w-full max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-white">Size Nasıl Yardımcı Olabilirim?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hizmetler Yönlendirme — Tüm kart tıklanabilir */}
          <Link
            href="/services"
            id="home-services-card"
            className="block p-10 bg-secondary rounded-3xl border border-gray-800 hover:border-primary transition-all group"
          >
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
              Dijital Çözümler
            </h3>
            <p className="text-gray-400 mb-6">
              İşletmeniz için web sitesi ve otomasyon paketlerini inceleyin.
            </p>
            <span className="inline-flex items-center gap-1 text-primary font-bold">
              Hizmetleri Gör
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          {/* Hakkımda/Mühendislik Yönlendirme — Tüm kart tıklanabilir */}
          <Link
            href="/about"
            id="home-about-card"
            className="block p-10 bg-secondary rounded-3xl border border-gray-800 hover:border-primary transition-all group"
          >
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
              Mühendislik & Projeler
            </h3>
            <p className="text-gray-400 mb-6">
              Yazılım süreçlerim ve geliştirdiğim teknik projeler hakkında bilgi alın.
            </p>
            <span className="inline-flex items-center gap-1 text-primary font-bold">
              Beni Tanıyın
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}