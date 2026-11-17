import type { Text } from './types';

/* Who you are + the links used across the whole site. */

export const profile = {
  name: 'Shandi Himawan',
  /** The two big lines in the hero. */
  heroName: ['SHANDI', 'HIMAWAN.'],
  role: 'Fullstack Developer',
  location: {
    en: 'Purwokerto, Central Java, Indonesia',
    id: 'Purwokerto, Jawa Tengah, Indonesia',
  } as Text,
  locationShort: 'Purwokerto, Indonesia',

  /** Drives the live clock in the hero. */
  timezone: 'Asia/Jakarta',
  timezoneLabel: 'WIB',
  utcOffset: 'UTC+7',

  email: 'printshandi@gmail.com',

  links: {
    linkedin: 'https://www.linkedin.com/in/shandi-himawan-2b9214288',
    github: 'https://github.com/shandirise',
  },

  /** What search engines and link previews show. */
  seo: {
    title: {
      en: 'Shandi Himawan — Fullstack Developer',
      id: 'Shandi Himawan — Fullstack Developer',
    } as Text,
    description: {
      en: 'Fullstack developer and 2026 Informatics Engineering graduate from Purwokerto, Indonesia. Laravel, React, TypeScript and Docker — shipped to production for a European client.',
      id: 'Fullstack developer dan lulusan Teknik Informatika 2026 dari Purwokerto, Indonesia. Laravel, React, TypeScript, dan Docker — sudah dirilis ke produksi untuk klien Eropa.',
    } as Text,
  },
};
