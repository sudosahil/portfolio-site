import type { Metadata } from "next";
import { Anton, Archivo, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahil Undale — Web Developer · Mumbai & Pune",
  description:
    "Web developer based in Mumbai & Pune. I build fast, professional websites for small and medium businesses — from business sites to e-commerce stores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="bg-paper text-ink font-sans antialiased min-h-screen flex flex-col">
        <Preloader />
        <CustomCursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
