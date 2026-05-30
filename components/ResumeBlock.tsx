interface ResumeBlockProps {
  role: string;
  company: string;
  dateRange: string;
  bullets: string[];
}

export function ResumeBlock({ role, company, dateRange, bullets }: ResumeBlockProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-8 border-b border-line">
      <div className="md:col-span-4">
        <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight leading-[1.05]">
          {role}
        </h3>
        <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-red mt-2">
          {company}
        </p>
        <p className="font-mono text-[12px] text-grey mt-1">{dateRange}</p>
      </div>
      <ul className="md:col-span-7 md:col-start-6 space-y-2">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-[16px] leading-[1.6] text-grey-dark flex gap-3"
          >
            <span className="text-red shrink-0">↳</span>
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
