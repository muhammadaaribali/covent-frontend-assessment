import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Covent | A simpler way to sell your home",
  description: "A sample home-seller landing page scaffold for Covent.",
  openGraph: {
    title: "Covent | A simpler way to sell your home",
    description: "A sample home-seller landing page scaffold for Covent.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
