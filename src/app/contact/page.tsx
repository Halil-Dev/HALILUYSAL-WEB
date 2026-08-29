import type { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "İletişim & Teklif Al",
  description:
    "Web tasarımı ve yazılım projeleriniz için ücretsiz fiyat teklifi alın veya doğrudan iletişime geçin.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}