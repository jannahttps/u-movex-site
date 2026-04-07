'use client';

import ContactForm from './ContactForm';
import VideoCarousel from './VideoCarousel';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-24 sm:pt-28"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url("https://readdy.ai/api/search-image?query=Professional moving truck parked in front of modern Florida home with palm trees, bright blue sky, clean suburban neighborhood, professional moving service atmosphere, high quality photography style&width=1600&height=900&seq=hero-bg&orientation=landscape")`,
      }}
    >
      <div className="flex min-h-[calc(100vh-96px)] items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-3">
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
                Reliable local and long-distance movers in Orlando for apartments,
                homes, and offices. U-MOVEX offers packing, loading, unloading,
                and full-service moving designed to make your relocation easier.
              </p>

              <div className="mb-6 grid gap-3 text-left text-sm text-white/90 sm:grid-cols-2 sm:text-base lg:max-w-xl">
                <div className="rounded-xl bg-black/25 px-4 py-3 backdrop-blur-sm">
                  Local & long-distance moves
                </div>
                <div className="rounded-xl bg-black/25 px-4 py-3 backdrop-blur-sm">
                  Residential & office moving
                </div>
                <div className="rounded-xl bg-black/25 px-4 py-3 backdrop-blur-sm">
                  Packing & unpacking help
                </div>
                <div className="rounded-xl bg-black/25 px-4 py-3 backdrop-blur-sm">
                  Careful movers & fast quotes
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <a
                  href="tel:+14076396520"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Call for a Free Quote
                </a>
                <a
                  href="#quote"
                  className="rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Get My Estimate
                </a>
              </div>
            </div>

            <div className="order-3 flex justify-center lg:order-2 lg:col-span-1">
              <VideoCarousel />
            </div>

            <div className="order-2 flex justify-center lg:order-3 lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
