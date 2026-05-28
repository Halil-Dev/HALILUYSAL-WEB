import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Globe, Cpu, Code2, Zap, ArrowRight } from "lucide-react";
import { SERVICES, WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Kurumsal web sitesi, otomasyon sistemleri ve full-stack uygulama geliştirme hizmetleri. İşletmenizi dijital dünyada büyütelim.",
};

const ICONS: Record<string, React.ReactNode> = {
  web: <Globe className="text-primary" size={32} />,
  automation: <Cpu className="text-primary" size={32} />,
  fullstack: <Code2 className="text-primary" size={32} />,
};

const ServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Başlık */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Hayallerinizdeki İşletmeyi <br />
          <span className="text-primary">Dijitalle</span> Büyütelim
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Sadece bir web sitesi değil; işinizi kolaylaştıran, müşterilerinize güven veren ve sizin
          için durmadan çalışan dijital bir kimlik oluşturuyoruz.
        </p>
      </div>

      {/* Hizmet Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="p-8 bg-secondary/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-primary/50 transition-all group flex flex-col h-full"
          >
            <div className="mb-6 p-4 bg-gray-900 w-fit rounded-2xl group-hover:scale-110 transition-transform">
              {ICONS[service.id]}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm flex-1">
              {service.description}
            </p>
            <div className="mt-auto">
              <ul className="space-y-3 border-t border-gray-800 pt-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                    <Zap size={15} className="text-primary shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Bölümü */}
      <div className="relative rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm p-10 md:p-14 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative">
          Hangi hizmete ihtiyacınız var?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto relative">
          Projenizi anlatalım, sizin için en uygun çözümü ve fiyatı birlikte belirleyelim. İlk
          görüşme tamamen ücretsiz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
          <Link
            href="/contact"
            id="services-quote-btn"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 rounded-xl transition-all group shadow-lg shadow-primary/20"
          >
            Ücretsiz Teklif Al
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="services-whatsapp-btn"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 text-white font-semibold px-8 py-4 rounded-xl transition-all"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;