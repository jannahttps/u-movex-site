import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "U-MOVEX - Top Rated Moving Company in Orlando, Florida",
  description:
    "Affordable, licensed moving company in Orlando. U-MOVEX offers local and statewide moving, packing, loading & more. Get a free quote today!",
  icons: { icon: "/favicon.ico" },
  keywords: [
    "Orlando movers",
    "moving company Orlando",
    "local moving",
    "affordable movers",
    "U-MOVEX Florida",
    "professional moving services",
    "packing help",
    "best moving company Orlando",
  ],
  authors: [{ name: "U-MOVEX", url: "https://u-movex.com" }],
  metadataBase: new URL("https://u-movex.com"),
  openGraph: {
    title: "U-MOVEX - Top Rated Moving Company in Orlando",
    description:
      "Trusted and affordable moving services in Orlando and across Florida. Book your move with U-MOVEX today!",
    url: "https://u-movex.com",
    siteName: "U-MOVEX",
    images: [{ url: "/favicon.ico", width: 48, height: 48, alt: "U-MOVEX Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "U-MOVEX - Moving Services in Orlando",
    description:
      "Affordable, professional movers in Orlando. Licensed, insured & highly rated.",
    images: ["/favicon.ico"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: { index: true, follow: true, nocache: false },
};

// ---- IDs из переменных окружения (Netlify) ----
// GA4 (обязателен)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-TK3RWLECG9";
// Google Ads (опционально, для прямой отправки конверсий в Ads)
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID || "AW-17184627515";
// Метки (labels) для конверсий в Ads — возьми из Google Ads
const ADS_CALL_LABEL = process.env.NEXT_PUBLIC_ADS_CALL_LABEL || ""; // например: Ab7CJHd2zkbEu2ooJA
const ADS_FORM_LABEL = process.env.NEXT_PUBLIC_ADS_FORM_LABEL || ""; // например: XyZ123abcDEF456

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}>
        {/* gtag.js — один раз для GA4 и Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GA4
            gtag('config', '${GA_ID}');

            // Google Ads (если указан ADS_ID)
            ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
          `}
        </Script>

        {/* Отладка (можно удалить позже) */}
        <Script id="debug" strategy="afterInteractive">
          {`
            console.log('[DEBUG] GA:', '${GA_ID}', 'ADS:', '${ADS_ID}', 'CALL_LABEL:', '${ADS_CALL_LABEL}', 'FORM_LABEL:', '${ADS_FORM_LABEL}');
          `}
        </Script>

        {/* Трекинг кликов по телефону: GA4 (call_click) + (опц.) конверсия в Google Ads */}
        <Script id="call-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function (e) {
              var link = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
              if (!link) return;

              if (typeof window.gtag === 'function') {
                // GA4
                window.gtag('event', 'call_click', {
                  event_category: 'engagement',
                  event_label: 'Phone Call'
                });
                console.log('[GA4] call_click sent');
                // Google Ads (если есть метка)
                var adsId = '${ADS_ID}';
                var label = '${ADS_CALL_LABEL}';
                if (adsId && label) {
                  window.gtag('event', 'conversion', {
                    'send_to': adsId + '/' + label,
                    'value': 1.0,
                    'currency': 'USD'
                  });
                  console.log('[ADS] call conversion sent to', adsId + '/' + label);
                }
              }
            });
          `}
        </Script>

        {/* Трекинг отправки формы: GA4 (form_submit) + (опц.) конверсия в Google Ads
            Пометь целевую форму атрибутом data-ga-lead (рекомендовано):
            <form id="quote-form" name="Get Free Quote" data-ga-lead ...> */}
        <Script id="form-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('submit', function (e) {
              var form = e.target;
              if (!form || !(form instanceof HTMLFormElement)) return;

              // Отслеживать только формы с data-ga-lead (снимите комментарий, если хотите ограничить)
              // if (!form.hasAttribute('data-ga-lead')) return;

              var formId = form.getAttribute('id') || '';
              var formName = form.getAttribute('name') || '';

              if (typeof window.gtag === 'function') {
                // GA4
                window.gtag('event', 'form_submit', {
                  form_id: formId,
                  form_name: formName
                });
                console.log('[GA4] form_submit sent', { formId, formName });

                // Google Ads (если есть метка)
                var adsId = '${ADS_ID}';
                var label = '${ADS_FORM_LABEL}';
                if (adsId && label) {
                  window.gtag('event', 'conversion', {
                    'send_to': adsId + '/' + label,
                    'value': 1.0,
                    'currency': 'USD'
                  });
                  console.log('[ADS] form conversion sent to', adsId + '/' + label);
                }
              }
            }, true); // capture=true — ловим сабмит наверняка
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}