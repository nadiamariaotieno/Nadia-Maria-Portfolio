import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="page-wrap">
        <Reveal>
          <SectionHeading
            kicker="03 / Projects"
            title="Selected work in progress and in production."
            description="Project cards are driven by a data file so new work can be added without rewriting the layout. Incomplete products are labelled honestly."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
