import { scholarships, posts } from '@/lib/data';
const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export default function sitemap() {
  const fixed = ['', '/scholarships', '/universities', '/admissions', '/entry-tests', '/blog'];
  return [
    ...fixed.map((p) => ({ url: base + p })),
    ...scholarships.map((s) => ({ url: `${base}/scholarships/${s.slug}` })),
    ...posts.map((p) => ({ url: `${base}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
