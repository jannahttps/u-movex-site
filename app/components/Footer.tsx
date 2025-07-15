
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-3xl font-bold mb-4">
              U-MOVEX
            </div>
            <p className="text-gray-300 mb-6">
              Florida's trusted moving company providing professional, reliable, and affordable moving services across the state.
            </p>
            <div className="text-xl font-semibold">
              +1 (407) 639-6520
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Local Moving</li>
              <li>Residential Moves</li>
              <li>Office Relocation</li>
              <li>Packing Services</li>
              <li>Moving Supplies</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Orlando & Central Florida</li>
              <li>Miami-Dade County</li>
              <li>Tampa Bay Area</li>
              <li>Jacksonville</li>
              <li>Fort Lauderdale</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              2024 U-MOVEX. All rights reserved.
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@umovex?_t=ZT-8y3ZCcWAPcl&_r=1" 
                target="_blank"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-tiktok-line text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61576221543424" 
                target="_blank"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-facebook-line text-xl"></i>
              </a>
              <a 
                href="https://youtube.com/@daniil-v6g8r?si=Wjmdpk4nXguuLggQ" 
                target="_blank"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
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
