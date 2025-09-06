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
    "p
