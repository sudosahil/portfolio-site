"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";
import { CustomCursor } from "./CustomCursor";

/**
 * Wraps pages in the business site's chrome (preloader, custom cursor, nav,
 * footer). The recruiter-facing /dev track brings its own layout, so it
 * renders bare here. Every other route renders exactly as before.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const isDevTrack = pathname === "/dev" || pathname.startsWith("/dev/");

  if (isDevTrack) {
    return <>{children}</>;
  }

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
