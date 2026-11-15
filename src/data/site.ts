/**
 * Single source of truth for brand, contact details and URL structure.
 * Contact data mirrors the details published on designconstruction.no.
 */

export const site = {
  name: 'Design Construction',
  domain: 'designconstruction.no',
  url: 'https://designconstruction-no.web.app',
  email: 'info@designconstruction.no',
  phones: [
    { tel: '+4746344342', display: '4634 4342' },
    { tel: '+4792508555', display: '9250 8555' },
  ],
  address: {
    street: 'Marie Kirkeruds vei 17',
    postalCode: '1407',
    city: 'Vinterbro',
    country: 'NO',
  },
  mapsQuery: 'Marie+Kirkeruds+vei+17,+1407+Vinterbro,+Norge',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Marie+Kirkeruds+vei+17%2C+1407+Vinterbro%2C+Norge',
  geo: { lat: 59.7419, lng: 10.7735 },
  languages: ['nb', 'en', 'el'] as const,
  social: [] as { label: string; href: string }[],
};

export type Lang = (typeof site.languages)[number];

/** Two-letter code shown in the language switcher. */
export const langCode: Record<Lang, string> = { nb: 'NO', en: 'EN', el: 'EL' };

export const serviceIds = ['carpentry', 'painting', 'plaster', 'tiling', 'demolition'] as const;
export type ServiceId = (typeof serviceIds)[number];

export type PageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'gallery'
  | 'terms'
  | 'staff'
  | 'contact'
  | `service:${ServiceId}`;

/** Locale-prefixed slugs. Norwegian lives at the root; the old WordPress URLs are preserved. */
export const routes: Record<Lang, Record<PageKey, string>> = {
  nb: {
    home: '',
    about: 'om-oss',
    services: 'tjenester',
    gallery: 'galleri',
    terms: 'vilkar',
    staff: 'personale',
    contact: 'kontakt-oss',
    'service:carpentry': 'tjenester/snekring',
    'service:painting': 'tjenester/maling',
    'service:plaster': 'tjenester/gipsarbeid',
    'service:tiling': 'tjenester/flislegging-fuging',
    'service:demolition': 'tjenester/riving-og-opprydding',
  },
  en: {
    home: '',
    about: 'about-us',
    services: 'services',
    gallery: 'gallery',
    terms: 'working-terms-and-conditions',
    staff: 'staff',
    contact: 'contact-us',
    'service:carpentry': 'services/carpentry-works',
    'service:painting': 'services/painting-works',
    'service:plaster': 'services/plasterboard-works',
    'service:tiling': 'services/tiling-works',
    'service:demolition': 'services/demolitions-and-clean-ups',
  },
  el: {
    home: '',
    about: 'schetika-me-emas',
    services: 'ipiresies',
    gallery: 'erga',
    terms: 'ori',
    staff: 'prosopiko',
    contact: 'epikinoniste-mazi-mas',
    'service:carpentry': 'ipiresies/xilourgikes-ergasies',
    'service:painting': 'ipiresies/chromatismi',
    'service:plaster': 'ipiresies/ergasies-gipsosanidas',
    'service:tiling': 'ipiresies/topothetisis-plakidion',
    'service:demolition': 'ipiresies/katedafisis-ke-katharismi',
  },
};

const prefix: Record<Lang, string> = { nb: '', en: '/en', el: '/el' };

/** Absolute-free path for a page in a language, e.g. pathFor('en', 'about'). */
export function pathFor(lang: Lang, key: PageKey): string {
  const slug = routes[lang][key];
  const joined = `${prefix[lang]}/${slug}`.replace(/\/+/g, '/');
  return joined === '/' ? '/' : joined.replace(/\/$/, '');
}

export const pageKeys = Object.keys(routes.nb) as PageKey[];

export function isLang(value: string): value is Lang {
  return (site.languages as readonly string[]).includes(value);
}

/** Normalise a built pathname: strips the .html suffix Astro's `format: file` emits. */
export function cleanPath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '').replace(/\.html$/, '');
  return clean === '' ? '/' : clean;
}

/** Resolve a clean pathname back to its language and page key. */
export function resolvePath(pathname: string): { lang: Lang; key: PageKey } {
  const clean = cleanPath(pathname);
  for (const lang of site.languages) {
    for (const key of pageKeys) {
      if (pathFor(lang, key) === clean) return { lang, key };
    }
  }
  return { lang: 'nb', key: 'home' };
}
