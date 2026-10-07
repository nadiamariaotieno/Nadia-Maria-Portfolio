import { Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="page-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading kicker="05 / Contact" title="Let's Build Something" />
          <p className="text-muted">
            Send a message with the form, or email me directly. You can also
            find me on GitHub and LinkedIn.
          </p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  className="inline-flex items-center gap-2 text-lg text-ink no-underline hover:text-accent"
                  href={`mailto:${site.email}`}
                >
                  <Mail size={18} aria-hidden="true" />
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                LinkedIn
              </dt>
              <dd className="mt-1 text-ink">
                {site.linkedinUrl ? (
                  <a
                    className="text-ink no-underline hover:text-accent"
                    href={site.linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {site.linkedinUrl}
                  </a>
                ) : (
                  site.linkedinPlaceholder
                )}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                GitHub
              </dt>
              <dd className="mt-1 text-ink">
                {site.githubUrl ? (
                  <a
                    className="text-ink no-underline hover:text-accent"
                    href={site.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {site.githubUrl}
                  </a>
                ) : (
                  site.githubPlaceholder
                )}
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={90}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
