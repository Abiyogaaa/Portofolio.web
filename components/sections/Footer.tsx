import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { BiHash } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted py-8 bg-gradient-to-br from-white to-white dark:from-black dark:to-black">
      <div className="container mx-auto px-4">
        <div className=" flex-col md:flex-row justify-center items-center">
          <div className="flex space-x-6 items-center justify-center mb-2">
            <a
              href="mailto:abiyoga@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Abiyogaaa"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abiyoga-wahyu-pratama-897335295/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/abiiiyga"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@calmm.boy?_t=8sTZfZDLjFo&_r=1"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://www.threads.net/@abiiiyga"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiHash className="w-5 h-5" />
            </a>
          </div>
          <p className="text-muted-foreground mb-4 md:mb-0 mx-3 text-center">
            Abiyoga · © 2024 · Personal writing space ·{" "}
            <span className="text-sm">
              Dibangun dengan Next.js, Tailwind CSS, dan TypeScript
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
