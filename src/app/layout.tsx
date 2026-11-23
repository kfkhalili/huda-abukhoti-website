import { type Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hudaabukhoti.com'),
  title: {
    template: '%s - Huda Abukhoti',
    default: 'Huda Abukhoti - Artist, Designer, and Storyteller.',
  },
  description:
    'I’m Huda, a Digital Marketing Consultant based in Munich. I’m the founder of Trend on Social, an experimental platform for insights on marketing and social media strategies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full antialiased',
        plexSans.variable,
        plexArabic.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-paper text-ink dark:bg-[#121110] dark:text-zinc-100">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
