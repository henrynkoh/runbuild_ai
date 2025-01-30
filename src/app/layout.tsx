import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 개발 교육 플랫폼",
  description: "최신 AI 기술과 개발 트렌드를 배우고 실무에 적용하세요. 실전 프로젝트부터 기초 이론까지 체계적인 커리큘럼을 제공합니다.",
  keywords: "AI, 개발, 교육, 프로그래밍, 코딩, 온라인 강의",
  authors: [{ name: "AI 개발 교육 플랫폼" }],
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: "AI 개발 교육 플랫폼",
    description: "최신 AI 기술과 개발 트렌드를 배우고 실무에 적용하세요.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI 개발 교육 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI 개발 교육 플랫폼",
    description: "최신 AI 기술과 개발 트렌드를 배우고 실무에 적용하세요.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
    naver: 'your-naver-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
