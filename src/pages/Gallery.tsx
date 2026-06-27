import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { gallery } from '../data/site'

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real Brides. Real Moments."
        subtitle="There's nothing quite like the moment a bride sees herself in the dress. Here are a few of our favorites, from our shop, our brides, and our designers."
      />

      <section className="bg-cream">
        <div className="container-x py-section-gap">
          <div className="reveal-group columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {gallery.map((g) => (
              <figure key={g.src} className="group overflow-hidden rounded break-inside-avoid">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        tone="image"
        image="/images/g-ballgown-white.webp"
        eyebrow="Your Moment Is Next"
        title="Your Moment Is Next"
        body="Book a private appointment and let's find the gown that feels unmistakably yours."
      />
    </>
  )
}
