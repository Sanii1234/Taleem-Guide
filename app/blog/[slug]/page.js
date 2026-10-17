import Link from 'next/link';
import { notFound } from 'next/navigation';
import AdSlot from '@/components/AdSlot';
import { posts } from '@/lib/data';

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default function Page({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <article className="wrap max-w-2xl py-12">
      <Link href="/blog" className="font-semibold text-pine">Back to blog</Link>
      <h1 className="mt-4 text-4xl font-bold">{p.title}</h1>
      <p className="mt-2 text-sm text-ink/60">{p.date} &middot; {p.read} read</p>
      <div className="mt-8 space-y-5 text-lg leading-8 text-ink/90">
        {p.body.slice(0, 2).map((t) => <p key={t}>{t}</p>)}
        <AdSlot />
        {p.body.slice(2).map((t) => <p key={t}>{t}</p>)}
      </div>
    </article>
  );
}
