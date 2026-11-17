// @ts-check
import { defineConfig } from 'astro/config';

// The public address of the site. Used for canonical + EN/ID language links (SEO)
// and printed on the generated CV.
// - On Vercel it is filled in automatically from the production domain.
// - Set SITE_URL (e.g. https://shandihimawan.com) to override, e.g. for a custom domain.
// Without either, URL-based tags are simply left out rather than pointing somewhere wrong.
const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || '';
const site = host ? `https://${host.replace(/^https?:\/\//, '').replace(/\/+$/, '')}` : undefined;

export default defineConfig({
  site,

  // Only needed for GitHub Pages "project" sites (username.github.io/repo-name):
  // base: '/repo-name',

  devToolbar: { enabled: false },
});
