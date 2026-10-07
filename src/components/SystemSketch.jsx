export default function SystemSketch() {
  return (
    <svg
      viewBox="0 0 420 360"
      className="h-auto w-full max-w-md text-line"
      role="img"
      aria-label="Abstract diagram of a client, API, database and host connected as a small system"
    >
      <defs>
        <linearGradient id="node" x1="0" x2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <line x1="120" y1="80" x2="250" y2="150" stroke="currentColor" />
      <line x1="250" y1="180" x2="120" y2="250" stroke="currentColor" />
      <line x1="280" y1="165" x2="340" y2="220" stroke="currentColor" />
      <line x1="150" y1="270" x2="320" y2="250" stroke="currentColor" />
      <rect x="36" y="36" width="168" height="72" rx="16" fill="url(#node)" stroke="currentColor" />
      <text x="56" y="68" fill="currentColor" className="text-muted" fontSize="13" fontFamily="IBM Plex Mono, monospace">
        CLIENT
      </text>
      <text x="56" y="88" fill="currentColor" fontSize="14">
        React interface
      </text>
      <rect x="216" y="132" width="168" height="72" rx="16" fill="url(#node)" stroke="currentColor" />
      <text x="236" y="164" fill="currentColor" fontSize="13" fontFamily="IBM Plex Mono, monospace">
        API
      </text>
      <text x="236" y="184" fill="currentColor" fontSize="14">
        Node / REST
      </text>
      <rect x="36" y="228" width="168" height="72" rx="16" fill="url(#node)" stroke="currentColor" />
      <text x="56" y="260" fill="currentColor" fontSize="13" fontFamily="IBM Plex Mono, monospace">
        DATA
      </text>
      <text x="56" y="280" fill="currentColor" fontSize="14">
        PostgreSQL
      </text>
      <rect x="264" y="228" width="132" height="72" rx="16" fill="url(#node)" stroke="currentColor" />
      <text x="284" y="260" fill="currentColor" fontSize="13" fontFamily="IBM Plex Mono, monospace">
        HOST
      </text>
      <text x="284" y="280" fill="currentColor" fontSize="14">
        Linux
      </text>
    </svg>
  )
}
