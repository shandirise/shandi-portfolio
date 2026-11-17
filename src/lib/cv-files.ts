import { cv } from '../data/cv';
import type { Lang } from '../data/types';
import { LANGS } from './i18n';

/** One CV per language: { lang: 'en', name: 'Shandi-Himawan-CV-EN' } … */
export const cvFiles = LANGS.map((lang) => ({ lang, name: `${cv.fileName}-${lang.toUpperCase()}` }));

/** Where the generated PDF is served, e.g. /cv/Shandi-Himawan-CV-EN.pdf */
export const cvHref = (lang: Lang) => `/cv/${cv.fileName}-${lang.toUpperCase()}.pdf`;
