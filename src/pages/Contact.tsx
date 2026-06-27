import { useState } from 'react'
import type { ChangeEvent } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarHeart,
  HelpCircle,
  Ruler,
  Scissors,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { FloatField, SuccessCheck } from '../components/FluidField'
import { company, serviceAreas } from '../data/site'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

// Single-select icon cards for the inquiry type. The submitted `value` is what
// lands in the Netlify form field `inquiry` (sent via the hidden input below),
// so the backend payload stays clean and literal.
const INQUIRY_OPTIONS: { value: string; label: string; icon: LucideIcon }[] = [
  { value: 'Book an appointment', label: 'Book appointment', icon: CalendarHeart },
  { value: 'Dress question', label: 'Dress question', icon: HelpCircle },
  { value: 'Sizing', label: 'Sizing', icon: Ruler },
  { value: 'Alterations', label: 'Alterations', icon: Scissors },
  { value: 'Something else', label: 'Something else', icon: MessageCircle },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [firstName, setFirstName] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    'wedding-date': '',
    message: '',
  })
  const [inquiry, setInquiry] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const el = e.currentTarget
    const data = Object.fromEntries(new FormData(el) as unknown as Iterable<[string, string]>)
    // Capture the first name before any reset so the thank-you can greet by name.
    setFirstName(form.name.trim().split(/\s+/)[0] || '')
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      })
      setStatus('sent')
      el.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come Visit Us"
        subtitle={`We serve brides from ${serviceAreas.slice(0, 4).join(', ')}, and across Northeast Ohio. Appointments are required so we can give you our full attention.`}
      />

      {/* ---- Details + Form ----------------------------------------------- */}
      <section className="bg-cream">
        <div className="container-x grid gap-14 py-section-gap lg:grid-cols-2">
          {/* Details */}
          <div className="reveal">
            <p className="eyebrow">Visit Us</p>
            <h2 className="mt-4 font-display text-headline-md text-ink">Boutique Details</h2>
            <span className="rule mt-6 block w-14" />
            <ul className="mt-8 space-y-6 text-body-md">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-rose-dark" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-ink">Address</p>
                  <a
                    href={company.mapsDir}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant transition-colors hover:text-rose-dark"
                  >
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-rose-dark" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-ink">Phone</p>
                  <a href={company.phoneHref} className="text-on-surface-variant transition-colors hover:text-rose-dark">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-1 shrink-0 text-rose-dark" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-ink">Email</p>
                  <a href={`mailto:${company.email}`} className="break-all text-on-surface-variant transition-colors hover:text-rose-dark">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-1 shrink-0 text-rose-dark" size={20} strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-ink">Hours</p>
                  <p className="text-on-surface-variant">By appointment only</p>
                  <a
                    href={company.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-rose-dark underline underline-offset-4 transition-colors hover:text-rose"
                  >
                    Book your private appointment
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="reveal">
            <p className="eyebrow">Send a Message</p>
            <h2 className="mt-4 font-display text-headline-md text-ink">Send Us a Message</h2>
            <span className="rule mt-6 block w-14" />

            {status === 'sent' ? (
              <div className="mt-8 rounded border border-rose/30 bg-blush p-10 text-center">
                <span className="tfb-pop mx-auto mb-2 flex h-16 w-16 items-center justify-center">
                  <SuccessCheck />
                </span>
                <p className="eyebrow">Message Received</p>
                <h3 className="mt-4 font-display text-headline-md text-ink">
                  {firstName ? `Thank You, ${firstName}!` : 'Thank you, and congratulations!'}
                </h3>
                <span className="rule mx-auto mt-5 block w-14" />
                <p className="mt-6 text-body-lg text-on-surface">
                  We're so glad you reached out. Your message is on its way to our team, and we'll
                  be in touch personally, usually within one to two business days.
                </p>
                <p className="mt-4 text-body-md text-on-surface-variant">
                  Ready to make it official? The most exciting part of wedding planning is just a
                  click away.
                </p>
                <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={company.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded bg-taupe px-9 py-4 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-on-taupe transition-colors hover:bg-taupe-dark"
                  >
                    <span aria-hidden="true" className="tfb-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md" />
                    <CalendarHeart size={16} aria-hidden="true" /> Book Your Appointment
                  </a>
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center gap-2 border-b border-rose/50 pb-0.5 font-body text-sm font-medium text-rose-dark transition-colors hover:border-rose hover:text-rose"
                  >
                    <Phone size={15} aria-hidden="true" /> {company.phone}
                  </a>
                </div>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                {/* Carries the selected inquiry card into the Netlify payload */}
                <input type="hidden" name="inquiry" value={inquiry} />

                <FloatField label="Name" name="name" value={form.name} onChange={handleChange} required autoComplete="name" />
                <FloatField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" />
                <FloatField label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} autoComplete="tel" />
                <FloatField label="Wedding date (if known)" name="wedding-date" value={form['wedding-date']} onChange={handleChange} placeholder="e.g. June 2026" />

                {/* Inquiry type as single-select icon cards */}
                <fieldset>
                  <legend className="mb-3 block text-label-sm uppercase tracking-[0.2em] text-on-surface-variant">
                    What's this about?
                  </legend>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {INQUIRY_OPTIONS.map((o) => {
                      const active = inquiry === o.value
                      const Icon = o.icon
                      return (
                        <button
                          key={o.value}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setInquiry(active ? '' : o.value)}
                          className={`flex flex-col items-start gap-2 rounded border px-3.5 py-3.5 text-left font-body text-sm transition-all duration-200 active:scale-[0.98] ${
                            active
                              ? 'border-rose-dark bg-rose-dark text-on-taupe shadow-[0_10px_24px_-12px_rgba(156,112,98,0.7)]'
                              : 'border-outline bg-ivory text-ink hover:border-rose hover:bg-white'
                          }`}
                        >
                          <Icon size={22} strokeWidth={1.75} className={active ? 'text-on-taupe' : 'text-rose-dark'} aria-hidden="true" />
                          <span className="font-medium leading-tight">{o.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                <FloatField label="How can we help?" name="message" value={form.message} onChange={handleChange} required textarea rows={5} />

                {status === 'error' && (
                  <p className="text-body-md text-error">
                    Something went wrong. Please call us at{' '}
                    <a href={company.phoneHref} className="underline">{company.phone}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded bg-taupe px-9 py-4 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-on-taupe transition-colors hover:bg-taupe-dark disabled:opacity-60"
                >
                  <span aria-hidden="true" className="tfb-sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md" />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ---- Map ----------------------------------------------------------- */}
      <section className="bg-blush">
        <div className="container-x py-section-gap">
          <SectionHeading eyebrow="Find Us" title="Plan Your Visit" />
          <div className="reveal mt-12 overflow-hidden rounded border border-outline">
            <iframe
              title="Map to The Flawless Bride"
              src={company.mapsEmbed}
              loading="lazy"
              className="h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
