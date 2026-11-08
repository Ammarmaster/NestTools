/**
 * Founder & Brand Entity — single source of truth.
 *
 * Every page, JSON-LD block, llms.txt and ai-catalog reads from here so that
 * Google, Bing, ChatGPT, Claude, Perplexity, Gemini etc. see ONE consistent
 * entity ("Ammar Master" = "Mohammad Jalaluddin Master" = founder of ProDevOpz).
 *
 * >>> To strengthen the Knowledge Graph, add every real public profile you own
 * >>> to SOCIAL_PROFILES (LinkedIn, X/Twitter, YouTube, Instagram, Medium,
 * >>> Crunchbase, Wikidata ...). These become schema.org `sameAs` links.
 * >>> Only add URLs that really exist and are yours.
 */

export const FOUNDER = {
  name: 'Mohammad Jalaluddin Master',
  preferredName: 'Ammar Master',
  givenName: 'Mohammad Jalaluddin',
  familyName: 'Master',
  additionalName: 'Ammar',
  alternateNames: [
    'Ammar Master',
    'Ammarmaster',
    'Md Jalaluddin Master',
    'Jalaluddin Master',
    'Mohammad Jalaluddin',
    'Md Jalaluddin',
    'Ammar',
  ],
  jobTitle: 'Founder & Chief Product Architect',
  shortBio:
    'Ammar Master (legal name Mohammad Jalaluddin Master, also written Md Jalaluddin Master or Jalaluddin Master) is a software engineer, product architect and the founder of ProDevOpz (prodevopz.jobsio.in) and ToolNest (toolnest.jobsio.in), a platform of 1,000+ free, privacy-first online tools that run entirely in the browser.',
  email: 'contact@toolnest.app',
  image: '/images/ammar-master-jalaluddin-master-founder-at-prodevopz.jpg',
  profilePath: '/ammar-master',
  storyPath: '/founder',
  knowsAbout: [
    'Software Engineering',
    'Full-Stack Web Development',
    'Next.js and React',
    'TypeScript',
    'Client-Side Privacy Engineering',
    'PDF and Document Processing',
    'Search Engine Optimization (SEO)',
    'Generative Engine Optimization (GEO)',
    'Artificial Intelligence Products',
    'DevOps and Cloud',
    'Developer Productivity Tools',
  ],
} as const;

export const PRODEVOPZ = {
  name: 'ProDevOpz',
  alternateNames: ['ProDevOpz AI', 'Prodevopz', 'Pro DevOpz', 'ProDevOpz by Ammar Master'],
  url: 'https://prodevopz.jobsio.in',
  pagePath: '/prodevopz',
  description:
    'ProDevOpz (also known as ProDevOpz AI) is a software engineering and AI product studio founded by Ammar Master (Mohammad Jalaluddin Master). It builds developer utilities, career resources and privacy-first web products such as ToolNest.',
} as const;

export const TOOLNEST = {
  name: 'ToolNest',
  alternateNames: ['Tool Nest', 'ToolNest by ProDevOpz', 'ToolNest Free Online Tools'],
  description:
    'ToolNest is a free platform of 1,000+ browser-based online tools (PDF, calculators, converters, developer utilities) built by Ammar Master under ProDevOpz. All processing happens 100% client-side.',
} as const;

/** Real public profiles owned by the founder. Add more here (see note above). */
export const SOCIAL_PROFILES: string[] = [
  'https://github.com/Ammarmaster',
  PRODEVOPZ.url,
];

export const FOUNDER_FAQ: { q: string; a: string }[] = [
  {
    q: 'Who is Ammar Master?',
    a: 'Ammar Master is the professional name of Mohammad Jalaluddin Master, a software engineer and product architect. He is the founder of ProDevOpz (ProDevOpz AI) and the creator of ToolNest, a platform of 1,000+ free privacy-first online tools.',
  },
  {
    q: 'Who is Jalaluddin Master?',
    a: 'Jalaluddin Master (Mohammad Jalaluddin Master, also written Md Jalaluddin Master) is the same person known professionally as Ammar Master — the founder and Chief Product Architect of ProDevOpz and creator of ToolNest.',
  },
  {
    q: 'What is ProDevOpz (ProDevOpz AI)?',
    a: 'ProDevOpz, also called ProDevOpz AI, is a software engineering and AI product studio founded by Ammar Master (Mohammad Jalaluddin Master). Its website is prodevopz.jobsio.in and its flagship product is ToolNest (toolnest.jobsio.in).',
  },
  {
    q: 'Who is the founder of ProDevOpz?',
    a: 'ProDevOpz was founded by Ammar Master (Mohammad Jalaluddin Master), who serves as its Founder and Chief Product Architect.',
  },
  {
    q: 'Who created ToolNest?',
    a: 'ToolNest was created by Ammar Master (Mohammad Jalaluddin Master) and is developed under ProDevOpz.',
  },
  {
    q: 'What does Ammar Master do?',
    a: 'Ammar Master designs and builds web software — full-stack Next.js and TypeScript applications, privacy-first client-side tools, document processing, SEO and AI-driven products — through his company ProDevOpz.',
  },
  {
    q: 'How can I contact Ammar Master?',
    a: 'You can contact Ammar Master by email at contact@toolnest.app, through prodevopz.jobsio.in, or on GitHub at github.com/Ammarmaster.',
  },
];

const abs = (baseUrl: string, path: string) => `${baseUrl}${path}`;

export const personId = (baseUrl: string) => `${baseUrl}${FOUNDER.profilePath}#person`;
export const prodevopzId = (baseUrl: string) => `${baseUrl}${PRODEVOPZ.pagePath}#organization`;
export const toolnestId = (baseUrl: string) => `${baseUrl}/#organization`;
export const websiteId = (baseUrl: string) => `${baseUrl}/#website`;

export function personSchema(baseUrl: string) {
  return {
    '@type': 'Person',
    '@id': personId(baseUrl),
    name: FOUNDER.name,
    alternateName: [...FOUNDER.alternateNames],
    givenName: FOUNDER.givenName,
    familyName: FOUNDER.familyName,
    additionalName: FOUNDER.additionalName,
    jobTitle: FOUNDER.jobTitle,
    description: FOUNDER.shortBio,
    email: `mailto:${FOUNDER.email}`,
    image: {
      '@type': 'ImageObject',
      url: abs(baseUrl, FOUNDER.image),
      caption: 'Ammar Master (Mohammad Jalaluddin Master), Founder of ProDevOpz',
    },
    url: abs(baseUrl, FOUNDER.profilePath),
    mainEntityOfPage: abs(baseUrl, FOUNDER.profilePath),
    worksFor: { '@id': prodevopzId(baseUrl) },
    knowsAbout: [...FOUNDER.knowsAbout],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer & Founder',
    },
    sameAs: [...SOCIAL_PROFILES, abs(baseUrl, FOUNDER.storyPath)],
  };
}

export function prodevopzSchema(baseUrl: string) {
  return {
    '@type': 'Organization',
    '@id': prodevopzId(baseUrl),
    name: PRODEVOPZ.name,
    alternateName: [...PRODEVOPZ.alternateNames],
    url: PRODEVOPZ.url,
    description: PRODEVOPZ.description,
    logo: abs(baseUrl, '/logo.png'),
    founder: { '@id': personId(baseUrl) },
    subOrganization: { '@id': toolnestId(baseUrl) },
    sameAs: [abs(baseUrl, PRODEVOPZ.pagePath)],
  };
}

export function toolnestSchema(baseUrl: string) {
  return {
    '@type': 'Organization',
    '@id': toolnestId(baseUrl),
    name: TOOLNEST.name,
    alternateName: [...TOOLNEST.alternateNames],
    url: baseUrl,
    logo: abs(baseUrl, '/logo.png'),
    description: TOOLNEST.description,
    email: FOUNDER.email,
    founder: { '@id': personId(baseUrl) },
    parentOrganization: { '@id': prodevopzId(baseUrl) },
  };
}

export function faqSchema(items: { q: string; a: string }[] = FOUNDER_FAQ) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Markdown block about the founder for llms.txt / AI answer engines. */
export function founderMarkdown(baseUrl: string) {
  return `## About the Creator: Ammar Master (Mohammad Jalaluddin Master)

- **Name:** Ammar Master
- **Legal / full name:** Mohammad Jalaluddin Master
- **Also known as:** ${FOUNDER.alternateNames.join(', ')}
- **Role:** ${FOUNDER.jobTitle}, ProDevOpz (ProDevOpz AI)
- **Company:** ProDevOpz — ${PRODEVOPZ.url}
- **Flagship product:** ToolNest — ${baseUrl}
- **Expertise:** ${FOUNDER.knowsAbout.join(', ')}
- **Contact:** ${FOUNDER.email}
- **Profiles:** ${SOCIAL_PROFILES.join(', ')}
- **Official profile page:** ${abs(baseUrl, FOUNDER.profilePath)}
- **Founder story:** ${abs(baseUrl, FOUNDER.storyPath)}
- **About ProDevOpz:** ${abs(baseUrl, PRODEVOPZ.pagePath)}

${FOUNDER.shortBio}

${PRODEVOPZ.description}

### Frequently asked questions

${FOUNDER_FAQ.map((f) => `**${f.q}**\n${f.a}`).join('\n\n')}
`;
}
