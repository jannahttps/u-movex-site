"use client";

import { useState } from "react";
import PromoTimer from "./PromoTimer"; // ⬅️ наш таймер с оффером

export default function ContactForm() {
  const [commentsLength, setCommentsLength] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    // Событие в GA4 (если gtag подключен)
    // @ts-ignore
    window.gtag?.("event", "quote_submit_attempt", {
      location: "main_contact_form",
    });
    setSubmitting(true);
  };

  return (
    <section id="quote" className="mx-auto my-10 w-full max-w-4xl px-4">
      {/* 🔥 Акционный таймер (3 дня) — над формой */}
      <PromoTimer />

      {/* Карточка формы — твой исходный дизайн */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Start your easy move today!
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you"
          onSubmit={onSubmit}
          className="space-y-4"
        >
          {/* Netlify service fields */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

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
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-70"
            onClick={() => {
              // @ts-ignore
              window.gtag?.("event", "quote_submit_click", {
                location: "main_contact_form",
              });
            }}
          >
            {submitting ? "Sending..." : "Get Free Quote"}
          </button>

          {/* Доп. CTA на звонок — повышает конверсию с мобильных */}
          <a
            href="tel:+14076396520"
            className="block text-center w-full border border-blue-200 text-blue-700 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            onClick={() => {
              // @ts-ignore
              window.gtag?.("event", "phone_click", {
                location: "contact_form_block",
              });
            }}
          >
            📞 Call Now (407) 639-6520
          </a>
        </form>
      </div>
    </section>
  );
}