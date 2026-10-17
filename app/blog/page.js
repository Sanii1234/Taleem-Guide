import Link from 'next/link';
import PageHead from '@/components/PageHead';
import { posts } from '@/lib/data';

export const metadata = { title: 'Blog and application guides', description: 'Practical guides on scholarship essays, admission documents and choosing a university in Pakistan.' };

export default function Page() {
  return (
    <>
      <PageHead title="Blog and application guides" intro="Practical advice for every stage of applying." />
      <div className="wrap grid gap-5 py-12 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="panel hover:border-pine">
            <p className="text-sm text-ink/60">{p.date} &middot; {p.read} read</p>
            <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
            <p className="mt-2 text-ink/70">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
