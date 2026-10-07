import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { securityFocus } from '../data/skills'

export default function Direction() {
  return (
    <section id="direction" className="section pt-0" aria-labelledby="direction-title">
      <div className="page-wrap">
        <Reveal>
          <div className="card overflow-hidden p-7 sm:p-10">
            <SectionHeading
              id="direction-title"
              kicker="Trajectory"
              title="Building Toward Secure Software"
            />
            <div className="max-w-3xl space-y-4 text-muted">
              <p>
                Software development is the centre of my work. Alongside that
                practice, I am building a foundation in cybersecurity —
                especially the parts that sit closest to how applications are
                designed, authenticated, deployed and operated.
              </p>
              <p>
                This is a direction I am growing into. It is not a claim of
                professional cybersecurity experience, certifications, or
                specialised security roles.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {securityFocus.map((item) => (
                <li key={item} className="chip text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
