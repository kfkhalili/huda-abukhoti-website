import { useId } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { HeaderColour } from '@/components/HeaderColour'
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
  let { client, title, colour } = getCaseStudy(slug)
  let index = caseStudies.findIndex((item) => item.slug === slug)
  let next =
    caseStudies.length > 1
      ? caseStudies[(index + 1) % caseStudies.length]
      : null

  return (
    <>
      <article>
        <HeaderColour
          background={colour.background}
          foreground={colour.foreground}
        >
          <div
            className="-mt-16 pt-28 pb-16 sm:-mt-20 sm:pt-36 sm:pb-20"
            style={{
              backgroundColor: colour.background,
              color: colour.foreground,
            }}
          >
            <Container>
              <Link
                href="/projects"
                className="group -ml-1 inline-flex items-center text-sm font-medium opacity-75 transition hover:opacity-100"
              >
                <ArrowIcon className="mr-1 h-4 w-4 rotate-180 stroke-current" />
                All projects
              </Link>
              <header className="mt-8 max-w-3xl">
                <p className="text-sm font-medium opacity-75">{client}</p>
                <h1 className="mt-3 text-4xl leading-[1.02] font-semibold tracking-[-0.04em] sm:text-6xl">
                  {title}
                </h1>
                <p className="mt-6 text-lg opacity-85">{lead}</p>
              </header>
              <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-current/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm font-semibold">{fact.label}</dt>
                    <dd className="mt-1 text-sm opacity-80">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </div>
        </HeaderColour>
        <Container className="mt-16 sm:mt-24">
          <div className="space-y-20 sm:space-y-28">{children}</div>
        </Container>
      </article>
      <Container>
        <div className="mt-24 flex flex-col gap-12 border-t border-ink/10 pt-12 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-ink dark:text-zinc-100">
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
            <Link
              href={`/projects/${next.slug}`}
              className="group sm:text-right"
            >
              <span className="block text-sm text-zinc-500 dark:text-zinc-400">
                Next case study
              </span>
              <span className="mt-1 inline-flex items-center text-base font-semibold text-ink transition group-hover:text-accent-500 dark:text-zinc-100 dark:group-hover:text-accent-400">
                {next.title}
                <ArrowIcon className="ml-1 h-4 w-4 stroke-current" />
              </span>
            </Link>
          )}
        </div>
      </Container>
    </>
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
      className="font-medium underline decoration-current/40 underline-offset-4 transition hover:decoration-current"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
