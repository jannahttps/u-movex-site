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

  const baseText = dark || scrolled ? 'text-gray-900' : 'text-white';
  const subText = dark || scrolled ? 'text-gray-600' : 'text-white/80';
  const shell =
    dark || scrolled
      ? 'border-b border-gray-200 bg-white/92 shadow-sm backdrop-blur-xl'
      : 'bg-transparent';

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${shell}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Go to U-MOVEX homepage"
            onClick={() => setOpen(false)}
          >
            <img
              src="/videos/logo.png"
              alt="U-MOVEX logo"
              className="h-11 w-11 rounded-lg object-contain sm:h-12 sm:w-12"
            />
            <div className="leading-tight">
              <div className={`text-lg font-bold tracking-wide sm:text-xl ${baseText}`}>
                U-MOVEX
              </div>
              <div className={`text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs ${subText}`}>
                Orlando Movers
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/#quote" className={`text-sm font-semibold transition hover:text-blue-500 ${baseText}`}>
              Free Quote
            </Link>
            <Link href="/#services" className={`text-sm font-semibold transition hover:text-blue-500 ${baseText}`}>
              Services
            </Link>
            <Link href="/#why-choose-us" className={`text-sm font-semibold transition hover:text-blue-500 ${baseText}`}>
              Why Us
            </Link>
            <Link href="/#reviews" className={`text-sm font-semibold transition hover:text-blue-500 ${baseText}`}>
              Reviews
            </Link>
            <Link
              href="/local-movers-orlando"
              className={`text-sm font-semibold transition hover:text-blue-500 ${baseText}`}
            >
              Local Movers
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+14076396520"
              className={`text-sm font-semibold transition hover:text-blue-500 ${baseText}`}
            >
              +1 (407) 639-6520
            </a>
            <Link
              href="/#quote"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Estimate
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition lg:hidden ${
              dark || scrolled
                ? 'border-gray-200 bg-white text-gray-900'
                : 'border-white/20 bg-white/10 text-white backdrop-blur-sm'
            }`}
          >
            <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl`} aria-hidden="true"></i>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-sm transition duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
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
            <img
              src="/videos/logo.png"
              alt="U-MOVEX logo"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-wide text-gray-900">U-MOVEX</div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                Orlando Movers
              </div>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-900"
          >
            <i className="ri-close-line text-2xl" aria-hidden="true"></i>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            href="/#quote"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Free Quote
          </Link>
          <Link
            href="/#services"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            href="/#why-choose-us"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Why Us
          </Link>
          <Link
            href="/#reviews"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Reviews
          </Link>
          <Link
            href="/local-movers-orlando"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Local Movers
          </Link>
        </nav>

        <div className="mt-8 space-y-3">
          <a
            href="tel:+14076396520"
            className="flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            +1 (407) 639-6520
          </a>

          <Link
            href="/#quote"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
          >
            Get Estimate
          </Link>
        </div>
      </aside>
    </>
  );
}
