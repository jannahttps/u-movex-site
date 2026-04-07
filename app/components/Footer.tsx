'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          
          {/* Company */}
          <div>
            <div className="text-3xl font-bold mb-4">U-MOVEX</div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Reliable movers in Orlando, FL providing local and long-distance
              moving services for homes, apartments, and offices.
            </p>

            <div className="flex flex-col gap-2 text-lg font-semibold">
              <a href="tel:+14076396520" className="hover:underline">
                +1 (407) 639-6520
              </a>
              <a
                href="mailto:umovexfl@gmail.com"
                className="hover:underline text-base font-medium text-gray-300"
              >
                umovexfl@gmail.com
              </a>
            </div>

            {/* Reviews links */}
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://maps.app.goo.gl/qCC1fSjMrVBGvbRa6?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <i className="ri-google-fill text-blue-400"></i>
                <span>Google Reviews</span>
              </a>

              <a
                href="https://www.yelp.com/biz/u-movex-orlando#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
              >
                <i className="ri-star-fill text-red-400"></i>
                <span>Yelp Reviews</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Moving Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Local Movers in Orlando</li>
              <li>Residential Moving</li>
              <li>Office Relocation</li>
              <li>Packing Services</li>
              <li>Loading & Unloading</li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Orlando, FL</li>
              <li>Central Florida</li>
              <li>Tampa Bay Area</li>
              <li>Miami & South Florida</li>
              <li>Jacksonville</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} U-MOVEX. All rights reserved.
              <span className="mx-2">|</span>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </div>

            {/* Social */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.tiktok.com/@umovex?_t=ZT-8y3ZCcWAPcl&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="TikTok"
              >
                <i className="ri-tiktok-line text-xl"></i>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61576221543424"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="Facebook"
              >
                <i className="ri-facebook-line text-xl"></i>
              </a>

              <a
                href="https://youtube.com/@daniil-v6g8r?si=Wjmdpk4nXguuLggQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
