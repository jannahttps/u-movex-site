'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-10 md:grid-cols-3">

          {/* LEFT */}
          <div>
            <div className="mb-4 text-3xl font-bold">UMOVEX</div>

            <p className="mb-6 leading-relaxed text-gray-300">
              Reliable movers in Orlando, FL providing local moving services for homes, apartments, and offices.
            </p>

            <div className="flex flex-col gap-2 text-lg font-semibold">
              <a href="tel:+14076396520" className="hover:underline">
                +1 (407) 639-6520
              </a>
              <a
                href="mailto:umovexfl@gmail.com"
                className="text-base font-medium text-gray-300 hover:underline"
              >
                umovexfl@gmail.com
              </a>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://maps.app.goo.gl/qCC1fSjMrVBGvbRa6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
              >
                <Star className="h-4 w-4 text-blue-400" />
                Google Reviews
              </a>

              <a
                href="https://www.yelp.com/biz/u-movex-orlando#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
              >
                <Star className="h-4 w-4 text-red-400" />
                Yelp Reviews
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Moving Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/local-movers-orlando" className="hover:text-white hover:underline">
                  Local Movers in Orlando
                </Link>
              </li>
              <li>
                <Link href="/apartment-movers-orlando" className="hover:text-white hover:underline">
                  Apartment Movers in Orlando
                </Link>
              </li>
              <li>
                <Link href="/office-movers-orlando" className="hover:text-white hover:underline">
                  Office Movers in Orlando
                </Link>
              </li>
              <li>
                <Link href="/packing-services-orlando" className="hover:text-white hover:underline">
                  Packing Services in Orlando
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="hover:text-white hover:underline">
                  Loading & Unloading Help
                </Link>
              </li>
            </ul>
          </div>

          {/* 🔥 SERVICE AREAS (исправленный блок) */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Service Areas</h3>

            <ul className="space-y-2 text-gray-300">

              <li>
                <Link href="/" className="hover:text-white hover:underline">
                  Orlando, FL
                </Link>
              </li>

              <li>
                <Link href="/movers-downtown-orlando-fl" className="hover:text-white hover:underline">
                  Downtown Orlando
                </Link>
              </li>

              <li>
                <Link href="/movers-winter-park-fl" className="hover:text-white hover:underline">
                  Winter Park
                </Link>
              </li>

              <li>
                <Link href="/movers-dr-phillips-fl" className="hover:text-white hover:underline">
                  Dr. Phillips
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="text-center text-sm text-gray-400 md:text-left space-y-1">
              <p>
                © {new Date().getFullYear()} UMOVEX. All rights reserved.
                <span className="mx-2">|</span>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </p>

              <p className="text-gray-500">
                UMOVEX operates as a DBA of MIAXON LLC.
              </p>
              <p className="text-gray-500">
                Licensed & Insured • Florida Moving Registration #IM4023
              </p>
            </div>

            {/* SOCIAL */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.tiktok.com/@umovex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
              >
                TikTok
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61576221543424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
              >
                FB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
