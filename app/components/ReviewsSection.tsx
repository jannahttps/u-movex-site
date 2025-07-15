'use client';

import { useState } from "react";

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

const reviews = [
  {
    name: "Mari M.",
    rating: 5,
    text: "Exceptional service! Honest, no hidden fees. Movers were quick to respond, arrived on time, and handled everything with great care. Highly recommend U Movex for a stress-free move!",
  },
  {
    name: "Karima",
    rating: 5,
    text: "U Movex delivered a flawless, stress-free move. On time, professional, thoughtful, and highly efficient. No surprises, no hidden fees. Truly a gold standard in moving services!",
  },
  {
    name: "Jake W.",
    rating: 5,
    text: "Best moving experience I’ve ever had! Everything was seamless, communication was clear, and there were no hidden fees. They worked fast and with great care. Highly recommend!",
  },
  {
    name: "J B.",
    rating: 5,
    text: "Daniel and his crew were amazing. They packed, moved, and unloaded everything quickly and carefully. Great value, professional attitude. Highly recommend!",
  },
  {
    name: "Rohan D.",
    rating: 5,
    text: "Dani and his partner were excellent! Everything was packed properly and moved without damage. Best movers I’ve dealt with. Highly recommended!",
  },
  {
    name: "Sarita M.",
    rating: 5,
    text: "U Movex did a fantastic job moving my mom’s furniture. They were prompt, patient, and super accommodating. Would absolutely use them again!",
  }
];


  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers across Florida.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <span key={i} aria-hidden="true" className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>

            <blockquote className="text-base sm:text-lg text-gray-700 text-center mb-6 leading-relaxed">
              “{reviews[currentReview].text}”
            </blockquote>

            <div className="text-center font-semibold text-gray-800 text-lg">
              {reviews[currentReview].name}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevReview}
            aria-label="Previous review"
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
          >
            <span aria-hidden="true" className="text-xl text-gray-600">←</span>
          </button>

          <button
            onClick={nextReview}
            aria-label="Next review"
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
          >
            <span aria-hidden="true" className="text-xl text-gray-600">→</span>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentReview ? "bg-blue-600" : "bg-gray-300"
              } transition-colors`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
