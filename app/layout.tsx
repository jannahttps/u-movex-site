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
  title: "Orlando Movers | Apartment & Home Moving | UMOVEX",
  description:
    "Trusted local movers in Orlando, FL. UMOVEX specializes in apartment, home, and residential moving, with office moving services also available.",
  openGraph: {
    title: "Orlando Movers | Apartment & Home Moving | UMOVEX",
    description:
      "Reliable local movers in Orlando, FL for apartments and homes.",
    url: "https://umovex.com",
    siteName: "UMOVEX",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "UMOVEX Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Orlando Movers | UMOVEX",
    images: ["/logo.webp"],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-TK3RWLECG9";
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID || "AW-17184627515";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {/* Google Analytics / Google Ads */}
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

        {/* Call tracking */}
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
              }
            });
          `}
        </Script>

        {/* Form submit conversion tracking */}
        <Script id="form-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('submit', function (e) {
              var form = e.target;
              if (!form || !(form instanceof HTMLFormElement)) return;

              if (!form.checkValidity()) return;

              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-17184627515/Jb4QCPfMjaAcELu2ooJA',
                  value: 1.0,
                  currency: 'USD'
                });

                window.gtag('event', 'form_submit', {
                  form_id: form.getAttribute('id') || '',
                  form_name: form.getAttribute('name') || ''
                });
              }
            }, true);
          `}
        </Script>

        {/* Schema */}
        <Script id="schema-moving-company" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            "@id": "https://umovex.com/#movingcompany",
            name: "UMOVEX",
            alternateName: "U-MOVEX",
            legalName: "MIAXON LLC",
            identifier: "Florida Moving Registration #IM4023",
            url: "https://umovex.com",
            logo: "https://umovex.com/logo.webp",
            image: ["https://umovex.com/logo.webp"],
            telephone: "+14076396520",
            priceRange: "$$",
            description:
              "Trusted local movers in Orlando, FL specializing in apartment, home, residential, and office moving, with packing, loading, and unloading services.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "820 Main Lane, Apt 1423",
              addressLocality: "Orlando",
              addressRegion: "FL",
              postalCode: "32801",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 28.531699552517367,
              longitude: -81.37770382883488,
            },
            areaServed: [
              {
                "@type": "City",
                name: "Orlando",
              },
              {
                "@type": "Place",
                name: "Downtown Orlando",
              },
              {
                "@type": "Place",
                name: "Winter Park",
              },
              {
                "@type": "Place",
                name: "Dr. Phillips",
              },
              {
                "@type": "AdministrativeArea",
                name: "Central Florida",
              },
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "23:00",
              },
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+14076396520",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: ["English"],
            },
            sameAs: [
              "https://www.facebook.com/profile.php?id=61576221543424",
              "https://www.tiktok.com/@umovex",
              "https://youtube.com/@daniil-v6g8r?si=Wjmdpk4nXguuLggQ",
              "https://www.yelp.com/biz/u-movex-orlando",
              "https://maps.app.goo.gl/qCC1fSjMrVBGvbRa6?g_st=ic"
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "13",
              bestRating: "5",
              worstRating: "1",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Moving Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Local Moving",
                    serviceType: "Local Moving",
                    areaServed: "Orlando, FL",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Apartment Moving",
                    serviceType: "Apartment Moving",
                    areaServed: "Orlando, FL",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Home Moving",
                    serviceType: "Residential Moving",
                    areaServed: "Orlando, FL",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Office Moving",
                    serviceType: "Office Moving",
                    areaServed: "Orlando, FL",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Packing Services",
                    serviceType: "Packing Services",
                    areaServed: "Orlando, FL",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Loading and Unloading",
                    serviceType: "Loading and Unloading",
                    areaServed: "Orlando, FL",
                  },
                },
              ],
            },
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}
