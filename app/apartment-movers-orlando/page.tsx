import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Apartment Movers Orlando, FL | UMOVEX Moving Company',
  description:
    'Need apartment movers in Orlando, FL? UMOVEX helps with apartment moving, stairs, elevators, packing, loading, and careful transportation across Orlando and Central Florida.',
  alternates: {
    canonical: '/apartment-movers-orlando',
  },
};

const apartmentHighlights = [
  'Apartment moving in Orlando',
  'Stairs and elevator moves',
  'Packing and unpacking help',
  'Furniture protection and wrapping',
  'Loading and unloading service',
  'Fast quotes and flexible scheduling',
];

const apartmentChallenges = [
  {
    title: 'Stairs and elevators',
    text: 'Apartment moves often involve narrow hallways, stairs, and elevator scheduling. We plan around those details to make the move smoother.',
  },
  {
    title: 'Tight spaces',
    text: 'From smaller entryways to compact rooms, we handle furniture and boxes carefully in tighter apartment layouts.',
  },
  {
    title: 'Move-in timing',
    text: 'We help clients stay organized when there are building rules, move-in windows, parking limits, or time restrictions.',
  },
];

const serviceAreas = [
  'Orlando',
  'Winter Park',
  'Kissimmee',
  'Lake Nona',
  'Altamonte Springs',
  'Oviedo',
  'Apopka',
  'Central Florida',
];

export default function ApartmentMoversOrlandoPage() {
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
                UMOVEX Apartment Moving
              </p>

              <h1 className="mb-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Apartment Movers in Orlando, FL You Can Trust
              </h1>

              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
                Looking for reliable apartment movers in Orlando? UMOVEX helps
                with apartment moving, packing, loading, unloading, and careful
                transportation for renters, families, and busy professionals.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                  Apartment moving specialists
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
                Apartment Moves Come With Extra Details
              </h2>

              <p className="mb-6 leading-relaxed text-white/80">
                Stairs, elevators, tighter hallways, building access, and move-in
                windows can make apartment moving more stressful. We help keep it
                organized and manageable.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {apartmentHighlights.map((item) => (
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
              Apartment Moving Services
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Professional Apartment Moving Services in Orlando
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Whether you are moving from a studio, one-bedroom apartment, or a
              larger rental unit, UMOVEX provides careful apartment moving
              services designed to reduce stress and protect your belongings.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-3">
            {apartmentChallenges.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <span className="text-xl">
                    {index === 0 ? '🏢' : index === 1 ? '📦' : '🕒'}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose UMOVEX
            </p>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Clients Choose Our Apartment Movers in Orlando
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Apartment moving is different from a regular move because access,
                timing, and space are usually more limited. That is why planning
                matters.
              </p>
              <p>
                Our team helps with the details that can slow apartment moves
                down, including stairs, elevators, parking, tighter corners, and
                careful furniture handling.
              </p>
              <p>
                If you are comparing apartment movers in Orlando, UMOVEX offers
                practical, organized help that makes moving day easier.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Need apartment moving help?
              </h3>
              <p className="mb-4 leading-relaxed text-gray-600">
                Call us or request an estimate online to get started with your
                Orlando apartment move.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+14076396520"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  +1 (407) 639-6520
                </a>
                <Link
                  href="/#quote"
                  className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  Request Estimate
                </Link>
              </div>
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
                  Trusted apartment movers
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold">
                Looking for a stress-free apartment move?
              </h3>
              <p className="mb-4 leading-relaxed text-white/75">
                We help with packing, loading, transportation, and careful moving
                support across Orlando.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+14076396520"
                  className="rounded-xl bg-blue-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
                >
                  Call Now
                </a>
                <Link
                  href="/local-movers-orlando"
                  className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/15"
                >
                  View Local Movers Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
