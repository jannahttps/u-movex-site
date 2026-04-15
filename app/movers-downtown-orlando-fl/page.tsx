import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Movers in Downtown Orlando, FL | Apartment & Home Moving | UMOVEX",
  description:
    "Need movers in Downtown Orlando, FL? UMOVEX provides local apartment, home, and office moving services with packing, loading, and unloading. Fast quotes and no hidden fees.",
  alternates: {
    canonical: "https://umovex.com/movers-downtown-orlando-fl",
  },
  openGraph: {
    title: "Movers in Downtown Orlando, FL | UMOVEX",
    description:
      "Trusted local movers in Downtown Orlando, FL for apartments, homes, and office moves.",
    url: "https://umovex.com/movers-downtown-orlando-fl",
    siteName: "UMOVEX",
    type: "website",
  },
};

export default function MoversDowntownOrlandoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://umovex.com/movers-downtown-orlando-fl#service",
    name: "Movers in Downtown Orlando, FL",
    serviceType: "Local Moving Services",
    areaServed: {
      "@type": "Place",
      name: "Downtown Orlando",
    },
    provider: {
      "@type": "MovingCompany",
      name: "UMOVEX",
      url: "https://umovex.com",
      telephone: "+14076396520",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    description:
      "Local movers serving Downtown Orlando, FL with apartment, home, and office moving services including packing, loading, and unloading.",
    url: "https://umovex.com/movers-downtown-orlando-fl",
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader dark />

      <Script id="schema-downtown-orlando-service" type="application/ld+json">
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
              Downtown Orlando • Local Moving Services
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Movers in Downtown Orlando, FL
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              UMOVEX provides dependable local moving services in Downtown
              Orlando for apartments, homes, and offices. If you need movers who
              understand city buildings, loading zones, elevators, traffic, and
              tighter access points, our team is ready to help.
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
                Local movers for Downtown Orlando
              </h2>

              <p className="mb-5 text-base leading-relaxed text-slate-700">
                Moving in Downtown Orlando is different from moving in a suburban
                neighborhood. Many customers are relocating in and out of apartment
                buildings, condos, and high-rise units where timing, building access,
                parking, elevators, and loading areas all matter. Our movers help
                make the process more organized and less stressful.
              </p>

              <p className="mb-5 text-base leading-relaxed text-slate-700">
                UMOVEX helps with apartment moves, home moves, office relocation,
                packing, loading, unloading, and general local moving support in
                Downtown Orlando. Whether you are moving into a condo near the
                city center or relocating from a home nearby, our team focuses on
                careful handling, reliable service, and clear communication.
              </p>

              <p className="text-base leading-relaxed text-slate-700">
                We are focused on local moving only. That means our service is
                built around fast response times, flexible scheduling, and practical
                help for customers moving within Orlando and nearby areas.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 className="mb-5 text-2xl font-bold text-slate-900">
                What we help with in Downtown Orlando
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Apartment and condo moves
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    We help with apartment and condo moves where elevators, hallways,
                    parking limits, and building access need extra planning.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Residential moving
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    From smaller homes to larger residential moves, we focus on
                    careful loading, transport, and unloading.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Office relocation
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    If your business is relocating within Downtown Orlando, we can
                    also help with local office moving.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    Packing and moving support
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Need extra help before move day? We also provide packing,
                    loading, and unloading support.
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
                    Do you provide movers near Downtown Orlando?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Yes. UMOVEX provides local moving services in Downtown Orlando
                    and nearby Orlando areas for apartments, homes, and offices.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Do you help with apartment moves in downtown buildings?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Yes. Apartment and condo moving is one of our main services,
                    including help with elevators, loading areas, and tighter access points.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Do you offer packing services in Downtown Orlando?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Yes. We can help with packing, unpacking, loading, and other
                    local moving support depending on your needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Do you also move offices?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Yes. While apartment and home moves are our main focus, we also
                    handle local office moves in Downtown Orlando.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg sm:p-8">
              <h2 className="mb-4 text-2xl font-bold">
                Need movers in Downtown Orlando?
              </h2>
              <p className="mb-6 text-white/80">
                Contact UMOVEX for a fast quote and reliable local moving help
                in Downtown Orlando, FL.
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
                <Link
                  href="/movers-winter-park-fl"
                  className="rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Movers in Winter Park
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
