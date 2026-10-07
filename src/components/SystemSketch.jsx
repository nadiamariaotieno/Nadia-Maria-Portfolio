function Node({ kicker, title, className = '' }) {
  return (
    <div className={`min-w-0 rounded-2xl border border-line bg-bg px-4 py-3 text-center ${className}`}>
      <p className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.16em] text-accent">
        {kicker}
      </p>
      <p className="mt-1 text-sm text-ink">{title}</p>
    </div>
  )
}

function Stem({ label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="h-4 w-px bg-line" aria-hidden="true" />
      <span className="rounded-full border border-line bg-elev px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
        {label}
      </span>
      <span className="h-4 w-px bg-line" aria-hidden="true" />
    </div>
  )
}

export default function SystemSketch() {
  return (
    <figure className="flex flex-col items-center py-1">
      <figcaption className="mb-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
        How a typical request moves
      </figcaption>

      <Node kicker="Client" title="React in the browser" className="w-[min(100%,14rem)]" />
      <Stem label="REST" />

      <div className="w-full rounded-[1.35rem] border border-line px-3 pb-4 pt-3">
        <p className="mb-3 text-center font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
          Runs on Linux
        </p>
        <div className="flex flex-col items-center">
          <Node kicker="API" title="Node.js · Express" className="w-[min(100%,13rem)]" />
          <Stem label="SQL" />
          <Node kicker="Database" title="PostgreSQL" className="w-[min(100%,13rem)]" />
        </div>
      </div>
    </figure>
  )
}
