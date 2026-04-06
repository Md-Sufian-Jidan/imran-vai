import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google"; // Swapped to Montserrat
import "./globals.css";
import Transition from "@/components/shared/Transition";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thepixelverse.com";
const SITE_NAME = "ThePixelVerse";
const SITE_DESCRIPTION =
  "ThePixelVerse crafts high-performance digital products — from brand identity to production-ready web apps.";
const SITE_KEYWORDS = process.env.SITE_KEYWORDS;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Professional Photo Editing & Retouching Studio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans">
        <Navbar />
        <Transition>{children}</Transition>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}