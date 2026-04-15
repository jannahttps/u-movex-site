'use client';

import { useState } from 'react';

type ReviewItem = {
  name: string;
  rating: number;
  text: string;
};

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: ReviewItem[] = [
    {
      name: 'Mari M.',
      rating: 5,
      text: 'Exceptional service! Honest, no hidden fees. Movers were quick to respond, arrived on time, and handled everything with great care. Highly recommend U-MOVEX for a stress-free move!',
    },
    {
      name: 'Karima',
      rating: 5,
      text: 'UMOVEX delivered a flawless, stress-free move. On time, professional, thoughtful, and highly efficient. No surprises, no hidden fees. Truly a gold standard in moving services!',
    },
    {
      name: 'Jake W.',
      rating: 5,
      text: 'Best moving experience I’ve ever had. Everything was seamless, communication was clear, and there were no hidden fees. They worked fast and with great care. Highly recommend!',
    },
    {
      name: 'J B.',
      rating: 5,
      text: 'Daniel and his crew were amazing. They packed, moved, and unloaded everything quickly and carefully. Great value and a very professional attitude. Highly recommend!',
    },
    {
      name: 'Rohan D.',
      rating: 5,
      text: 'Dani and his partner were excellent. Everything was packed properly and moved without damage. Best movers I’ve dealt with. Highly recommended!',
    },
    {
      name: 'Sarita M.',
      rating: 5,
      text: 'UMOVEX did a fantastic job moving my mom’s furniture. They were prompt, patient, and super accommodating. I would absolutely use them again.',
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-gradient-to-br from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            5-Star Reviews
          </p>

          <h2
            id="reviews-heading"
            className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            What Clients Say About UMOVEX
          </h2>

          <div className="mb-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="text-2xl text-yellow-400 sm:text-3xl"
              >
                ★
              </span>
            ))}
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Real feedback from happy customers who trusted us with their move in
            Orlando and across Central Florida.
          </p>
        </header>

        <div className="relative">
          <div className="rounded-3xl border border-blue-100 bg-white px-5 py-8 shadow-xl sm:px-10 sm:py-10">
            <div className="mb-5 flex items-center justify-center gap-1 sm:mb-6">
              {[...Array(reviews[currentReview].rating)].map((_, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="text-2xl text-yellow-400 sm:text-3xl"
                >
                  ★
                </span>
              ))}
            </div>

            <blockquote className="mx-auto mb-6 max-w-3xl text-center text-base leading-relaxed text-gray-700 sm:text-lg">
              “{reviews[currentReview].text}”
            </blockquote>

            <div className="text-center text-lg font-semibold text-gray-900">
              {reviews[currentReview].name}
            </div>

            <div className="mt-3 text-center text-sm font-medium text-blue-600">
              5-star client experience
            </div>
          </div>

          <button
            onClick={prevReview}
            aria-label="Previous review"
            className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition hover:bg-gray-50 sm:-left-5 sm:h-12 sm:w-12"
          >
            <span aria-hidden="true" className="text-xl text-gray-600">
              ←
            </span>
          </button>

          <button
            onClick={nextReview}
            aria-label="Next review"
            className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition hover:bg-gray-50 sm:-right-5 sm:h-12 sm:w-12"
          >
            <span aria-hidden="true" className="text-xl text-gray-600">
              →
            </span>
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://maps.app.goo.gl/qCC1fSjMrVBGvbRa6?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read more UMOVEX reviews on Google"
            className="inline-flex min-w-[240px] items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm transition hover:border-blue-200 hover:shadow-md"
          >
            <i className="ri-google-fill text-xl text-blue-600" aria-hidden="true"></i>
            <span>Read more on Google</span>
          </a>

          <a
            href="https://www.yelp.com/biz/u-movex-orlando#reviews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="See UMOVEX reviews on Yelp"
            className="inline-flex min-w-[240px] items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm transition hover:border-red-200 hover:shadow-md"
          >
            <i className="ri-star-fill text-xl text-red-500" aria-hidden="true"></i>
            <span>See us on Yelp</span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="text-xl text-yellow-400"
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-sm font-medium text-gray-600">
            Trusted by happy clients
          </span>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-500">
          We display selected client testimonials on this page and provide direct
          links to our public Google and Yelp review pages for additional
          feedback.
        </p>
      </div>
    </section>
  );
}
