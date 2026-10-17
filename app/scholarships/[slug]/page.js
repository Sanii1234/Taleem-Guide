import Link from 'next/link';
import { notFound } from 'next/navigation';
import AdSlot from '@/components/AdSlot';
import { scholarships } from '@/lib/data';

export const generateStaticParams = () => scholarships.map((s) => ({ slug: s.slug }));
export function generateMetadata({ params }) {
  const s = scholarships.find((x) => x.slug === params.slug);
  return s ? { title: `${s.name}: eligibility and how to apply`, description: s.summary } : {};
}

export default function Page({ params }) {
  const s = scholarships.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return (
    <article className="wrap max-w-3xl py-12">
      <Link href="/scholarships" className="font-semibold text-pine">Back to scholarships</Link>
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{s.name}</h1>
      <p className="mt-3 text-lg text-ink/75">{s.summary}</p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        {[['Provider', s.provider], ['Level', s.level], ['Covers', s.covers]].map(([k, v]) => (
          <div key={k} className="panel p-4"><dt className="text-sm text-ink/60">{k}</dt><dd className="mt-1 font-semibold">{v}</dd></div>
        ))}
      </dl>
      <h2 className="mt-10 text-2xl font-bold">Who can apply</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/85">{s.eligibility.map((e) => <li key={e}>{e}</li>)}</ul>
      <AdSlot className="my-8" />
      <h2 className="text-2xl font-bold">How to apply</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-ink/85">{s.how.map((e) => <li key={e}>{e}</li>)}</ol>
      <p className="mt-8 rounded-xl bg-sun/25 p-4 text-sm">Rules and dates change every cycle. Confirm all details on the provider’s official website before you apply.</p>
    </article>
  );
}
