"use client";

import { useState } from "react";

/** Large mailto link with a copy-to-clipboard button. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  }

  return (
    <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-7">
      <a
        href={`mailto:${email}`}
        className="dev-underline break-all pb-1.5 text-[34px] font-light leading-[1.05] tracking-[-0.055em] sm:text-[52px] lg:text-[88px]"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="dev-mono h-11 shrink-0 rounded-full border border-[var(--dev-line-2)] px-[18px] text-[var(--dev-t2)] transition-colors hover:border-[var(--dev-a)] hover:text-[var(--dev-t1)]"
      >
        <span aria-live="polite">{copied ? "Copied ✓" : "Copy"}</span>
      </button>
    </div>
  );
}
