import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insightpoll.id"),
  title: "InsightPoll.id — Platform Riset, Survei, Politik & Spatial Intelligence AI",
  description:
    "Platform intelligence analytics terdepan di Indonesia yang mengintegrasikan survei digital, Pol-Intelligence, evaluasi kebijakan (IKM), market analytics, dan Spatial GIS berbasis AI.",
  alternates: {
    canonical: "https://insightpoll.id",
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
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  keywords: [
    "InsightPoll",
    "Survei Politik",
    "Spatial Intelligence",
    "GIS Indonesia",
    "Pol-Intelligence",
    "Indeks Kepuasan Masyarakat",
    "AI Analytics",
    "Quick Count",
    "Elektabilitas",
  ],
  openGraph: {
    title: "InsightPoll.id — Platform Riset, Survei, Politik & Spatial Intelligence",
    description:
      "Pengambilan keputusan berbasis data secara cepat, akurat, dan real-time untuk pemerintah, korporasi, konsultan politik, dan lembaga riset.",
    url: "https://insightpoll.id",
    siteName: "InsightPoll.id",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "InsightPoll.id Platform Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InsightPoll.id — Platform Riset, Survei, Politik & Spatial Intelligence",
    description:
      "Platform intelligence analytics terdepan di Indonesia yang mengintegrasikan survei digital, Pol-Intelligence, evaluasi kebijakan (IKM), market analytics, dan Spatial GIS berbasis AI.",
    images: ["/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InsightPoll.id",
    url: "https://insightpoll.id",
    logo: "https://insightpoll.id/logo.webp",
    description:
      "Platform intelligence analytics terdepan di Indonesia yang mengintegrasikan survei digital, Pol-Intelligence, evaluasi kebijakan (IKM), market analytics, dan Spatial GIS berbasis AI.",
    sameAs: [],
  };

  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#01F2D1]/40 selection:text-black">
        {children}
      </body>
    </html>
  );
}
