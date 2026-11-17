/* Shapes of the content in this folder. You rarely need to touch this file —
   it just gives you autocomplete and catches typos while you edit content. */

export type Lang = 'en' | 'id';

/** A date as [year] or [year, month], e.g. [2025] or [2025, 10] for Oct 2025. */
export type YearMonth = [number] | [number, number];

/**
 * How an item appears in the generated PDF CV (the website always shows everything):
 *   'full'  = title, dates and bullet points    'brief' = one line    false = left out
 */
export type CvMode = 'full' | 'brief' | false;

/**
 * Any text shown on the site.
 *   Same in both languages:  'PHP'
 *   Translated:              { en: 'Work', id: 'Kerja' }
 */
export type Text = string | { en: string; id: string };

export interface Fact {
  key: Text;
  value: Text;
}

export type SectionId =
  | 'work'
  | 'experience'
  | 'research'
  | 'projects'
  | 'skills'
  | 'certificates'
  | 'journey'
  | 'about'
  | 'gallery'
  | 'contact';

export interface Section {
  id: SectionId;
  /** Short label in the top navigation. */
  nav: Text;
  /** Big heading of the section (also used in the hero "Contents" list). */
  title: Text;
  /** Line under the heading. Supports {count}, {countWord}, {CountWord}, {since}. */
  dek?: Text;
  /** Show in the top navigation? (default: true) */
  inNav?: boolean;
  /** Set to false to hide the whole section. Numbers re-count automatically. */
  enabled?: boolean;
}

export interface Stat {
  /** Numbers count up on scroll ('3.68', '01', '15/15'); words just appear ('BNSP'). */
  value: string;
  label: Text;
  note: Text;
  highlight?: boolean;
}

export interface CaseStudy {
  /** Used for links like '#smart-iao'. */
  id: string;
  kicker: Text;
  title: Text;
  oneLiner: Text;
  facts: Fact[];
  myPart: Text[];
  stack: string[];
  action?: { label: Text; href: string; style?: 'primary' | 'secondary' };
  note?: Text;
  /** CV only: the year, bullet points, and how it appears (default 'full'). */
  year?: number;
  points?: Text[];
  cv?: CvMode;
  cover: {
    tone: 'accent' | 'surface';
    status: Text;
    /** Adds a pulsing "live" dot. */
    live?: boolean;
    /** Big text shown on the cover (used when there is no image). */
    figure: string;
    caption?: Text;
    facts: Fact[];
    /** Optional screenshot, e.g. '/images/fundor.jpg' (put the file in public/images). */
    image?: string;
  };
}

export interface Role {
  date: Text;
  title: Text;
  org: Text;
  bullets: Text[];
}

export interface OtherRole {
  title: Text;
  type: Text;
}

export interface Project {
  name: Text;
  type: Text;
  description: Text;
  /** Each tech name here also feeds the "Used in …" lines in Code mastery. */
  stack: string[];
  year: number;
  /** Leave a link as '' while you don't have it yet. */
  links?: { site?: string; demo?: string; code?: string };
  /** CV only: bullet points, and how it appears (default 'full'). */
  points?: Text[];
  cv?: CvMode;
}

export interface Skill {
  name: string;
  /** Logo from simpleicons.org — use the slug in the URL, e.g. 'nextdotjs'. */
  icon?: string;
  /** Short text tile when there is no logo, e.g. 'SQL'. */
  monogram?: string;
}

export interface SkillGroup {
  name: Text;
  items: Skill[];
}

export interface Certificate {
  tag: string;
  title: Text;
  about: Text;
  bullets: Text[];
  /** Put the PDF in public/files and write its path here. */
  pdf: string;
  thumbnail?: string;
  /** CV only: who issued it, the year, and more detailed bullet points. */
  issuer?: Text;
  year?: string;
  points?: Text[];
}

export type JourneyType = 'education' | 'work' | 'organisation' | 'project' | 'research';

export interface JourneyEntry {
  type: JourneyType;
  title: Text;
  org?: Text;
  place?: Text;
  /** Shown as "Sep – Oct 2026", "Oct 2025 – Sep 2026", "2022 – 2026"… automatically. */
  start: YearMonth;
  end?: YearMonth;
  /** Which year group it sits in. Defaults to the start year. */
  year?: number;
  /** One line on the website. If left out, the first point is shown. */
  text?: Text;
  /** Bullet points for the CV. */
  points?: Text[];
  /** CV: work defaults to 'full', organisations to 'brief'. Projects/research come from their own files. */
  cv?: CvMode;
}

export interface Photo {
  /** e.g. '/images/gallery-01.jpg' (put the file in public/images). */
  src: string;
  /** Width ÷ height, e.g. 4 / 3 for landscape or 3 / 4 for portrait. */
  ratio: number;
  caption: Text;
  alt?: Text;
}
