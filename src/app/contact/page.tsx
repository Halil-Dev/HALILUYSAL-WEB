import type { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Halil Uysal ile iletişime geçin. WhatsApp, e-posta veya formu doldurarak ücretsiz teklif alın.",
};

export default function Page() {
  return <ContactPage />;
}