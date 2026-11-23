import { type Metadata } from 'next'
import { type StaticImageData } from 'next/image'

import alBasmaCover from '@/images/case-studies/al-basma/cover.jpg'
import halalAdaCover from '@/images/case-studies/halal-ada/cover.jpg'
import justhomeCover from '@/images/case-studies/justhome/cover.jpg'
import medadCover from '@/images/case-studies/medad/cover.jpg'
import zallijaCover from '@/images/case-studies/zallija/cover.jpg'

export interface CaseStudy {
  slug: string
  client: string
  title: string
  summary: string
  metaTitle: string
  cover: StaticImageData
  coverAlt: string
}

// The order here is the order on the Projects page and of the "Next" links.
export const caseStudies: Array<CaseStudy> = [
  {
    slug: 'medad',
    client: 'Medad, a programme of Al Jisr Foundation',
    title: 'A name drawn as people',
    summary:
      'A bilingual identity for a youth giving programme in Oman, built on an Arabic name redrawn as a human silhouette.',
    metaTitle: 'Medad brand identity',
    cover: medadCover,
    coverAlt:
      'The Medad logo in white on deep violet, with an illustrated hand pointing to it.',
  },
  {
    slug: 'halal-ada',
    client: 'Halal ADA, Cardano stake pool',
    title: 'Where halal meets ADA',
    summary:
      'A logo that reads halal above and ADA below, and a bilingual brand guide built on the line where they meet.',
    metaTitle: 'Halal ADA brand identity',
    cover: halalAdaCover,
    coverAlt:
      'The Halal ADA mark in cream, very large, on a gradient from mint to charcoal, with the logo at the bottom right.',
  },
  {
    slug: 'al-basma-foundation',
    client: 'Al Basma Foundation',
    title: 'One system, many causes',
    summary:
      'A design system that keeps a funder’s feed recognisable across awareness days, partner projects and advocacy.',
    metaTitle: 'Al Basma Foundation social media',
    cover: alBasmaCover,
    coverAlt:
      'Three Al Basma Foundation posts in navy, sky blue and yellow, side by side.',
  },
  {
    slug: 'zallija',
    client: 'Zallija, co-founder',
    title: 'A brand built in the feed',
    summary:
      'Brand, visual identity and Instagram content for a browser studio for geometric patterns.',
    metaTitle: 'Zallija brand and social media',
    cover: zallijaCover,
    coverAlt:
      'Cover of the Zallija brand guide: pale pattern lines on dark ink, one tile filled in orange, and the Zallija logo in cream.',
  },
  {
    slug: 'justhome',
    client: 'Justhome, Germany',
    title: 'A logo that is a house',
    summary:
      'A warm, trustworthy identity from 2022 for a company guiding people through buying their first home.',
    metaTitle: 'Justhome brand identity',
    cover: justhomeCover,
    coverAlt:
      'The Justhome J icon, a white circle and a tall white J, on morning green.',
  },
]

export function getCaseStudy(slug: string) {
  let caseStudy = caseStudies.find((item) => item.slug === slug)

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
