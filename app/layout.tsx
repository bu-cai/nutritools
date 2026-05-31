import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nutritools.ai"),
  title: {
    default: "NutriTools — Free AI-Powered Food & Nutrition Tools",
    template: "%s | NutriTools",
  },
  description:
    "Free AI tools for nutrition analysis, meal planning, and food substitutions. Calculate calories, generate personalized meal plans, and find ingredient swaps instantly.",
  keywords: [
    "recipe nutrition calculator",
    "meal plan generator",
    "food substitution finder",
    "calorie calculator",
    "AI nutrition tool",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nutritools.ai",
    siteName: "NutriTools",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* AdSense — uncomment after approval:
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head> */}
      <body className="min-h-full flex flex-col bg-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
