import { Phone, CalendarHeart } from 'lucide-react'
import { company } from '../data/site'

// Elevated floating action capsule — primary actions one thumb-tap away on
// every page. Mobile only (hidden on lg+). Off-edge, blurred elegant-dark
// backdrop with a glassy Call and a brand-accent primary "Book" button.
const phone = company.phoneHref || 'tel:' + String(company.phone || '').replace(/[^\d+]/g, '')

export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
      aria-label="Quick actions"
    >
      <nav className="mx-auto flex max-w-md items-stretch gap-2 rounded-2xl border border-white/10 bg-[#3a302a]/85 p-2 shadow-[0_18px_40px_-12px_rgba(58,48,42,0.7)] backdrop-blur-xl">
        {/* Glassy Call */}
        <a
          href={phone}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors active:scale-[0.98] active:bg-white/20"
        >
          <Phone size={18} aria-hidden="true" className="text-rose-light" />
          Call
        </a>
        {/* Brand-accent primary Book */}
        <a
          href={company.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="group tfb-glow-pulse relative flex flex-[1.4] items-center justify-center gap-2 overflow-hidden rounded-xl bg-rose-dark py-3.5 font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-on-taupe transition-transform active:scale-[0.98]"
        >
          <span aria-hidden="true" className="tfb-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md" />
          <CalendarHeart size={18} aria-hidden="true" />
          Book an Appointment
        </a>
      </nav>
    </div>
  )
}
