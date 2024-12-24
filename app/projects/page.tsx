"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Search, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { Input } from "@/components/ui/input";

interface Translation {
  en: string;
  id: string;
}

interface Project {
  title: string;
  description: Translation;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
  textColor: string;
  startDate: string;
  endDate: string;
  features: Translation[];
  role: Translation;
}

const projectsData: Project[] = [
  
  {
    title: "Abiy.",
    description: {
      en: "A personal portfolio website showcasing various works and projects in software development and web design. Built with modern technologies to provide optimal user experience, featuring responsive design and interactive elements.",
      id: "Portfolio web personal yang menampilkan berbagai karya dan proyek dalam pengembangan perangkat lunak dan desain web. Dibangun dengan teknologi modern untuk memberikan pengalaman pengguna yang optimal."
    },
    image: "/abiy.png",
    tags: ["React.js", "Vue.js", "Next.js"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black",
    startDate: "Jan 2024",
    endDate: "Present",
    features: [
      {
        en: "Interactive project showcase",
        id: "Showcase proyek interaktif"
      },
      {
        en: "Smooth and responsive animations",
        id: "Animasi smooth dan responsif"
      },
      {
        en: "Dark/light mode",
        id: "Mode gelap/terang"
      },
      {
        en: "SEO optimization",
        id: "Optimasi SEO"
      },
      {
        en: "Modern technology integration",
        id: "Integrasi dengan berbagai teknologi modern"
      }
    ],
    role: {
      en: "Frontend Developer",
      id: "Frontend Developer"
    }
  },

   {
    title: "ON-VOLUNTEERS",
    description: {
      en: "ON-VOLUNTEERS is an intuitive web-based application designed to archive and manage volunteer data efficiently. It enables organizations to record, organize, and access volunteer information seamlessly, empowering collaboration and streamlined volunteer engagement.",
      id: "ON-VOLUNTEERS adalah aplikasi berbasis web untuk pengelolaan data relawan. Sistem ini dirancang untuk memudahkan organisasi dalam mencatat, mengorganisir, dan mengakses informasi relawan secara efisien."
    },
    image: "/on-volunteers.png",
    tags: ["Laravel", "Filament", "Sqlite", "Livewire", "Alpine.js"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black",
    startDate: "Aug 2023",
    endDate: "Oct 2023",
    features: [
      {
        en: "Volunteer data management",
        id: "Manajemen data relawan"
      },
      {
        en: "Volunteer categorization system",
        id: "Sistem kategorisasi relawan"
      },
      {
        en: "Advanced search and filtering",
        id: "Pencarian dan filter data"
      },
      {
        en: "Analytics dashboard",
        id: "Dashboard analitik"
      },
      {
        en: "Activity reporting system",
        id: "Sistem pelaporan aktivitas"
      }
    ],
    role: {
      en: "Full Stack Developer",
      id: "Pengembang Full Stack"
    }
  },
    {
    title: "CODE.AY",
    description: {
      en: "CODE.AY is a programming blog platform designed to share coding knowledge. It provides tutorials, tips and tricks, and latest updates in the programming world, helping developers stay informed and improve their skills.",
      id: "Platform blog pemrograman yang dirancang untuk berbagi pengetahuan seputar coding. CODE.AY menyediakan konten tutorial, tips dan trik, serta update terbaru dalam dunia pemrograman."
    },
    image: "/code.ay.png",
    tags: ["Laravel", "MySQL", "Boostrap"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black",
    startDate: "Nov 2023",
    endDate: "Dec 2023",
    features: [
      {
        en: "Content management system",
        id: "Sistem manajemen konten"
      },
      {
        en: "Article categorization",
        id: "Kategorisasi artikel"
      },
      {
        en: "Comment system",
        id: "Sistem komentar"
      },
      {
        en: "Article search functionality",
        id: "Pencarian artikel"
      },
      {
        en: "Admin panel for content management",
        id: "Panel admin untuk pengelolaan konten"
      }
    ],
    role: {
      en: "Full Stack Developer",
      id: "Pengembang Full Stack"
    }
  },
  {
    title: "E-SAKIP",
    description: {
      en: "Government Agency Performance Accountability System (E-SAKIP) built for the Transportation Department of Banjarbaru City. This application assists in systematic and structured evaluation and reporting of agency performance.",
      id: "Sistem Akuntabilitas Kinerja Instansi Pemerintah (E-SAKIP) yang dibangun untuk Dinas Perhubungan kota Banjarbaru. Aplikasi ini membantu dalam evaluasi dan pelaporan kinerja instansi secara sistematis dan terstruktur."
    },
    image: "/E-SAKIP.png",
    tags: ["Bootsrap", "Codeigniter3", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black",
    startDate: "Apr 2023",
    endDate: "Jul 2023",
    features: [
      {
        en: "Performance monitoring dashboard",
        id: "Dashboard monitoring kinerja"
      },
      {
        en: "Performance report management",
        id: "Manajemen pelaporan kinerja"
      },
      {
        en: "Achievement evaluation system",
        id: "Sistem evaluasi capaian"
      },
      {
        en: "Cross-department data integration",
        id: "Integrasi data antar bidang"
      },
      {
        en: "Automated report generation",
        id: "Generasi laporan otomatis"
      }
    ],
    role: {
      en: "Full Stack Developer",
      id: "Full Stack Developer"
    }
  },
  {
    title: "Rentcar-Antariks",
    description: {
      en: "A full-featured Rentcar platform built with PHP Native and Bootstrap. This platform provides a comprehensive car rental management system with a user-friendly interface to facilitate the booking and management process.",
      id: "Platform rental mobil lengkap yang dibangun dengan PHP Native dan Bootstrap. Platform ini menyediakan sistem manajemen rental mobil yang komprehensif dengan antarmuka yang ramah pengguna untuk memudahkan proses pemesanan dan pengelolaan."
    },
    image: "/Rentcar.png",
    tags: ["PHP Native", "MySQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black",
    startDate: "Jan 2023",
    endDate: "Mar 2023",
    features: [
      {
        en: "Online car booking system",
        id: "Sistem pemesanan mobil online"
      },
      {
        en: "Admin panel for inventory management",
        id: "Panel admin untuk manajemen inventaris"
      },
      {
        en: "Integrated payment system",
        id: "Sistem pembayaran terintegrasi"
      },
      {
        en: "Rental schedule management",
        id: "Manajemen jadwal rental"
      },
      {
        en: "Transaction and revenue reports",
        id: "Laporan transaksi dan pendapatan"
      }
    ],
    role: {
      en: "Full Stack Developer",
      id: "Pengembang Full Stack"
    }
  },
];

const translations = {
  backHome: {
    en: "Back to Home",
    id: "Kembali ke Beranda"
  },
  projectsList: {
    en: "Complete Projects List",
    id: "Daftar Lengkap Proyek"
  },
  searchPlaceholder: {
    en: "Search projects or technologies...",
    id: "Cari proyek atau teknologi..."
  },
  period: {
    en: "Period",
    id: "Periode"
  },
  mainFeatures: {
    en: "Main Features",
    id: "Fitur Utama"
  },
  liveDemo: {
    en: "Live Demo",
    id: "Demo Langsung"
  },
  code: {
    en: "Code",
    id: "Kode"
  }
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<"en" | "id">("en");

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-10">
        <Link href="/#projects">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft size={20} />
              {translations.backHome[language]}
            </Button>
          </Link>
          
          <Button
            variant="outline"
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
          >
            {language === "en" ? "🇮🇩 ID" : "🇬🇧 EN"}
          </Button>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          {translations.projectsList[language]}
        </motion.h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder={translations.searchPlaceholder[language]}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title + index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <CardHeader className="p-6 pb-0">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {project.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description[language]}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">{translations.period[language]}:</span> {project.startDate} - {project.endDate}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Role:</span> {project.role[language]}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                        {translations.mainFeatures[language]}:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature[language]}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-sm rounded-full bg-gradient-to-br ${project.color} ${project.textColor} shadow-md`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="w-full hover:bg-gradient-to-br hover:from-gray-950 hover:to-gray-950 hover:text-white transition-all"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {translations.liveDemo[language]}
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="w-full hover:bg-gradient-to-br hover:from-gray-950 hover:to-gray-950 hover:text-white transition-all"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          {translations.code[language]}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}