import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "سند الركن | للمحاسبة والاستشارات المالية",

  description:
    "سند الركن للمحاسبة والاستشارات المالية — حلول محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

  icons: {
    icon: "/public.jpeg",
    shortcut: "/public.jpeg",
    apple: "/public.jpeg",
  },

  openGraph: {
    title: "سند الركن | للمحاسبة والاستشارات المالية",

    description:
      "حلول محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

    url: "https://sanad-alrukn-official.vercel.app",

    siteName: "سند الركن",

    locale: "ar_SA",

    type: "website",

    images: [
      {
        url: "https://sanad-alrukn-official.vercel.app/public.jpeg",
        width: 1200,
        height: 630,
        alt: "سند الركن للمحاسبة والاستشارات المالية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "سند الركن | للمحاسبة والاستشارات المالية",

    description:
      "حلول محاسبية ومالية تساعدك على إدارة أعمالك بثقة.",

    images: [
      "https://sanad-alrukn-official.vercel.app/public.jpeg",
    ],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}