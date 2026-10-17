import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import { scholarships, deadlines, posts } from '@/lib/data';

export const metadata = { title: 'Pakistan scholarships, universities, admissions and entry tests' };

export default function Home() {
  return (
    <>
      <section className="bg-pine text-white">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-20">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">Your next step in Pakistani education, explained clearly.</h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">Scholarships you can apply for, universities worth comparing, deadlines to track and entry tests to prepare for.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/scholarships" className="btn-sun">Find a scholarship</Link>
              <Link href="/universities" className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 font-semibold hover:bg-white/10">Compare universities</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink">
            <h2 className="text-xl font-bold">Deadlines to watch</h2>
            <p className="text-sm text-ink/60">Typical windows. Confirm exact dates officially.</p>
            <ul className="mt-4 divide-y divide-pine/10">
              {deadlines.map((d) => (
                <li key={d.name}>
                  <Link href={d.link} className="flex items-baseline justify-between gap-4 py-3 hover:text-pine">
                    <span className="font-semibold">{d.name}</span>
                    <span className="text-right text-sm text-ink/65">{d.window}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="wrap py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Scholarships to start with</h2>
          <Link href="/scholarships" className="font-semibold text-pine">See all</Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {scholarships.slice(0, 3).map((s) => (
            <Link key={s.slug} href={`/scholarships/${s.slug}`} className="panel transition hover:border-pine">
              <span className="chip">{s.level}</span>
              <h3 className="mt-3 text-xl font-bold">{s.name}</h3>
              <p className="mt-2 text-ink/70">{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="wrap"><AdSlot /></div>

      <section className="wrap py-14">
        <div className="grid gap-5 md:grid-cols-[2fr_1fr_1fr]">
          <Link href="/universities" className="rounded-2xl bg-mint p-8 md:row-span-2">
            <h3 className="text-2xl font-bold">University directory</h3>
            <p className="mt-2 max-w-sm text-ink/75">Filter by city and type, and see which entry test each university asks for.</p>
          </Link>
          <Link href="/admissions" className="panel hover:border-pine"><h3 className="text-lg font-bold">Admissions</h3><p className="mt-1 text-ink/70">Steps and timeline.</p></Link>
          <Link href="/entry-tests" className="panel hover:border-pine"><h3 className="text-lg font-bold">Entry tests</h3><p className="mt-1 text-ink/70">MDCAT, ECAT, NET and more.</p></Link>
          <Link href="/blog" className="panel hover:border-pine md:col-span-2"><h3 className="text-lg font-bold">Application guides</h3><p className="mt-1 text-ink/70">Essays, documents and choosing a university.</p></Link>
        </div>
      </section>

      <section className="wrap pb-6">
        <h2 className="text-3xl font-bold">Latest guides</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="panel hover:border-pine">
              <p className="text-sm text-ink/60">{p.read} read</p>
              <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-ink/70">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
