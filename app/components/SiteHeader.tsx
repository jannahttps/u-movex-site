'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isSolid = scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="U-MOVEX Orlando Movers"
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/#services" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/#reviews" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
              Reviews
            </Link>
            <Link href="/local-movers-orlando" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
              Local
            </Link>
            <Link href="/apartment-movers-orlando" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
              Apartment
            </Link>
            <Link href="/office-movers-orlando" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
              Office
            </Link>
            <Link href="/packing-services-orlando" className="text-sm font-semibold text-gray-700 hover:text-blue-600">
              Packing
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* 🔥 PHONE (MAIN MONEY BUTTON) */}
            <a
              href="tel:+14076396520"
              className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl text-lg font-bold shadow-md hover:bg-blue-700 transition"
            >
              <i className="ri-phone-fill text-lg"></i>
              (407) 639-6520
            </a>

            {/* CTA */}
            <Link
              href="/#quote"
              className="hidden lg:flex items-center px-4 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold hover:bg-gray-50"
            >
              Get Estimate
            </Link>

            {/* MOBILE CALL */}
            <a
              href="tel:+14076396520"
              className="lg:hidden bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2"
            >
              <i className="ri-phone-fill"></i>
              Call
            </a>

            {/* BURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 rounded-xl border flex items-center justify-center"
            >
              <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)} />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-xl transform transition ${
          open ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="p-6 space-y-4">

          <Link href="/" onClick={() => setOpen(false)}>
            <img src="/logo.png" className="h-12 mb-6" />
          </Link>

          <Link href="/#services" onClick={() => setOpen(false)} className="block font-semibold">
            Services
          </Link>
          <Link href="/#reviews" onClick={() => setOpen(false)} className="block font-semibold">
            Reviews
          </Link>
          <Link href="/local-movers-orlando" onClick={() => setOpen(false)} className="block font-semibold">
            Local Movers
          </Link>
          <Link href="/apartment-movers-orlando" onClick={() => setOpen(false)} className="block font-semibold">
            Apartment Movers
          </Link>
          <Link href="/office-movers-orlando" onClick={() => setOpen(false)} className="block font-semibold">
            Office Movers
          </Link>
          <Link href="/packing-services-orlando" onClick={() => setOpen(false)} className="block font-semibold">
            Packing
          </Link>

          {/* BIG MOBILE CTA */}
          <a
            href="tel:+14076396520"
            className="block mt-6 bg-blue-600 text-white text-center py-3 rounded-xl font-bold"
          >
            Call (407) 639-6520
          </a>
        </div>
      </div>

      {/* MOBILE STICKY BAR */}
      <div className="fixed bottom-3 left-4 right-4 lg:hidden z-40">
        <div className="flex gap-3 bg-white shadow-lg rounded-xl p-2">
          <a
            href="tel:+14076396520"
            className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold"
          >
            Call Now
          </a>
          <Link
            href="/#quote"
            className="flex-1 border text-center py-3 rounded-lg font-semibold"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
