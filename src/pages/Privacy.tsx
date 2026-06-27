import LegalLayout from '../components/LegalLayout'
import { company } from '../data/site'

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="May 2026">
      <p>
        The Flawless Bride ("we," "us," or "our") respects your privacy. This policy explains what
        information we collect when you visit our website or contact us, and how we use it.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you submit our contact form or book an appointment, we collect the information you
        provide, such as your name, email address, phone number, wedding date, and any message you
        send us. We use this information solely to respond to your inquiry and coordinate your
        appointment.
      </p>
      <p>
        Like most websites, we may also collect basic, non-identifying analytics such as pages
        visited and general location, to help us improve the site.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your questions and schedule your appointment</li>
        <li>To provide information about our gowns, designers, and services</li>
        <li>To improve our website and the experience we offer brides</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>
        Appointments are scheduled through Setmore, our booking provider, and form submissions are
        processed through our website host. These providers handle your information under their own
        privacy policies. We do not sell or rent your personal information to anyone.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may request that we update or delete the information you've shared with us at any time by
        emailing <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at <a href={`mailto:${company.email}`}>{company.email}</a>{' '}
        or <a href={company.phoneHref}>{company.phone}</a>.
      </p>
    </LegalLayout>
  )
}
