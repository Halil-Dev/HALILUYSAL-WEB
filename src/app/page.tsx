import Hero from "@/components/Hero"; 

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* 1. Bölüm: Görseldeki şık karşılama alanı */}
      <Hero />
      
      {/* 2. Bölüm: Hizmetlere ve Portfolyoya yönlendiren büyük butonlar/kartlar */}
      <section className="w-full max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Size Nasıl Yardımcı Olabilirim?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hizmetler Yönlendirme */}
          <div className="p-10 bg-secondary rounded-3xl border border-gray-800 hover:border-primary transition-all cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">Dijital Çözümler</h3>
            <p className="text-gray-400 mb-6">İşletmeniz için web sitesi ve otomasyon paketlerini inceleyin.</p>
            <a href="/services" className="text-primary font-bold">Hizmetleri Gör →</a>
          </div>
          
          {/* Hakkımda/Mühendislik Yönlendirme */}
          <div className="p-10 bg-secondary rounded-3xl border border-gray-800 hover:border-primary transition-all cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">Mühendislik & Projeler</h3>
            <p className="text-gray-400 mb-6">Yazılım süreçlerim ve geliştirdiğim teknik projeler hakkında bilgi alın.</p>
            <a href="/about" className="text-primary font-bold">Beni Tanıyın →</a>
          </div>
        </div>
      </section>
    </div>
  );
}