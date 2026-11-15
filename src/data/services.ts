import type { Lang, ServiceId } from './site';

type L10n<T> = Record<Lang, T>;

export interface Service {
  id: ServiceId;
  image: string;
  /** Short label used in navigation and tickers. */
  label: L10n<string>;
  title: L10n<string>;
  lead: L10n<string>;
  bullets: L10n<string[]>;
  /** Short line shown under the title on cards. */
  meta: L10n<string>;
}

export const services: Service[] = [
  {
    id: 'carpentry',
    image: 'facade',
    label: { nb: 'Snekring', en: 'Carpentry', el: 'Ξυλουργική' },
    title: { nb: 'Snekring', en: 'Carpentry works', el: 'Ξυλουργικές εργασίες' },
    lead: {
      nb: 'Innerdører, ytterdører, gulv, kjøkken og skap — montert presist og tilpasset rommet det skal stå i.',
      en: 'Interior doors, exterior doors, flooring, kitchens and wardrobes — fitted precisely and made for the room they belong to.',
      el: 'Εσωτερικές και εξωτερικές πόρτες, δάπεδα, κουζίνες και ντουλάπες — τοποθετημένα με ακρίβεια, για τον χώρο στον οποίο ανήκουν.',
    },
    bullets: {
      nb: [
        'Montering av innerdører',
        'Montering av ytterdører',
        'Legging av gulv',
        'Montering av kjøkkenmøbler',
        'Montering av skap',
        'Montering av pergolaer',
      ],
      en: [
        'Interior door installation',
        'Exterior door installation',
        'Floor laying',
        'Kitchen furniture assembly',
        'Cabinet and wardrobe assembly',
        'Pergola assembly',
      ],
      el: [
        'Τοποθέτηση εσωτερικών πορτών',
        'Τοποθέτηση εξωτερικών πορτών',
        'Τοποθέτηση δαπέδων',
        'Τοποθέτηση επίπλων κουζίνας',
        'Τοποθέτηση ντουλαπιών',
        'Τοποθέτηση πέργκολας',
      ],
    },
    meta: { nb: '6 arbeidsoppgaver', en: '6 work items', el: '6 εργασίες' },
  },
  {
    id: 'painting',
    image: 'painting-ladder',
    label: { nb: 'Maling', en: 'Painting', el: 'Χρωματισμοί' },
    title: { nb: 'Maling', en: 'Painting works', el: 'Χρωματισμοί' },
    lead: {
      nb: 'Innvendig og utvendig maling, treverk, tapet og veggdekorasjoner — og et fargevalg vi tar sammen med deg.',
      en: 'Interior and exterior painting, timber surfaces, wallpaper and wall decoration — with colours chosen together with you.',
      el: 'Εσωτερικοί και εξωτερικοί χρωματισμοί, ξύλινες επιφάνειες, ταπετσαρίες και τεχνοτροπίες — με επιλογή χρωμάτων μαζί σας.',
    },
    bullets: {
      nb: [
        'Innvendig maling',
        'Utvendig maling',
        'Maling av treflater (glans, lakk, o.s.v.)',
        'Veggdekorasjoner',
        'Tapetsering',
      ],
      en: [
        'Interior painting',
        'Exterior painting',
        'Painting of timber surfaces (gloss, lacquer etc.)',
        'Wall decorations',
        'Wallpapering',
      ],
      el: [
        'Εργασίες εσωτερικών χρωματισμών',
        'Εργασίες εξωτερικών χρωματισμών',
        'Χρωματισμοί ξύλινων επιφανειών (λούστρα, λάκες κλπ)',
        'Τεχνοτροπίες σε τοίχους',
        'Τοποθέτηση ταπετσαριών',
      ],
    },
    meta: { nb: '5 arbeidsoppgaver', en: '5 work items', el: '5 εργασίες' },
  },
  {
    id: 'plaster',
    image: 'plaster-detail',
    label: { nb: 'Gipsarbeid', en: 'Plasterboard', el: 'Γυψοσανίδα' },
    title: { nb: 'Gipsarbeid', en: 'Plasterboard works', el: 'Εργασίες γυψοσανίδας' },
    lead: {
      nb: 'Skillevegger, tak og dekor som får lys og linjer til å sitte. Gips er håndverk, ikke bare plater.',
      en: 'Partitions, ceilings and decoration that make light and lines sit right. Plasterboard is craft, not just panels.',
      el: 'Χωρίσματα, οροφές και διακόσμηση που κάνουν το φως και τις γραμμές να δένουν. Η γυψοσανίδα είναι τέχνη, όχι απλώς πλάκες.',
    },
    bullets: {
      nb: [
        'Skillevegger med gipsplater',
        'Gipsdekorasjoner',
        'Montering av takplater med gipsdekorasjoner',
        'Overlys',
        'Rosetter',
      ],
      en: [
        'Plasterboard partitions',
        'Plaster decorations',
        'Ceiling panels with plaster decorations',
        'Cove lighting',
        'Ceiling roses',
      ],
      el: [
        'Χωρίσματα με γυψοσανίδες',
        'Γύψινες διακοσμήσεις',
        'Ψευδοροφές με γύψινες διακοσμήσεις',
        'Κρυφός φωτισμός',
        'Ροζέτες',
      ],
    },
    meta: { nb: '5 arbeidsoppgaver', en: '5 work items', el: '5 εργασίες' },
  },
  {
    id: 'tiling',
    image: 'stone-steps',
    label: { nb: 'Flislegging', en: 'Tiling', el: 'Πλακίδια' },
    title: { nb: 'Flislegging, fuging', en: 'Tiling works', el: 'Τοποθετήσεις πλακιδίων' },
    lead: {
      nb: 'Flis, stein og mur — ute og inne. Rett linje, jevn fuge og materialer som tåler norsk klima.',
      en: 'Tiles, stone and masonry — indoors and out. True lines, even joints and materials that handle a Norwegian climate.',
      el: 'Πλακίδια, πέτρα και τοιχοποιία — εσωτερικά και εξωτερικά. Ίσιες γραμμές, ομοιόμορφοι αρμοί και υλικά που αντέχουν.',
    },
    bullets: {
      nb: ['Mur og flislegging', 'Plassering av stein'],
      en: ['Masonry and tiling', 'Stone laying'],
      el: ['Εργασίες τοιχοποιίας και τοποθέτησης πλακιδίων', 'Εργασίες τοποθέτησης πέτρας'],
    },
    meta: { nb: '2 fagområder', en: '2 disciplines', el: '2 ειδικότητες' },
  },
  {
    id: 'demolition',
    image: 'demolition',
    label: { nb: 'Riving', en: 'Demolition', el: 'Κατεδαφίσεις' },
    title: { nb: 'Riving og opprydding', en: 'Demolitions and clean-ups', el: 'Κατεδαφίσεις και καθαρισμοί' },
    lead: {
      nb: 'Vi tar ned det som må bort og leverer plassen ryddet — klar for neste fase.',
      en: 'We take down what has to go and hand back the space clean — ready for the next phase.',
      el: 'Κατεδαφίζουμε ό,τι πρέπει να φύγει και παραδίδουμε τον χώρο καθαρό — έτοιμο για την επόμενη φάση.',
    },
    bullets: {
      nb: [
        'Vi påtar oss små nedrivingsoppdrag.',
        'Vi påtar oss rengjøring av arbeidsplasser, boliger, kontorer, etc.',
      ],
      en: ['Small demolition works.', 'Cleaning of worksites, homes, offices, etc.'],
      el: [
        'Αναλαμβάνουμε μικρές κατεδαφίσεις.',
        'Αναλαμβάνουμε καθαρισμούς χώρων εργασίας, κατοικιών, γραφείων κλπ.',
      ],
    },
    meta: { nb: '2 arbeidsoppgaver', en: '2 work items', el: '2 εργασίες' },
  },
];

export const serviceById = (id: ServiceId) => services.find((s) => s.id === id)!;
