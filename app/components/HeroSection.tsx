
'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import VideoCarousel from './VideoCarousel';

export default function HeroSection() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://readdy.ai/api/search-image?query=Professional%20moving%20truck%20parked%20in%20front%20of%20modern%20Florida%20home%20with%20palm%20trees%2C%20bright%20blue%20sky%2C%20clean%20suburban%20neighborhood%2C%20professional%20moving%20service%20atmosphere%2C%20high%20quality%20photography%20style&width=1600&height=900&seq=hero-bg&orientation=landscape")`
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 relative z-10">
        <div className="flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-xl px-6 py-4">
          <img 
            src="https://static.readdy.ai/image/4c36133621e4458e42a5f8b3f4abf161/fc65ebd7b1538d5c4ecb82f69b8ee6bc.png" 
            alt="U-MOVEX Logo" 
            className="w-16 h-16 object-contain"
          />
          <div className="flex flex-col">
            <div className="text-3xl font-bold text-white tracking-wide">U-MOVEX</div>
            <div className="text-lg font-semibold text-white/90 tracking-wide">MOVING COMPANY</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-4xl font-bold text-white mb-1">+1 (407) 639-6520</div>
            <div className="flex gap-3 justify-end">
              <a href="https://wa.me/14076396520" target="_blank" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-white text-xl"></i>
              </a>
              <a href="https://m.me/umovexflorida" target="_blank" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-messenger-line text-white text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-8">
        <div className="w-full max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Side - Hero Text */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Trusted<br />
                <span className="text-blue-400">Moving</span><br />
                Partner
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Professional moving services in Florida. We make your relocation stress-free with our experienced team and modern equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer text-lg">
                  Get Free Quote
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors whitespace-nowrap cursor-pointer text-lg border border-white/30">
                  Call Now
                </button>
              </div>
            </div>

            {/* Center - Video Carousel */}
            <div className="lg:col-span-1 flex justify-center">
              <VideoCarousel />
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-1 flex justify-center">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
