import { Link } from 'wouter'

// The Flawless Bride circular script mark. Black on the light theme; a cream
// recolor for use over the dark hero video before the navbar turns solid.
export default function Logo({
  tone = 'dark',
  className = '',
}: {
  readonly tone?: 'dark' | 'light'
  readonly className?: string
}) {
  const src = tone === 'light' ? '/images/logo-white.png' : '/images/logo-trans.png'
  return (
    <Link href="/" className={`inline-flex ${className}`}>
      <img src={src} alt="The Flawless Bride — home" width={120} height={120} className="h-full w-auto" />
    </Link>
  )
}
