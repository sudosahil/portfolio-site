import type { Metadata } from "next";
import localFont from "next/font/local";
import { Martian_Mono } from "next/font/google";
import { DevNav } from "@/components/dev/DevNav";
import { DevFooter } from "@/components/dev/DevFooter";
import "./dev.css";

// Host Grotesk isn't in next/font/google's list for Next 14, so it ships locally (SIL OFL, see fonts/).
const hostGrotesk = localFont({
  src: "./fonts/HostGrotesk-latin-wght.woff2",
  weight: "300 800",
  variable: "--font-host",
  display: "swap",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-martian",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sahil Undale — Software Engineer",
    template: "%s — Sahil Undale",
  },
  description:
    "Software engineer building full-stack systems, backends and applied-AI tools. Experience, technical work and résumé.",
  openGraph: {
    title: "Sahil Undale — Software Engineer",
    description: "Full-stack systems, backends and applied-AI tools.",
    url: "https://sahilundale.in/dev",
  },
};

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`dev-root ${hostGrotesk.variable} ${martianMono.variable} flex min-h-screen flex-col`}>
      <DevNav />
      <main className="flex-1 pt-[60px] md:pt-[72px]">{children}</main>
      <DevFooter />
    </div>
  );
}
