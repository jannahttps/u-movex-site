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
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  const headerShell = isSolid
    ? 'bg-white/95 border-b border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl'
    : 'bg-transparent';

  const navText = isSolid ? 'text-slate-700' : 'text-white';
  const logoText = isSolid ? 'text-slate-950' : 'text-white';
  const logoSub = isSolid ? 'text-slate-500' : 'text-white/70';
  const burgerStyle = isSolid
    ? 'border-slate-200 bg-white text-slate-900'
    : 'border-white/20 bg-white/10 text-white backdrop-blur-md';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerShell}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="min-w-0 flex items-center"
            aria-label="Go to homepage"
            onClick={() => setOpen(false)}
          >
            <div className="leading-none">
              <div
                className={`text-[1.55rem] font-black tracking-[0.08em] sm:text-[1.8rem] lg:text-[2rem] ${logoText}`}
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                U-MOVEX
              </div>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-[2px] w-6 rounded-full bg-blue-500 sm:w-8"></span>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.32em] sm:text-[11px] ${logoSub}`}
                >
                  Orlando Movers
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
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
              aria-label="Call U-MOVEX at +1 (407) 639-6520"
              className={`hidden lg:flex items-center rounded-2xl px-4 py-2.5 text-base font-bold tracking-[0.01em] transition hover:text-blue-600 ${
                isSolid ? 'text-slate-900' : 'text-white'
              }`}
            >
              +1 (407) 639-6520
            </a>

            <Link
              href="/#quote"
              className="hidden lg:inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
            >
              Get Estimate
            </Link>

            <a
              href="tel:+14076396520"
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.28)] transition hover:bg-blue-700 lg:hidden"
            >
              <i className="ri-phone-fill mr-2 text-base" aria-hidden="true"></i>
              Call
            </a>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition lg:hidden ${burgerStyle}`}
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
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <div className="leading-none">
              <div
                className="text-[1.45rem] font-black tracking-[0.08em] text-slate-950"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                U-MOVEX
              </div>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-[2px] w-6 rounded-full bg-blue-500"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Orlando Movers
                </span>
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
            className="flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-[0_10px_26px_rgba(37,99,235,0.28)] transition hover:bg-blue-700"
          >
            <i className="ri-phone-fill mr-2 text-base" aria-hidden="true"></i>
            Call +1 (407) 639-6520
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

      <div className="fixed inset-x-0 bottom-3 z-40 px-4 lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-white/40 bg-white/95 p-2 shadow-[0_14px_34px_rgba(15,23,42,0.16)] backdrop-blur-xl">
          <a
            href="tel:+14076396520"
            className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <i className="ri-phone-fill mr-2 text-base" aria-hidden="true"></i>
            Call Now
          </a>

          <Link
            href="/#quote"
            className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Get Estimate
          </Link>
        </div>
      </div>
    </>
  );
}
