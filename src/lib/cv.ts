/*
  Builds the downloadable PDF CV from the files in src/data — one per language.
  Served by src/pages/cv/[name].pdf.ts: written to dist/cv/ on every build,
  generated live while you run `npm run dev`.

  Ported from the previous portfolio (shandirise/shandi-porto, scripts/cv.js).
  Kept ATS-friendly on purpose: one column, real selectable text (no images,
  tables or icons), standard section headings, a standard font (Helvetica),
  newest-first order, and no photo. No phone number either: the file is public.
*/
import PDFDocument from 'pdfkit';
import { cv } from '../data/cv';
import { certificates } from '../data/certificates';
import { featured } from '../data/featured';
import { journey } from '../data/journey';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { research } from '../data/research';
import { alsoComfortableWith, skillGroups, softSkills } from '../data/skills';
import type { CvMode, JourneyEntry, Lang, Text, YearMonth } from '../data/types';
import { formatRange, newestFirst } from './dates';
import { t as pick } from './i18n';

// Helvetica is a built-in PDF font and only covers the WinAnsi character set; map anything else.
const WIN_ANSI_EXTRA = '€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ';
const REPLACE: Record<string, string> = { '→': '->', '←': '<-', '↗': '', '↓': '', '↑': '', '≥': '>=', '≤': '<=', '●': '' };
const safe = (s: unknown) =>
  [...String(s ?? '')]
    .map((ch) => {
      if (ch.codePointAt(0)! < 256 || WIN_ANSI_EXTRA.includes(ch)) return ch;
      if (!(ch in REPLACE)) console.warn(`[cv] unsupported character "${ch}" replaced`);
      return REPLACE[ch] ?? '?';
    })
    .join('');

const host = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/+$/, '');
const mode = (item: { cv?: CvMode }, fallback: CvMode) => item.cv ?? fallback;

// "Dimara Kusuma Hakim" -> "Hakim, D. K." (single names stay as they are)
const citeName = (name: string) => {
  const parts = name.split(' ');
  if (parts.length === 1) return name;
  const last = parts.pop();
  return `${last}, ${parts.map((p) => `${p[0]}.`).join(' ')}`;
};

const PAGE = { width: 595.28, height: 841.89 }; // A4
const M = { top: 40, bottom: 44, left: 46, right: 46 };
const X = M.left;
const W = PAGE.width - M.left - M.right;
const C = { text: '#111111', muted: '#4d4d4d', rule: '#8c8c8c' };
const F = { reg: 'Helvetica', bold: 'Helvetica-Bold', italic: 'Helvetica-Oblique' };
const S = { body: 9.3, small: 8.8, title: 10.3, heading: 10.3 };
const GAP = 1.1;

export function buildCv(lang: Lang, siteUrl = ''): Promise<Buffer> {
  const t = (v: Text | undefined) => safe(pick(v, lang));
  const tl = (list: Text[] | undefined) => (list ?? []).map(t);
  const range = (start: YearMonth, end?: YearMonth) => safe(formatRange(start, end, lang));
  const h = cv.headings;

  const doc = new PDFDocument({
    size: 'A4',
    margins: M,
    bufferPages: true,
    lang: lang === 'id' ? 'id-ID' : 'en-US',
    displayTitle: true,
    info: {
      Title: `${profile.name} — CV`,
      Author: profile.name,
      Subject: `${profile.name} — ${profile.role}`,
      Keywords: skillGroups
        .slice(0, 2)
        .flatMap((g) => g.items.map((s) => s.name))
        .join(', '),
    },
  });
  const chunks: Buffer[] = [];
  doc.on('data', (c: Buffer) => chunks.push(c));
  const done = new Promise<Buffer>((resolve) => doc.on('end', () => resolve(Buffer.concat(chunks))));

  // ---------- Layout helpers ----------
  const use = (font: string, size: number, color = C.text) => doc.font(font).fontSize(size).fillColor(color);
  const ensure = (height: number) => {
    if (doc.y + height > PAGE.height - M.bottom) doc.addPage();
  };

  const heading = (label: string) => {
    doc.y += 7;
    ensure(48); // keep the heading with the start of its first entry
    use(F.bold, S.heading).text(safe(label).toUpperCase(), X, doc.y, { width: W });
    const y = doc.y + 1;
    doc.moveTo(X, y).lineTo(X + W, y).lineWidth(0.6).strokeColor(C.rule).stroke();
    doc.y = y + 5;
  };

  // Text on the left, date on the right of the same line
  const row = (left: string, right?: string, { font = F.bold, size = S.title, link }: { font?: string; size?: number; link?: string } = {}) => {
    const y = doc.y;
    use(F.reg, S.small);
    const rightWidth = right ? doc.widthOfString(right) + 16 : 0;
    use(font, size).text(left, X, y, { width: W - rightWidth, lineGap: GAP, link });
    const after = doc.y;
    if (right) use(F.reg, S.small, C.muted).text(right, X, y + (size - S.small) * 0.7, { width: W, align: 'right' });
    doc.x = X;
    doc.y = Math.max(after, doc.y);
  };

  const meta = (text: string) => use(F.italic, S.small, C.muted).text(text, X, doc.y, { width: W, lineGap: GAP });
  const para = (text: string) => use(F.reg, S.body).text(text, X, doc.y, { width: W, lineGap: GAP });

  // The bullet is drawn, not typed, so ATS parsers read only the sentence
  const bullet = (text: string) => {
    use(F.reg, S.body);
    ensure(doc.heightOfString(text, { width: W - 13, lineGap: GAP }));
    const y = doc.y;
    doc.circle(X + 4.5, y + S.body * 0.48, 1.15).fill(C.text);
    doc.text(text, X + 13, y, { width: W - 13, lineGap: GAP });
    doc.x = X;
  };

  const labelled = (label: string, value: string) => {
    use(F.reg, S.body);
    ensure(doc.heightOfString(`${label}: ${value}`, { width: W, lineGap: GAP }));
    use(F.bold, S.body).text(`${label}: `, X, doc.y, { width: W, lineGap: GAP, continued: true });
    use(F.reg, S.body).text(value, { lineGap: GAP });
    doc.x = X;
  };

  const entry = ({ title, right, sub, points = [], link }: { title: string; right?: string; sub?: string; points?: string[]; link?: string }) => {
    use(F.bold, S.title);
    ensure(doc.heightOfString(title, { width: W - 110 }) + (sub ? 13 : 0) + (points.length ? 14 : 0));
    row(title, right, { link });
    if (sub) meta(sub);
    points.forEach(bullet);
    doc.y += 4.5;
  };

  const brief = (left: string, right: string) => {
    ensure(13);
    row(left, right, { font: F.reg, size: S.body });
    doc.y += 1;
  };

  // A line of contact details; each item can be a link
  const contactLine = (items: [string, string?][]) => {
    use(F.reg, S.small, C.muted);
    items.forEach(([label, href], i) => {
      const last = i === items.length - 1;
      const opts = { continued: !last, link: href || undefined, width: W };
      if (i === 0) doc.text(label, X, doc.y, opts);
      else doc.text(label, opts);
      if (!last) doc.text('   |   ', { continued: true, link: undefined });
    });
    doc.x = X;
  };

  const sortedJourney = (type: JourneyEntry['type']) => journey.filter((e) => e.type === type).sort(newestFirst);

  // ---------- Header ----------
  use(F.bold, 22).text(profile.name, X, M.top, { width: W });
  use(F.reg, 11.5).text(safe(profile.role), X, doc.y + 1, { width: W });
  doc.y += 5;
  const contact: [string, string?][] = [[t(profile.location)], [profile.email, `mailto:${profile.email}`]];
  if (siteUrl) contact.push([host(siteUrl), siteUrl]);
  contactLine(contact);
  const links = Object.values(profile.links).filter(Boolean);
  if (links.length) {
    doc.y += 1;
    contactLine(links.map((l) => [host(l), l]));
  }

  // ---------- Summary & skills ----------
  heading(t(h.summary));
  para(t(cv.summary));

  heading(t(h.skills));
  skillGroups.forEach((g, i) => {
    const names = g.items.map((s) => safe(s.name));
    // The "Also comfortable with" tools join the last group
    if (i === skillGroups.length - 1) names.push(...tl(alsoComfortableWith));
    labelled(t(g.name), names.join(', '));
  });
  labelled(t(h.softSkills), tl(softSkills).join(', '));
  labelled(t(h.languages), tl(cv.languages).join(', '));

  // ---------- Experience ----------
  const work = sortedJourney('work');
  const fullWork = work.filter((e) => mode(e, 'full') === 'full');
  if (fullWork.length) {
    heading(t(h.experience));
    fullWork.forEach((e) =>
      entry({
        title: t(e.title),
        right: range(e.start, e.end),
        sub: [t(e.org), t(e.place)].filter(Boolean).join(' · '),
        points: tl(e.points),
      }),
    );
  }

  // ---------- Projects (newest first) ----------
  const projectList = [
    ...featured.map((f) => ({
      name: f.title,
      type: f.kicker,
      year: f.year ?? 0,
      stack: f.stack,
      link: f.action && /^https?:/.test(f.action.href) ? f.action.href : undefined,
      points: f.points ?? [f.oneLiner],
      cv: f.cv,
    })),
    ...projects.map((p) => ({
      name: p.name,
      type: p.type,
      year: p.year,
      stack: p.stack,
      link: p.links?.site || p.links?.demo || p.links?.code || undefined,
      points: p.points ?? [p.description],
      cv: p.cv,
    })),
  ]
    .map((p, i) => ({ ...p, i }))
    .filter((p) => mode(p, 'full') !== false)
    .sort((a, b) => b.year - a.year || a.i - b.i);

  if (projectList.length) {
    heading(t(h.projects));
    projectList.forEach((p) => {
      const stack = p.stack.map(safe).join(', ');
      if (mode(p, 'full') === 'brief') {
        brief(`${t(p.name)} — ${stack}`, String(p.year));
        return;
      }
      entry({
        title: t(p.name),
        right: String(p.year),
        sub: [t(p.type), stack, p.link && host(p.link)].filter(Boolean).join('  |  '),
        points: tl(p.points),
        link: p.link,
      });
    });
  }

  // ---------- Education, certifications, publications ----------
  const education = sortedJourney('education').filter((e) => mode(e, 'full') !== false);
  if (education.length) {
    heading(t(h.education));
    education.forEach((e) =>
      entry({ title: t(e.title), right: range(e.start, e.end), sub: t(e.org), points: tl(e.points) }),
    );
  }

  const certs = certificates.filter((c) => pick(c.title, lang));
  if (certs.length) {
    heading(t(h.certifications));
    certs.forEach((c) =>
      entry({
        title: t(c.title),
        right: safe(c.year ?? ''),
        sub: t(c.issuer),
        points: tl(c.points ?? c.bullets),
        link: siteUrl && c.pdf ? siteUrl + c.pdf : undefined,
      }),
    );
  }

  if (research.title) {
    heading(t(h.publications));
    const names = research.authors.map(citeName);
    const authors = names.length > 1 ? `${names.slice(0, -1).join(', ')}, & ${names.at(-1)}` : names[0];
    entry({
      title: safe(research.title),
      right: String(research.year),
      sub: safe(`${authors} — ${research.journal} (${pick(research.status, lang)})${research.doi ? ` · ${host(research.doi)}` : ''}`),
      points: [t(research.summary)],
      link: research.doi || undefined,
    });
  }

  // ---------- Leadership & other experience ----------
  const orgs = sortedJourney('organisation').filter((o) => mode(o, 'brief') !== false);
  if (orgs.length) {
    heading(t(h.leadership));
    orgs.forEach((o) => {
      if (mode(o, 'brief') === 'full') {
        entry({ title: `${t(o.title)}, ${t(o.org)}`, right: range(o.start, o.end), points: tl(o.points) });
      } else {
        brief(`${t(o.title)}, ${t(o.org)}`, range(o.start, o.end));
      }
    });
  }

  const otherWork = work.filter((e) => mode(e, 'full') === 'brief');
  if (otherWork.length) {
    heading(t(h.other));
    otherWork.forEach((e) => brief(`${t(e.title)}, ${t(e.org)}`, range(e.start, e.end)));
  }

  // ---------- Page numbers ----------
  const pages = doc.bufferedPageRange();
  if (pages.count > cv.maxPages) {
    console.warn(
      `[cv] ${lang.toUpperCase()} CV is ${pages.count} pages; recruiters expect ${cv.maxPages} at most. Mark less relevant items cv: 'brief' or false in src/data.`,
    );
  }
  if (pages.count > 1) {
    for (let i = 0; i < pages.count; i++) {
      doc.switchToPage(i);
      doc.page.margins.bottom = 0; // writing inside the margin must not trigger a new page
      use(F.reg, 8, C.muted).text(`${profile.name} — CV · ${i + 1} / ${pages.count}`, X, PAGE.height - 30, {
        width: W,
        align: 'right',
        lineBreak: false,
      });
      doc.page.margins.bottom = M.bottom;
    }
  }

  doc.end();
  return done;
}
