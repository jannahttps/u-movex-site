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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export default function ContactForm() {
  const [s, setS] = useState<FormState>({
    prefPhone: true,
    prefEmail: false,
    commentsLength: 0,
    submitting: false,
    submitted: false,
  });

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

    const phoneDigits = phoneValue.replace(/\D/g, "");
    const email = (fd.get("email") as string)?.trim();

    let phoneError = "";
    let emailError = "";

    if (!s.prefPhone && !s.prefEmail) {
      setS((x) => ({ ...x, error: "Please select at least one preferred contact method." }));
      return;
    }
    if (s.prefPhone && phoneDigits.length !== 10) {
      phoneError = "Please enter a valid phone number (e.g. 407-639-6520).";
    }
    if (s.prefEmail && (!email || !emailRegex.test(email))) {
      emailError = "Please enter a valid email address (e.g. name@mail.com).";
    }
    if (phoneError || emailError) {
      setS((x) => ({ ...x, phoneError, emailError, error: undefined }));
      return;
    }

    fd.set("form-name", "contact");
    fd.set("phoneNumber", phoneValue);
    fd.set(
      "preferredContact",
      [s.prefPhone && "phone", s.prefEmail && "email"].filter(Boolean).join(", ")
    );

    const body = new URLSearchParams();
    for (const [k, v] of fd.entries()) body.append(k, String(v));

    try {
      setS((x) => ({
        ...x,
        submitting: true,
        error: undefined,
        phoneError: undefined,
        emailError: undefined,
      }));

      const res = await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) throw new Error("Netlify response not ok");

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
        
        {/* Invisible Netlify form */}
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="fullName" />
          <input type="email" name="email" />
          <input type="tel" name="phoneNumber" />
          <input type="text" name="pickupAddress" />
          <input type="text" name="dropoffAddress" />
          <input type="date" name="movingDate" />
          <input type="text" name="bedrooms" />
          <input type="text" name="preferredContact" />
          <textarea name="comments" />
          <input name="bot-field" />
        </form>

        {s.submitted ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Thank you for your request!
            </h2>
            <p className="text-gray-700">
              We will get back to you as soon as possible today.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Start your easy move today!
            </h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input type="hidden" name="form-name" value="contact" />

              <input type="text" name="fullName" placeholder="Full Name" required className="px-4 py-3 border rounded-xl" />

              <input type="email" name="email" placeholder="Email Address" className="px-4 py-3 border rounded-xl" />

              <input type="tel" name="phoneNumber" placeholder="(407) 639-6520" className="px-4 py-3 border rounded-xl" />

              <input type="text" name="pickupAddress" placeholder="Pick-Up Address" required className="md:col-span-2 px-4 py-3 border rounded-xl" />

              <input type="text" name="dropoffAddress" placeholder="Drop-Off Address" required className="md:col-span-2 px-4 py-3 border rounded-xl" />

              {/* Moving Date */}
              <label className="relative md:col-span-2">
                <span className="text-sm text-gray-600 mb-1 block">
                  Preferred Moving Date
                </span>
                <input
                  type="date"
                  name="movingDate"
                  required
                  className="w-full px-4 py-3 pr-10 border rounded-xl appearance-none"
                />
                <span className="absolute right-3 top-[42px] text-gray-400">📅</span>
              </label>

              {/* Bedrooms */}
              <input
                type="text"
                name="bedrooms"
                placeholder="Bedrooms (1, 2, 3...)"
                required
                className="px-4 py-3 border rounded-xl"
              />

              <textarea name="comments" placeholder="Comments" className="md:col-span-2 px-4 py-3 border rounded-xl" />

              <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-4 rounded-xl">
                Get Free Quote
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}