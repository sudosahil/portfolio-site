"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tag } from "./Tag";

interface ProjectCardProps {
  index: number;
  name: string;
  type: string;
  year: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  flip?: boolean;
}

export function ProjectCard({
  index,
  name,
  type,
  year,
  description,
  techStack,
  liveUrl,
  flip = false,
}: ProjectCardProps) {
  return (
    <div className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center py-16 border-b border-[rgba(255,255,255,0.07)]`}>
      {/* Image placeholder */}
      <div className="w-full md:w-1/2 aspect-video bg-surface2 rounded-xl border border-[rgba(255,255,255,0.07)] flex items-center justify-center shrink-0">
        <span className="font-mono text-[11px] text-text-secondary tracking-widest uppercase">
          {type} · {year}
        </span>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <p className="font-mono text-[11px] text-text-secondary mb-2">
          {String(index).padStart(2, "0")}
        </p>
        <h3 className="text-[22px] font-semibold text-text-primary mb-2">{name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <Tag variant="accent">{type}</Tag>
          <span className="font-mono text-[11px] text-text-secondary">{year}</span>
        </div>
        <p className="text-[15px] text-text-secondary leading-[1.75] mb-5">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <Tag key={tech} variant="muted">{tech}</Tag>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          {liveUrl && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={liveUrl}
                target="_blank"
                className="inline-flex items-center gap-1 px-4 py-2 border border-[rgba(237,232,223,0.15)] text-warm text-[13px] rounded-lg hover:bg-[rgba(237,232,223,0.05)] transition-colors"
              >
                view live ↗
              </Link>
            </motion.div>
          )}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-4 py-2 border border-[rgba(255,255,255,0.07)] text-text-secondary text-[13px] rounded-lg hover:bg-[rgba(255,255,255,0.04)] transition-colors"
            >
              case study →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─── Row variant used on home page ─── */
interface ProjectRowProps {
  index: number;
  name: string;
  type: string;
  year: string;
  href?: string;
}

export function ProjectRow({ index, name, type, year, href = "#" }: ProjectRowProps) {
  return (
    <motion.div
      whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      transition={{ duration: 0.15 }}
    >
      <Link
        href={href}
        className="flex items-center gap-4 py-4 px-2 border-b border-[rgba(255,255,255,0.07)] cursor-pointer group"
      >
        <span className="font-mono text-[11px] text-text-secondary w-6 shrink-0">
          {String(index).padStart(2, "0")}
        </span>
        <span className="flex-1 text-[15px] font-medium text-text-primary group-hover:text-accent transition-colors">
          {name}
        </span>
        <Tag variant="accent">{type}</Tag>
        <span className="font-mono text-[11px] text-text-secondary hidden sm:block">{year}</span>
        <span className="text-text-secondary group-hover:text-accent transition-colors ml-2">↗</span>
      </Link>
    </motion.div>
  );
}
