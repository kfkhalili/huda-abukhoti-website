import {
  CaseStudyLayout,
  CaseStudySection,
  Figure,
  FigureGrid,
  Text,
} from '@/components/CaseStudy'
import { caseStudyMetadata } from '@/lib/caseStudies'
import construction from '@/images/case-studies/medad/construction.jpg'
import hero from '@/images/case-studies/medad/hero.jpg'
import palette from '@/images/case-studies/medad/palette.jpg'
import samples from '@/images/case-studies/medad/samples.jpg'
import type from '@/images/case-studies/medad/type.jpg'

export const metadata = caseStudyMetadata('medad')

function ArabicName() {
  return (
    <span lang="ar" dir="rtl">
      مداد
    </span>
  )
}

export default function Medad() {
  return (
    <CaseStudyLayout
      slug="medad"
      lead={
        <>
          A bilingual identity for a youth giving programme in Oman, built on
          one idea: the Arabic word <ArabicName /> redrawn as a person.
        </>
      }
      facts={[
        { label: 'Client', value: 'Al Jisr Foundation, Oman' },
        {
          label: 'Work',
          value: 'Name mark, identity system, 18-page brand guide',
        },
        { label: 'Languages', value: 'Arabic and English' },
        { label: 'Year', value: '2025' },
      ]}
    >
      <Figure
        image={hero}
        alt="The Medad logo, a vertical Arabic name mark in white, on a deep violet background. An illustrated lilac arm reaches down and points to it."
        preload
      />
      <CaseStudySection title="The brief">
        <Text>
          Medad is a programme that builds a culture of purpose-driven giving
          among young Omanis. It needed a name mark and an identity in Arabic
          and English.
        </Text>
      </CaseStudySection>
      <CaseStudySection title="The idea">
        <Text>
          I redrew <ArabicName /> so that its letters form a human silhouette.
          The two dal letters share the same proportions, for equality between
          people, and the circle stands for connection and dialogue.
        </Text>
        <Figure
          image={construction}
          alt="The Medad name mark with notes on its construction: the structure is a human silhouette, the two dal letters have identical proportions, and the circle indicates connection and dialogue."
        />
      </CaseStudySection>
      <CaseStudySection title="The system">
        <Text>
          Five colours, led by vivid lavender and marigold. Roboto and Zain pair
          English and Arabic in the same three weights.
        </Text>
        <FigureGrid columns={2}>
          <Figure
            image={palette}
            alt="The Medad palette: muted black, vivid lavender, marigold, pale lilac and deep violet, with their colour values."
            sizes="(min-width: 1024px) 31rem, (min-width: 640px) 50vw, 100vw"
          />
          <Figure
            image={type}
            alt="The Medad typefaces, Roboto and Zain, in light, regular and bold, above the programme line in Arabic and English: To ignite a culture of purpose-driven giving among Omani youth."
            sizes="(min-width: 1024px) 31rem, (min-width: 640px) 50vw, 100vw"
          />
        </FigureGrid>
      </CaseStudySection>
      <CaseStudySection title="In use">
        <Text>
          A card, an ID badge, a tote and a poster show how the mark, the
          colours and the illustrations work together.
        </Text>
        <Figure
          image={samples}
          alt="Four sample applications of the Medad identity: a violet card with a white embossed logo, an ID badge on a lanyard, two white tote bags with illustrated hands, and a framed bilingual poster."
          caption="Sample applications from the brand guide."
        />
      </CaseStudySection>
      <CaseStudySection title="What I did">
        <Text>
          The logo in Arabic and English, the palette, the bilingual type
          system, the illustrations and the full brand guide.
        </Text>
      </CaseStudySection>
    </CaseStudyLayout>
  )
}
