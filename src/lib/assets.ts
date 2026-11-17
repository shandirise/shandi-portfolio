import fs from 'node:fs';
import path from 'node:path';

/*
  The "missing things" rule used across the site:
  - A link/file that exists → shown normally.
  - A link that is '' or a file not yet in /public → shown as a dashed
    placeholder while running `npm run dev`, and left out of the real build.
*/

export const isDev = import.meta.env.DEV;

const EXTERNAL = /^(https?:|mailto:|tel:|#)/;
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');
/** Files the site generates itself (not in /public), e.g. the PDF CV from src/pages/cv/. */
const GENERATED = [/^\/cv\/[^/]+\.pdf$/];

/** Prefix local paths with the configured `base` (for GitHub Pages sub-paths). */
export function url(href: string): string {
  if (!href || EXTERNAL.test(href)) return href;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${href.replace(/^\//, '')}`;
}

/** Is this link usable? External links count as present; local files must exist in /public. */
export function exists(href?: string): boolean {
  if (!href) return false;
  if (EXTERNAL.test(href) || GENERATED.some((re) => re.test(href))) return true;
  return fs.existsSync(path.join(PUBLIC_DIR, href.replace(/^\//, '')));
}

/** Should we render it? Present → yes. Missing → only in dev (as a placeholder). */
export const shouldShow = (href?: string) => exists(href) || isDev;

export const isExternal = (href: string) => /^https?:/.test(href);
