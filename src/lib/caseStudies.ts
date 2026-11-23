import { type Metadata } from 'next'
import { type StaticImageData } from 'next/image'

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
    slug: 'zallija',
    client: 'Zallija, co-founder',
    title: 'A brand built in the feed',
    summary:
      'Brand, visual identity and Instagram content for a browser studio for geometric patterns.',
    metaTitle: 'Zallija brand and social media',
    cover: zallijaCover,
    coverAlt:
      'Three Zallija carousel covers with geometric patterns and bold headlines, side by side.',
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
