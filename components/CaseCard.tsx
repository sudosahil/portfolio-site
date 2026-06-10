/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface CaseProject {
  name: string;
  tagline: string;
  description: string;
  liveUrl: string;
  category: string;
  industry: string;
  year: string;
}

function screenshotUrl(siteUrl: string) {
  return `https://api.microlink.io?url=${encodeURIComponent(
    siteUrl
  )}&screenshot=true&meta=false&embed=screenshot.url`;
}

/**
 * Büro-style case-study card: a media thumbnail with the project title,
 * plus category + industry meta.
 */
export function CaseCard({
  project,
  index,
}: {
  project: CaseProject;
  index: number;
}) {
  const [err, setErr] = useState(false);

  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      className="group block"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-paper2 border border-line">
        {!err ? (
          <img
            src={screenshotUrl(project.liveUrl)}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            loading="lazy"
            onError={() => setErr(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="display text-[12vw] md:text-[6vw] text-line">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.12em] bg-ink text-paper px-2 py-1">
          {project.year}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <span className="text-[20px] md:text-[26px] font-medium tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
          {project.name}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-grey shrink-0">
          {project.category}
        </span>
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-grey/70 mt-1">
        {project.industry}
      </p>
      <p className="text-[14px] leading-[1.6] text-grey-dark mt-3 max-w-md">
        {project.description}
      </p>
    </motion.a>
  );
}
