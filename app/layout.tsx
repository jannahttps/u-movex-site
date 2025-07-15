import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Head from "next/head"; // ⬅️ импорт Head для вставки <link>

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

// ✅ SEO + Favicon + Open Graph
export const metadata: Metadata = {
  title: "U-MOVEX - Top Rated Moving Company in Orlando, Florida",
  description:
    "Affordable, licensed moving company in Orlando. U-MOVEX offers local and statewide moving, packing, loading & more. Get a free quote today!",
  icons: {
    icon: "/favicon.ico",
  },
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
    images: [
      {
        url: "/favicon.ico",
        width: 48,
        height: 48,
        alt: "U-MOVEX Logo",
      },
    ],
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
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        {/* ✅ Remix Icon CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
