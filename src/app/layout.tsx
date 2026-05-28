import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Halil Uysal | Yazılım Mühendisi & Dijital Çözümler",
    template: "%s | Halil Uysal",
  },
  description:
    "Türkiye genelinde kurumsal web tasarımı, otomasyon sistemleri ve yazılım geliştirme hizmetleri. Modern, hızlı ve SEO uyumlu çözümler.",
  keywords: ["web tasarım", "yazılım mühendisi", "otomasyon", "Next.js", "SEO", "Türkiye"],
  authors: [{ name: "Halil Uysal" }],
  openGraph: {
    title: "Halil Uysal | Yazılım Mühendisi & Dijital Çözümler",
    description: "Kurumsal web tasarım, otomasyon ve yazılım çözümleri.",
    url: "https://haliluysal.dev",
    siteName: "Halil Uysal",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halil Uysal | Yazılım Mühendisi",
    description: "Kurumsal web tasarım, otomasyon ve yazılım çözümleri.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.className} text-white antialiased relative min-h-screen bg-black`}
      >
        {/* Yıldız arka plan efekti */}
        <div className="starfield-overlay" />

        {/* Navigasyon */}
        <Navbar />

        {/* Sayfa içeriği */}
        <main className="relative z-10 pt-20">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Sabit WhatsApp Butonu */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geç"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle size={28} color="white" fill="white" />
        </a>
      </body>
    </html>
  );
}