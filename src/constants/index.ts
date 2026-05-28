// ─── İletişim Bilgileri ───────────────────────────────────────────────────────
export const PHONE_NUMBER = "905444100368";
export const PHONE_DISPLAY = "+90 544 410 03 68";
export const EMAIL = "haliluysal.dev@gmail.com";
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;
export const PHONE_URL = `tel:+${PHONE_NUMBER}`;
export const LINKEDIN_URL = "https://linkedin.com/in/haliluysal1";
export const GITHUB_URL = "https://github.com/Halil-Dev";

// ─── Navigasyon Linkleri ──────────────────────────────────────────────────────
export const NAV_LINKS = [
  { href: "/about", label: "Hakkımda" },
  { href: "/projects", label: "Projeler" },
  { href: "/services", label: "Hizmetler" },
  { href: "/contact", label: "İletişim" },
];

// ─── Hizmetler ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "web",
    title: "Modern & Kurumsal Web Siteleri",
    description:
      "İlk izlenim her şeydir. Alfa Eğitim gibi markalara yaptığımız gibi, sizi rakiplerinizden ayıran, telefonlarda kusursuz görünen ve Google'da kolayca bulunan profesyonel siteler tasarlıyoruz.",
    features: ["Telefon ve Tablet Uyumlu", "Google'da Görünür Olun (SEO)", "Kolay Yönetim Paneli"],
  },
  {
    id: "automation",
    title: "Akıllı İş Çözümleri & Otomasyon",
    description:
      "Tekrarlayan işlerden sıkıldınız mı? Dershane yönetim sistemlerinden müşterilerinize anında cevap veren WhatsApp asistanlarına kadar, işinizi cebinizden yönetmenizi sağlayacak sistemler kuruyoruz.",
    features: ["Müşteri Randevu Sistemleri", "Otomatik WhatsApp Botları", "Hızlı İş Takibi"],
  },
  {
    id: "fullstack",
    title: "Full-Stack Uygulama Geliştirme",
    description:
      "Fikrinizi ürüne dönüştürüyoruz. Next.js, React, Spring Boot ve PostgreSQL gibi modern teknolojilerle ölçeklenebilir, güvenli ve hızlı uygulamalar geliştiriyoruz.",
    features: ["Next.js & React Frontend", "Spring Boot / Node.js Backend", "PostgreSQL & Cloud Entegrasyonu"],
  },
];

// ─── Projeler ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Alfa Eğitim Kurumları",
    description:
      "Next.js ve Tailwind CSS kullanarak hazırlanan modern, kurumsal web sitesi. Tam mobil uyumlu ve SEO optimize.",
    tech: ["Next.js", "Tailwind CSS", "Responsive", "SEO"],
    status: "Tamamlandı",
    statusColor: "emerald" as const,
    github: null,
    live: null,
  },
  {
    id: 2,
    title: "Dershane Yönetim Sistemi",
    description:
      "Next.js ve Spring Boot entegrasyonu ile geliştirilen kapsamlı yönetim paneli çözümü. Öğrenci takibi, yoklama ve ödeme modülleri.",
    tech: ["Spring Boot", "Next.js", "Java", "PostgreSQL"],
    status: "Geliştiriliyor",
    statusColor: "yellow" as const,
    github: GITHUB_URL,
    live: null,
  },
  {
    id: 3,
    title: "Siber Vatan Programı",
    description:
      "Siber güvenlik ve DevSecOps süreçlerine odaklanan profesyonel eğitim ve sertifika programı. Linux tabanlı güvenlik analizleri.",
    tech: ["Cyber Security", "Linux", "DevSecOps"],
    status: "Sertifikalı",
    statusColor: "blue" as const,
    github: null,
    live: null,
  },
  {
    id: 4,
    title: "Sosyal Medya Otomasyonu",
    description:
      "Google Gemini API kullanarak içerik üretimini ve sosyal medya paylaşımını otomatize eden akıllı sistem.",
    tech: ["Node.js", "Gemini API", "Automation"],
    status: "Geliştiriliyor",
    statusColor: "yellow" as const,
    github: GITHUB_URL,
    live: null,
  },
];

// ─── Yetenekler ───────────────────────────────────────────────────────────────
export const SKILLS = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", "Java", "REST API"] },
  { category: "Veritabanı & Cloud", items: ["PostgreSQL", "MongoDB", "Docker", "Vercel"] },
  { category: "Araçlar & Diğer", items: ["Git", "Linux", "Figma", "Gemini API"] },
];
