import { useEffect, useState } from 'react'

export function useActiveSection(ids, offset = 112) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    function update() {
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = id
        }
      }
      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, offset])

  return activeId
}
