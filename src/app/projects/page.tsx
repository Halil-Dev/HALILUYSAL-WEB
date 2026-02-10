import React from 'react';
import { Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Alfa Eğitim Kurumları",
    description: "Next.js ve Tailwind CSS kullanarak hazırlanan modern, kurumsal web sitesi.",
    tech: ["Next.js", "Tailwind CSS", "Responsive"],
    status: "Tamamlandı"
  },
  {
    title: "Dershane Yönetim Sistemi",
    description: "Next.js ve Spring Boot entegrasyonu ile geliştirilen kapsamlı yönetim paneli çözümü.",
    tech: ["Spring Boot", "Next.js", "Java", "PostgreSQL"],
    status: "Geliştiriliyor"
  },
  {
    title: "Siber Vatan Programı",
    description: "Siber güvenlik ve DevSecOps süreçlerine odaklanan profesyonel eğitim süreci.",
    tech: ["Cyber Security", "Linux", "DevSecOps"],
    status: "Sertifikalı"
  },
  {
    title: "Sosyal Medya Otomasyonu",
    description: "Google Gemini API kullanarak içerik üretimini ve paylaşımını otomatize eden sistem.",
    tech: ["Node.js", "Gemini API", "Automation"],
    status: "Geliştiriliyor"
  }
];

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Projeler & <span className="text-primary">Referanslar</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Yazılım mühendisliği disipliniyle geliştirdiğim projeler ve dijital dünyada attığım imzalar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group p-8 bg-[#111827] rounded-3xl border border-gray-800 hover:border-primary transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Code2 size={24} />
              </div>
              <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                {project.status}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            {/* Hata düzeltilen kısım: Sadece tech dizisine bakıyoruz */}
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

            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/btn">
                <Github size={18} /> 
                <span>İncele</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;