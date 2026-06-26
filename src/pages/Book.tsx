import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import SetmoreEmbed from '../components/SetmoreEmbed'
import { bookingTips, goodToKnow } from '../data/site'

export default function Book() {
  return (
    <>
      <PageHero
        eyebrow="Book an Appointment"
        title="Let's Plan Your Visit"
        subtitle="Appointments at The Flawless Bride are private, by appointment only, and last about 50 minutes. The most exciting part of wedding planning starts here."
      />

      {/* ---- What to Expect ----------------------------------------------- */}
      <section className="bg-cream">
        <div className="container-x grid gap-14 py-section-gap md:grid-cols-2 md:items-center">
          <div className="reveal overflow-hidden rounded">
            <img
              src="/images/g-seated-window.webp"
              alt="A bride seated by a window during her appointment"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">What to Expect</p>
            <h2 className="mt-4 font-display text-headline-md text-ink md:text-headline-lg">
              Your Appointment
            </h2>
            <span className="rule mt-6 block w-14" />
            <p className="mt-6 text-body-lg text-on-surface">
              When you arrive, your consultant will sit down with you to talk about your wedding,
              your style, your venue, and the look you've been dreaming about. From there, you'll
              pull dresses together and start trying them on in your size — the way they're meant to
              be worn.
            </p>
            <p className="mt-5 text-body-md text-on-surface-variant">
              We ask that you bring no more than two guests, and that all guests are adults. A small,
              trusted circle keeps the focus on you — too many opinions can make the decision harder,
              not easier.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Tips + Returning --------------------------------------------- */}
      <section className="bg-blush">
        <div className="container-x grid gap-14 py-section-gap md:grid-cols-2">
          <div className="reveal">
            <p className="eyebrow">Coming In?</p>
            <h2 className="mt-4 font-display text-headline-md text-ink">A Few Tips</h2>
            <span className="rule mt-6 block w-14" />
            <ul className="tick-list mt-7 space-y-4 text-body-md text-on-surface">
              {bookingTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <p className="eyebrow">Coming Back?</p>
            <h2 className="mt-4 font-display text-headline-md text-ink">Returning Brides</h2>
            <span className="rule mt-6 block w-14" />
            <p className="mt-7 text-body-lg text-on-surface">
              If you leave your first appointment loving more than one dress, you can always come
              back to try them again or explore designs you didn't get to the first time.
            </p>
            <p className="mt-5 text-body-md text-on-surface-variant">
              After you place your order, you'll return to The Flawless Bride for your fitting once
              your gown arrives. And then you'll leave with your dress.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Good to Know -------------------------------------------------- */}
      <section className="bg-cream">
        <div className="container-x py-section-gap">
          <SectionHeading eyebrow="A Few Things to Know" title="Good to Know" />
          <div className="reveal-group mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {goodToKnow.map((g) => (
              <div key={g.title} className="rounded border border-outline bg-ivory p-8">
                <h3 className="font-display text-headline-sm text-ink">{g.title}</h3>
                <span className="rule mt-4 block w-10" />
                <p className="mt-5 text-body-md text-on-surface-variant">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Booking widget ------------------------------------------------ */}
      <section id="book" className="scroll-mt-24 bg-champagne">
        <div className="container-x py-section-gap">
          <SectionHeading
            eyebrow="Ready When You Are"
            title="Reserve Your Appointment"
            intro="Choose a time below and we'll take care of the rest. Can't find a slot that works? Reach out and we'll do our best to accommodate you."
          />
          <div className="reveal mx-auto mt-14 max-w-3xl">
            <SetmoreEmbed />
          </div>
        </div>
      </section>
    </>
  )
}
