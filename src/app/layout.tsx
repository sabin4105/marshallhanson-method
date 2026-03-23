import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
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
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased overflow-x-clip selection:bg-stone-200 dark:bg-stone-950">
        <AOSInit />
        <Navbar />
        <div className="px-2 sm:px-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
