import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { BiHash } from "react-icons/bi";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id="about" 
      className="py-20 px-5 bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-950 dark:to-gray-950 transition-all duration-300"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-100 tracking-tight"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gray-950 dark:bg-white rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-xl"></div>
              <Image 
                src="/profil.png" 
                alt="Professional Profile" 
                width={400} 
                height={400} 
                className="relative z-10 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:pr-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`relative ${!isExpanded ? 'max-h-[300px] overflow-hidden' : ''}`}
            >
              <motion.p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium first-letter:text-4xl first-letter:font-bold first-letter:text-gray-600 dark:first-letter:text-gray-300 first-letter:mr-1 first-letter:float-left">
                I am Abiyoga Wahyu Pratama, a fresh graduate of Bachelor of Informatics Engineering, with a BNSP certified program analyst and specialization in web programming, as well as application development, web design, and photography. Over the years, I have gained hands-on experience working with various frameworks and technologies, including PHP Native, CodeIgniter 3, Laravel, Bootstrap, Livewire, Alpine.js, Filament, React.js, Vue.js and Next.js.
              </motion.p>

              <div className={!isExpanded ? 'hidden' : ''}>
                <motion.p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium mt-4">
                  However, I am not limited to these fields; I thrive on embracing unlimited challenges. My passion for continuous learning drives me to explore various domains, and I am always ready to face new challenges with enthusiasm. My expertise lies in problem-solving, collaborative teamwork, and adapting quickly to dynamic work environments. I am eager to contribute meaningfully to the ever-evolving world of technology.
                </motion.p>

                <motion.p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium mt-4">
                  In addition to my technical expertise, I frequently take certifications and courses to enhance my skills. These include the BNSP Program Analyst certification and various other professional development programs that enrich my knowledge and keep me updated with industry standards.
                </motion.p>
                <div className="grid grid-cols-6 gap-2 mt-8 mx-0 mb-8 justify-center sm:grid-cols-6">
                <a
              href="mailto:abiyoga@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-10 h-7" />
            </a>
            <a
              href="https://github.com/Abiyogaaa"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-10 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/abiyoga-wahyu-pratama-897335295/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-10 h-7" />
            </a>
            <a
              href="https://instagram.com/abiiiyga"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-10 h-7" />
            </a>
            <a
              href="https://www.tiktok.com/@calmm.boy?_t=8sTZfZDLjFo&_r=1"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="w-10 h-7" />
            </a>
            <a
              href="https://www.threads.net/@abiiiyga"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiHash  className="w-10 h-7" />
            </a>
</div>




              </div>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent" />
              )}
            </motion.div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-gray-950 dark:text-white font-medium hover:underline focus:outline-none transition-colors duration-300"
            >
              {isExpanded ? 'Baca lebih sedikit' : 'Baca selengkapnya'}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
