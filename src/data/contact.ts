import type { Text } from './types';
import { profile } from './profile';

/* 10 · Contact — the blue closing band. Email and links come from profile.ts. */

export const contact = {
  /** Use \n for the line break. */
  headline: { en: 'Let’s work\ntogether.', id: 'Mari bekerja\nsama.' } as Text,
  subline: {
    en: 'Open to web development roles at technology companies, in Indonesia or remote.',
    id: 'Terbuka untuk posisi web development di perusahaan teknologi, di Indonesia atau remote.',
  } as Text,

  cells: [
    {
      icon: 'linkedin',
      key: 'LinkedIn',
      value: { en: 'Connect on LinkedIn', id: 'Terhubung di LinkedIn' },
      href: profile.links.linkedin,
    },
    {
      icon: 'github',
      key: 'GitHub',
      value: { en: 'See my code on GitHub', id: 'Lihat kode saya di GitHub' },
      href: profile.links.github,
    },
    {
      icon: 'pin',
      key: { en: 'Location', id: 'Lokasi' },
      value: {
        en: `Purwokerto, Central Java, Indonesia · ${profile.utcOffset}`,
        id: `Purwokerto, Jawa Tengah, Indonesia · ${profile.utcOffset}`,
      },
    },
  ] as { icon: 'linkedin' | 'github' | 'pin' | 'mail'; key: Text; value: Text; href?: string }[],
};
