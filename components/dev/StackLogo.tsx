import { stackLogos, type StackKey } from "@/lib/dev-stack";

/** Single-colour brand logo (inherits currentColor) with an accessible name. */
export function StackLogo({ id, size = 20, className = "" }: { id: StackKey; size?: number; className?: string }) {
  const logo = stackLogos[id];
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} role="img" aria-label={logo.name} fill="currentColor" className={className}>
      <path d={logo.path} />
    </svg>
  );
}

/** Logo + label chip, in the site's square outline tag style. */
export function StackChip({ id }: { id: StackKey }) {
  return (
    <span className="inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-white transition-colors hover:border-blue hover:text-blue">
      <StackLogo id={id} size={14} />
      {stackLogos[id].name}
    </span>
  );
}
