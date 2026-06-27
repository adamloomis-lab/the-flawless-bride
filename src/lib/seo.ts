import { company, serviceAreas, testimonials } from '../data/site'

// Production target domain. Canonicals, sitemap, OG and schema all point here so
// SEO value lands on the live host the moment DNS flips from the old Duda site.
// Live primary domain = the apex (Netlify custom_domain, no www). Canonicals,
// sitemap, OG and schema all align to it.
export const SITE_URL = 'https://theflawlessbride.com'

const OG_IMAGE = '/images/g-blush-bouquet.webp'

export const abs = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

// Netlify serves pages with a trailing slash; keep canonical/sitemap URLs aligned.
export const pageUrl = (path: string) =>
  abs(path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`)

export function localBusinessSchema() {
  const a = company.address
  const hasGeo = company.geo.lat !== 0 && company.geo.lng !== 0
  return {
    '@context': 'https://schema.org',
    '@type': ['BridalShop', 'ClothingStore', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: company.name,
    url: SITE_URL,
    image: abs(OG_IMAGE),
    logo: abs('/images/logo.png'),
    telephone: company.phone,
    email: company.email,
    priceRange: '$$',
    description: company.shortBlurb,
    slogan: company.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: 'US',
    },
    ...(hasGeo
      ? { geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng } }
      : {}),
    areaServed: serviceAreas.map((city) => ({ '@type': 'City', name: `${city}, OH` })),
    availableLanguage: 'English',
    knowsAbout: ['Plus-size wedding dresses', 'Bridal gowns sizes 16 to 32W', 'Custom bridal sizing'],
    ...(company.social.facebook || company.social.instagram
      ? { sameAs: [company.social.facebook, company.social.instagram].filter(Boolean) }
      : {}),
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

function reviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BridalShop',
    '@id': `${SITE_URL}/#business`,
    name: company.name,
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      author: { '@type': 'Person', name: t.name },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  }
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: pageUrl(it.path),
    })),
  }
}

export type PageMeta = {
  title: string
  description: string
  canonical: string
  ogImage: string
  jsonLd: object[]
}

const crumb = (name: string, path: string) =>
  breadcrumb([{ name: 'Home', path: '/' }, { name, path }])

export function getPageMeta(rawPath: string): PageMeta {
  const path = rawPath !== '/' ? rawPath.replace(/\/$/, '') : '/'
  const ogImage = abs(OG_IMAGE)

  switch (path) {
    case '/':
      return {
        title: 'The Flawless Bride | Plus-Size Bridal Boutique, Cleveland & Akron, OH',
        description:
          "Northeast Ohio's premier bridal boutique for sizes 16 to 32W. Today's top designers, private fittings, and an experience built around you. Book your appointment.",
        canonical: pageUrl('/'),
        ogImage,
        jsonLd: [localBusinessSchema(), websiteSchema(), reviewSchema()],
      }
    case '/our-story':
      return {
        title: 'Our Story | The Flawless Bride, Plus-Size Bridal in Northeast Ohio',
        description:
          'Why we built Northeast Ohio’s only bridal boutique dedicated to sizes 16 to 32W, where every gown is made to fit, flatter, and be tried on the way it’s meant to be worn.',
        canonical: pageUrl('/our-story'),
        ogImage: abs('/images/detail-lace-back.webp'),
        jsonLd: [localBusinessSchema(), crumb('Our Story', '/our-story')],
      }
    case '/gallery':
      return {
        title: 'Gallery | Real Brides at The Flawless Bride, Cleveland & Akron',
        description:
          'Real brides, real moments. Browse gowns from our shop, our brides, and our designers, all available to try on in sizes 16 to 32W.',
        canonical: pageUrl('/gallery'),
        ogImage: abs('/images/g-ballgown-white.webp'),
        jsonLd: [
          localBusinessSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'The Flawless Bride Gallery',
            url: pageUrl('/gallery'),
            isPartOf: { '@id': `${SITE_URL}/#website` },
          },
          crumb('Gallery', '/gallery'),
        ],
      }
    case '/book':
      return {
        title: 'Book an Appointment | The Flawless Bride, Private Bridal Fittings',
        description:
          'Private, by-appointment bridal consultations (about 50 minutes) for sizes 16 to 32W. What to expect, tips, timelines, and pricing, plus book your appointment online.',
        canonical: pageUrl('/book'),
        ogImage: abs('/images/g-seated-window.webp'),
        jsonLd: [localBusinessSchema(), crumb('Book an Appointment', '/book')],
      }
    case '/contact':
      return {
        title: 'Contact & Visit | The Flawless Bride, Cleveland & Akron Bridal',
        description: `Visit The Flawless Bride. Hours, directions, and contact details for Northeast Ohio’s plus-size bridal boutique. Appointments required. Call ${company.phone}.`,
        canonical: pageUrl('/contact'),
        ogImage,
        jsonLd: [
          localBusinessSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: pageUrl('/contact'),
            about: { '@id': `${SITE_URL}/#business` },
          },
          crumb('Contact', '/contact'),
        ],
      }
    case '/privacy':
      return {
        title: 'Privacy Policy | The Flawless Bride',
        description: 'How The Flawless Bride collects, uses, and protects your information.',
        canonical: pageUrl('/privacy'),
        ogImage,
        jsonLd: [crumb('Privacy Policy', '/privacy')],
      }
    case '/terms':
      return {
        title: 'Terms of Use | The Flawless Bride',
        description: 'The terms that govern your use of the The Flawless Bride website.',
        canonical: pageUrl('/terms'),
        ogImage,
        jsonLd: [crumb('Terms of Use', '/terms')],
      }
    case '/accessibility':
      return {
        title: 'Accessibility Statement | The Flawless Bride',
        description:
          'Our commitment to making our website and boutique welcoming and accessible to every bride.',
        canonical: pageUrl('/accessibility'),
        ogImage,
        jsonLd: [crumb('Accessibility', '/accessibility')],
      }
    default:
      return {
        title: 'Page Not Found | The Flawless Bride',
        description:
          "Sorry, we couldn't find that page. The Flawless Bride is Northeast Ohio's plus-size bridal boutique for sizes 16 to 32W.",
        canonical: pageUrl(path),
        ogImage,
        jsonLd: [localBusinessSchema()],
      }
  }
}

export const ALL_ROUTES: string[] = [
  '/',
  '/our-story',
  '/gallery',
  '/book',
  '/contact',
  '/privacy',
  '/terms',
  '/accessibility',
]
