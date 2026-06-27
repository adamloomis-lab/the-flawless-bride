import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'wouter'
import { Menu, X, MapPin, Clock, Phone, Facebook, Instagram, ArrowRight, CalendarHeart } from 'lucide-react'
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

  // Lock scroll + close on Escape while the mobile panel is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

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
          onClick={() => setOpen(true)}
          className={solid ? 'text-ink lg:hidden' : 'text-cream lg:hidden'}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* ---- Elevated mobile menu --------------------------------------- */}
      {/* Portaled to <body> so it escapes the header's `backdrop-blur`
          containing block (which otherwise clamps the fixed panel to the
          header's height once scrolled). */}
      {typeof document !== 'undefined' &&
        createPortal(
          <>
            {/* Blurred dark backdrop */}
            <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-[#3a302a]/55 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      {/* Right slide-in panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-cream shadow-[-20px_0_60px_-20px_rgba(58,48,42,0.5)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header: logo + close */}
        <div className="flex items-center justify-between border-b border-outline-variant px-6 py-5">
          <Logo tone="dark" className="h-10" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-outline text-ink transition-colors hover:bg-blush"
          >
            <X size={20} />
          </button>
        </div>

        {/* Trust badge with pulsing dot */}
        <div className="px-6 pt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-dark">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-dark" />
            </span>
            Sizes 16 to 32W
          </span>
        </div>

        {/* Nav links — large uppercase, staggered, arrow nudge */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col">
            {links.map((l, i) => {
              const active = l.href === location
              return (
                <li
                  key={l.href}
                  className={open ? 'tfb-link-in motion-reduce:[animation:none]' : ''}
                  style={open ? { animationDelay: `${0.06 + i * 0.06}s` } : undefined}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between border-b border-outline-variant py-4 font-display text-2xl tracking-wide transition-colors ${
                      active ? 'text-rose-dark' : 'text-ink hover:text-rose-dark'
                    }`}
                  >
                    <span className="uppercase">{l.label}</span>
                    <ArrowRight
                      size={20}
                      className="text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-rose-dark"
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Primary + secondary CTAs */}
          <div className="mt-8 space-y-3">
            <a
              href={company.booking}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded bg-taupe py-4 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-on-taupe transition-colors hover:bg-taupe-dark"
            >
              <CalendarHeart size={17} aria-hidden="true" />
              Book an Appointment
            </a>
            <a
              href={company.phoneHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded border border-taupe py-4 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-taupe transition-colors hover:bg-blush"
            >
              <Phone size={16} aria-hidden="true" />
              Call {company.phone}
            </a>
          </div>
        </nav>

        {/* Contact footer */}
        <div className="border-t border-outline-variant px-6 py-6">
          <ul className="space-y-3 text-body-md">
            <li>
              <a
                href={company.mapsDir}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-on-surface-variant transition-colors hover:text-rose-dark"
              >
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-rose-dark" />
                <span>
                  {company.address.street}, {company.address.city}, {company.address.state}{' '}
                  {company.address.zip}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-on-surface-variant">
              <Clock size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-rose-dark" />
              <span>By appointment only</span>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-3">
            {company.social.facebook && (
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline text-rose-dark transition-colors hover:bg-blush"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            )}
            {company.social.instagram && (
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline text-rose-dark transition-colors hover:bg-blush"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
            </div>
          </>,
          document.body,
        )}
    </header>
  )
}
