import PageHead from '@/components/PageHead';
import AdSlot from '@/components/AdSlot';
import { tests } from '@/lib/data';

export const metadata = { title: 'Entry test preparation: MDCAT, ECAT, NET, FAST', description: 'Preparation tips and resources for MDCAT, ECAT, NUST NET, FAST and SAT in Pakistan.' };

export default function Page() {
  return (
    <>
      <PageHead title="Entry test resources" intro="What each test is for and how to prepare in a sensible way." />
      <div className="wrap grid gap-5 py-12 md:grid-cols-2">
        {tests.map((t, i) => (
          <div key={t.name} className="contents">
            <section className="panel">
              <h2 className="text-2xl font-bold">{t.name}</h2>
              <p className="mt-1 text-ink/70">{t.for}</p>
              <p className="mt-1 text-sm text-ink/60">Conducted by {t.body}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">{t.tips.map((x) => <li key={x}>{x}</li>)}</ul>
            </section>
            {i === 1 && <div className="md:col-span-2"><AdSlot /></div>}
          </div>
        ))}
      </div>
      <p className="wrap pb-6 text-sm text-ink/60">Test formats and syllabi change. Download the latest syllabus and past papers from the official test website.</p>
    </>
  );
}
