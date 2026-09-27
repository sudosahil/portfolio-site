import { devProfile } from "@/lib/dev-content";

export function DevFooter() {
  const links = [
    { href: `mailto:${devProfile.email}`, label: "Email" },
    { href: devProfile.linkedin, label: "LinkedIn" },
    { href: devProfile.github, label: "GitHub" },
    { href: devProfile.resume, label: "Résumé" },
  ];
  return (
    <footer className="border-t border-[var(--dev-line)]">
      <div className="dev-mono mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-10 text-[var(--dev-t3)] md:h-[120px] md:flex-row md:items-center md:justify-between md:px-16 md:py-0">
        <span>© {new Date().getFullYear()} {devProfile.name}</span>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[var(--dev-t2)] transition-colors hover:text-[var(--dev-t1)]"
            >
              {l.label}
            </a>
          ))}
        </div>
        <span>sahilundale.in/dev</span>
      </div>
    </footer>
  );
}
