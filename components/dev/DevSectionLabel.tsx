import { ReactNode } from "react";

/** Mono index label for the /dev track, e.g. "01 — About". */
export function DevSectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`dev-mono m-0 text-[var(--dev-t3)] ${className}`}>{children}</p>;
}
