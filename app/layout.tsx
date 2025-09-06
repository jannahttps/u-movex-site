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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-TK3RWLECG9";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Remix Icon CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="ga-debug" strategy="afterInteractive">
          {`
            console.log('[GA4 DEBUG] init for ${GA_ID}', typeof window.gtag);
          `}
        </Script>

        {/* Отслеживание звонков (клики по tel:) */}
        <Script id="ga-call-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function () {
              const phoneLinks = document.querySelectorAll("a[href^='tel:']");
              phoneLinks.forEach(link => {
                link.addEventListener('click', () => {
                  if (typeof gtag === 'function') {
                    gtag('event', 'call_click', {
                      event_category: 'engagement',
                      event_label: 'Phone Call'
                    });
                    console.log('[GA4] Call click event sent');
                  }
                });
              });
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
