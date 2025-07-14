
'use client';

import { useState } from 'react';

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Maria Rodriguez',
      rating: 5,
      text: 'U-MOVEX made our family move from Miami to Orlando absolutely stress-free! The team arrived on time, wrapped everything perfectly, and treated our furniture like it was their own. Carlos and his crew were professional, friendly, and worked incredibly efficiently. Not a single item was damaged, and they even helped us set up our new home. Highly recommend for anyone moving in Florida!'
    },
    {
      name: 'James Thompson',
      rating: 5,
      text: 'Outstanding service from start to finish! I needed to move my office quickly, and U-MOVEX handled everything professionally. They provided all the packing materials, disassembled and reassembled our office furniture, and completed the move in record time. The pricing was transparent with no hidden fees, exactly as promised. Will definitely use them again for future moves.'
    },
    {
      name: 'Sarah Chen',
      rating: 5,
      text: 'Moving my elderly parents was a delicate situation, but U-MOVEX handled it with such care and patience. The movers took extra time to explain each step, protected all the antique furniture perfectly, and even helped arrange items in the new apartment. The customer service was exceptional - they called to check on us after the move. This is what professional moving service should look like!'
    },
    {
      name: 'Michael Davis',
      rating: 5,
      text: 'I was skeptical about hiring movers, but U-MOVEX exceeded all expectations. They moved our 4-bedroom house including piano and artwork without any issues. The team was courteous, worked hard throughout the day, and stayed within the quoted time frame. The best part was their attention to protecting our new home\'s floors and walls. Worth every penny!'
    },
    {
      name: 'Amanda Foster',
      rating: 5,
      text: 'Fantastic experience with U-MOVEX! Last-minute apartment move in Tampa, and they accommodated our tight schedule, even working on a weekend. The crew was energetic, careful with our belongings, and made what could have been a stressful day actually enjoyable. Great communication throughout the process. Definitely the best moving company in Florida!'
    },
    {
      name: 'Robert Johnson',
      rating: 5,
      text: 'Professional, reliable, and affordable! U-MOVEX moved our family from Jacksonville to Fort Lauderdale. They provided excellent packing service, handled our kids\' items with special care, and made the long-distance move smooth. The truck was clean and well-equipped, movers were experienced, and everything arrived in perfect condition. Couldn\'t ask for better service!'
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers across Florida
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-2xl text-yellow-400"></i>
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
                "{reviews[currentReview].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="text-xl font-semibold text-gray-800">
                  {reviews[currentReview].name}
                </div>
              </div>
            </div>

            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-2xl text-gray-600"></i>
            </button>

            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-2xl text-gray-600"></i>
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
