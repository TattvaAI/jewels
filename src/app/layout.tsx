import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ProductDrawer } from "@/components/ProductDrawer";
import { ConciergeModal } from "@/components/ConciergeModal";

export const metadata: Metadata = {
  title: "EIRENƎ JEWELS • Contemporary Demi-Fine Atelier",
  description:
    "Sculpted stillness for the daily ritual. Anti-tarnish, 100% waterproof 18K micro-vermeil jewellery with marine 316L cores. Handcrafted provenance from Ambala.",
  keywords: [
    "Eirene Jewels",
    "demi fine jewelry",
    "anti tarnish jewelry",
    "waterproof gold necklace",
    "18k gold vermeil",
    "aesthetic jewelry India",
    "baroque pearl choker",
    "earrings studs",
    "luxury jewelry Ambala",
  ],
  openGraph: {
    title: "EIRENƎ JEWELS • Contemporary Demi-Fine Atelier",
    description:
      "Anti-tarnish, waterproof 18K gold micro-vermeil jewellery. Sculpted stillness for the daily ritual.",
    url: "https://eirenejewels.com",
    siteName: "EIRENƎ JEWELS",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#121110] antialiased selection:bg-[#121110] selection:text-[#FAF8F5]">
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Global Drawers & Dialogs */}
        <CartDrawer />
        <ProductDrawer />
        <ConciergeModal />
      </body>
    </html>
  );
}
