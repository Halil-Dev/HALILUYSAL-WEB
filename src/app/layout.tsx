import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halil Uysal | Yazılım Mühendisi & Dijital Çözümler",
  description: "Kurumsal web tasarım, otomasyon ve yazılım çözümleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} text-white antialiased relative min-h-screen bg-black`}>
        
        {/* Senin CSS kodundaki yıldızları tetikleyen ana element */}
        <div className="starfield-overlay" />

        {/* Üst katman: Navigasyon */}
        <Navbar />

        {/* Orta katman: Sayfa İçeriği */}
        <main className="relative z-10 pt-20">
          {children}
        </main>

        {/* Sabit WhatsApp Butonu */}
        <a 
          href="https://wa.me/905444100368" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle size={32} color="white" fill="white" />
        </a>
      </body>
    </html>
  );
}