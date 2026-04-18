import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] tracking-[0.12em] text-accent uppercase mb-2.5 ${className}`}
    >
      {children}
    </p>
  );
}
