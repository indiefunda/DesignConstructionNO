import type { PageKey } from './site';

interface Stat {
  value: string;
  unit: string;
  label: string;
}
interface Step {
  n: string;
  title: string;
  body: string;
}
interface TrustItem {
  title: string;
  body: string;
}
interface TermSection {
  id: string;
  title: string;
  items: string[];
}
interface Member {
  name: string;
  role: string;
  image: string;
}

const nb = {
  htmlLang: 'nb',
  ogLocale: 'nb_NO',
  langName: 'Norsk',

  nav: {
    about: 'Om oss',
    services: 'Tjenester',
    gallery: 'Galleri',
    staff: 'Personale',
    contact: 'Kontakt oss',
  },

  ui: {
    menu: 'Meny',
    close: 'Lukk',
    skip: 'Hopp til innhold',
    language: 'Språk',
    languages: { nb: 'Norsk', en: 'English', el: 'Ελληνικά' },
    call: 'Ring oss',
    email: 'Send e-post',
    quote: 'Få et tilbud',
    viewService: 'Se tjenesten',
    allServices: 'Alle tjenester',
    readMore: 'Les mer',
    next: 'Neste',
    prev: 'Forrige',
    of: 'av',
    openImage: 'Åpne bilde større',
    closeImage: 'Lukk bilde',
    home: 'Forsiden',
    mainNav: 'Hovedmeny',
    siteMenu: 'Nettstedmeny',
    scroll: 'Bla ned',
    filter: 'Filtrer',
    filterAll: 'Alt',
    prevService: 'Forrige tjeneste',
    nextService: 'Neste tjeneste',
    backToTop: 'Til toppen',
  },

  home: {
    eyebrow: 'Vinterbro · Oslo · Akershus',
    titleLines: ['Vi bygger', 'det som', 'varer.'],
    lead: 'Renovering, restaurering og ombygging av boliger, kontorer og butikker. Femten års erfaring fra Hellas, åtte år med skandinaviske standarder — og håndverk som tåler tidens tann.',
    ctaPrimary: 'Få et tilbud',
    ctaSecondary: 'Se tjenestene',
    proof: 'Kostnadsfri befaring · Tilbud innen 3–4 virkedager',
    seal: 'HÅNDVERK · PRESISJON · VARIGHET · ',
    stats: [
      { value: '15', unit: 'år', label: 'erfaring fra Hellas' },
      { value: '8', unit: 'år', label: 'skandinaviske standarder' },
      { value: '5', unit: 'fag', label: 'under samme tak' },
    ] as Stat[],
    marquee: ['Snekring', 'Maling', 'Gipsarbeid', 'Flislegging', 'Riving', 'Oppussing', 'Rehabilitering', 'Restaurering'],
    manifesto: {
      index: '01',
      kicker: 'Om oss',
      title: 'Et ungt firma med femten års erfaring i bagasjen.',
      paragraphs: [
        'Vårt firma utfører prosjekter innen oppussing, design og ombygging av boliger, kontorer, butikker, nattklubber, kafeer, osv.',
        'Vi er spesialister på rehabilitering av fasader, oppussing, fargestoffer, små og store reparasjoner, renovering, osv. Vi påtar oss oppdrag innenfor både innvendig og utvendig maling og byggverk.',
        'Vårt firma legger stor vekt på gode relasjoner med kunden. Vi lytter til deres ønsker og – i samarbeid med dere – finner vi de mest egnede materialer, farger og løsninger.',
      ],
      highlight: 'Vi velger materialer i henhold til norske standarder.',
      link: { label: 'Mer om oss', key: 'about' as PageKey },
    },
    services: {
      index: '02',
      kicker: 'Tjenester',
      title: 'Fem fag. Én standard.',
      lead: 'Fra den enkleste reparasjonen til det mest krevende prosjektet. Vi fullfører innen avtalt tid — og leverer arbeid som tåler tidens tann.',
    },
    featured: {
      quote: 'Vi leverer prosjekter som tåler tidens tann.',
      caption: 'Penthouse, Grünerløkka · 124 m²',
      link: { label: 'Se flere arbeider', key: 'gallery' as PageKey },
    },
    process: {
      index: '03',
      kicker: 'Slik jobber vi',
      title: 'Orden i hver time.',
      lead: 'Fra første befaring til siste sluttkontroll vet du hva som skjer, hva det koster og når det er ferdig.',
      steps: [
        {
          n: '01',
          title: 'Befaring',
          body: 'Vi kommer til deg, ser på oppgaven og lytter til ønskene dine. Befaring og sluttkontroll er alltid kostnadsfritt.',
        },
        {
          n: '02',
          title: 'Tilbud',
          body: 'Du får et skriftlig tilbud med fast pris innen 3–4 virkedager, basert på forhåndsregning av arbeidsmengden.',
        },
        {
          n: '03',
          title: 'Utførelse',
          body: 'Arbeidsmannskapet jobber kun på ditt prosjekt til oppdraget er ferdigstilt. Du ser fremdriften og materialforbruket underveis.',
        },
        {
          n: '04',
          title: 'Sluttkontroll',
          body: 'Vi går gjennom resultatet sammen. Du holder tilbake 20 % av totalsummen til arbeidet er godkjent.',
        },
      ] as Step[],
    },
    trust: {
      index: '04',
      kicker: 'Vilkår',
      title: 'Klare avtaler, ingen overraskelser.',
      items: [
        { title: 'Kostnadsfri befaring', body: 'Vi ser på oppgaven før noe bestemmes — og du betaler ingenting for å få en vurdering.' },
        { title: 'Tilbud på 3–4 dager', body: 'Skriftlig tilbud med fast pris, basert på forhåndsregning av arbeidsmengden.' },
        { title: 'Fast pris', body: 'Du vet hva prosjektet koster før vi starter, og du følger materialforbruket underveis.' },
        { title: '20 % holdes tilbake', body: 'Fakturaene overstiger aldri 80 % av sluttprisen. Resten betales når arbeidet er godkjent.' },
      ] as TrustItem[],
      link: { label: 'Les vilkårene', key: 'terms' as PageKey },
    },
    staff: {
      index: '05',
      kicker: 'Folket',
      title: 'Håndverkere, ikke mellomledd.',
      lead: 'Snekkeren og ingeniøren som står bak arbeidet.',
      link: { label: 'Møt oss', key: 'staff' as PageKey },
    },
    cta: {
      index: '06',
      kicker: 'Neste steg',
      title: 'La oss bygge noe som varer.',
      lead: 'Fortell oss om prosjektet. Vi svarer med et tilbud innen 3–4 virkedager.',
      button: 'Kontakt oss',
    },
  },

  about: {
    kicker: 'Om oss',
    titleLines: ['Et nytt firma,', 'bygget på', 'erfaring.'],
    lead: 'Vi er et nytt byggefirma basert i Norge.',
    quote:
      'Vi lytter til deres ønsker og – i samarbeid med dere – finner vi de mest egnede materialer, farger og løsninger.',
    body: [
      'Vi baserer oss på vår 15-års erfaring i Hellas, 8-års erfaring i konstruksjoner etter skandinaviske standarder og ytterligere erfaring fra utlandet.',
      'Vårt firma utfører prosjekter innen oppussing, design og ombygging av boliger, kontorer, butikker, nattklubber, kafeer, osv.',
      'Vi er spesialister på rehabilitering av fasader, oppussing, fargestoffer, små og store reparasjoner, renovering, osv. Vi påtar oss oppdrag innenfor både innvendig og utvendig maling og byggverk.',
      'Vårt firma legger stor vekt på gode relasjoner med kunden. Vi lytter til deres ønsker og – i samarbeid med dere – finner vi de mest egnede materialer, farger og løsninger. Til slutt bruker vi profesjonelt utstyr og kvalitetsprodukter for å oppnå de beste resultatene.',
    ],
    valuesTitle: 'Tre ting vi ikke kompromisser på',
    values: [
      { title: 'Materialer', body: 'Vi velger materialer i henhold til norske standarder — og forklarer hvorfor.' },
      { title: 'Relasjoner', body: 'Vi lytter til ønskene deres og finner materialer, farger og løsninger sammen med dere.' },
      { title: 'Resultat', body: 'Profesjonelt utstyr og kvalitetsprodukter, slik at sluttresultatet holder seg.' },
    ] as TrustItem[],
    factsLabel: 'Kort fortalt',
    facts: [
      { k: 'Erfaring', v: '15 år i Hellas · 8 år i Skandinavia' },
      { k: 'Fag', v: 'Snekring, maling, gips, flis, riving' },
      { k: 'Språk', v: 'Norsk, engelsk og gresk' },
      { k: 'Base', v: 'Vinterbro, Nordre Follo' },
    ],
  },

  servicesPage: {
    kicker: 'Tjenester',
    titleLines: ['Fem fag.', 'Én standard.'],
    lead: 'Basert på vår erfaring og profesjonalitet, forplikter vi oss til å fullføre bygningsarbeider, som spenner fra de enkleste til de mest krevende. Vi fullfører prosjektene innenfor avtalt tid. Vi leverer prosjekter som tåler tidens tann.',
    body: 'Våre håndverkere fullfører alle oppdrag, følger alle reglene for riktig valg og bruk av materialer, slik at det endelige resultatet er elegant og har ergonomiske fordeler.',
    undertake: 'Vi påtar oss renoveringer og restaureringer.',
    detail: {
      kicker: 'Hva vi gjør',
      title: 'Arbeidsoppgaver',
      related: 'Andre tjenester',
      cta: 'Få et tilbud på dette',
      nextService: 'Neste tjeneste',
      prevService: 'Forrige tjeneste',
    },
  },

  galleryPage: {
    kicker: 'Galleri',
    titleLines: ['Arbeid vi', 'har gjort.'],
    lead: 'Et utvalg prosjekter og detaljer fra boliger, kontorer og butikker i Oslo og omegn.',
    note: 'Flere prosjekter legges ut fortløpende.',
    countLabel: 'arbeider',
  },

  termsPage: {
    kicker: 'Vilkår',
    titleLines: ['Slik jobber vi.', 'Dette gjelder.'],
    lead: 'Arbeidsforhold: vilkår. Det vi lover, og hvordan vi regner.',
    sections: [
      {
        id: 'befaring',
        title: 'Befaring og tilbud',
        items: [
          'Kostnadsfri befaring og sluttkontroll av prosjektet.',
          'Vi sender tilbud innen 3–4 virkedager.',
          'Kunden kan se arbeidets fremgang for å holde orden på arbeidstiden og materialkostnader.',
        ],
      },
      {
        id: 'prosjekt',
        title: 'Om prosjektet',
        items: [
          'Avtalen vil være basert på forhåndsregning av arbeidsmengden, og kunden vil få en fast pris.',
          'Våre kunder vil alltid være oppdatert på estimert antall arbeidstimer.',
          'Arbeidsmannskapet jobber kun på prosjektet deres til oppdraget er ferdigstilt.',
        ],
      },
      {
        id: 'materialer',
        title: 'Om materialene',
        items: [
          'Vi har avtaler med de største aktørene innen varehandel, og vi kjøper materialer på daglig basis — slik at du kan holde oversikt over det nøyaktige forbruket.',
          'Kunden kan også kjøpe materialer selv. I så fall hjelper vi med valget av materialer, og med regning på mengder av arbeid og materialer som trengs for prosjektet.',
          '15–20 % av eventualiteter (uforutsette kostnader) er ikke inkludert i prisen.',
        ],
      },
      {
        id: 'betaling',
        title: 'Betalingsbetingelser',
        items: [
          'Etter den tredje virkedagen sender vi en faktura, basert på gjensidig avtale med kunden.',
          'For lengre prosjekter sender vi faktura annenhver uke.',
          'Den totale summen på fakturaene vil ikke overstige 80 % av den endelige prisen — slik holder kunden tilbake 20 % til prosjektet er ferdigstilt.',
        ],
      },
      {
        id: 'garanti',
        title: 'Garanti',
        items: ['Vi garanterer rask og nøyaktig arbeid.', 'Vi leverer prosjekter som tåler tidens tann.'],
      },
    ] as TermSection[],
    note: 'Har du spørsmål om vilkårene? Ta kontakt, så går vi gjennom dem sammen.',
    cta: 'Kontakt oss',
  },

  staffPage: {
    kicker: 'Personale',
    titleLines: ['To fagfolk.', 'Én standard.'],
    lead: 'Fagfolkene som utfører arbeidet.',
    members: [
      { name: 'Roland Kalogeris', role: 'Snekker, maler', image: 'team-roland' },
      { name: 'Budri Aliqi', role: 'Sivilingeniør', image: 'team-budri' },
    ] as Member[],
    join: {
      title: 'Vil du jobbe med oss?',
      body: 'Er du interessert i å jobbe sammen, send oss en henvendelse og vi svarer så snart vi kan.',
      cta: 'Kontakt oss',
    },
  },

  contactPage: {
    kicker: 'Kontakt',
    titleLines: ['Fortell oss', 'om prosjektet.'],
    lead: 'Send oss en henvendelse og vi svarer så snart vi kan — vanligvis innen 3–4 virkedager.',
    form: {
      name: 'Navn',
      email: 'E-post',
      phone: 'Telefon',
      address: 'Adresse',
      subject: 'Emne',
      message: 'Melding',
      required: 'obligatorisk',
      optional: 'valgfritt',
      choose: 'Velg emne',
      subjects: ['Tilbud på prosjekt', 'Befaring', 'Jobb hos oss', 'Annet'],
      send: 'Send henvendelse',
      note: 'Skjemaet åpner e-postprogrammet ditt med meldingen klar.',
      consent: 'Jeg samtykker til at opplysningene brukes til å besvare henvendelsen.',
      messagePlaceholder: 'Hva skal gjøres, hvor, og når ønsker du det ferdig?',
    },
    details: {
      kicker: 'Kontaktinformasjon',
      addressLabel: 'Adresse',
      phoneLabel: 'Telefon',
      emailLabel: 'E-post',
      hoursLabel: 'Åpningstider',
      hours: 'Etter avtale',
      mapLink: 'Åpne i kart',
    },
    status: {
      invalid: 'Fyll ut de obligatoriske feltene.',
      sent: 'E-postprogrammet åpnes med meldingen klar. Hvis det ikke åpner, ring 4634 4342.',
    },
  },

  footer: {
    blurb: 'Snekring, maling, gips, flis og riving — for boliger, kontorer og butikker i Oslo og omegn.',
    pagesLabel: 'Sider',
    servicesLabel: 'Tjenester',
    contactLabel: 'Kontakt',
    legal: 'Design Construction. Alle rettigheter forbeholdt.',
    place: 'Vinterbro · Norge',
    orgNote: 'Org.nr. på forespørsel',
  },

  notFound: {
    kicker: '404',
    title: 'Denne siden finnes ikke.',
    lead: 'Men vi kan fortsatt bygge noe for deg.',
    cta: 'Til forsiden',
  },

  seo: {
    home: {
      title: 'Design Construction — snekring, maling, gips og flis i Oslo og omegn',
      description:
        'Renovering, restaurering og ombygging av boliger, kontorer og butikker. Kostnadsfri befaring, fast pris og tilbud innen 3–4 virkedager. Vinterbro, Norge.',
    },
    about: {
      title: 'Om oss — erfaring fra Hellas og Skandinavia',
      description:
        '15 års erfaring fra Hellas, 8 år med skandinaviske standarder. Vi utfører oppussing, design og ombygging av boliger, kontorer og butikker.',
    },
    services: {
      title: 'Tjenester — snekring, maling, gips og flis',
      description:
        'Vi påtar oss bygningsarbeider fra de enkleste til de mest krevende: snekring, maling, gipsarbeid, flislegging og riving. Avtalt tid, fast pris.',
    },
    gallery: {
      title: 'Galleri — prosjekter i Oslo og omegn',
      description:
        'Et utvalg arbeider: penthouse på Grünerløkka, døråpning og terrasse på Bygdøy Allé, gips, maling og steinlegging.',
    },
    terms: {
      title: 'Vilkår — befaring, tilbud, materialer og betaling',
      description:
        'Slik jobber vi: kostnadsfri befaring og sluttkontroll, tilbud innen 3–4 virkedager, fast pris og 20 % holdes tilbake til arbeidet er godkjent.',
    },
    staff: {
      title: 'Personale — snekker og sivilingeniør',
      description: 'Fagfolkene som utfører arbeidet: Roland Kalogeris, snekker og maler, og Budri Aliqi, sivilingeniør.',
    },
    contact: {
      title: 'Kontakt oss — få et tilbud',
      description:
        'Marie Kirkeruds vei 17, 1407 Vinterbro. Telefon 4634 4342 og 9250 8555. Send en henvendelse og få svar innen 3–4 virkedager.',
    },
  },
};

const en: typeof nb = {
  htmlLang: 'en',
  ogLocale: 'en_GB',
  langName: 'English',

  nav: {
    about: 'About us',
    services: 'Services',
    gallery: 'Gallery',
    staff: 'Staff',
    contact: 'Contact us',
  },

  ui: {
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    language: 'Language',
    languages: { nb: 'Norsk', en: 'English', el: 'Ελληνικά' },
    call: 'Call us',
    email: 'Email us',
    quote: 'Get a quote',
    viewService: 'View service',
    allServices: 'All services',
    readMore: 'Read more',
    next: 'Next',
    prev: 'Previous',
    of: 'of',
    openImage: 'Open larger image',
    closeImage: 'Close image',
    home: 'Home',
    mainNav: 'Main navigation',
    siteMenu: 'Site menu',
    scroll: 'Scroll',
    filter: 'Filter',
    filterAll: 'All',
    prevService: 'Previous service',
    nextService: 'Next service',
    backToTop: 'Back to top',
  },

  home: {
    eyebrow: 'Vinterbro · Oslo · Akershus',
    titleLines: ['We build', 'what', 'lasts.'],
    lead: 'Renovation, restoration and remodelling of homes, offices and shops. Fifteen years of experience from Greece, eight years of Scandinavian standards — and craft that stands the test of time.',
    ctaPrimary: 'Get a quote',
    ctaSecondary: 'See services',
    proof: 'Free site visit · Offer within 3–4 working days',
    seal: 'CRAFT · PRECISION · LONGEVITY · ',
    stats: [
      { value: '15', unit: 'yrs', label: 'experience from Greece' },
      { value: '8', unit: 'yrs', label: 'Scandinavian standards' },
      { value: '5', unit: 'trades', label: 'under one roof' },
    ] as Stat[],
    marquee: ['Carpentry', 'Painting', 'Plasterboard', 'Tiling', 'Demolition', 'Renovation', 'Restoration', 'Finishes'],
    manifesto: {
      index: '01',
      kicker: 'About us',
      title: 'A young company with fifteen years behind it.',
      paragraphs: [
        'Our company undertakes projects of reformation, design and reconstruction of buildings: residences, offices, shops, nightclubs, cafés and more.',
        'We specialise in the renovation of facades, reformations, colourings, minor and major repairs and renovation works. We undertake interior as well as exterior painting and construction works.',
        'Our company places great emphasis on good relations with customers. We listen to their wishes and – in co-operation with them – find the most suitable materials, colours and solutions.',
      ],
      highlight: 'We select materials according to Norwegian standards.',
      link: { label: 'More about us', key: 'about' as PageKey },
    },
    services: {
      index: '02',
      kicker: 'Services',
      title: 'Five trades. One standard.',
      lead: 'From the simplest repair to the most demanding project. We finish on the agreed date — and deliver work that withstands the test of time.',
    },
    featured: {
      quote: 'We deliver projects that withstand the test of time.',
      caption: 'Penthouse, Grünerløkka · 124 m²',
      link: { label: 'See more work', key: 'gallery' as PageKey },
    },
    process: {
      index: '03',
      kicker: 'How we work',
      title: 'Order in every hour.',
      lead: 'From the first site visit to the final check you know what happens, what it costs and when it is done.',
      steps: [
        {
          n: '01',
          title: 'Site visit',
          body: 'We come to you, look at the job and listen to what you want. Inspection and final checking are always free of charge.',
        },
        {
          n: '02',
          title: 'Offer',
          body: 'You receive a written offer with a fixed price within 3–4 working days, based on a bill of quantities for the works.',
        },
        {
          n: '03',
          title: 'Works',
          body: 'The crew works only on your project until it is finished. You can follow progress and material use as we go.',
        },
        {
          n: '04',
          title: 'Final check',
          body: 'We go through the result together. You withhold 20 % of the total until the work is approved.',
        },
      ] as Step[],
    },
    trust: {
      index: '04',
      kicker: 'Terms',
      title: 'Clear agreements, no surprises.',
      items: [
        { title: 'Free site visit', body: 'We look at the job before anything is decided — and you pay nothing for an assessment.' },
        { title: 'Offer in 3–4 days', body: 'A written offer with a fixed price, based on a bill of quantities for the works.' },
        { title: 'Fixed price', body: 'You know what the project costs before we start, and you follow material use along the way.' },
        { title: '20 % withheld', body: 'Invoices never exceed 80 % of the final price. The rest is paid once the work is approved.' },
      ] as TrustItem[],
      link: { label: 'Read the terms', key: 'terms' as PageKey },
    },
    staff: {
      index: '05',
      kicker: 'People',
      title: 'Craftspeople, not middlemen.',
      lead: 'The carpenter and the engineer behind the work.',
      link: { label: 'Meet us', key: 'staff' as PageKey },
    },
    cta: {
      index: '06',
      kicker: 'Next step',
      title: 'Let us build something that lasts.',
      lead: 'Tell us about the project. We reply with an offer within 3–4 working days.',
      button: 'Contact us',
    },
  },

  about: {
    kicker: 'About us',
    titleLines: ['A new company,', 'built on', 'experience.'],
    lead: 'We are a new construction company based in Norway.',
    quote:
      'We listen to their wishes and – in co-operation with them – find the most suitable materials, colours and solutions.',
    body: [
      'We rely on our 15-year experience in Greece, 8-year experience in constructions according to Scandinavian standards and additional experience obtained abroad.',
      'Our company undertakes projects of reformation, designing and reconstruction of buildings (residences, offices, shops, nightclubs, cafés, etc).',
      'We specialise in the renovation of facades, reformations, colourings, minor and major repairs, renovation works, finishes etc. We undertake interior as well as exterior paintings and construction works.',
      'Our company places great emphasis on good relations with customers. We listen to their wishes and – in co-operation with them – we find the most suitable materials, colours and solutions. Finally, we use professional equipment and quality products to achieve the best results.',
    ],
    valuesTitle: 'Three things we do not compromise on',
    values: [
      { title: 'Materials', body: 'We select materials according to Norwegian standards — and explain why.' },
      { title: 'Relations', body: 'We listen to your wishes and find the materials, colours and solutions together with you.' },
      { title: 'Result', body: 'Professional equipment and quality products, so the finished result holds up.' },
    ] as TrustItem[],
    factsLabel: 'In short',
    facts: [
      { k: 'Experience', v: '15 years in Greece · 8 years in Scandinavia' },
      { k: 'Trades', v: 'Carpentry, painting, plasterboard, tiling, demolition' },
      { k: 'Languages', v: 'Norwegian, English and Greek' },
      { k: 'Base', v: 'Vinterbro, Nordre Follo' },
    ],
  },

  servicesPage: {
    kicker: 'Services',
    titleLines: ['Five trades.', 'One standard.'],
    lead: 'Relying on our experience and professionalism, we undertake and successfully complete construction works, which range from the simplest to the most demanding ones. We complete the projects within the agreed time. We deliver projects that withstand the test of time.',
    body: 'Our craftsmen undertake all the works, applying all the rules for the correct selection and use of materials, so that the final result is elegant and has ergonomic benefits.',
    undertake: 'We undertake renovations and restorations.',
    detail: {
      kicker: 'What we do',
      title: 'Work included',
      related: 'Other services',
      cta: 'Get a quote for this',
      nextService: 'Next service',
      prevService: 'Previous service',
    },
  },

  galleryPage: {
    kicker: 'Gallery',
    titleLines: ['Work we', 'have done.'],
    lead: 'A selection of projects and details from homes, offices and shops in Oslo and the surrounding area.',
    note: 'More projects are added as we go.',
    countLabel: 'projects',
  },

  termsPage: {
    kicker: 'Terms',
    titleLines: ['How we work.', 'What applies.'],
    lead: 'Working terms and conditions: what we promise, and how we calculate.',
    sections: [
      {
        id: 'visit',
        title: 'Inspection and offer',
        items: [
          'In situ inspection and final checking of the project, free of charge.',
          'We send offers within 3–4 working days.',
          'The customer can follow the works in progress to keep track of working hours and the cost of materials.',
        ],
      },
      {
        id: 'project',
        title: 'About the project',
        items: [
          'The agreement is based on a bill of quantities for the works, and there is a fixed price.',
          'Our customers are always up to date with the estimated number of working hours.',
          'The working crew works only on your project until the contract is completed.',
        ],
      },
      {
        id: 'materials',
        title: 'About the materials',
        items: [
          'We have agreements with the major names in retail, and we buy materials on a daily basis — so you can keep track of the exact consumption.',
          'The customer can also buy the materials themselves. In that case we help with the choice of materials, and with a bill of quantities for the works and materials needed.',
          'The 15–20 % of contingencies (unforeseen costs) is not included in the price.',
        ],
      },
      {
        id: 'payment',
        title: 'Terms of payment',
        items: [
          'After the third working day we send an invoice, based on mutual agreement with the customer.',
          'For extended projects we send an invoice every two weeks.',
          'The total on the invoices never exceeds 80 % of the final cost — this way the customer withholds 20 % until the project is completed.',
        ],
      },
      {
        id: 'guarantee',
        title: 'Guarantee',
        items: ['We guarantee quick and accurate work.', 'We deliver projects that withstand the test of time.'],
      },
    ] as TermSection[],
    note: 'Questions about the terms? Get in touch and we will go through them with you.',
    cta: 'Contact us',
  },

  staffPage: {
    kicker: 'Staff',
    titleLines: ['Two craftspeople.', 'One standard.'],
    lead: 'The people who carry out the work.',
    members: [
      { name: 'Roland Kalogeris', role: 'Carpenter, painter', image: 'team-roland' },
      { name: 'Budri Aliqi', role: 'Civil engineer', image: 'team-budri' },
    ] as Member[],
    join: {
      title: 'Want to work with us?',
      body: 'If you are interested in working together, send us an inquiry and we will get back to you as soon as we can.',
      cta: 'Contact us',
    },
  },

  contactPage: {
    kicker: 'Contact',
    titleLines: ['Tell us about', 'the project.'],
    lead: 'Send us an inquiry and we will get back to you as soon as we can — usually within 3–4 working days.',
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      subject: 'Subject',
      message: 'Message',
      required: 'required',
      optional: 'optional',
      choose: 'Choose a subject',
      subjects: ['Quote for a project', 'Site visit', 'Work with you', 'Other'],
      send: 'Send inquiry',
      note: 'This form opens your email app with the message ready.',
      consent: 'I agree that my details may be used to respond to my inquiry.',
      messagePlaceholder: 'What needs doing, where, and when would you like it finished?',
    },
    details: {
      kicker: 'Contact details',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hoursLabel: 'Hours',
      hours: 'By appointment',
      mapLink: 'Open in maps',
    },
    status: {
      invalid: 'Please complete the required fields.',
      sent: 'Your email app is opening with the message ready. If it does not open, call 4634 4342.',
    },
  },

  footer: {
    blurb: 'Carpentry, painting, plasterboard, tiling and demolition — for homes, offices and shops in Oslo and the surrounding area.',
    pagesLabel: 'Pages',
    servicesLabel: 'Services',
    contactLabel: 'Contact',
    legal: 'Design Construction. All rights reserved.',
    place: 'Vinterbro · Norway',
    orgNote: 'Org. no. on request',
  },

  notFound: {
    kicker: '404',
    title: 'This page does not exist.',
    lead: 'But we can still build something for you.',
    cta: 'Back to home',
  },

  seo: {
    home: {
      title: 'Design Construction — carpentry, painting, plasterboard and tiling in Oslo',
      description:
        'Renovation, restoration and remodelling of homes, offices and shops. Free site visit, fixed price and an offer within 3–4 working days. Vinterbro, Norway.',
    },
    about: {
      title: 'About us — experience from Greece and Scandinavia',
      description:
        '15 years of experience from Greece, 8 years of Scandinavian standards. We reform, design and rebuild homes, offices, shops and more.',
    },
    services: {
      title: 'Services — carpentry, painting, plaster and tiling',
      description:
        'We undertake construction works from the simplest to the most demanding: carpentry, painting, plasterboard, tiling and demolition. Agreed time, fixed price.',
    },
    gallery: {
      title: 'Gallery — projects in Oslo and the surrounding area',
      description:
        'A selection of work: a penthouse in Grünerløkka, a door opening and terrace on Bygdøy Allé, plaster, painting and stone laying.',
    },
    terms: {
      title: 'Terms — inspection, offer, materials and payment',
      description:
        'How we work: free inspection and final check, an offer within 3–4 working days, fixed price and 20 % withheld until the work is approved.',
    },
    staff: {
      title: 'Staff — carpenter and civil engineer',
      description: 'The people who carry out the work: Roland Kalogeris, carpenter and painter, and Budri Aliqi, civil engineer.',
    },
    contact: {
      title: 'Contact us — get a quote',
      description:
        'Marie Kirkeruds vei 17, 1407 Vinterbro. Phone 4634 4342 and 9250 8555. Send an inquiry and hear back within 3–4 working days.',
    },
  },
};

const el: typeof nb = {
  htmlLang: 'el',
  ogLocale: 'el_GR',
  langName: 'Ελληνικά',

  nav: {
    about: 'Σχετικά',
    services: 'Υπηρεσίες',
    gallery: 'Έργα',
    staff: 'Προσωπικό',
    contact: 'Επικοινωνία',
  },

  ui: {
    menu: 'Μενού',
    close: 'Κλείσιμο',
    skip: 'Μετάβαση στο περιεχόμενο',
    language: 'Γλώσσα',
    languages: { nb: 'Norsk', en: 'English', el: 'Ελληνικά' },
    call: 'Καλέστε μας',
    email: 'Στείλτε email',
    quote: 'Ζητήστε προσφορά',
    viewService: 'Δείτε την υπηρεσία',
    allServices: 'Όλες οι υπηρεσίες',
    readMore: 'Διαβάστε περισσότερα',
    next: 'Επόμενο',
    prev: 'Προηγούμενο',
    of: 'από',
    openImage: 'Άνοιγμα μεγαλύτερης εικόνας',
    closeImage: 'Κλείσιμο εικόνας',
    home: 'Αρχική',
    mainNav: 'Κύρια πλοήγηση',
    siteMenu: 'Μενού ιστότοπου',
    scroll: 'Κύλιση',
    filter: 'Φίλτρο',
    filterAll: 'Όλα',
    prevService: 'Προηγούμενη υπηρεσία',
    nextService: 'Επόμενη υπηρεσία',
    backToTop: 'Επιστροφή στην αρχή',
  },

  home: {
    eyebrow: 'Βίντερμπρο · Όσλο · Άκερσχους',
    titleLines: ['Χτίζουμε', 'ό,τι', 'αντέχει.'],
    lead: 'Ανακαίνιση, αναπαλαίωση και αναδιαμόρφωση κατοικιών, γραφείων και καταστημάτων. Δεκαπέντε χρόνια εμπειρίας από την Ελλάδα, οκτώ χρόνια με σκανδιναβικά πρότυπα — και δουλειά που αντέχει στον χρόνο.',
    ctaPrimary: 'Ζητήστε προσφορά',
    ctaSecondary: 'Δείτε τις υπηρεσίες',
    proof: 'Δωρεάν αυτοψία · Προσφορά σε 3–4 εργάσιμες ημέρες',
    seal: 'ΤΕΧΝΗ · ΑΚΡΙΒΕΙΑ · ΑΝΤΟΧΗ · ',
    stats: [
      { value: '15', unit: 'χρόνια', label: 'εμπειρίας από την Ελλάδα' },
      { value: '8', unit: 'χρόνια', label: 'σκανδιναβικών προτύπων' },
      { value: '5', unit: 'ειδικότητες', label: 'κάτω από την ίδια στέγη' },
    ] as Stat[],
    marquee: ['Ξυλουργική', 'Χρωματισμοί', 'Γυψοσανίδα', 'Πλακίδια', 'Κατεδαφίσεις', 'Ανακαίνιση', 'Αναπαλαίωση', 'Φινιρίσματα'],
    manifesto: {
      index: '01',
      kicker: 'Σχετικά',
      title: 'Μια νέα εταιρεία με δεκαπέντε χρόνια πίσω της.',
      paragraphs: [
        'Η εταιρεία μας αναλαμβάνει έργα αναδιαμόρφωσης, σχεδιασμού και ανακατασκευής κτηρίων: κατοικίες, γραφεία, καταστήματα, κέντρα διασκέδασης, καφέ και άλλα.',
        'Ειδικευόμαστε σε ανακαίνιση προσόψεων, αναδιαμορφώσεις, χρωματισμούς, μικρές και μεγάλες επισκευές και εργασίες ανακαίνισης. Πραγματοποιούμε εσωτερικούς και εξωτερικούς χρωματισμούς, καθώς και κατασκευαστικές εργασίες.',
        'Η εταιρεία μας δίνει μεγάλη έμφαση στην καλή σχέση με τους πελάτες. Ακούει τις επιθυμίες τους και, σε συνεργασία μαζί τους, βρίσκει τα πιο κατάλληλα υλικά, χρώματα και λύσεις.',
      ],
      highlight: 'Επιλέγουμε τα υλικά μας σύμφωνα με τα νορβηγικά πρότυπα.',
      link: { label: 'Περισσότερα για εμάς', key: 'about' as PageKey },
    },
    services: {
      index: '02',
      kicker: 'Υπηρεσίες',
      title: 'Πέντε ειδικότητες. Ένα πρότυπο.',
      lead: 'Από την πιο απλή επισκευή έως την πιο απαιτητική κατασκευή. Παραδίδουμε στον συμφωνηθέντα χρόνο — και έργα που αντέχουν στον χρόνο.',
    },
    featured: {
      quote: 'Παραδίδουμε έργα που αντέχουν στον χρόνο.',
      caption: 'Πεντχάουζ, Όσλο · 124 τ.μ.',
      link: { label: 'Δείτε περισσότερα έργα', key: 'gallery' as PageKey },
    },
    process: {
      index: '03',
      kicker: 'Πώς δουλεύουμε',
      title: 'Τάξη σε κάθε ώρα.',
      lead: 'Από την πρώτη αυτοψία έως τον τελικό έλεγχο ξέρετε τι γίνεται, πόσο κοστίζει και πότε τελειώνει.',
      steps: [
        {
          n: '01',
          title: 'Αυτοψία',
          body: 'Ερχόμαστε στον χώρο, βλέπουμε τη δουλειά και ακούμε τις επιθυμίες σας. Η αυτοψία και ο τελικός έλεγχος είναι πάντα δωρεάν.',
        },
        {
          n: '02',
          title: 'Προσφορά',
          body: 'Λαμβάνετε γραπτή προσφορά με σταθερή τιμή σε 3–4 εργάσιμες ημέρες, βάσει προμέτρησης των εργασιών.',
        },
        {
          n: '03',
          title: 'Εκτέλεση',
          body: 'Το συνεργείο δουλεύει μόνο στο δικό σας έργο μέχρι την ολοκλήρωση. Παρακολουθείτε την πρόοδο και την κατανάλωση υλικών.',
        },
        {
          n: '04',
          title: 'Τελικός έλεγχος',
          body: 'Ελέγχουμε το αποτέλεσμα μαζί. Κρατάτε το 20 % του ποσού μέχρι να εγκριθεί η εργασία.',
        },
      ] as Step[],
    },
    trust: {
      index: '04',
      kicker: 'Όροι',
      title: 'Ξεκάθαρες συμφωνίες, χωρίς εκπλήξεις.',
      items: [
        { title: 'Δωρεάν αυτοψία', body: 'Βλέπουμε τη δουλειά πριν αποφασιστεί οτιδήποτε — και δεν πληρώνετε τίποτα για μια εκτίμηση.' },
        { title: 'Προσφορά σε 3–4 ημέρες', body: 'Γραπτή προσφορά με σταθερή τιμή, βάσει προμέτρησης των εργασιών.' },
        { title: 'Σταθερή τιμή', body: 'Ξέρετε το κόστος πριν ξεκινήσουμε και παρακολουθείτε την κατανάλωση υλικών.' },
        { title: '20 % παρακράτηση', body: 'Τα τιμολόγια δεν ξεπερνούν ποτέ το 80 % της τελικής τιμής. Το υπόλοιπο εξοφλείται με την έγκριση.' },
      ] as TrustItem[],
      link: { label: 'Διαβάστε τους όρους', key: 'terms' as PageKey },
    },
    staff: {
      index: '05',
      kicker: 'Οι άνθρωποι',
      title: 'Τεχνίτες, όχι μεσάζοντες.',
      lead: 'Ο ξυλουργός και η μηχανικός πίσω από τη δουλειά.',
      link: { label: 'Γνωρίστε μας', key: 'staff' as PageKey },
    },
    cta: {
      index: '06',
      kicker: 'Επόμενο βήμα',
      title: 'Ας χτίσουμε κάτι που αντέχει.',
      lead: 'Πείτε μας για το έργο σας. Απαντάμε με προσφορά σε 3–4 εργάσιμες ημέρες.',
      button: 'Επικοινωνήστε',
    },
  },

  about: {
    kicker: 'Σχετικά',
    titleLines: ['Μια νέα εταιρεία,', 'χτισμένη', 'στην εμπειρία.'],
    lead: 'Είμαστε μια νέα κατασκευαστική εταιρεία στη Νορβηγία.',
    quote:
      'Ακούει τις επιθυμίες τους και, σε συνεργασία μαζί τους, βρίσκει τα πιο κατάλληλα υλικά, χρώματα και λύσεις.',
    body: [
      'Βασιζόμαστε σε 15 χρόνια εμπειρίας στην Ελλάδα, 8 χρόνια εμπειρίας στα κατασκευαστικά πρότυπα της Σκανδιναβίας και σε επιπλέον εμπειρία σε χώρες του εξωτερικού.',
      'Η εταιρεία μας αναλαμβάνει έργα αναδιαμόρφωσης, σχεδιασμού και ανακατασκευής κτηρίων (κατοικίες, γραφεία, καταστήματα, κέντρα διασκέδασης, κλπ).',
      'Ειδικευόμαστε σε ανακαίνιση προσόψεων, αναδιαμορφώσεις, χρωματισμούς, μικρές και μεγάλες επισκευές, εργασίες ανακαίνισης, φινίρισμα κλπ. Πραγματοποιούμε εσωτερικούς και εξωτερικούς χρωματισμούς, καθώς και κατασκευαστικές εργασίες.',
      'Η εταιρεία μας δίνει μεγάλη έμφαση στην καλή σχέση με τους πελάτες. Ακούει τις επιθυμίες τους και, σε συνεργασία μαζί τους, βρίσκει τα πιο κατάλληλα υλικά, χρώματα και λύσεις. Επιπλέον, χρησιμοποιούμε επαγγελματικό εξοπλισμό και ποιοτικά προϊόντα για να επιτευχθεί το καλύτερο αποτέλεσμα.',
    ],
    valuesTitle: 'Τρία πράγματα στα οποία δεν κάνουμε εκπτώσεις',
    values: [
      { title: 'Υλικά', body: 'Επιλέγουμε υλικά σύμφωνα με τα νορβηγικά πρότυπα — και εξηγούμε το γιατί.' },
      { title: 'Σχέσεις', body: 'Ακούμε τις επιθυμίες σας και βρίσκουμε υλικά, χρώματα και λύσεις μαζί σας.' },
      { title: 'Αποτέλεσμα', body: 'Επαγγελματικός εξοπλισμός και ποιοτικά προϊόντα, ώστε το αποτέλεσμα να αντέχει.' },
    ] as TrustItem[],
    factsLabel: 'Με λίγα λόγια',
    facts: [
      { k: 'Εμπειρία', v: '15 χρόνια στην Ελλάδα · 8 χρόνια στη Σκανδιναβία' },
      { k: 'Ειδικότητες', v: 'Ξυλουργική, χρωματισμοί, γυψοσανίδα, πλακίδια, κατεδαφίσεις' },
      { k: 'Γλώσσες', v: 'Νορβηγικά, αγγλικά και ελληνικά' },
      { k: 'Έδρα', v: 'Βίντερμπρο, Νόρντρε Φόλο' },
    ],
  },

  servicesPage: {
    kicker: 'Υπηρεσίες',
    titleLines: ['Πέντε ειδικότητες.', 'Ένα πρότυπο.'],
    lead: 'Με σύμμαχο την εμπειρία και τον επαγγελματισμό μας, αναλαμβάνουμε και ολοκληρώνουμε —με απόλυτη επιτυχία— από τις πιο απλές έως τις πιο απαιτητικές κατασκευές. Παραδίδουμε τα έργα στον συμφωνηθέντα χρόνο, με κατασκευές που αντέχουν στον χρόνο.',
    body: 'Οι τεχνίτες μας αναλαμβάνουν όλες τις εργασίες, εφαρμόζοντας όλους τους κανόνες σωστής επιλογής και χρήσης υλικών, ώστε το τελικό αποτέλεσμα να είναι καλαίσθητο και με εργονομικά οφέλη.',
    undertake: 'Αναλαμβάνουμε ανακαινίσεις και αναπαλαιώσεις.',
    detail: {
      kicker: 'Τι κάνουμε',
      title: 'Οι εργασίες',
      related: 'Άλλες υπηρεσίες',
      cta: 'Ζητήστε προσφορά',
      nextService: 'Επόμενη υπηρεσία',
      prevService: 'Προηγούμενη υπηρεσία',
    },
  },

  galleryPage: {
    kicker: 'Έργα',
    titleLines: ['Δουλειά που', 'έχουμε κάνει.'],
    lead: 'Μια επιλογή έργων και λεπτομερειών από κατοικίες, γραφεία και καταστήματα στο Όσλο και τα περίχωρα.',
    note: 'Προσθέτουμε νέα έργα συνεχώς.',
    countLabel: 'έργα',
  },

  termsPage: {
    kicker: 'Όροι',
    titleLines: ['Έτσι δουλεύουμε.', 'Αυτό ισχύει.'],
    lead: 'Όροι συνεργασίας: τι υποσχόμαστε και πώς υπολογίζουμε.',
    sections: [
      {
        id: 'visit',
        title: 'Αυτοψία και προσφορά',
        items: [
          'Δωρεάν επιτόπου αυτοψία και τελικός έλεγχος του έργου.',
          'Στέλνουμε προσφορές μέσα σε 3–4 εργάσιμες ημέρες.',
          'Ο πελάτης μπορεί να παρακολουθεί το έργο, ώστε να ενημερώνεται για τις ώρες εργασίας και το κόστος των υλικών.',
        ],
      },
      {
        id: 'project',
        title: 'Σχετικά με το έργο',
        items: [
          'Η συμφωνία βασίζεται στην προμέτρηση εργασιών και έχει σταθερή τιμή.',
          'Οι πελάτες μας είναι πάντα ενημερωμένοι για τον εκτιμώμενο αριθμό ωρών εργασίας.',
          'Το συνεργείο εργάζεται μόνο στο δικό σας έργο μέχρι την ολοκλήρωση της σύμβασης.',
        ],
      },
      {
        id: 'materials',
        title: 'Σχετικά με τα υλικά',
        items: [
          'Έχουμε συμφωνίες με τις μεγαλύτερες επιχειρήσεις λιανικού εμπορίου και αγοράζουμε υλικά σε καθημερινή βάση — ώστε να παρακολουθείτε την ακριβή κατανάλωση.',
          'Ο πελάτης έχει επίσης τη δυνατότητα να αγοράσει ο ίδιος τα υλικά. Σε αυτή την περίπτωση βοηθάμε στην επιλογή υλικών, καθώς και στην προμέτρηση των εργασιών και των υλικών που θα χρειαστούν.',
          'Στην τιμή δεν συμπεριλαμβάνεται το 15–20 % του απρόβλεπτου κόστους.',
        ],
      },
      {
        id: 'payment',
        title: 'Όροι πληρωμής',
        items: [
          'Μετά την τρίτη εργάσιμη ημέρα στέλνουμε τιμολόγιο βάσει της αμοιβαίας συμφωνίας.',
          'Σε εκτεταμένα έργα στέλνουμε τιμολόγιο κάθε δύο εβδομάδες.',
          'Το συνολικό ποσό των τιμολογίων δεν υπερβαίνει το 80 % του τελικού κόστους — έτσι ο πελάτης διατηρεί το 20 % μέχρι την ολοκλήρωση.',
        ],
      },
      {
        id: 'guarantee',
        title: 'Εγγύηση',
        items: ['Εγγυόμαστε γρήγορη και προσεγμένη εργασία.', 'Παραδίδουμε έργα που αντέχουν στον χρόνο.'],
      },
    ] as TermSection[],
    note: 'Έχετε ερωτήσεις για τους όρους; Επικοινωνήστε μαζί μας και θα τους δούμε μαζί.',
    cta: 'Επικοινωνήστε',
  },

  staffPage: {
    kicker: 'Προσωπικό',
    titleLines: ['Δύο τεχνίτες.', 'Ένα πρότυπο.'],
    lead: 'Οι άνθρωποι που κάνουν τη δουλειά.',
    members: [
      { name: 'Ρόλαντ Καλογέρης', role: 'Ξυλουργός, ελαιοχρωματιστής', image: 'team-roland' },
      { name: 'Μπουντρή Αλίκη', role: 'Πολιτικός μηχανικός', image: 'team-budri' },
    ] as Member[],
    join: {
      title: 'Θέλετε να δουλέψουμε μαζί;',
      body: 'Αν ενδιαφέρεστε να συνεργαστούμε, στείλτε μας ένα αίτημα και θα απαντήσουμε το συντομότερο.',
      cta: 'Επικοινωνήστε',
    },
  },

  contactPage: {
    kicker: 'Επικοινωνία',
    titleLines: ['Πείτε μας', 'για το έργο.'],
    lead: 'Στείλτε μας ένα αίτημα και θα απαντήσουμε το συντομότερο — συνήθως σε 3–4 εργάσιμες ημέρες.',
    form: {
      name: 'Όνομα',
      email: 'Email',
      phone: 'Τηλέφωνο',
      address: 'Διεύθυνση',
      subject: 'Θέμα',
      message: 'Μήνυμα',
      required: 'υποχρεωτικό',
      optional: 'προαιρετικό',
      choose: 'Επιλέξτε θέμα',
      subjects: ['Προσφορά για έργο', 'Αυτοψία', 'Εργασία μαζί μας', 'Άλλο'],
      send: 'Αποστολή αιτήματος',
      note: 'Η φόρμα ανοίγει το πρόγραμμα email σας με το μήνυμα έτοιμο.',
      consent: 'Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου για την απάντηση στο αίτημά μου.',
      messagePlaceholder: 'Τι πρέπει να γίνει, πού, και πότε θέλετε να είναι έτοιμο;',
    },
    details: {
      kicker: 'Στοιχεία επικοινωνίας',
      addressLabel: 'Διεύθυνση',
      phoneLabel: 'Τηλέφωνο',
      emailLabel: 'Email',
      hoursLabel: 'Ώρες',
      hours: 'Κατόπιν ραντεβού',
      mapLink: 'Άνοιγμα στους χάρτες',
    },
    status: {
      invalid: 'Συμπληρώστε τα υποχρεωτικά πεδία.',
      sent: 'Ανοίγει το πρόγραμμα email σας με το μήνυμα έτοιμο. Αν δεν ανοίξει, καλέστε στο 4634 4342.',
    },
  },

  footer: {
    blurb: 'Ξυλουργική, χρωματισμοί, γυψοσανίδα, πλακίδια και κατεδαφίσεις — για κατοικίες, γραφεία και καταστήματα στο Όσλο και τα περίχωρα.',
    pagesLabel: 'Σελίδες',
    servicesLabel: 'Υπηρεσίες',
    contactLabel: 'Επικοινωνία',
    legal: 'Design Construction. Με την επιφύλαξη παντός δικαιώματος.',
    place: 'Βίντερμπρο · Νορβηγία',
    orgNote: 'Αρ. μητρώου κατόπιν αιτήματος',
  },

  notFound: {
    kicker: '404',
    title: 'Η σελίδα δεν υπάρχει.',
    lead: 'Αλλά μπορούμε ακόμα να χτίσουμε κάτι για εσάς.',
    cta: 'Στην αρχική',
  },

  seo: {
    home: {
      title: 'Design Construction — ξυλουργική, χρωματισμοί και πλακίδια',
      description:
        'Ανακαίνιση, αναπαλαίωση και αναδιαμόρφωση κατοικιών, γραφείων και καταστημάτων. Δωρεάν αυτοψία, σταθερή τιμή και προσφορά σε 3–4 εργάσιμες ημέρες.',
    },
    about: {
      title: 'Σχετικά — εμπειρία από την Ελλάδα και τη Σκανδιναβία',
      description:
        '15 χρόνια εμπειρίας από την Ελλάδα, 8 χρόνια με σκανδιναβικά πρότυπα. Αναλαμβάνουμε ανακαινίσεις, σχεδιασμό και ανακατασκευές κτηρίων.',
    },
    services: {
      title: 'Υπηρεσίες — ξυλουργική, χρωματισμοί, πλακίδια',
      description:
        'Αναλαμβάνουμε κατασκευαστικές εργασίες από τις πιο απλές έως τις πιο απαιτητικές, στον συμφωνηθέντα χρόνο και με σταθερή τιμή.',
    },
    gallery: {
      title: 'Έργα — κατασκευές στο Όσλο και τα περίχωρα',
      description:
        'Επιλογή έργων: πεντχάουζ, άνοιγμα πόρτας, νέα βεράντα, γυψοσανίδες, χρωματισμοί και τοποθέτηση πέτρας.',
    },
    terms: {
      title: 'Όροι — αυτοψία, προσφορά, υλικά και πληρωμή',
      description:
        'Πώς δουλεύουμε: δωρεάν αυτοψία και τελικός έλεγχος, προσφορά σε 3–4 εργάσιμες ημέρες, σταθερή τιμή και 20 % παρακράτηση.',
    },
    staff: {
      title: 'Προσωπικό — ξυλουργός και πολιτικός μηχανικός',
      description: 'Οι άνθρωποι πίσω από τη δουλειά: Ρόλαντ Καλογέρης, ξυλουργός, και Μπουντρή Αλίκη, πολιτικός μηχανικός.',
    },
    contact: {
      title: 'Επικοινωνία — ζητήστε προσφορά',
      description:
        'Marie Kirkeruds vei 17, 1407 Vinterbro. Τηλέφωνα 4634 4342 και 9250 8555. Στείλτε αίτημα και θα έχετε απάντηση σε 3–4 εργάσιμες ημέρες.',
    },
  },
};

export const copy = { nb, en, el };
export type Copy = typeof nb;
