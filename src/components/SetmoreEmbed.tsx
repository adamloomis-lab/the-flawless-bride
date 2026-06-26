import { company } from '../data/site'

// Inline Setmore booking widget. The iframe loads the boutique's public booking
// page so brides can reserve without leaving the site. A plain link is provided
// as a fallback for no-iframe / reduced environments.
export default function SetmoreEmbed() {
  return (
    <div>
      <div className="overflow-hidden rounded border border-outline bg-ivory shadow-[0_30px_80px_-50px_rgba(70,58,49,0.5)]">
        <iframe
          src={company.booking}
          title="Book an appointment with The Flawless Bride"
          loading="lazy"
          className="h-[760px] w-full"
        />
      </div>
      <p className="mt-4 text-center text-body-md text-on-surface-variant">
        Trouble viewing the calendar?{' '}
        <a
          href={company.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-dark underline underline-offset-4 hover:text-rose"
        >
          Open our booking page in a new tab
        </a>
        .
      </p>
    </div>
  )
}
