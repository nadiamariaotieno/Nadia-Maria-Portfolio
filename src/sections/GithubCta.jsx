import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

export default function GithubCta() {
  return (
    <section id="github" className="section pt-0" aria-labelledby="github-title">
      <div className="page-wrap">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 border-y border-line py-10 sm:flex-row sm:items-center">
            <div>
              <p className="eyebrow">GitHub</p>
              <h2 id="github-title" className="display mt-3 text-3xl text-ink sm:text-4xl">
                More of my work lives on GitHub.
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                Repositories will appear there as projects move from private
                development into something I can share.
              </p>
            </div>
            {site.githubUrl ? (
              <a
                className="btn btn-primary"
                href={site.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                View GitHub
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <p className="max-w-xs text-sm text-muted">
                GitHub: {site.githubPlaceholder}. Set{' '}
                <code className="font-mono text-ink">VITE_GITHUB_URL</code> in
                your environment file.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
