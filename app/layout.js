import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { SITE } from "@/lib/data";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });
const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(base),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Find Pakistan scholarships, the best universities, admission deadlines, entry test preparation and application guides in one place.",
  openGraph: { type: "website", siteName: SITE.name, locale: "en_PK" },
};

const nav = [
  ["Scholarships", "/scholarships"],
  ["Universities", "/universities"],
  ["Admissions", "/admissions"],
  ["Entry tests", "/entry-tests"],
  ["Blog", "/blog"],
];

export default function RootLayout({ children }) {
  const id = process.env.NEXT_PUBLIC_ADSENSE_ID;
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {id && (
          <Script
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`}
          />
        )}
        <header className="sticky top-0 z-20 border-b border-pine/10 bg-white/90 backdrop-blur">
          <div className="wrap flex flex-wrap items-center justify-between gap-3 py-3">
            <Link href="/" className="font-display text-xl font-bold text-pine">
              {SITE.name}
            </Link>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] font-semibold">
              {nav.map(([l, h]) => (
                <Link key={h} href={h} className="hover:text-pine">
                  {l}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 bg-ink text-white/80">
          <div className="wrap grid gap-8 py-12 sm:grid-cols-2">
            <div>
              <p className="font-display text-xl font-bold text-white">
                {SITE.name}
              </p>
              <p className="mt-2 max-w-sm">
                Free guides for students in Pakistan. Dates and rules change, so
                always confirm on the official website before you apply.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 sm:justify-end">
              {nav.map(([l, h]) => (
                <Link key={h} href={h} className="hover:text-sun">
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
