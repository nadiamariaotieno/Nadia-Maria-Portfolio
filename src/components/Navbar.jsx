import { Menu, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { navItems, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { scrollToId } from '../utils/scrollToId'
import CvButton from './CvButton'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const sectionIds = navItems.map((item) => item.id)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function goTo(id) {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-line bg-bg/85 backdrop-blur-md'
          : 'border-transparent bg-bg/70 backdrop-blur-sm'
      }`}
    >
      <div className="page-wrap flex h-[4.25rem] items-center justify-between gap-4">
        <a
          href="#home"
          className="display text-[1.15rem] tracking-tight text-ink no-underline"
          onClick={(event) => {
            event.preventDefault()
            goTo('home')
          }}
        >
          {site.shortName}
          <span className="sr-only">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeId === item.id ? 'is-active' : ''}`}
              onClick={(event) => {
                event.preventDefault()
                goTo(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <CvButton className="hidden lg:inline-flex" />
          <a
            href="#contact"
            className="btn btn-primary hidden sm:inline-flex"
            onClick={(event) => {
              event.preventDefault()
              goTo('contact')
            }}
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            className="icon-btn lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-line bg-bg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="page-wrap flex flex-col gap-1 py-5" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-xl px-3 py-3 text-lg no-underline ${
                  activeId === item.id ? 'bg-accent-soft text-ink' : 'text-muted'
                }`}
                onClick={(event) => {
                  event.preventDefault()
                  goTo(item.id)
                }}
              >
                {item.label}
              </a>
            ))}
            <CvButton className="mt-3 w-full" />
            <a
              href="#contact"
              className="btn btn-primary mt-2"
              onClick={(event) => {
                event.preventDefault()
                goTo('contact')
              }}
            >
              Let&apos;s Connect
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
