import type { Stat, Text } from './types';

/* The first screen: meta row, latest-work card, intro and the four proof stats. */

export const hero = {
  edition: {
    key: '(00)',
    value: { en: 'Portfolio — 2026', id: 'Portofolio — 2026' } as Text,
  },

  /** The blue card next to your name. */
  latest: {
    kicker: { en: 'Latest work · Live', id: 'Karya terbaru · Live' } as Text,
    title: 'Fundor.hu',
    text: {
      en: 'Fintech product for a Hungarian client, built remotely in a team of three. Sep – Oct 2026.',
      id: 'Produk fintech untuk klien di Hongaria, dikerjakan remote dalam tim bertiga. Sep – Okt 2026.',
    } as Text,
    href: 'https://fundor.hu',
  },

  summary: {
    en: 'Fullstack developer and 2026 Informatics Engineering graduate. I build web products end to end, from the database to the Docker deploy, and I have already shipped one for a European client.',
    id: 'Fullstack developer dan lulusan Teknik Informatika 2026. Saya membangun produk web dari ujung ke ujung, dari database hingga deploy dengan Docker, dan sudah merilis satu produk untuk klien di Eropa.',
  } as Text,

  availability: {
    en: 'Open to web development roles · Indonesia or remote',
    id: 'Terbuka untuk posisi web development · Indonesia atau remote',
  } as Text,

  stats: [
    {
      value: '3.68',
      label: { en: 'GPA · Informatics Engineering', id: 'IPK · Teknik Informatika' },
      note: 'Universitas Muhammadiyah Purwokerto, 2022 – 2026',
    },
    {
      value: 'BNSP',
      label: { en: 'Certified Programmer', id: 'Programmer Tersertifikasi' },
      note: {
        en: 'Indonesia’s national professional certification, 2026',
        id: 'Sertifikasi profesi nasional Indonesia, 2026',
      },
    },
    {
      value: '01',
      label: { en: 'Journal article', id: 'Artikel jurnal' },
      note: {
        en: 'Jurnal E-Komtek · forthcoming, December 2026',
        id: 'Jurnal E-Komtek · terbit Desember 2026',
      },
      highlight: true,
    },
    {
      value: 'Live',
      label: { en: 'Product in production', id: 'Produk sudah live' },
      note: {
        en: 'fundor.hu · grant-matching platform, Hungary',
        id: 'fundor.hu · platform pencocokan hibah, Hongaria',
      },
    },
  ] satisfies Stat[],
};
