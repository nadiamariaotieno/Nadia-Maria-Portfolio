import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="page-wrap">
        <Reveal>
          <SectionHeading
            kicker="04 / Skills"
            title="A working stack, grouped by how I actually use it."
            description="No percentage bars. These are technologies I have used in coursework, personal projects, or professional work."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 60}>
              <article className="card h-full p-6">
                <h3 className="display text-xl text-ink">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
