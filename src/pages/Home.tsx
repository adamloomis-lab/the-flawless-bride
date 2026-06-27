import { Link } from 'wouter'
import { ArrowRight, Ruler, Crown, Scissors } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import CtaBand from '../components/CtaBand'
import { company, differentiators, collection, testimonials } from '../data/site'

const diffIcons = [Ruler, Crown, Scissors]

export default function Home() {
  return (
    <>
      {/* ---- Hero ---------------------------------------------------------- */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <video
          className="kenburns absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.webp"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim absolute inset-0" />
        <div className="container-x relative z-10 pt-24 text-center">
          <p className="eyebrow rise rise-1 text-rose-light">
            Cleveland · Akron · Northeast Ohio
          </p>
          <h1 className="rise rise-2 mx-auto mt-6 max-w-4xl font-display text-[44px] font-medium leading-[1.05] text-cream md:text-display-xl">
            Bridal, Beautifully Tailored to You
          </h1>
          <p className="rise rise-3 mx-auto mt-7 max-w-2xl text-body-lg text-cream/85">
            The Cleveland and Akron area's premier bridal boutique specializing in sizes 16 to 32W.
            Today's top designers, expert fittings, and an experience built around finding the gown
            that feels unmistakably yours.
          </p>
          <div className="rise rise-4 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={company.booking} external>
              Book Your Appointment
            </Button>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-body text-[12px] font-medium uppercase tracking-[0.2em] text-cream/90 transition-colors hover:text-cream"
            >
              View the Gallery <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Welcome ------------------------------------------------------- */}
      <section className="bg-cream">
        <div className="container-x grid items-center gap-14 py-section-gap md:grid-cols-2">
          <div className="reveal order-2 md:order-1">
            <p className="eyebrow">Welcome</p>
            <h2 className="mt-4 font-display text-headline-md text-ink md:text-headline-lg">
              Welcome to The Flawless Bride
            </h2>
            <span className="rule mt-6 block w-14" />
            <p className="mt-6 text-body-lg text-on-surface">
              Every bride deserves a bridal experience that feels effortless, elegant, and entirely
              her own. From the moment you arrive, your appointment is private, unhurried, and
              personalized to your style, your story, and your vision.
            </p>
            <p className="mt-5 text-body-md text-on-surface-variant">
              You'll work one-on-one with a consultant who knows our designers inside and out.
              You'll try on gowns made to flatter and fit beautifully. And you'll leave knowing you
              found the dress, not just settled on one.
            </p>
            <div className="mt-8">
              <Button href="/our-story" variant="outline">
                Our Story
              </Button>
            </div>
          </div>
          <div className="reveal order-1 overflow-hidden rounded md:order-2">
            <img
              src="/images/g-blush-bouquet.webp"
              alt="A bride in a lace gown holding her bouquet at The Flawless Bride"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---- Designed Around the Bride ------------------------------------ */}
      <section className="bg-blush">
        <div className="container-x py-section-gap">
          <SectionHeading eyebrow="What Makes Us Different" title="Designed Around the Bride" />
          <div className="reveal-group mt-16 grid gap-10 md:grid-cols-3">
            {differentiators.map((d, i) => {
              const Icon = diffIcons[i]
              return (
                <div key={d.title} className="text-center">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-rose/30 text-rose-dark">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 font-display text-headline-sm text-ink">{d.title}</h3>
                  <p className="mt-3 text-body-md text-on-surface-variant">{d.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---- The Consultation --------------------------------------------- */}
      <section className="bg-cream">
        <div className="container-x grid items-center gap-14 py-section-gap md:grid-cols-2">
          <div className="reveal overflow-hidden rounded">
            <video
              className="aspect-[4/5] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/detail-beaded-sleeve.webp"
            >
              <source src="/videos/detail-loop.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="reveal">
            <p className="eyebrow">The Consultation</p>
            <h2 className="mt-4 font-display text-headline-md text-ink md:text-headline-lg">
              Your Appointment, Your Experience
            </h2>
            <span className="rule mt-6 block w-14" />
            <p className="mt-6 text-body-lg text-on-surface">
              Consultations at The Flawless Bride are private, by appointment only, and last about
              50 minutes. Bring up to two of your favorite people along to share the moment with you.
            </p>
            <p className="mt-5 text-body-md text-on-surface-variant">
              Your consultant will guide you through our collection, help you discover what styles
              love your shape, and walk with you through every step of the process, from the first
              dress to the final fitting.
            </p>
            <div className="mt-8">
              <Button href={company.booking} external>
                Book Your Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Discover Our Collection -------------------------------------- */}
      <section className="bg-champagne">
        <div className="container-x py-section-gap">
          <SectionHeading
            eyebrow="The Curation"
            title="Discover Our Collection"
            intro="A thoughtfully selected lineup of silhouettes, every one available to try on in your size."
          />
          <div className="reveal-group mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collection.map((c) => (
              <figure key={c.name} className="group overflow-hidden rounded bg-ivory">
                <div className="overflow-hidden">
                  <img
                    src={c.src}
                    alt={`${c.name} bridal gown at The Flawless Bride`}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-5 py-5 text-center">
                  <h3 className="font-display text-headline-sm text-ink">{c.name}</h3>
                  <p className="mt-1 text-label-sm uppercase tracking-[0.2em] text-rose-dark">
                    {c.note}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/gallery" variant="outline">
              View the Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* ---- Reviews ------------------------------------------------------- */}
      <section className="bg-cream">
        <div className="container-x py-section-gap">
          <SectionHeading eyebrow="From Our Brides" title="Loved by Real Brides" />
          <div className="reveal-group mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded border border-outline bg-ivory p-8"
              >
                <span className="font-display text-5xl leading-none text-rose-light" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 text-body-md italic text-on-surface">{t.quote}</p>
                <footer className="mt-6 font-body text-label-sm uppercase tracking-[0.2em] text-rose-dark">
                  {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Final CTA ----------------------------------------------------- */}
      <CtaBand
        tone="image"
        image="/images/g-ballgown-pink.webp"
        eyebrow="Your Moment Awaits"
        title="Let's Find Your Dress"
        body="Appointments fill quickly, especially during engagement season. Reserve yours today and start the most exciting part of your wedding planning."
      />
    </>
  )
}
