'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ContactForm from './ContactForm';

const VideoCarousel = dynamic(() => import('./VideoCarousel'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] w-full max-w-[360px] items-center justify-center rounded-3xl border border-white/15 bg-white/10 text-white/70 backdrop-blur-sm sm:h-[480px]">
      Loading...
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 sm:pt-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/preview.webp"
          alt="U-MOVEX moving truck in Orlando"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative flex min-h-[calc(100vh-96px)] items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-3">
            {/* LEFT */}
            <div className="order-1 text-center lg:col-span-1 lg:text-left">
              <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                Licensed • Reliable • Orlando, FL
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:mb-6 sm:text-5xl lg:text-[56px]">
                Orlando Movers
                <br />
                <span className="text-blue-400">You Can Trust</span>
              </h1>

              <p className="mb-6 max-w-2xl text-base leading-relaxed text-white/90 sm:mb-8 sm:text-xl">
                Trusted local movers in Orlando for apartments, homes, and residential
                moves. U-MOVEX also provides office moving, packing, loading, and
                unloading services designed to make your move simple and stress-free.
              </p>

              <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-xl">
                <Link
                  href="/local-movers-orlando"
                  className="group rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-left text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-black/45 hover:shadow-lg"
                >
                  <div className="mb-1 text-sm font-semibold">
                    Local moving services
                  </div>
                  <div className="text-xs text-white/70 group-hover:text-white/90">
                    Orlando local movers
                  </div>
                </Link>

                <Link
                  href="/office-movers-orlando"
                  className="group rounded-2xl border border-white/15 bg-black/30 px-4 py-4 text-left text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-black/45 hover:shadow-lg"
                >
                  <div className="mb-1 text-sm font-semibold">Office moving</div>
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