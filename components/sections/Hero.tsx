"use client";

import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Program Analyst & Web Developer";

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Scroll visibility effect
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Download CV handler
  const handleDownloadCV = () => {
    // You would replace this with the actual path to your CV
    const cvPath = '/cv/CV_ABIYOGA WAHYU PRATAMA_TEKNIK INFORMATIKA.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV_ABIYOGA WAHYU PRATAMA_TEKNIK INFORMATIKA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center relative pt-16 
      transition-all duration-500 ${isVisible ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-gray-950 
          bg-clip-text text-transparent tracking-tight leading-[1.1] animate-gradient-x"
        >
          <span className="block text-shadow-lg text-black dark:text-white">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-gray-950 via-gray-950 to-gray-950 dark:from-gray-50 dark:via-gray-50 dark:to-gray-50 bg-clip-text text-transparent">
            Abiyoga Wahyu Pratama
          </span>
        </h1>
        <p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium tracking-wide 
          min-h-[2rem]"
        >
          {typedText}
          <span className="animate-blink">|</span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg font-semibold group hover:scale-105 transition-transform duration-300 
            shadow-md hover:shadow-lg"
            onClick={() => scrollToSection('projects')}
          >
            <Eye className="mr-2" /> View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg font-semibold group hover:scale-105 transition-transform duration-300 
            shadow-md hover:shadow-lg"
            onClick={handleDownloadCV}
          >
            <Download className="mr-2" /> Download CV
          </Button>
        </div>
      </div>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce 
        hover:text-primary transition-colors duration-300"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;