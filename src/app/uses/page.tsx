import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
  logo,
}: {
  title: string
  href?: string
  children: React.ReactNode
  logo?:
    | string
    | { light: string | React.ReactNode; dark: string | React.ReactNode }
}) {
  let lightLogoSrc: string | undefined = undefined
  let darkLogoSrc: string | undefined = undefined
  let lightLogoNode: React.ReactNode | undefined = undefined
  let darkLogoNode: React.ReactNode | undefined = undefined

  if (typeof logo === 'string') {
    lightLogoSrc = logo
    darkLogoSrc = logo // Assumes a single string URL is for both modes or adapts
  } else if (logo) {
    if (typeof logo.light === 'string') lightLogoSrc = logo.light
    else lightLogoNode = logo.light
    if (typeof logo.dark === 'string') darkLogoSrc = logo.dark
    else darkLogoNode = logo.dark
  }

  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {lightLogoSrc && (
          <img
            key={`${title}-light-logo-img`}
            src={lightLogoSrc}
            alt={`${title} logo`}
            className="mr-3 inline-block h-6 w-6 align-middle dark:hidden"
            width="24"
            height="24"
          />
        )}
        {lightLogoNode && (
          <span
            key={`${title}-light-logo-svg`}
            className="mr-3 inline-block h-6 w-6 align-middle text-black dark:hidden [&>svg]:h-full [&>svg]:w-full"
          >
            {lightLogoNode}
          </span>
        )}
        {darkLogoSrc && (
          <img
            key={`${title}-dark-logo-img`}
            src={darkLogoSrc}
            alt={`${title} logo`}
            className="mr-3 hidden h-6 w-6 align-middle dark:inline-block"
            width="24"
            height="24"
          />
        )}
        {darkLogoNode && (
          <span
            key={`${title}-dark-logo-svg`}
            className="mr-3 hidden h-6 w-6 align-middle text-white dark:inline-block [&>svg]:h-full [&>svg]:w-full"
          >
            {darkLogoNode}
          </span>
        )}
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tools',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

// Define the inline SVG for Adobe's light mode logo
const AdobeLogoLight = () => (
  <svg
    width="91"
    height="80"
    viewBox="0 0 91 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_adobe_logo_uses_page_v2)">
      {' '}
      {/* Unique ID for clipPath */}
      <path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000" />
      <path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000" />
      <path
        d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z"
        fill="#EB1000"
      />
    </g>
    <defs>
      <clipPath id="clip0_adobe_logo_uses_page_v2">
        <rect width="90.4318" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

// Define the inline SVG for Procreate logo
const ProcreateLogo = () => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    {/* The <path fill="#fff" d="M0 0h512v512H0z"/> for white background is removed, 
        assuming page background is sufficient or handled by theme. 
        If a white box is needed behind the P in dark mode, it would need to be re-added 
        or handled differently. For now, this will render the P shape only. */}
    <path
      d="M263.4 79.4c-35.4 0-65.7 10.3-91 31s-38 49.7-38 87.3c0 31.7 9.7 58.3 29 80s45.7 32.3 78.4 32.3c16.3 0 32-3.3 47-10s27.6-16.3 37.6-29.6V381c0 13.3-4.2 24.3-12.5 33.3s-19.5 13.3-33.3 13.3c-11.3 0-21.5-2.7-30.3-8s-16-12.7-21.3-22.3l-45.2 22.6c12.6 25.3 30.8 44.8 54.6 58.3s50.8 20.3 81 20.3c34.3 0 63.2-10.2 86.6-30.6s35-48.8 35-85.3V110.3h-55.2v188.6c-6.3 9.7-14.2 17.3-23.6 23s-20 8.7-32 8.7c-19.7 0-35.2-6.8-46.6-20.6s-17-32.5-17-56.3c0-25.7 6.5-46.8 19.3-63.3s30-24.6 51.3-24.6c13.7 0 26.2 4.3 37.6 13.3s17 20.6 17 35.3v10h55V198c0-37.7-12.5-68.5-37.6-92.6S298.6 79.4 263.4 79.4zm0 54.6c19.3 0 34.5 6.7 45.2 20s16.3 31 16.3 53c0 22.3-5.3 39.8-16 52.6s-25.5 19.3-44.6 19.3s-35-6.7-46-20-16.2-31-16.2-53c0-22.3 5.5-39.8 16.3-52.6s25.6-19.3 45.2-19.3z"
      fill="currentColor"
    />
  </svg>
)

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="People always ask about my creative setup—everything from the gear I depend on to make art and design, to the apps that keep me (mostly) on track. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool
            title="iPhone 16 Pro Max"
            logo={{
              light: 'https://cdn.simpleicons.org/apple/000000',
              dark: 'https://cdn.simpleicons.org/apple/FFFFFF',
            }}
          >
            It always surprises people that I rely on a phone as my main
            workstation, The smaller form factor makes sense if you&apos;re
            focused on social media and it helps me keep designs concise and
            visually striking, exactly the way they&apos;ll appear in
            someone&apos;s feed. It&apos;s always within reach, so I&apos;m
            never far from inspiration-or a deadline.
          </Tool>
          <Tool
            title="iPad Pro 12.9” 5th Gen"
            logo={{
              light: 'https://cdn.simpleicons.org/apple/000000',
              dark: 'https://cdn.simpleicons.org/apple/FFFFFF',
            }}
          >
            For whenever I need more room to sketch or prototype. A paper-like
            screen protector helps it feel traditional, but I can keep adding
            layers and undo any mistakes without running out of space.
          </Tool>
          <Tool
            title="MacBook Air 2020"
            logo={{
              light: 'https://cdn.simpleicons.org/apple/000000',
              dark: 'https://cdn.simpleicons.org/apple/FFFFFF',
            }}
          >
            It might be a little dated, but it still handles everyday tasks like
            a champ and can even keep up with heavier design software when
            deadlines loom. Definitely a reminder that you don&apos;t always
            need the newest gear to get real work done.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Art & Design">
          <Tool
            title="Procreate"
            logo={{
              light:
                'https://logotic.me/system/assets/uploads/vector-files/procreate-black-1695680507-logotic-brand.svg?width=&height=100',
              dark: 'https://logotic.me/system/assets/uploads/vector-files/procreate-black-1695680507-logotic-brand.svg?width=&height=100',
            }}
          >
            My favorite tool for digital sketching and painting. I love that
            classic pen-on-paper vibe, and unlimited layers mean I can iterate
            without worrying about ruining a piece.
          </Tool>
          <Tool
            title="GoDaddy Studio"
            logo={{
              light: 'https://cdn.simpleicons.org/godaddy',
              dark: 'https://cdn.simpleicons.org/godaddy/FFFFFF',
            }}
          >
            A go-to for quick social media graphics or brand visuals. It saves
            me so much time when I have to churn out something polished on short
            notice.
          </Tool>
          <Tool
            title="Adobe Creative Cloud"
            logo={{
              light: <AdobeLogoLight />,
              dark: <AdobeLogoLight />,
            }}
          >
            Where I handle photo edits and vector work in one place. It keeps
            everything I need in sync and makes juggling different projects a
            little less chaotic.
          </Tool>
          <Tool
            title="Figma"
            logo={{
              light: 'https://svgl.app/library/figma.svg', // Keeps colored version for light
              dark: 'https://cdn.simpleicons.org/figma/FFFFFF',
            }}
          >
            Collaboration is key for many of my projects, so having a real-time,
            cloud-based space for feedback has been a game-changer. No more
            endless versions floating around in my inbox.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI">
          <Tool
            title="ChatGPT"
            logo={{
              light: 'https://svgl.app/library/openai.svg', // Keeps colored version for light
              dark: 'https://cdn.simpleicons.org/openai/FFFFFF',
            }}
          >
            I bounce ideas off it when I&apos;m stuck on a creative direction or
            need quick copy suggestions. It&apos;s like having a brainstorming
            buddy who&apos;s always on call.
          </Tool>
          <Tool
            title="Runway ML"
            logo={{
              light: 'https://svgl.app/library/runway.svg', // Keeps black version for light
              dark: 'https://svgl.app/library/runway.svg',
            }}
          >
            Video work can be a time sink, so any help with rotoscoping and
            background removal is a major win. I&apos;m always blown away by how
            much time I save now.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
