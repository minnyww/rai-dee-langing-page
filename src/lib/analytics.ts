declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Fire a GA4 event. Safe no-op when gtag has not loaded
 * (e.g. blocked by an ad blocker).
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  window.gtag?.("event", name, params)
}
