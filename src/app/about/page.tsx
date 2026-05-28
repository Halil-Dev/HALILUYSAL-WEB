import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { SKILLS } from "@/constants";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Yazılım Mühendisi Halil Uysal hakkında. Mehmet Akif Ersoy Üniversitesi öğrencisi, web tasarım ve otomasyon uzmanı.",
};

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Üst Bölüm: Profil + Özet */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-20">
        {/* Fotoğraf */}
        <div className="shrink-0">
          <div className="w-48 h-48 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
            <Image
              src="/me.jpg"
              alt="Halil Uysal"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Metin */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ben <span className="text-primary">Halil Uysal</span>
          </h1>
          <p className="text-primary/80 text-sm font-semibold tracking-widest uppercase mb-5">
            Yazılım Mühendisi & Dijital Çözümler Uzmanı
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Teknolojiye olan tutkumla, işletmelerin dijital dünyada fark yaratmasını sağlayan
            profesyonel yazılım çözümleri geliştiriyorum. Mehmet Akif Ersoy Üniversitesi&apos;nde
            sürdürdüğüm Yazılım Mühendisliği eğitimimi; iş süreçlerini kolaylaştıran akıllı
            sistemler, modern web teknolojileri ve kullanıcı dostu tasarımlar üzerine
            yoğunlaştırıyorum.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all group"
          >
            Benimle Çalış
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Eğitim & Deneyim */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 bg-secondary/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <GraduationCap size={22} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Eğitim</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-white font-semibold">Yazılım Mühendisliği</p>
              <p className="text-gray-500 text-sm">Mehmet Akif Ersoy Üniversitesi</p>
              <p className="text-primary text-xs mt-1">2022 — Devam Ediyor</p>
            </div>
            <div className="pt-4 border-t border-gray-800">
              <p className="text-white font-semibold">Siber Vatan Programı</p>
              <p className="text-gray-500 text-sm">Siber Güvenlik & DevSecOps Sertifikası</p>
              <p className="text-primary text-xs mt-1">2024 — Sertifikalı</p>
            </div>
          </div>
        </div>

        <div className="p-8 bg-secondary/50 backdrop-blur-sm rounded-3xl border border-gray-800 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Briefcase size={22} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Vizyonum</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Dijital dünyada her işletmenin profesyonel ve güven veren bir kimliğe sahip olması
            gerektiğine inanıyorum. Sunduğum yüksek performanslı çözümlerle, yerel işletmelerin
            teknolojik altyapısını güçlendirerek işlerini büyütmelerine destek oluyorum.
          </p>
        </div>
      </div>

      {/* Teknoloji Yetkinlikleri */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Code2 size={22} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-white">Teknoloji Yetkinlikleri</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="p-6 bg-secondary/50 rounded-2xl border border-gray-800 hover:border-primary/30 transition-colors"
            >
              <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                {group.category}
              </h4>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;