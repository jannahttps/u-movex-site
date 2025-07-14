
'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
