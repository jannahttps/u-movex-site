'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Блок о компании */}
          <div>
            <div className="text-3xl font-bold mb-4">
              U-MOVEX
            </div>
            <p className="text-gray-300 mb-6">
              Florida's trusted moving company providing professional, reliable, and affordable moving services across the state.
            </p>
           <div className="text-xl font-semibold flex flex-col md:flex-row md:items-center">
  <a href="tel:+14076396520" className="hover:underline">
    +1 (407) 639-6520
  </a>
  <span className="hidden md:inline mx-3">|</span>
  <a href="mailto:umovexfl@gmail.com" className="hover:underline mt-2 md:mt-0">
    umovexfl@gmail.com
  </a>
</div>

          {/* Услуги */}
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

          {/* География */}
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

        {/* Нижняя полоса */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} U-MOVEX. All rights reserved.
              <span className="mx-2">|</span>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </div>

            {/* Соцсети */}
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
