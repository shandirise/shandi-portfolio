import type { Text } from './types';

/*
  The downloadable PDF CV — built automatically from the other files in this
  folder every time the site is built (and live while you run `npm run dev`).
  Only things that appear on the CV but not on the website live here.

  Where each CV section comes from:
    Summary .......................... `summary` below
    Skills ........................... skills.ts (+ `languages` below)
    Experience / Additional ......... journey.ts, type 'work' (cv: 'full' / 'brief')
    Projects ......................... featured.ts + projects.ts
    Education ........................ journey.ts, type 'education'
    Certifications ................... certificates.ts
    Publications ..................... research.ts
    Leadership & Organizations ...... journey.ts, type 'organisation'

  Kept ATS-friendly on purpose: one column, real selectable text, standard
  headings, a standard font, newest first, no photo, no phone number.
*/

export const cv = {
  /** File name of the download: Shandi-Himawan-CV-EN.pdf / Shandi-Himawan-CV-ID.pdf */
  fileName: 'Shandi-Himawan-CV',

  summary: {
    en: 'Full-stack developer with a Bachelor of Informatics Engineering and a strong foundation in programming. Experienced in delivering real-world projects, including a recent pilot project in Europe, where I worked across the stack and adapted to international standards and expectations. I approach problems analytically, breaking down complexity into clean, maintainable solutions. Looking to join a team where I can build scalable, reliable web applications from database to interface.',
    id: 'Full-stack developer lulusan Sarjana Teknik Informatika dengan fondasi pemrograman yang kuat. Berpengalaman menyelesaikan proyek nyata, termasuk pilot project terbaru di Eropa, di mana saya bekerja di seluruh stack dan beradaptasi dengan standar serta ekspektasi internasional. Saya mendekati masalah secara analitis, memecah kompleksitas menjadi solusi yang bersih dan mudah dipelihara (maintainable). Saya ingin bergabung dengan tim yang memungkinkan saya membangun web application yang scalable dan andal, dari database hingga interface.',
  } as Text,

  languages: [
    { en: 'Indonesian — native', id: 'Bahasa Indonesia — native' },
    { en: 'English — working proficiency', id: 'Bahasa Inggris — kemampuan kerja' },
  ] as Text[],

  /** Recruiters expect two pages at most; the build warns if it gets longer. */
  maxPages: 2,

  headings: {
    summary: { en: 'Summary', id: 'Ringkasan' },
    skills: { en: 'Skills', id: 'Keahlian' },
    softSkills: { en: 'Soft skills', id: 'Keahlian non-teknis' },
    languages: { en: 'Languages', id: 'Bahasa' },
    experience: { en: 'Experience', id: 'Pengalaman Kerja' },
    projects: { en: 'Projects', id: 'Proyek' },
    education: { en: 'Education', id: 'Pendidikan' },
    certifications: { en: 'Certifications', id: 'Sertifikasi' },
    publications: { en: 'Publications', id: 'Publikasi' },
    leadership: { en: 'Leadership & Organizations', id: 'Organisasi & Kepemimpinan' },
    other: { en: 'Additional Experience', id: 'Pengalaman Lainnya' },
  } satisfies Record<string, Text>,
};
