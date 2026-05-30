import { ReactNode } from "react";

type TagVariant = "ink" | "outline" | "red";

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  className?: string;
}

export function Tag({ children, variant = "outline", className = "" }: TagProps) {
  const variants: Record<TagVariant, string> = {
    ink: "bg-ink text-paper",
    outline: "border border-line text-ink",
    red: "bg-red text-paper",
  };

  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.08em] px-3 py-1 inline-block ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
