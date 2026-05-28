import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Arka plan efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative">
        <p className="text-[120px] md:text-[180px] font-black text-white/5 leading-none select-none">
          404
        </p>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Sayfa Bulunamadı
          </h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Aradığınız sayfa mevcut değil ya da taşınmış olabilir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              id="not-found-home-btn"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-6 py-3 rounded-xl transition-all"
            >
              <Home size={16} />
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/contact"
              id="not-found-contact-btn"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <ArrowLeft size={16} />
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
