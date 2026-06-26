import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { company, serviceAreas } from '../data/site'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as unknown as Iterable<[string, string]>)
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      })
      setStatus('sent')
      form.reset()
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
                <p className="eyebrow">Message Received</p>
                <h3 className="mt-4 font-display text-headline-md text-ink">
                  Thank you — and congratulations!
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
                <a
                  href={company.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center rounded bg-taupe px-9 py-4 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-on-taupe transition-colors hover:bg-taupe-dark"
                >
                  Book Your Appointment
                </a>
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

                <Field label="Name" name="name" type="text" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                <Field label="Wedding date (if known)" name="wedding-date" type="text" placeholder="e.g. June 2026" />

                <div>
                  <label htmlFor="message" className="block text-label-sm uppercase tracking-[0.2em] text-on-surface-variant">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded border border-outline bg-ivory px-4 py-3 text-body-md text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark transition-colors placeholder:text-muted focus:border-rose"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-body-md text-error">
                    Something went wrong. Please call us at{' '}
                    <a href={company.phoneHref} className="underline">{company.phone}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center rounded bg-taupe px-9 py-4 font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-on-taupe transition-colors hover:bg-taupe-dark disabled:opacity-60"
                >
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

function Field({
  label,
  name,
  type,
  required,
  placeholder,
  autoComplete,
}: {
  readonly label: string
  readonly name: string
  readonly type: string
  readonly required?: boolean
  readonly placeholder?: string
  readonly autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-label-sm uppercase tracking-[0.2em] text-on-surface-variant">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded border border-outline bg-ivory px-4 py-3 text-body-md text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-dark transition-colors placeholder:text-muted focus:border-rose"
      />
    </div>
  )
}
