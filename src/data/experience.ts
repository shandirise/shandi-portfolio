import type { OtherRole, Role, Text } from './types';

/* 02 · Experience — newest first. The first role is highlighted automatically. */

export const roles: Role[] = [
  {
    date: { en: 'Sep – Oct 2026', id: 'Sep – Okt 2026' },
    title: { en: 'Fullstack Developer (Pilot Project)', id: 'Fullstack Developer (Proyek Percontohan)' },
    org: { en: 'Fundor.hu · Remote, Hungary', id: 'Fundor.hu · Remote, Hongaria' },
    bullets: [
      {
        en: 'Containerised the Laravel and React application with Docker and set up the cloud deployment behind the live site.',
        id: 'Mengemas aplikasi Laravel dan React ke dalam container Docker dan menyiapkan deployment cloud di balik situs live.',
      },
      {
        en: 'Built email verification and password reset, the grant calculator and the loans page, and fixed layout issues on mobile.',
        id: 'Membangun verifikasi email dan reset kata sandi, kalkulator hibah, dan halaman pinjaman, serta memperbaiki masalah tata letak di mobile.',
      },
      {
        en: 'Delivered the v2.0 rebrand in a remote team of three, working directly with the client in Hungary.',
        id: 'Menyelesaikan rebrand v2.0 dalam tim remote bertiga, bekerja langsung dengan klien di Hongaria.',
      },
    ],
  },
  {
    date: { en: 'Oct 2025 – Sep 2026', id: 'Okt 2025 – Sep 2026' },
    title: { en: 'IT Support Intern', id: 'Magang IT Support' },
    org: {
      en: 'Bureau of Cooperation & International Affairs, Universitas Muhammadiyah Purwokerto',
      id: 'Biro Kerja Sama & Urusan Internasional, Universitas Muhammadiyah Purwokerto',
    },
    bullets: [
      {
        en: 'Built Smart IAO, the office’s leave-permit and operations system, on request; the system was later evaluated in a peer-reviewed journal article.',
        id: 'Membangun Smart IAO, sistem izin cuti dan operasional kantor, atas permintaan; sistem ini kemudian dievaluasi dalam artikel jurnal peer-reviewed.',
      },
      {
        en: 'Provided day-to-day IT support for the office team.',
        id: 'Memberikan dukungan IT harian untuk tim kantor.',
      },
    ],
  },
  {
    date: 'Feb – Jun 2025',
    title: { en: 'IT Support Intern', id: 'Magang IT Support' },
    org: { en: 'Tamansari Village Government Office', id: 'Kantor Pemerintah Desa Tamansari' },
    bullets: [
      { en: 'Provided IT support for the village office.', id: 'Memberikan dukungan IT untuk kantor desa.' },
      {
        en: 'Built the Tamansari Village Profile website in PHP.',
        id: 'Membangun situs Profil Desa Tamansari dengan PHP.',
      },
    ],
  },
];

/* The small "Also · Other roles" grid under the main roles. */
export const otherRoles: OtherRole[] = [
  {
    title: { en: 'English Extracurricular Teacher', id: 'Pengajar Ekstrakurikuler Bahasa Inggris' },
    type: { en: 'Teaching', id: 'Mengajar' },
  },
  {
    title: { en: 'Computer Course Tutor', id: 'Tutor Kursus Komputer' },
    type: { en: 'Teaching', id: 'Mengajar' },
  },
  {
    title: { en: 'Secretary, village cooperative', id: 'Sekretaris, koperasi desa' },
    type: { en: 'Organisation', id: 'Organisasi' },
  },
  {
    title: { en: 'Polling Committee ×2, 2024 elections', id: 'Petugas KPPS ×2, pemilihan 2024' },
    type: { en: 'Civic', id: 'Kewargaan' },
  },
];

export const otherRolesLabel: { kicker: Text; title: Text } = {
  kicker: { en: 'Also', id: 'Lainnya' },
  title: { en: 'Other roles', id: 'Peran lain' },
};
