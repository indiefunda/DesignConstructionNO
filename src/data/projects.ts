import type { Lang } from './site';

type L10n<T> = Record<Lang, T>;

export interface Project {
  id: string;
  image: string;
  /** Layout hint for the asymmetric grid. */
  span: 'wide' | 'tall' | 'normal';
  title: L10n<string>;
  place: L10n<string>;
  note: L10n<string>;
  tag: L10n<string>;
}

/**
 * Work shown in the gallery. Entries that carry an address are the three
 * documented jobs from the previous site; the rest are craft details from our
 * own site archive and are captioned as such rather than as named projects.
 */
export const projects: Project[] = [
  {
    id: 'penthouse',
    image: 'hero-attic',
    span: 'wide',
    title: { nb: 'Penthouse', en: 'Penthouse', el: 'Πεντχάουζ' },
    place: { nb: 'Trondheimsveien 14A, Grünerløkka, Oslo', en: 'Trondheimsveien 14A, Grünerløkka, Oslo', el: 'Όσλο' },
    note: {
      nb: '124 m² · 2 bad · 4 soverom · sydvestvendt takterrasse · peisovn · originale takbjelker',
      en: '124 m² · 2 bathrooms · 4 bedrooms · south-west roof terrace · wood stove · original roof beams',
      el: '124 τ.μ. · 2 μπάνια · 4 υπνοδωμάτια · νοτιοδυτική ταράτσα · ξυλόσομπα · αυθεντικά δοκάρια',
    },
    tag: { nb: 'Oppussing', en: 'Renovation', el: 'Ανακαίνιση' },
  },
  {
    id: 'door',
    image: 'door-opening',
    span: 'tall',
    title: { nb: 'Døråpning 100 × 220', en: 'Door opening 100 × 220', el: 'Άνοιγμα πόρτας 100 × 220' },
    place: { nb: 'Bygdøy Allé 63, Oslo', en: 'Bygdøy Allé 63, Oslo', el: 'Όσλο' },
    note: {
      nb: 'Ny åpning i vegg, avstivet under arbeidet og godkjent av ingeniør.',
      en: 'New opening in a load-bearing wall, propped during works and approved by an engineer.',
      el: 'Νέο άνοιγμα σε φέροντα τοίχο, με υποστύλωση κατά την εργασία και έγκριση μηχανικού.',
    },
    tag: { nb: 'Ombygging', en: 'Rebuild', el: 'Ανακατασκευή' },
  },
  {
    id: 'terrace',
    image: 'stone-paving',
    span: 'normal',
    title: { nb: 'Ny terrasse', en: 'New terrace', el: 'Νέα βεράντα' },
    place: { nb: 'Bygdøy Allé 63, Oslo', en: 'Bygdøy Allé 63, Oslo', el: 'Όσλο' },
    note: {
      nb: 'Stein lagt for hånd, tilpasset terrenget.',
      en: 'Stone laid by hand, fitted to the ground.',
      el: 'Πέτρα τοποθετημένη στο χέρι, προσαρμοσμένη στο έδαφος.',
    },
    tag: { nb: 'Utvendig', en: 'Exterior', el: 'Εξωτερικό' },
  },
  {
    id: 'plaster',
    image: 'plaster-detail',
    span: 'tall',
    title: { nb: 'Gips og form', en: 'Plaster and form', el: 'Γύψος και φόρμα' },
    place: { nb: 'Håndverk', en: 'Craft detail', el: 'Λεπτομέρεια' },
    note: {
      nb: 'Runde åpninger formet og pusset på stedet.',
      en: 'Round openings shaped and finished on site.',
      el: 'Στρογγυλά ανοίγματα διαμορφωμένα και σοβατισμένα επιτόπου.',
    },
    tag: { nb: 'Gipsarbeid', en: 'Plasterboard', el: 'Γυψοσανίδα' },
  },
  {
    id: 'painting',
    image: 'painting-ladder',
    span: 'normal',
    title: { nb: 'Veggfarge', en: 'Wall colour', el: 'Χρώμα τοίχου' },
    place: { nb: 'Håndverk', en: 'Craft detail', el: 'Λεπτομέρεια' },
    note: {
      nb: 'Forarbeid, grunning og to strøk — ingen snarveier.',
      en: 'Preparation, primer and two coats — no shortcuts.',
      el: 'Προετοιμασία, αστάρι και δύο χέρια — χωρίς συντομεύσεις.',
    },
    tag: { nb: 'Maling', en: 'Painting', el: 'Χρωματισμοί' },
  },
  {
    id: 'ceiling',
    image: 'ceiling-moulding',
    span: 'normal',
    title: { nb: 'Taklist', en: 'Cornice', el: 'Κορνίζα' },
    place: { nb: 'Håndverk', en: 'Craft detail', el: 'Λεπτομέρεια' },
    note: {
      nb: 'List og ornament montert i gammel stil.',
      en: 'Moulding and ornament fitted in the old style.',
      el: 'Κορνίζα και διάκοσμος σε παλαιό ύφος.',
    },
    tag: { nb: 'Gipsarbeid', en: 'Plasterboard', el: 'Γυψοσανίδα' },
  },
  {
    id: 'facade',
    image: 'facade',
    span: 'tall',
    title: { nb: 'Entré og tredekk', en: 'Entrance and timber deck', el: 'Είσοδος και ξύλινο δάπεδο' },
    place: { nb: 'Trondheimsveien 14A, Oslo', en: 'Trondheimsveien 14A, Oslo', el: 'Όσλο' },
    note: {
      nb: 'Fasade, tredekk og rampe i massivt tre.',
      en: 'Facade, timber deck and ramp in solid wood.',
      el: 'Πρόσοψη, ξύλινο δάπεδο και ράμπα από μασίφ ξύλο.',
    },
    tag: { nb: 'Snekring', en: 'Carpentry', el: 'Ξυλουργική' },
  },
  {
    id: 'mural',
    image: 'wall-mural',
    span: 'normal',
    title: { nb: 'Dekormaleri', en: 'Decorative painting', el: 'Διακοσμητική ζωγραφική' },
    place: { nb: 'Håndverk', en: 'Craft detail', el: 'Λεπτομέρεια' },
    note: {
      nb: 'Frihånd på vegg, lag for lag.',
      en: 'Freehand on the wall, layer by layer.',
      el: 'Ελεύθερο σχέδιο στον τοίχο, στρώση στρώση.',
    },
    tag: { nb: 'Maling', en: 'Painting', el: 'Χρωματισμοί' },
  },
];
