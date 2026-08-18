import type { Metadata, Viewport } from "next";
import { Anton, Archivo, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

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

const siteUrl = "https://sahilundale.in";
const ogImage = "/sahil-undale-web-developer-mumbai-pune.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sahil Undale — Web Developer · Mumbai & Pune",
  description:
    "Web developer based in Mumbai & Pune, building websites for small businesses. Fast turnaround, no jargon, direct communication.",
  openGraph: {
    title: "Sahil Undale — Web Developer · Mumbai & Pune",
    description:
      "Web developer based in Mumbai & Pune, building websites for small businesses. Fast turnaround, no jargon, direct communication.",
    url: siteUrl,
    siteName: "Sahil Undale",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Sahil Undale — Web Developer, Mumbai & Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Undale — Web Developer · Mumbai & Pune",
    description:
      "Web developer based in Mumbai & Pune, building websites for small businesses.",
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sahil Undale",
              url: siteUrl,
              jobTitle: "Web Developer",
              image: `${siteUrl}${ogImage}`,
              worksFor: {
                "@type": "Organization",
                name: "TheoremLabs India",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              sameAs: [],
            }),
          }}
        />
        <Preloader />
        <CustomCursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
