import type { ReactNode } from 'react'
import PageHero from './PageHero'

// Shared shell for Privacy / Terms / Accessibility. Renders a blush header and a
// readable prose column with consistent heading + paragraph styling.
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  readonly title: string
  readonly updated: string
  readonly children: ReactNode
}) {
  return (
    <>
      <PageHero eyebrow="The Flawless Bride" title={title} />
      <section className="bg-cream">
        <div className="container-x py-section-gap">
          <div
            className="mx-auto max-w-3xl text-body-md leading-relaxed text-on-surface
              [&_a]:text-rose-dark [&_a]:underline [&_a]:underline-offset-4
              [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-headline-sm [&_h2]:text-ink
              [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
          >
            <p className="text-label-sm uppercase tracking-[0.2em] text-muted">
              Last updated: {updated}
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
