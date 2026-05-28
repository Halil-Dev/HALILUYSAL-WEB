import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Github, ExternalLink, Code2, ArrowRight } from "lucide-react";
import { PROJECTS, WHATSAPP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Halil Uysal tarafından geliştirilen yazılım projeleri ve referanslar. Web uygulamaları, otomasyon sistemleri ve daha fazlası.",
};

const STATUS_STYLES: Record<string, string> = {
  Tamamlandı: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Geliştiriliyor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Sertifikalı: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Başlık */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Projeler & <span className="text-primary">Referanslar</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Yazılım mühendisliği disipliniyle geliştirdiğim projeler ve dijital dünyada attığım
          imzalar.
        </p>
      </div>

      {/* Proje Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group p-8 bg-secondary/80 rounded-3xl border border-gray-800 hover:border-primary transition-all duration-300 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Code2 size={24} />
              </div>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full border ${
                  STATUS_STYLES[project.status] ?? "bg-gray-800 text-gray-400 border-gray-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs text-gray-500 bg-gray-900 px-3 py-1 rounded-full border border-gray-800"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  GitHub&apos;da İncele
                </a>
              ) : (
                <span className="flex items-center gap-2 text-sm text-gray-700 cursor-not-allowed select-none">
                  <Github size={16} />
                  Gizli Repo
                </span>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary transition-colors ml-auto"
                >
                  <ExternalLink size={16} />
                  Canlıyı Gör
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center p-10 bg-secondary/50 rounded-3xl border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-3">Sizin için de bir proje geliştirelim?</h2>
        <p className="text-gray-400 mb-6">
          Fikrinizi hayata geçirmek için hemen iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            id="projects-quote-btn"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3.5 rounded-xl transition-all group"
          >
            Teklif Al
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="projects-whatsapp-btn"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;