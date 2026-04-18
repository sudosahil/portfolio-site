"use client";

import { motion } from "framer-motion";

interface ResumeBlockProps {
  role: string;
  company: string;
  dateRange: string;
  bullets: string[];
}

export function ResumeBlock({ role, company, dateRange, bullets }: ResumeBlockProps) {
  return (
    <motion.div
      className="rounded-xl border border-[rgba(255,255,255,0.07)] p-6 bg-surface relative overflow-hidden transition-colors duration-200"
      style={{ borderLeft: "2px solid #8b8fff" }}
      whileHover={{ borderColor: "rgba(255,255,255,0.12)" }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-[15px] font-medium text-text-primary">{role}</h3>
          <p className="font-mono text-[12px] text-accent mt-0.5">{company}</p>
        </div>
        <span className="font-mono text-[11px] text-text-secondary whitespace-nowrap">
          {dateRange}
        </span>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="text-[14px] text-text-secondary leading-[1.8] flex gap-2"
          >
            <span className="text-accent mt-1 shrink-0">·</span>
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
