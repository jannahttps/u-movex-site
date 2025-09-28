"use client";

import { useState } from "react";
import PromoTimer from "./PromoTimer";

const SHOW_PROMO_TIMER = false;

type FormState = {
  prefPhone: boolean;
  prefEmail: boolean;
  commentsLength: number;
  submitting: boolean;
  submitted: boolean;
  error?: string;
  phoneError?: string;
  emailError?: string;
};

// simple validators
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function ContactForm() {
  const [s, setS] = useState<FormState>({
    prefPhone: true,
    prefEmail: false,
    commentsLength: 0,
    submitting: false,
    submitted: false,
  });

  // controlled phone value with lightweight mask
  const [phoneValue, setPhoneValue] = useState("");

  function formatPhone(v: string) {
    const d = v.replace(/\D/g, "").slice(0, 10);
    const p1 = d.slice(0, 3);
    const p2 = d.slice(3, 6);
    const p3 = d.slice(6, 10);
    if (d.length > 6) return `(${p1}) ${p2}-${p3}`;
    if (d.length > 3) return `(${p1}) ${p2}`;
    if (d.length > 0) return `(${p1}`;
    return "";
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (s.submitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const phoneDigits = phoneValue.replace(/\D/g, ""); // 10 digits expected
    const email = (fd.get("email") as string)?.trim();

    let phoneError = "";
    let emailError = "";

    if (!s.prefPhone && !s.prefEmail) {
      setS((x) => ({
        ...x,
        error: "Please select at least one preferred contact method.",
      }));
      return;
    }

    if (s.prefPhone) {
      if (phoneDigits.length !== 10) {
        phoneError = "Please enter a valid phone number (e.g. 407-639-6520).";
      }
    }

    if (s.prefEmail) {
      if (!email || !emailRegex.test(email)) {
        emailError = "Please enter a valid email address (e.g. name@mail.com).";
      }
    }

    if (phoneError || emailError) {
      setS((x) => ({ ...x, phoneError, emailError, error: undefined }));
      return;
    }

    // push formatted phone value into the form (so Netlify receives it)
    fd.set("phoneNumber", phoneValue);
    fd.set(
      "preferredContact",
      [s.prefPhone && "phone", s.prefEmail && "email"].filter(Boolean).join(", ")
    );

    try {
      setS((x) => ({
        ...x,
        submitting: true,
        error: undefined,
        phoneError: undefined,
        emailError: undefined,
      }));

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(fd.entries()).map(([k, v]) => [k, String(v)]) as [string, string][]
        ).toString(),
      });

      setS((x) => ({ ...x, submitted: true, submitting: false }));
      form.reset();
      setPhoneValue("");
    } catch {
      setS((x) => ({
        ...x,
        submitting: false,
        error: "Form submission failed. Please try again or call us directly.",
      }));
    }
  };

  return (
    <section
      id="quote"
      className="mx-auto my-6 w-full max-w-4xl px-4 sm:px-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {SHOW_PROMO_TIMER && <PromoTimer />}

      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-2xl mx-auto">
        {s.submitted ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Thank you for your request!
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              We will get back to you as soon as possible today.
            </p>
            <img
              src="/u-movex-gator-thumbs-up.png"
              alt="U-MOVEX gator thumbs up"
              className="mx-auto w-40 h-40 sm:w-56 sm:h-56 object-contain"
            />
            <a
              href="tel:+14076396520"
              className="inline-block border border-blue-200 text-blue-700 py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              📞 Call Now (407) 639-6520
            </a>
          </div>
        ) : (
          <>
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              Start your easy move today!
            </h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Full name */}
              <label className="md:col-span-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  autoComplete="name"
                  required
                  className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-base"
                />
              </label>

              {/* Email */}
              <label className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  inputMode="email"
                  autoComplete="email"
                  required={s.prefEmail}
                  className={`block w-full px-4 py-3 rounded-xl border ${
                    s.emailError ? "border-red-500" : "border-gray-300"
                  } focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-base`}
                />
                {s.emailError && (
                  <p className="text-red-600 text-sm mt-1">{s.emailError}</p>
                )}
              </label>

              {/* Phone (masked locally) */}
              <label className="relative">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="(407) 639-6520"
                  inputMode="tel"
                  autoComplete="tel"
                  required={s.prefPhone}
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(formatPhone(e.target.value))}
                  className={`block w-full px-4 py-3 rounded-xl border ${
                    s.phoneError ? "border-red-500" : "border-gray-300"
                  } focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-base`}
                />
                {s.phoneError && (
                  <p className="text-red-600 text-sm mt-1">{s.phoneError}</p>
                )}
              </label>

              {/* Addresses */}
              <label className="md:col-span-2">
                <input
                  type="text"
                  name="pickupAddress"
                  placeholder="Pick-Up Address"
                  autoComplete="address-line1"
                  required
                  className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-base"
                />
              </label>

              <label className="md:col-span-2">
                <input
                  type="text"
                  name="dropoffAddress"
                  placeholder="Drop-Off Address"
                  autoComplete="address-line2"
                  required
                  className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-base"
                />
              </label>

              {/* Comments */}
              <label className="md:col-span-2">
                <textarea
                  name="comments"
                  placeholder="Comment or Special Instructions"
                  maxLength={500}
                  rows={4}
                  onChange={(e) =>
                    setS((x) => ({ ...x, commentsLength: e.target.value.length }))
                  }
                  className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-base resize-y"
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {s.commentsLength}/500
                </div>
              </label>

              {/* Preferred contact method */}
              <fieldset className="md:col-span-2 border border-gray-200 rounded-xl p-3 sm:p-4">
                <legend className="text-sm font-semibold text-gray-700">
                  Preferred contact method (choose at least one)
                </legend>
                <div className="mt-2 flex gap-6">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={s.prefPhone}
                      onChange={(e) =>
                        setS((x) => ({ ...x, prefPhone: e.target.checked }))
                      }
                    />
                    <span>Phone</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={s.prefEmail}
                      onChange={(e) =>
                        setS((x) => ({ ...x, prefEmail: e.target.checked }))
                      }
                    />
                    <span>Email</span>
                  </label>
                </div>
              </fieldset>

              {/* Global error */}
              {s.error && (
                <p className="md:col-span-2 text-sm text-red-600">{s.error}</p>
              )}

              {/* CTA buttons */}
              <div className="md:col-span-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={s.submitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-2xl text-lg font-semibold hover:bg-blue-700 active:translate-y-[1px] transition disabled:opacity-70"
                >
                  {s.submitting ? "Sending..." : "Get Free Quote"}
                </button>

                {/* Sticky call button for mobile */}
                <a
                  href="tel:+14076396520"
                  className="md:hidden sticky bottom-2 z-10 text-center w-full border border-blue-200 text-blue-700 py-3 px-6 rounded-2xl font-semibold bg-white/90 backdrop-blur hover:bg-blue-50 transition"
                >
                  📞 Call Now (407) 639-6520
                </a>

                {/* Desktop call button */}
                <a
                  href="tel:+14076396520"
                  className="hidden md:block text-center w-full border border-blue-200 text-blue-700 py-3 px-6 rounded-2xl font-semibold hover:bg-blue-50 transition"
                >
                  📞 Call Now (407) 639-6520
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}