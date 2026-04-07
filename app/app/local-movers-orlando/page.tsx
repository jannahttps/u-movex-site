import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local Movers Orlando, FL | U-MOVEX Moving Company",
  description:
    "Looking for local movers in Orlando, FL? U-MOVEX provides reliable residential, apartment, and office moving services with packing, loading, and careful handling.",
  alternates: {
    canonical: "/local-movers-orlando",
  },
};

const serviceHighlights = [
  "Local apartment and house moves",
  "Office and small business relocation",
  "Packing and unpacking services",
  "Loading and unloading help",
  "Careful furniture protection",
  "Fast quotes and flexible scheduling",
];

const serviceAreas = [
  "Orlando",
  "Winter Park",
  "Kissimmee",
  "Altamonte Springs",
  "Lake Nona",
  "Oviedo",
  "Apopka",
  "Central Florida",
];

export default function LocalMoversOrlandoPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                U-MOVEX Local Moving
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Local Movers in Orlando, FL You Can Trust
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Looking for reliable local movers in Orlando? U-MOVEX helps with
                apartment moves, home relocations, office moving, packing,
                loading, and unloading across Orlando and Central Florida.
              </p>

              <p className="mb-8 text-base leading-relaxed text-gray-600">
                Our team focuses on careful handling, clear communication, and
                straightforward service so your move feels organized instead of
                overwhelming.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+14076396520"
                  className="rounded-xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Call for a Free Quote
                </a>

                <Link
                  href="/#quote"
                  className="rounded-xl border border-gray-300 px-6 py-4 text-center font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  Get a Moving Estimate
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6 shadow-sm sm:p-8">
              <h2 className="mb-5 text-2xl font-bold text-gray-900">
                What We Help With
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {serviceHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm"
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
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Local Moving Services
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Professional Local Moving Services in Orlando
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Whether you are moving from an apartment, condo, townhouse, or
              family home, our local moving team helps make the process easier
              with careful planning and dependable support.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Apartment Moves
              </h3>
              <p className="leading-relaxed text-gray-600">
                We help with apartment moving in Orlando, including stairs,
                elevators, tight hallways, and careful loading for smaller
                spaces.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Home Relocation
              </h3>
              <p className="leading-relaxed text-gray-600">
                From one-bedroom homes to larger family moves, we handle
                furniture, boxes, and fragile items with attention and care.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose U-MOVEX
            </p>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Orlando Clients Choose Our Local Movers
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We know that even a local move can feel stressful when you are
                dealing with timing, packing, furniture, and building access.
                That is why we focus on being responsive, careful, and clear
                from the start.
              </p>
              <p>
                Our goal is simple: show up on time, protect your belongings,
                communicate clearly, and help your move go as smoothly as
                possible.
              </p>
              <p>
                If you are comparing local movers in Orlando, U-MOVEX offers the
                kind of hands-on service clients appreciate during real moves,
                not just marketing promises.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="mb-5 text-2xl font-bold text-gray-900">
              Areas We Serve
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-gray-700"
                >
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                Need a local moving quote?
              </h4>
              <p className="mb-4 leading-relaxed text-gray-600">
                Call us or request an estimate online to get started with your
                Orlando move.
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
        </div>
      </section>
    </main>
  );
}
