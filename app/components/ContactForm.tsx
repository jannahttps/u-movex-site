"use client";

import { useState } from "react";
import InputMask from "react-input-mask";
import PromoTimer from "./PromoTimer";

type FormState = {
  prefPhone: boolean;
  prefEmail: boolean;
  submitting: boolean;
  submitted: boolean;
  commentsLength: number;
  error?: string;
};

const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // простая и надёжная проверка формата

export default function ContactForm() {
  const [state, setState] = useState<FormState>({
    prefPhone: true, // по умолчанию отмечаем телефон — можно поменять
    prefEmail: false,
    submitting: false,
    submitted: false,
    commentsLength: 0,
  });

  const setField =
    (k: keyof FormState) =>
    (v: any) =>
      setState((s) => ({ ...s, [k]: v }));

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (state.submitting) return;

    // GA попытка
    // @ts-ignore
    window.gtag?.("event", "quote_submit_attempt", {
      location: "main_contact_form",
    });

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const phone = (fd.get("phoneNumber") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();

    // Валидации предпочтений
    if (!state.prefPhone && !state.prefEmail) {
      setState((s) => ({ ...s, error: "Выберите способ связи: телефон или e-mail." }));
      return;
    }

    // Условные обязательности
    if (state.prefPhone) {
      if (!phone || !phoneRegex.test(phone)) {
        setState((s) => ({ ...s, error: "Введите корректный номер телефона (например, 407-639-6520)." }));
        return;
      }
    }
    if (state.prefEmail) {
      if (!email || !emailRegex.test(email)) {
        setState((s) => ({ ...s, error: "Введите корректный e-mail (например, name@mail.com)." }));
        return;
      }
    }

    // Для Netlify: фиксируем выбор пользователя
    const preferred: string[] = [];
    if (state.prefPhone) preferred.push("phone");
    if (state.prefEmail) preferred.push("email");
    fd.set("preferredContact", preferred.join(", "));
    // Netlify hidden field уже есть в разметке: form-name=contact

    try {
      setState((s) => ({ ...s, submitting: true, error: undefined }));

      // Отправка в Netlify (стандартный приём для SPA)
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(fd.entries()).map(([k, v]) => [k, String(v)]) as [string, string][]
        ).toString(),
      });

      // GA успех
      // @ts-ignore
      window.gtag?.("event", "quote_submit_success", {
        location: "main_contact_form",
        preferredContact: preferred.join("|"),
      });

      setState((s) => ({ ...s, submitted: true, submitting: false }));
      formEl.reset();
    } catch (err) {
      setState((s) => ({
        ...s,
        submitting: false,
        error: "Не удалось отправить форму. Попробуйте ещё раз или позвоните нам.",
      }));
      // @ts-ignore
      window.gtag?.("event", "quote_submit_error", { location: "main_contact_form" });
    }
  };

  return (
    <section id="quote" className="mx-auto my-10 w-full max-w-4xl px-4">
      <PromoTimer />

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
        {state.submitted ? (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Спасибо за заявку!
            </h2>
            <p className="text-gray-700">
              Мы свяжемся с вами в течение этого дня и как можно быстрее.
            </p>
            {/* Можно заменить src на ваш CDN/путь в продакшене */}
            <img
              src="/u-movex-gator-thumbs-up.png"
              alt="U-MOVEX gator thumbs up"
              className="mx-auto w-48 h-48 object-contain"
            />
            <a
              href="tel:+14076396520"
              className="inline-block border border-blue-200 text-blue-700 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              📞 Позвонить сейчас (407) 639-6520
            </a>
          </div>
        ) : (
          <>
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
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  onBlur={(e) => {
                    const v = e.target.value.trim();
                    if (v && !emailRegex.test(v)) e.target.setCustomValidity("Please enter a valid e-mail.");
                    else e.target.setCustomValidity("");
                  }}
                />
              </div>

              <div>
                <InputMask mask="(999) 999-9999" maskChar="">
                  {(inputProps: any) => (
                    <input
                      {...inputProps}
                      type="tel"
                      name="phoneNumber"
                      placeholder="(407) 639-6520"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      pattern="^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$"
                      title="Enter a valid phone number, e.g. 407-639-6520"
                    />
                  )}
                </InputMask>
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
                  onChange={(e) => setField("commentsLength")(e.target.value.length)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                />
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {state.commentsLength}/500
                </div>
              </div>

              {/* Предпочтительный способ связи */}
              <fieldset className="border border-gray-200 rounded-lg p-4">
                <legend className="text-sm font-semibold text-gray-700">
                  Preferred contact method (choose at least one)
                </legend>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={state.prefPhone}
                      onChange={(e) => setField("prefPhone")(e.target.checked)}
                    />
                    <span>Phone</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={state.prefEmail}
                      onChange={(e) => setField("prefEmail")(e.target.checked)}
                    />
                    <span>Email</span>
                  </label>
                </div>
                {/* Хранить выбор и для Netlify: */}
                <input type="hidden" name="preferredContact" value={(state.prefPhone ? "phone," : "") + (state.prefEmail ? "email" : "")} />
              </fieldset>

              {state.error && (
                <p className="text-sm text-red-600">{state.error}</p>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-70"
                onClick={() => {
                  // @ts-ignore
                  window.gtag?.("event", "quote_submit_click", {
                    location: "main_contact_form",
                    prefPhone: state.prefPhone,
                    prefEmail: state.prefEmail,
                  });
                }}
              >
                {state.submitting ? "Sending..." : "Get Free Quote"}
              </button>

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
          </>
        )}
      </div>
    </section>
  );
}