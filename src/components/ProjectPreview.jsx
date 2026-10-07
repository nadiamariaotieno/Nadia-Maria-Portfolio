function FinancePreview() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" role="img" aria-label="Abstract preview of a finance dashboard layout">
      <rect width="640" height="400" fill="currentColor" className="text-bg" />
      <rect x="24" y="24" width="592" height="352" rx="16" fill="none" stroke="currentColor" className="text-line" />
      <rect x="48" y="52" width="160" height="12" rx="6" fill="currentColor" className="text-accent" opacity="0.8" />
      <rect x="48" y="84" width="220" height="8" rx="4" fill="currentColor" className="text-line" />
      <rect x="48" y="128" width="168" height="88" rx="12" fill="currentColor" className="text-elev" stroke="currentColor" />
      <rect x="232" y="128" width="168" height="88" rx="12" fill="currentColor" className="text-elev" stroke="currentColor" />
      <rect x="416" y="128" width="168" height="88" rx="12" fill="currentColor" className="text-elev" stroke="currentColor" />
      <rect x="64" y="148" width="72" height="8" rx="4" fill="currentColor" className="text-muted" />
      <rect x="64" y="168" width="110" height="16" rx="4" fill="currentColor" className="text-ink" opacity="0.5" />
      <rect x="248" y="148" width="72" height="8" rx="4" fill="currentColor" className="text-muted" />
      <rect x="248" y="168" width="96" height="16" rx="4" fill="currentColor" className="text-ink" opacity="0.5" />
      <rect x="432" y="148" width="72" height="8" rx="4" fill="currentColor" className="text-muted" />
      <rect x="432" y="168" width="120" height="16" rx="4" fill="currentColor" className="text-ink" opacity="0.5" />
      <rect x="48" y="236" width="536" height="116" rx="12" fill="currentColor" className="text-elev" stroke="currentColor" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={i}
          x={76 + i * 60}
          y={268 + (i % 3) * 12}
          width="28"
          height={60 - (i % 3) * 12}
          rx="4"
          fill="currentColor"
          className="text-accent"
          opacity={0.35 + (i % 4) * 0.15}
        />
      ))}
    </svg>
  )
}

function FarmPreview() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" role="img" aria-label="Abstract preview of a farm records layout">
      <rect width="640" height="400" fill="currentColor" className="text-bg" />
      <rect x="24" y="24" width="592" height="352" rx="16" fill="none" stroke="currentColor" className="text-line" />
      <circle cx="86" cy="78" r="18" fill="currentColor" className="text-accent" opacity="0.7" />
      <rect x="118" y="66" width="140" height="10" rx="5" fill="currentColor" className="text-ink" opacity="0.55" />
      <rect x="118" y="84" width="90" height="8" rx="4" fill="currentColor" className="text-line" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect
            x={48 + (i % 3) * 180}
            y={128 + Math.floor(i / 3) * 110}
            width="164"
            height="96"
            rx="14"
            fill="currentColor"
            className="text-elev"
            stroke="currentColor"
          />
          <rect
            x={64 + (i % 3) * 180}
            y={148 + Math.floor(i / 3) * 110}
            width="88"
            height="8"
            rx="4"
            fill="currentColor"
            className="text-muted"
          />
          <rect
            x={64 + (i % 3) * 180}
            y={168 + Math.floor(i / 3) * 110}
            width="120"
            height="28"
            rx="6"
            fill="currentColor"
            className="text-accent-soft"
          />
        </g>
      ))}
    </svg>
  )
}

function PortfolioPreview() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" role="img" aria-label="Abstract preview of this portfolio layout">
      <rect width="640" height="400" fill="currentColor" className="text-bg" />
      <rect x="24" y="24" width="592" height="352" rx="16" fill="none" stroke="currentColor" className="text-line" />
      <rect x="56" y="56" width="36" height="10" rx="5" fill="currentColor" className="text-accent" />
      <rect x="360" y="54" width="40" height="8" rx="4" fill="currentColor" className="text-muted" />
      <rect x="412" y="54" width="40" height="8" rx="4" fill="currentColor" className="text-muted" />
      <rect x="464" y="54" width="40" height="8" rx="4" fill="currentColor" className="text-muted" />
      <rect x="524" y="48" width="68" height="22" rx="11" fill="currentColor" className="text-accent" />
      <rect x="56" y="120" width="220" height="18" rx="6" fill="currentColor" className="text-ink" opacity="0.7" />
      <rect x="56" y="152" width="300" height="10" rx="5" fill="currentColor" className="text-line" />
      <rect x="56" y="172" width="250" height="10" rx="5" fill="currentColor" className="text-line" />
      <rect x="56" y="214" width="110" height="28" rx="14" fill="currentColor" className="text-accent" />
      <rect x="178" y="214" width="110" height="28" rx="14" fill="none" stroke="currentColor" className="text-line" />
      <rect x="400" y="118" width="184" height="184" rx="16" fill="none" stroke="currentColor" className="text-line" />
      <circle cx="492" cy="186" r="26" fill="currentColor" className="text-accent" opacity="0.45" />
      <circle cx="454" cy="248" r="12" fill="currentColor" className="text-muted" opacity="0.4" />
      <circle cx="530" cy="238" r="16" fill="currentColor" className="text-ink" opacity="0.2" />
      <line x1="466" y1="204" x2="454" y2="238" stroke="currentColor" className="text-line" />
      <line x1="512" y1="204" x2="530" y2="226" stroke="currentColor" className="text-line" />
    </svg>
  )
}

const previews = {
  finance: FinancePreview,
  farm: FarmPreview,
  portfolio: PortfolioPreview,
}

export default function ProjectPreview({ type }) {
  const Preview = previews[type] ?? PortfolioPreview
  return (
    <div className="relative overflow-hidden rounded-t-[1.2rem] text-line">
      <Preview />
    </div>
  )
}
