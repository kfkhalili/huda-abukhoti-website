import Link from 'next/link'

import { ContainerWide } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-accent-500 dark:hover:text-accent-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerWide>
        <div className="flex flex-col gap-6 border-t border-ink/10 pt-10 pb-16 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Huda Abukhoti. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium text-ink dark:text-zinc-200">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/uses">Uses</NavLink>
            <NavLink href="https://www.linkedin.com/in/hudaabukhoti/">
              LinkedIn
            </NavLink>
            <NavLink href="https://www.instagram.com/trend_on_social">
              Instagram
            </NavLink>
          </div>
        </div>
      </ContainerWide>
    </footer>
  )
}
