import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://haliluysal.pw"),
  title: {
    default: "Halil Uysal | Yazılım Mühendisi & Dijital Çözümler",
    template: "%s | Halil Uysal",
  },
  description:
    "Türkiye genelinde modern web geliştirme, kurumsal yazılım ve otomasyon çözümleri. Hızlı, güvenli ve SEO uyumlu sistemler.",
  keywords: [
    "Halil Uysal",
    "Yazılım Mühendisi",
    "Web Tasarım",
    "Next.js Geliştirici",
    "Full Stack Developer",
    "Otomasyon Sistemleri",
    "Freelance Yazılımcı",
  ],
  authors: [{ name: "Halil Uysal", url: "https://haliluysal.pw" }],
  creator: "Halil Uysal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Halil Uysal | Yazılım Mühendisi & Dijital Çözümler",
    description:
      "Modern web sistemleri, kurumsal web tasarımı ve uçtan uca yazılım çözümleri.",
    url: "https://haliluysal.pw",
    siteName: "Halil Uysal Portfolio",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Halil Uysal - Yazılım Mühendisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halil Uysal | Yazılım Mühendisi",
    description:
      "Modern web sistemleri, kurumsal web tasarımı ve uçtan uca yazılım çözümleri.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Halil Uysal",
    url: "https://haliluysal.pw",
    jobTitle: "Software Engineer",
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "Cybersecurity",
      "Automation",
    ],
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} text-white antialiased relative min-h-screen bg-black`}
      >
        <div className="starfield-overlay" />
        <Navbar />
        <main className="relative z-10 pt-20">{children}</main>
        <Footer />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geç"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        >
          <MessageCircle size={28} color="white" fill="white" />
        </a>

        {/* Google Analytics Entegrasyonu */}
        <GoogleAnalytics gaId="G-2S06J3Z4E5" />
        <Analytics />
      </body>
    </html>
  );
}