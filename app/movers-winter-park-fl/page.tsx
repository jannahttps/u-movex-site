import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Movers in Winter Park, FL | Apartment & Home Moving | U-MOVEX",
  description:
    "Looking for reliable movers in Winter Park, FL? U-MOVEX provides local apartment, home, and office moving services with packing, loading, and unloading. Fast quotes and no hidden fees.",
  alternates: {
    canonical: "https://umovex.com/movers-winter-park-fl",
  },
  openGraph: {
    title: "Movers in Winter Park, FL | U-MOVEX",
    description:
      "Trusted local movers in Winter Park, FL for apartments, homes, and office moves.",
    url: "https://umovex.com/movers-winter-park-fl",
    siteName: "U-MOVEX",
    type: "website",
  },
};

export default function MoversWinterParkPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Moving Services",
    name: "Movers in Winter Park, FL",
    areaServed: {
      "@type": "City",
      name: "Winter Park",
    },
    provider: {
      "@type": "MovingCompany",
      name: "U-MOVEX",
      url: "https://umovex.com",
      telephone: "+14076396520",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    url: "https://umovex.com/movers-winter-park-fl",
    description:
      "Local movers serving Winter Park, FL with apartment, home, office, packing, loading, and unloading services.",
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader dark />

      <Script id="schema-winter-park-service" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm">
              Winter Park • Local Moving Services
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Movers in Winter Park, FL
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              U-MOVEX provides trusted local moving services in Winter Park for
              apartments, homes, and offices. If you are looking for careful,
              reliable movers near Winter Park with transparent pricing and fast
              scheduling, our team is ready to help.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+14076396520"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Call Now: +1 (407) 639-6520
              </a>

              <Link
                href="/#quote"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/15"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Local moving services in Winter Park
              </h2>

              <p className="mb-5 text-base leading-relaxed text-slate-700">
                Winter Park is one of the most desirable areas near Orlando, and
                moving here often means working around apartment buildings,
                private homes, busy streets, and tight access points. Our movers
                help make the process smoother with careful handling, organized
                loading, and clear communication from start to finish.
              </p>

              <p className="mb-5 text-base leading-relaxed text-slate-700">
                We help with apartment moves, home moves, office relocation,
                packing, loading, unloading, and general local moving support.
                Whether you are moving into a new apartment near Park Avenue or
                relocating from a home in the Winter Park area, U-MOVEX focuses
                on efficiency, care, and honest pricing.
              </p>

              <p className="text-base leading-relaxed text-slate-700">
                Our service is designed for local moves only. That means we stay
                focused on what matters most to local customers: fast quotes,
                responsive scheduling, reliable movers, and a stress-free move
                in Winter Park and nearby Orlando areas.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="mb-5 text-2xl font-bold text-slate-900">
                Why customers in Winter Park choose U-MOVEX
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Apartment & home moving
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    We handle apartment and residential moves with care, whether
                    you are moving from a studio, condo, townhouse, or family
                    home.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Packing help available
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Need extra help? We can assist with packing, loading,
                    unloading, and move-day organization.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Clear local pricing
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Transparent pricing matters. Customers appreciate knowing
                    what to expect before the move starts.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Fast quotes and scheduling
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    We keep communication simple and responsive so you can plan
                    your move without unnecessary delays.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-5 text-2xl font-bold text-slate-900">
                Frequently asked questions
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Do you provide movers near Winter Park?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Yes. U-MOVEX provides local moving services in Winter Park
                    and nearby Orlando areas for apartments, homes, and offices.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Do you help with apartment moves in Winter Park?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Yes. Apartment moving is one of our main services, including
                    help with stairs, elevators, loading, and unloading.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Do you offer packing services?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Yes. We can help with packing, unpacking, loading, and other
                    local moving support depending on your move.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Do you handle office moving too?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Yes. While our biggest focus is apartment and home moving,
                    we also provide local office moving services in Winter Park
                    and Orlando.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg sm:p-8">
              <h2 className="mb-4 text-2xl font-bold">Need movers in Winter Park?</h2>
              <p className="mb-6 text-white/80">
                Talk to U-MOVEX for a fast quote and local moving help in Winter
                Park, FL.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+14076396520"
                  className="flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
                >
                  Call +1 (407) 639-6520
                </a>

                <Link
                  href="/#quote"
                  className="flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/15"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">
                Related moving pages
              </h2>

              <div className="flex flex-col gap-3">
                <Link
                  href="/local-movers-orlando"
                  className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Local Movers in Orlando
                </Link>
                <Link
                  href="/apartment-movers-orlando"
                  className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Apartment Movers in Orlando
                </Link>
                <Link
                  href="/office-movers-orlando"
                  className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Office Movers in Orlando
                </Link>
                <Link
                  href="/packing-services-orlando"
                  className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Packing Services in Orlando
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}