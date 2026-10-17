import Link from 'next/link';
import PageHead from '@/components/PageHead';
import AdSlot from '@/components/AdSlot';
import { deadlines } from '@/lib/data';

export const metadata = { title: 'Admissions and deadlines in Pakistan', description: 'A step-by-step admission timeline and the usual deadline windows for Pakistani universities and scholarships.' };

const steps = [
  ['Choose programs', 'Shortlist 4 to 6 programs. Check HEC and council recognition.'],
  ['Prepare documents', 'Result cards, CNIC or B-Form, domicile, photos and fee challan.'],
  ['Register for the test', 'Book the entry test and note the roll number slip date.'],
  ['Apply online', 'Submit each university form and pay the application fee.'],
  ['Check merit lists', 'Follow merit list dates and complete fee payment on time.'],
];

export default function Page() {
  return (
    <>
      <PageHead title="Admissions and deadlines" intro="A simple timeline for the admission season and the windows to track." />
      <div className="wrap grid gap-10 py-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Admission timeline</h2>
          <ol className="mt-5 space-y-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="panel flex gap-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pine font-bold text-white">{i + 1}</span><div><h3 className="font-bold">{t}</h3><p className="text-ink/70">{d}</p></div></li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Typical deadline windows</h2>
          <ul className="mt-5 divide-y divide-pine/10 rounded-2xl border border-pine/15 bg-white">
            {deadlines.map((d) => (
              <li key={d.name}><Link href={d.link} className="flex justify-between gap-4 p-4 hover:bg-mint/50"><span className="font-semibold">{d.name}</span><span className="text-right text-ink/70">{d.window}</span></Link></li>
            ))}
          </ul>
          <AdSlot className="mt-6" />
          <p className="mt-4 text-sm text-ink/60">Windows shown are typical, not official. Update this list each season with confirmed dates.</p>
        </div>
      </div>
    </>
  );
}
