import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VarLab — Where Products Are Born",
  description:
    "VarLab is the product lab under Varverse. We research, build, and ship tools that solve real problems — from AI-powered career tools to supply chain transparency systems.",
  icons: {
    icon: "/favicon.svg",
    apple: "/Varlabs.png",
  },
  openGraph: {
    title: "VarLab — Where Products Are Born",
    description: "Products built at the intersection of AI, design, and real-world utility.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
