"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Search, ExternalLink, Eye, Download, Info } from 'lucide-react';
import { useState } from 'react';
import { Input } from "@/components/ui/input";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  color: string;
  description: string;
  credentialId: string;
  validUntil: string;
  verificationUrl: string;
  skills: string[];
  pdfUrl: string;
}

const certificateData = [
  {
      title: "Certified Program Analyst",
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "2024",
     image: "/image/lsp.jpg",
    pdfUrl: "/pdf/sertifikat-LSP.pdf", 
    credentialId: "13218165",
    description: "Sertifikasi kompetensi nasional untuk Program Analyst yang mencakup kemampuan analisis, perancangan dan pengembangan sistem",
    validUntil: "2027",
    verificationUrl: "https://bnsp.go.id",
    skills: [
      "Software Scalability Analysis",
      "SQL Data Management",
      "Database Access Implementation",
      "Programming Algorithm Implementation",
      "Code Documentation",
      "Program Debugging and Profiling",
      "Code Review",
      "Integration Testing"
  ]
  ,
    color: "text-white dark:text-black"
  },
  {
      title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    issuer: "Stanford University",
    date: "Nov 2024",
     image: "/image/stanford01.jpg",
    pdfUrl: "/pdf/stanford01.pdf",
    credentialId: "CYPK5NNYCNWA",
    description: "Kursus mendalam tentang algoritma dasar termasuk divide and conquer, sorting, searching dan algoritma randomized",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/CYPK5NNYCNWA",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    color: "text-white dark:text-black"
  },
  {
      title: "Spesialisasi Generative AI Leadership & Strategy",
    issuer: "Vanderbilt University",
    date: "Des 2024",
     image: "/image/Vanderbilt04.jpg",
    pdfUrl: "/pdf/Vanderbilt04.pdf",
    credentialId: "MDXV4Q5DV0UR",
    description: "Spesialisasi komprehensif dalam kepemimpinan dan strategi AI Generatif, mencakup aspek manajemen dan implementasi AI dalam organisasi",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/MDXV4Q5DV0UR",
    skills: ["AI Leadership", "AI Strategy", "Generative AI"],
    color: "text-white dark:text-black"
  },
  {
      title: "Generative AI for Leaders (Spesialisasi Generative AI Leadership & Strategy)",
    issuer: "Vanderbilt University",
    date: "Des 2024",
     image: "/image/Vanderbilt01.jpg",
    pdfUrl: "/pdf/Vanderbilt01.pdf",
    credentialId: "SK8YHQ830GRT",
    description: "Kursus khusus untuk pemimpin tentang pemanfaatan AI Generatif dalam pengambilan keputusan dan strategi bisnis",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/SK8YHQ830GRT",
    skills: ["AI Leadership", "Decision Making", "Business Strategy"],
    color: "text-white dark:text-black"
  },
  {
      title: "Prompt Engineering for ChatGPT (Spesialisasi Generative AI Leadership & Strategy)",
    issuer: "Vanderbilt University",
    date: "Des 2024",
     image: "/image/Vanderbilt02.jpg",
    pdfUrl: "/pdf/Vanderbilt02.pdf",
    credentialId: "YSYTDPFVF0MQ",
    description: "Pembelajaran mendalam tentang teknik prompt engineering untuk mengoptimalkan hasil dari model AI seperti ChatGPT",
    validUntil: "Seumur Hidup", 
    verificationUrl: "https://coursera.org/verify/YSYTDPFVF0MQ",
    skills: ["Prompt Engineering", "ChatGPT", "AI Optimization"],
    color: "text-white dark:text-black"
  },
  {
      title: "Trustworthy Generative AI (Spesialisasi Generative AI Leadership & Strategy)",
    issuer: "Vanderbilt University",
    date: "Des 2024",
     image: "/image/Vanderbilt03.jpg", 
    pdfUrl: "/pdf/Vanderbilt03.pdf",
    credentialId: "SDJYLTOWC54W",
    description: "Studi tentang aspek keamanan, etika, dan keandalan dalam pengembangan dan implementasi AI Generatif",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/SDJYLTOWC54W",
    skills: ["AI Ethics", "AI Security", "Responsible AI"],
    color: "text-white dark:text-black"
  },
  {
      title: "Microsoft 365 Fundamentals Specialization",
    issuer: "Microsoft",
    date: "Nov 2024",
     image: "/image/Microsoft04.jpg",
    pdfUrl: "/pdf/Microsoft04.pdf",
    credentialId: "VDDTXBW38FS3",
    description: "Spesialisasi komprehensif dalam penggunaan Microsoft 365 suite untuk meningkatkan produktivitas kerja",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/VDDTXBW38FS3",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    color: "text-white dark:text-black"
  },
  {
      title: "Work Smarter with Microsoft Word (Microsoft 365 Fundamentals Specialization)",
    issuer: "Microsoft",
    date: "Nov 2024",
     image: "/image/Microsoft01.jpg",
    pdfUrl: "/pdf/Microsoft01.pdf",
    credentialId: "EG21BTKFC1JX",
    description: "Penguasaan fitur-fitur lanjutan Microsoft Word untuk meningkatkan efisiensi dalam pembuatan dokumen",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/EG21BTKFC1JX",
    skills: ["Microsoft Word", "Document Processing", "Word Advanced Features"],
    color: "text-white dark:text-black"
  },
  {
      title: "Work Smarter with Microsoft Excel (Microsoft 365 Fundamentals Specialization)",
    issuer: "Microsoft",
    date: "Nov 2024",
     image: "/image/Microsoft02.jpg",
    pdfUrl: "/pdf/Microsoft02.pdf",
    credentialId: "IH6JLGACG7QX",
    description: "Penguasaan fungsi dan fitur lanjutan Excel untuk analisis data dan pembuatan laporan yang efektif",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/IH6JLGACG7QX",
    skills: ["Microsoft Excel", "Data Analysis", "Excel Advanced Features"],
    color: "text-white dark:text-black"
  },
  {
      title: "Work Smarter with Microsoft PowerPoint (Microsoft 365 Fundamentals Specialization)",
    issuer: "Microsoft",
    date: "Nov 2024",
     image: "/image/Microsoft03.jpg",
    pdfUrl: "/pdf/Microsoft03.pdf",
    credentialId: "KP926N6JESRT",
    description: "Penguasaan teknik presentasi efektif dan fitur lanjutan PowerPoint untuk membuat presentasi yang menarik",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/KP926N6JESRT",
    skills: ["Microsoft PowerPoint", "Presentation Skills", "PowerPoint Advanced Features"],
    color: "text-white dark:text-black"
  },
  {
      title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
     image: "/image/Belajar Dasar AI_page-0001.jpg",
    pdfUrl: "/pdf/01d.pdf",
    credentialId: "L4PQ1D3Y4XO1",
    description: "Pembelajaran fundamental tentang Artificial Intelligence, konsep dasar, dan implementasinya",
    validUntil: "Sep 2027",
    verificationUrl: "https://www.dicoding.com/certificates/L4PQ1D3Y4XO1",
    skills: ["Artificial Intelligence (AI)", "Machine Learning Basics", "AI Implementation"],
    color: "text-white dark:text-black"
  },
  {
      title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
     image: "/image/Belajar Dasar Manajemen Proyek_page-0001.jpg",
    pdfUrl: "/pdf/02d.pdf",
    credentialId: "2VX3RDJL4ZYQ",
    description: "Pembelajaran tentang dasar-dasar manajemen proyek, metodologi, dan best practices dalam pengelolaan proyek",
    validUntil: "Sep 2027",
    verificationUrl: "https://www.dicoding.com/certificates/2VX3RDJL4ZYQ",
    skills: ["Project Management", "Agile", "Scrum", "Project Planning"],
    color: "text-white dark:text-black"
  },
  {
      title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
     image: "/image/Belajar Dasar Structured Query Language (SQL)_page-0001.jpg",
    pdfUrl: "/pdf/03d.pdf",
    credentialId: "JLX1438YGX72",
    description: "Pembelajaran dasar tentang Structured Query Language (SQL) untuk pengelolaan dan manipulasi data dalam database.",
    validUntil: "Sep 2027",
    verificationUrl: "https://www.dicoding.com/certificates/JLX1438YGX72",
    skills: ["SQL", "Database Management", "Data Manipulation"],
    color: "text-white dark:text-black",
  },
  {
      title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
     image: "/image/Belajar Membuat Aplikasi Back-End untuk Pemula_page-0001.jpg",
    pdfUrl: "/pdf/04d.pdf",
    credentialId: "6RPN15L94X2M",
    description: "Pembelajaran dasar tentang pengembangan aplikasi back-end menggunakan Node.js dan konsep RESTful API.",
    validUntil: "Sep 2027",
    verificationUrl: "https://www.dicoding.com/certificates/6RPN15L94X2M",
    skills: ["Node.js", "RESTful API", "Back-End Development"],
    color: "text-white dark:text-black",
  },
  {
      title: "Belajar Strategi Pengembangan Diri",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
     image: "/image/Belajar Strategi Pengembangan Diri_page-0001.jpg",
    pdfUrl: "/pdf/05d.pdf",
    credentialId: "98XW5RWOLPM3",
    description: "Pembelajaran tentang strategi pengembangan diri untuk meningkatkan keterampilan dan karir.",
    validUntil: "Sep 2027",
    verificationUrl: "https://www.dicoding.com/certificates/98XW5RWOLPM3",
    skills: ["Personal Development", "Career Growth", "Self-Improvement"],
    color: "text-white dark:text-black",
  },
  {
      title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
     image: "/image/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)_page-0001.jpg",
    pdfUrl: "/pdf/06d.pdf",
    credentialId: "07Z609Q1MZQR",
    description: "Pembelajaran dasar tentang layanan AWS dan konsep cloud computing.",
    validUntil: "Sep 2027",
    verificationUrl: "https://www.dicoding.com/certificates/07Z609Q1MZQR",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing", "Cloud Services"],
    color: "text-white dark:text-black",
  },
  {
      title: "Spesialisasi Technology Entrepreneurship",
    issuer: "University of Colorado Boulder",
    date: "Sep 2024",
     image: "/image/Coursera QMITUWJ1T8ON_page-0001.jpg",
    pdfUrl: "/pdf/colorado04.pdf",
    credentialId: "QMITUWJ1T8ON",
    description: "Program spesialisasi lengkap tentang kewirausahaan teknologi",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/QMITUWJ1T8ON",
    skills: ["Technology Entrepreneurship", "Business Development", "Innovation Management"],
    color: "text-white dark:text-black"
  },
  {
      title: "Getting Started with Technology Startups (Spesialisasi Technology Entrepreneurship)",
    issuer: "University of Colorado Boulder",
    date: "Sep 2024",
     image: "/image/Coursera 4T71YV6WDJE0_page-0001.jpg",
    pdfUrl: "/pdf/colorado03.jpg",
    credentialId: "4T71YV6WDJE0",
    description: "Pengenalan dasar tentang dunia startup teknologi dan langkah-langkah memulainya",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/4T71YV6WDJE0",
    skills: ["Startup Basics", "Technology Business", "Innovation"],
    color: "text-white dark:text-black"
  },
  {
      title: "Creating a Technology Startup Company (Spesialisasi Technology Entrepreneurship)",
    issuer: "University of Colorado Boulder",
    date: "Sep 2024",
     image: "/image/Coursera GH7KYHUHTJQL_page-0001.jpg",
    pdfUrl: "/pdf/colorado01.pdf",
    credentialId: "GH7KYHUHTJQL",
    description: "Pembelajaran mendalam tentang proses pembuatan dan pengembangan startup teknologi",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/GH7KYHUHTJQL",
    skills: ["Startup Development", "Business Planning", "Technology Management"],
    color: "text-white dark:text-black"
  },
  {
      title: "Forming, Funding, and Launching a Technology Startup Company (Spesialisasi Technology Entrepreneurship)",
    issuer: "University of Colorado Boulder",
    date: "Sep 2024",
     image: "/image/Coursera 1L662BI91QSB_page-0001.jpg",
    pdfUrl: "/pdf/colorado02.pdf",
    credentialId: "1L662BI91QSB",
    description: "Studi komprehensif tentang pembentukan, pendanaan, dan peluncuran startup teknologi",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/1L662BI91QSB",
    skills: ["Startup Funding", "Business Launch", "Entrepreneurship"],
    color: "text-white dark:text-black"
  },

  {
      title: "Google AI Essentials",
    issuer: "Google",
    date: "Sep 2024",
     image: "/image/aies_page-0001.jpg",
    pdfUrl: "/pdf/aies.pdf",
    credentialId: "27S7R5OYH4CN",
    description: "Pembelajaran fundamental tentang AI dan implementasinya dalam produk-produk Google",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/27S7R5OYH4CN",
    skills: ["Artificial Intelligence", "Google AI Tools", "Machine Learning"],
    color: "text-white dark:text-black"
  },
  {
      title: "Google IT Support",
    issuer: "Google",
    date: "Sep 2024",
     image: "/image/Coursera J31H3IPRJPH5_page-0001.jpg",
    pdfUrl: "/pdf/06g.pdf",
    credentialId: "J31H3IPRJPH5",
    description: "Program komprehensif tentang dukungan IT dan manajemen sistem",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/J31H3IPRJPH5",
    skills: ["IT Support", "System Administration", "Technical Support"],
    color: "text-white dark:text-black"
  },

  {
      title: "Technical Support Fundamentals (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
     image: "/image/Coursera NVQK5OE1JISD_page-0001.jpg",
    pdfUrl: "/pdf/01g.pdf",
    credentialId: "NVQK5OE1JISD",
    description: "Pembelajaran dasar tentang dukungan teknis dan troubleshooting sistem IT",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/NVQK5OE1JISD",
    skills: ["Technical Support", "Troubleshooting", "Customer Service"],
    color: "text-white dark:text-black"
  },
  {
      title: "The Bits and Bytes of Computer Networking (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
     image: "/image/Coursera KO8602OT7N9Y_page-0001.jpg",
    pdfUrl: "/pdf/02g.jpg",
    credentialId: "KO8602OT7N9Y",
    description: "Studi mendalam tentang jaringan komputer dan protokol networking",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/KO8602OT7N9Y",
    skills: ["Computer Networking", "Network Protocols", "Network Administration"],
    color: "text-white dark:text-black"
  },
  {
      title: "Operating Systems and You: Becoming a Power User (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
     image: "/image/Coursera GFVP77LP2MOZ_page-0001.jpg",
    pdfUrl: "/pdf/03g.pdf",
    credentialId: "GFVP77LP2MOZ",
    description: "Studi mendalam tentang sistem operasi dan teknik-teknik advanced user",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/GFVP77LP2MOZ",
    skills: ["Operating Systems", "System Administration", "Power User Skills"],
    color: "text-white dark:text-black"
  },
  {
      title: "System Administration and IT Infrastructure Services (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
     image: "/image/Coursera KCNM15ETJ869_page-0001.jpg",
    pdfUrl: "/pdf/04g.pdf",
    credentialId: "KCNM15ETJ869",
    description: "Pembelajaran komprehensif tentang administrasi sistem dan layanan infrastruktur IT",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/KCNM15ETJ869",
    skills: ["System Administration", "IT Infrastructure", "Network Services"],
    color: "text-white dark:text-black"
  },
  {
      title: "IT Security: Defense against the digital dark arts (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
     image: "/image/Coursera CKRBS9RT0SW5_page-0001.jpg",
    pdfUrl: "/pdf/05g.pdf",
    credentialId: "CKRBS9RT0SW5",
    description: "Pembelajaran mendalam tentang keamanan IT dan praktik terbaik dalam cybersecurity",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://coursera.org/verify/CKRBS9RT0SW5",
    skills: ["IT Security", "Cybersecurity", "Network Security"],
    color: "text-white dark:text-black"
  },
  {
      title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024 - Jun 2027",
     image: "/image/Belajar Dasar Data Science_page-0001.jpg",
    pdfUrl: "/pdf/Belajar Dasar Data Science.pdf",
    credentialId: "GRX5O44K2P0M",
    description: "Pembelajaran fundamental tentang data science dan analisis data",
    validUntil: "Jun 2027",
    verificationUrl: "https://www.dicoding.com/certificates/GRX5O44K2P0M",
    skills: ["Data Science", "Data Analysis", "Statistical Analysis"],
    color: "text-white dark:text-black"
  },
  {
      title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024 - Jun 2027",
     image: "/image/Belajar Membuat Front-End Web untuk Pemula_page-0001.jpg",
    pdfUrl: "/pdf/Belajar Membuat Front-End Web untuk Pemula.pdf",
    credentialId: "07Z60QW52ZQR",
    description: "Pembelajaran tentang pengembangan front-end web menggunakan HTML, CSS, dan JavaScript",
    validUntil: "Jun 2027",
    verificationUrl: "https://www.dicoding.com/certificates/07Z60QW52ZQR",
    skills: ["Front-End Development", "HTML", "CSS", "JavaScript"],
    color: "text-white dark:text-black"
  },
  {
      title: "Memulai Pemrograman dengan Dart",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024 - Jun 2027",
     image: "/image/Memulai Pemrograman dengan Dart_page-0001.jpg",
    pdfUrl: "/pdf/Memulai Pemrograman dengan Dart.pdf",
    credentialId: "72ZDV5EVLZYW",
    description: "Pembelajaran dasar pemrograman menggunakan bahasa Dart dan konsep OOP",
    validUntil: "Jun 2027",
    verificationUrl: "https://www.dicoding.com/certificates/72ZDV5EVLZYW",
    skills: ["Dart", "Object-Oriented Programming", "Mobile Development"],
    color: "text-white dark:text-black"
  },
  {
      title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024 - Jun 2027",
     image: "/image/Memulai Pemrograman dengan Kotlin_page-0001.jpg",
    pdfUrl: "/pdf/Memulai Pemrograman dengan Kotlin.pdf",
    credentialId: "N9ZOM9EM6PG5",
    description: "Pembelajaran dasar pemrograman menggunakan bahasa Kotlin untuk pengembangan Android",
    validUntil: "Jun 2027",
    verificationUrl: "https://www.dicoding.com/certificates/N9ZOM9EM6PG5",
    skills: ["Kotlin", "Android Development", "Object-Oriented Programming"],
    color: "text-white dark:text-black"
  },
  {
      title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Mei 2024 - Mei 2027",
     image: "/image/Belajar Dasar Pemrograman JavaScript_page-0001.jpg",
    pdfUrl: "/pdf/Belajar Dasar Pemrograman JavaScript.pdf",
    credentialId: "GRX5OQOMRP0M",
    description: "Pembelajaran komprehensif tentang dasar-dasar JavaScript dan pemrograman web",
    validUntil: "Mei 2027",
    verificationUrl: "https://www.dicoding.com/certificates/GRX5OQOMRP0M",
    skills: ["JavaScript", "Web Development", "DOM Manipulation"],
    color: "text-white dark:text-black"
  },
  {
      title: "International Bootcamp Data Analyst",
    issuer: "SmartPath",
    date: "Mei 2024",
     image: "/image/International Bootcamp Data Analyst_page-0001.jpg",
    pdfUrl: "/pdf/International Bootcamp Data Analyst.pdf",
    credentialId: "078/SP/VI/2024",
    description: "Program bootcamp intensif untuk analisis data dan visualisasi",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://smartpath.id",
    skills: ["Data Analysis", "Data Visualization", "Statistical Analysis"],
    color: "text-white dark:text-black"
  },
  {
      title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Apr 2024 - Apr 2027",
     image: "/image/Belajar Dasar Pemrograman Web_page-0001.jpg",
    pdfUrl: "/pdf/Belajar Dasar Pemrograman Web.pdf",
    credentialId: "MRZMEDL4NPYQ",
    description: "Pembelajaran fundamental tentang pengembangan web menggunakan HTML dan CSS",
    validUntil: "Apr 2027",
    verificationUrl: "https://www.dicoding.com/certificates/MRZMEDL4NPYQ",
    skills: ["HTML", "CSS", "Web Development"],
    color: "text-white dark:text-black"
  },
  {
      title: "Memulai Pemrograman Dengan C",
    issuer: "Dicoding Indonesia",
    date: "Mar 2024 - Mar 2027",
     image: "/image/Memulai Pemrograman Dengan C_page-0001.jpg",
    pdfUrl: "/pdf/Memulai Pemrograman Dengan C.pdf",
    credentialId: "MRZM82V8KZYQ",
    description: "Pembelajaran dasar pemrograman menggunakan bahasa C",
    validUntil: "Mar 2027",
    verificationUrl: "https://www.dicoding.com/certificates/MRZM82V8KZYQ",
    skills: ["C Programming", "Algorithm", "Data Structures"],
    color: "text-white dark:text-black"
  },
  {
      title: "Membuat Aplikasi To Do List dengan Laravel",
    issuer: "Dunia Coding",
    date: "2024",
     image: "/image/Membuat Aplikasi To Do List dengan Laravel_page-0001.jpg",
    pdfUrl: "/pdf/Membuat Aplikasi To Do List dengan Laravel.pdf",
    credentialId: "DC/2024/001",
    description: "Proyek pengembangan aplikasi To Do List menggunakan framework Laravel",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://duniacoding.id",
    skills: ["Laravel", "PHP", "MySQL", "Web Development"],
    color: "text-white dark:text-black"
  },
  {
      title: "Membuat Website Toko Online dengan Laravel",
    issuer: "Dunia Coding",
    date: "2024",
     image: "/image/Membuat Website Toko Online dengan Laravel_page-0001.jpg",
    pdfUrl: "/pdf/Membuat Website Toko Online dengan Laravel.pdf",
    credentialId: "DC/2024/002",
    description: "Proyek pengembangan website e-commerce menggunakan framework Laravel",
    validUntil: "Seumur Hidup",
    verificationUrl: "https://duniacoding.id",
    skills: ["Laravel", "PHP", "MySQL", "E-commerce Development"],
    color: "text-white dark:text-black"
  }
];

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const filteredCertificates = certificateData.filter(cert =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-white to-white dark:from-black dark:to-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-10">
          <Link href="/#certificate">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft size={20} />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Daftar Lengkap Licenses and Certifications
        </motion.h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Cari sertifikat atau skill..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.title + index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold">{cert.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Penerbit:</span> {cert.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Tanggal Perolehan:</span> {cert.date}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-950 dark:bg-blue-50 text-blue-50 dark:text-gray-950 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        <Button
                          onClick={() => {
                            setSelectedCert(cert);
                            setShowDetails(false);
                          }}
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          <Eye size={16} />
                          Lihat PDF
                        </Button>
                        <Button
                          onClick={() => {
                            setSelectedCert(cert);
                            setShowDetails(true);
                          }}
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          <Info size={16} />
                          Keterangan
                        </Button>
                        <Button
                          onClick={() => window.open(cert.verificationUrl, '_blank')}
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Verifikasi
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => {
                setSelectedCert(null);
                setShowDetails(false);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
                onClick={e => e.stopPropagation()}
              >
                {showDetails ? (
                  // Tampilan Keterangan
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold mb-4">{selectedCert.title}</h2>
                    <div className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Penerbit:</span> {selectedCert.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Tanggal Perolehan:</span> {selectedCert.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">ID Kredensial:</span> {selectedCert.credentialId}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Berlaku Sampai:</span> {selectedCert.validUntil}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 mt-4">
                        {selectedCert.description}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-6">
                      <Button
                        onClick={() => setShowDetails(false)}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Eye size={16} />
                        Lihat PDF
                      </Button>
                      <Button
                        onClick={() => window.open(selectedCert.pdfUrl, '_blank')}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Download size={16} />
                        Unduh PDF
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Tampilan PDF
                  <div className="h-[80vh]">
                    <div className="flex justify-between items-center mb-2">
                      <Button
                        onClick={() => setShowDetails(true)}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Info size={16} />
                        Lihat Keterangan
                      </Button>
                      <Button
                        onClick={() => window.open(selectedCert.pdfUrl, '_blank')}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Download size={16} />
                        Unduh PDF
                      </Button>
                    </div>
                    <iframe
                      src={selectedCert.pdfUrl}
                      className="w-full h-full rounded-lg"
                      title="PDF Viewer"
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
} 