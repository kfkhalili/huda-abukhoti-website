import {
  CaseStudyLayout,
  CaseStudySection,
  ExternalLink,
  Figure,
  FigureGrid,
  Text,
} from '@/components/CaseStudy'
import { caseStudyMetadata } from '@/lib/caseStudies'
import coloringBook from '@/images/case-studies/zallija/coloring-book.jpg'
import guideColour from '@/images/case-studies/zallija/guide-colour.jpg'
import guideCover from '@/images/case-studies/zallija/guide-cover.jpg'
import guideFlower from '@/images/case-studies/zallija/guide-flower.jpg'
import guidePatternRule from '@/images/case-studies/zallija/guide-pattern-rule.jpg'
import interior from '@/images/case-studies/zallija/interior.jpg'
import isfahanStar from '@/images/case-studies/zallija/isfahan-star.jpg'
import whatIsZallija from '@/images/case-studies/zallija/what-is-zallija.jpg'

export const metadata = caseStudyMetadata('zallija')

const postSizes = '(min-width: 1024px) 31rem, (min-width: 640px) 50vw, 100vw'

export default function Zallija() {
  return (
    <CaseStudyLayout
      slug="zallija"
      lead="Launching a browser studio for geometric patterns on Instagram, with no budget."
      facts={[
        { label: 'Role', value: 'Co-founder, brand and social media' },
        {
          label: 'Work',
          value:
            'Visual identity, 44-page brand guide, carousel and reel formats, copy, illustration',
        },
        {
          label: 'Live',
          value: (
            <>
              <ExternalLink href="https://www.zallija.com">
                zallija.com
              </ExternalLink>
              {', '}
              <ExternalLink href="https://www.instagram.com/zallijaart/">
                @zallijaart
              </ExternalLink>
            </>
          ),
        },
        { label: 'Year', value: '2026' },
      ]}
    >
      <CaseStudySection title="The brief">
        <Text>
          Launch a new product on Instagram with no budget: make historic
          geometric patterns feel approachable, and send people to zallija.com.
        </Text>
      </CaseStudySection>
      <CaseStudySection title="The look">
        <Text>
          A cream base, a bold headline panel, a swipe chip and a progress bar,
          so every carousel is recognisable in the feed before anyone reads the
          name.
        </Text>
        <FigureGrid columns={2}>
          <Figure
            image={whatIsZallija}
            alt="Carousel cover titled What is Zallija? A photo of a blue, turquoise and gold tiled window in Bursa above a cream headline panel."
            caption="Explainer. Photo on the slide: Mustafa Duman, CC BY 3.0, cropped."
            sizes={postSizes}
            preload
          />
          <Figure
            image={coloringBook}
            alt="Carousel cover titled 500 years old. Ready to color. The Topkapı Scroll coloring book with a blue and white star pattern."
            caption="Product launch."
            sizes={postSizes}
          />
          <Figure
            image={isfahanStar}
            alt="Carousel cover titled Draw the 1453 Isfahan star: 8 steps, one compass, one ruler. A ten-fold star pattern in brown, tan and white."
            caption="How-to."
            sizes={postSizes}
          />
          <Figure
            image={interior}
            alt="Carousel cover titled One pattern. Five rooms. An illustrated living room with a geometric feature wall above a teal sofa."
            caption="Interior ideas."
            sizes={postSizes}
          />
        </FigureGrid>
      </CaseStudySection>
      <CaseStudySection title="The result so far">
        <p>
          <span className="block text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            9 <span aria-hidden="true">→</span>
            <span className="sr-only">to</span> 307
          </span>
          <span className="mt-4 block max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            followers on @zallijaart in four weeks, from 25 October to 22
            November 2026.
          </span>
        </p>
      </CaseStudySection>
      <CaseStudySection title="The brand guide">
        <Text>
          Zellige is cut and set one tile at a time, and the 44-page brand guide
          works the same way. Each chapter fills in one more tile, and the
          flower is complete at the end.
        </Text>
        <Figure
          image={guideCover}
          alt="Cover of the Zallija brand guide: pale lines of a geometric pattern on dark ink, one tile filled in orange at the top right, and the Zallija logo in cream at the bottom left."
        />
        <Text>
          The patterns come from Zallija’s Alhambra coloring book, drawn as thin
          lines with a single tile filled in. One of them, design No. 38 from
          the Salón de Comares, has the same structure as the flower in the
          logo.
        </Text>
        <Figure
          image={guideFlower}
          alt="Guide page titled The flower is in the wall. The five petals of the Zallija logo flower, very large in dark ink, sit on design No. 38, drawn in sand-coloured lines, and the pattern’s other three petals, filled in sand, complete the eight."
        />
        <FigureGrid columns={2}>
          <Figure
            image={guidePatternRule}
            alt="Guide page in three panels. Color one tile: a single blue eight-pointed star on cream. Draw its neighbors: the same star with the tiles around it drawn as blue lines on pale blue. Stop there: solid blue, with a note that the flower, No. 38, is the one exception."
            caption="The pattern rule."
            sizes={postSizes}
          />
          <Figure
            image={guideColour}
            alt="Guide page titled One glaze per layout: four pale panels in cobalt, sandstone, turquoise and gold, each with a pattern drawn in lines of its own colour and one tile filled in."
            caption="The colour rule."
            sizes={postSizes}
          />
        </FigureGrid>
      </CaseStudySection>
      <CaseStudySection title="What I did">
        <Text>
          Brand, visual identity, carousel and reel formats, copy and
          illustration, from explainers to the Topkapı Scroll coloring book. I
          directed the brand guide and built it with AI tools.
        </Text>
      </CaseStudySection>
    </CaseStudyLayout>
  )
}
