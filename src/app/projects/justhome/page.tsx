import {
  CaseStudyLayout,
  CaseStudySection,
  Figure,
  FigureGrid,
  Text,
} from '@/components/CaseStudy'
import { caseStudyMetadata } from '@/lib/caseStudies'
import construction from '@/images/case-studies/justhome/construction.jpg'
import palette from '@/images/case-studies/justhome/palette.jpg'
import samples from '@/images/case-studies/justhome/samples.jpg'
import stationery from '@/images/case-studies/justhome/stationery.jpg'
import type from '@/images/case-studies/justhome/type.jpg'
import variants from '@/images/case-studies/justhome/variants.jpg'

export const metadata = caseStudyMetadata('justhome')

const halfSizes = '(min-width: 1024px) 31rem, (min-width: 640px) 50vw, 100vw'

export default function Justhome() {
  return (
    <CaseStudyLayout
      slug="justhome"
      lead="A warm, trustworthy identity from 2022 for a company guiding people through buying their first home, built on a wordmark with a roof line."
      facts={[
        { label: 'Client', value: 'Justhome, Germany' },
        {
          label: 'Work',
          value: 'Wordmark, monogram, identity system, 20-page brand guide',
        },
        { label: 'Sector', value: 'Home buying' },
        { label: 'Year', value: '2022' },
      ]}
    >
      <Figure
        image={stationery}
        alt="Justhome stationery on a dark surface: a cream letterhead, a green sheet with the large white J icon, two business cards, a round lilac sticker and an envelope."
        caption="Sample stationery from the brand guide."
        preload
      />
      <CaseStudySection title="The brief">
        <Text>
          In 2022, Justhome guided people through buying their first home and
          needed a warm, trustworthy identity.
        </Text>
      </CaseStudySection>
      <CaseStudySection title="The idea">
        <Text>
          The tall t and h of the wordmark form a roof line, so the logo carries
          the security of a home without being too obvious. The circles at each
          end stand for protection and stability, and “just” and “home” contrast
          in weight.
        </Text>
        <Figure
          image={construction}
          alt="The Justhome wordmark with notes on its construction: the structure symbolizes a house, the circles at each end indicate protection and stability, and just and home contrast."
        />
      </CaseStudySection>
      <CaseStudySection title="The logo family">
        <Text>
          One horizontal wordmark, with a version for dark backgrounds and three
          secondary variants. The J icon, taken from the first letter, replaces
          the wordmark at very small sizes.
        </Text>
        <Figure
          image={variants}
          alt="The Justhome logo variants: the primary wordmark on cream and on dark, three secondary versions with black, lilac and sand circles, and the J icon on cream and on dark."
        />
      </CaseStudySection>
      <CaseStudySection title="Colour and type">
        <Text>
          Four colours, morning green, desert shadow, dirty blonde and grape
          gatsby, each with its own shades. One typeface, Roboto, in six
          weights.
        </Text>
        <FigureGrid columns={2}>
          <Figure
            image={palette}
            alt="The Justhome palette: morning green, desert shadow, dirty blonde and grape gatsby, each with three further shades and their colour values."
            sizes={halfSizes}
          />
          <Figure
            image={type}
            alt="Roboto in thin, light, regular, medium, bold and black, above a sample headline: How Justhome works. You want to buy your home soon? We accompany you step by step."
            sizes={halfSizes}
          />
        </FigureGrid>
      </CaseStudySection>
      <CaseStudySection title="In use">
        <Text>
          Business cards, embossed paper, an office sign and a street poster,
          all following the same rules.
        </Text>
        <Figure
          image={samples}
          alt="Four sample applications of the Justhome identity: white and lilac business cards, embossed paper, a glass office sign on concrete, and a bus-stop poster at night that reads Home is where the rent is not."
          caption="Sample applications from the brand guide."
        />
      </CaseStudySection>
      <CaseStudySection title="What I did">
        <Text>
          The wordmark and monogram, logo variants and usage rules, palette,
          typography and stationery, plus a website proposal.
        </Text>
      </CaseStudySection>
    </CaseStudyLayout>
  )
}
