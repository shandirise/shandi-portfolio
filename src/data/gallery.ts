import type { Photo } from './types';

/*
  09 · Gallery. Photos in one row share the same height; widths follow `ratio`.
  Put the files in public/images/. Until at least one photo exists, the
  section only shows while you run `npm run dev` (as placeholders).
*/

export const photos: Photo[] = [
  {
    src: '/images/gallery/pilot-project-meeting-2026.jpg',
    ratio: 4 / 3,
    caption: {
      en: 'Pilot project meeting with the Fundor.hu team, 2026',
      id: 'Rapat proyek percontohan bersama tim Fundor.hu, 2026',
    },
  },
  {
    src: '/images/gallery/prometheus-academy-ambassador-signing.jpg',
    ratio: 3 / 4,
    caption: {
      en: 'Signing as a Prometheus Academy ambassador',
      id: 'Penandatanganan sebagai duta Prometheus Academy',
    },
  },
];
