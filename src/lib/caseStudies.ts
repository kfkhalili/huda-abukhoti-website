import { type Metadata } from 'next'
import { type StaticImageData } from 'next/image'

import alBasmaCover from '@/images/case-studies/al-basma/cover.jpg'
import alBasmaLogo from '@/images/case-studies/al-basma/logo.png'
import halalAdaCover from '@/images/case-studies/halal-ada/cover.jpg'
import justhomeCover from '@/images/case-studies/justhome/cover.jpg'
import justhomeLogo from '@/images/case-studies/justhome/logo-horizontal.png'
import medadCover from '@/images/case-studies/medad/cover.jpg'
import medadLogo from '@/images/case-studies/medad/logo-horizontal.png'
import zallijaCover from '@/images/case-studies/zallija/cover.jpg'
import zallijaLogo from '@/images/case-studies/zallija/logo-horizontal.png'

export interface CaseStudy {
  slug: string
  client: string
  title: string
  summary: string
  metaTitle: string
  year: string
  // The main colour of the cover, used for the project's page and card.
  colour: { background: string; foreground: string }
  cover: StaticImageData
  coverAlt: string
  // The logo (the horizontal one where the brand has it). The homepage cover
  // shows it whole instead of a crop of the cover, on `logoBackground` if set,
  // otherwise on `colour.background`.
  logo?: StaticImageData
  logoBackground?: string
}

// The case studies shown as cards on the Projects page, in this order. It is
// also the order of the "Next case study" links.
export const caseStudies: Array<CaseStudy> = [
  {
    slug: 'medad',
    year: '2025',
    colour: { background: '#372264', foreground: '#ffffff' },
    client: 'Medad, a programme of Al Jisr Foundation',
    title: 'Medad brand identity',
    summary:
      'A bilingual identity for a youth giving programme in Oman, built on an Arabic name redrawn as a human silhouette.',
    metaTitle: 'Medad brand identity',
    cover: medadCover,
    coverAlt:
      'The Medad logo in white on deep violet, with an illustrated hand pointing to it.',
    logo: medadLogo,
  },
  {
    slug: 'al-basma-foundation',
    year: '2026',
    colour: { background: '#a7d2ea', foreground: '#1f2531' },
    client: 'Al Basma Foundation',
    title: 'Al Basma Foundation social media',
    summary:
      'A design system that keeps a funder’s feed recognisable across awareness days, partner projects and advocacy.',
    metaTitle: 'Al Basma Foundation social media',
    cover: alBasmaCover,
    coverAlt:
      'Three Al Basma Foundation posts in navy, sky blue and yellow, side by side.',
    // The logo keeps its own blues, which need white behind them.
    logo: alBasmaLogo,
    logoBackground: '#ffffff',
  },
  {
    slug: 'justhome',
    year: '2022',
    colour: { background: '#86bfb0', foreground: '#14302a' },
    client: 'Justhome, Germany',
    title: 'Justhome brand identity',
    summary:
      'A warm, trustworthy identity from 2022 for a company guiding people through buying their first home.',
    metaTitle: 'Justhome brand identity',
    cover: justhomeCover,
    coverAlt:
      'The Justhome J icon, a white circle and a tall white J, on morning green.',
    logo: justhomeLogo,
  },
  {
    slug: 'zallija',
    year: '2026',
    colour: { background: '#102b34', foreground: '#f6f3ee' },
    client: 'Zallija, co-founder',
    title: 'Zallija brand guide and social media',
    summary:
      'Brand, visual identity and Instagram content for a browser studio for geometric patterns.',
    metaTitle: 'Zallija brand and social media',
    cover: zallijaCover,
    coverAlt:
      'Cover of the Zallija brand guide: pale pattern lines on dark ink, one tile filled in orange, and the Zallija logo in cream.',
    logo: zallijaLogo,
  },
]

// Case studies that keep their own page but are listed under "More work".
const moreCaseStudies: Array<CaseStudy> = [
  {
    slug: 'halal-ada',
    year: '2026',
    colour: { background: '#333634', foreground: '#f6f3ee' },
    client: 'Halal ADA, Cardano stake pool',
    title: 'Halal ADA logo and brand guide',
    summary:
      'A logo that reads halal above and ADA below, and a bilingual brand guide built on the line where they meet.',
    metaTitle: 'Halal ADA brand identity',
    cover: halalAdaCover,
    coverAlt:
      'The Halal ADA mark in cream, very large, on a gradient from mint to charcoal, with the logo at the bottom right.',
  },
]

export function getCaseStudy(slug: string) {
  let caseStudy = [...caseStudies, ...moreCaseStudies].find(
    (item) => item.slug === slug,
  )

  if (!caseStudy) {
    throw new Error(`Unknown case study: ${slug}`)
  }

  return caseStudy
}

export function caseStudyMetadata(slug: string): Metadata {
  let { title, summary, metaTitle, cover, coverAlt } = getCaseStudy(slug)

  return {
    title: metaTitle,
    description: summary,
    openGraph: {
      type: 'article',
      title,
      description: summary,
      images: [
        {
          url: cover.src,
          width: cover.width,
          height: cover.height,
          alt: coverAlt,
        },
      ],
    },
    twitter: { card: 'summary_large_image' },
  }
}
