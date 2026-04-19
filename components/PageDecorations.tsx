"use client";

import { motion } from "framer-motion";

// ─── Primitive building blocks ──────────────────────────────────────────────

function BrowserChrome({ url }: { url: string }) {
  return (
    <div
      style={{
        width: 240,
        background: "rgba(18,18,24,0.7)",
        border: "1px solid rgba(139,143,255,0.14)",
        borderRadius: 9,
        overflow: "hidden",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        style={{
          padding: "7px 10px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.55)" }} />
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,189,46,0.55)" }} />
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(39,201,63,0.45)" }} />
        <span
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 9,
            color: "rgba(139,143,255,0.45)",
          }}
        >
          {url}
        </span>
      </div>
      <div style={{ padding: "9px 12px", display: "flex", flexDirection: "column", gap: 5 }}>
        {[70, 95, 55, 80, 38].map((w, i) => (
          <div
            key={i}
            style={{
              height: 5,
              width: `${w}%`,
              background: i === 1 ? "rgba(139,143,255,0.18)" : "rgba(255,255,255,0.05)",
              borderRadius: 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Terminal({ lines }: { lines: string[] }) {
  return (
    <div
      style={{
        width: 220,
        background: "rgba(10,10,14,0.8)",
        border: "1px solid rgba(139,143,255,0.15)",
        borderRadius: 9,
        overflow: "hidden",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        style={{
          padding: "6px 10px",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.55)" }} />
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,189,46,0.55)" }} />
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(39,201,63,0.45)" }} />
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "rgba(255,255,255,0.2)", marginLeft: 6 }}>
          zsh
        </span>
      </div>
      <div style={{ padding: "9px 12px", display: "flex", flexDirection: "column", gap: 3 }}>
        {lines.map((line, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: i === lines.length - 1 ? "rgba(139,143,255,0.6)" : "rgba(255,255,255,0.3)",
              display: "block",
            }}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <div
      style={{
        width: 200,
        background: "rgba(18,18,24,0.72)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 8,
        padding: "10px 14px",
        backdropFilter: "blur(3px)",
      }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            lineHeight: 1.7,
            whiteSpace: "pre",
            color:
              line.startsWith("//")
                ? "rgba(139,143,255,0.45)"
                : line.startsWith("const") || line.startsWith("export") || line.startsWith("return") || line.startsWith("import")
                ? "rgba(237,232,223,0.5)"
                : "rgba(255,255,255,0.25)",
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

function Badge({ label, value, green }: { label: string; value: string; green?: boolean }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "5px 10px",
        background: "rgba(18,18,24,0.75)",
        border: `1px solid ${green ? "rgba(39,201,63,0.2)" : "rgba(139,143,255,0.15)"}`,
        borderRadius: 20,
        backdropFilter: "blur(3px)",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: green ? "rgba(39,201,63,0.7)" : "rgba(139,143,255,0.7)",
          flexShrink: 0,
        }}
      />
      <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9.5, color: "rgba(255,255,255,0.35)" }}>
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 9.5,
          color: green ? "rgba(39,201,63,0.75)" : "rgba(139,143,255,0.75)",
          fontWeight: 500,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function CursorIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={Math.floor(size * 1.27)} viewBox="0 0 22 28" fill="none">
      <path
        d="M0 0 L0 22 L5.5 16.5 L9.5 24 L12 23 L8 15.5 L15.5 15.5 Z"
        fill="#ede8df"
        fillOpacity="0.5"
      />
    </svg>
  );
}

function DotGrid() {
  const dots = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 12; c++) {
      dots.push(<circle key={`${r}-${c}`} cx={c * 18} cy={r * 18} r="1" fill="rgba(139,143,255,0.04)" />);
    }
  }
  return (
    <svg width={12 * 18} height={8 * 18} viewBox={`0 0 ${12 * 18} ${8 * 18}`}>
      {dots}
    </svg>
  );
}

// ─── Floating wrapper ───────────────────────────────────────────────────────

interface FloatProps {
  style: React.CSSProperties;
  drift?: number;
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

function Float({ style, drift = 10, delay = 0, duration = 7, className, children }: FloatProps) {
  return (
    <motion.div
      className={className}
      style={{ position: "fixed", pointerEvents: "none", zIndex: 0, ...style }}
      animate={{ y: [0, drift, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────
// Fixed, behind all content, always visible at very low opacity.
// Excluded from the hero section — the ScrollyHero has its own animated layer.

export function PageDecorations() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Dot grid — top left quadrant */}
      <div style={{ position: "fixed", top: 60, left: 20, opacity: 0.6 }}>
        <DotGrid />
      </div>

      {/* Dot grid — bottom right quadrant */}
      <div style={{ position: "fixed", bottom: 60, right: 20, opacity: 0.4 }}>
        <DotGrid />
      </div>

      {/* Browser chrome — top right */}
      <Float className="hidden md:block" style={{ top: "8%", right: "3%", opacity: 0.18 }} drift={8} delay={0} duration={8}>
        <BrowserChrome url="sahilundale.in" />
      </Float>

      {/* Terminal — bottom right */}
      <Float className="hidden md:block" style={{ bottom: "12%", right: "3%", opacity: 0.16 }} drift={12} delay={1.5} duration={9}>
        <Terminal
          lines={["$ npm run build", "✓ compiled", "✓ generating pages", "✓ ready in 1.8s"]}
        />
      </Float>

      {/* Code block — top left */}
      <Float className="hidden md:block" style={{ top: "14%", left: "2%", opacity: 0.14 }} drift={7} delay={0.8} duration={10}>
        <CodeBlock
          lines={[
            "// hero section",
            "export default",
            "  function Page() {",
            "  return <Hero />",
            "}",
          ]}
        />
      </Float>

      {/* Code block — mid right, lower */}
      <Float className="hidden md:block" style={{ top: "52%", right: "2.5%", opacity: 0.12 }} drift={9} delay={2.5} duration={11}>
        <CodeBlock
          lines={[
            "const config = {",
            "  seo: 100,",
            "  perf: 99,",
            "  a11y: 97,",
            "}",
          ]}
        />
      </Float>

      {/* Metric badges — bottom left */}
      <Float style={{ bottom: "16%", left: "2.5%", opacity: 0.18 }} drift={10} delay={1} duration={8.5}>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <Badge label="Performance" value="99/100" green />
          <Badge label="SEO Score" value="100/100" green />
          <Badge label="Load time" value="< 1.2s" green />
        </div>
      </Float>

      {/* Metric badge — mid left */}
      <Float style={{ top: "42%", left: "2%", opacity: 0.14 }} drift={8} delay={3} duration={9}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Badge label="Uptime" value="99.9%" green />
          <Badge label="Deploy" value="✓ live" green />
        </div>
      </Float>

      {/* Cursor — top center-right */}
      <Float style={{ top: "22%", left: "55%", opacity: 0.2 }} drift={6} delay={0.4} duration={7}>
        <CursorIcon size={22} />
      </Float>

      {/* Cursor — bottom center-left */}
      <Float style={{ bottom: "28%", left: "42%", opacity: 0.15 }} drift={7} delay={2} duration={8}>
        <CursorIcon size={18} />
      </Float>

      {/* Second terminal — mid left, higher */}
      <Float className="hidden md:block" style={{ top: "62%", left: "1.5%", opacity: 0.12 }} drift={11} delay={4} duration={12}>
        <Terminal lines={["$ git push origin main", "→ deployed to vercel", "✓ live at sahilundale.in"]} />
      </Float>

      {/* Mini browser — bottom center */}
      <Float className="hidden md:block" style={{ bottom: "6%", left: "38%", opacity: 0.1 }} drift={6} delay={1.8} duration={9.5}>
        <BrowserChrome url="localhost:3000" />
      </Float>
    </div>
  );
}
