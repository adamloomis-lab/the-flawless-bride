import Button from './Button'
import { company } from '../data/site'

// Reusable closing call-to-action band. `tone="image"` overlays a gown photo;
// `tone="blush"` is a soft solid band.
export default function CtaBand({
  eyebrow,
  title,
  body,
  image,
  tone = 'blush',
}: {
  readonly eyebrow?: string
  readonly title: string
  readonly body?: string
  readonly image?: string
  readonly tone?: 'blush' | 'image'
}) {
  if (tone === 'image' && image) {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt="" className="parallax h-[120%] w-full object-cover" />
          <div className="hero-scrim absolute inset-0" />
        </div>
        <div className="container-x relative py-28 text-center md:py-36">
          <div className="reveal mx-auto max-w-2xl">
            {eyebrow && <p className="eyebrow text-rose-light">{eyebrow}</p>}
            <h2 className="mt-4 font-display text-headline-lg text-cream md:text-display-lg">{title}</h2>
            {body && <p className="mx-auto mt-6 max-w-xl text-body-lg text-cream/85">{body}</p>}
            <div className="mt-9">
              <Button href={company.booking} external variant="ghost">
                Book Your Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-blush">
      <div className="container-x py-24 text-center md:py-28">
        <div className="reveal mx-auto max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-4 font-display text-headline-md text-ink md:text-headline-lg">{title}</h2>
          {body && <p className="mx-auto mt-6 max-w-xl text-body-lg text-on-surface-variant">{body}</p>}
          <div className="mt-9">
            <Button href={company.booking} external>
              Book Your Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
