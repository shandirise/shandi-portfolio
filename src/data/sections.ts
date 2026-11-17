import type { Section } from './types';

/*
  The order of this list = the order on the page.
  Section numbers (01, 02 …), the top navigation and the hero "Contents"
  list are all generated from it. Set `enabled: false` to hide a section.

  Placeholders you can use in `dek`:
    {count}      → 6        {countWord} → six        {CountWord} → Six
    {since}      → first year in the Journey
*/

export const sections: Section[] = [
  {
    id: 'work',
    nav: { en: 'Work', id: 'Karya' },
    title: { en: 'Featured work', id: 'Karya unggulan' },
    dek: {
      en: 'Two systems built for real users: one live in production for a European client, one evaluated in a peer-reviewed paper.',
      id: 'Dua sistem untuk pengguna nyata: satu sudah live di produksi untuk klien Eropa, satu lagi dievaluasi dalam makalah peer-reviewed.',
    },
  },
  {
    id: 'experience',
    nav: { en: 'Experience', id: 'Pengalaman' },
    title: { en: 'Experience', id: 'Pengalaman' },
    dek: {
      en: '{CountWord} tech roles in the last two years, most recent first.',
      id: '{CountWord} peran di bidang teknologi dalam dua tahun terakhir, dari yang terbaru.',
    },
  },
  {
    id: 'research',
    nav: { en: 'Research', id: 'Riset' },
    title: { en: 'Research', id: 'Riset' },
    dek: {
      en: 'My thesis work on Smart IAO, written up as a peer-reviewed journal article.',
      id: 'Skripsi saya tentang Smart IAO, ditulis ulang sebagai artikel jurnal peer-reviewed.',
    },
  },
  {
    id: 'projects',
    nav: { en: 'Projects', id: 'Proyek' },
    title: { en: 'Other projects', id: 'Proyek lainnya' },
    dek: {
      en: '{CountWord} more projects, newest first: client sites, coursework and personal builds.',
      id: '{CountWord} proyek lainnya, dari yang terbaru: situs klien, tugas kuliah, dan proyek pribadi.',
    },
  },
  {
    id: 'skills',
    nav: { en: 'Skills', id: 'Keahlian' },
    title: { en: 'Code mastery', id: 'Penguasaan kode' },
    dek: {
      en: 'No self-ratings. Each skill shows the projects where I actually used it.',
      id: 'Tanpa menilai diri sendiri. Setiap keahlian menunjukkan proyek tempat saya benar-benar memakainya.',
    },
  },
  {
    id: 'certificates',
    nav: { en: 'Certificates', id: 'Sertifikat' },
    title: { en: 'Certificates', id: 'Sertifikat' },
    dek: {
      en: 'Nationally certified as a Programmer.',
      id: 'Tersertifikasi nasional sebagai Programmer.',
    },
  },
  {
    id: 'journey',
    nav: { en: 'Journey', id: 'Perjalanan' },
    title: { en: 'Journey', id: 'Perjalanan' },
    dek: {
      en: 'Everything since {since}, in time order: {count} entries across study, work, organisations, projects and research.',
      id: 'Semua sejak {since}, urut waktu: {count} entri dari studi, kerja, organisasi, proyek, dan riset.',
    },
  },
  {
    id: 'about',
    nav: { en: 'About', id: 'Tentang' },
    title: { en: 'About', id: 'Tentang' },
    inNav: false,
  },
  {
    id: 'gallery',
    nav: { en: 'Gallery', id: 'Galeri' },
    title: { en: 'Gallery', id: 'Galeri' },
    dek: {
      en: 'Moments from work and community.',
      id: 'Momen dari pekerjaan dan komunitas.',
    },
    inNav: false,
  },
  {
    id: 'contact',
    nav: { en: 'Contact', id: 'Kontak' },
    title: { en: 'Contact', id: 'Kontak' },
  },
];
