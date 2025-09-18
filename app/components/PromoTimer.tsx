'use client';

import { useEffect, useState } from 'react';

export default function PromoTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl shadow-lg p-6 mb-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-2">$120/hr</h2>
      <p className="text-gray-700 mb-4">
        Limited spots available! Book within 3 days to lock this affordable
        rate. <br />
        No hidden fees — guaranteed top-quality moving service in Orlando & nearby areas.
      </p>

      {/* Таймер */}
      <div className="text-lg font-mono bg-white border rounded-lg px-4 py-2 inline-block mb-4">
        Offer ends in {timeLeft.days}d {timeLeft.hours.toString().padStart(2, '0')}:
        {timeLeft.minutes.toString().padStart(2, '0')}:
        {timeLeft.seconds.toString().padStart(2, '0')}
      </div>

      {/* Кнопка звонка */}
      <a
        href="tel:+14076396520"
        className="block text-center w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        📞 Call Now (407) 639-6520
      </a>

      {/* Новый текст-приглашение */}
      <p className="text-center text-sm text-gray-700 mt-3">
        Or fill out the form below to get your <span className="font-semibold">free quote</span> instantly.
      </p>

      {/* Сноска */}
      <p className="text-xs text-gray-500 mt-4">
        *Minimum charge — 2 hours ($240). Even if the job takes less time, the 2-hour minimum applies. Hourly rate valid for local moves within the Orlando area.*
      </p>
    </div>
  );
}