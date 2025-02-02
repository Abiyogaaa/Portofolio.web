import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from 'react';
import Link from 'next/link';

const projectsData = [
  {
    title: "Abiyoga.",
    description: "A personal portfolio website showcasing various works and projects in software development and web design. Built with modern technologies to provide optimal user experience, featuring responsive design and interactive elements.",
    image: "/portfolio.png",
    tags: ["React.js", "Vue.js", "Next.js"],
    liveUrl: "https://abiyoga.vercel.app/",
    githubUrl: "https://github.com/Abiyogaaa/Portofolio.web.git",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black"
  },
  {
    title: "ON-VOLUNTEERS",
    description: "ON-VOLUNTEERS is an intuitive web-based application designed to archive and manage volunteer data efficiently. It enables organizations to record, organize, and access volunteer information seamlessly, empowering collaboration and streamlined volunteer engagement.",
    image: "/on-volunteers.png",
    tags: ["Laravel", "Filament", "Sqlite", "Livewire", "Alpine.js"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black"
  },
  {
    title: "CODE.AY",
    description: "CODE.AY is a programming blog platform designed to share coding knowledge. It provides tutorials, tips and tricks, and latest updates in the programming world, helping developers stay informed and improve their skills.",
    image: "/code.ay.png",
    tags: ["Laravel", "MySQL", "Boostrap"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black"
  },

    {
    title: "E-SAKIP",
    description: "Government Agency Performance Accountability System (E-SAKIP) built for the Transportation Department of Banjarbaru City. This application assists in systematic and structured evaluation and reporting of agency performance.",
    image: "/E-SAKIP.png",
    tags: ["Bootsrap", "Codeigniter3", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black"
  },
  {
    title: "Rentcar-Antariks",
    description: "A full-featured Rentcar platform built with PHP Native and Bootstrap. This platform provides a comprehensive car rental management system with a user-friendly interface to facilitate the booking and management process.",
    image: "/image.png",
    tags: ["PHP Native", "MySQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-gray-950 to-gray-950 dark:from-gray-50 dark:to-gray-50",
    textColor: "text-white dark:text-black"
  },


  
  
];

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const showLoadMore = projectsData.length > ITEMS_PER_PAGE;
  const hasMoreItems = visibleItems < projectsData.length;

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + ITEMS_PER_PAGE);
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-br from-white to-white dark:from-black dark:to-black transition-all duration-300"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-100 tracking-tight"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-0">
          {projectsData.slice(0, visibleItems).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className="perspective-1000"
            >
              <Card 
                className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="aspect-video overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br opacity-40 dark:opacity-10 mix-blend-multiply`}
                    ></div>
                  </motion.div>
                </div>
                
                <CardHeader className="p-6 pb-0">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="p-6 pt-3">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3 h-20">
    {project.description}
  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-br ${project.color} ${project.textColor} shadow-md`}
                      >
                        {tag}
                      </motion.span>
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
                        Live Demo
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
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 ">
          {showLoadMore && hasMoreItems && (
            <Button
              onClick={handleLoadMore}
              variant="outline"
              className="w-full sm:w-auto px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              Tampilkan Lebih Banyak
            </Button>
          )}
          
          <Link href="/projects" className="w-full sm:w-auto">
            <Button
              variant="default"
              className="w-full px-6 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Lihat Detail Semua Proyek
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;