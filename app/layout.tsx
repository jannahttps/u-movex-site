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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable}`}>

        {/* GA */}
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

        {/* SCHEMA */}
<Script id="schema-moving-company" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "UMOVEX",
    alternateName: "U-MOVEX",
    url: "https://umovex.com",
    logo: "https://umovex.com/logo.webp",
    image: ["https://umovex.com/logo.webp"],
    telephone: "+14076396520",
    priceRange: "$$",
    legalName: "MIAXON LLC",
    identifier: "Florida Moving Registration #IM4023",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
    },
  })}
</Script>

        {children}
      </body>
    </html>
  );
}
