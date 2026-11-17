import type { JourneyType, Text } from './types';

/* Small interface words: buttons, labels, table headers. */

export const ui = {
  // Header & navigation
  skipToContent: { en: 'Skip to content', id: 'Lewati ke konten' },
  menu: { en: 'Menu', id: 'Menu' },
  closeMenu: { en: 'Close menu', id: 'Tutup menu' },
  downloadCV: { en: 'Download CV', id: 'Unduh CV' },
  cvShort: 'CV',
  language: { en: 'Language', id: 'Bahasa' },

  // Hero
  role: { en: 'Role', id: 'Peran' },
  basedIn: { en: 'Based in', id: 'Berbasis di' },
  localTime: { en: 'Local time', id: 'Waktu lokal' },
  contents: { en: 'Contents', id: 'Daftar isi' },
  seeMyWork: { en: 'See my work', id: 'Lihat karya saya' },

  // Featured work
  caseStudy: { en: 'Case study', id: 'Studi kasus' },
  myPart: { en: 'My part', id: 'Bagian saya' },
  stack: 'Stack',

  // Research
  authors: { en: 'Authors', id: 'Penulis' },
  journal: { en: 'Journal', id: 'Jurnal' },
  keywords: { en: 'Keywords', id: 'Kata kunci' },
  keyFindings: { en: 'Key findings', id: 'Temuan utama' },
  fromArticle: { en: 'From the journal article', id: 'Dari artikel jurnal' },
  abstract: { en: 'Abstract', id: 'Abstrak' },
  readAbstract: { en: 'Read the abstract · {count} min', id: 'Baca abstrak · {count} menit' },
  hideAbstract: { en: 'Hide the abstract', id: 'Tutup abstrak' },
  readPaper: { en: 'Read the paper (DOI)', id: 'Baca makalah (DOI)' },
  doiPending: {
    en: 'Paper link (DOI) appears here after publication',
    id: 'Tautan makalah (DOI) muncul di sini setelah terbit',
  },

  // Projects table
  colNo: 'No.',
  colProject: { en: 'Project', id: 'Proyek' },
  colStack: 'Stack',
  colYear: { en: 'Year', id: 'Tahun' },
  colLinks: { en: 'Links', id: 'Tautan' },
  linkSite: { en: 'Live site', id: 'Situs live' },
  linkDemo: { en: 'Live demo', id: 'Demo live' },
  linkCode: { en: 'Code', id: 'Kode' },

  // Skills
  coreStack: { en: 'Core stack', id: 'Stack utama' },
  coreStackNote: {
    en: 'Used most across my shipped projects',
    id: 'Paling sering dipakai di proyek yang sudah rilis',
  },
  usedIn: { en: 'Used in', id: 'Dipakai di' },
  everyday: {
    en: 'Everyday tool · not tied to one project',
    id: 'Alat harian · tidak terikat satu proyek',
  },
  softSkills: { en: 'Soft skills', id: 'Soft skill' },
  alsoComfortable: { en: 'Also comfortable with', id: 'Juga terbiasa dengan' },

  // Certificates
  openCertificate: { en: 'Open certificate (PDF)', id: 'Buka sertifikat (PDF)' },
  certificateThumb: { en: 'Certificate · A4', id: 'Sertifikat · A4' },
  opensPdf: { en: 'Opens the PDF', id: 'Membuka PDF' },

  // Journey
  filterBy: { en: 'Filter by type', id: 'Filter berdasarkan jenis' },
  all: { en: 'All', id: 'Semua' },
  entry: { en: 'entry', id: 'entri' },
  entries: { en: 'entries', id: 'entri' },
  open: { en: 'open', id: 'terbuka' },
  expand: { en: 'Expand', id: 'Buka' },
  collapse: { en: 'Collapse', id: 'Tutup' },
  showAll: { en: 'Show all {count} entries', id: 'Tampilkan semua {count} entri' },
  showLess: { en: 'Show fewer', id: 'Tampilkan lebih sedikit' },
  more: { en: '+{count} more', id: '+{count} lainnya' },

  // Gallery
  viewFull: { en: 'Click to view full size', id: 'Klik untuk ukuran penuh' },
  close: { en: 'Close', id: 'Tutup' },

  // Contact & footer
  emailMe: { en: 'Email me', id: 'Kirim email' },
  copyEmail: { en: 'Copy email', id: 'Salin email' },
  copied: { en: 'Copied', id: 'Tersalin' },
  backToTop: { en: 'Back to top', id: 'Kembali ke atas' },
} satisfies Record<string, Text>;

export const journeyTypes: Record<JourneyType, Text> = {
  education: { en: 'Education', id: 'Pendidikan' },
  work: { en: 'Work', id: 'Kerja' },
  organisation: { en: 'Organisation', id: 'Organisasi' },
  project: { en: 'Project', id: 'Proyek' },
  research: { en: 'Research', id: 'Riset' },
};
