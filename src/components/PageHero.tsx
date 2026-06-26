import type { ReactNode } from 'react'

// Inner-page header. With `image`, a gown photo sits behind a scrim; without,
// a soft blush band. Always padded to clear the fixed navbar.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  readonly eyebrow?: string
  readonly title: string
  readonly subtitle?: ReactNode
  readonly image?: string
}) {
  if (image) {
    return (
      <header className="relative flex min-h-[56vh] items-center justify-center overflow-hidden">
        <img src={image} alt="" className="kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0" />
        <div className="container-x relative z-10 pt-24 pb-12 text-center">
          {eyebrow && <p className="eyebrow rise rise-1 text-rose-light">{eyebrow}</p>}
          <h1 className="rise rise-2 mx-auto mt-5 max-w-3xl font-display text-[40px] font-medium leading-[1.08] text-cream md:text-display-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-body-lg text-cream/85">{subtitle}</p>
          )}
        </div>
      </header>
    )
  }

  return (
    <header className="bg-blush">
      <div className="container-x pt-36 pb-16 text-center md:pt-44 md:pb-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-headline-lg font-medium leading-[1.08] text-ink md:text-display-lg">
          {title}
        </h1>
        <span className="rule mx-auto mt-6 block w-14" />
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-on-surface-variant">{subtitle}</p>
        )}
      </div>
    </header>
  )
}
