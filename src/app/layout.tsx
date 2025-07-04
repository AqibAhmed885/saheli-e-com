import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SAHALI - Timeless Elegance",
  description: "Discover sustainable fashion at SAHALI. Curated collections where timeless elegance meets modern sophistication.",
  keywords: "SAHALI, sustainable fashion, timeless elegance, modern clothing, ethical fashion, luxury apparel",
  authors: [{ name: "SAHALI Team" }],
  openGraph: {
    title: "SAHALI - Timeless Elegance",
    description: "Discover sustainable fashion at SAHALI. Curated collections where timeless elegance meets modern sophistication.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAHALI - Timeless Elegance",
    description: "Discover sustainable fashion at SAHALI. Curated collections where timeless elegance meets modern sophistication.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
