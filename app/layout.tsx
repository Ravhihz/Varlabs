import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const BASE_URL = "https://varlabs.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "VarLab — Where Products Are Born",
    template: "%s | VarLab",
  },
  description:
    "VarLab is the product lab under Varverse. We research, build, and ship AI-native tools that solve real problems — from CV scanners to supply chain transparency.",
  keywords: [
    "VarLab", "Varverse", "product lab", "AI tools", "Indonesia startup",
    "Varion AI", "Feascale", "ATS scanner", "UMKM calculator", "Next.js",
  ],
  authors: [{ name: "Varverse", url: "https://www.varverse.biz.id" }],
  creator: "Varverse",
  publisher: "Varverse",

  // Indexing
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

  // Canonical
  alternates: {
    canonical: BASE_URL,
  },

  // Open Graph
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "VarLab",
    title: "VarLab — Where Products Are Born",
    description:
      "VarLab is the R&D arm of Varverse. We build focused, AI-native products that solve real problems — fast, clean, and shipped to the world.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VarLab — Where Products Are Born",
      },
    ],
    locale: "en_US",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "VarLab — Where Products Are Born",
    description:
      "VarLab is the R&D arm of Varverse. We build focused, AI-native products that solve real problems.",
    images: ["/og-image.png"],
    creator: "@varverse",
  },

  // Icons
  icons: {
    icon: "/Logo (2).png",
    apple: "/Logo (2).png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
