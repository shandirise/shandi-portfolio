import type { JourneyEntry } from './types';

/*
  07 · Journey — everything in time order. This list also feeds the PDF CV
  (Experience, Education, Leadership & Organizations, Additional Experience).

  - Dates: start/end as [year] or [year, month]. The label ("Sep – Oct 2026") is made for you.
  - Year groups, counts, filter chips and the "+3 more" previews are generated.
  - Inside a year, write entries newest first. The newest year starts open.
  - `text` is the one line shown on the website; without it, the first point is shown.
  - `points` are the CV bullets. `cv`: 'full' | 'brief' | false
    (work defaults to 'full', organisations to 'brief').

  type: 'education' | 'work' | 'organisation' | 'project' | 'research'
*/

export const journey: JourneyEntry[] = [
  // ── 2026 ─────────────────────────────────────────────
  {
    type: 'research',
    start: [2026, 12],
    title: { en: 'Journal article on Smart IAO', id: 'Artikel jurnal tentang Smart IAO' },
    org: { en: 'Jurnal E-Komtek · forthcoming', id: 'Jurnal E-Komtek · segera terbit' },
    text: {
      en: 'Architecture and security evaluation of Smart IAO, expected in December 2026.',
      id: 'Evaluasi arsitektur dan keamanan Smart IAO, dijadwalkan terbit Desember 2026.',
    },
  },
  {
    type: 'work',
    start: [2026, 9],
    end: [2026, 10],
    title: { en: 'Fullstack Developer (Pilot Project)', id: 'Fullstack Developer (Proyek Percontohan)' },
    org: 'Fundor.hu',
    place: { en: 'Remote · Hungary', id: 'Remote · Hongaria' },
    text: {
      en: 'Docker deployment, sign-up flows, grant calculator, loans page and the v2.0 rebrand.',
      id: 'Deployment Docker, alur pendaftaran, kalkulator hibah, halaman pinjaman, dan rebrand v2.0.',
    },
    points: [
      {
        en: 'One of three developers building Fundor.hu, a grant-matching platform that helps Hungarian SMEs find EU and national funding (Laravel, React, TypeScript)',
        id: 'Salah satu dari tiga developer yang membangun Fundor.hu, platform pencocokan hibah yang membantu UKM di Hongaria menemukan pendanaan Uni Eropa dan nasional (Laravel, React, TypeScript)',
      },
      {
        en: 'Containerised the app with a multi-stage Docker build and deployed it to the cloud, including TLS and CSRF handling behind a reverse proxy',
        id: 'Mengemas aplikasi dengan multi-stage Docker build dan men-deploy-nya ke cloud, termasuk penanganan TLS dan CSRF di balik reverse proxy',
      },
      {
        en: 'Built account features: email verification and password reset with 6-digit codes, bilingual Hungarian/English emails, and multiple company profiles',
        id: 'Membangun fitur akun: verifikasi email dan reset kata sandi dengan kode 6 digit, email dwibahasa Hongaria/Inggris, serta beberapa profil perusahaan',
      },
      {
        en: 'Built product features: an interactive grant calculator, a loan information page, how-to-apply guides and a consultation box, plus mobile layout fixes and the v2.0 rebrand',
        id: 'Membangun fitur produk: kalkulator hibah interaktif, halaman informasi pinjaman, panduan cara mendaftar, dan kotak konsultasi, serta perbaikan tampilan mobile dan rebrand v2.0',
      },
    ],
  },
  {
    type: 'project',
    start: [2026, 9],
    end: [2026, 10],
    title: 'Fundor.hu',
    org: {
      en: 'Grant-matching platform for Hungarian SMEs',
      id: 'Platform pencocokan hibah untuk UKM di Hongaria',
    },
    text: {
      en: 'Laravel, React and TypeScript, shipped to production with Docker.',
      id: 'Laravel, React, dan TypeScript, dirilis ke produksi dengan Docker.',
    },
  },
  {
    type: 'project',
    start: [2026],
    title: 'Smart IAO',
    org: {
      en: 'Bureau of Cooperation & International Affairs, UMP',
      id: 'Biro Kerja Sama & Urusan Internasional, UMP',
    },
    text: {
      en: 'Leave-permit and operations system; 15 of 15 test cases passed.',
      id: 'Sistem izin cuti dan operasional; 15 dari 15 kasus uji lolos.',
    },
  },
  {
    type: 'organisation',
    start: [2026],
    title: { en: 'Student Ambassador', id: 'Duta Mahasiswa' },
    org: 'Prometheus Academy',
    points: [
      {
        en: 'Represented Prometheus at campus events such as webinars',
        id: 'Menjadi perwakilan Prometheus pada acara kampus seperti webinar dan lainnya',
      },
      { en: 'Organized campus-wide events', id: 'Menyelenggarakan acara berskala kampus' },
    ],
  },
  {
    type: 'education',
    start: [2022],
    end: [2026],
    year: 2026, // shown under the year of graduation
    title: { en: 'Bachelor of Informatics Engineering', id: 'Sarjana Teknik Informatika' },
    org: 'Universitas Muhammadiyah Purwokerto',
    text: {
      en: 'Graduated in 2026 with a GPA of 3.68.',
      id: 'Lulus tahun 2026 dengan IPK 3,68.',
    },
    points: [
      { en: 'GPA: 3.68 / 4.00', id: 'IPK: 3.68 / 4.00' },
      {
        en: 'Coursework: Web Programming, Databases, Computer Networks, Application Programming, and more',
        id: 'Mata kuliah: Pemrograman Web, Basis Data, Jaringan Komputer, Pemrograman Aplikasi, dll.',
      },
    ],
  },

  // ── 2025 ─────────────────────────────────────────────
  {
    type: 'work',
    start: [2025, 10],
    end: [2026, 9],
    title: { en: 'IT Support Intern', id: 'Magang IT Support' },
    org: {
      en: 'Bureau of Cooperation & International Affairs, UMP',
      id: 'Biro Kerja Sama & Urusan Internasional, UMP',
    },
    place: 'Banyumas',
    text: {
      en: 'Built Smart IAO on request and supported the office team day to day.',
      id: 'Membangun Smart IAO atas permintaan dan mendukung tim kantor sehari-hari.',
    },
    points: [
      {
        en: 'Supported the office’s IT needs and helped build applications that make daily work easier',
        id: 'Membantu kebutuhan IT kantor serta mendukung pembuatan aplikasi untuk mempermudah pekerjaan',
      },
      { en: 'Helped troubleshoot technology issues', id: 'Membantu troubleshooting masalah teknologi' },
      { en: 'Social media editor', id: 'Editor media sosial' },
      { en: 'Served as a buddy for international students', id: 'Membantu menjadi buddy bagi mahasiswa internasional' },
    ],
  },
  {
    type: 'work',
    cv: 'brief',
    start: [2025, 7],
    end: [2026, 9],
    title: { en: 'English Extracurricular Teacher', id: 'Pengajar Ekskul Bahasa Inggris' },
    org: 'SMP Al Irsyad Boarding School',
    place: 'Banyumas',
    points: [
      {
        en: 'Delivered non-formal lessons to improve students’ English understanding and speaking practice, aiming to raise their achievement in English',
        id: 'Memberikan pembelajaran non formal untuk meningkatkan pemahaman dan praktik berbicara bahasa Inggris dengan tujuan meningkatkan prestasi siswa dalam bidang bahasa Inggris',
      },
    ],
  },
  {
    type: 'work',
    cv: 'brief',
    start: [2025, 4],
    end: [2026, 4],
    title: { en: 'Secretary', id: 'Sekretaris' },
    org: 'Koperasi Desa Merah Putih',
    place: 'Banyumas',
    points: [
      {
        en: 'Assisted with administrative work (Excel, Word, etc.), document management, and correspondence for the cooperative',
        id: 'Membantu tugas administrasi seperti Excel, Word, dll., manajemen dokumen, dan korespondensi untuk koperasi',
      },
    ],
  },
  {
    type: 'work',
    start: [2025, 2],
    end: [2025, 6],
    title: { en: 'IT Support Intern', id: 'Magang IT Support' },
    org: { en: 'Tamansari Village Government Office', id: 'Kantor Pemerintah Desa Tamansari' },
    place: 'Banyumas',
    text: {
      en: 'IT support for the village office; built the village profile website.',
      id: 'Dukungan IT untuk kantor desa; membangun situs profil desa.',
    },
    points: [
      {
        en: 'Assisted with administrative work (Excel, Word, etc.), document management, and correspondence',
        id: 'Membantu tugas administrasi seperti Excel, Word, dll., manajemen dokumen, dan korespondensi',
      },
      { en: 'Helped troubleshoot IT issues', id: 'Membantu troubleshooting masalah IT' },
      { en: 'Built and managed the village website', id: 'Membuat dan mengelola website untuk desa' },
      { en: 'Helped promote several village events', id: 'Membantu promosi beberapa acara desa' },
    ],
  },
  {
    type: 'organisation',
    start: [2025],
    title: { en: 'Village Coordinator', id: 'Koordinator Desa' },
    org: { en: 'Community Service Program (KKN) UMP', id: 'KKN Universitas Muhammadiyah Purwokerto' },
    points: [
      {
        en: 'Coordinated KKN at village level, overseeing program delivery and managing communication between students and the village government',
        id: 'Bertindak sebagai koordinator KKN tingkat desa, mengawasi pelaksanaan program dan mengelola komunikasi antara mahasiswa dan pemerintah desa',
      },
      {
        en: 'Organized community development activities, including education, social service, and digital literacy training',
        id: 'Menyelenggarakan kegiatan pengembangan masyarakat, meliputi pendidikan, pengabdian sosial, dan pelatihan literasi digital',
      },
    ],
  },
  {
    type: 'project',
    start: [2025],
    title: 'SI-UMKM',
    org: {
      en: 'Marketplace and training platform for Indonesian MSMEs',
      id: 'Platform marketplace dan pelatihan untuk UMKM',
    },
    text: {
      en: 'Next.js, TypeScript, GraphQL and Firebase.',
      id: 'Next.js, TypeScript, GraphQL, dan Firebase.',
    },
  },
  {
    type: 'project',
    start: [2025],
    title: 'Todo App',
    org: {
      en: 'Task manager with a Next.js front end and an Express API',
      id: 'Pengelola tugas dengan front end Next.js dan API Express',
    },
  },
  {
    type: 'project',
    start: [2025],
    title: { en: 'Tamansari Village Profile', id: 'Profil Desa Tamansari' },
    org: {
      en: 'Profile website for the Tamansari village government, in PHP',
      id: 'Situs profil pemerintah Desa Tamansari, dengan PHP',
    },
  },

  // ── 2024 ─────────────────────────────────────────────
  {
    type: 'work',
    cv: 'brief',
    start: [2024, 10],
    end: [2024, 11],
    title: { en: 'Polling Committee, 2024 Regional Head Election', id: 'Panitia Pemilihan Kepala Daerah 2024' },
    org: { en: 'General Elections Commission (KPU)', id: 'Komisi Pemilihan Umum (KPU)' },
    place: 'Banyumas',
    points: [
      {
        en: 'Stationed at Polling Station (TPS) 2, Tamansari Village, Banyumas',
        id: 'Bertugas di TPS 2 Desa Tamansari, Banyumas',
      },
      {
        en: 'Worked in a 7-person team, making sure ballots went into the correct boxes and organizing ballots once counting began',
        id: 'Bekerja dalam kelompok beranggotakan 7 orang, memastikan surat suara masuk ke kotak yang tepat, serta menyusun surat suara saat penghitungan dimulai',
      },
    ],
  },
  {
    type: 'work',
    cv: 'brief',
    start: [2024, 1],
    end: [2024, 2],
    title: { en: 'Polling Committee, 2024 Indonesian General Election', id: 'Panitia Pemilihan Umum Indonesia 2024' },
    org: { en: 'General Elections Commission (KPU)', id: 'Komisi Pemilihan Umum (KPU)' },
    place: 'Banyumas',
    points: [
      {
        en: 'Stationed at Polling Station (TPS) 2, Tamansari Village, Banyumas',
        id: 'Bertugas di TPS 2 Desa Tamansari, Banyumas',
      },
      {
        en: 'Worked in a 7-person team, making sure ballots went into the correct boxes and organizing ballots once counting began',
        id: 'Bekerja dalam kelompok beranggotakan 7 orang, memastikan surat suara masuk ke kotak yang tepat, serta menyusun surat suara saat penghitungan dimulai',
      },
    ],
  },
  {
    type: 'organisation',
    cv: 'full',
    start: [2024],
    end: [2025],
    title: { en: 'Chairperson', id: 'Ketua' },
    org: 'Elite English Voice UMP',
    points: [
      {
        en: 'Led the organization by overseeing all divisions, setting strategic direction, and making sure its goals were met',
        id: 'Memimpin organisasi dengan mengawasi seluruh divisi, menetapkan arah strategis, dan memastikan tercapainya tujuan organisasi',
      },
      {
        en: 'Represented the organization internally and externally, building collaboration with universities, organizations, and institutions',
        id: 'Mewakili organisasi dalam hubungan internal maupun eksternal, membina kolaborasi dengan universitas, organisasi, dan institusi',
      },
      {
        en: 'Coordinated staff management, mentored members’ growth, and upheld the organization’s reputation through effective leadership',
        id: 'Mengawasi dan mengoordinasikan manajemen staf, membimbing perkembangan anggota, dan menjaga reputasi organisasi melalui kepemimpinan yang efektif',
      },
    ],
  },
  {
    type: 'project',
    start: [2024],
    title: 'FitZone',
    org: {
      en: 'Mobile workout app, built with React Native',
      id: 'Aplikasi olahraga mobile dengan React Native',
    },
  },

  // ── 2023 ─────────────────────────────────────────────
  {
    type: 'work',
    cv: 'brief',
    start: [2023, 1],
    end: [2023, 11],
    title: { en: 'Computer Course Tutor', id: 'Tutor Kursus Komputer' },
    org: 'PSDK UMP',
    place: 'Banyumas',
    points: [
      {
        en: 'Designed and taught training programs covering operating systems, Microsoft Office applications, and design software such as Canva',
        id: 'Merancang dan mengajar program pelatihan yang mencakup sistem operasi, aplikasi Microsoft Office, dan perangkat lunak desain seperti Canva',
      },
    ],
  },
  {
    type: 'organisation',
    start: [2023],
    end: [2024],
    title: { en: 'Head of Public Relations', id: 'Kepala Hubungan Masyarakat' },
    org: { en: 'Informatics Engineering Student Association (HMTI) UMP', id: 'Himpunan Mahasiswa Teknik Informatika UMP' },
    points: [
      {
        en: 'Led the division by managing staff and giving guidance and direction, and represented the organization in external relations with universities, organizations, and institutions',
        id: 'Memimpin divisi dengan mengelola staf, memberikan bimbingan dan arahan, serta mewakili organisasi dalam membangun hubungan eksternal dengan universitas, organisasi, dan institusi',
      },
    ],
  },
  {
    type: 'organisation',
    start: [2023],
    end: [2024],
    title: { en: 'Deputy Head of Public Relations & Publications', id: 'Wakil Hubungan Masyarakat & Publikasi' },
    org: 'Elite English Voice UMP',
    points: [
      {
        en: 'Supported the division head in managing staff, ran the organization’s social media, built external relations as a representative, and managed partnerships',
        id: 'Mendukung Kepala Divisi dalam manajemen staf, mengelola media sosial organisasi, membangun hubungan eksternal sebagai perwakilan, dan mengelola kemitraan',
      },
    ],
  },
  {
    type: 'organisation',
    start: [2023],
    end: [2024],
    title: { en: 'Human Resources Development Staff', id: 'Staf Pengembangan Sumber Daya Manusia' },
    org: { en: 'PERMIKOMNAS Regional Board, Region 7 Central Java', id: 'Pengurus Wilayah PERMIKOMNAS Wilayah 7 Jawa Tengah' },
    points: [
      {
        en: 'Developed programs to strengthen the organization’s academic and non-academic growth, and widened program reach to hold province-level events for all members',
        id: 'Mengembangkan program untuk meningkatkan pengembangan akademik dan non-akademik organisasi. Mengoptimalkan jangkauan program untuk menyelenggarakan acara tingkat provinsi yang bermanfaat bagi seluruh anggota',
      },
    ],
  },
  {
    type: 'project',
    start: [2023],
    title: { en: 'Pharmacy Store Website', id: 'Situs Toko Apotek' },
    org: {
      en: 'Online store for a pharmacy, in ASP.NET and C#',
      id: 'Toko online untuk apotek, dengan ASP.NET dan C#',
    },
  },
  {
    type: 'project',
    start: [2023],
    title: 'F1 Pedia',
    org: {
      en: 'Formula 1 reference site in plain HTML and CSS',
      id: 'Situs referensi Formula 1 dengan HTML dan CSS murni',
    },
  },

  // ── 2022 ─────────────────────────────────────────────
  {
    type: 'education',
    cv: false, // the Bachelor entry above already covers it on the CV
    start: [2022],
    title: { en: 'Started Informatics Engineering at UMP', id: 'Mulai kuliah Teknik Informatika di UMP' },
    org: 'Universitas Muhammadiyah Purwokerto',
  },
  {
    type: 'organisation',
    start: [2022],
    end: [2023],
    title: { en: 'Public Relations Staff', id: 'Staf Hubungan Masyarakat' },
    org: { en: 'Informatics Engineering Student Association (HMTI) UMP', id: 'Himpunan Mahasiswa Teknik Informatika UMP' },
    points: [
      {
        en: 'Represented the organization in building external relations, on and off campus, with universities, organizations, and other institutions',
        id: 'Ditugaskan sebagai perwakilan organisasi untuk membangun hubungan eksternal, baik di dalam maupun di luar kampus, dengan universitas, organisasi, dan institusi lain',
      },
    ],
  },
  {
    type: 'organisation',
    start: [2022],
    end: [2023],
    title: { en: 'Member', id: 'Anggota' },
    org: { en: 'Software Engineering Study Club UMP', id: 'Klub Studi Rekayasa Perangkat Lunak UMP' },
    points: [
      {
        en: 'Eager to learn software engineering; active in online and offline study sessions together with lecturers and senior students',
        id: 'Antusias belajar rekayasa perangkat lunak, aktif dalam kegiatan belajar bersama secara daring maupun luring dengan berkolaborasi bersama dosen dan mahasiswa senior',
      },
    ],
  },
];
