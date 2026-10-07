export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'start',
  })
}
