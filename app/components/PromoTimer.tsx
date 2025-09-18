"use client";
import { useEffect, useMemo, useState } from "react";

export default function PromoTimer() {
  // Deadline: 3 days from now
  const end = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    d.setHours(23, 59, 59, 999);
    return d;
  }, []);

  const [left, setLeft] = useState<number>(end.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => setLeft(end.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [end]);

  if (left <= 0) return null;

  const days = Math.floor(left / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((left % (1000 * 60)) / 1000);

  return (
    <div className="mx-auto mb-6 w-full max-w-4xl rounded-xl border border-emerald-300 bg-emerald-50 p-6 text-center shadow">
      <h2 className="text-2xl font-extrabold tracking-tight text-emerald-900">
        🚚 Special Offer: <span className="whitespace-nowrap">2 Movers + Truck</span> — $120/hr
      </h2>

      <p className="mt-2 text-gray-700">
        Limited spots available! Book within 3 days to lock this affordable rate. <br />
        No hidden fees — guaranteed top-quality moving service in Orlando & nearby areas.
      </p>

      {/* Countdown */}
      <div className="mt-4 inline-flex items-center gap-3 rounded-lg bg-white px-4 py-2 ring-1 ring-emerald-200">
        <span className="text-sm font-medium text-gray-600">Offer ends in</span>
        <span className="font-mono text-lg font-bold tabular-nums text-emerald-700">
          {days}d {String(hrs).padStart(2, "0")}:{String(mins).padStart(2, "0")}:
          {String(secs).padStart(2, "0")}
        </span>
      </div>

      {/* CTA buttons */}
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          href="tel:+14076396520"
          className="rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          📞 Call Now (407) 639-6520
        </a>
        <a
          href="/get-a-quote"
          className="rounded-lg border border-emerald-300 bg-white px-5 py-2.5 font-semibold text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          ➡️ Get Free Quote
        </a>
      </div>

      {/* Footnote */}
      <p className="mt-4 text-xs text-gray-500">
        *Minimum charge — 2 hours ($240). Even if the job takes less time, the 2-hour minimum applies. Hourly rate valid for local moves within the Orlando area.*
      </p>
    </div>
  );
}