import Link from 'next/link';
import PageHead from '@/components/PageHead';
import AdSlot from '@/components/AdSlot';
import { scholarships } from '@/lib/data';

export const metadata = { title: 'Scholarships in Pakistan and abroad', description: 'Scholarships for Pakistani students: HEC, Fulbright, Chevening, Commonwealth and more, with eligibility and how to apply.' };

export default function Page() {
  return (
    <>
      <PageHead title="Scholarships for Pakistani students" intro="Funding for local and overseas study, with who can apply and how to start." />
      <div className="wrap grid gap-5 py-12 md:grid-cols-2">
        {scholarships.map((s, i) => (
          <div key={s.slug} className="contents">
            <Link href={`/scholarships/${s.slug}`} className="panel transition hover:border-pine">
              <div className="flex flex-wrap gap-2"><span className="chip">{s.level}</span><span className="chip bg-sun/30 text-ink">{s.provider}</span></div>
              <h2 className="mt-3 text-2xl font-bold">{s.name}</h2>
              <p className="mt-2 text-ink/70">{s.summary}</p>
              <p className="mt-3 font-semibold text-pine">Covers: <span className="font-normal text-ink/80">{s.covers}</span></p>
            </Link>
            {i === 3 && <div className="md:col-span-2"><AdSlot /></div>}
          </div>
        ))}
      </div>
    </>
  );
}
