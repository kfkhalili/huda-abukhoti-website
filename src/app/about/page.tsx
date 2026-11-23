import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  CalendarIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import illustrationFamily from '@/images/photos/photo-grid-9.jpg'
import illustrationGirl from '@/images/photos/photo-grid-1.png'
import illustrationSunbird from '@/images/photos/photo-grid-10.jpg'
import portraitImage from '@/images/portrait.jpg'

// The facts on this page come from Huda's CV (November 2026).

const numbers = [
  { value: '10+', label: 'years in design, marketing and engineering' },
  { value: '5', label: 'countries with freelance clients' },
  { value: '3', label: 'working languages: Arabic, English, German' },
  {
    value: '11',
    label: 'venues run on social media for the Sharjah Ladies Club',
  },
]

const experience = [
  {
    dates: '11/2026 – present',
    place: 'Munich',
    role: 'Co-Founder',
    company: 'Zallija',
    points: [
      'Browser studio for mathematical geometric art (zallija.com): users build patterns tile by tile, from scratch or from more than 180 historic monuments.',
      'Own the brand, visual identity and Instagram content for the launch.',
    ],
  },
  {
    dates: '01/2021 – present',
    place: 'Munich · registered freelancer',
    role: 'Graphic Designer & Digital Marketing Specialist',
    company: 'Self-employed',
    points: [
      'Brand and marketing work for organisations in the UAE, Oman, Germany, the UK and Canada, many of them in community development and social welfare.',
      'Create brand identities, logos and illustrations, and keep every channel consistent with them.',
      'Plan social media strategy end to end, from monthly content calendars to annual growth targets.',
      'Design and run paid social campaigns on Meta (Facebook and Instagram) for audiences in several regions.',
    ],
  },
  {
    dates: '08/2016 – 03/2020',
    place: 'Sharjah, UAE',
    role: 'Senior Marketing Executive',
    company: 'Sharjah Government, Sharjah Ladies Club',
    points: [
      'Ran social media for 11 facilities: strategy, content calendars, scheduling, community monitoring and monthly and annual reports.',
      'Produced posts and stories with photography, video and simple animation.',
      'Managed paid social and Google Ads campaigns, plus wider marketing campaigns.',
      'Named Spotlight Employee (2017).',
    ],
  },
  {
    dates: '04/2015 – 05/2016',
    place: 'Dubai, UAE',
    role: 'Design Engineer',
    company: 'Al Ghurair',
    points: [
      'Worked on facade engineering for landmarks including the Dubai Frame and the Bvlgari Resort Dubai, from concept drawings to site installation.',
    ],
  },
]

const expertise = [
  {
    title: 'Design',
    items:
      'Brand identity, logo design, illustration, Arabic and English layout, social media content, video and simple animation',
  },
  {
    title: 'Marketing',
    items:
      'Social media strategy, paid social (Meta), Google Ads, email marketing and newsletters, performance reporting, SEO basics',
  },
  {
    title: 'Responsible tech',
    items:
      'AI ethics, responsible AI, EU AI Act, EU Data Act, human-centered design, design thinking',
  },
]

const tools = [
  'Adobe Creative Cloud',
  'Figma',
  'Procreate',
  'Meta Ads Manager',
  'Google Ads',
]

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Native level' },
  { name: 'German', level: 'B2, professional' },
]

const education = [
  {
    dates: '10/2025 – 08/2027 (expected)',
    title: 'M.A. Responsibility in Science, Engineering and Technology (RESET)',
    school: 'Technical University of Munich (TUM)',
    note: 'Focus: AI ethics, EU AI Act, EU Data Act, human-centered design.',
  },
  {
    dates: '09/2009 – 06/2014',
    title: 'B.Sc. Architectural Engineering',
    school: 'University of Sharjah, UAE',
  },
]

const certifications = [
  {
    year: '2025',
    title: 'Google Digital Marketing & E-commerce Professional Certificate',
  },
  { year: '2025', title: 'Adobe Marketing Specialist' },
  { year: '2020', title: 'The Strategy of Content Marketing' },
  { year: '2020', title: 'Introduction to Search Engine Optimization' },
  { year: '2014', title: 'LEED Green Associate' },
  { year: '2014', title: 'Estidama Pearl Qualified Professional (PQP)' },
]

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function ContactLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className="border-b border-ink/15 dark:border-white/15">
      <Link
        href={href}
        className="group flex items-center gap-4 py-3.5 text-sm font-medium text-ink transition hover:text-accent-500 dark:text-zinc-200 dark:hover:text-accent-400"
      >
        <Icon className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-accent-500" />
        {children}
      </Link>
    </li>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">
      {children}
    </h2>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Graphic designer and digital marketer with more than ten years of work in the UAE and Germany, designing in Arabic and English.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <SectionHeading>About</SectionHeading>
          <h1 className="mt-5 text-5xl leading-none font-semibold tracking-[-0.045em] text-ink sm:text-7xl dark:text-zinc-100">
            Huda Abukhoti
          </h1>
          <p className="mt-5 text-xl font-medium text-ink dark:text-zinc-100">
            Graphic Designer &amp; Digital Marketer · M.A. student at TUM,
            Munich
          </p>
          <p className="mt-8 text-lg/8 text-zinc-600 dark:text-zinc-400">
            Graphic designer and digital marketer with more than ten years of
            work in the UAE and Germany. I build brand identities, social media
            strategies and paid campaigns, and I design in both Arabic and
            English. A degree in architectural engineering taught me to work in
            systems; my master’s at TUM adds AI ethics and EU regulation. I make
            complex ideas clear for the people who have to use them.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/schedule">Book a call</Button>
            <Button href="/projects" variant="secondary">
              See my work
            </Button>
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <Image
            src={portraitImage}
            alt="Portrait of Huda Abukhoti."
            sizes="(min-width: 1024px) 24rem, 100vw"
            placeholder="blur"
            preload
            className="aspect-[4/5] w-full rounded-3xl bg-zinc-100 object-cover grayscale dark:bg-zinc-800"
          />
          <ul
            role="list"
            className="mt-6 border-t border-ink/15 dark:border-white/15"
          >
            <ContactLink href="mailto:hudaabukhoti@gmail.com" icon={MailIcon}>
              hudaabukhoti@gmail.com
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/hudaabukhoti/"
              icon={LinkedInIcon}
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/trend_on_social/"
              icon={InstagramIcon}
            >
              Instagram
            </ContactLink>
            <ContactLink href="/schedule" icon={CalendarIcon}>
              Book a call
            </ContactLink>
          </ul>
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 sm:mt-24 lg:grid-cols-4 dark:bg-white/10">
        {numbers.map((item) => (
          <div
            key={item.label}
            className="flex flex-col bg-paper px-6 py-8 dark:bg-[#121110]"
          >
            <dt className="order-2 mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              {item.label}
            </dt>
            <dd className="order-1 text-5xl font-semibold tracking-[-0.04em] text-ink dark:text-zinc-100">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="experience" className="mt-24 sm:mt-32">
        <h2
          id="experience"
          className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-zinc-100"
        >
          Experience
        </h2>
        <ol
          role="list"
          className="mt-10 border-t border-ink/15 dark:border-white/15"
        >
          {experience.map((job) => (
            <li
              key={job.company + job.dates}
              className="grid gap-4 border-b border-ink/15 py-8 sm:grid-cols-12 sm:gap-8 dark:border-white/15"
            >
              <div className="text-sm text-zinc-500 sm:col-span-3 dark:text-zinc-400">
                <p className="font-medium text-ink tabular-nums dark:text-zinc-100">
                  {job.dates}
                </p>
                <p className="mt-1">{job.place}</p>
              </div>
              <div className="sm:col-span-9">
                <h3 className="text-xl font-semibold tracking-tight text-ink dark:text-zinc-100">
                  {job.role}
                </h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                  {job.company}
                </p>
                <ul
                  role="list"
                  className="mt-4 space-y-2 text-sm/6 text-zinc-600 dark:text-zinc-400"
                >
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1 w-1 flex-none rounded-full bg-accent-500 dark:bg-accent-400"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="expertise" className="mt-24 sm:mt-32">
        <h2
          id="expertise"
          className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-zinc-100"
        >
          Expertise
        </h2>
        <div className="mt-10 grid gap-x-8 gap-y-10 border-t border-ink/15 pt-10 sm:grid-cols-3 dark:border-white/15">
          {expertise.map((area) => (
            <div key={area.title}>
              <h3 className="font-semibold text-ink dark:text-zinc-100">
                {area.title}
              </h3>
              <p className="mt-3 text-sm/6 text-zinc-600 dark:text-zinc-400">
                {area.items}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <h3 className="font-semibold text-ink dark:text-zinc-100">Tools</h3>
            <ul role="list" className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full px-3.5 py-1.5 text-sm text-ink ring-1 ring-ink/15 dark:text-zinc-200 dark:ring-white/15"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-ink dark:text-zinc-100">
              Languages
            </h3>
            <dl className="mt-4 space-y-2 text-sm">
              {languages.map((language) => (
                <div key={language.name} className="flex justify-between gap-4">
                  <dt className="text-ink dark:text-zinc-100">
                    {language.name}
                  </dt>
                  <dd className="text-zinc-600 dark:text-zinc-400">
                    {language.level}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="mt-24 grid gap-16 sm:mt-32 lg:grid-cols-2 lg:gap-12">
        <section aria-labelledby="education">
          <h2
            id="education"
            className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-zinc-100"
          >
            Education
          </h2>
          <ul
            role="list"
            className="mt-10 border-t border-ink/15 dark:border-white/15"
          >
            {education.map((degree) => (
              <li
                key={degree.title}
                className="border-b border-ink/15 py-6 dark:border-white/15"
              >
                <p className="text-sm text-zinc-500 tabular-nums dark:text-zinc-400">
                  {degree.dates}
                </p>
                <h3 className="mt-2 font-semibold text-ink dark:text-zinc-100">
                  {degree.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {degree.school}
                </p>
                {degree.note && (
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {degree.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="certifications">
          <h2
            id="certifications"
            className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-zinc-100"
          >
            Certifications
          </h2>
          <ul
            role="list"
            className="mt-10 border-t border-ink/15 dark:border-white/15"
          >
            {certifications.map((certificate) => (
              <li
                key={certificate.title}
                className="flex gap-6 border-b border-ink/15 py-4 text-sm dark:border-white/15"
              >
                <span className="w-10 flex-none text-zinc-500 tabular-nums dark:text-zinc-400">
                  {certificate.year}
                </span>
                <span className="text-ink dark:text-zinc-100">
                  {certificate.title}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        aria-labelledby="outside-work"
        className="mt-24 grid gap-10 sm:mt-32 lg:grid-cols-12 lg:items-center lg:gap-12"
      >
        <div className="lg:col-span-5">
          <h2
            id="outside-work"
            className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-zinc-100"
          >
            Outside work
          </h2>
          <p className="mt-6 text-lg/8 text-zinc-600 dark:text-zinc-400">
            When I’m not working, I enjoy illustrating ink and watercolor
            pieces, blending creativity and craftsmanship to bring unique ideas
            to life.
          </p>
        </div>
        <ul role="list" className="grid grid-cols-3 gap-3 lg:col-span-7">
          {[
            {
              src: illustrationGirl,
              alt: 'Illustration of a girl in a striped dress, on peach.',
            },
            {
              src: illustrationFamily,
              alt: 'Illustration of a family reaching for a child, on red.',
            },
            {
              src: illustrationSunbird,
              alt: 'Illustration of a sunbird on a branch.',
            },
          ].map((illustration) => (
            <li key={illustration.alt} className="overflow-hidden rounded-2xl">
              <Image
                src={illustration.src}
                alt={illustration.alt}
                sizes="(min-width: 1024px) 13rem, 33vw"
                className="aspect-[4/5] w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}
