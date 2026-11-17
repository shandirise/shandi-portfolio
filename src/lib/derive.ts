/* Everything the site computes for you from the data files. */
import { featured } from '../data/featured';
import { journey } from '../data/journey';
import { projects } from '../data/projects';
import { sections } from '../data/sections';
import { skillGroups } from '../data/skills';
import { photos } from '../data/gallery';
import type { JourneyEntry, Lang, Skill, Text } from '../data/types';
import { t } from './i18n';
import { exists, isDev } from './assets';

const same = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();

/* ── Sections ───────────────────────────────────────── */

/** Sections that will actually render, in order, with their running number. */
export function visibleSections() {
  const galleryHasPhotos = photos.some((p) => exists(p.src));
  return sections
    .filter((s) => s.enabled !== false)
    .filter((s) => s.id !== 'gallery' || galleryHasPhotos || isDev)
    .map((s, i) => ({ ...s, num: i + 1 }));
}

/* ── Skills ─────────────────────────────────────────── */

/** Every project (featured first) whose stack lists this skill. */
export function usedIn(skill: string): Text[] {
  const all = [
    ...featured.map((f) => ({ name: f.title, stack: f.stack })),
    ...projects.map((p) => ({ name: p.name, stack: p.stack })),
  ];
  return all.filter((p) => p.stack.some((s) => same(s, skill))).map((p) => p.name);
}

export function findSkill(name: string): Skill | undefined {
  for (const group of skillGroups) {
    const hit = group.items.find((s) => same(s.name, name));
    if (hit) return hit;
  }
  return undefined;
}

/** Skill groups with usage attached, most-used first (ties keep your order). */
export function skillGroupsWithUsage() {
  return skillGroups.map((group) => ({
    ...group,
    items: group.items
      .map((skill, order) => ({ ...skill, usedIn: usedIn(skill.name), order }))
      .sort((a, b) => b.usedIn.length - a.usedIn.length || a.order - b.order),
  }));
}

/* ── Journey ────────────────────────────────────────── */

export function journeyYears() {
  const years = [...new Set(journey.map(groupYear))].sort((a, b) => b - a);
  return years.map((year) => ({ year, entries: journey.filter((e) => groupYear(e) === year) }));
}

export const journeySince = () => Math.min(...journey.map((e) => e.start[0]));

/** The year group an entry sits in: its own `year`, or else its start year. */
export const groupYear = (e: JourneyEntry) => e.year ?? e.start[0];

/** "IT Support Intern ×2 · SI-UMKM · Todo App" + how many are left over. */
export function journeyPreview(entries: JourneyEntry[], lang: Lang, budget = 72) {
  const groups: { title: string; n: number }[] = [];
  for (const e of entries) {
    const title = t(e.title, lang);
    const g = groups.find((x) => x.title === title);
    if (g) g.n++;
    else groups.push({ title, n: 1 });
  }
  const items: string[] = [];
  let length = 0;
  let covered = 0;
  for (const g of groups) {
    const label = g.n > 1 ? `${g.title} ×${g.n}` : g.title;
    if (items.length && length + label.length > budget) break;
    items.push(label);
    length += label.length + 3;
    covered += g.n;
  }
  return { items, rest: entries.length - covered };
}
