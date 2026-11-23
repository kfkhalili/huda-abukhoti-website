'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { type CaseStudy } from '@/lib/caseStudies'

export type BookProject = CaseStudy & {
  background: string
  foreground: string
}

type Picture = { src: StaticImageData; alt: string }

type Page = {
  key: string
  label: string
  // Pages without colours follow the light or dark theme.
  background?: string
  foreground?: string
}

const INK = '#171615'
const WHITE = '#ffffff'
const COBALT = '#0047ab'

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

// A line of type that rises into place when the page opens.
function Rise({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <span className="inline-block overflow-hidden pb-[0.06em]">
      <span
        className="inline-block animate-rise motion-reduce:animate-none"
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  )
}

const pageClass =
  'relative w-full min-h-svh px-5 pt-24 pb-16 sm:px-10 lg:h-full lg:min-h-0 lg:w-screen lg:shrink-0 lg:px-12 lg:pt-28 lg:pb-24'

// The homepage reads like a book. On large screens, scrolling down turns the
// pages sideways. On phones the pages simply follow each other.
export function HomeBook({
  projects,
  posts,
  portrait,
  services,
  experience,
}: {
  projects: Array<BookProject>
  posts: Array<Picture>
  portrait: StaticImageData
  services: Array<{ name: string; description: string }>
  experience: Array<{ role: string; company: string; years: string }>
}) {
  let pages: Array<Page> = [
    { key: 'cover', label: 'Cover' },
    ...projects.map((project) => ({
      key: project.slug,
      label: project.client.split(',')[0],
      background: project.background,
      foreground: project.foreground,
    })),
    { key: 'posts', label: 'Posts' },
    { key: 'services', label: 'Services', background: INK, foreground: WHITE },
    { key: 'about', label: 'About' },
    {
      key: 'contact',
      label: 'Contact',
      background: COBALT,
      foreground: WHITE,
    },
  ]
  let count = pages.length

  let book = useRef<HTMLDivElement>(null)
  let strip = useRef<HTMLDivElement>(null)
  let sections = useRef<Array<HTMLElement | null>>([])
  let [current, setCurrent] = useState(0)

  let isHorizontal = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(min-width: 1024px)').matches

  let paintHeader = useCallback(
    (index: number, pinned: boolean) => {
      let root = document.documentElement.style
      let page = pages[index]
      if (pinned && page?.background && page.foreground) {
        root.setProperty('--page-bg', page.background)
        root.setProperty('--page-fg', page.foreground)
      } else {
        root.removeProperty('--page-bg')
        root.removeProperty('--page-fg')
      }
    },
    // The pages only change when the projects do.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [projects],
  )

  useEffect(() => {
    let frame = 0

    function update() {
      let bookElement = book.current
      let stripElement = strip.current
      if (!bookElement || !stripElement) return
      let box = bookElement.getBoundingClientRect()

      if (!isHorizontal()) {
        stripElement.style.transform = ''
        let middle = window.innerHeight / 2
        let index = 0
        sections.current.forEach((section, i) => {
          if (section && section.getBoundingClientRect().top <= middle)
            index = i
        })
        setCurrent(index)
        let section = sections.current[index]?.getBoundingClientRect()
        paintHeader(index, !!section && section.top <= 0 && section.bottom > 80)
        return
      }

      let travel = bookElement.offsetHeight - window.innerHeight
      let progress = Math.min(1, Math.max(0, -box.top / travel))
      let distance = stripElement.scrollWidth - window.innerWidth
      let x = progress * distance
      stripElement.style.transform = `translate3d(${(-x).toFixed(1)}px, 0, 0)`
      let exact = x / window.innerWidth
      sections.current.forEach((section, i) =>
        section?.style.setProperty('--shift', (i - exact).toFixed(3)),
      )
      let index = Math.round(exact)
      setCurrent(index)
      paintHeader(index, box.top <= 0 && box.bottom >= window.innerHeight)
    }

    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
      paintHeader(0, false)
    }
  }, [paintHeader])

  function jumpTo(index: number, smooth = true) {
    let bookElement = book.current
    if (!bookElement) return
    if (!isHorizontal()) {
      sections.current[index]?.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
      })
      return
    }
    let top = bookElement.getBoundingClientRect().top + window.scrollY
    let travel = bookElement.offsetHeight - window.innerHeight
    window.scrollTo({
      top: top + (travel * index) / (count - 1),
      behavior: smooth ? 'smooth' : 'auto',
    })
  }

  let theme = (page: Page) =>
    page.background
      ? { backgroundColor: page.background, color: page.foreground }
      : undefined

  let neutral = 'bg-paper text-ink dark:bg-[#121110] dark:text-zinc-100'
  let chapter = (index: number) => (
    <p className="text-sm tabular-nums opacity-70">
      Page {index + 1} of {count}
    </p>
  )

  return (
    <div
      ref={book}
      className="relative lg:h-[var(--book-height)]"
      style={{ '--book-height': `${count * 100}svh` } as React.CSSProperties}
    >
      <div className="lg:sticky lg:top-0 lg:h-svh lg:overflow-hidden">
        <div
          ref={strip}
          className="flex flex-col will-change-transform lg:h-full lg:flex-row"
        >
          {pages.map((page, index) => {
            let register = (element: HTMLElement | null) => {
              sections.current[index] = element
            }
            let onFocus = () => {
              if (isHorizontal() && index !== current) jumpTo(index, false)
            }

            if (page.key === 'cover') {
              return (
                <section
                  key={page.key}
                  ref={register}
                  onFocus={onFocus}
                  aria-label="Cover"
                  className={clsx(
                    pageClass.replace('lg:pt-28', 'lg:pt-24'),
                    neutral,
                    'flex flex-col justify-between gap-6',
                  )}
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
                    <h1 className="text-[15vw] leading-[0.86] font-semibold tracking-[-0.055em] lg:col-span-8 lg:text-[min(9.5vw,17svh)]">
                      <span className="flex items-center gap-[0.08em]">
                        <Rise>Huda</Rise>
                        <span className="inline-block h-[0.74em] w-[1.25em] shrink-0 animate-rise overflow-hidden rounded-full [animation-delay:150ms] motion-reduce:animate-none">
                          <Image
                            src={portrait}
                            alt=""
                            sizes="(min-width: 1024px) 14vw, 20vw"
                            preload
                            className="h-full w-full object-cover object-[50%_28%] grayscale"
                          />
                        </span>
                      </span>
                      <Rise delay={250}>Abukhoti</Rise>
                    </h1>
                    <div className="lg:col-span-4 lg:pb-[0.4vw]">
                      <p className="mb-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        <span
                          className="relative flex h-2 w-2"
                          aria-hidden="true"
                        >
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Open to new projects
                        <span className="font-normal text-zinc-500">
                          · Munich, Germany
                        </span>
                      </p>
                      <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Artist, Designer, and Storyteller.
                      </p>
                      <p className="mt-3 max-w-md text-zinc-600 dark:text-zinc-400">
                        Brand identity, brand guides and social media, in Arabic
                        and English.
                      </p>
                      <p className="mt-5 hidden items-center gap-2 text-sm text-zinc-500 lg:flex">
                        Scroll to turn the page
                        <ArrowIcon className="h-4 w-4" />
                      </p>
                    </div>
                  </div>

                  <nav aria-label="Selected work">
                    <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
                      Selected work
                    </p>
                    <ul
                      role="list"
                      className="mt-4 grid grid-cols-2 gap-3 border-t border-ink/15 pt-4 sm:grid-cols-4 lg:gap-4 dark:border-white/15"
                    >
                      {projects.map((item, i) => (
                        <li key={item.slug}>
                          <button
                            type="button"
                            onClick={() => jumpTo(i + 1)}
                            className="group block w-full text-left"
                          >
                            <span
                              className="block overflow-hidden rounded-xl"
                              style={{ backgroundColor: item.background }}
                            >
                              <Image
                                src={item.cover}
                                alt=""
                                sizes="(min-width: 1024px) 22vw, 50vw"
                                placeholder="blur"
                                className="aspect-[8/5] w-full object-cover transition duration-500 group-hover:scale-[1.04] lg:aspect-auto lg:h-[16svh]"
                              />
                            </span>
                            <span className="mt-2 flex items-baseline gap-2 text-sm">
                              <span className="text-zinc-500 tabular-nums">
                                {String(i + 2).padStart(2, '0')}
                              </span>
                              <span className="font-medium transition group-hover:text-accent-500 dark:group-hover:text-accent-400">
                                {item.title}
                              </span>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </section>
              )
            }

            let project = projects.find((item) => item.slug === page.key)
            if (project) {
              return (
                <section
                  key={page.key}
                  ref={register}
                  onFocus={onFocus}
                  aria-labelledby={`page-${page.key}`}
                  style={theme(page)}
                  className={clsx(
                    pageClass,
                    'grid items-center gap-8 lg:grid-cols-12 lg:gap-12',
                  )}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block overflow-hidden rounded-3xl lg:col-span-7"
                  >
                    <Image
                      src={project.cover}
                      alt=""
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      placeholder="blur"
                      className="aspect-[8/5] w-full object-cover transition-transform duration-150 ease-out"
                      style={{
                        transform:
                          'translateX(calc(var(--shift, 0) * -2%)) scale(1.05)',
                      }}
                    />
                  </Link>
                  <div className="lg:col-span-5">
                    {chapter(index)}
                    <h2
                      id={`page-${page.key}`}
                      className="mt-4 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-5xl xl:text-6xl"
                    >
                      {project.title}
                    </h2>
                    <p className="mt-5 max-w-md text-lg/8 opacity-80">
                      {project.summary}
                    </p>
                    <p className="mt-6 text-sm opacity-70">
                      {project.client} · {project.year}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-current transition hover:bg-[color:var(--fg)] hover:text-[color:var(--bg)]"
                      style={
                        {
                          '--fg': page.foreground,
                          '--bg': page.background,
                        } as React.CSSProperties
                      }
                    >
                      Read the case study
                      <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </section>
              )
            }

            if (page.key === 'posts') {
              return (
                <section
                  key={page.key}
                  ref={register}
                  onFocus={onFocus}
                  aria-labelledby="page-posts"
                  className={clsx(
                    pageClass,
                    'flex flex-col justify-center gap-8 bg-accent-50 text-ink dark:bg-[#1b1a18] dark:text-zinc-100',
                  )}
                >
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <h2
                      id="page-posts"
                      className="text-4xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-5xl xl:text-6xl"
                    >
                      Posts, packaging and illustration
                    </h2>
                    {chapter(index)}
                  </div>
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:gap-4"
                  >
                    {posts.map((post) => (
                      <li
                        key={post.src.src}
                        className="overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800"
                      >
                        <Image
                          src={post.src}
                          alt={post.alt}
                          sizes="(min-width: 640px) 20vw, 50vw"
                          className="aspect-square w-full object-cover lg:aspect-auto lg:h-[29svh]"
                        />
                      </li>
                    ))}
                  </ul>
                </section>
              )
            }

            if (page.key === 'services') {
              return (
                <section
                  key={page.key}
                  ref={register}
                  onFocus={onFocus}
                  aria-labelledby="page-services"
                  style={theme(page)}
                  className={clsx(pageClass, 'flex flex-col justify-center')}
                >
                  {chapter(index)}
                  <h2
                    id="page-services"
                    className="mt-4 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-5xl xl:text-6xl"
                  >
                    What I do
                  </h2>
                  <ul role="list" className="mt-10 border-t border-current/20">
                    {services.map((service, i) => (
                      <li
                        key={service.name}
                        className="grid grid-cols-12 items-baseline gap-x-6 gap-y-1 border-b border-current/20 py-5 lg:py-7"
                      >
                        <span className="col-span-2 text-sm tabular-nums opacity-60 sm:col-span-1">
                          ({String(i + 1).padStart(2, '0')})
                        </span>
                        <span className="col-span-10 text-2xl font-semibold tracking-tight sm:col-span-5 lg:text-4xl">
                          {service.name}
                        </span>
                        <span className="col-span-12 opacity-75 sm:col-span-6 lg:text-lg">
                          {service.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            }

            if (page.key === 'about') {
              return (
                <section
                  key={page.key}
                  ref={register}
                  onFocus={onFocus}
                  aria-labelledby="page-about"
                  className={clsx(
                    pageClass,
                    neutral,
                    'grid items-center gap-10 lg:grid-cols-12 lg:gap-12',
                  )}
                >
                  <div className="lg:col-span-4">
                    <Image
                      src={portrait}
                      alt="Portrait of Huda Abukhoti."
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      placeholder="blur"
                      className="aspect-[4/5] w-full rounded-3xl object-cover grayscale lg:aspect-auto lg:h-[62svh]"
                    />
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    {chapter(index)}
                    <h2
                      id="page-about"
                      className="mt-4 text-3xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-4xl xl:text-5xl"
                    >
                      I’m Huda Abukhoti. I live in Munich, where I drink coffee
                      and make art.
                    </h2>
                    <p className="mt-6 text-lg/8 text-zinc-600 lg:hidden dark:text-zinc-400 lg:[@media(min-height:860px)]:block">
                      Growing up, I always loved to draw and play around with
                      Photoshop. What started as a childhood passion turned into
                      a lifelong pursuit of creating compelling visual content —
                      from branding and logo design to typography and beyond.
                    </p>
                    <ul
                      role="list"
                      className="mt-8 border-t border-ink/15 text-sm dark:border-white/15"
                    >
                      {experience.map((item) => (
                        <li
                          key={item.company}
                          className="grid gap-1 border-b border-ink/15 py-3 sm:grid-cols-3 sm:gap-6 dark:border-white/15"
                        >
                          <span className="font-medium">{item.role}</span>
                          <span className="text-zinc-600 dark:text-zinc-400">
                            {item.company}
                          </span>
                          <span className="text-zinc-500 tabular-nums sm:text-right">
                            {item.years}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/about"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-medium transition hover:text-accent-500 dark:hover:text-accent-400"
                    >
                      More about me
                      <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </section>
              )
            }

            return (
              <section
                key={page.key}
                ref={register}
                onFocus={onFocus}
                aria-labelledby="page-contact"
                style={theme(page)}
                className={clsx(pageClass, 'flex flex-col justify-center')}
              >
                <p className="text-sm tabular-nums">
                  Page {index + 1} of {count}
                </p>
                <h2
                  id="page-contact"
                  className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl"
                >
                  Have a project or a role in mind?
                </h2>
                <a
                  href="mailto:hudaabukhoti@gmail.com"
                  className="mt-6 block text-[7vw] leading-none font-semibold tracking-[-0.045em] transition hover:opacity-75 lg:text-[6vw]"
                >
                  hudaabukhoti@gmail.com
                </a>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-accent-500 transition hover:bg-accent-50"
                  >
                    Book a call
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/hudaabukhoti/"
                    className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-current transition hover:bg-white hover:text-accent-500"
                  >
                    LinkedIn
                  </a>
                </div>
              </section>
            )
          })}
        </div>

        <nav
          aria-label="Pages"
          className={clsx(
            'pointer-events-none absolute inset-x-0 bottom-0 hidden gap-1 px-12 pb-8 transition-colors duration-500 lg:flex',
            !pages[current]?.foreground && 'text-ink dark:text-zinc-100',
          )}
          style={
            pages[current]?.foreground
              ? { color: pages[current].foreground }
              : undefined
          }
        >
          {pages.map((page, index) => (
            <button
              key={page.key}
              type="button"
              tabIndex={-1}
              onClick={() => jumpTo(index)}
              className="pointer-events-auto flex-1 text-left"
            >
              <span
                className={clsx(
                  'block h-0.5 rounded-full bg-current transition-opacity duration-500',
                  index <= current ? 'opacity-100' : 'opacity-20',
                )}
              />
              <span
                className={clsx(
                  'mt-2 block text-xs transition-opacity duration-500',
                  index === current ? 'opacity-100' : 'opacity-50',
                )}
              >
                {page.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
