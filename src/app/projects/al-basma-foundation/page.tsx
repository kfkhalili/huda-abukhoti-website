import {
  CaseStudyLayout,
  CaseStudySection,
  ExternalLink,
  Figure,
  FigureGrid,
  Point,
  Points,
  Text,
} from '@/components/CaseStudy'
import { caseStudyMetadata } from '@/lib/caseStudies'
import aidCuts from '@/images/case-studies/al-basma/aid-cuts.jpg'
import children from '@/images/case-studies/al-basma/children.jpg'
import sudan from '@/images/case-studies/al-basma/sudan.jpg'

export const metadata = caseStudyMetadata('al-basma-foundation')

const postSizes = '(min-width: 1024px) 21rem, (min-width: 640px) 50vw, 100vw'

export default function AlBasmaFoundation() {
  return (
    <CaseStudyLayout
      slug="al-basma-foundation"
      lead="A recognisable feed for a funder that speaks about very different things: awareness days, partner projects and advocacy."
      facts={[
        {
          label: 'Client',
          value: (
            <ExternalLink href="https://albasmafoundation.org/">
              Al Basma Foundation
            </ExternalLink>
          ),
        },
        {
          label: 'Work',
          value: 'Design system, posts, carousels, stories and captions',
        },
        { label: 'Language', value: 'English' },
        { label: 'Year', value: '2026' },
      ]}
    >
      <CaseStudySection title="Three jobs, one look">
        <FigureGrid columns={3}>
          <Figure
            image={children}
            alt="World Children’s Day post: a laughing child under the Al Basma logo and a yellow 20 November badge. Every child deserves to learn. 272 million children and young people are out of school, followed by three cards on how the foundation helps."
            caption="Awareness day: one global figure, three ways the foundation helps."
            sizes={postSizes}
            preload
          />
          <Figure
            image={sudan}
            alt="Project update post: women stand beside a table stacked with meal boxes at a community kitchen. A location pin reads Sudan. A hot meal every day for displaced families."
            caption="Project update: field photo first, a place pin, one plain headline."
            sizes={postSizes}
          />
          <Figure
            image={aidCuts}
            alt="Advocacy post: minus 23 percent in outline numerals, cut in two by a yellow line. Global aid in 2025, the biggest fall in aid on record, source OECD. Aid was cut. We asked what stopped."
            caption="Advocacy: “−23%” in outline numerals, cut by a yellow line."
            sizes={postSizes}
          />
        </FigureGrid>
      </CaseStudySection>
      <CaseStudySection title="The brief">
        <Text>
          Keep a funder’s feed recognisable while it covers very different
          things: international days, partner project reports and advocacy.
        </Text>
      </CaseStudySection>
      <CaseStudySection title="The system">
        <Points>
          <Point label="Colour">
            Navy and sky, with yellow for the one thing to notice.
          </Point>
          <Point label="Type">
            Comfortaa, with light capitals for headlines.
          </Point>
          <Point label="Layout">
            Logo top left, message at the bottom, a swipe arrow to lead on.
          </Point>
          <Point label="Facts">
            Public figures carry their source on the post.
          </Point>
        </Points>
      </CaseStudySection>
      <CaseStudySection title="What I did">
        <Text>
          The design system, posts, carousels and stories, the captions, and
          fact-checking of every figure.
        </Text>
      </CaseStudySection>
    </CaseStudyLayout>
  )
}
