import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download, ExternalLink } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const certificateData = [
  {
    title: "Certified Program Analyst",
    issuer: "Badan Nasional Sertifikasi Profesi",
    date: "2024 - 2027",
    image: "/image/lsp.jpg",
    pdfUrl: "/pdf/sertifikat-LSP.pdf", 
    verificationUrl: "https://bnsp.go.id",
    credentialId: "13218165",
    color: "text-white dark:text-black",
  },
  {
    title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    issuer: "Stanford University",
    date: "Nov 2024",
    image: "/image/stanford01.jpg",
    pdfUrl: "/pdf/stanford01.pdf",
    verificationUrl: "https://coursera.org/verify/CYPK5NNYCNWA",
    credentialId: "CYPK5NNYCNWA",
    color: "text-white dark:text-black",
  },
  {
    title: "Spesialisasi Generative AI Leadership & Strategy",
    issuer: "Vanderbilt University",
    date: "Des 2024", 
    image: "/image/Vanderbilt04.jpg",
    pdfUrl: "/pdf/Vanderbilt04.pdf",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/MDXV4Q5DV0UR",
    credentialId: "MDXV4Q5DV0UR",
    color: "text-white dark:text-black",
  },
  {
    title: "Generative AI for Leaders (Spesialisasi Generative AI Leadership & Strategy)",
    issuer: "Vanderbilt University",
    date: "Des 2024",
    image: "/image/Vanderbilt01.jpg",
    pdfUrl: "/pdf/Vanderbilt01.pdf",
    verificationUrl: "https://coursera.org/verify/SK8YHQ830GRT",
    credentialId: "SK8YHQ830GRT",
    color: "text-white dark:text-black",
  },
  {
    title: "Prompt Engineering for ChatGPT (Spesialisasi Generative AI Leadership & Strategy)",
    issuer: "Vanderbilt University", 
    date: "Des 2024",
    image: "/image/Vanderbilt02.jpg",
    pdfUrl: "/pdf/Vanderbilt02.pdf",
    verificationUrl: "https://coursera.org/verify/YSYTDPFVF0MQ",
    credentialId: "YSYTDPFVF0MQ",
    color: "text-white dark:text-black",
  }, 
  {
    title: "Trustworthy Generative AI (Spesialisasi Generative AI Leadership & Strategy)",
    issuer: "Vanderbilt University",
    date: "Des 2024",
    image: "/image/Vanderbilt03.jpg", 
    pdfUrl: "/pdf/Vanderbilt03.pdf",
    verificationUrl: "https://coursera.org/verify/SDJYLTOWC54W",
    credentialId: "SDJYLTOWC54W",
    color: "text-white dark:text-black",
  },
    {
    title: "Microsoft 365 Fundamentals Specialization",
    issuer: "Microsoft",
    date: "Nov 2024",
    image: "/image/Microsoft04.jpg",
    pdfUrl: "/pdf/Microsoft04.pdf",
    verificationUrl: "https://coursera.org/verify/VDDTXBW38FS3",
    credentialId: "VDDTXBW38FS3",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    color: "text-white dark:text-black",
  },
  {
    title: "Work Smarter with Microsoft Word (Microsoft 365 Fundamentals Specialization)",
    issuer: "Microsoft",
    date: "Nov 2024",
    image: "/image/Microsoft01.jpg",
    pdfUrl: "/pdf/Microsoft01.pdf",
    verificationUrl: "https://coursera.org/verify/EG21BTKFC1JX",
    credentialId: "EG21BTKFC1JX",
    color: "text-white dark:text-black",
  },
  {
    title: "Work Smarter with Microsoft Excel (Microsoft 365 Fundamentals Specialization)",
    issuer: "Microsoft",
    date: "Nov 2024",
    image: "/image/Microsoft02.jpg",
    pdfUrl: "/pdf/Microsoft02.pdf",
    verificationUrl: "https://coursera.org/verify/IH6JLGACG7QX",
    credentialId: "IH6JLGACG7QX",
    color: "text-white dark:text-black",
  },
  {
    title: "Work Smarter with Microsoft PowerPoint (Microsoft 365 Fundamentals Specialization)",
    issuer: "Microsoft",
    date: "Nov 2024",
    image: "/image/Microsoft03.jpg",
    pdfUrl: "/pdf/Microsoft03.pdf",
    verificationUrl: "https://coursera.org/verify/KP926N6JESRT",
    credentialId: "KP926N6JESRT",
    color: "text-white dark:text-black",
  },
  
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
    image: "/image/Belajar Dasar AI_page-0001.jpg",
    pdfUrl: "/pdf/01d.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/L4PQ1D3Y4XO1",
    credentialId: "L4PQ1D3Y4XO1",
    skills: ["Artificial Intelligence (AI)"],
    color: "text-white dark:text-black",
  },
  {
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
    image: "/image/Belajar Dasar Manajemen Proyek_page-0001.jpg",
    pdfUrl: "/pdf/02d.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/2VX3RDJL4ZYQ",
    credentialId: "2VX3RDJL4ZYQ",
    skills: ["Project Management"],
    color: "text-white dark:text-black",
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
    image: "/image/Belajar Dasar Structured Query Language (SQL)_page-0001.jpg",
    pdfUrl: "/pdf/03d.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/JLX1438YGX72",
    credentialId: "JLX1438YGX72",
    skills: ["Nysql"],
    color: "text-white dark:text-black",
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
    image: "/image/Belajar Membuat Aplikasi Back-End untuk Pemula_page-0001.jpg",
    pdfUrl: "/pdf/04d.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/6RPN15L94X2M",
    credentialId: "6RPN15L94X2M",
    skills: ["Node.js"],
    color: "text-white dark:text-black",
  },
  {
    title: "Belajar Strategi Pengembangan Diri",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
    image: "/image/Belajar Strategi Pengembangan Diri_page-0001.jpg",
    pdfUrl: "/pdf/05d.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/98XW5RWOLPM3",
    credentialId: "98XW5RWOLPM3",
    color: "text-white dark:text-black",
  },
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024 - Sep 2027",
    image: "/image/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)_page-0001.jpg",
    pdfUrl: "/pdf/06d.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/07Z609Q1MZQR",
    credentialId: "07Z609Q1MZQR",
    skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
    color: "text-white dark:text-black",
  },
  {
    title: "Spesialisasi Technology Entrepreneurship",
    issuer: "University of Colorado Boulder",
    date: "Sep 2024",
    image: "/image/Coursera QMITUWJ1T8ON_page-0001.jpg",
    pdfUrl: "/pdf/colorado04.pdf",
    verificationUrl: "https://coursera.org/verify/QMITUWJ1T8ON",
    credentialId: "QMITUWJ1T8ON",
    color: "text-white dark:text-black",
  },
  {
    title: "Getting Started with Technology Startups (Spesialisasi Technology Entrepreneurship)",
    issuer: "University of Colorado Boulder",
    date: "Sep 2024",
    image: "/image/Coursera 4T71YV6WDJE0_page-0001.jpg",
    pdfUrl: "/pdf/colorado03.jpg",
    verificationUrl: "https://coursera.org/verify/4T71YV6WDJE0",
    credentialId: "4T71YV6WDJE0",
    color: "text-white dark:text-black",
  },
  {
    title: "Creating a Technology Startup Company (Spesialisasi Technology Entrepreneurship)",
    issuer: "University of Colorado Boulder",
    date: "Sep 2024",
    image: "/image/Coursera GH7KYHUHTJQL_page-0001.jpg",
    pdfUrl: "/pdf/colorado01.pdf",
    verificationUrl: "https://coursera.org/verify/GH7KYHUHTJQL",
    credentialId: "GH7KYHUHTJQL",
    color: "text-white dark:text-black",
  },
  {
    title: "Forming, Funding, and Launching a Technology Startup Company (Spesialisasi Technology Entrepreneurship)",
    issuer: "University of Colorado Boulder",
    date: "Sep 2024",
    image: "/image/Coursera 1L662BI91QSB_page-0001.jpg",
    pdfUrl: "/pdf/colorado02.pdf",
    verificationUrl: "https://coursera.org/verify/1L662BI91QSB",
    credentialId: "1L662BI91QSB",
    color: "text-white dark:text-black",
  },

  {
    title: "Google AI Essentials",
    issuer: "Google",
    date: "Sep 2024",
    image: "/image/aies_page-0001.jpg",
    pdfUrl: "/pdf/aies.pdf",
    verificationUrl: "https://coursera.org/verify/27S7R5OYH4CN",
    credentialId: "27S7R5OYH4CN",
    skills: ["Artificial Intelligence (AI)"],
    color: "text-white dark:text-black",
  },
  {
    title: "Google IT Support",
    issuer: "Google",
    date: "Sep 2024",
    image: "/image/Coursera J31H3IPRJPH5_page-0001.jpg",
    pdfUrl: "/pdf/06g.pdf",
    verificationUrl: "https://coursera.org/verify/J31H3IPRJPH5",
    credentialId: "J31H3IPRJPH5",
    color: "text-white dark:text-black",
  },
  {
    title: "Technical Support Fundamentals (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
    image: "/image/Coursera NVQK5OE1JISD_page-0001.jpg",
    pdfUrl: "/pdf/01g.pdf",
    verificationUrl: "https://coursera.org/verify/NVQK5OE1JISD",
    credentialId: "NVQK5OE1JISD",
    skills: ["Technical Support"],
    color: "text-white dark:text-black",
  },  
  {
    title: "The Bits and Bytes of Computer Networking (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
    image: "/image/Coursera KO8602OT7N9Y_page-0001.jpg",
    pdfUrl: "/pdf/02g.jpg",
    verificationUrl: "https://coursera.org/verify/KO8602OT7N9Y",
    credentialId: "KO8602OT7N9Y",
    color: "text-white dark:text-black",
  },
  {
    title: "Operating Systems and You: Becoming a Power User (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
    image: "/image/Coursera GFVP77LP2MOZ_page-0001.jpg",
    pdfUrl: "/pdf/03g.pdf",
    verificationUrl: "https://coursera.org/verify/GFVP77LP2MOZ",
    credentialId: "GFVP77LP2MOZ",
    color: "text-white dark:text-black",
  },
  
  {
    title: "System Administration and IT Infrastructure Services (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
    image: "/image/Coursera KCNM15ETJ869_page-0001.jpg",
    pdfUrl: "/pdf/04g.pdf",
    verificationUrl: "https://coursera.org/verify/KCNM15ETJ869",
    credentialId: "KCNM15ETJ869",
    color: "text-white dark:text-black",
  },
  {
    title: "IT Security: Defense against the digital dark arts (Google IT Support)",
    issuer: "Google",
    date: "Sep 2024",
    image: "/image/Coursera CKRBS9RT0SW5_page-0001.jpg",
    pdfUrl: "/pdf/05g.pdf",
    verificationUrl: "https://coursera.org/verify/CKRBS9RT0SW5",
    credentialId: "CKRBS9RT0SW5",
    skills: ["IT Security"],
    color: "text-white dark:text-black",
  },
  {
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024 - Jun 2027",
    image: "/image/Belajar Dasar Data Science_page-0001.jpg",
    pdfUrl: "/pdf/Belajar Dasar Data Science.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/GRX5O44K2P0M",
    credentialId: "GRX5O44K2P0M",
    skills: ["MySQL", "Data Analysis"],
    color: "text-white dark:text-black",
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024 - Jun 2027",
    image: "/image/Belajar Membuat Front-End Web untuk Pemula_page-0001.jpg",
    pdfUrl: "/pdf/Belajar Membuat Front-End Web untuk Pemula.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/07Z60QW52ZQR",
    credentialId: "07Z60QW52ZQR",
    skills: ["Document Object Model (DOM)", "Browser Object Model (BOM)", "Event Handling", "Web Storage API"],
    color: "text-white dark:text-black",
  },
  {
    title: "Memulai Pemrograman dengan Dart",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024 - Jun 2027",
    image: "/image/Memulai Pemrograman dengan Dart_page-0001.jpg",
    pdfUrl: "/pdf/Memulai Pemrograman dengan Dart.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/72ZDV5EVLZYW",
    credentialId: "72ZDV5EVLZYW",
    skills: ["Dart", "Object-Oriented Programming (OOP)"],
    color: "text-white dark:text-black",
  },
  {
    title: "Memulai Pemrograman dengan Kotlin",
    issuer: "Dicoding Indonesia",
    date: "Jun 2024 - Jun 2027",
    image: "/image/Memulai Pemrograman dengan Kotlin_page-0001.jpg",
    pdfUrl: "/pdf/Memulai Pemrograman dengan Kotlin.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/N9ZOM9EM6PG5",
    credentialId: "N9ZOM9EM6PG5",
    skills: ["Kotlin", "Object-Oriented Programming (OOP)"],
    color: "text-white dark:text-black",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Mei 2024 - Mei 2027",
    image: "/image/Belajar Dasar Pemrograman JavaScript_page-0001.jpg",
    pdfUrl: "/pdf/Belajar Dasar Pemrograman JavaScript.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/GRX5OQOMRP0M",
    credentialId: "GRX5OQOMRP0M",
    skills: ["Object-Oriented Programming (OOP)", "Data Structures", "Functional Programming", "JavaScript"],
    color: "text-white dark:text-black",
  },
  {
    title: "International Bootcamp Data Analyst",
    issuer: "SmartPath",
    date: "Mei 2024",
    image: "/image/International Bootcamp Data Analyst_page-0001.jpg",
    pdfUrl: "/pdf/International Bootcamp Data Analyst.pdf",
    verificationUrl: "https://smartpath.id",
    credentialId: "078/SP/VI/2024",
    skills: ["Data Analysis", "MySQL"],
    color: "text-white dark:text-black",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Apr 2024 - Apr 2027",
    image: "/image/Belajar Dasar Pemrograman Web_page-0001.jpg",
    pdfUrl: "/pdf/Belajar Dasar Pemrograman Web.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/MRZMEDL4NPYQ",
    credentialId: "MRZMEDL4NPYQ",
    skills: ["HTML", "Cascading Style Sheets (CSS)"],
    color: "text-white dark:text-black",
  },
  {
    title: "Memulai Pemrograman Dengan C",
    issuer: "Dicoding Indonesia",
    date: "Mar 2024 - Mar 2027",
    image: "/image/Memulai Pemrograman Dengan C_page-0001.jpg",
    pdfUrl: "/pdf/Memulai Pemrograman Dengan C.pdf",
    verificationUrl: "https://www.dicoding.com/certificates/MRZM82V8KZYQ",
    credentialId: "MRZM82V8KZYQ",
    color: "text-white dark:text-black",
  },
  {
    title: "Membuat Aplikasi To Do List dengan Laravel",
    issuer: "Dunia Coding",
    date: "2024",
    image: "/image/Membuat Aplikasi To Do List dengan Laravel_page-0001.jpg",
    pdfUrl: "/pdf/Membuat Aplikasi To Do List dengan Laravel.pdf",
    verificationUrl: "https://duniacoding.id",
    skills: ["Laravel", "PHP", "JavaScript", "HTML", "Cascading Style Sheets (CSS)", "MySQL"],
    color: "text-white dark:text-black",
  },
  {
    title: "Membuat Website Toko Online dengan Laravel",
    issuer: "Dunia Coding",
    date: "2024",
    image: "/image/Membuat Website Toko Online dengan Laravel_page-0001.jpg",
    pdfUrl: "/pdf/Membuat Website Toko Online dengan Laravel.pdf",
    verificationUrl: "https://duniacoding.id",
    skills: ["Laravel", "PHP", "JavaScript", "HTML", "Cascading Style Sheets (CSS)", "MySQL"],
    color: "text-white dark:text-black",
  }

];

const ITEMS_PER_PAGE = 3;

const Certificate = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const showLoadMore = certificateData.length > ITEMS_PER_PAGE;
  const hasMoreItems = visibleItems < certificateData.length;

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + ITEMS_PER_PAGE);
  };

  const handleViewPdf = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <section 
      id="certificate" 
      className="py-20 bg-gradient-to-br from-white to-white dark:from-black dark:to-black transition-all duration-300"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-gray-100 tracking-tight"
        >
          Lisensi dan Sertifikasi
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateData.slice(0, visibleItems).map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 }}}
              className="perspective-1000"
            >
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 dark:opacity-20`}></div>
                <CardContent className="p-6 relative z-10">
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Diperoleh: {cert.date}
                    </p>
                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={() => handleViewPdf(cert.pdfUrl)}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Eye size={16} />
                        Lihat PDF
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
        </div>

        {/* Modal PDF Viewer */}
        {selectedPdf && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg w-full max-w-5xl h-[90vh] flex flex-col">
              <div className="flex justify-end mb-2">
                <Button
                  onClick={handleClosePdf}
                  variant="outline"
                  className="mb-2"
                >
                  Tutup
                </Button>
              </div>
              <div className="flex-1 relative">
                <iframe
                  src={selectedPdf}
                  className="w-full h-full rounded-lg"
                  title="PDF Viewer"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          {showLoadMore && hasMoreItems && (
            <Button
              onClick={handleLoadMore}
              variant="outline"
              className="w-full sm:w-auto px-8 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              Tampilkan Lebih Banyak
            </Button>
          )}
          
          <Link href="/certificates" className="w-full sm:w-auto">
            <Button
              variant="default"
              className="w-full px-6 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Lihat Detail Semua Sertifikat
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Certificate;