import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajini by The Waters",
  description: "A serene hotel in Sri Lanka, offering a peaceful retreat amidst nature.",
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
        sizes: 'any'
      },
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        url: '/favicon/apple-touch-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        url: '/favicon/apple-touch-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'android-chrome-512x512',
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  manifest: '/favicon/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Rajini by The Waters'
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajinihotels.com',
    siteName: 'Rajini by The Waters',
    title: 'Rajini by The Waters',
    description: 'A serene hotel in Sri Lanka, offering a peaceful retreat amidst nature.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rajini by The Waters'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
