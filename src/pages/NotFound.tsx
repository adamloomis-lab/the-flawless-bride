import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-blush">
      <div className="container-x text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-headline-lg text-ink md:text-display-lg">
          This page slipped away
        </h1>
        <p className="mx-auto mt-5 max-w-md text-body-lg text-on-surface-variant">
          The page you're looking for can't be found, but your dress is still out there. Let's get
          you back on track.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/">Return Home</Button>
          <Button href="/gallery" variant="outline">View the Gallery</Button>
        </div>
      </div>
    </section>
  )
}
