import { type StaticImageData } from 'next/image'

import { type BookProject, HomeBook } from '@/components/HomeBook'
import { caseStudies } from '@/lib/caseStudies'
import image1 from '@/images/photos/photo-grid-1.png'
import image2 from '@/images/photos/photo-grid-2.jpg'
import image3 from '@/images/photos/photo-grid-3.png'
import image4 from '@/images/photos/photo-grid-4.jpg'
import image5 from '@/images/photos/photo-grid-5.jpg'
import image6 from '@/images/photos/photo-grid-6.png'
import image7 from '@/images/photos/photo-grid-7.png'
import image8 from '@/images/photos/photo-grid-8.png'
import image9 from '@/images/photos/photo-grid-9-4x5.jpg'
import image10 from '@/images/photos/photo-grid-10.jpg'
import portrait from '@/images/portrait.jpg'

const projects: Array<BookProject> = caseStudies.map((caseStudy) => ({
  ...caseStudy,
  ...caseStudy.colour,
}))

const posts: Array<{ src: StaticImageData; alt: string }> = [
  { src: image1, alt: 'Illustration of a girl in a striped dress, on peach.' },
  {
    src: image2,
    alt: 'World Children’s Day post in Arabic and English for Al Jisr Foundation.',
  },
  { src: image3, alt: 'Al Basma Foundation post titled What we fund.' },
  { src: image4, alt: 'The Justhome J icon on a phone screen.' },
  { src: image5, alt: 'Packaging for Little Forest drip coffee bags.' },
  { src: image6, alt: 'Al Basma Foundation post titled Who we are.' },
  { src: image7, alt: 'The Azm logo in Arabic and English.' },
  { src: image8, alt: 'Ramadan Mubarak post for Al Jisr Foundation.' },
  {
    src: image9,
    alt: 'Illustration of a family reaching for a child, on red.',
  },
  { src: image10, alt: 'Illustration of a sunbird on a branch.' },
]

const services = [
  {
    name: 'Brand identity',
    description: 'Logo, colour and type.',
  },
  {
    name: 'Brand guides',
    description: 'Rules and templates so a team can use the brand.',
  },
  {
    name: 'Social media design',
    description: 'Post, carousel and story systems.',
  },
  {
    name: 'Social media strategy',
    description: 'Planning and content for foundations and brands.',
  },
]

// The same roles as the About page, taken from Huda's CV.
const experience = [
  { role: 'Co-Founder', company: 'Zallija', years: '2026 – now' },
  {
    role: 'Graphic Designer & Digital Marketing Specialist',
    company: 'Self-employed',
    years: '2021 – now',
  },
  {
    role: 'Senior Marketing Executive',
    company: 'Sharjah Government, UAE',
    years: '2016 – 2020',
  },
  {
    role: 'Design Engineer',
    company: 'Al Ghurair, Dubai',
    years: '2015 – 2016',
  },
]

export default function Home() {
  return (
    <HomeBook
      projects={projects}
      posts={posts}
      portrait={portrait}
      services={services}
      experience={experience}
    />
  )
}
