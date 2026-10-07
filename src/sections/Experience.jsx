import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="page-wrap">
        <Reveal>
          <SectionHeading
            kicker="02 / Experience"
            title="Professional work, not just coursework."
            description="A single, substantial role spanning internship through graduate trainee work in software development."
          />
        </Reveal>
        <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
          {experience.map((role, index) => (
            <li key={role.id} className="relative">
              <span
                className="absolute -left-[1.72rem] top-7 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg sm:-left-[2.22rem]"
                aria-hidden="true"
              />
              <Reveal delay={index * 80}>
                <article className="card p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {role.period}
                  </p>
                  <h3 className="display mt-2 text-2xl text-ink sm:text-3xl">
                    {role.company}
                  </h3>
                  <p className="mt-2 text-ink">
                    {role.roles.join(' → ')}
                  </p>
                  <p className="mt-1 text-sm text-muted">{role.location}</p>
                  <p className="mt-4 text-muted">{role.summary}</p>
                  <ul className="mt-5 space-y-2.5 text-muted">
                    {role.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
