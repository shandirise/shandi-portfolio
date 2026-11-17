import type { Stat, Text } from './types';

/* 03 · Research — the journal article. Also printed under "Publications" in the PDF CV. */

export const research = {
  status: { en: 'Forthcoming · Dec 2026', id: 'Segera terbit · Des 2026' } as Text,
  year: 2026,

  /** First name is shown as the lead author; the rest are counted ("with 3 co-authors"). */
  authors: ['Shandi Himawan', 'Dimara Kusuma Hakim', 'Feri Wibowo', 'Harjono'],
  coAuthors: { en: 'with {count} co-authors', id: 'bersama {count} penulis pendamping' } as Text,

  journal: 'Jurnal E-Komtek',
  issn: 'p-ISSN 2580-3719 · e-ISSN 2622-3066',

  keywords: [
    'PHP',
    { en: 'Separation of Presentation and Logic', id: 'Pemisahan Presentasi dan Logika' },
    { en: 'Framework Independent Architecture', id: 'Arsitektur Tanpa Framework' },
    'UI Page',
    'Action Handler',
  ] as Text[],

  title:
    'Separation of Concerns in Native PHP Web Applications: A Design Science Evaluation of Security, Testability, and Maintainability',

  summary: {
    en: 'The article evaluates Smart IAO on two fronts. Architecture: the request handler contains no HTML, so logic and interface stay fully separate. Security: every request passes through a six-layer chain, tested against three OWASP risk categories. All 15 test cases passed.',
    id: 'Artikel ini mengevaluasi Smart IAO dari dua sisi. Arsitektur: request handler tidak berisi HTML sama sekali, sehingga logika dan antarmuka terpisah sepenuhnya. Keamanan: setiap request melewati rantai enam lapis yang diuji terhadap tiga kategori risiko OWASP. Seluruh 15 kasus uji lolos.',
  } as Text,

  findings: [
    {
      value: '15/15',
      label: { en: 'Test cases passed', id: 'Kasus uji lolos' },
      note: { en: 'Functional and security tests', id: 'Uji fungsional dan keamanan' },
    },
    {
      value: '0',
      label: { en: 'Lines of HTML in the handler', id: 'Baris HTML di handler' },
      note: { en: 'Logic and view fully separated', id: 'Logika dan tampilan terpisah penuh' },
    },
    {
      value: '6',
      label: { en: 'Security layers', id: 'Lapisan keamanan' },
      note: { en: 'Checked on every request', id: 'Diperiksa di setiap request' },
    },
    {
      value: '3',
      label: { en: 'OWASP risks tested', id: 'Risiko OWASP diuji' },
      note: { en: 'Based on OWASP Top 10:2025 categories', id: 'Berdasarkan kategori OWASP Top 10:2025' },
    },
  ] satisfies Stat[],

  /** The collapsible "Abstract" row — hidden while empty. Blank lines start new paragraphs. */
  abstract: {
    en: 'Many academic web systems built with PHP combine presentation logic, business logic, and database access code within a single file. This article proposes and evaluates a lightweight, framework independent convention for the separation of presentation and logic in the user submission workflow of the Leave Permit Management module in the Smart IAO web application. The UI Page handles form rendering and page access control, while the Action Handler handles POST requests, validation, and database operations. The evaluation uses 15 purposively selected black box test cases and structural indicators based on three researcher defined DSR evaluation criteria. In the audited source snapshot, the UI Page comprises 218 physical lines and the Action Handler comprises 117 physical lines; the Action Handler contains no HTML markup. Extended McCabe analysis gives file level Cyclomatic Complexity values of 4 for the UI Page and 19 for the Action Handler. The higher handler value shows that responsibility separation does not by itself eliminate branching complexity. All 15 test cases passed under the specified scenarios. These findings provide preliminary evidence and are limited to the user submission workflow.',
    id: 'Banyak sistem web akademik yang dibangun dengan PHP menggabungkan logika presentasi, logika bisnis, dan akses basis data dalam satu berkas. Artikel ini mengusulkan dan mengevaluasi konvensi ringan yang tidak bergantung pada framework untuk memisahkan presentasi dan logika pada alur pengajuan pengguna dalam modul Leave Permit Management pada aplikasi web Smart IAO. UI Page menangani perenderan formulir dan pengendalian akses halaman, sedangkan Action Handler menangani permintaan POST, validasi, dan operasi basis data. Evaluasi menggunakan 15 kasus uji black box yang dipilih secara terarah dan indikator struktural berdasarkan tiga kriteria evaluasi DSR yang dirumuskan peneliti. Pada snapshot sumber yang diaudit, UI Page terdiri atas 218 baris fisik dan Action Handler terdiri atas 117 baris fisik; Action Handler tidak mengandung markup HTML. Analisis McCabe yang diperluas menghasilkan Cyclomatic Complexity tingkat berkas sebesar 4 untuk UI Page dan 19 untuk Action Handler. Nilai handler yang lebih tinggi menunjukkan bahwa pemisahan tanggung jawab tidak dengan sendirinya menghilangkan kompleksitas percabangan. Seluruh 15 kasus uji lulus pada skenario yang ditentukan. Temuan ini memberikan bukti awal dan terbatas pada alur pengajuan pengguna.',
  } as Text,
  abstractMinutes: 1,

  caseStudyLink: {
    label: { en: 'See the Smart IAO case study', id: 'Lihat studi kasus Smart IAO' } as Text,
    href: '#smart-iao',
  },

  /** Paste the DOI link here once it is published, e.g. 'https://doi.org/10.xxxx/…' */
  doi: '',
};
