import { useId } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { caseStudies, getCaseStudy } from '@/lib/caseStudies'

const imageStyles = 'ring-1 ring-zinc-900/5 dark:ring-white/10'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CaseStudyLayout({
  slug,
  lead,
  facts,
  children,
}: {
  slug: string
  lead: React.ReactNode
  facts: Array<{ label: string; value: React.ReactNode }>
  children: React.ReactNode
}) {
  let { client, title } = getCaseStudy(slug)
  let index = caseStudies.findIndex((item) => item.slug === slug)
  let next =
    caseStudies.length > 1
      ? caseStudies[(index + 1) % caseStudies.length]
      : null

  return (
    <Container className="mt-16 sm:mt-24">
      <article>
        <Link
          href="/projects"
          className="group -ml-1 inline-flex items-center text-sm font-medium text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
        >
          <ArrowIcon className="mr-1 h-4 w-4 rotate-180 stroke-current" />
          All projects
        </Link>
        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {client}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {title}
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            {lead}
          </p>
        </header>
        <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-zinc-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-700/40">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 space-y-20 sm:mt-16 sm:space-y-28">
          {children}
        </div>
      </article>
      <div className="mt-24 flex flex-col gap-12 border-t border-zinc-100 pt-12 sm:flex-row sm:items-end sm:justify-between dark:border-zinc-700/40">
        <div>
          <p className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Let’s make something clear.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/schedule">Book a call</Button>
            <Button href="mailto:hudaabukhoti@gmail.com" variant="secondary">
              Email me
            </Button>
          </div>
        </div>
        {next && (
          <Link href={`/projects/${next.slug}`} className="group sm:text-right">
            <span className="block text-sm text-zinc-500 dark:text-zinc-400">
              Next case study
            </span>
            <span className="mt-1 inline-flex items-center text-base font-semibold text-zinc-800 transition group-hover:text-teal-500 dark:text-zinc-100 dark:group-hover:text-teal-400">
              {next.title}
              <ArrowIcon className="ml-1 h-4 w-4 stroke-current" />
            </span>
          </Link>
        )}
      </div>
    </Container>
  )
}

export function CaseStudySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  let id = useId()

  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
      >
        {title}
      </h2>
      <div className="mt-6 space-y-10">{children}</div>
    </section>
  )
}

export function Text({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

export function Points({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  )
}

export function Point({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        {label}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    </div>
  )
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <figcaption className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
      {children}
    </figcaption>
  )
}

export function Figure({
  image,
  alt,
  caption,
  sizes = '(min-width: 1024px) 64rem, 100vw',
  preload = false,
}: {
  image: StaticImageData
  alt: string
  caption?: React.ReactNode
  sizes?: string
  preload?: boolean
}) {
  return (
    <figure>
      <Image
        src={image}
        alt={alt}
        sizes={sizes}
        preload={preload}
        placeholder="blur"
        className={clsx('w-full rounded-2xl', imageStyles)}
      />
      {caption && <Caption>{caption}</Caption>}
    </figure>
  )
}

export function FigureGrid({
  columns,
  children,
}: {
  columns: 2 | 3
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        'grid gap-x-6 gap-y-10 sm:grid-cols-2',
        columns === 3 && 'lg:grid-cols-3',
      )}
    >
      {children}
    </div>
  )
}

export function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition hover:text-teal-500 hover:decoration-teal-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:text-teal-400"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
