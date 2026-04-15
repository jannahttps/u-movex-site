'use client';

import Link from 'next/link';
import ContactForm from './ContactForm';
import VideoCarousel from './VideoCarousel';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-24 sm:pt-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url("/preview.jpg")`,
      }}
    >
      <div className="flex min-h-[calc(100vh-96px)] items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-3">

            {/* LEFT */}
            <div className="order-1 text-center lg:col-span-1 lg:text-left">
              
              <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                Licensed • Reliable • Orlando, FL
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl">
                Movers in Orlando, FL
                <br />
                <span className="text-blue-400">You Can Trust</span>
              </h1>

              <p className="mb-6 text-base leading-relaxed text-white/90 sm:mb-8 sm:text-xl">
                Reliable local movers in Orlando for apartments, homes, and offices.
                UMOVEX offers packing, loading, unloading, and full-service local
                moving designed to make your relocation easier.
              </p>

              {/* 🔥 КЛИКАБЕЛЬНЫЕ БЛОКИ */}
              <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-xl">

                <Link
                  href="/local-movers-orlando"
                  className="group rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-left text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-black/45 hover:shadow-lg"
                >
                  <div className="mb-1 text-sm font-semibold">
                    Local moving services
                  </div>
                  <div className="text-xs text-white/70 group-hover:text-white/90">
                    Orlando Local Movers
                  </div>
                </Link>

                <Link
                  href="/office-movers-orlando"
                  className="group rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-left text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-black/45 hover:shadow-lg"
                >
                  <div className="mb-1 text-sm font-semibold">
                    Office moving
                  </div>
                  <div className="text-xs text-white/70 group-hover:text-white/90">
                    Business & workspace moves
                  </div>
                </Link>

                <Link
                  href="/packing-services-orlando"
                  className="group rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-left text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-black/45 hover:shadow-lg"
                >
                  <div className="mb-1 text-sm font-semibold">
                    Packing & unpacking
                  </div>
                  <div className="text-xs text-white/70 group-hover:text-white/90">
                    Boxes & protection included
                  </div>
                </Link>

                <Link
                  href="/apartment-movers-orlando"
                  className="group rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-left text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-black/45 hover:shadow-lg"
                >
                  <div className="mb-1 text-sm font-semibold">
                    Apartment moving
                  </div>
                  <div className="text-xs text-white/70 group-hover:text-white/90">
                    Stairs, elevators & tight spaces
                  </div>
                </Link>

              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <a
                  href="tel:+14076396520"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Call for a Free Quote
                </a>

                <a
                  href="#quote"
                  className="rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Get My Estimate
                </a>
              </div>
            </div>

            {/* CENTER */}
            <div className="order-3 flex justify-center lg:order-2 lg:col-span-1">
              <VideoCarousel />
            </div>

            {/* RIGHT */}
            <div className="order-2 flex justify-center lg:order-3 lg:col-span-1">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
