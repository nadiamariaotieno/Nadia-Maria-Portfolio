import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'
import ProjectPreview from './ProjectPreview'

export default function ProjectCard({ project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1">
      {project.image ? (
        <div className="border-b border-line bg-bg p-4">
          <img
            src={project.image}
            alt={project.imageAlt || `${project.name} preview`}
            className="w-full rounded-xl border border-line"
            loading="lazy"
          />
        </div>
      ) : (
        <ProjectPreview type={project.preview} />
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="chip text-accent">{project.status}</span>
        </div>
        <h3 className="display text-2xl text-ink">{project.name}</h3>
        <p className="mt-3 flex-1 text-[0.98rem] text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.github ? (
            <a
              href={project.github}
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          ) : (
            <span className="btn btn-secondary pointer-events-none opacity-55">
              GitHub soon
            </span>
          )}
          {project.live ? (
            <a href={project.live} className="btn btn-secondary">
              Live demo
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
          {project.caseStudy ? (
            <a href={project.caseStudy} className="btn btn-secondary">
              View case study
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
