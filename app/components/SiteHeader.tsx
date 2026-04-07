'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type SiteHeaderProps = {
  dark?: boolean;
};

export default function SiteHeader({ dark = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isSolid = dark || scrolled;

  const shell = isSolid
    ? 'border-b border-slate-200/80 bg-white/92 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl'
    : 'bg-transparent';

  const brandText = isSolid ? 'text-slate-900' : 'text-white';
  const brandSubtext = isSolid ? 'text-slate-500' : 'text-white/75';
  const navText = isSolid ? 'text-slate-700' : 'text-white';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${shell}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="min-w-0 flex items-center gap-3"
            aria-label="Go to U-MOVEX homepage"
            onClick={() => setOpen(false)}
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-lg backdrop-blur-md sm:h-14 sm:w-14">
              <img
                src="/videos/logo.png"
                alt="U-MOVEX logo"
                className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              />
            </div>

            <div className="min-w-0 leading-tight">
              <div
                className={`truncate text-lg font-bold tracking-[0.08em] sm:text-xl ${brandText}`}
              >
                U-MOVEX
              </div>
              <div
                className={`truncate text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-[11px] ${brandSubtext}`}
              >
                Orlando Movers
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
            <Link
              href="/#quote"
              className={`text-sm font-semibold transition hover:text-blue-600 ${navText}`}
            >
              Free Quote
            </Link>

            <Link
              href="/#services"
              className={`text-sm font-semibold transition hover:text-blue-600 ${navText}`}
            >
              Services
            </Link>

            <Link
              href="/#reviews"
              className={`text-sm font-semibold transition hover:text-blue-600 ${navText}`}
            >
              Reviews
            </Link>

            <Link
              href="/local-movers-orlando"
              className={`text-sm font-semibold transition hover:text-blue-600 ${navText}`}
            >
              Local
            </Link>

            <Link
              href="/apartment-movers-orlando"
              className={`text-sm font-semibold transition hover:text-blue-600 ${navText}`}
            >
              Apartment
            </Link>

            <Link
              href="/office-movers-orlando"
              className={`text-sm font-semibold transition hover:text-blue-600 ${navText}`}
            >
              Office
            </Link>

            <Link
              href="/packing-services-orlando"
              className={`text-sm font-semibold transition hover:text-blue-600 ${navText}`}
            >
              Packing
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+14076396520"
              aria-label="Call U-MOVEX now"
              className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-500 px-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(37,99,235,0.42)] sm:h-12 sm:px-5"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100"></span>
              <i className="ri-phone-fill mr-2 text-base" aria-hidden="true"></i>
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </a>

            <Link
              href="/#quote"
              className="hidden h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 lg:inline-flex"
            >
              Get Estimate
            </Link>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm transition lg:hidden ${
                isSolid
                  ? 'border-slate-200 bg-white text-slate-900'
                  : 'border-white/20 bg-white/10 text-white backdrop-blur-md'
              }`}
            >
              <i
                className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm transition duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm border-l border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/videos/logo.png"
                alt="U-MOVEX logo"
                className="h-9 w-9 object-contain"
              />
            </div>

            <div className="leading-tight">
              <div className="text-lg font-bold tracking-[0.08em] text-slate-900">
                U-MOVEX
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Orlando Movers
              </div>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-900"
          >
            <i className="ri-close-line text-2xl" aria-hidden="true"></i>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            href="/#quote"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Free Quote
          </Link>

          <Link
            href="/#services"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Services
          </Link>

          <Link
            href="/#reviews"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Reviews
          </Link>

          <div className="mt-3 px-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Service Pages
          </div>

          <Link
            href="/local-movers-orlando"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Local Movers
          </Link>

          <Link
            href="/apartment-movers-orlando"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Apartment Movers
          </Link>

          <Link
            href="/office-movers-orlando"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Office Movers
          </Link>

          <Link
            href="/packing-services-orlando"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Packing Services
          </Link>
        </nav>

        <div className="mt-8 space-y-3">
          <a
            href="tel:+14076396520"
            className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 text-base font-semibold text-white shadow-[0_10px_26px_rgba(37,99,235,0.28)] transition hover:from-blue-700 hover:to-blue-600"
          >
            <i className="ri-phone-fill mr-2 text-base" aria-hidden="true"></i>
            Call Now
          </a>

          <Link
            href="/#quote"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Get Estimate
          </Link>
        </div>
      </aside>
    </>
  );
}