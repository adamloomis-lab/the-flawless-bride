import { CalendarHeart } from 'lucide-react'
import { company } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

// Desktop-only floating Book pill — scroll-reveals after the hero and stays
// gently glowing in the corner. Hidden on mobile (the action capsule covers it).
export default function DesktopBookPill() {
  const show = useScrolled(560)
  if (!show) return null
  return (
    <a
      href={company.booking}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment"
      className="group tfb-pill-in tfb-glow-pulse fixed bottom-7 right-7 z-40 hidden items-center gap-2.5 overflow-hidden rounded-full bg-taupe px-7 py-4 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-on-taupe transition-[background-color,transform] hover:bg-taupe-dark active:scale-[0.98] lg:inline-flex"
    >
      <span aria-hidden="true" className="tfb-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md" />
      <CalendarHeart size={18} aria-hidden="true" className="text-rose-light" />
      Book an Appointment
    </a>
  )
}
