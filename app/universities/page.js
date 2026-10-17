"use client";
import { useState } from "react";
import PageHead from "@/components/PageHead";
import AdSlot from "@/components/AdSlot";
import { universities } from "@/lib/data";

export default function Page() {
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");
  const list = universities.filter(
    (u) =>
      (type === "All" || u.type === type) &&
      (u.name + u.city + u.known).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <>
      <PageHead
        title="University directory"
        intro="Compare well-known Pakistani universities by city, type, strengths and entry test."
      />
      <div className="wrap py-8 sm:py-10">
        {/* Filters: stacked on phones, one row from sm up */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, city or subject"
            aria-label="Search universities"
            className="w-full rounded-full border border-pine/20 bg-white px-5 py-2.5 sm:w-80"
          />
          <div
            className="grid grid-cols-3 gap-2 sm:flex"
            role="group"
            aria-label="Filter by type"
          >
            {["All", "Public", "Private"].map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                aria-pressed={type === t}
                className={`rounded-full px-4 py-2 font-semibold ${type === t ? "bg-pine text-white" : "border border-pine/20 bg-white text-ink"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm text-ink/60" aria-live="polite">
          {list.length} {list.length === 1 ? "university" : "universities"}{" "}
          found
        </p>

        {/* Phones: one card per university */}
        <ul className="mt-4 grid gap-4 md:hidden">
          {list.map((u) => (
            <li key={u.name} className="panel p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold">{u.name}</h2>
                <span className="chip shrink-0">{u.type}</span>
              </div>
              <dl className="mt-3 space-y-2 text-[15px]">
                <div>
                  <dt className="text-ink/60">City</dt>
                  <dd className="font-semibold">{u.city}</dd>
                </div>
                <div>
                  <dt className="text-ink/60">Known for</dt>
                  <dd className="font-semibold">{u.known}</dd>
                </div>
                <div>
                  <dt className="text-ink/60">Entry test</dt>
                  <dd className="font-semibold">{u.test}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        {/* Tablet and desktop: table */}
        <div className="mt-4 hidden overflow-x-auto rounded-2xl border border-pine/15 bg-white md:block">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-mint text-sm">
              <tr>
                <th className="p-4">University</th>
                <th className="p-4">City</th>
                <th className="p-4">Type</th>
                <th className="p-4">Known for</th>
                <th className="p-4">Entry test</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pine/10">
              {list.map((u) => (
                <tr key={u.name}>
                  <td className="p-4 font-bold">{u.name}</td>
                  <td className="p-4">{u.city}</td>
                  <td className="p-4">
                    <span className="chip">{u.type}</span>
                  </td>
                  <td className="p-4">{u.known}</td>
                  <td className="p-4">{u.test}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!list.length && (
          <p className="panel mt-4">
            No universities match. Try a different search.
          </p>
        )}

        <AdSlot className="mt-8" />
        <p className="mt-6 text-sm text-ink/60">
          This list is a starting point, not a ranking. Check the latest HEC
          rankings and each university’s prospectus.
        </p>
      </div>
    </>
  );
}
