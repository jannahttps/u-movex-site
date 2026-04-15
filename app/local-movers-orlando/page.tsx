import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Local Movers Orlando, FL | UMOVEX Moving Company',
  description:
    'Looking for local movers in Orlando, FL? UMOVEX provides reliable residential, apartment, and office moving services with packing, loading, and careful handling.',
  alternates: {
    canonical: '/local-movers-orlando',
  },
};

const serviceHighlights = [
  'Apartment and house moves',
  'Office and small business relocation',
  'Packing and unpacking services',
  'Loading and unloading help',
  'Careful furniture protection',
  'Fast quotes and flexible scheduling',
];

const serviceAreas = [
  'Orlando',
  'Winter Park',
  'Kissimmee',
  'Altamonte Springs',
  'Lake Nona',
  'Oviedo',
  'Apopka',
  'Central Florida',
];

const reasons = [
  {
    title: 'Clear communication',
    text: 'We keep the moving process simple with fast quotes, scheduling support, and responsive communication.',
  },
  {
    title: 'Careful handling',
    text: 'Furniture, boxes, and fragile items are moved with attention, padding, and practical protection.',
  },
  {
    title: 'Reliable service',
    text: 'We focus on showing up on time, working efficiently, and helping your move feel organized from start to finish.',
  },
];

export default function LocalMoversOrlandoPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SiteHeader dark />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-blue-600 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 backdrop-blur-sm sm:text-sm">
                UMOVEX Local Moving
              </p>

              <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Local Movers in Orlando, FL You Can Trust
              </h1>

              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
                Looking for reliable local movers in Orlando? UMOVEX helps with
                apartment moves, home relocations, office moving, packing,
                loading, and unloading across Orlando and Central Florida.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                  Local moving specialists
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                  5-star client reviews
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                  Fast estimates
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+14076396520"
                  className="rounded-xl bg-blue-500 px-6 py-4 text-center font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-600"
                >
                  Call for a Free Quote
                </a>

                <Link
                  href="/#quote"
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  Get a Moving Estimate
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>

              <h2 className="mb-4 text-2xl font-bold text-white">
                Orlando Moving Help for Real Life
              </h2>

              <p className="mb-6 leading-relaxed text-white/80">
                Whether you are moving from an apartment, condo, townhouse, or
                home, our team helps make local moving feel easier, clearer, and
                less stressful.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {serviceHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Local Moving Services
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Professional Local Moving Services in Orlando
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              From apartment moving to home and office relocation, UMOVEX
              provides reliable local moving services with careful handling,
              organized support, and flexible scheduling.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-3">
            <article className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Apartment Moves
              </h3>
              <p className="leading-relaxed text-gray-600">
                We help with apartment moving in Orlando, including stairs,
                elevators, tighter layouts, and efficient loading for smaller
                spaces.
              </p>
            </article>

            <article className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <span className="text-xl">🏠</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Home Relocation
              </h3>
              <p className="leading-relaxed text-gray-600">
                From one-bedroom homes to larger family moves, we handle
                furniture, boxes, and fragile items with attention and care.
              </p>
            </article>

            <article className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <span className="text-xl">💼</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Office Moving
              </h3>
              <p className="leading-relaxed text-gray-600">
                We support small office and business moves with organized
                transport, loading help, and efficient scheduling.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why Choose UMOVEX
              </p>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Orlando Clients Choose Our Local Movers
              </h2>

              <div className="space-y-5">
                {reasons.map((reason) => (
                  <div
                    key={reason.title}
                    className="rounded-2xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {reason.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {reason.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Areas We Serve
              </p>
              <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
                Orlando and Central Florida
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                <div className="mb-2 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                  <span className="text-sm font-medium text-white/80">
                    Trusted local service
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold">
                  Need a local moving quote?
                </h3>
                <p className="mb-4 leading-relaxed text-white/75">
                  Call us or request an estimate online to get started with your
                  Orlando move.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+14076396520"
                    className="rounded-xl bg-blue-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
                  >
                    +1 (407) 639-6520
                  </a>
                  <Link
                    href="/#quote"
                    className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/15"
                  >
                    Request Estimate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
