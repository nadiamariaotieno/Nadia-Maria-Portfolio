import { Mail } from 'lucide-react'
import { site } from '../data/site'
import { GithubIcon, LinkedinIcon } from './icons'

const year = new Date().getFullYear()

export default function Footer() {

  return (
    <footer className="border-t border-line">
      <div className="page-wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-xl text-ink">{site.name}</p>
          <p className="mt-1 text-muted">
            {site.role}
            <span className="mx-2 text-line">·</span>
            {site.location}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex flex-wrap gap-4 text-sm">
            <li>
              {site.githubUrl ? (
                <a
                  className="inline-flex items-center gap-1.5 text-muted no-underline hover:text-accent"
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon size={15} aria-hidden="true" /> GitHub
                </a>
              ) : (
                <span className="text-muted">GitHub — placeholder</span>
              )}
            </li>
            <li>
              {site.linkedinUrl ? (
                <a
                  className="inline-flex items-center gap-1.5 text-muted no-underline hover:text-accent"
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkedinIcon size={15} aria-hidden="true" /> LinkedIn
                </a>
              ) : (
                <span className="text-muted">LinkedIn — placeholder</span>
              )}
            </li>
            <li>
              <a
                className="inline-flex items-center gap-1.5 text-muted no-underline hover:text-accent"
                href={`mailto:${site.email}`}
              >
                <Mail size={15} aria-hidden="true" /> Email
              </a>
            </li>
          </ul>
          <p className="text-sm text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
