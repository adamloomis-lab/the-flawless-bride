// Single source of truth for site content.
//
// Confirmed from the boutique's live Setmore page: name, address, phone, email,
// domain, and booking policy. Hours are by-appointment-only (no set hours).
// Copy now matches the real Setmore policy: 2 adult guests max, pricing starts
// at $2,000, and the $50/$75 appointment fees are disclosed.
// ⚠️ STILL TODO: exact geo coordinates and Instagram URL.

export const company = {
  name: 'The Flawless Bride',
  tagline: 'Bridal, Beautifully Tailored to You',
  shortBlurb:
    "Northeast Ohio's premier bridal boutique dedicated to sizes 16 to 32W. Today's top designers, expert fittings, and a private experience built around you.",
  // Confirmed from the boutique's live Setmore booking page.
  phone: '(330) 615-7195',
  phoneHref: 'tel:+13306157195',
  email: 'theflawlessbride@gmail.com',
  booking: 'https://theflawlessbrideboutique.setmore.com/',
  address: {
    street: '90 Shiawassee Avenue',
    city: 'Fairlawn',
    state: 'OH',
    zip: '44333',
  },
  addressOneLine: '90 Shiawassee Avenue, Fairlawn, OH 44333',
  // TODO(client): exact coordinates (omit -> no geo schema; address still carries location)
  geo: { lat: 0, lng: 0 },
  mapsDir:
    'https://www.google.com/maps/dir/?api=1&destination=The+Flawless+Bride+90+Shiawassee+Avenue+Fairlawn+OH+44333',
  mapsEmbed:
    'https://www.google.com/maps?q=The+Flawless+Bride+90+Shiawassee+Avenue+Fairlawn+OH+44333&output=embed',
  social: {
    facebook: 'https://www.facebook.com/ShopTheFlawlessBride',
    // TODO(client): Instagram URL (icon hidden while blank)
    instagram: '',
  },
} as const

// Cities the boutique draws brides from — used in copy + areaServed schema.
export const serviceAreas = ['Cleveland', 'Akron', 'Canton', 'Medina', 'Northeast Ohio']

// The boutique is strictly by appointment only — no set walk-in hours.
export const hoursNote = 'By appointment only'

export const differentiators = [
  {
    title: 'Sizes 16 to 32W',
    body:
      'Our entire collection is curated in your size, so you can try on the gown, see it on, and know exactly how it will look.',
  },
  {
    title: "Today's Top Designers",
    body:
      'We carry a thoughtfully selected lineup of bridal designers known for craftsmanship, elegance, and exceptional fit.',
  },
  {
    title: 'Custom Sizing Available',
    body:
      'Many of our designers offer custom sizing, so your gown can be made to your exact measurements from the start.',
  },
]

// Silhouette cards for the homepage "Discover Our Collection" rail.
export const collection = [
  { src: '/images/g-lace-aline.webp', name: 'Lace A-Line', note: 'Timeless & romantic' },
  { src: '/images/g-ballgown-tulle.webp', name: 'Ball Gown', note: 'Full, fairy-tale volume' },
  { src: '/images/g-blush-bouquet2.webp', name: 'Fit & Flare', note: 'Curve-loving silhouette' },
  { src: '/images/g-black-lace.webp', name: 'Bold & Modern', note: 'For the unconventional bride' },
]

// Curated from the boutique's real Google reviews (strongest, on-brand ones).
export const testimonials = [
  {
    name: 'Nina F.',
    quote:
      "Ellen is the owner and she was AMAZING! I drove two hours to this boutique and I was not disappointed. They were so friendly and down to earth. They help you in and out of these gorgeous gowns and they're so knowledgeable about the fabrics and designers. I HIGHLY recommend this boutique.",
  },
  {
    name: 'Gianna G.',
    quote:
      "I can't say enough positive things about this bridal boutique! After shopping at two big wedding dress retailers and feeling completely discouraged, I was ready to give up and find something sub-par for my big day. Then I found this place.",
  },
  {
    name: 'Laura R.',
    quote:
      'If you are a plus size bride, this should be the first stop on your journey of trying to find your dress. The staff here is an absolute joy to work with. They are truly there to help you feel beautiful.',
  },
  {
    name: 'Emily P.',
    quote:
      'The store was amazing. The dresses were amazing. There is something for every curvy bride out there at this boutique. Request Kasey because she rocked it and made me feel so comfortable. Dress shopping was something I was so afraid of but not anymore after visiting Flawless!',
  },
  {
    name: 'Hunter W.',
    quote:
      "We went shopping for my sister's wedding dress and this place is an absolute DREAM! The owner is so sweet and an absolute expert. She knew exactly what we needed to see. I would recommend this to ANY plus size bride. The positivity is incredible.",
  },
  {
    name: 'Krista L.',
    quote:
      'Got my dress from here and I absolutely love it. I had an awesome experience, and they made me feel so beautiful. Every dress was gorgeous and it was hard to figure out which one was for me. Would definitely recommend to anyone looking for an awesome experience.',
  },
]

// Gallery grid — every optimized photo.
export const gallery = [
  { src: '/images/g-blush-bouquet.webp', alt: 'Bride in a lace gown holding a bouquet against a blush backdrop' },
  { src: '/images/g-emerald-sleeve.webp', alt: 'Bride in a long-sleeve gown in an emerald styled room' },
  { src: '/images/g-ballgown-pink.webp', alt: 'Bride in a full ball gown beside a blush curtain backdrop' },
  { src: '/images/g-mirror-arch.webp', alt: 'Bride beside an arched mirror in a white gown' },
  { src: '/images/g-black-lace.webp', alt: 'Bride in a dramatic black lace gown' },
  { src: '/images/g-seated-window.webp', alt: 'Bride seated by a window in a flowing gown' },
  { src: '/images/g-blush-1.webp', alt: 'Bride in a romantic gown against a soft blush backdrop' },
  { src: '/images/g-ballgown-white.webp', alt: 'Bride in a classic white ball gown' },
  { src: '/images/g-emerald-mirror.webp', alt: 'Bride beside a mirror in an emerald styled room' },
  { src: '/images/g-blush-2.webp', alt: 'Bride in a fitted gown with a bouquet, blush backdrop' },
  { src: '/images/g-lace-aline.webp', alt: 'Bride in a lace A-line gown' },
  { src: '/images/g-window-emerald.webp', alt: 'Bride by a window in an emerald room' },
  { src: '/images/g-couple-black.webp', alt: 'Couple, bride in a black gown by a floral wall' },
  { src: '/images/g-emerald-bouquet.webp', alt: 'Bride with a bouquet in an emerald styled room' },
  { src: '/images/g-ballgown-tulle.webp', alt: 'Bride in a voluminous tulle ball gown' },
  { src: '/images/g-blush-bouquet2.webp', alt: 'Bride holding a bouquet against a blush backdrop' },
  { src: '/images/g-outdoor-tree.webp', alt: 'Bride outdoors beside a tree in a fitted gown' },
  { src: '/images/g-bridesmaids.webp', alt: 'Bride with her bridesmaids in a styled room' },
  { src: '/images/g-black-emerald.webp', alt: 'Bride in a black gown in an emerald room' },
  { src: '/images/g-family.webp', alt: 'Bride with family in a styled room' },
  { src: '/images/g-blush-drape.webp', alt: 'Bride in a gown against a draped blush backdrop' },
  { src: '/images/detail-lace-back.webp', alt: 'Close-up of a lace gown back with a bouquet' },
]

// Book-an-Appointment "Good to Know" + tips (rolled-in FAQ content).
export const bookingTips = [
  "Wear undergarments you'd be comfortable being seen in",
  'Bring shoes with the heel height you plan to wear on your wedding day',
  'Bring inspiration photos if you have them, or come open to discovering your style',
  'Plan to spend the full 50 minutes with us',
  'Two guests maximum, adults only (too many opinions can make the decision harder)',
]

export const goodToKnow = [
  {
    title: 'Sizing',
    body:
      'We specialize in sizes 16 to 32W, with our full collection available to try on in your size. Many of our designers also offer custom sizing, built to your exact measurements.',
  },
  {
    title: 'Timeline',
    body:
      'Most gowns take 4 to 6 months to arrive, plus time for alterations. We recommend booking your appointment 9 to 12 months before your wedding date when possible. Shorter timelines? Let us know when you book and we’ll do our best to make it work.',
  },
  {
    title: 'Investment',
    body:
      'Our gowns start at around $2,000. Your consultant will work within your budget to find the styles you love most.',
  },
  {
    title: 'Appointments',
    body:
      'A bridal appointment is $50 and runs about 50 minutes. Prefer extra time with a stylist? Our Find My Style session is $75 and runs about 80 minutes. Book the one that fits you below.',
  },
]
