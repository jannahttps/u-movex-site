import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

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
  description: "Affordable, licensed moving company in Orlando. U-MOVEX offers local and statewide moving, packing, loading & more. Get a free quote today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <link rel="icon" href="/favicon.png" sizes="48x48" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Orlando movers, moving company Orlando, local moving, affordable movers, U-MOVEX Florida, professional moving services, packing help, best moving company Orlando" />
        <meta name="author" content="U-MOVEX" />
        <meta property="og:title" content="U-MOVEX - Top Rated Moving Company in Orlando" />
        <meta property="og:description" content="Trusted and affordable moving services in Orlando and across Florida. Book your move with U-MOVEX today!" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://u-movex.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
