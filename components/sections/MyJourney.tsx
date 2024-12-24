import { useState } from "react";

const ITEMS_PER_PAGE = 4;

const journeyData = [
  {
    id: 15,
    date: "Des 2024",
    title: "Spesialisasi Generative AI Leadership & Strategy dari Vanderbilt University!",
    description: `
     🎉 Saya sangat senang karena telah berhasil meraih sertifikasi baru: Spesialisasi Generative AI Leadership & Strategy dari Vanderbilt University!🚀

Dalam kursus ini, saya mendalami berbagai keterampilan penting yang berkaitan dengan pemecahan masalah, manajemen risiko, kreativitas, serta kepemimpinan dan manajemen. Saya kini lebih siap untuk menghadapi tantangan di dunia profesional dengan alat AI generatif dan strategi inovatif yang dapat diterapkan dalam berbagai situasi.

Terima kasih untuk semua materi dan pengalaman berharga yang telah diberikan, dan saya sangat antusias untuk menerapkan pengetahuan ini di proyek-proyek mendatang.
`,
    tags: [],
    images: [
     "/image/Vanderbilt04.jpg",
"/image/Vanderbilt01.jpg",
"/image/Vanderbilt02.jpg",
"/image/Vanderbilt03.jpg", 
    
    ],
    link: "#",
    isNew: true,
    },
  {
    id: 14,
    date: "Des 2024",
    title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms dari Stanford University",
    description: `
     🌟 Sangat Senang untuk Membagikan Pencapaian Ini! 🌟

Dengan penuh rasa syukur, saya ingin berbagi bahwa saya telah berhasil menyelesaikan kursus "Divide and Conquer, Sorting and Searching, and Randomized Algorithms" yang diselenggarakan oleh Stanford University melalui Coursera!

Kursus ini, yang diajarkan oleh Tim Roughgarden, telah memberikan saya pemahaman yang mendalam tentang teknik algoritma penting dan penerapannya. Perjalanan pembelajaran ini sangat luar biasa, dan saya merasa beruntung dapat meningkatkan keterampilan saya di bidang ilmu komputer dan pemecahan masalah.

Terima kasih kepada Stanford Online atas kesempatan belajar yang luar biasa ini. 🎓
`,
    tags: [],
    images: [
     "/image/stanford01.jpg",    
    ],
    link: "#",
},
  {
    id: 13,
    date: "Des 2024",
    title: "Wisuda XLVIII Universitas Islam Kalimantan (UNISKA)",
    description: `
      Alhamdulillah, Wisuda XLVIII Universitas Islam Kalimantan (UNISKA)

Rabu, 4 Desember 2024 menjadi salah satu momen paling istimewa dalam hidup saya. Setelah perjalanan panjang penuh perjuangan, tantangan, dan pembelajaran, akhirnya saya resmi menyelesaikan studi di Universitas Islam Kalimantan Muhammad Arsyad Al Banjari Banjarmasin.

Wisuda ini adalah awal dari babak baru, dan saya siap untuk terus belajar, berkarya, serta memberikan kontribusi terbaik bagi masyarakat dan bangsa. Terima kasih kepada keluarga, dosen, teman-teman, dan semua pihak yang telah mendukung saya selama ini.

Semoga ilmu yang saya dapatkan membawa manfaat dan keberkahan di masa depan.
`,
    tags: [],
    images: [
      "/journey/w4.jpeg",
      "/journey/w3.jpeg",
      "/journey/w2.jpeg",
      "/journey/w1.jpeg",
    
    ],
    link: "#",
    
    isPinned: true
},
  {
    id: 12,
    date: "Nov 2024",
    title: "Sertifikat Kompetensi Program Analyst",
    description: `
      Dengan penuh rasa syukur, saya ingin membagikan pencapaian terbaru dalam perjalanan profesional saya. Saya telah berhasil memperoleh Sertifikat Kompetensi Program Analyst yang diterbitkan oleh Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Universitas Islam Kalimantan (UNISKA).

Sertifikasi ini merupakan pengakuan resmi atas kompetensi saya dalam bidang Analisis Program (Program Analyst), mencakup berbagai aspek penting seperti:
- Analisis skalabilitas perangkat lunak.
- Manajemen data menggunakan SQL.
- Penerapan akses basis data.
- Implementasi algoritma pemrograman.
- Dokumentasi kode program.
- Debugging dan profiling program untuk optimasi.
- Review kode program dan pengujian integrasi.

Pencapaian ini bukan sekadar sebuah sertifikat, tetapi juga komitmen untuk terus berinovasi dan berkontribusi dalam pengembangan teknologi informasi, khususnya dalam analisis dan pengembangan perangkat lunak.

Saya ingin menyampaikan apresiasi yang mendalam kepada pihak-pihak yang telah mendukung dan memberikan kesempatan selama proses ini. Semoga sertifikasi ini menjadi motivasi untuk terus mengembangkan kemampuan dan menghadirkan solusi teknologi yang bernilai.
`,
    tags: [],
    images: [
      "/image/lsp.jpg",
    
    ],
    link: "#",
    
    
},
  {
    id: 11,
    date: "Nov 2024",
    title: "Yudisium Sarjana Fakultas Teknologi Informasi Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari",
    description: `
      ✨ Momen penuh kebanggaan di Yudisium Sarjana Fakultas Teknologi Informasi Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari ✨

Pada tanggal 21 November 2024, bertempat di Hotel Galaxy Banjarmasin, saya dengan bangga mengikuti Yudisium Sarjana sebagai bagian dari Jurusan Teknik Informatika, Fakultas Teknologi Informasi, Universitas Islam Kalimantan Muhammad Arsyad Al-Banjari.

Alhamdulillah, saya berhasil menyelesaikan perjalanan akademik selama 4 tahun dengan meraih IPK 3.77 dan predikat Cum Laude. Pencapaian ini bukan hanya akhir dari perjuangan, tetapi awal dari langkah saya untuk memberikan kontribusi nyata di dunia profesional.

Terima kasih kepada semua pihak yang telah mendukung perjalanan ini. Semoga ilmu yang didapat bermanfaat dan menjadi bekal untuk masa depan yang lebih baik.
`,
    tags: ["Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint"],
    images: [
      "/journey/y3.jpeg",
      "/journey/y2.jpeg",
       "/journey/y1.jpeg",
       "/journey/y4.jpeg",
    ],
    link: "#",
    isPinned: true
    
},
  {
    id: 10,
    date: "Nov 2024",
    title: "kursus Microsoft 365 Fundamentals di Coursera dari Microsoft!",
    description: `
      🎓 Belajar Teknologi yang Siap Bersaing di Dunia Kerja!

Sebagai mahasiswa yang selalu ingin meningkatkan kemampuan digital, saya baru saja menyelesaikan kursus Microsoft 365 Fundamentals di Coursera dari Microsoft!. Kursus ini sangat membuka wawasan saya tentang pentingnya teknologi cloud dalam dunia bisnis modern.


Beberapa hal penting yang saya pelajari:
🌐 Dasar-dasar Layanan Cloud: Pemahaman tentang bagaimana Microsoft 365 memanfaatkan cloud untuk meningkatkan produktivitas dan kolaborasi.
🔐 Keamanan dan Privasi Data: Bagaimana Microsoft 365 melindungi data dengan fitur keamanan dan kepatuhannya.
🤝 Alat Kolaborasi Efektif: Pemanfaatan Microsoft Teams dan SharePoint untuk kerja tim yang lebih efisien.
📊 Produktivitas Maksimal: Menggunakan Word, Excel, PowerPoint, dan Outlook secara terintegrasi dalam ekosistem cloud.
💡 Manajemen dan Lisensi: Pemahaman dasar tentang opsi lisensi Microsoft 365 dan pengelolaan langganan.


Kursus ini bukan hanya sekadar teori; saya belajar bagaimana teknologi cloud dapat diaplikasikan di lingkungan profesional dan menambah nilai dalam tim.
`,
    tags: ["Microsoft Word", "Microsoft Excel", "Microsoft Powerpoint"],
    images: [
       "/image/Microsoft04.jpg",
       "/image/Microsoft01.jpg",
       "/image/Microsoft02.jpg",
       "/image/Microsoft03.jpg",
    ],
    link: "#",
    // isNew: true,
    
},
  {
    id: 9,
    date: "Oct 2024",
    title: "Harisenin BooKil - Digital Marketing Bootcamp!",
    description: `
      💼 Excited to share my new achievement! 💼
I’ve successfully completed the Harisenin BooKil - Digital Marketing Bootcamp! 🎉

It was an insightful 2-day journey where I had the chance to deep dive into the world of digital marketing, learn from industry experts, and collaborate with other passionate learners.

Here’s a recap of what I learned during the bootcamp:
Day 1:
- Introduction to Social Media Organic
- Creating effective and engaging content
- Building relationships and enhancing brand visibility
- Optimizing customer conversion and retention
- Career insights from Vanessa Astari, Chief Marketing Officer at BumiBaik, on how to pursue a career in digital marketing.

Day 2:
- Strategies for content creation on social media
- Content writing & copywriting fundamentals
- Planning and growing an organic social media presence
- Practical case study on creating compelling content

A big thank you to Harisenin.com and our amazing speaker Vanessa Astari for the valuable insights! 🙌

I’m thrilled to apply these new skills and continue growing as a Digital Marketer. 🌱`,
    tags: [],
    images: [
      "/journey/1729214006325_page-0001.jpg",
    ],
    link: "#",
    

},
  {
    id: 8,
    date: "Oct 2024",
    title: "Monitoring the Evolution of Artificial Intelligence in the Age of Digital Creativity",
    description: `
      🤖 Monitoring the Evolution of Artificial Intelligence in the Age of Digital Creativity 🌐

      As someone immersed in the IT field, I am continually fascinated by how technology, particularly Artificial Intelligence (AI), is evolving and transforming various aspects of life, including art and creativity. The UXA! 2024 seminar hosted by the Jakarta Institute of Arts (IKJ) opened my eyes to how AI is beginning to dominate the creative sector in the 21st century.

      Here are some intriguing insights shared by the experts:
      1. How AI is capable of creating art that was once unimaginable.
      2. The impact of AI on collaboration between artists and technology.
      3. Ethics and the future of creativity under the influence of technology.

      Speakers like Prof. Gunalan Nadarajan (Stamps School of Art and Design, University of Michigan – USA) and Dr. Jeonghyeon Joo (Seoul Institute of The Arts – KOREA), along with Prof. Dr. Richardus Eko Indrajit (Pradita University – INDONESIA), offered fascinating perspectives on the shift in the world of art and creativity in this digital era.

      AI is not just a tool for enhancing efficiency but also a medium that inspires innovation and new boundaries in the creative realm. I believe we are only at the beginning of witnessing the full potential of AI in both technology and art.
    `,
    tags: [],
    images: [
      "/journey/ux_page-0001.jpg",
      "/journey/ux_page-0002.jpg",
      "/journey/ux_page-0003.jpg",
      "/journey/ux_page-0004.jpg",
      "/journey/ux_page-0005.jpg",
    ],
    link: "#",

},

  {
    id: 7,
    date: "Sep 2024",
    title: "Spesialisasi Technology Entrepreneurship dari University of Colorado Boulder!",
    description: 
      "Saya senang sekali karena telah berhasil mendapatkan sertifikasi baru: Spesialisasi Technology Entrepreneurship dari University of Colorado Boulder! Diperoleh setelah menyelesaikan setiap kursus di Spesialisasi:Getting Started with Technology Startups, Creating a Technology Startup Company, Forming, Funding, and Launching a Technology Startup Company",
    tags: ["Leadership and Management", "Strategy and Operations", "Strategy Entrepreneurship", "Innovation", "Organizational Development"],
    images: [
      "/image/Coursera QMITUWJ1T8ON_page-0001.jpg",
"/image/Coursera 4T71YV6WDJE0_page-0001.jpg",
"/image/Coursera GH7KYHUHTJQL_page-0001.jpg",
"/image/Coursera 1L662BI91QSB_page-0001.jpg",
    ],
    link: "#",
  },
  {
    id: 6,
    date: "Sep 2024",
    title: "Profesional Sertifikat Google IT Support dari Google!",
    description: 
      "Saya senang sekali karena telah berhasil mendapatkan sertifikasi baru: Profesional Sertifikat Google IT Support dari Google! Diperoleh setelah menyelesaikan setiap kursus di Spesialisasi: Technical Support Fundamentals,The Bits and Bytes of Computer Networking,Operating Systems and You: Becoming a Power User System,Administration and IT Infrastructure Services,IT Security: Defense against the digital dark arts",
    tags: ["Computer Networking", "Network Architecture", "Network Model", "Critical Thinking", "Computer Architecture", "Network Security", "Accounting", "Communication", "Human Computer Interaction", "Computer Programming", "Cloud Computing", "Leadership and Management"],
    images: [
      "/image/Coursera J31H3IPRJPH5_page-0001.jpg",
      "/image/Coursera NVQK5OE1JISD_page-0001.jpg",
      "/image/Coursera KO8602OT7N9Y_page-0001.jpg",
      "/image/Coursera GFVP77LP2MOZ_page-0001.jpg",
      "/image/Coursera KCNM15ETJ869_page-0001.jpg",
      "/image/Coursera CKRBS9RT0SW5_page-0001.jpg",
    ],
    link: "#",
  },
  {
    id: 5,
    date: "Sep 2024",
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
    // isNew: true,
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
    isNew: false,
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

].map(item => ({ ...item, isPinned: item.isPinned || false }));;

export default function MyJourney() {
  const [currentIndexes, setCurrentIndexes] = useState(journeyData.map(() => 0));
  const [expandedDescriptions, setExpandedDescriptions] = useState(journeyData.map(() => false));
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  // Enhanced sorting logic to handle both pinned and new items
  const sortedJourneyData = [...journeyData].sort((a, b) => {
    // First, sort by pinned status
    if (a.isPinned !== b.isPinned) {
      return a.isPinned ? -1 : 1;
    }
    // If neither is pinned or both are pinned, sort by new status
    if (!a.isPinned && a.isNew !== b.isNew) {
      return a.isNew ? -1 : 1;
    }
    // If all other conditions are equal, maintain original order
    return 0;
  });

  const showLoadMore = journeyData.length > ITEMS_PER_PAGE;
  const hasMoreItems = visibleItems < journeyData.length;

  const handlePrev = (journeyIndex: number) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === journeyIndex
          ? index === 0
            ? sortedJourneyData[i].images.length - 1
            : index - 1
          : index
      )
    );
  };

  const handleNext = (journeyIndex: number) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === journeyIndex
          ? index === sortedJourneyData[i].images.length - 1
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
          {sortedJourneyData.slice(0, visibleItems).map((item, journeyIndex) => (
            <div
              key={item.id}
              className={`relative bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02] ${
                item.isPinned ? 'border-2 border-gray-600' : ''
              }`}
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {item.isNew && (
                  <span className="px-3 py-1 text-sm font-bold text-white bg-yellow-600 rounded-full animate-pulse">
                    New Post
                  </span>
                )}
                {item.isPinned && (
                  <span className="px-3 py-1 text-sm font-bold text-white bg-gray-950 rounded-full">
                    Pinned
                  </span>
                )}
              </div>
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
                      className="ml-2 text-gray-950 underline dark:text-blue-50 hover:underline focus:outline-none"
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