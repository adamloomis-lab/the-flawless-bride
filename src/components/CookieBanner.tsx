import { useEffect, useState } from 'react'
import { Link } from 'wouter'

const STORAGE_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), 700)
    return () => clearTimeout(timer)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-2xl rounded bg-taupe-dark px-6 py-4 shadow-xl"
    >
      <p className="font-body text-sm text-cream/85 leading-relaxed">
        This site uses cookies to keep things running smoothly. We never sell your data.{' '}
        <Link href="/privacy" className="underline underline-offset-2 text-rose-light hover:text-cream transition-colors">
          Privacy Policy
        </Link>
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button
          onClick={accept}
          className="inline-flex items-center rounded bg-cream px-6 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-rose-light"
        >
          Sounds Good
        </button>
        <button
          onClick={decline}
          className="inline-flex items-center rounded border border-cream/30 px-6 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/75 transition-colors hover:border-cream/60 hover:text-cream"
        >
          No Thanks
        </button>
      </div>
    </div>
  )
}
