export default function SectionHeading({ kicker, title, description, id }) {
  return (
    <div className="mb-10 max-w-2xl">
      {kicker ? <p className="eyebrow mb-3">{kicker}</p> : null}
      <h2 id={id} className="display text-3xl sm:text-4xl text-ink">{title}</h2>
      {description ? (
        <p className="mt-4 text-muted text-[1.02rem]">{description}</p>
      ) : null}
    </div>
  )
}
