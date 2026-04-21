"use client";

import { useRef, useState } from "react";
import PromoTimer from "./PromoTimer";

const SHOW_PROMO_TIMER = false;

type FormState = {
  fullName: string;
  email: string;
  phoneNumber: string;
  pickupAddress: string;
  dropoffAddress: string;
  movingDate: string;
  bedrooms: string;
  comments: string;
  prefPhone: boolean;
  prefEmail: boolean;
  submitting: boolean;
  submitted: boolean;
  error: string;
  phoneError: string;
  emailError: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const initialState: FormState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  pickupAddress: "",
  dropoffAddress: "",
  movingDate: "",
  bedrooms: "",
  comments: "",
  prefPhone: true,
  prefEmail: false,
  submitting: false,
  submitted: false,
  error: "",
  phoneError: "",
  emailError: "",
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function trackLeadSubmitSuccess(payload: {
  preferredContact: string;
  bedrooms: string;
  hasEmail: boolean;
  hasPhone: boolean;
}) {
  if (typeof window === "undefined") return;

  const eventParams = {
    form_name: "contact",
    preferred_contact: payload.preferredContact,
    home_size: payload.bedrooms || "unknown",
    has_email: payload.hasEmail ? "yes" : "no",
    has_phone: payload.hasPhone ? "yes" : "no",
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lead_submit_success",
    ...eventParams,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", "lead_submit_success", eventParams);
  }
}

export default function ContactForm() {
  const [s, setS] = useState<FormState>(initialState);
  const trackedSuccessRef = useRef(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      setS((prev) => ({
        ...prev,
        phoneNumber: formatPhone(value),
        phoneError: "",
        error: "",
      }));
      return;
    }

    setS((prev) => ({
      ...prev,
      [name]: value,
      error: "",
      emailError: name === "email" ? "" : prev.emailError,
    }));
  };

  const handleCheckboxChange = (name: "prefPhone" | "prefEmail") => {
    setS((prev) => ({
      ...prev,
      [name]: !prev[name],
      error: "",
    }));
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (s.submitting) return;

    const phoneDigits = s.phoneNumber.replace(/\D/g, "");
    const email = s.email.trim();

    let phoneError = "";
    let emailError = "";
    let generalError = "";

    if (!s.prefPhone && !s.prefEmail) {
      generalError = "Please select at least one preferred contact method.";
    }

    if (s.prefPhone && phoneDigits.length !== 10) {
      phoneError = "Please enter a valid phone number.";
    }

    if (s.prefEmail && (!email || !emailRegex.test(email))) {
      emailError = "Please enter a valid email address.";
    }

    if (generalError || phoneError || emailError) {
      setS((prev) => ({
        ...prev,
        error: generalError,
        phoneError,
        emailError,
      }));
      return;
    }

    const preferredContact = [s.prefPhone ? "phone" : "", s.prefEmail ? "email" : ""]
      .filter(Boolean)
      .join(", ");

    const formData = new URLSearchParams();
    formData.append("form-name", "contact");
    formData.append("fullName", s.fullName.trim());
    formData.append("email", email);
    formData.append("phoneNumber", s.phoneNumber);
    formData.append("pickupAddress", s.pickupAddress.trim());
    formData.append("dropoffAddress", s.dropoffAddress.trim());
    formData.append("movingDate", s.movingDate);
    formData.append("bedrooms", s.bedrooms);
    formData.append("comments", s.comments.trim());
    formData.append("preferredContact", preferredContact);
    formData.append("bot-field", "");

    try {
      setS((prev) => ({
        ...prev,
        submitting: true,
        error: "",
        phoneError: "",
        emailError: "",
      }));

      const res = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      if (!trackedSuccessRef.current) {
        trackLeadSubmitSuccess({
          preferredContact,
          bedrooms: s.bedrooms,
          hasEmail: Boolean(email),
          hasPhone: phoneDigits.length === 10,
        });
        trackedSuccessRef.current = true;
      }

      setS({
        ...initialState,
        submitted: true,
      });
    } catch {
      setS((prev) => ({
        ...prev,
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

      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-4 shadow-2xl sm:p-6 md:p-8">
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="fullName" />
          <input type="email" name="email" />
          <input type="tel" name="phoneNumber" />
          <input type="text" name="pickupAddress" />
          <input type="text" name="dropoffAddress" />
          <input type="date" name="movingDate" />
          <select name="bedrooms">
            <option value="">Select</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
            <option value="3 Bedrooms">3 Bedrooms</option>
            <option value="4 Bedrooms">4 Bedrooms</option>
            <option value="5+ Bedrooms">5+ Bedrooms</option>
          </select>
          <textarea name="comments" />
          <input type="text" name="preferredContact" />
          <input type="text" name="bot-field" />
        </form>

        {s.submitted ? (
          <div className="space-y-4 py-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Thank you for your request!
            </h2>
            <p className="text-gray-700">
              We will get back to you as soon as possible today.
            </p>

            <button
              type="button"
              onClick={() => {
                trackedSuccessRef.current = false;
                setS({
                  ...initialState,
                  submitted: false,
                });
              }}
              className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
            >
              Send Another Request
            </button>
          </div>
        ) : (
          <>
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
              Start your easy move today!
            </h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" value="" />

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={s.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={s.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={`w-full rounded-xl border px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
                    s.emailError ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {s.emailError && (
                  <p className="mt-1 text-sm text-red-600">{s.emailError}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="(407) 639-6520"
                  value={s.phoneNumber}
                  onChange={handleChange}
                  inputMode="tel"
                  autoComplete="tel"
                  className={`w-full rounded-xl border px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
                    s.phoneError ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {s.phoneError && (
                  <p className="mt-1 text-sm text-red-600">{s.phoneError}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="pickupAddress"
                  placeholder="Pick-Up Address"
                  required
                  value={s.pickupAddress}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="md:col-span-2">
                <input
                  type="text"
                  name="dropoffAddress"
                  placeholder="Drop-Off Address"
                  required
                  value={s.dropoffAddress}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="movingDate"
                  className="mb-1 block text-sm font-medium text-gray-600"
                >
                  Preferred Moving Date
                </label>
                <div className="relative">
                  <input
                    id="movingDate"
                    type="date"
                    name="movingDate"
                    required
                    value={s.movingDate}
                    onChange={handleChange}
                    className="block w-full min-h-[52px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    style={{
                      WebkitAppearance: "none",
                      appearance: "none",
                    }}
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="bedrooms"
                  className="mb-1 block text-sm font-medium text-gray-600"
                >
                  Home Size
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  required
                  value={s.bedrooms}
                  onChange={handleChange}
                  className="w-full min-h-[52px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select home size
                  </option>
                  <option value="Studio">Studio</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedrooms">2 Bedrooms</option>
                  <option value="3 Bedrooms">3 Bedrooms</option>
                  <option value="4 Bedrooms">4 Bedrooms</option>
                  <option value="5+ Bedrooms">5+ Bedrooms</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="comments"
                  placeholder="Comments"
                  rows={4}
                  value={s.comments}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="md:col-span-2 rounded-xl border border-gray-200 p-4">
                <p className="mb-3 font-medium text-gray-800">
                  Preferred Contact Method
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <label className="flex items-center gap-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={s.prefPhone}
                      onChange={() => handleCheckboxChange("prefPhone")}
                      className="h-4 w-4"
                    />
                    <span>Phone</span>
                  </label>

                  <label className="flex items-center gap-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={s.prefEmail}
                      onChange={() => handleCheckboxChange("prefEmail")}
                      className="h-4 w-4"
                    />
                    <span>Email</span>
                  </label>
                </div>
              </div>

              {s.error && (
                <div className="md:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {s.error}
                </div>
              )}

              <button
                type="submit"
                disabled={s.submitting}
                className="md:col-span-2 rounded-xl bg-blue-600 py-4 text-base font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {s.submitting ? "Sending..." : "Get Free Quote"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}