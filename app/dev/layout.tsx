import type { Metadata } from "next";
import { DevNav } from "@/components/dev/DevNav";
import { DevFooter } from "@/components/dev/DevFooter";
import { DevPreloader } from "@/components/dev/DevPreloader";
import { DevCursor } from "@/components/dev/DevCursor";
import "./dev.css";

// Fonts (Anton, Archivo, DM Mono, Instrument Serif) come from the root layout,
// so /dev shares the business site's type exactly.

export const metadata: Metadata = {
  title: {
    default: "Sahil Undale — Software Engineer",
    template: "%s — Sahil Undale",
  },
  description: "Software engineer based in Mumbai. Résumé, projects and contact.",
  openGraph: {
    title: "Sahil Undale — Software Engineer",
    description: "Résumé, projects and contact.",
    url: "https://sahilundale.in/dev",
  },
};

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dev-root flex min-h-screen flex-col">
      <DevPreloader />
      <DevCursor />
      <DevNav />
      <main className="flex-1">{children}</main>
      <DevFooter />
    </div>
  );
}
