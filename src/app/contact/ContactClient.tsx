"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, Send, Phone } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, PHONE_URL, WHATSAPP_URL } from "@/constants";

const ContactClient = () => {
  const [formData, setFormData] = useState({ name: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Merhaba Halil, ben ${formData.name}. Projem hakkında şunları görüşmek istiyorum: ${formData.project}`;
    const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Bir Projeniz mi Var?
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Hemen iletişime geçin, işletmeniz için en doğru çözümü birlikte kurgulayalım.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* İletişim Kanalları */}
        <div className="space-y-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-link"
            className="flex items-center gap-6 p-6 bg-secondary/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-primary transition-all group"
          >
            <div className="p-4 bg-green-500/10 text-green-500 rounded-2xl group-hover:scale-110 transition-transform shrink-0">
              <MessageCircle size={30} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">WhatsApp</h4>
              <p className="text-gray-500 text-sm">Hızlı yanıt için yazın</p>
            </div>
          </a>

          <a
            href={PHONE_URL}
            id="contact-phone-link"
            className="flex items-center gap-6 p-6 bg-secondary/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-primary transition-all group"
          >
            <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform shrink-0">
              <Phone size={30} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Telefon</h4>
              <p className="text-gray-500 text-sm">{PHONE_DISPLAY}</p>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            id="contact-email-link"
            className="flex items-center gap-6 p-6 bg-secondary/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-primary transition-all group"
          >
            <div className="p-4 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform shrink-0">
              <Mail size={30} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">E-Posta</h4>
              <p className="text-gray-500 text-sm">{EMAIL}</p>
            </div>
          </a>
        </div>

        {/* Hızlı Teklif Formu */}
        <div className="p-8 bg-secondary/30 backdrop-blur-sm rounded-3xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-6">Hızlı Teklif Formu</h3>
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            <input
              id="contact-name-input"
              type="text"
              placeholder="Adınız"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-gray-900 border border-gray-800 p-4 rounded-xl text-white placeholder-gray-600 focus:border-primary outline-none transition-all"
            />
            <textarea
              id="contact-project-input"
              placeholder="Projenizden kısaca bahsedin..."
              required
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              className="w-full bg-gray-900 border border-gray-800 p-4 rounded-xl h-36 text-white placeholder-gray-600 focus:border-primary outline-none transition-all resize-none"
            />
            <button
              id="contact-submit-btn"
              type="submit"
              className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{submitted ? "WhatsApp açılıyor..." : "WhatsApp ile Gönder"}</span>
              <Send
                size={18}
                className={
                  submitted
                    ? "animate-bounce"
                    : "group-hover:translate-x-1 transition-transform"
                }
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactClient;
