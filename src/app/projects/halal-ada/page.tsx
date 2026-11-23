import {
  CaseStudyLayout,
  CaseStudySection,
  ExternalLink,
  Figure,
  Text,
} from '@/components/CaseStudy'
import { caseStudyMetadata } from '@/lib/caseStudies'
import bilingual from '@/images/case-studies/halal-ada/bilingual.jpg'
import construction from '@/images/case-studies/halal-ada/construction.jpg'
import family from '@/images/case-studies/halal-ada/family.jpg'
import hero from '@/images/case-studies/halal-ada/hero.jpg'
import idea from '@/images/case-studies/halal-ada/idea.jpg'
import pattern from '@/images/case-studies/halal-ada/pattern.jpg'
import phones from '@/images/case-studies/halal-ada/phones.jpg'
import posters from '@/images/case-studies/halal-ada/posters.jpg'
import proportions from '@/images/case-studies/halal-ada/proportions.jpg'
import social from '@/images/case-studies/halal-ada/social.jpg'
import stationery from '@/images/case-studies/halal-ada/stationery.jpg'

export const metadata = caseStudyMetadata('halal-ada')

export default function HalalAda() {
  return (
    <CaseStudyLayout
      slug="halal-ada"
      lead="A logo and brand guide for a Cardano stake pool that aligns with Islamic principles. The mark holds two words, and the whole brand is built on the line where they meet."
      facts={[
        {
          label: 'Client',
          value: (
            <ExternalLink href="https://www.halalada.com">
              Halal ADA
            </ExternalLink>
          ),
        },
        { label: 'Work', value: 'Typography, logo, 27-page brand guide' },
        { label: 'Languages', value: 'Arabic and English' },
        { label: 'Year', value: 'Brand guide, 2026' },
      ]}
    >
      <Figure
        image={hero}
        alt="Cover of the Halal ADA brand guide: the mark in cream, very large and cropped at the left, on a gradient from mint to charcoal, with the logo and the words Brand Guidelines at the bottom right."
        preload
      />
      <CaseStudySection title="The brief">
        <Text>
          Typography and a logo for Halal ADA, a fintech initiative that
          introduces decentralised finance to Muslims and the broader community.
        </Text>
      </CaseStudySection>
      <CaseStudySection title="The idea">
        <Text>
          The upper half of the mark reads{' '}
          <span lang="ar" dir="rtl">
            حلال
          </span>{' '}
          and the lower half reads ADA, both in the spirit of geometric Kufic.
          The two halves meet on one line and form a diamond: balanced and
          steady, without being too obvious.
        </Text>
        <Figure
          image={idea}
          alt="The Halal ADA mark across two fields of color. The upper half, on cream, is labelled halal in Arabic, the principle. The lower half, on green, is labelled ADA, the technology."
        />
      </CaseStudySection>
      <CaseStudySection title="The system">
        <Text>
          The brand guide turns that line into a system. Layouts split where the
          two halves meet, with the principle above and the technology below.
        </Text>
        <Figure
          image={construction}
          alt="Construction of the mark on a grid: one stroke weight, 45-degree cuts, a diamond outline inside a circle, and the horizon line running through the middle."
        />
        <Figure
          image={family}
          alt="The logo family: the horizontal logo on cream, charcoal and green, the stacked logo on cream and mint, and the circular icon in light and dark."
        />
      </CaseStudySection>
      <CaseStudySection title="Colour and type">
        <Text>
          Basalt, cream, mint and palm green, in fixed proportions. IBM Plex
          Sans and IBM Plex Sans Arabic come from one free family, so both
          languages share one voice and say the same thing at the same size.
        </Text>
        <Figure
          image={proportions}
          alt="Four bars shaped like the alif of the mark show the color proportions: 40 percent basalt, 30 percent cream, 20 percent mint and 10 percent palm green."
        />
        <Figure
          image={bilingual}
          alt="The line Where halal meets ADA, set at the same size in English on cream and in Arabic on mint."
        />
      </CaseStudySection>
      <CaseStudySection title="Pattern">
        <Text>
          The diamond repeats without gaps, the way tiles do, so the mark makes
          its own pattern.
        </Text>
        <Figure
          image={pattern}
          alt="The mark repeated as a seamless pattern in four color pairs, cut into panels along 45-degree diagonals."
        />
      </CaseStudySection>
      <CaseStudySection title="In use">
        <Text>Posts, screens, posters and stationery all keep the line.</Text>
        <Figure
          image={social}
          alt="Three social posts. One reads Halal staking, in plain words. One reads No lending, No interest. One carries the Arabic line Where halal meets ADA under the pattern."
        />
        <Figure
          image={phones}
          alt="Two phone screens: a dark welcome screen that reads Ethical staking on Cardano, and a light screen titled Why stake with Halal ADA."
        />
        <Figure
          image={posters}
          alt="Three framed posters: the upper half of the mark with the Arabic word halal, the full mark cropped large, and the lower half with ADA."
        />
        <Figure
          image={stationery}
          alt="Halal ADA stationery on green: a letter, an envelope, business cards, a round sticker and a patterned card."
          caption="Sample applications from the brand guide."
        />
      </CaseStudySection>
      <CaseStudySection title="What I did">
        <Text>
          I designed the typography and the logo. I directed the brand guide and
          built it with AI tools.
        </Text>
      </CaseStudySection>
    </CaseStudyLayout>
  )
}
