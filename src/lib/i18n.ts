import type { Lang, Text } from '../data/types';

export const LANGS: Lang[] = ['en', 'id'];

/** Pick the right language from a Text value. Falls back to English. */
export function t(text: Text | undefined | null, lang: Lang): string {
  if (text == null) return '';
  if (typeof text === 'string') return text;
  return text[lang] || text.en;
}

const WORDS: Record<Lang, string[]> = {
  en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
  id: ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas', 'dua puluh'],
};

/**
 * Fill {placeholders}. For numbers you also get words:
 *   {count} → 6   {countWord} → six   {CountWord} → Six
 */
export function fill(str: string, vars: Record<string, string | number>, lang: Lang): string {
  return str.replace(/\{(\w+)\}/g, (match, key: string) => {
    if (key in vars) return String(vars[key]);
    if (/Word$/.test(key)) {
      const base = key.slice(0, -4);
      const name = base[0].toLowerCase() + base.slice(1);
      const n = vars[name];
      if (typeof n === 'number') {
        const word = WORDS[lang][n] ?? String(n);
        return base[0] === base[0].toUpperCase() ? word[0].toUpperCase() + word.slice(1) : word;
      }
    }
    return match;
  });
}

/** 1 → '01' */
export const pad2 = (n: number) => String(n).padStart(2, '0');

/** Where the other language lives. */
export const langPath = (lang: Lang) => (lang === 'en' ? '' : `${lang}/`);
