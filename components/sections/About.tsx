import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur-xl"></div>
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
              <motion.p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium first-letter:text-4xl first-letter:font-bold first-letter:text-purple-600 dark:first-letter:text-pink-500 first-letter:mr-1 first-letter:float-left">
                I am Abiyoga Wahyu Pratama, a fresh graduate of Bachelor of Informatics Engineering, specializing in web programming, application development, web design, and photography. Over the years, I have gained hands-on experience working with various frameworks and technologies, including PHP Native, CodeIgniter 3, Laravel, Bootstrap, Livewire, Alpine.js, and Filament.
              </motion.p>

              <div className={!isExpanded ? 'hidden' : ''}>
                <motion.p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium mt-4">
                  However, I am not limited to these fields; I thrive on embracing unlimited challenges. My passion for continuous learning drives me to explore various domains, and I am always ready to face new challenges with enthusiasm. My expertise lies in problem-solving, collaborative teamwork, and adapting quickly to dynamic work environments. I am eager to contribute meaningfully to the ever-evolving world of technology.
                </motion.p>

                <motion.p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium mt-4">
                  In addition to my technical expertise, I frequently take certifications and courses to enhance my skills. These include the BNSP Program Analyst certification and various other professional development programs that enrich my knowledge and keep me updated with industry standards.
                </motion.p>
              </div>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent" />
              )}
            </motion.div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-purple-600 dark:text-pink-500 font-medium hover:underline focus:outline-none transition-colors duration-300"
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