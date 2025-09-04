'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import VideoCarousel from './VideoCarousel';

export default function HeroSection() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://readdy.ai/api/search-image?query=Professional moving truck parked in front of modern Florida home with palm trees, bright blue sky, clean suburban neighborhood, professional moving service atmosphere, high quality photography style&width=1600&height=900&seq=hero-bg&orientation=landscape")`
      }}
    >
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-6 gap-4 sm:gap-0 relative z-10">
        {/* Логотип */}
        <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm rounded-xl px-4 py-3">
          <img 
            src="/videos/logo.png" 
            alt="U-MOVEX Logo" 
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <div className="text-xl sm:text-3xl font-bold text-white tracking-wide">U-MOVEX</div>
            <div className="text-sm sm:text-lg font-semibold text-white/90 tracking-wide">MOVING COMPANY</div>
          </div>
        </div>

        {/* Телефон и мессенджеры */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="text-white text-xl sm:text-3xl font-bold">+1 (407) 639-6520</div>
          <div className="flex gap-3">
            <a href="https://wa.me/14076396520" target="_blank" className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
              <i className="ri-whatsapp-line text-white text-lg sm:text-xl"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576221543424" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
  <i className="ri-messenger-line text-white text-lg sm:text-xl"></i>
</a>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-8">
        <div className="w-full max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Side - Hero Text */}
            <div className="order-1 lg:order-1 lg:col-span-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Your Trusted<br />
                <span className="text-blue-400">Moving</span><br />
                Company
              </h1>
              <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Professional movers in Orlando and across Florida. U-Movex provides reliable local and commercial moving services, packing, and modern equipment to make your relocation stress-free.

              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
<a
  href="tel:+14076396520"
  className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-base sm:text-lg text-center"
>
  Talk to a Moving Expert
</a>


              </div>
            </div>

            {/* Center - Video Carousel */}
            <div className="order-3 lg:order-2 lg:col-span-1 flex justify-center">
              <VideoCarousel />
            </div>

            {/* Right Side - Contact Form */}
            <div className="order-2 lg:order-3 lg:col-span-1 flex justify-center">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}