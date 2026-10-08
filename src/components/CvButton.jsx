import { site } from '../data/site'
import { DownloadIcon } from './icons'

export default function CvButton({ variant = 'secondary', className = '' }) {
  const classes = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`
  const isFile = /\.(pdf|docx?)$/i.test(site.cvUrl)

  return (
    <a
      href={site.cvUrl}
      className={classes}
      {...(isFile
        ? { download: site.cvFileName }
        : { target: '_blank', rel: 'noreferrer noopener' })}
    >
      <DownloadIcon size={16} />
      Download CV
    </a>
  )
}
