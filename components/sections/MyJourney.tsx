import { useState } from "react";

const ITEMS_PER_PAGE = 3;

const journeyData = [
  {
    id: 5,
    date: "Sep 2024 - Sep 2024",
    title: "Dicoding for University",
    description: 
      "Program Beasiswa Sertifikasi Dicoding Bangun Negeri, dengan materi: Belajar Dasar Manajemen Proyek, Belajar Dasar AI, Belajar Dasar Data Science, Belajar Dasar Structured Query Language (SQL), dan Belajar Strategi Pengembangan Diri. Melalui program ini, saya memperoleh pemahaman komprehensif tentang manajemen proyek, kecerdasan buatan, data science, dan pengembangan diri yang sangat berharga untuk karir di bidang teknologi.",
    tags: ["PROJECT MANAGEMENT", "AI", "DATA SCIENCE", "SQL", "SELF DEVELOPMENT"],
    images: [
      "/journey/dicoding1.png",
      "/image/Belajar Dasar Manajemen Proyek_page-0001.jpg",
      "/image/Belajar Dasar AI_page-0001.jpg",
      "/image/Belajar Dasar Data Science_page-0001.jpg",
      "/image/Belajar Dasar Structured Query Language (SQL)_page-0001.jpg",
      "/image/Belajar Strategi Pengembangan Diri_page-0001.jpg"
    ],
    link: "#",
    isNew: true
},
  {
    id: 3,
    date: "Jul 2024 - Sep 2024",
    title: "AWS Back-End Academy",
    description: 
      "Program Beasiswa Sertifikasi Back-End dari Amazon Web Services (AWS) bersama Dicoding, dengan materi: Cloud Practitioner Essentials (Belajar Dasar AWS Cloud), Belajar Dasar Pemrograman JavaScript, dan Belajar Membuat Aplikasi Back-End untuk Pemula. Melalui program ini, saya mendapatkan pemahaman mendalam tentang layanan cloud AWS dan pengembangan aplikasi back-end.",
    tags: ["AWS CLOUD", "JAVASCRIPT", "BACK-END"],
    images: [
      "/journey/aws1.png",
      "/image/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)_page-0001.jpg",
      "/image/Belajar Dasar Pemrograman JavaScript_page-0001.jpg",
      "/image/Belajar Membuat Aplikasi Back-End untuk Pemula_page-0001.jpg",
      
    ],
    link: "#",
    isNew: false
},
{
    id: 4,
    date: "Apr 2024 - Jun 2024",
    title: "DBS Foundation Coding Camp 2024",
    description:
      "Program Beasiswa Sertifikasi DBS Foundation Coding Camp 2024 alur belajar Front-End Web Developer Bersama dicoding, dengan materi: Belajar Dasar Pemrograman Web, Belajar Dasar Pemrograman JavaScript, dan Belajar Membuat Front-End Web untuk Pemula. Program ini membekali saya dengan keterampilan fundamental dalam pengembangan web front-end dan pemrograman JavaScript.",
    tags: ["FRONT-END", "JAVASCRIPT", "WEB DEVELOPMENT"],
    images: [
      "/journey/dbs1.png",
      "/image/Belajar Dasar Pemrograman Web_page-0001.jpg",
      "/image/Belajar Dasar Pemrograman JavaScript_page-0001.jpg",
      "/image/Belajar Membuat Front-End Web untuk Pemula_page-0001.jpg",
      
    ],
    link: "#",
    isNew: false
},
  {
    id: 1,
    date: "Sep 2023 - Ags 2024",
    title: "Full-stack Web Developer Intern",
    description:
      "Sebagai Full-stack Developer Intern di Dinas Perhubungan Kota Banjarbaru mencakup pengembangan aplikasi berbasis web bernama E-SAKIP. Aplikasi ini dirancang untuk meningkatkan sistem akuntabilitas kinerja instansi pemerintah dengan menggantikan metode penilaian manual berbasis Excel menjadi sistem digital yang lebih efisien dan terintegrasi.",
    tags: ["CODEIGNITER", "BOOSTRAP", "MYSQL"],
    images: [
      "/journey/full2.png",
      "/journey/full1.png",
    ],
    link: "#",
    isNew: false
  },
  {
    id: 2,
    date: "Sep - Nov 2023",
    title: "Student Intern Dinas Perhubungan Kota Banjarbaru",
    description:
      "Saya berkesempatan untuk mengikuti program magang di Dinas Perhubungan Kota Banjarbaru pada periode September hingga November 2023. Dalam program ini, saya ditempatkan di bagian Sekretariat Sub Bagian Perencanaan dan Keuangan, di mana saya mengembangkan keterampilan di berbagai bidang, seperti Web Development, Microsoft Excel, Microsoft Word, Microsoft PowerPoint, dan Canva. Gambar ini mengabadikan momen saya menerima cenderamata sebagai bentuk penghargaan dari pihak dinas, didampingi oleh para pegawai yang mendukung selama program magang berlangsung.",
    tags: ["WEB DEVELOPMENT", "MICROSOFT EXCEL", "MICROSOFT WORD", "MICROSOFT POWERPOINT", "CANVA"],
    images: [
      "/journey/magang1.jpg",
      "/journey/magang2.jpg",
      "/journey/magang3.jpg"
    ],
    link: "https://tablesignage.com",
    isNew: false
  },

];

export default function MyJourney() {
  const [currentIndexes, setCurrentIndexes] = useState(journeyData.map(() => 0));
  const [expandedDescriptions, setExpandedDescriptions] = useState(journeyData.map(() => false));
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const showLoadMore = journeyData.length > ITEMS_PER_PAGE;
  const hasMoreItems = visibleItems < journeyData.length;

  const handlePrev = (journeyIndex: number) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === journeyIndex
          ? index === 0
            ? journeyData[i].images.length - 1
            : index - 1
          : index
      )
    );
  };

  const handleNext = (journeyIndex: number) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === journeyIndex
          ? index === journeyData[i].images.length - 1
            ? 0
            : index + 1
          : index
      )
    );
  };

  const toggleDescription = (index: number) => {
    setExpandedDescriptions((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + ITEMS_PER_PAGE);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section id="my-journey" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-950 dark:text-white mb-8">
          My Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-0 sm:px-9 md:px-9">
          {journeyData.slice(0, visibleItems).map((item, journeyIndex) => (
            <div
              key={item.id}
              className="relative bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02]"
            >
              {item.isNew && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-sm font-bold text-white bg-yellow-600 rounded-full animate-pulse">
                    New Post
                  </span>
                </div>
              )}
              <div className="relative">
                <img
                  src={item.images[currentIndexes[journeyIndex]]}
                  alt={item.title}
                  className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <button
                  onClick={() => handlePrev(journeyIndex)}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl"
                >
                  ‹
                </button>
                <button
                  onClick={() => handleNext(journeyIndex)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl"
                >
                  ›
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {item.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm font-medium text-blue-50 bg-gray-950 dark:text-gray-950 dark:bg-gray-50 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-gray-700 dark:text-gray-400 mt-2">
                  {expandedDescriptions[journeyIndex] 
                    ? item.description 
                    : truncateText(item.description, 150)}
                  {item.description.length > 150 && (
                    <button
                      onClick={() => toggleDescription(journeyIndex)}
                      className="ml-2 text-gray-950 dark:text-blue-50 hover:underline focus:outline-none"
                    >
                      {expandedDescriptions[journeyIndex] ? "Baca lebih sedikit" : "Baca selengkapnya"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showLoadMore && hasMoreItems && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-gray-950 dark:bg-white dark:text-black text-white rounded-lg hover:bg-gray-800 hover:dark:bg-gray-300 transition-colors duration-300"
            >
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
}