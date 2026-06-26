import type { ReactNode } from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  className = '',
}: {
  readonly eyebrow?: string
  readonly title: ReactNode
  readonly intro?: ReactNode
  readonly align?: 'center' | 'left'
  readonly className?: string
}) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 font-display text-headline-md text-ink md:text-headline-lg">{title}</h2>
      <span className={`rule mt-6 ${centered ? 'mx-auto block w-14' : ''}`} />
      {intro && <p className="mt-6 text-body-lg text-on-surface-variant">{intro}</p>}
    </div>
  )
}
