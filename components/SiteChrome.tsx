"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";
import { CustomCursor } from "./CustomCursor";

/**
 * Wraps pages in the business site's chrome (preloader, custom cursor, nav,
 * footer) — only on the freelance /studio track. The root landing page and
 * the recruiter-facing /dev track bring their own layouts and render bare.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const isStudio = pathname === "/studio" || pathname.startsWith("/studio/");

  if (!isStudio) {
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
