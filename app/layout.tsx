import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://umovex.com"),
  title: "Orlando Movers | Apartment & Home Moving | U-MOVEX",
  description:
    "Trusted local movers in Orlando, FL. U-MOVEX specializes in apartment, home, and residential moving, with office moving services also available. Packing, loading, and unloading with fast quotes and no hidden fees.",
  keywords: [
    "Orlando movers",
    "movers in Orlando FL",
    "local movers Orlando",
    "local moving company Orlando",
    "apartment movers Orlando",
    "home movers Orlando",
    "residential movers Orlando",
    "office movers Orlando",
    "packing services Orlando",
    "loading and unloading Orlando",
    "moving company Orlando FL",
    "U-MOVEX",
  ],
  authors: [{ name: "U-MOVEX", url: "https://umovex.com" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://umovex.com/",
  },
  openGraph: {
    title: "Orlando Movers | Apartment & Home Moving | U-MOVEX",
    description:
      "Reliable local movers in Orlando, FL for apartments, homes, and residential moves. Office moving, packing, loading, and unloading also available.",
    url: "https://umovex.com",
    siteName: "U-MOVEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 48,
        height: 48,
        alt: "U-MOVEX Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Orlando Movers | Apartment & Home Moving | U-MOVEX",
    description:
      "Trusted local movers in Orlando, FL for apartments, homes, and residential moves.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-TK3RWLECG9";
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID || "AW-17184627515";
const ADS_CALL_LABEL = process.env.NEXT_PUBLIC_ADS_CALL_LABEL || "";
const ADS_FORM_LABEL = process.env.NEXT_PUBLIC_ADS_FORM_LABEL || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());

            gtag('config', '${GA_ID}');

            ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
          `}
        </Script>

        <Script id="call-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('click', function (e) {
              var link = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
              if (!link) return;

              if (typeof window.gtag === 'function') {
                window.gtag('event', 'call_click', {
                  event_category: 'engagement',
                  event_label: 'Phone Call'
                });

                var adsId = '${ADS_ID}';
                var label = '${ADS_CALL_LABEL}';
                if (adsId && label) {
                  window.gtag('event', 'conversion', {
                    send_to: adsId + '/' + label,
                    value: 1.0,
                    currency: 'USD'
                  });
                }
              }
            });
          `}
        </Script>

        <Script id="form-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('submit', function (e) {
              var form = e.target;
              if (!form || !(form instanceof HTMLFormElement)) return;

              var formId = form.getAttribute('id') || '';
              var formName = form.getAttribute('name') || '';

              if (typeof window.gtag === 'function') {
                window.gtag('event', 'form_submit', {
                  form_id: formId,
                  form_name: formName
                });

                var adsId = '${ADS_ID}';
                var label = '${ADS_FORM_LABEL}';
                if (adsId && label) {
                  window.gtag('event', 'conversion', {
                    send_to: adsId + '/' + label,
                    value: 1.0,
                    currency: 'USD'
                  });
                }
              }
            }, true);
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}