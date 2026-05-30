import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

/** Büro-style bracketed mono label, e.g. [ Vision ]. */
export function SectionLabel({
  children,
  className = "",
  dark = false,
}: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
        dark ? "text-paper/40" : "text-grey"
      } ${className}`}
    >
      [ {children} ]
    </p>
  );
}
