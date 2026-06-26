import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { company } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Book an Appointment', href: '/book' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [location] = useLocation()
  const scrolled = useScrolled(40)

  // Translucent over the homepage hero; solid cream once scrolled, on any inner
  // page, or when the mobile menu is open.
  const onHero = location === '/'
  const solid = scrolled || open || !onHero
  const linkBase =
    'font-body text-[12px] font-medium uppercase tracking-[0.2em] transition-colors'

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? 'border-b border-outline-variant bg-cream/95 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-black/35 to-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo tone={solid ? 'dark' : 'light'} className="h-12" />

        <div className="hidden items-center gap-8 lg:flex">
          {links.slice(0, 3).map((l) => {
            const active = l.href === location
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`${linkBase} ${
                  solid
                    ? active
                      ? 'text-rose-dark'
                      : 'text-ink hover:text-rose-dark'
                    : 'text-cream/90 hover:text-cream'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className={`${linkBase} ${
              solid
                ? location === '/contact'
                  ? 'text-rose-dark'
                  : 'text-ink hover:text-rose-dark'
                : 'text-cream/90 hover:text-cream'
            }`}
          >
            Contact
          </Link>
          <a
            href={company.booking}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center rounded px-7 py-3 font-body text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
              solid
                ? 'bg-taupe text-on-taupe hover:bg-taupe-dark'
                : 'bg-cream/95 text-ink hover:bg-cream'
            }`}
          >
            Book Your Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={solid ? 'text-ink lg:hidden' : 'text-cream lg:hidden'}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-outline-variant bg-cream lg:hidden">
          <div className="container-x flex flex-col gap-1 py-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 font-body text-sm font-medium uppercase tracking-[0.18em] text-ink hover:bg-blush"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={company.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded bg-taupe px-5 py-3 font-body text-sm font-semibold uppercase tracking-[0.16em] text-on-taupe"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
