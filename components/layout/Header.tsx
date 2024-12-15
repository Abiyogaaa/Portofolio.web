"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Lock or unlock scroll when the mobile menu state changes
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup in case of unmount
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Certificate", href: "#certificate" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-black shadow-md" : ""}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold ml-8">
            Abiy.
          </a>
          <div className="flex space-x-4 mr-5">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 font-bold hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Dark Mode Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 75, damping: 20 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-6 text-center"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-bold text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-950 dark:text-white hover:text-black px-7"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-8 w-8 font-bold" />
            </button>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
