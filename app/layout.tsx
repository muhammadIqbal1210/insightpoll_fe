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
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
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
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#01F2D1]/40 selection:text-black">
        {children}
      </body>
    </html>
  );
}
