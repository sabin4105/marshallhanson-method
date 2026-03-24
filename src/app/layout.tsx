import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import AOSInit from "@/components/AOSInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Marshall Hanson Dentistry | Aesthetic Oral Care",
  description: "Crafted care, long after your visit.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="antialiased selection:bg-stone-200 dark:bg-stone-950">
        <AOSInit />
        <div className="px-2">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
