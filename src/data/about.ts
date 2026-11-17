import type { Text } from './types';

/* 08 · About. */

export const about = {
  /** Put your photo in public/images/ (4:5 portrait works best). */
  portrait: {
    src: '/images/shandi-himawan.png',
    alt: { en: 'Portrait of Shandi Himawan', id: 'Foto Shandi Himawan' } as Text,
  },

  summary: {
    en: 'I’m a fullstack developer from Purwokerto, Central Java, and a 2026 Informatics Engineering graduate of Universitas Muhammadiyah Purwokerto. I like owning a feature from the database to the deploy. Most recently that meant Fundor.hu, a live product for a Hungarian client, built remotely in a team of three. Outside code, I chaired a student organisation, coordinated a KKN village team and work comfortably in English.',
    id: 'Saya fullstack developer dari Purwokerto, Jawa Tengah, dan lulusan Teknik Informatika Universitas Muhammadiyah Purwokerto tahun 2026. Saya suka memegang sebuah fitur dari database sampai deploy. Yang terbaru adalah Fundor.hu, produk live untuk klien di Hongaria yang dikerjakan remote dalam tim bertiga. Di luar kode, saya pernah memimpin organisasi mahasiswa, mengoordinasi tim KKN di desa, dan terbiasa bekerja dalam bahasa Inggris.',
  } as Text,

  /** Each fact can have several lines. */
  facts: [
    {
      key: { en: 'Education', id: 'Pendidikan' },
      lines: [
        { en: 'Bachelor of Informatics Engineering', id: 'Sarjana Teknik Informatika' },
        {
          en: 'Universitas Muhammadiyah Purwokerto, 2022 – 2026 · GPA 3.68',
          id: 'Universitas Muhammadiyah Purwokerto, 2022 – 2026 · IPK 3,68',
        },
      ],
    },
    {
      key: { en: 'Languages', id: 'Bahasa' },
      lines: [
        { en: 'Indonesian (native)', id: 'Indonesia (bahasa ibu)' },
        { en: 'English (working proficiency)', id: 'Inggris (lancar untuk bekerja)' },
      ],
    },
    {
      key: { en: 'Location', id: 'Lokasi' },
      lines: [{ en: 'Purwokerto, Central Java, Indonesia', id: 'Purwokerto, Jawa Tengah, Indonesia' }],
    },
    {
      key: { en: 'Beyond code', id: 'Di luar kode' },
      lines: [
        {
          en: 'Chairperson of a student organisation · KKN village coordinator · Buddy for international students · Prometheus Academy ambassador',
          id: 'Ketua organisasi mahasiswa · Koordinator desa KKN · Buddy mahasiswa internasional · Duta Prometheus Academy',
        },
      ],
    },
  ] as { key: Text; lines: Text[] }[],
};
