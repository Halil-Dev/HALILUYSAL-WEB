"use client";

import React, { useState } from 'react';
import { MessageCircle, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    project: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mesaj içeriğini oluşturuyoruz
    const message = `Merhaba Halil, ben ${formData.name}. Projem hakkında şunları görüşmek istiyorum: ${formData.project}`;
    
    // WhatsApp URL'ini hazırlıyoruz
    const whatsappUrl = `https://wa.me/905444100368?text=${encodeURIComponent(message)}`;
    
    // WhatsApp'ı yeni sekmede açıyoruz
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Bir Projeniz mi Var?</h1>
        <p className="text-gray-400 text-lg">Hemen iletişime geçin, işletmeniz için en doğru çözümü birlikte kurgulayalım.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* İletişim Kanalları */}
        <div className="space-y-6">
          <a 
            href="https://wa.me/905444100368" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-6 p-6 bg-[#111827]/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-[#10b981] transition-all group cursor-pointer"
          >
            <div className="p-4 bg-green-500/10 text-green-500 rounded-2xl group-hover:scale-110 transition-transform">
              <MessageCircle size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">WhatsApp</h4>
              <p className="text-gray-500 text-sm">Hızlı yanıt için yazın</p>
            </div>
          </a>
          
          {/* E-Posta Gönderim Bağlantısı */}
          <a 
            href="mailto:haliluysal.dev@gmail.com"
            className="flex items-center gap-6 p-6 bg-[#111827]/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-[#10b981] transition-all group cursor-pointer"
          >
            <div className="p-4 bg-[#10b981]/10 text-[#10b981] rounded-2xl group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">E-Posta</h4>
              <p className="text-gray-500 text-sm">haliluysal.dev@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Hızlı Teklif Formu - WhatsApp API Entegrasyonlu */}
        <div className="p-8 bg-[#111827]/30 backdrop-blur-sm rounded-3xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-6">Hızlı Teklif Formu</h3>
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Adınız" 
              required
              className="w-full bg-gray-900 border border-gray-800 p-4 rounded-xl text-white focus:border-[#10b981] outline-none transition-all"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <textarea 
              placeholder="Projenizden kısaca bahsedin..." 
              required
              className="w-full bg-gray-900 border border-gray-800 p-4 rounded-xl h-32 text-white focus:border-[#10b981] outline-none transition-all resize-none"
              onChange={(e) => setFormData({...formData, project: e.target.value})}
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-[#10b981] text-black font-bold py-4 rounded-xl hover:bg-[#059669] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>WhatsApp ile Gönder</span>
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;