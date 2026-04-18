import { ReactNode } from "react";

type TagVariant = "accent" | "warm" | "muted";

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  className?: string;
}

export function Tag({ children, variant = "muted", className = "" }: TagProps) {
  const variants: Record<TagVariant, string> = {
    accent:
      "bg-[rgba(139,143,255,0.12)] text-accent border border-[rgba(139,143,255,0.12)]",
    warm: "bg-[rgba(237,232,223,0.08)] text-warm border border-[rgba(237,232,223,0.15)]",
    muted:
      "bg-surface2 text-text-secondary border border-[rgba(255,255,255,0.07)]",
  };

  return (
    <span
      className={`font-mono text-[11px] rounded-md px-3 py-1 inline-block ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
