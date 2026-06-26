import LegalLayout from '../components/LegalLayout'
import { company } from '../data/site'

export default function Accessibility() {
  return (
    <LegalLayout title="Accessibility Statement" updated="June 2026">
      <h2>Our commitment</h2>
      <p>
        This site is built to WCAG 2.1 Level AA, the standard referenced by the ADA for web
        accessibility. We review and update our accessibility practices on an ongoing basis.
      </p>

      <h2>What we have done</h2>
      <p>We have taken the following steps to make this site accessible to all visitors:</p>
      <ul>
        <li>
          Skip links allow keyboard and screen reader users to bypass navigation and get straight
          to the main content without tabbing through every menu item.
        </li>
        <li>
          A visible focus outline appears on every interactive element when navigated by keyboard,
          so it is always clear where you are on the page.
        </li>
        <li>
          Text colors are chosen to meet the 4.5:1 minimum contrast ratio for readability by
          people with low vision.
        </li>
        <li>
          All form fields, buttons, and interactive elements have descriptive labels that are
          announced correctly by screen readers.
        </li>
        <li>
          Animations automatically reduce for users who have the Reduce Motion preference enabled
          on their device.
        </li>
      </ul>

      <h2>Report an issue</h2>
      <p>
        If you encounter any accessibility barrier on this site, please contact us and we will
        address it promptly. Call us at{' '}
        <a href={company.phoneHref}>{company.phone}</a> or reach out through our{' '}
        <a href="/contact">contact page</a> — we are happy to help.
      </p>
    </LegalLayout>
  )
}
