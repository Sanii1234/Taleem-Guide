export default function PageHead({ title, intro }) {
  return (
    <section className="border-b border-pine/10 bg-mint/60">
      <div className="wrap py-12">
        <h1 className="max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-ink/75">{intro}</p>
      </div>
    </section>
  );
}
