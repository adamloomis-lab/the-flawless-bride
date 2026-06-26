import { Link } from 'wouter'
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import Logo from './Logo'
import { company } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  const hasSocial = company.social.facebook || company.social.instagram
  return (
    <footer className="bg-taupe-dark text-cream/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo tone="light" className="h-24" />
          <p className="mt-5 max-w-xs text-body-md">{company.shortBlurb}</p>
          {hasSocial && (
            <div className="mt-5 flex gap-3">
              {company.social.facebook && (
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded border border-cream/25 text-cream transition-colors hover:border-rose-light hover:text-rose-light"
                  aria-label="The Flawless Bride on Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
              {company.social.instagram && (
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded border border-cream/25 text-cream transition-colors hover:border-rose-light hover:text-rose-light"
                  aria-label="The Flawless Bride on Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-body text-label-lg uppercase tracking-[0.24em] text-cream">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3 text-body-md">
            <li><Link href="/our-story" className="transition-colors hover:text-rose-light">Our Story</Link></li>
            <li><Link href="/gallery" className="transition-colors hover:text-rose-light">Gallery</Link></li>
            <li><Link href="/book" className="transition-colors hover:text-rose-light">Book an Appointment</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-rose-light">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-label-lg uppercase tracking-[0.24em] text-cream">Visit Us</h3>
          <ul className="mt-5 space-y-4 text-body-md">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-rose-light" />
              <a href={company.mapsDir} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-rose-light">
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </a>
            </li>
            <li>
              <a href={company.phoneHref} className="flex items-start gap-3 transition-colors hover:text-rose-light">
                <Phone size={18} className="mt-0.5 shrink-0 text-rose-light" />
                <span>{company.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-start gap-3 transition-colors hover:text-rose-light">
                <Mail size={18} className="mt-0.5 shrink-0 text-rose-light" />
                <span className="break-all">{company.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="font-body text-label-lg uppercase tracking-[0.24em] text-cream">
            Your Moment Awaits
          </h3>
          <p className="mt-5 text-body-md">By appointment only. Sizes 16 to 32W.</p>
          <a
            href={company.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded bg-cream px-7 py-3.5 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-rose-light"
          >
            Book Your Appointment
          </a>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-label-sm uppercase tracking-[0.16em] text-cream/65 sm:flex-row">
          <span>© {year} {company.name}. All rights reserved.</span>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-rose-light">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-rose-light">Terms</Link>
            <Link href="/accessibility" className="transition-colors hover:text-rose-light">Accessibility</Link>
          </nav>
          <span>
            Website by{' '}
            <a
              href="https://adamloomismarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-rose-light"
            >
              Adam Loomis Marketing
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
