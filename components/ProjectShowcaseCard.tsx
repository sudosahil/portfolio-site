"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Tag } from "./Tag";

export interface ShowcaseProject {
  name: string;
  description: string;
  liveUrl: string;
  category: string;
  techStack: string[];
  year: string;
}

interface Props {
  project: ShowcaseProject;
  index: number;
}

// Microlink screenshot API — free, no key needed
function screenshotUrl(siteUrl: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}

export function ProjectShowcaseCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Raw motion values for mouse position (-0.5 → 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-smooth the rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 25,
  });

  // Glare position (percentage)
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-surface cursor-pointer group"
      >
        {/* ── Glare overlay ───────────────────────────────────────────── */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(139,143,255,0.12) 0%, transparent 65%)`
            ),
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* ── Browser chrome ──────────────────────────────────────────── */}
        <div className="bg-[rgba(22,22,28,0.95)] border-b border-[rgba(255,255,255,0.07)] px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,95,87,0.7)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,189,46,0.7)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[rgba(39,201,63,0.6)]" />
          </div>
          <div className="flex-1 bg-[rgba(255,255,255,0.05)] rounded-md px-3 py-1 min-w-0">
            <span className="font-mono text-[10px] text-text-secondary truncate block">
              {project.liveUrl.replace(/^https?:\/\//, "")}
            </span>
          </div>
          <span className="font-mono text-[10px] text-text-secondary shrink-0 opacity-50">
            {project.year}
          </span>
        </div>

        {/* ── Screenshot preview ──────────────────────────────────────── */}
        <div className="relative w-full aspect-[16/9] bg-surface2 overflow-hidden">
          {!imgError ? (
            <img
              src={screenshotUrl(project.liveUrl)}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback gradient when screenshot fails */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(139,143,255,0.12) 0%, transparent 70%)",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="4" y="4" width="28" height="22" rx="3" stroke="rgba(139,143,255,0.4)" strokeWidth="1.5" />
                <circle cx="10" cy="10" r="1.5" fill="rgba(139,143,255,0.4)" />
                <circle cx="15" cy="10" r="1.5" fill="rgba(139,143,255,0.4)" />
                <circle cx="20" cy="10" r="1.5" fill="rgba(139,143,255,0.4)" />
                <rect x="8" y="15" width="20" height="2" rx="1" fill="rgba(139,143,255,0.2)" />
                <rect x="8" y="19" width="14" height="2" rx="1" fill="rgba(139,143,255,0.15)" />
              </svg>
              <span className="font-mono text-[10px] text-text-secondary opacity-50">
                preview unavailable
              </span>
            </div>
          )}

          {/* Hover CTA overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-[rgba(14,14,18,0.75)] backdrop-blur-sm transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-warm text-bg text-[13px] font-medium rounded-lg hover:opacity-90 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              View live ↗
            </a>
          </div>
        </div>

        {/* ── Card body ───────────────────────────────────────────────── */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-[16px] font-semibold text-text-primary leading-snug">
              {project.name}
            </h3>
            <Tag variant="accent">{project.category}</Tag>
          </div>
          <p className="text-[13px] text-text-secondary leading-[1.7] mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => (
              <Tag key={tech} variant="muted">
                {tech}
              </Tag>
            ))}
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-accent hover:text-text-primary transition-colors"
          >
            <span>open project</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* ── Bottom edge glow on hover ────────────────────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,143,255,0.5), transparent)",
            opacity: hovered ? 1 : 0,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
