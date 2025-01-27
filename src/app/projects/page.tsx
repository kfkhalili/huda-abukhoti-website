import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoTrendOnSocial from '@/images/logos/trend-on-social.png'
import logoAlJisr from '@/images/logos/al-jisr-foundation.png'
import logoAzm from '@/images/logos/azm.png'
import logoJustHome from '@/images/logos/just-home.png'
import logoHalalAda from '@/images/logos/halal-ada.png'

const projects = [
  {
    name: 'Trend on Social',
    description:
      'Strategies, tips, and actionable insights to help content creators and designers create impactful social media content.',
    link: {
      href: 'https://www.instagram.com/trend_on_social/',
      label: 'instagram',
    },
    logo: logoTrendOnSocial,
  },
  {
    name: 'Al Jisr Foundation',
    description:
      'Social media strategy and content creation and planning, crafted for maximum engagement and societal impact.',
    link: {
      href: 'https://www.instagram.com/jisrfoundation/',
      label: 'instagram',
    },
    logo: logoAlJisr,
  },
  {
    name: 'Halal ADA',
    description: 'Typography and logo design, for a fintech crypto initiative.',
    link: {
      href: 'https://www.halalada.com',
      label: 'website',
    },
    logo: logoHalalAda,
  },
  {
    name: 'Azm Brand',
    description:
      "Created engaging and visually appealing social media content to reflect Azm's brand messaging to empower people with disabilities.",
    link: { href: 'https://www.instagram.com/azm.brand/', label: 'instagram' },
    logo: logoAzm,
  },
  {
    name: 'Justhome',
    description:
      'Comprehensive branding and design, from logo creation to website proposal, ensuring a standout identity in real estate.',
    link: { href: 'https://justhome.com', label: 'website' },
    logo: logoJustHome,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Creative collaboration to make an Impact.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Creative collaboration to make an Impact."
      intro="Over the years, I’ve contributed to numerous meaningful projects that aim to leave a positive mark on the world. These are some of the endeavors I’m most proud of—crafted with passion, collaboration, and purpose."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
