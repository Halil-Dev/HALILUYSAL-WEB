import React from 'react';
import { Globe, Cpu, Zap } from 'lucide-react';

const services = [
  {
    title: "Modern ve Güven Veren Web Siteleri",
    description: "İlk izlenim her şeydir. Alfa Eğitim gibi markalara yaptığımız gibi, sizi rakiplerinizden ayıran, telefonlarda kusursuz görünen ve Google'da kolayca bulunan profesyonel siteler tasarlıyoruz.",
    icon: <Globe className="text-[#10b981]" size={32} />,
    features: ["Telefon ve Tablet Uyumlu", "Google'da Görünür Olun", "Kolay Yönetim Paneli"]
  },
  {
    title: "Akıllı İş Çözümleri ve Kolaylıklar",
    description: "Tekrarlayan işlerden sıkıldınız mı? Dershane yönetim sistemlerinden müşterilerinize anında cevap veren WhatsApp asistanlarına kadar, işinizi cebinizden yönetmenizi sağlayacak sistemler kuruyoruz.",
    icon: <Cpu className="text-[#10b981]" size={32} />,
    features: ["Müşteri Randevu Sistemleri", "Otomatik WhatsApp Botları", "Hızlı İş Takibi"]
  }
];

const ServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Hayallerinizdeki İşletmeyi <br />
          <span className="text-[#10b981]">Dijitalle</span> Büyütelim
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Sadece bir web sitesi değil; işinizi kolaylaştıran, müşterilerinize güven veren ve sizin için durmadan çalışan dijital bir kimlik oluşturuyoruz.
        </p>
      </div>

      {/* Grid yapısını 2 sütuna çektik ve kart genişliklerini dengeledik */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="p-10 bg-[#111827]/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-[#10b981]/50 transition-all group flex flex-col h-full">
            <div className="mb-6 p-4 bg-gray-900 w-fit rounded-2xl group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-base">
              {service.description}
            </p>
            <div className="mt-auto">
              <ul className="space-y-4 border-t border-gray-800 pt-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                    <Zap size={16} className="text-[#10b981] shrink-0" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;