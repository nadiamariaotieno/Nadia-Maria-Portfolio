import { Mail } from 'lucide-react'
import { site } from '../data/site'
import { GithubIcon, LinkedinIcon } from './icons'

const items = [
  {
    key: 'github',
    href: site.githubUrl,
    label: 'GitHub',
    Icon: GithubIcon,
  },
  {
    key: 'linkedin',
    href: site.linkedinUrl,
    label: 'LinkedIn',
    Icon: LinkedinIcon,
  },
  {
    key: 'email',
    href: `mailto:${site.email}`,
    label: 'Email',
    Icon: Mail,
  },
]

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {items.map(({ key, href, label, Icon }) => {
        const ready = Boolean(href)
        return (
          <li key={key}>
            {ready ? (
              <a
                href={href}
                className="icon-btn"
                aria-label={label}
                {...(href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ) : (
              <span
                className="icon-btn opacity-45 cursor-not-allowed"
                aria-label={`${label} placeholder — add the URL in .env`}
                title={`${label} URL not set yet`}
              >
                <Icon size={18} aria-hidden="true" />
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
