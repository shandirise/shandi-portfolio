import type { CaseStudy } from './types';

/* 01 · Featured work — big case studies. Covers alternate left/right automatically. */

export const featured: CaseStudy[] = [
  {
    id: 'fundor',
    kicker: { en: 'Fintech · Live product', id: 'Fintech · Produk live' },
    title: 'Fundor.hu',
    oneLiner: {
      en: 'Grant-matching platform for Hungarian SMEs.',
      id: 'Platform pencocokan hibah untuk UKM di Hongaria.',
    },
    facts: [
      {
        key: { en: 'Context', id: 'Konteks' },
        value: { en: 'Remote pilot project', id: 'Proyek percontohan, remote' },
      },
      { key: { en: 'Role', id: 'Peran' }, value: 'Fullstack Developer' },
      {
        key: { en: 'Language', id: 'Bahasa' },
        value: { en: 'Bilingual product', id: 'Produk dwibahasa' },
      },
    ],
    myPart: [
      { en: 'Docker build and cloud deployment', id: 'Build Docker dan deployment cloud' },
      { en: 'Email verification and password reset', id: 'Verifikasi email dan reset kata sandi' },
      { en: 'Grant calculator', id: 'Kalkulator hibah' },
      { en: 'Loans page', id: 'Halaman pinjaman' },
      { en: 'Mobile fixes', id: 'Perbaikan tampilan mobile' },
      { en: 'v2.0 rebrand', id: 'Rebrand v2.0' },
    ],
    stack: ['Laravel', 'PHP', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
    action: {
      label: { en: 'Visit fundor.hu', id: 'Kunjungi fundor.hu' },
      href: 'https://fundor.hu',
      style: 'primary',
    },
    note: { en: 'Client code is proprietary', id: 'Kode milik klien (proprietary)' },
    cv: false, // already in Experience on the CV
    cover: {
      tone: 'accent',
      status: { en: 'Live in production', id: 'Live di produksi' },
      live: true,
      figure: 'fundor.hu',
      facts: [
        { key: { en: 'Team', id: 'Tim' }, value: { en: '3 people, remote', id: '3 orang, remote' } },
        { key: { en: 'Client', id: 'Klien' }, value: { en: 'Hungary · EU', id: 'Hongaria · UE' } },
        { key: { en: 'Timeline', id: 'Periode' }, value: { en: 'Sep – Oct 2026', id: 'Sep – Okt 2026' } },
      ],
      image: '', // optional screenshot, e.g. '/images/fundor.jpg'
    },
  },
  {
    id: 'smart-iao',
    kicker: { en: 'Internship · Research-backed', id: 'Magang · Didukung riset' },
    title: 'Smart IAO',
    oneLiner: {
      en: 'Leave-permit and operations system for the university’s international office.',
      id: 'Sistem izin cuti dan operasional untuk kantor urusan internasional kampus.',
    },
    facts: [
      {
        key: { en: 'Context', id: 'Konteks' },
        value: { en: 'Built on request during an internship', id: 'Dibuat atas permintaan saat magang' },
      },
      {
        key: { en: 'Office', id: 'Kantor' },
        value: {
          en: 'Bureau of Cooperation & International Affairs, UMP',
          id: 'Biro Kerja Sama & Urusan Internasional, UMP',
        },
      },
      { key: { en: 'Year', id: 'Tahun' }, value: '2026' },
    ],
    myPart: [
      { en: 'Native PHP system', id: 'Sistem PHP native' },
      { en: 'UI separated from logic', id: 'UI terpisah dari logika' },
      { en: '6-layer security chain', id: 'Rantai keamanan 6 lapis' },
      { en: 'Evaluated in a journal article', id: 'Dievaluasi dalam artikel jurnal' },
    ],
    stack: ['PHP', 'MySQL'],
    action: {
      label: { en: 'Read the research', id: 'Baca risetnya' },
      href: '#research',
      style: 'secondary',
    },
    note: { en: 'Internal system · no public link', id: 'Sistem internal · tanpa tautan publik' },
    year: 2026,
    points: [
      { en: 'Built with native PHP', id: 'Dibangun dengan PHP' },
      {
        en: 'Made on request during my internship at the Bureau of Cooperation & International Affairs',
        id: 'Dibuat sesuai permintaan saat magang di Biro Kerjasama dan Urusan Internasional',
      },
      { en: 'An operational system that supports day-to-day office work', id: 'Sistem operasional penunjang kerja kantor' },
    ],
    cover: {
      tone: 'surface',
      status: 'Peer-reviewed',
      figure: '15/15',
      caption: { en: 'test cases passed', id: 'kasus uji lolos' },
      facts: [
        { key: { en: 'Security', id: 'Keamanan' }, value: { en: '6-layer chain', id: 'Rantai 6 lapis' } },
        { key: 'Handler', value: { en: '0 lines of HTML', id: '0 baris HTML' } },
        { key: 'OWASP', value: { en: '3 risks tested', id: '3 risiko diuji' } },
      ],
      image: '',
    },
  },
];
