/* The PDF CV, generated from src/data (see src/lib/cv.ts).
   Build: written to dist/cv/Shandi-Himawan-CV-EN.pdf and …-ID.pdf. Dev: made on request. */
import type { APIRoute, GetStaticPaths } from 'astro';
import { buildCv } from '../../lib/cv';
import { cvFiles } from '../../lib/cv-files';
import type { Lang } from '../../data/types';

export const getStaticPaths = (() =>
  cvFiles.map(({ lang, name }) => ({ params: { name }, props: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props, site }) => {
  const pdf = await buildCv(props.lang as Lang, site ? site.href.replace(/\/$/, '') : '');
  return new Response(new Uint8Array(pdf), {
    headers: { 'Content-Type': 'application/pdf' },
  });
};
