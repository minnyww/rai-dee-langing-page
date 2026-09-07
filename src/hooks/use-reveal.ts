import { useEffect } from "react"

/**
 * Observes every `.reveal` element once on mount and adds `.is-in`
 * when it enters the viewport. Falls back to showing everything
 * when IntersectionObserver is unavailable.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (els.length === 0) return

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
