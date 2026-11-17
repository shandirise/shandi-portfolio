import type { Certificate } from './types';

/* 06 · Certificates. Put PDFs in public/files/ and images in public/images/certificates/. */

export const certificates: Certificate[] = [
  {
    tag: 'BNSP · 2026',
    title: {
      en: 'Certificate of Competence — Programmer',
      id: 'Sertifikat Kompetensi — Programmer',
    },
    about: {
      en: 'BNSP (Badan Nasional Sertifikasi Profesi) is Indonesia’s national professional certification authority.',
      id: 'BNSP (Badan Nasional Sertifikasi Profesi) adalah lembaga sertifikasi profesi nasional Indonesia.',
    },
    bullets: [
      {
        en: 'Competency assessment for the Programmer occupation.',
        id: 'Uji kompetensi untuk okupasi Programmer.',
      },
      { en: 'Recognised across Indonesia.', id: 'Diakui di seluruh Indonesia.' },
      { en: 'Certificate available as a PDF.', id: 'Sertifikat tersedia dalam format PDF.' },
    ],
    pdf: '/files/bnsp-programmer-shandi-himawan.pdf',
    thumbnail: '/images/certificates/bnsp-programmer-shandi-himawan.jpg',

    // For the PDF CV
    issuer: 'BNSP · LSP Universitas Muhammadiyah Purwokerto',
    year: '2026',
    points: [
      {
        en: 'Certified competent as a Programmer in Software Development by BNSP (Indonesian Professional Certification Authority), based on the national SKKNI standard',
        id: 'Dinyatakan kompeten sebagai Pemrogram di bidang Pengembangan Perangkat Lunak oleh BNSP (Badan Nasional Sertifikasi Profesi), berdasarkan standar SKKNI',
      },
      {
        en: '9 competency units: software specifications, coding guidelines and best practices, structured and object-oriented programming, libraries and pre-existing components, database access, code documentation, debugging, and unit testing',
        id: '9 unit kompetensi: spesifikasi program, penulisan kode sesuai guidelines dan best practices, pemrograman terstruktur dan berorientasi objek, library dan komponen pre-existing, akses basis data, dokumentasi kode, debugging, dan pengujian unit program',
      },
      { en: 'Issued 29 April 2026 · valid for 3 years', id: 'Diterbitkan 29 April 2026 · berlaku 3 tahun' },
    ],
  },
];
