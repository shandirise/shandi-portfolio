import type { Lang, YearMonth } from '../data/types';

const MONTHS: Record<Lang, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  id: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
};

/** [2025, 10] → 202510, [2025] → 202500 — for sorting. */
export const sortKey = ([year, month = 0]: YearMonth) => year * 100 + month;

const one = ([year, month]: YearMonth, lang: Lang) => (month ? `${MONTHS[lang][month - 1]} ${year}` : String(year));

/**
 * [2026, 12]                 → "Dec 2026"
 * [2026, 9]  – [2026, 10]    → "Sep – Oct 2026"
 * [2025, 10] – [2026, 9]     → "Oct 2025 – Sep 2026"
 * [2022]     – [2026]        → "2022 – 2026"
 */
export function formatRange(start: YearMonth, end: YearMonth | undefined, lang: Lang): string {
  if (!end || sortKey(end) === sortKey(start)) return one(start, lang);
  const [sy, sm] = start;
  const [ey, em] = end;
  if (sy === ey && sm && em) return `${MONTHS[lang][sm - 1]} – ${one(end, lang)}`;
  if (sy === ey && !sm && !em) return String(sy);
  return `${one(start, lang)} – ${one(end, lang)}`;
}

/** Newest first: by end (or start), then by start. */
export const newestFirst = <T extends { start: YearMonth; end?: YearMonth }>(a: T, b: T) =>
  sortKey(b.end ?? b.start) - sortKey(a.end ?? a.start) || sortKey(b.start) - sortKey(a.start);
