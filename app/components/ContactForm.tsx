'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [commentsLength, setCommentsLength] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Start your easy move today!
      </h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-4"
      >
        {/* hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        <div>
          <input
            type="text"
            name="pickupAddress"
            placeholder="Pick-Up Address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        <div>
          <input
            type="text"
            name="dropoffAddress"
            placeholder="Drop-Off Address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        <div>
          <textarea
            name="comments"
            placeholder="Comment or Special Instructions"
            maxLength={500}
            rows={3}
            onChange={(e) => setCommentsLength(e.target.value.length)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
          />
          <div className="text-xs text-gray-500 mt-1 text-right">
            {commentsLength}/500
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Free Quote
        </button>
      </form>
    </div>
  );
}
