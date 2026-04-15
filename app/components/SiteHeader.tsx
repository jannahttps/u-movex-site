'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

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

  const headerClasses = isSolid
    ? 'bg-white/94 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
    : 'bg-transparent';

  const navTextClasses = isSolid
    ? 'text-slate-700 hover:text-blue-600'
    : 'text-white/95 hover:text-white';

  const desktopPhoneClasses = isSolid
    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_10px_24px_rgba(37,99,235,0.28)]'
    : 'bg-white text-slate-900 hover:bg-slate-100 shadow-[0_10px_24px_rgba(0,0,0,0.14)]';

  const estimateClasses = isSolid
    ? 'border-slate-300 text-slate-800 hover:bg-slate-50'
    : 'border-white/30 text-white hover:bg-white/10';

  const burgerClasses = isSolid
    ? 'border-slate-300 text-slate-900 bg-white'
    : 'border-white/20 text-white bg-white/10 backdrop-blur-sm';

  const logoClasses = isSolid
    ? 'opacity-100'
    : 'opacity-95 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3 lg:py-3.5">
          <Link
            href="/"
            className="flex items-center min-w-0 shrink-0"
            aria-label="UMOVEX home"
          >
            <img
              src="/logo.webp"
              alt="UMOVEX Orlando Movers"
              className={`w-auto object-contain shrink-0 transition-all duration-300 h-12 sm:h-14 md:h-16 lg:h-[72px] xl:h-[78px] max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[390px] xl:max-w-[430px] ${logoClasses}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 min-w-0">
            <Link href="/#services" className={`text-sm font-semibold transition whitespace-nowrap ${navTextClasses}`}>
              Services
            </Link>
            <Link href="/#reviews" className={`text-sm font-semibold transition whitespace-nowrap ${navTextClasses}`}>
              Reviews
            </Link>
            <Link href="/local-movers-orlando" className={`text-sm font-semibold transition whitespace-nowrap ${navTextClasses}`}>
              Local
            </Link>
            <Link href="/apartment-movers-orlando" className={`text-sm font-semibold transition whitespace-nowrap ${navTextClasses}`}>
              Apartment
            </Link>
            <Link href="/office-movers-orlando" className={`text-sm font-semibold transition whitespace-nowrap ${navTextClasses}`}>
              Office
            </Link>
            <Link href="/packing-services-orlando" className={`text-sm font-semibold transition whitespace-nowrap ${navTextClasses}`}>
              Packing
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:+14076396520"
              className={`hidden lg:flex items-center gap-2.5 px-4 xl:px-5 py-2.5 rounded-2xl text-base xl:text-lg font-bold transition whitespace-nowrap ${desktopPhoneClasses}`}
              aria-label="Call UMOVEX at +1 (407) 639-6520"
            >
              <Phone className="w-5 h-5" />
              +1 (407) 639-6520
            </a>

            <Link
              href="/#quote"
              className={`hidden lg:flex items-center px-4 py-2.5 rounded-2xl border text-sm font-semibold transition whitespace-nowrap ${estimateClasses}`}
            >
              Get Estimate
            </Link>

            <a
              href="tel:+14076396520"
              className="lg:hidden bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-[0_10px_24px_rgba(37,99,235,0.28)] hover:bg-blue-700 transition"
              aria-label="Call UMOVEX now"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={`lg:hidden w-11 h-11 rounded-xl border flex items-center justify-center transition ${burgerClasses}`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/45 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-80 max-w-[88vw] bg-white z-50 shadow-2xl transform transition duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            <img
              src="/logo.png"
              alt="UMOVEX Orlando Movers"
              className="h-14 w-auto max-w-[270px] object-contain mb-6"
            />
          </Link>

          <Link href="/#services" onClick={() => setOpen(false)} className="block font-semibold text-slate-900">
            Services
          </Link>
          <Link href="/#reviews" onClick={() => setOpen(false)} className="block font-semibold text-slate-900">
            Reviews
          </Link>
          <Link href="/local-movers-orlando" onClick={() => setOpen(false)} className="block font-semibold text-slate-900">
            Local Movers
          </Link>
          <Link href="/apartment-movers-orlando" onClick={() => setOpen(false)} className="block font-semibold text-slate-900">
            Apartment Movers
          </Link>
          <Link href="/office-movers-orlando" onClick={() => setOpen(false)} className="block font-semibold text-slate-900">
            Office Movers
          </Link>
          <Link href="/packing-services-orlando" onClick={() => setOpen(false)} className="block font-semibold text-slate-900">
            Packing
          </Link>

          <a
            href="tel:+14076396520"
            className="block mt-6 bg-blue-600 text-white text-center py-3 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Call Now
          </a>

          <a
            href="tel:+14076396520"
            className="block text-center py-3 rounded-xl border border-slate-300 font-semibold text-slate-900"
          >
            +1 (407) 639-6520
          </a>
        </div>
      </div>

      <div className="fixed bottom-3 left-4 right-4 lg:hidden z-40">
        <div className="flex gap-3 bg-white/95 backdrop-blur shadow-[0_14px_34px_rgba(15,23,42,0.16)] rounded-xl p-2 border border-slate-200">
          <a
            href="tel:+14076396520"
            className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Call Now
          </a>
          <Link
            href="/#quote"
            className="flex-1 border border-slate-300 text-center py-3 rounded-lg font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
