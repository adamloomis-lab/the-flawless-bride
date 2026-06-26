import LegalLayout from '../components/LegalLayout'
import { company } from '../data/site'

export default function Terms() {
  return (
    <LegalLayout title="Terms of Use" updated="May 2026">
      <p>
        Welcome to The Flawless Bride. By using this website, you agree to the following terms.
        Please read them carefully.
      </p>

      <h2>Use of This Website</h2>
      <p>
        This website is provided for general information about our boutique, our collection, and our
        services. Content may be updated or changed at any time without notice. While we work to keep
        information accurate, gown availability, designers, pricing, and timelines are subject to
        change.
      </p>

      <h2>Appointments &amp; Bookings</h2>
      <p>
        Appointments are private and by appointment only. Booking requests made through this website
        or our scheduling provider are confirmed by our team. We ask that you give us notice if you
        need to reschedule or cancel so we can offer the time to another bride.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All photography, text, and design on this site are the property of The Flawless Bride or our
        respective designers and may not be reproduced without permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        This website is provided "as is." The Flawless Bride is not liable for any damages arising
        from your use of the site or reliance on its content.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us at <a href={`mailto:${company.email}`}>{company.email}</a>{' '}
        or <a href={company.phoneHref}>{company.phone}</a>.
      </p>
    </LegalLayout>
  )
}
