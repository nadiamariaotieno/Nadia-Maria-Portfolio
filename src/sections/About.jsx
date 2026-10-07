import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="page-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            kicker="01 / About"
            title="Building software with care for how systems actually work."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="space-y-4 text-muted">
            <p>
              I am a Computer Technology graduate from {site.education.school}
              ({site.education.degree}, {site.education.years}) and a software
              developer with hands-on professional experience.
            </p>
            <p>
              At Oakar Services Limited I progressed from Software Development
              Intern to Graduate Trainee. The work has taken me across frontend,
              backend, databases, APIs and deployment — not as separate
              specialisms, but as parts of the same system.
            </p>
            <p>
              I enjoy solving problems and understanding how applications are
              put together, run, and fail. That curiosity is also why I am
              increasingly interested in cybersecurity and secure software
              development.
            </p>
          </div>
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Currently exploring
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {site.exploring.map((item) => (
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
