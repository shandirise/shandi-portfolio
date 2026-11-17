import type { Project } from './types';

/*
  04 · Other projects — newest first. Also used for the Projects section of the PDF CV.
  Links: site = "Live site", demo = "Live demo", code = "Code".
  An empty link ('') shows as a dashed placeholder while you run `npm run dev`
  and is left out of the published site. No links at all → shows "—".
  `points` and `cv` ('full' | 'brief' | false) only affect the CV.
*/

export const projects: Project[] = [
  {
    name: 'SI-UMKM',
    type: { en: 'Web app', id: 'Aplikasi web' },
    description: {
      en: 'Information system for Indonesian small and medium businesses (UMKM).',
      id: 'Sistem informasi untuk usaha mikro, kecil, dan menengah (UMKM) di Indonesia.',
    },
    stack: ['Next.js', 'TypeScript', 'GraphQL', 'Firebase', 'Tailwind CSS'],
    year: 2025,
    links: { demo: 'https://si-umkm-o3rl.vercel.app' },
    points: [
      {
        en: 'Marketplace and training platform for Indonesian MSMEs (UMKM), built for the Framework-Based Programming course',
        id: 'Platform marketplace dan pelatihan untuk UMKM, dibuat untuk mata kuliah Pemrograman Berbasis Framework',
      },
      {
        en: 'Product catalogue, cart, checkout, order history, product reviews, and training registration',
        id: 'Katalog produk, keranjang, checkout, riwayat pesanan, ulasan produk, dan pendaftaran pelatihan',
      },
      {
        en: 'JWT-protected admin dashboard, REST and GraphQL (Apollo) APIs on Firebase, with user content sanitised against XSS',
        id: 'Dashboard admin yang dilindungi JWT, API REST dan GraphQL (Apollo) di Firebase, dengan konten pengguna yang disanitasi dari XSS',
      },
    ],
  },
  {
    name: 'Todo App',
    type: { en: 'Web app', id: 'Aplikasi web' },
    description: {
      en: 'Task manager with a Next.js front end and an Express API.',
      id: 'Pengelola tugas dengan front end Next.js dan API Express.',
    },
    stack: ['Next.js', 'Express', 'JavaScript', 'SQL'],
    year: 2025,
    links: { code: 'https://github.com/shandirise/todo-app' },
    points: [
      { en: 'Next.js frontend with Redux Toolkit for state management', id: 'Frontend Next.js dengan Redux Toolkit untuk manajemen state' },
      {
        en: 'REST API built with Express and the Sequelize ORM on MySQL, with database migrations',
        id: 'REST API dengan Express dan ORM Sequelize di MySQL, lengkap dengan migrasi database',
      },
    ],
  },
  {
    name: { en: 'Tamansari Village Profile', id: 'Profil Desa Tamansari' },
    type: { en: 'Website', id: 'Situs web' },
    description: {
      en: 'Profile website for the Tamansari village government.',
      id: 'Situs profil untuk pemerintah Desa Tamansari.',
    },
    stack: ['PHP'],
    year: 2025,
    points: [
      { en: 'News management and a document archive', id: 'Berisi manajemen berita dan arsip dokumen' },
      { en: 'Shows real village data for transparency to residents', id: 'Menampilkan data real guna menjadi transparansi ke warga' },
    ],
  },
  {
    name: 'FitZone',
    type: { en: 'Mobile app', id: 'Aplikasi mobile' },
    description: { en: 'Fitness app for mobile.', id: 'Aplikasi kebugaran untuk perangkat mobile.' },
    stack: ['React Native', 'TypeScript'],
    year: 2024,
    links: { code: 'https://github.com/shandirise/fitzone' },
    points: [
      { en: 'Mobile workout app built with React Native and TypeScript', id: 'Aplikasi olahraga mobile yang dibangun dengan React Native dan TypeScript' },
      {
        en: 'Guided screens for warm-up, push-ups, sit-ups, squats and plank, plus a progress screen',
        id: 'Layar panduan untuk pemanasan, push-up, sit-up, squat, dan plank, serta layar progres',
      },
    ],
  },
  {
    name: { en: 'Pharmacy Store Website', id: 'Situs Toko Apotek' },
    type: { en: 'Website', id: 'Situs web' },
    description: {
      en: 'Online store website for a pharmacy.',
      id: 'Situs toko online untuk sebuah apotek.',
    },
    stack: ['ASP.NET', 'C#', 'SQL'],
    year: 2023,
    cv: 'brief',
  },
  {
    name: 'F1 Pedia',
    type: { en: 'Website', id: 'Situs web' },
    description: {
      en: 'Formula 1 reference site built with plain HTML and CSS.',
      id: 'Situs referensi Formula 1 yang dibuat dengan HTML dan CSS murni.',
    },
    stack: ['HTML', 'CSS'],
    year: 2023,
    links: { site: 'https://shandirise.github.io/f1pedia/', code: 'https://github.com/shandirise/f1pedia' },
    cv: 'brief',
  },
];
