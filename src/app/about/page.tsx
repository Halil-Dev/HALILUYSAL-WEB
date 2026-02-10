import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
        Ben <span className="text-[#10b981]">Halil Uysal</span>
      </h1>
      
      <p className="text-gray-400 text-lg leading-relaxed mb-12">
        Teknolojiye olan tutkumla, işletmelerin dijital dünyada fark yaratmasını sağlayan profesyonel yazılım çözümleri geliştiriyorum. 
        Mehmet Akif Ersoy Üniversitesi'nde sürdürdüğüm yazılım mühendisliği eğitimimi; iş süreçlerini kolaylaştıran akıllı sistemler, 
        modern web teknolojileri ve kullanıcı dostu tasarımlar üzerine yoğunlaştırıyorum. Hedefim, karmaşık görünen teknolojik süreçleri 
        işletmeniz için basit ve verimli hale getirmektir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Uzmanlık & Yetkinlik */}
        <div className="p-8 bg-[#111827]/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-[#10b981]/30 transition-colors">
          <h3 className="text-xl font-bold mb-6 text-white">Uzmanlık & Yetkinlik</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-[#10b981] font-bold text-xl leading-none">•</span>
              <span>Kullanıcı Dostu Web Uygulamaları</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#10b981] font-bold text-xl leading-none">•</span>
              <span>İş Kolaylaştıran Otomasyon Sistemleri</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#10b981] font-bold text-xl leading-none">•</span>
              <span>Modern Arayüz ve Tasarım Çözümleri</span>
            </li>
          </ul>
        </div>

        {/* Vizyon */}
        <div className="p-8 bg-[#111827]/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-[#10b981]/30 transition-colors">
          <h3 className="text-xl font-bold mb-6 text-white">Vizyonum</h3>
          <p className="text-gray-400 leading-relaxed">
            Dijital dünyada her işletmenin profesyonel ve güven veren bir kimliğe sahip olması gerektiğine inanıyorum. 
            Sunduğum yüksek performanslı çözümlerle, yerel işletmelerin teknolojik altyapısını güçlendirerek işlerini 
            büyütmelerine destek oluyorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;