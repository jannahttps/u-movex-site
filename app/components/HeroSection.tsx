'use client';

import ContactForm from './ContactForm';
import VideoCarousel from './VideoCarousel';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url("https://readdy.ai/api/search-image?query=Professional moving truck parked in front of modern Florida home with palm trees, bright blue sky, clean suburban neighborhood, professional moving service atmosphere, high quality photography style&width=1600&height=900&seq=hero-bg&orientation=landscape")`,
      }}
    >
      <header className="relative z-10 flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-8 sm:gap-0">
        <div className="flex items-center gap-3 rounded-xl bg-black/30 px-4 py-3 backdrop-blur-sm ring-1 ring-white/20">
          <img
            src="/videos/logo.png"
            alt="U-MOVEX logo"
            className="h-12 w-12 object-contain sm:h-16 sm:w-16"
          />
          <div className="flex flex-col leading-tight">
            <div className="text-xl font-bold tracking-wide text-white sm:text-3xl">
              U-MOVEX
            </div>
            <div className="text-xs font-semibold tracking-[0.18em] text-gray-200 sm:text-sm">
              ORLANDO MOVERS
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <div className="flex flex-col text-center text-lg font-bold text-white sm:flex-row sm:items-center sm:text-2xl">
            <a href="tel:+14076396520" className="hover:underline">
              +1 (407) 639-6520
            </a>
            <span className="mx-3 hidden sm:inline">|</span>
            <a
              href="mailto:umovexfl@gmail.com"
              className="mt-1 text-base font-semibold hover:underline sm:mt-0 sm:text-2xl"
            >
              umovexfl@gmail.com
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://wa.me/14076396520"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 transition-colors hover:bg-green-600 sm:h-10 sm:w-10"
              aria-label="Chat with U-MOVEX on WhatsApp"
              title="WhatsApp"
            >
              <i className="ri-whatsapp-line text-lg text-white sm:text-xl"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576221543424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 transition-colors hover:bg-blue-600 sm:h-10 sm:w-10"
              aria-label="Message U-MOVEX on Facebook"
              title="Facebook Messenger"
            >
              <i className="ri-messenger-line text-lg text-white sm:text-xl"></i>
            </a>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center px-4 sm:px-8">
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
                  className="rounded-lg bg-blue-600 px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Call for a Free Quote
                </a>
                <a
                  href="#quote"
                  className="rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-center text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:px-8 sm:py-4 sm:text-lg"
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
