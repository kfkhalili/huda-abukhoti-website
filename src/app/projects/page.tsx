import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { caseStudies } from '@/lib/caseStudies'
import logoTrendOnSocial from '@/images/logos/trend-on-social.png'
import logoAlJisr from '@/images/logos/al-jisr-foundation.png'
import logoAzm from '@/images/logos/azm.png'
import logoHalalAda from '@/images/logos/halal-ada.png'

const moreProjects = [
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
      href: 'https://aljisrfoundation.org/en',
      label: 'website',
    },
    logo: logoAlJisr,
  },
  {
    name: 'Azm Brand',
    description:
      "Created engaging and visually appealing social media content to reflect Azm's brand messaging to empower people with disabilities.",
    link: { href: 'https://www.instagram.com/azm.brand/', label: 'instagram' },
    logo: logoAzm,
  },
  {
    name: 'Halal ADA',
    description:
      'Typography and logo design, plus a bilingual brand guide, for a fintech crypto initiative.',
    link: { href: '/projects/halal-ada', label: 'case study' },
    logo: logoHalalAda,
  },
]

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 8h10m0 0L9 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      <section aria-labelledby="case-studies">
        <h2
          id="case-studies"
          className="text-2xl font-semibold tracking-tight text-ink dark:text-zinc-100"
        >
          Case studies
        </h2>
        <ul
          role="list"
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2"
        >
          {caseStudies.map((caseStudy) => (
            <li key={caseStudy.slug} className="group relative">
              <div
                className="h-full rounded-3xl p-4 transition duration-500 group-hover:-translate-y-1 sm:p-5"
                style={{
                  backgroundColor: caseStudy.colour.background,
                  color: caseStudy.colour.foreground,
                }}
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={caseStudy.cover}
                    alt={caseStudy.coverAlt}
                    sizes="(min-width: 1024px) 30rem, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="aspect-[8/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 px-1">
                  <p className="text-sm opacity-75">{caseStudy.client}</p>
                  <p className="text-sm tabular-nums opacity-75">
                    {caseStudy.year}
                  </p>
                </div>
                <h3 className="mt-1 px-1 text-2xl font-semibold tracking-tight">
                  <Link href={`/projects/${caseStudy.slug}`}>
                    <span className="absolute inset-0 z-10" />
                    {caseStudy.title}
                  </Link>
                </h3>
                <p className="mt-3 px-1 pb-1 text-sm/6 opacity-80">
                  {caseStudy.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="more-work" className="mt-24 sm:mt-32">
        <h2
          id="more-work"
          className="text-2xl font-semibold tracking-tight text-ink dark:text-zinc-100"
        >
          More work
        </h2>
        <ul
          role="list"
          className="mt-10 border-t border-ink/15 dark:border-white/15"
        >
          {moreProjects.map((project) => (
            <li
              key={project.name}
              className="group relative grid grid-cols-[2.5rem_1fr] items-center gap-x-4 gap-y-2 border-b border-ink/15 py-5 sm:grid-cols-[2.5rem_14rem_1fr_auto] sm:gap-x-6 dark:border-white/15"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-ink/10 dark:bg-zinc-800 dark:ring-white/10">
                <Image
                  src={project.logo}
                  alt=""
                  sizes="2rem"
                  className="h-7 w-7"
                />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-ink dark:text-zinc-100">
                <Link href={project.link.href}>
                  <span className="absolute inset-0 z-10" />
                  {project.name}
                </Link>
              </h3>
              <p className="col-span-2 text-sm text-zinc-600 sm:col-span-1 dark:text-zinc-400">
                {project.description}
              </p>
              <span className="col-span-2 inline-flex items-center gap-2 text-sm font-medium text-ink transition group-hover:text-accent-500 sm:col-span-1 sm:justify-self-end dark:text-zinc-100 dark:group-hover:text-accent-400">
                {project.link.label}
                <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </SimpleLayout>
  )
}
