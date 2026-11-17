import type { SkillGroup, Text } from './types';

/*
  05 · Code mastery.
  You never type "Used in …" yourself: each skill lists every project (featured
  + other) whose `stack` contains the exact same name, and the count follows.
  Skills inside a group are sorted by that count automatically.

  Logos come from simpleicons.org — use the slug from the icon's URL.
  No logo? Use `monogram: 'ABC'` instead.
*/

/** The highlighted band of big tiles. Names must exist in a group below. */
export const coreStack = ['TypeScript', 'PHP', 'Laravel', 'React', 'Next.js', 'Tailwind CSS', 'Docker'];

export const skillGroups: SkillGroup[] = [
  {
    name: { en: 'Programming languages', id: 'Bahasa pemrograman' },
    items: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'PHP', icon: 'php' },
      { name: 'SQL', monogram: 'SQL' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
      { name: 'C#', monogram: 'C#' },
    ],
  },
  {
    name: { en: 'Frameworks & libraries', id: 'Framework & library' },
    items: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'React', icon: 'react' },
      { name: 'React Native', icon: 'react' },
      { name: 'Express', icon: 'express' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'ASP.NET', icon: 'dotnet' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
  {
    name: { en: 'Developer tools', id: 'Alat pengembang' },
    items: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Git', icon: 'git' },
      { name: 'VS Code', monogram: 'VSC' },
      { name: 'Visual Studio', monogram: 'VS' },
      { name: 'Navicat', monogram: 'NV' },
    ],
  },
];

export const softSkills: Text[] = [
  { en: 'Leadership', id: 'Kepemimpinan' },
  { en: 'Communication', id: 'Komunikasi' },
  { en: 'Problem solving', id: 'Pemecahan masalah' },
  { en: 'Teamwork', id: 'Kerja sama tim' },
];

export const alsoComfortableWith: Text[] = ['Microsoft Office', 'CorelDraw', 'Canva'];
