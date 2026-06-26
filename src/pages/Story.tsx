import PageHero from '../components/PageHero'
import Button from '../components/Button'
import { company } from '../data/site'

export default function Story() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="The Flawless Bride Story"
        image="/images/detail-lace-back.webp"
      />

      <section className="bg-cream">
        <div className="container-x grid gap-14 py-section-gap lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="reveal max-w-2xl">
            <p className="font-display text-headline-sm italic text-rose-dark">
              It started with a road trip to Maryland.
            </p>
            <div className="mt-8 space-y-5 text-body-lg text-on-surface">
              <p>
                After I got engaged, I did what every bride does. I walked into the bridal shops near
                home, full of excitement, ready to find the dress. What I found instead were gowns
                that didn't fit, mirrors that couldn't show me what I'd actually look like, and an
                experience that left me deflated.
              </p>
              <p>
                So I started calling. Every bridal boutique within a six hour radius. One shop in
                Maryland carried the dress I'd been dreaming about, and my mom and I made the drive
                together.
              </p>
              <p>
                Somewhere on the way back home, it hit me. No bride should have to drive six hours to
                try on a wedding dress. No bride should feel like an afterthought in her own bridal
                experience.
              </p>
              <p className="font-display text-headline-sm italic text-ink">
                So I built the shop I wished I'd found.
              </p>
              <p>
                The Flawless Bride is Northeast Ohio's only bridal boutique dedicated to sizes 16 to
                32W. Every dress on our floor is made to fit, to flatter, and to be tried on the way
                it's meant to be worn. Every appointment is private, personal, and built around you.
              </p>
              <p>
                We believe every bride deserves a beautiful experience. Not a "make it work"
                experience. A real one.
              </p>
              <p className="text-on-surface-variant">We're so glad you're here.</p>
            </div>
          </div>

          <div className="reveal lg:sticky lg:top-28">
            <div className="overflow-hidden rounded">
              <img
                src="/images/g-emerald-mirror.webp"
                alt="A bride beside a mirror at The Flawless Bride"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Video --------------------------------------------------------- */}
      <section className="bg-champagne">
        <div className="container-x py-section-gap">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow">Step Inside</p>
            <h2 className="mt-4 font-display text-headline-md text-ink md:text-headline-lg">
              Plus-Size Wedding Dress Shopping
            </h2>
            <span className="rule mx-auto mt-6 block w-14" />
            <p className="mt-6 text-body-lg text-on-surface-variant">
              A look at the experience that's waiting for you at The Flawless Bride.
            </p>
          </div>
          <div className="reveal mx-auto mt-12 max-w-4xl overflow-hidden rounded border border-outline shadow-[0_30px_80px_-50px_rgba(70,58,49,0.5)]">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/0l01dgif2DI"
                title="Plus-Size Wedding Dress Shopping — The Flawless Bride"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Our Promise --------------------------------------------------- */}
      <section className="bg-blush">
        <div className="container-x py-section-gap text-center">
          <div className="reveal mx-auto max-w-3xl">
            <p className="eyebrow">Our Promise</p>
            <h2 className="mt-4 font-display text-headline-md text-ink md:text-headline-lg">
              What We Believe
            </h2>
            <span className="rule mx-auto mt-6 block w-14" />
            <p className="mt-7 text-body-lg text-on-surface">
              We believe the right gown changes everything. We believe finding it should feel
              exciting, not exhausting. We believe in fit, in fabric, in designers who understand
              real women. And we believe every bride who walks through our doors deserves to feel
              beautiful, celebrated, and completely herself.
            </p>
            <p className="mt-5 font-display text-headline-sm italic text-rose-dark">
              That's what we built here. That's what we promise.
            </p>
            <div className="mt-9">
              <Button href={company.booking} external>
                Book Your Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
