"use client";

import { motion } from "framer-motion";

interface CursorObjectProps {
  activeBeat: number;
}

// ─── Dot-grid background ───────────────────────────────────────────────────
function DotGrid({ cols = 18, rows = 12 }: { cols?: number; rows?: number }) {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * 14}
          cy={r * 14}
          r="1.1"
          fill="rgba(139,143,255,0.055)"
        />
      );
    }
  }
  return (
    <svg
      width={cols * 14}
      height={rows * 14}
      viewBox={`0 0 ${cols * 14} ${rows * 14}`}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {dots}
    </svg>
  );
}

// ─── Mini browser window ───────────────────────────────────────────────────
function BrowserWindow({ label }: { label: string }) {
  return (
    <div
      style={{
        width: 280,
        background: "rgba(22,22,28,0.85)",
        border: "1px solid rgba(139,143,255,0.18)",
        borderRadius: 10,
        overflow: "hidden",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          padding: "8px 12px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.6)" }}
        />
        <span
          style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,189,46,0.6)" }}
        />
        <span
          style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(39,201,63,0.5)" }}
        />
        <span
          style={{
            marginLeft: 8,
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 9,
            color: "rgba(139,143,255,0.5)",
            flex: 1,
            textAlign: "center",
          }}
        >
          {label}
        </span>
      </div>
      {/* Body: fake lines */}
      <div style={{ padding: "10px 14px", display: "flex", flexDirection: "column", gap: 5 }}>
        {[70, 100, 55, 85, 40].map((w, i) => (
          <div
            key={i}
            style={{
              height: 6,
              width: `${w}%`,
              background: i === 2 ? "rgba(139,143,255,0.25)" : "rgba(255,255,255,0.07)",
              borderRadius: 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Terminal block ────────────────────────────────────────────────────────
function Terminal({ lines }: { lines: string[] }) {
  return (
    <div
      style={{
        width: 260,
        background: "rgba(14,14,18,0.9)",
        border: "1px solid rgba(139,143,255,0.2)",
        borderRadius: 10,
        overflow: "hidden",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          padding: "7px 12px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,95,87,0.6)" }}
        />
        <span
          style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(255,189,46,0.6)" }}
        />
        <span
          style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(39,201,63,0.5)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 9,
            color: "rgba(255,255,255,0.25)",
            marginLeft: 8,
          }}
        >
          terminal
        </span>
      </div>
      <div style={{ padding: "10px 14px", display: "flex", flexDirection: "column", gap: 4 }}>
        {lines.map((line, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: i === lines.length - 1 ? "#8b8fff" : "rgba(255,255,255,0.45)",
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

// ─── Code snippet card ─────────────────────────────────────────────────────
function CodeSnippet({ code }: { code: string[] }) {
  return (
    <div
      style={{
        width: 230,
        background: "rgba(22,22,28,0.88)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 8,
        padding: "12px 16px",
        backdropFilter: "blur(4px)",
      }}
    >
      {code.map((line, i) => (
        <div
          key={i}
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            color:
              line.startsWith("//")
                ? "rgba(139,143,255,0.55)"
                : line.startsWith("const") || line.startsWith("export") || line.startsWith("return")
                ? "rgba(237,232,223,0.7)"
                : "rgba(255,255,255,0.38)",
            lineHeight: 1.7,
            whiteSpace: "pre",
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

// ─── Metric badge ──────────────────────────────────────────────────────────
function MetricBadge({ label, value, good }: { label: string; value: string; good?: boolean }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        background: "rgba(22,22,28,0.85)",
        border: `1px solid ${good ? "rgba(39,201,63,0.25)" : "rgba(139,143,255,0.2)"}`,
        borderRadius: 20,
        backdropFilter: "blur(4px)",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: good ? "rgba(39,201,63,0.8)" : "#8b8fff",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          color: "rgba(255,255,255,0.5)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          color: good ? "rgba(39,201,63,0.9)" : "#8b8fff",
          fontWeight: 500,
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ─── SVG cursor ───────────────────────────────────────────────────────────
function CursorSVG({ opacity = 0.6 }: { opacity?: number }) {
  return (
    <svg
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      style={{ opacity, filter: "drop-shadow(0 4px 10px rgba(139,143,255,0.35))" }}
    >
      <path
        d="M0 0 L0 22 L5.5 16.5 L9.5 24 L12 23 L8 15.5 L15.5 15.5 Z"
        fill="#ede8df"
        fillOpacity="0.75"
      />
    </svg>
  );
}

// ─── Floating element wrapper ──────────────────────────────────────────────
interface FloatProps {
  style: React.CSSProperties;
  delay?: number;
  driftY?: number;
  visible: boolean;
  children: React.ReactNode;
}

function Float({ style, delay = 0, driftY = 8, visible, children }: FloatProps) {
  return (
    <motion.div
      style={{ position: "absolute", pointerEvents: "none", ...style }}
      animate={visible ? { opacity: style.opacity as number ?? 1, y: [0, driftY, 0] } : { opacity: 0, y: 0 }}
      transition={
        visible
          ? {
              opacity: { duration: 0.55, ease: "easeOut" },
              y: {
                duration: 5 + delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
            }
          : { opacity: { duration: 0.4, ease: "easeIn" } }
      }
    >
      {children}
    </motion.div>
  );
}

// ─── Per-beat visibility config ────────────────────────────────────────────
// Each element has a list of beats where it's visible
const BEAT_ELEMENTS: Record<
  string,
  { beats: number[]; opacity: number; style: React.CSSProperties; delay?: number; drift?: number }
> = {
  // Top-right browser window
  browserTopRight: {
    beats: [1, 2],
    opacity: 0.55,
    style: { top: "9%", right: "5%", zIndex: 5 },
    delay: 0,
    drift: 7,
  },
  // Bottom-right terminal
  terminalBottomRight: {
    beats: [1, 3, 4],
    opacity: 0.45,
    style: { bottom: "12%", right: "4%", zIndex: 5 },
    delay: 1.2,
    drift: 10,
  },
  // Top-left code snippet
  codeTopLeft: {
    beats: [2, 3],
    opacity: 0.45,
    style: { top: "8%", left: "4%", zIndex: 5 },
    delay: 0.5,
    drift: 6,
  },
  // Bottom-left metric badges (stacked)
  metricsBottomLeft: {
    beats: [3, 4, 5],
    opacity: 0.55,
    style: { bottom: "14%", left: "4%", zIndex: 5 },
    delay: 0.8,
    drift: 9,
  },
  // Mid-right code snippet (beat 4+5)
  codeMidRight: {
    beats: [4, 5],
    opacity: 0.4,
    style: { top: "38%", right: "4%", zIndex: 5 },
    delay: 1.5,
    drift: 7,
  },
  // Top-center cursor (beat 1)
  cursorTopCenter: {
    beats: [1],
    opacity: 0.5,
    style: { top: "18%", left: "48%", zIndex: 6 },
    delay: 0.3,
    drift: 5,
  },
  // Mid-left browser (beat 2, 5)
  browserMidLeft: {
    beats: [2, 5],
    opacity: 0.38,
    style: { top: "35%", left: "4%", zIndex: 5 },
    delay: 2,
    drift: 8,
  },
  // Bottom-center cursor (beat 3)
  cursorBottomCenter: {
    beats: [3],
    opacity: 0.45,
    style: { bottom: "22%", left: "47%", zIndex: 6 },
    delay: 0.6,
    drift: 6,
  },
  // Right-mid metric (beat 2)
  metricMidRight: {
    beats: [2, 4],
    opacity: 0.5,
    style: { top: "62%", right: "6%", zIndex: 5 },
    delay: 1,
    drift: 8,
  },
  // Top tag (beat 5)
  metricTopLeft2: {
    beats: [5],
    opacity: 0.45,
    style: { top: "15%", left: "5%", zIndex: 5 },
    delay: 0.4,
    drift: 7,
  },
  // Mid top right cursor (beat 4)
  cursorMidRight: {
    beats: [4],
    opacity: 0.5,
    style: { top: "22%", right: "6%", zIndex: 6 },
    delay: 0.9,
    drift: 5,
  },
};

// ─── Render the right element per key ────────────────────────────────────
function renderElement(key: string) {
  switch (key) {
    case "browserTopRight":
    case "browserMidLeft":
      return <BrowserWindow label={key === "browserTopRight" ? "sahilundale.in" : "client-store.in"} />;
    case "terminalBottomRight":
      return (
        <Terminal
          lines={[
            "$ npm run build",
            "✓ compiled successfully",
            "✓ collecting page data",
            "✓ generating pages",
            "✓ ready in 1.8s",
          ]}
        />
      );
    case "codeTopLeft":
      return (
        <CodeSnippet
          code={[
            "// page component",
            "export default function Page() {",
            "  return (",
            '    <main className="hero">',
            "      <HeroSection />",
            "    </main>",
            "  )",
            "}",
          ]}
        />
      );
    case "codeMidRight":
      return (
        <CodeSnippet
          code={[
            "// performance",
            "const score = {",
            "  performance: 99,",
            "  seo: 100,",
            "  a11y: 97,",
            "}",
          ]}
        />
      );
    case "metricsBottomLeft":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <MetricBadge label="Performance" value="99/100" good />
          <MetricBadge label="SEO Score" value="100/100" good />
          <MetricBadge label="Load Time" value="< 1.2s" good />
          <MetricBadge label="Uptime" value="99.9%" />
        </div>
      );
    case "metricMidRight":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <MetricBadge label="Conversion" value="+34%" good />
          <MetricBadge label="Bounce Rate" value="-18%" good />
        </div>
      );
    case "metricTopLeft2":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <MetricBadge label="Build" value="✓ passed" good />
          <MetricBadge label="Deploy" value="live" good />
        </div>
      );
    case "cursorTopCenter":
    case "cursorBottomCenter":
    case "cursorMidRight":
      return <CursorSVG opacity={0.7} />;
    default:
      return null;
  }
}

// ─── Main export ───────────────────────────────────────────────────────────
export function CursorObject({ activeBeat }: CursorObjectProps) {
  return (
    <>
      {/* Dot-grid at absolute layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <DotGrid cols={22} rows={14} />
      </div>

      {/* Floating elements */}
      {Object.entries(BEAT_ELEMENTS).map(([key, cfg]) => {
        const visible = cfg.beats.includes(activeBeat);
        return (
          <Float
            key={key}
            style={{ ...cfg.style, opacity: visible ? cfg.opacity : 0 }}
            delay={cfg.delay}
            driftY={cfg.drift}
            visible={visible}
          >
            {renderElement(key)}
          </Float>
        );
      })}
    </>
  );
}
