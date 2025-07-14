
'use client';

import { useState } from 'react';

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Mari. M',
      rating: 5,
      text: 'Exceptional services,  very  honest, no hidden fees. They were very quick to respond to any questions I had when I needed information about the move. Moving crew showed up on time, the movers were very understanding and professional pack and move everything without any concerns. Very quick and efficient. Movers took extra care and precaution with all my items and were very friendly and courteous and professional. Affordable  price. Overall couldn't be happier with the service provided . Highly recommend them for any moving needs. I will definitely use their services again in the future. Thank you!'
    },
    {
      name: 'Jake W.',
      rating: 5,
      text: 'Best moving experience I've ever had! Everything was seamless and stress free. Strong communication and upfront with pricing / no hidden fees. They both worked very quick and diligently making a 8+ hour job under 6 hours. They were very accommodating, professional, and experienced in the moving process. I would HIGHLY recommend to friends and family. Well done'
    },
    {
      name: 'J B.',
      rating: 5,
      text: 'Daniel and his crew were amazing they came on time they grabbed everything they pack their truck easily and unloaded it very quickly I was very pleased with your work and would highly recommend them. Also their rate was really reasonable, and I was able to give a generous tip to the guys.

'
    },
    {
      name: 'Mrs Williams',
      rating: 5,
      text: 'I was literally shocked at the professionalism, friendliness & efficiency of this team.  I could not have asked for anyone better to help me with my move.  They moved quickly, the price was very reasonable & they were honest & straight forward about it, no hidden fees.  I would highly recommend hiring this team if you're looking for a stress free & reasonable priced move!!!

'
    },
    {
      name: 'Rosalba V.',
      rating: 5,
      text: 'I had a fantastic experience with this moving company! From start to finish, they were incredibly professional, efficient, and careful with all of my belongings. The team arrived on time, worked quickly, and handled everything with care. On top of that, their pricing was very fair and transparent--great value for the quality of service. I highly recommend them to anyone looking for a stress-free and reliable moving experience!'
    },
    {
      name: 'S K.',
      rating: 5,
      text: 'I requested service to help me move from one apartment to another apartment, within the same complex. The two gentlemen showed up on time and ready to go. They quickly assessed the job and got to work. They were extremely professional and efficient. Both guys were able to get my items moved within the allotted timeframe that I had planned. They handled everything with care and I would definitely recommend them to anyone looking for a dependable and hardworking team!'
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
