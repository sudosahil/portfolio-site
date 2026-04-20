import Link from "next/link";
import { Badge } from "@/components/Badge";
// For CTAs, we'll use simple CSS classes

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-6 relative z-[20]">
      <div className="w-full max-w-2xl animate-fade-in-up">
        {/* ── Avatar + name ────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: "rgba(139,143,255,0.1)",
              border: "1px solid rgba(139,143,255,0.22)",
            }}
          >
            <span className="font-mono text-[15px] font-medium text-accent">
              SU
            </span>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.12em] text-text-secondary uppercase mb-1">
              web developer · mumbai, india
            </p>
            <h1 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.03em] text-text-primary leading-none">
              Sahil Undale
            </h1>
          </div>
        </div>

        {/* ── Statement ────────────────────────────────────────────────── */}
        <div>
          <h2 className="text-[40px] md:text-[58px] lg:text-[68px] font-semibold tracking-[-0.04em] text-text-primary leading-[1.05] mb-8">
            I build websites
            <br className="hidden md:block" />
            <em
              className="not-italic font-normal"
              style={{ color: "#8888a8", fontFamily: "var(--font-instrument-serif), serif", fontStyle: "italic" }}
            >
              {" "}businesses actually
            </em>
            <br className="hidden md:block" />
            {" "}need.
          </h2>
        </div>

        {/* ── Status badges ────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[11px]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8888a8" }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgba(39,201,63,0.8)" }} />
            Available for projects
          </span>
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[11px]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8888a8" }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgba(139,143,255,0.8)" }} />
            Director · TheoremLabs India
          </span>
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[11px]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8888a8" }}
          >
            Mumbai, India
          </span>
        </div>

        {/* ── CTAs ─────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/what-i-do"
            className="inline-flex items-center px-6 py-3 text-[14px] font-medium rounded-lg hover:scale-[1.02] active:scale-[0.97] transition-transform"
            style={{ background: "#ede8df", color: "#0e0e12" }}
          >
            What I do →
          </Link>
          <Link
            href="/my-projects"
            className="inline-flex items-center px-6 py-3 text-[14px] rounded-lg transition-all hover:text-text-primary hover:border-[rgba(237,232,223,0.25)] hover:scale-[1.02] active:scale-[0.97]"
            style={{ border: "1px solid rgba(237,232,223,0.12)", color: "#8888a8" }}
          >
            My projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-[14px] rounded-lg transition-all hover:text-text-primary hover:border-[rgba(237,232,223,0.25)] hover:scale-[1.02] active:scale-[0.97]"
            style={{ border: "1px solid rgba(237,232,223,0.12)", color: "#8888a8" }}
          >
            Get in touch
          </Link>
        </div>

        {/* ── Footer note ──────────────────────────────────────────────── */}
        <div className="mt-12 opacity-60">
          <p className="font-mono text-[11px] text-text-secondary">
            sahil22undale@gmail.com · sahilundale.in
          </p>
        </div>
      </div>
    </div>
  );
}
