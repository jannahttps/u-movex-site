'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 text-3xl font-bold">U-MOVEX</div>

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
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
              >
                <Star className="h-4 w-4 text-blue-400" />
                <span>Google Reviews</span>
              </a>

              <a
                href="https://www.yelp.com/biz/u-movex-orlando#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
              >
                <Star className="h-4 w-4 text-red-400" />
                <span>Yelp Reviews</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Moving Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/local-movers-orlando" className="hover:text-white hover:underline">
                  Local Movers in Orlando, FL
                </Link>
              </li>
              <li>
                <Link href="/apartment-movers-orlando" className="hover:text-white hover:underline">
                  Apartment Movers in Orlando, FL
                </Link>
              </li>
              <li>
                <Link href="/office-movers-orlando" className="hover:text-white hover:underline">
                  Office Movers in Orlando, FL
                </Link>
              </li>
              <li>
                <Link href="/packing-services-orlando" className="hover:text-white hover:underline">
                  Packing Services in Orlando, FL
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="hover:text-white hover:underline">
                  Loading & Unloading Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Orlando, FL</li>
              <li>Central Florida</li>
              <li>Tampa Bay Area</li>
              <li>Miami & South Florida</li>
              <li>Jacksonville</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            
            {/* LEFT SIDE */}
            <div className="text-center text-sm text-gray-400 md:text-left space-y-1">
              <p>
                © {new Date().getFullYear()} U-MOVEX. All rights reserved.
                <span className="mx-2">|</span>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </p>

              {/* 🔥 ВОТ ТВОЙ БЛОК С ЛИЦЕНЗИЕЙ */}
              <p className="text-gray-500">
                UMOVEX operates as a DBA of MIAXON LLC.
              </p>
              <p className="text-gray-500">
                Licensed &amp; Insured • Florida Moving Registration #IM4023
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.tiktok.com/@umovex?_t=ZT-8y3ZCcWAPcl&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition hover:bg-gray-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M14 3v10.5a3.5 3.5 0 1 1-3.5-3.5V12a1.5 1.5 0 1 0 1.5 1.5V3h2z" />
                  <path d="M14 3c1 1.8 2.7 3 5 3v2c-1.8 0-3.5-.6-5-1.8V3z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61576221543424"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition hover:bg-gray-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M13 22v-8h3l.5-3H13V8.5c0-.9.3-1.5 1.7-1.5H17V4.2c-.4-.1-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.9V11H7v3h2.5v8H13z" />
                </svg>
              </a>

              <a
                href="https://youtube.com/@daniil-v6g8r?si=Wjmdpk4nXguuLggQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition hover:bg-gray-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M23 12s0-3.2-.4-4.7a2.6 2.6 0 0 0-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.5A2.6 2.6 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.6 2.6 0 0 0 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.5a2.6 2.6 0 0 0 1.8-1.8c.4-1.5.4-4.7.4-4.7zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}